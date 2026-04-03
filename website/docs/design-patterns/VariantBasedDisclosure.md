---
sidebar_position: 55
title: Variant-based Disclosure
---

import Disclaimer from '../\_disclaimer.mdx';

<Disclaimer />

:::note Terminology Note
This guidance describes a variant-based approach where different actors receive different complete documents (Digital Product Passports, Digital Facility Records) based on their access role. This is distinct from cryptographic selective disclosure mechanisms in the W3C Verifiable Credentials ecosystem (such as BBS+ signatures or SD-JWT), which enable selective disclosure within a single credential using cryptographic techniques. The UNTP approach uses Identity Resolver routing and role-based access control rather than cryptographic selective disclosure.
:::

Variant-based disclosure extends UNTP [Digital Product Passports](../specification/DigitalProductPassport.md) (DPP) and [Digital Facility Records](../specification/DigitalFacilityRecord.md) (DFR) to support variant-based disclosure at the individual claim level. This enables different actors in the value chain to access different subsets of credential information based on their role, while maintaining a standards-based approach with minimal complexity.

Variant-based disclosure builds on the existing UNTP [Decentralised Access Control](../specification/DecentralisedAccessControl.md) pattern and enables granularity at the claim level rather than the entire credential level.

## Challenges

The UNTP [Decentralised Access Control](../specification/DecentralisedAccessControl.md) specification operates at the entire credential payload level — a party either has access to a credential or they don't. In practice, different actors need access to different claim-level information within the same credential:

### Digital Product Passport use cases

- **Public claims** (e.g., recycling instructions) available to all stakeholders
- **Customer-specific claims** (e.g., warranty information) available only to product purchasers
- **Regulatory claims** (e.g., detailed emissions data) available only to competent authorities
- **Recycler claims** (e.g., hazardous material details) available only to accredited recycling facilities

### Digital Facility Record use cases

- **Public claims** (e.g., facility location, basic certifications) available to all stakeholders
- **Customer-specific** claims (e.g., capacity, lead times) available only to business partners
- **Regulatory claims** (e.g., worker safety records, environmental compliance) available only to competent authorities
- **Audit claims** (e.g., detailed sustainability metrics) available only to authorized auditors

## Design Principles

- **Minimal Changes**: Extend existing structures rather than introduce new patterns
- **Backwards Compatible**: Existing credential verifiers continue to work
- **Resolver-Centric**: [Identity Resolver](../specification/IdentityResolver.md) handles routing; credentials remain static blobs
- **Discoverability**: Users can see what additional data exists and how to access it
- **Standards-Aligned**: Builds on existing UNTP link types and access control patterns
- **Credential Agnostic**: Same pattern works for [DPP](../specification/DigitalProductPassport.md), [DFR](../specification/DigitalFacilityRecord.md), and future UNTP credentials

## Conceptual Model

The variant-based disclosure model introduces document variants that enable role-based access to claims while maintaining discoverability through the [Identity Resolver](../specification/IdentityResolver.md).

### Architecture Flow

1. **[Identity Resolver](../specification/IdentityResolver.md)** receives a query with an optional `accessRole` parameter
2. Based on the `accessRole`, the resolver returns a linkset containing the appropriate document variant(s)
3. Each **document variant** is a complete, valid credential containing:
   - **Basic claims** accessible to the specified role
   - **Claim stubs** (without `declaredValue`) indicating claims available in other variants
   - **`otherVariants` metadata** listing other available access roles

### Example Variant Structure

**Public Variant:**

- Contains basic claims accessible to all stakeholders
- Includes claim stubs for restricted claims (emissions, warranty, hazmat)
- Lists other available variants (Customer, Regulator, Recycler)

**Regulator Variant:**

- Contains basic claims plus regulatory-specific claims (emissions data, supply chain provenance)
- Includes claim stubs for role-specific claims (warranty for Customers, hazmat for Recyclers)
- Lists other available variants for discovery

### Key Concepts

- **Document Variant**: A complete, valid credential containing a subset of claims for a specific access role
- **Claim Stub**: A claim entry without `declaredValue`, indicating the claim exists in another variant
- **`otherVariants`**: Metadata property listing other available document variants
- **`accessRole`**: Query parameter and property indicating required access level
- **[Identity Resolver](../specification/IdentityResolver.md)**: Routes requests to appropriate variant based on access role

## Requirements

| ID    | Name                     | Requirement Statement                                                                                                                                    | Solution Mapping                                                                        |
| ----- | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| VD-01 | Claim-level granularity  | Different actors SHALL be able to access different claims within the same credential based on their role                                                 | Multiple document variants with different claims                                        |
| VD-02 | Variant discovery        | A credential recipient SHALL be able to discover that other variants exist for different access roles                                                    | `otherVariants` property in credential subject                                          |
| VD-03 | Claim discovery          | A credential recipient SHALL be able to see which specific claims exist in other variants                                                                | Claim stubs in claims array                                                             |
| VD-04 | Role-based routing       | [Identity Resolver](../specification/IdentityResolver.md) SHALL route requests to appropriate document variant based on `accessRole` parameter           | Enhanced Identity Resolver query parameter                                              |
| VD-05 | Credential type agnostic | Solution SHALL work for both [DPP](../specification/DigitalProductPassport.md) and [DFR](../specification/DigitalFacilityRecord.md) without modification | Generic pattern applicable to any credential with claims                                |
| VD-06 | Backwards compatibility  | Existing credential verifiers MUST continue to function without modification                                                                             | Extensions are optional; base structures unchanged                                      |
| VD-07 | Minimal complexity       | Solution SHALL NOT require cryptographic selective disclosure or complex application logic                                                               | Uses static files and [Identity Resolver](../specification/IdentityResolver.md) routing |
| VD-08 | Access indication        | Each claim or variant SHALL clearly indicate which access role is required                                                                               | `accessRole` property on claims and variants                                            |

## Specification

The following extensions to UNTP credentials, [Identity Resolver](../specification/IdentityResolver.md), and related specifications are defined:

### Extension 1: Identity Resolver Query Parameter

The [Identity Resolver](../specification/IdentityResolver.md) SHALL support an optional `accessRole` query parameter for both product and facility identifiers:

```
GET /01/{productId}?accessRole={roleURI}
GET /99/{facilityId}?accessRole={roleURI}
```

**Without `accessRole` parameter:**

Resolver returns linkset with all available document variants, allowing discovery.

**With `accessRole` parameter:**

Resolver returns linkset with only the document variant(s) matching that role.

### Extension 2: Credential Variant Metadata

Add an optional `otherVariants` property to the credential subject (`ProductPassport` or `FacilityRecord`) to indicate other document variants are available:

```json
{
  "credentialSubject": {
    "type": ["ProductPassport"],
    "id": "https://example.com/products/90664869327",
    "otherVariants": [
      {
        "accessRole": ["untp:accessRole#Customer"]
      },
      {
        "accessRole": ["untp:accessRole#Regulator"]
      }
    ],
    "product": {...},
    "conformityClaim": [...]
  }
}
```

Or for a facility:

```json
{
  "credentialSubject": {
    "type": ["FacilityRecord"],
    "id": "https://example.com/facilities/F123456",
    "otherVariants": [
      {
        "accessRole": ["untp:accessRole#Customer"]
      },
      {
        "accessRole": ["untp:accessRole#Auditor"]
      }
    ],
    "facility": {...},
    "conformityClaim": [...]
  }
}
```

**Properties:**

- **`otherVariants`** (OPTIONAL): Array of objects indicating other document variants exist
- **`accessRole`** (REQUIRED): Array of URIs indicating which role can access the variant

### Extension 3: Claim Stubs for Discovery

A claim in the claims array (e.g., `conformityClaim`, `sustainabilityClaim`) MAY be a stub indicating the claim exists in another variant but is not included in the current credential.

A claim stub is distinguished by the absence of the `declaredValue` property combined with the presence of an `accessRole` property.

```json
{
  "conformityClaim": [
    {
      "id": "https://example.com/claims/emissions-001",
      "conformityTopic": "environment.emissions",
      "description": "Carbon footprint assessment",
      "accessRole": ["untp:accessRole#Regulator"]
    }
  ]
}
```

**Claim Stub Properties:**

- **`id`** (REQUIRED): Unique identifier for the claim
- **`conformityTopic`** (REQUIRED): Classification of the claim
- **`description`** (OPTIONAL): Human-readable description
- **`accessRole`** (REQUIRED for stubs): Array of URIs indicating required access level
- **`declaredValue`** (ABSENT): No value data; this is the key indicator it's a stub

**Full Claim Properties:**

Same as stub, PLUS:

- **`declaredValue`** (REQUIRED): Array of metric values
- **`accessRole`** (OPTIONAL): If present, indicates this claim has access restrictions

## Implementation Guidance

The following examples demonstrate variant-based disclosure for both [Digital Product Passports](../specification/DigitalProductPassport.md) and [Digital Facility Records](../specification/DigitalFacilityRecord.md).

### Identity Resolver Behavior

The [Identity Resolver](../specification/IdentityResolver.md) behavior is identical for both product and facility identifiers.

#### Scenario 1: Query Without Access Role

**Request (Product):**

```http
GET /01/90664869327
Host: resolver.example.com
```

**Request (Facility):**

```http
GET /99/F123456
Host: resolver.example.com
```

**Response (Product):**

```json
{
  "linkset": [
    {
      "anchor": "https://resolver.example.com/01/90664869327",
      "https://vocabulary.uncefact.org/untp/linkType#digitalProductPassport": [
        {
          "href": "https://files.example.com/dpp/90664869327-public.json",
          "accessRole": ["untp:accessRole#Anonymous"]
        },
        {
          "href": "https://files.example.com/dpp/90664869327-customer.json",
          "accessRole": ["untp:accessRole#Customer"]
        },
        {
          "href": "https://files.example.com/dpp/90664869327-regulator.json",
          "accessRole": ["untp:accessRole#Regulator"]
        }
      ]
    }
  ]
}
```

**Response (Facility):**

```json
{
  "linkset": [
    {
      "anchor": "https://resolver.example.com/99/F123456",
      "https://vocabulary.uncefact.org/untp/linkType#digitalFacilityRecord": [
        {
          "href": "https://files.example.com/dfr/F123456-public.json",
          "accessRole": ["untp:accessRole#Anonymous"]
        },
        {
          "href": "https://files.example.com/dfr/F123456-customer.json",
          "accessRole": ["untp:accessRole#Customer"]
        },
        {
          "href": "https://files.example.com/dfr/F123456-auditor.json",
          "accessRole": ["untp:accessRole#Auditor"]
        }
      ]
    }
  ]
}
```

The resolver returns all available variants, allowing the requestor to discover what access levels exist.

#### Scenario 2: Query With Access Role

**Request (Product):**

```http
GET /01/90664869327?accessRole=untp:accessRole%23Customer
Host: resolver.example.com
```

**Request (Facility):**

```http
GET /99/F123456?accessRole=untp:accessRole%23Auditor
Host: resolver.example.com
```

**Response (Product):**

```json
{
  "linkset": [
    {
      "anchor": "https://resolver.example.com/01/90664869327",
      "https://vocabulary.uncefact.org/untp/linkType#digitalProductPassport": [
        {
          "href": "https://files.example.com/dpp/90664869327-customer.json",
          "accessRole": ["untp:accessRole#Customer"]
        }
      ]
    }
  ]
}
```

**Response (Facility):**

```json
{
  "linkset": [
    {
      "anchor": "https://resolver.example.com/99/F123456",
      "https://vocabulary.uncefact.org/untp/linkType#digitalFacilityRecord": [
        {
          "href": "https://files.example.com/dfr/F123456-auditor.json",
          "accessRole": ["untp:accessRole#Auditor"]
        }
      ]
    }
  ]
}
```

The resolver returns only the variant(s) matching the requested access role.

### Credential Structure Examples

The following examples demonstrate variant-based disclosure for both [Digital Product Passports](../specification/DigitalProductPassport.md) and [Digital Facility Records](../specification/DigitalFacilityRecord.md).

## Digital Product Passport Examples

### Example DPP-1: Public Variant

The public variant contains only claims with `accessRole#Anonymous` or no access restrictions. It includes:

- Full claims for public data
- `otherVariants` array showing other access levels exist
- Claim stubs for restricted claims

```json
{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://test.uncefact.org/vocabulary/untp/dpp/0.7.0/"
  ],
  "type": ["DigitalProductPassport", "VerifiableCredential"],
  "issuer": {
    "id": "did:web:manufacturer.example.com",
    "name": "Battery Manufacturer Inc"
  },
  "credentialSubject": {
    "type": ["ProductPassport"],
    "id": "https://example.com/products/90664869327",

    "otherVariants": [
      {
        "accessRole": ["untp:accessRole#Customer"]
      },
      {
        "accessRole": ["untp:accessRole#Regulator"]
      },
      {
        "accessRole": ["untp:accessRole#Recycler"]
      }
    ],

    "product": {
      "id": "https://example.com/products/90664869327",
      "name": "Lithium Battery Pack",
      "registeredId": "90664869327",
      "description": "High-capacity lithium battery for electric vehicles"
    },

    "conformityClaim": [
      {
        "id": "https://example.com/claims/recycling-001",
        "conformityTopic": "environment.recycling",
        "description": "Recycling instructions and material composition",
        "declaredValue": [
          {
            "metricName": "Recyclable Content",
            "metricValue": {
              "value": 95,
              "unit": "P1"
            }
          }
        ],
        "conformityEvidence": {
          "type": ["Link"],
          "linkURL": "https://example.com/recycling-instructions.pdf",
          "linkType": "https://vocabulary.uncefact.org/untp/linkType#instruction"
        }
      },
      {
        "id": "https://example.com/claims/emissions-001",
        "conformityTopic": "environment.emissions",
        "description": "Carbon footprint assessment per GBA Rulebook",
        "accessRole": ["untp:accessRole#Regulator"]
      },
      {
        "id": "https://example.com/claims/warranty-001",
        "conformityTopic": "governance.warranty",
        "description": "Product warranty terms and conditions",
        "accessRole": ["untp:accessRole#Customer"]
      },
      {
        "id": "https://example.com/claims/hazmat-001",
        "conformityTopic": "environment.hazmat",
        "description": "Hazardous materials declaration for safe recycling",
        "accessRole": ["untp:accessRole#Recycler"]
      }
    ],

    "circularityScorecard": {
      "recyclableContent": 0.95,
      "recycledContent": 0.3
    }
  }
}
```

**Key Points:**

- Contains 1 full claim (recycling)
- Contains 3 claim stubs (emissions, warranty, hazmat)
- `otherVariants` shows 3 additional access levels exist
- Verifiers can display: "Additional information available for Customers, Regulators, and Recyclers"

### Example DPP-2: Customer Variant

The customer variant adds warranty information to the public claims:

```json
{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://test.uncefact.org/vocabulary/untp/dpp/0.7.0/"
  ],
  "type": ["DigitalProductPassport", "VerifiableCredential"],
  "issuer": {
    "id": "did:web:manufacturer.example.com",
    "name": "Battery Manufacturer Inc"
  },
  "credentialSubject": {
    "type": ["ProductPassport"],
    "id": "https://example.com/products/90664869327",

    "otherVariants": [
      {
        "accessRole": ["untp:accessRole#Anonymous"]
      },
      {
        "accessRole": ["untp:accessRole#Regulator"]
      },
      {
        "accessRole": ["untp:accessRole#Recycler"]
      }
    ],

    "product": {
      "id": "https://example.com/products/90664869327",
      "name": "Lithium Battery Pack",
      "registeredId": "90664869327",
      "description": "High-capacity lithium battery for electric vehicles"
    },

    "conformityClaim": [
      {
        "id": "https://example.com/claims/recycling-001",
        "conformityTopic": "environment.recycling",
        "description": "Recycling instructions and material composition",
        "declaredValue": [
          {
            "metricName": "Recyclable Content",
            "metricValue": {
              "value": 95,
              "unit": "P1"
            }
          }
        ]
      },
      {
        "id": "https://example.com/claims/warranty-001",
        "conformityTopic": "governance.warranty",
        "description": "Product warranty terms and conditions",
        "declaredValue": [
          {
            "metricName": "Warranty Period",
            "metricValue": {
              "value": 5,
              "unit": "ANN"
            }
          },
          {
            "metricName": "Warranty Coverage",
            "metricValue": {
              "value": 100000,
              "unit": "KMT"
            }
          }
        ],
        "conformityEvidence": {
          "type": ["Link"],
          "linkURL": "https://example.com/warranty-certificate.pdf",
          "linkType": "https://vocabulary.uncefact.org/untp/linkType#certification"
        }
      },
      {
        "id": "https://example.com/claims/emissions-001",
        "conformityTopic": "environment.emissions",
        "description": "Carbon footprint assessment per GBA Rulebook",
        "accessRole": ["untp:accessRole#Regulator"]
      },
      {
        "id": "https://example.com/claims/hazmat-001",
        "conformityTopic": "environment.hazmat",
        "description": "Hazardous materials declaration for safe recycling",
        "accessRole": ["untp:accessRole#Recycler"]
      }
    ],

    "circularityScorecard": {
      "recyclableContent": 0.95,
      "recycledContent": 0.3
    }
  }
}
```

**Key Points:**

- Contains 2 full claims (recycling + warranty)
- Contains 2 claim stubs (emissions, hazmat)
- Customer sees warranty data that public users don't
- Still advertises other variants exist

### Example DPP-3: Regulator Variant

The regulator variant includes detailed emissions and supply chain data:

```json
{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://test.uncefact.org/vocabulary/untp/dpp/0.7.0/"
  ],
  "type": ["DigitalProductPassport", "VerifiableCredential"],
  "issuer": {
    "id": "did:web:manufacturer.example.com",
    "name": "Battery Manufacturer Inc"
  },
  "credentialSubject": {
    "type": ["ProductPassport"],
    "id": "https://example.com/products/90664869327",

    "otherVariants": [
      {
        "accessRole": ["untp:accessRole#Anonymous"]
      },
      {
        "accessRole": ["untp:accessRole#Customer"]
      },
      {
        "accessRole": ["untp:accessRole#Recycler"]
      }
    ],

    "product": {
      "id": "https://example.com/products/90664869327",
      "name": "Lithium Battery Pack",
      "registeredId": "90664869327",
      "description": "High-capacity lithium battery for electric vehicles"
    },

    "conformityClaim": [
      {
        "id": "https://example.com/claims/recycling-001",
        "conformityTopic": "environment.recycling",
        "description": "Recycling instructions and material composition",
        "declaredValue": [
          {
            "metricName": "Recyclable Content",
            "metricValue": {
              "value": 95,
              "unit": "P1"
            }
          }
        ]
      },
      {
        "id": "https://example.com/claims/emissions-001",
        "conformityTopic": "environment.emissions",
        "description": "Carbon footprint assessment per GBA Rulebook",
        "referenceStandard": {
          "type": ["Standard"],
          "id": "https://www.globalbattery.org/media/publications/gba-rulebook-v2.0-master.pdf",
          "name": "GBA Battery Passport Greenhouse Gas Rulebook - V.2.0"
        },
        "declaredValue": [
          {
            "metricName": "GHG Emissions Intensity",
            "metricValue": {
              "value": 12.5,
              "unit": "KGM"
            },
            "accuracy": 0.05
          }
        ],
        "conformityEvidence": {
          "type": ["SecureLink", "Link"],
          "linkURL": "https://example.com/evidence/emissions-attestation.json",
          "linkType": "https://vocabulary.uncefact.org/untp/linkType#dcc",
          "hashDigest": "6239119dda5bd4c8a6ffb832fe16feaa5c27b7dba154d24c53d4470a2c69adc2",
          "hashMethod": "SHA-256"
        }
      },
      {
        "id": "https://example.com/claims/provenance-001",
        "conformityTopic": "materials.provenance",
        "description": "Supply chain due diligence and material origins",
        "declaredValue": [
          {
            "metricName": "Primary Sourced Data Ratio",
            "metricValue": {
              "value": 0.85,
              "unit": "P1"
            }
          }
        ]
      },
      {
        "id": "https://example.com/claims/warranty-001",
        "conformityTopic": "governance.warranty",
        "description": "Product warranty terms and conditions",
        "accessRole": ["untp:accessRole#Customer"]
      },
      {
        "id": "https://example.com/claims/hazmat-001",
        "conformityTopic": "environment.hazmat",
        "description": "Hazardous materials declaration for safe recycling",
        "accessRole": ["untp:accessRole#Recycler"]
      }
    ],

    "emissionsScorecard": {
      "carbonFootprint": 12.5,
      "declaredUnit": "KGM",
      "operationalScope": "CradleToGate",
      "primarySourcedRatio": 0.85
    },

    "circularityScorecard": {
      "recyclableContent": 0.95,
      "recycledContent": 0.3
    }
  }
}
```

**Key Points:**

- Contains 3 full claims (recycling + emissions + provenance)
- Contains 2 claim stubs (warranty, hazmat)
- Includes detailed emissions scorecard
- Regulators see supply chain data that others don't

## Digital Facility Record Examples

### Example DFR-1: Public Variant

The public variant contains basic facility information available to all stakeholders:

```json
{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://test.uncefact.org/vocabulary/untp/dfr/0.7.0/"
  ],
  "type": ["DigitalFacilityRecord", "VerifiableCredential"],
  "issuer": {
    "id": "did:web:facility.example.com",
    "name": "Battery Manufacturing Facility"
  },
  "credentialSubject": {
    "type": ["FacilityRecord"],
    "id": "https://example.com/facilities/F123456",

    "otherVariants": [
      {
        "accessRole": ["untp:accessRole#Customer"]
      },
      {
        "accessRole": ["untp:accessRole#Auditor"]
      },
      {
        "accessRole": ["untp:accessRole#Regulator"]
      }
    ],

    "facility": {
      "id": "https://example.com/facilities/F123456",
      "name": "Battery Cell Manufacturing Plant",
      "registeredId": "F123456",
      "description": "High-capacity lithium battery cell production facility",
      "location": {
        "address": "123 Industrial Blvd, Manufacturing District",
        "countryCode": "CN",
        "geoCoordinates": {
          "latitude": 31.2304,
          "longitude": 121.4737
        }
      },
      "operatedBy": {
        "id": "https://business.gov.cn/12345678",
        "name": "Battery Manufacturer Inc"
      }
    },

    "conformityClaim": [
      {
        "id": "https://example.com/facilities/F123456/claims/iso-14001",
        "conformityTopic": "environment.management",
        "description": "ISO 14001 Environmental Management certification",
        "declaredValue": [
          {
            "metricName": "Certification Status",
            "metricValue": {
              "value": "Active",
              "unit": "text"
            }
          }
        ],
        "conformityEvidence": {
          "type": ["Link"],
          "linkURL": "https://example.com/certs/iso-14001.pdf",
          "linkType": "https://vocabulary.uncefact.org/untp/linkType#certification"
        }
      },
      {
        "id": "https://example.com/facilities/F123456/claims/capacity",
        "conformityTopic": "production.capacity",
        "description": "Annual production capacity and lead times",
        "accessRole": ["untp:accessRole#Customer"]
      },
      {
        "id": "https://example.com/facilities/F123456/claims/safety",
        "conformityTopic": "governance.safety",
        "description": "Worker safety records and incident reports",
        "accessRole": ["untp:accessRole#Regulator"]
      },
      {
        "id": "https://example.com/facilities/F123456/claims/sustainability",
        "conformityTopic": "environment.sustainability",
        "description": "Detailed sustainability metrics and targets",
        "accessRole": ["untp:accessRole#Auditor"]
      }
    ]
  }
}
```

**Key Points:**

- Contains 1 full claim (ISO 14001 certification)
- Contains 3 claim stubs (capacity, safety, sustainability)
- `otherVariants` shows 3 additional access levels exist
- Public can see location and basic certifications
- Facility contact information available to all

### Example DFR-2: Customer Variant

The customer variant adds business-relevant operational information:

```json
{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://test.uncefact.org/vocabulary/untp/dfr/0.7.0/"
  ],
  "type": ["DigitalFacilityRecord", "VerifiableCredential"],
  "issuer": {
    "id": "did:web:facility.example.com",
    "name": "Battery Manufacturing Facility"
  },
  "credentialSubject": {
    "type": ["FacilityRecord"],
    "id": "https://example.com/facilities/F123456",

    "otherVariants": [
      {
        "accessRole": ["untp:accessRole#Anonymous"]
      },
      {
        "accessRole": ["untp:accessRole#Auditor"]
      },
      {
        "accessRole": ["untp:accessRole#Regulator"]
      }
    ],
    "facility": {
      "id": "https://example.com/facilities/F123456",
      "name": "Battery Cell Manufacturing Plant",
      "registeredId": "F123456",
      "description": "High-capacity lithium battery cell production facility",
      "location": {
        "address": "123 Industrial Blvd, Manufacturing District",
        "countryCode": "CN",
        "geoCoordinates": {
          "latitude": 31.2304,
          "longitude": 121.4737
        }
      }
    },
    "conformityClaim": [
      {
        "id": "https://example.com/facilities/F123456/claims/iso-14001",
        "conformityTopic": "environment.management",
        "description": "ISO 14001 Environmental Management certification",
        "declaredValue": [
          {
            "metricName": "Certification Status",
            "metricValue": {
              "value": "Active",
              "unit": "text"
            }
          }
        ]
      },
      {
        "id": "https://example.com/facilities/F123456/claims/capacity",
        "conformityTopic": "production.capacity",
        "description": "Annual production capacity and lead times",
        "declaredValue": [
          {
            "metricName": "Annual Capacity",
            "metricValue": {
              "value": 5000000,
              "unit": "H87"
            }
          },
          {
            "metricName": "Lead Time",
            "metricValue": {
              "value": 12,
              "unit": "WEE"
            }
          },
          {
            "metricName": "Utilization Rate",
            "metricValue": {
              "value": 85,
              "unit": "P1"
            }
          }
        ]
      },
      {
        "id": "https://example.com/facilities/F123456/claims/safety",
        "conformityTopic": "governance.safety",
        "description": "Worker safety records and incident reports",
        "accessRole": ["untp:accessRole#Regulator"]
      },
      {
        "id": "https://example.com/facilities/F123456/claims/sustainability",
        "conformityTopic": "environment.sustainability",
        "description": "Detailed sustainability metrics and targets",
        "accessRole": ["untp:accessRole#Auditor"]
      }
    ]
  }
}
```

**Key Points:**

- Contains 2 full claims (ISO cert + production capacity)
- Contains 2 claim stubs (safety, sustainability)
- Customers see operational data for supply chain planning
- Production capacity and lead times support procurement decisions

### Example DFR-3: Auditor Variant

The auditor variant includes comprehensive sustainability data:

```json
{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://test.uncefact.org/vocabulary/untp/dfr/0.7.0/"
  ],
  "type": ["DigitalFacilityRecord", "VerifiableCredential"],
  "issuer": {
    "id": "did:web:facility.example.com",
    "name": "Battery Manufacturing Facility"
  },
  "credentialSubject": {
    "type": ["FacilityRecord"],
    "id": "https://example.com/facilities/F123456",

    "otherVariants": [
      {
        "accessRole": ["untp:accessRole#Anonymous"]
      },
      {
        "accessRole": ["untp:accessRole#Customer"]
      },
      {
        "accessRole": ["untp:accessRole#Regulator"]
      }
    ],

    "facility": {
      "id": "https://example.com/facilities/F123456",
      "name": "Battery Cell Manufacturing Plant",
      "registeredId": "F123456",
      "description": "High-capacity lithium battery cell production facility",
      "location": {
        "address": "123 Industrial Blvd, Manufacturing District",
        "countryCode": "CN",
        "geoCoordinates": {
          "latitude": 31.2304,
          "longitude": 121.4737
        }
      }
    },

    "conformityClaim": [
      {
        "id": "https://example.com/facilities/F123456/claims/iso-14001",
        "conformityTopic": "environment.management",
        "description": "ISO 14001 Environmental Management certification",
        "declaredValue": [
          {
            "metricName": "Certification Status",
            "metricValue": {
              "value": "Active",
              "unit": "text"
            }
          }
        ]
      },
      {
        "id": "https://example.com/facilities/F123456/claims/sustainability",
        "conformityTopic": "environment.sustainability",
        "description": "Detailed sustainability metrics and targets",
        "referenceStandard": {
          "type": ["Standard"],
          "id": "https://www.iso.org/standard/70453.html",
          "name": "ISO 14064-1:2018 Greenhouse gases"
        },
        "declaredValue": [
          {
            "metricName": "Scope 1 Emissions",
            "metricValue": {
              "value": 2500,
              "unit": "TNE"
            }
          },
          {
            "metricName": "Scope 2 Emissions",
            "metricValue": {
              "value": 15000,
              "unit": "TNE"
            }
          },
          {
            "metricName": "Renewable Energy Use",
            "metricValue": {
              "value": 45,
              "unit": "P1"
            }
          },
          {
            "metricName": "Water Consumption",
            "metricValue": {
              "value": 500000,
              "unit": "LTR"
            }
          }
        ],
        "conformityEvidence": {
          "type": ["SecureLink", "Link"],
          "linkURL": "https://example.com/evidence/sustainability-audit.json",
          "linkType": "https://vocabulary.uncefact.org/untp/linkType#dcc"
        }
      },
      {
        "id": "https://example.com/facilities/F123456/claims/capacity",
        "conformityTopic": "production.capacity",
        "description": "Annual production capacity and lead times",
        "accessRole": ["untp:accessRole#Customer"]
      },
      {
        "id": "https://example.com/facilities/F123456/claims/safety",
        "conformityTopic": "governance.safety",
        "description": "Worker safety records and incident reports",
        "accessRole": ["untp:accessRole#Regulator"]
      }
    ]
  }
}
```

**Key Points:**

- Contains 2 full claims (ISO cert + sustainability metrics)
- Contains 2 claim stubs (capacity, safety)
- Auditors see detailed environmental performance data
- Includes GHG emissions, renewable energy use, water consumption
- Links to third-party audit evidence

### Claim Reference Extension (Optional)

For cases where a claim needs to point to additional detailed evidence with its own access control:

```json
{
  "conformityClaim": [
    {
      "id": "https://example.com/claims/emissions-001",
      "conformityTopic": "environment.emissions",
      "description": "Carbon footprint summary",
      "declaredValue": [
        {
          "metricName": "GHG Emissions Intensity",
          "metricValue": {
            "value": 12.5,
            "unit": "KGM"
          }
        }
      ],
      "conformityEvidence": {
        "type": ["SecureLink", "Link"],
        "linkURL": "https://example.com/evidence/emissions-detailed.json",
        "linkType": "https://vocabulary.uncefact.org/untp/linkType#dcc",
        "accessRole": ["untp:accessRole#Regulator"]
      }
    }
  ]
}
```

This allows a claim to include:

- Summary data (inline `declaredValue`)
- Reference to detailed evidence (via `conformityEvidence` with `accessRole`)

## Implementation Considerations

### Variant Generation Strategy

Implementers have flexibility in how they generate and store variants for both [DPPs](../specification/DigitalProductPassport.md) and [DFRs](../specification/DigitalFacilityRecord.md):

**Option A: Pre-compute all variants at issuance**

- Generate public, customer, regulator, auditor variants as appropriate
- Store as separate static files
- Fast retrieval, more storage
- Best for high-traffic credentials

**Option B: Dynamic variant generation**

- Store one "full" credential with all claims
- Filter claims based on `accessRole` at query time
- Less storage, more compute
- Best for low-traffic or frequently updated credentials

**Option C: Hybrid**

- Pre-compute common variants (public, customer)
- Generate rare variants on-demand (auditor, inspector)
- Balance storage and compute costs

### Resolver Implementation

The [Identity Resolver](../specification/IdentityResolver.md) needs minimal changes:

- Accept `accessRole` as optional query parameter for all identifier types
- Maintain mapping of identifier → available variants
- Return filtered linkset based on `accessRole`

No authentication required at resolver level; access control can be enforced at storage level via encryption or authentication.

### Storage Patterns

Document variants can be stored in any web-accessible location:

**Digital Product Passport storage example:**

```
https://files.example.com/dpp/90664869327-public.json
https://files.example.com/dpp/90664869327-customer.json
https://files.example.com/dpp/90664869327-regulator.json
https://files.example.com/dpp/90664869327-recycler.json
```

**Digital Facility Record storage example:**

```
https://files.example.com/dfr/F123456-public.json
https://files.example.com/dfr/F123456-customer.json
https://files.example.com/dfr/F123456-auditor.json
https://files.example.com/dfr/F123456-regulator.json
```

Or with encryption for sensitive variants:

```
https://files.example.com/dpp/90664869327-public.json (unencrypted)
https://files.example.com/dpp/90664869327-customer.json.enc (encrypted, key in package)
https://files.example.com/dpp/90664869327-regulator.json (requires DID auth at CDN)
```

### Security Considerations

#### Claim Stub Information Leakage

Claim stubs reveal that certain data exists without revealing the data itself. This is intentional for discoverability but implementers should consider:

- Which claims to include as stubs in public variants
- Whether to include `description` field (may reveal too much)
- Option to omit stubs entirely (no hints about restricted data)

#### Access Role Verification

This proposal does not specify HOW to verify that a requestor has a claimed access role. Implementers can use:

- No verification: Public variants are truly public
- Shared secrets: Key in product packaging (current UNTP pattern)
- DID Authentication: Prove DID ownership and check against whitelist
- Digital Identity Anchor: Present credential proving authorized role

These mechanisms are complementary and can be combined per use case.

## Relation to Other Specifications

### Decentralised Access Control

Variant-based disclosure extends the existing [Decentralised Access Control](../specification/DecentralisedAccessControl.md) specification:

- DAC handles credential-level encryption and key management
- Variant-based disclosure handles variant routing and claim-level discovery
- Both specifications can be used together (encrypted variants with claim stubs)

### Identity Resolver

Variant-based disclosure extends the [Identity Resolver](../specification/IdentityResolver.md) specification:

- Adds optional `accessRole` query parameter for all identifier types
- Adds `accessRole` property to linkset responses
- Maintains existing linkset structure
- Works with product identifiers (01), facility identifiers (99), and future identifier types

### Digital Product Passport

Variant-based disclosure extends the [Digital Product Passport](../specification/DigitalProductPassport.md) specification:

- Adds optional `otherVariants` property to `ProductPassport`
- Adds optional `accessRole` property to claims
- Defines claim stub pattern (no `declaredValue`)
- Maintains existing DPP structure

### Digital Facility Record

Variant-based disclosure extends the [Digital Facility Record](../specification/DigitalFacilityRecord.md) specification:

- Adds optional `otherVariants` property to `FacilityRecord`
- Adds optional `accessRole` property to claims
- Defines claim stub pattern (no `declaredValue`)
- Maintains existing DFR structure

## Conformance

Implementations claiming conformance to variant-based disclosure MUST:

- Support the `accessRole` query parameter in [Identity Resolver](../specification/IdentityResolver.md) implementations
- Correctly interpret `otherVariants` property when present in credentials
- Correctly interpret claim stubs (claims without `declaredValue` property)
- Return appropriate linkset responses based on `accessRole` parameter

Implementations MAY:

- Support all defined access roles or a subset based on use case requirements
- Implement pre-computed variants, dynamic filtering, or hybrid approaches
- Add additional properties to variant metadata for implementation-specific needs

## Appendix A: Complete Example Linksets

### Example Linkset for Digital Product Passport

Example Identity Resolver response for product with multiple variants:

```json
{
  "linkset": [
    {
      "anchor": "https://resolver.example.com/01/90664869327",

      "https://vocabulary.uncefact.org/untp/linkType#digitalProductPassport": [
        {
          "href": "https://files.example.com/dpp/90664869327-public.json",
          "title": "Digital Product Passport (Public)",
          "type": "application/vc+ld+json",
          "accessRole": ["untp:accessRole#Anonymous"]
        },
        {
          "href": "https://files.example.com/dpp/90664869327-customer.json",
          "title": "Digital Product Passport (Customer)",
          "type": "application/vc+ld+json",
          "accessRole": ["untp:accessRole#Customer"]
        },
        {
          "href": "https://files.example.com/dpp/90664869327-regulator.json",
          "title": "Digital Product Passport (Regulator)",
          "type": "application/vc+ld+json",
          "accessRole": ["untp:accessRole#Regulator"]
        },
        {
          "href": "https://files.example.com/dpp/90664869327-recycler.json",
          "title": "Digital Product Passport (Recycler)",
          "type": "application/vc+ld+json",
          "accessRole": ["untp:accessRole#Recycler"]
        }
      ],

      "https://vocabulary.uncefact.org/untp/linkType#certificationInfo": [
        {
          "href": "https://files.example.com/certs/gba-compliance.json",
          "title": "GBA Battery Rulebook Compliance Certificate",
          "type": "application/vc+ld+json"
        }
      ]
    }
  ]
}
```

### Example Linkset for Digital Facility Record

Example Identity Resolver response for facility with multiple variants:

```json
{
  "linkset": [
    {
      "anchor": "https://resolver.example.com/99/F123456",
      "https://vocabulary.uncefact.org/untp/linkType#digitalFacilityRecord": [
        {
          "href": "https://files.example.com/dfr/F123456-public.json",
          "title": "Digital Facility Record (Public)",
          "type": "application/vc+ld+json",
          "accessRole": ["untp:accessRole#Anonymous"]
        },
        {
          "href": "https://files.example.com/dfr/F123456-customer.json",
          "title": "Digital Facility Record (Customer)",
          "type": "application/vc+ld+json",
          "accessRole": ["untp:accessRole#Customer"]
        },
        {
          "href": "https://files.example.com/dfr/F123456-auditor.json",
          "title": "Digital Facility Record (Auditor)",
          "type": "application/vc+ld+json",
          "accessRole": ["untp:accessRole#Auditor"]
        },
        {
          "href": "https://files.example.com/dfr/F123456-regulator.json",
          "title": "Digital Facility Record (Regulator)",
          "type": "application/vc+ld+json",
          "accessRole": ["untp:accessRole#Regulator"]
        }
      ],

      "https://vocabulary.uncefact.org/untp/linkType#certificationInfo": [
        {
          "href": "https://files.example.com/certs/iso-14001.json",
          "title": "ISO 14001 Environmental Management Certification",
          "type": "application/vc+ld+json"
        }
      ]
    }
  ]
}
```
