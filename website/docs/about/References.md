---
sidebar_position: 25
title: Related Standards and Initiatives
---

import Disclaimer from '../\_disclaimer.mdx';

<Disclaimer />

_Informative_

## Overview

UNTP builds upon existing work rather than re-inventing standards, maximising interoperability with similar initiatives. This page catalogues the standards, regulations, inter-governmental instruments, and industry initiatives that UNTP relates to — and is an initial assessment by the UNTP community that describes the nature of each relationship.

| Category                                              | UNTP Strategy                                                                                                                                                                                                                   |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**Standards**](#standards)                           | Re-use rather than re-invent. UNTP builds upon existing standards wherever possible, normatively referencing or profiling established specifications to maximise interoperability and minimise duplication.                     |
| [**Regulations**](#regulations)                       | Provide the lowest-cost, highest-integrity, and most scalable implementation instrument. UNTP credentials and the transparency graph give regulators and regulated entities a ready-made digital infrastructure for compliance. |
| [**UN and IGO Instruments**](#un-and-igo-instruments) | Map to the outcomes they target so that UNTP becomes the preferred tool for concrete implementation and national capability building.                                                                                           |
| [**Industry Initiatives**](#industry-initiatives)     | Partner so that industry sustainability and resilience goals are most easily met through UNTP community activation, reducing the cost and complexity of initiative-specific tooling.                                            |

---

## Summary

### Standards

_Re-use rather than re-invent. UNTP builds upon existing standards wherever possible, normatively referencing or profiling established specifications to maximise interoperability and minimise duplication._

| Reference                                              | Authority                                 | Summary                                                                                              |
| ------------------------------------------------------ | ----------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| [W3C VCDM](#w3c-verifiable-credentials-data-model)     | [W3C](https://www.w3.org/)                | UNTP requires all credentials be issued as W3C VCs (v2.0 JSON-LD compacted form).                    |
| [W3C DID](#w3c-decentralised-identifiers)              | [W3C](https://www.w3.org/)                | UNTP requires W3C DIDs as issuer identifiers for all credentials.                                    |
| [W3C JSON-LD](#w3c-json-ld)                            | [W3C](https://www.w3.org/)                | UNTP uses JSON-LD syntax for all credential data representation.                                     |
| [IETF JOSE](#ietf-jose)                                | [IETF](https://www.ietf.org/)             | UNTP mandates JOSE enveloping proof for VC integrity.                                                |
| [IETF SD-JWT](#ietf-sd-jwt)                            | [IETF](https://www.ietf.org/)             | UNTP does not preclude SD-JWT but uses variant-based disclosure as the primary mechanism.            |
| [ISO/IEC 15459](#isoiec-15459)                         | [ISO/IEC](https://www.iso.org/)           | UNTP leverages the 15459 series for globally unique identifier encoding in data carriers.            |
| [ISO/IEC 18975](#isoiec-18975)                         | [ISO/IEC](https://www.iso.org/)           | UNTP Identity Resolver implements ISO 18975 for structured identifier resolution.                    |
| [ISO 59040](#iso-59040-product-circularity-data-sheet) | [ISO](https://www.iso.org/)               | UNTP DPP provides a digital mechanism to convey ISO 59040 circularity criteria.                      |
| [IFRS S1/S2](#ifrs-s1s2)                               | [IFRS Foundation](https://www.ifrs.org/)  | UNTP performance metrics taxonomy enables roll-up to IFRS sustainability disclosures.                |
| [GRI Standards](#gri-standards)                        | [GRI](https://www.globalreporting.org/)   | UNTP metrics map to GRI indicator categories for enterprise reporting.                               |
| [GHG Protocol](#ghg-protocol)                          | [WRI / WBCSD](https://ghgprotocol.org/)   | UNTP emissions metrics directly aligned with GHG Protocol scopes 1–3.                                |
| [ISO 17000](#iso-17000)                                | [ISO/CASCO](https://www.iso.org/)         | UNTP DCC conformity assessment vocabulary directly implements ISO 17000 terminology.                 |
| [ISO 17011](#iso-17011)                                | [ISO/CASCO](https://www.iso.org/)         | UNTP DCC trust hierarchy implements the ISO 17011 accreditation model.                               |
| [ISO 19987](#iso-19987)                                | [ISO/IEC](https://www.iso.org/)           | UNTP DTE is a conformant, simplified profile of ISO 19987 traceability events.                       |
| [CEN/CENELEC JTC24](#cencenelec-jtc24)                 | [CEN/CENELEC](https://www.cencenelec.eu/) | UNTP and JTC24 are architecturally interoperable; CIRPASS-2 alignment review confirms compatibility. |
| [DIN DKE SPEC 99100](#din-dke-spec-99100)              | [DIN/DKE](https://www.din.de/)            | UNTP DPP maps all 88 battery passport data attributes defined by this specification.                 |

### Regulations

_Provide the lowest-cost, highest-integrity, and most scalable implementation instrument. UNTP credentials and the transparency graph give regulators and regulated entities a ready-made digital infrastructure for compliance._

| Reference                                                                                       | Authority                                                     | Summary                                                                                   |
| ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| [EU ESPR](#eu-ecodesign-for-sustainable-products-regulation-espr)                               | [European Commission](https://commission.europa.eu/)          | UNTP DPPs are architecturally interoperable with ESPR product passport requirements.      |
| [EU Battery Regulation](#eu-battery-regulation)                                                 | [European Commission](https://commission.europa.eu/)          | UNTP DPP maps all battery passport data attributes defined by DIN DKE SPEC 99100.         |
| [EU CBAM](#eu-carbon-border-adjustment-mechanism-cbam)                                          | [European Commission](https://commission.europa.eu/)          | UNTP DPPs and DFRs carry the product-level embedded emissions data CBAM requires.         |
| [EU EUDR](#eu-deforestation-regulation-eudr)                                                    | [European Commission](https://commission.europa.eu/)          | UNTP DTEs and DFRs with geolocation support EUDR traceability to plot of origin.          |
| [EU CSRD / ESRS](#eu-corporate-sustainability-reporting-csrdesrs)                               | [European Commission](https://commission.europa.eu/)          | UNTP metrics taxonomy enables roll-up of supply chain data to ESRS disclosures.           |
| [EU CSDDD](#eu-corporate-sustainability-due-diligence-directive-csddd)                          | [European Commission](https://commission.europa.eu/)          | UNTP transparency graph provides the value chain visibility CSDDD due diligence requires. |
| [EU Forced Labour Regulation](#eu-forced-labour-regulation)                                     | [European Commission](https://commission.europa.eu/)          | UNTP supply chain traceability and social audit DCCs support forced labour due diligence. |
| [EU Critical Raw Materials Act](#eu-critical-raw-materials-act)                                 | [European Commission](https://commission.europa.eu/)          | UNTP DPPs carry critical raw material composition and recycled content data.              |
| [EU Conflict Minerals Regulation](#eu-conflict-minerals-regulation)                             | [European Commission](https://commission.europa.eu/)          | UNTP DTEs trace mineral flows; DCCs verify responsible sourcing from smelters.            |
| [US UFLPA](#us-uyghur-forced-labor-prevention-act-uflpa)                                        | [US Congress](https://www.congress.gov/)                      | UNTP transparency graph provides the complete supply chain tracing UFLPA demands.         |
| [US Dodd-Frank Section 1502](#us-dodd-frank-act-section-1502)                                   | [US Congress](https://www.congress.gov/)                      | UNTP DTEs and DCCs support conflict minerals supply chain traceability and reporting.     |
| [California SB 253 / SB 261](#california-climate-disclosure-sb-253--sb-261)                     | [California Legislature](https://leginfo.legislature.ca.gov/) | UNTP emissions metrics support Scope 1–3 reporting required by SB 253.                    |
| [German Supply Chain Due Diligence Act (LkSG)](#german-supply-chain-due-diligence-act-lksg)     | [German Federal Government](https://www.bmas.de/)             | UNTP transparency graph supports multi-tier supply chain due diligence.                   |
| [UK Modern Slavery Act](#uk-modern-slavery-act)                                                 | [UK Parliament](https://www.legislation.gov.uk/)              | UNTP credentials provide verifiable evidence for modern slavery statements.               |
| [Australian Modern Slavery Act](#australian-modern-slavery-act)                                 | [Australian Parliament](https://www.legislation.gov.au/)      | UNTP credentials provide verifiable evidence for modern slavery statements.               |
| [Australian Climate Disclosure](#australian-mandatory-climate-disclosure)                       | [Australian Treasury](https://treasury.gov.au/)               | UNTP metrics taxonomy supports ISSB-aligned Scope 3 supply chain disclosures.             |
| [Canada Forced Labour Act (S-211)](#canada-fighting-against-forced-labour-and-child-labour-act) | [Parliament of Canada](https://www.parl.ca/)                  | UNTP supply chain traceability supports annual reporting and import compliance.           |

### UN and IGO Instruments

_Map to the outcomes they target so that UNTP becomes the preferred tool for concrete implementation and national capability building._

| Reference                                                                                                 | Authority                             | Summary                                                                                                          |
| --------------------------------------------------------------------------------------------------------- | ------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| [UN SDGs](#un-sustainable-development-goals)                                                              | [United Nations](https://www.un.org/) | UNTP conformity topics and metrics map to SDG targets, enabling product-level contribution tracking.             |
| [UNFCCC Paris Agreement](#unfccc-paris-agreement)                                                         | [UNFCCC](https://unfccc.int/)         | UNTP emissions metrics support measurement and verification of nationally determined contributions.              |
| [UNEP Digital Product Information System](#unep-digital-product-information-system)                       | [UNEP](https://www.unep.org/)         | UNTP provides the decentralised credential infrastructure for UNEP's product information vision.                 |
| [UNIDO Global Quality and Standards Programme](#unido-global-quality-and-standards-programme)             | [UNIDO](https://www.unido.org/)       | UNTP provides digital tools for developing-country enterprises to demonstrate conformity to market requirements. |
| [OECD Due Diligence Guidance](#oecd-due-diligence-guidance)                                               | [OECD](https://www.oecd.org/)         | UNTP transparency graph operationalises the OECD five-step due diligence framework at scale.                     |
| [IEA Critical Minerals Traceability](#iea-critical-minerals-traceability-framework)                       | [IEA](https://www.iea.org/)           | UNTP DTEs and DCCs implement the traceability and assurance the IEA framework calls for.                         |
| [WTO TBT Agreement](#wto-tbt-agreement)                                                                   | [WTO](https://www.wto.org/)           | UNTP's use of international standards and mutual recognition aligns with TBT non-discrimination principles.      |
| [WCO AEO Programme](#wco-authorised-economic-operator-programme)                                          | [WCO](https://www.wcoomd.org/)        | UNTP Digital Identity Anchors and DCCs can underpin AEO trusted-trader credentialing.                            |
| [ILO Fundamental Conventions](#ilo-fundamental-conventions)                                               | [ILO](https://www.ilo.org/)           | UNTP DCC social conformity topics map directly to ILO core labour standards.                                     |
| [UN Guiding Principles on Business and Human Rights](#un-guiding-principles-on-business-and-human-rights) | [OHCHR](https://www.ohchr.org/)       | UNTP transparency graph provides the supply chain visibility the UNGPs' due diligence pillar requires.           |
| [UNECE Recommendation 49](#unece-recommendation-49)                                                       | [UNECE](https://unece.org/)           | UNTP implements the transparency and traceability framework defined by Recommendation 49.                        |

### Industry Initiatives

_Partner so that industry sustainability and resilience goals are most easily met through UNTP community activation, reducing the cost and complexity of initiative-specific tooling._

| Reference                                            | Authority                                                 | Summary                                                                                                 |
| ---------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| [CIRPASS-2](#cirpass-2)                              | [European Commission](https://commission.europa.eu/)      | CIRPASS-2 alignment review confirms architectural interoperability with UNTP across 14 topics.          |
| [Battery Pass](#battery-pass)                        | [Battery Pass Consortium](https://thebatterypass.eu/)     | Battery Pass content guidance maps directly to UNTP DPP data model for battery credentials.             |
| [GBA](#global-battery-alliance)                      | [Global Battery Alliance](https://www.globalbattery.org/) | GBA Battery Passport is registered as a UNTP extension; GBA rules map to UNTP DPP and DCC.              |
| [GDST](#global-dialogue-on-seafood-traceability)     | [GDST](https://traceability-dialogue.org/)                | GDST Key Data Elements align with UNTP DTEs for seafood supply chain traceability.                      |
| [Catena-X](#catena-x)                                | [Catena-X Automotive Network](https://catena-x.net/)      | Catena-X decentralised data exchange architecture is conceptually aligned with UNTP transparency graph. |
| [RMI / RMAP](#responsible-minerals-initiative--rmap) | [RMI](https://www.responsiblemineralsinitiative.org/)     | RMAP smelter audit results can be issued as UNTP DCCs; RMI is a registered UNTP conformity scheme.      |
| [Coppermark](#coppermark)                            | [Coppermark](https://coppermark.org/)                     | Coppermark responsible production criteria map to UNTP DCC conformity topics; registered UNTP scheme.   |
| [ASI](#aluminium-stewardship-initiative)             | [ASI](https://aluminium-stewardship.org/)                 | ASI performance and chain-of-custody standards align with UNTP DCC and DTE models.                      |
| [Textile Exchange](#textile-exchange)                | [Textile Exchange](https://textileexchange.org/)          | Textile Exchange fibre standards map to UNTP DPP material composition and DCC conformity claims.        |
| [RSPO](#roundtable-on-sustainable-palm-oil)          | [RSPO](https://rspo.org/)                                 | RSPO supply chain certification aligns with UNTP DTE traceability and DCC conformity models.            |

---

## Detailed Sections

### W3C Verifiable Credentials Data Model

**Standard overview**

Credentials — driver's licences, diplomas, visas, permits, invoices — are integral to daily life. [W3C Verifiable Credentials](https://www.w3.org/TR/vc-data-model-2.0/) let these credentials be expressed on the web in a cryptographically secure, privacy-respecting, and machine-verifiable way.

**UNTP relationship**

UNTP issues all credentials (product passports (DPP), facility records (DFR), conformity attestations (DCC), traceability events (DTE)) as Verifiable Credentials to ensure security and integrity, regardless of how they are exchanged. UNTP also requires VC rendering templates, ensuring that all UNTP credentials are both human- and machine-readable. The UNTP [VC Profile specification](../specification/VerifiableCredentials.md) provides further detail.

---

### W3C Decentralised Identifiers

**Standard overview**

[W3C Decentralised Identifiers (DIDs)](https://www.w3.org/TR/did-core/) are an identifier type that enables verifiable, decentralised digital identity. A DID refers to any subject — a person, organisation, thing, data model, or abstract entity — as determined by the DID's controller. The design lets the DID owner prove control without requiring permission from any other party. DIDs are commonly used as the issuer identifier for Verifiable Credentials.

**UNTP relationship**

The UNTP Verifiable Credentials Profile requires W3C DIDs as the issuer ID for all credentials (DPP, DCC, DTE, etc.), providing cryptographic, non-repudiable proof of issuer identity. In some cases — similar to well-known websites — a verifier can map a DID to a known identity. In most cases the DID will not be known to the verifier; UNTP therefore defines a Digital Identity Anchor that provides a high-integrity link between a DID and an identity in an authoritative register, such as a national business register.

---

### W3C JSON-LD

**Standard overview**

[JSON-LD](https://www.w3.org/TR/json-ld11/) is a W3C standard for encoding linked data using JSON syntax. It adds a `@context` mechanism that maps JSON keys to globally unique IRIs, enabling semantic interoperability across independently developed systems without requiring a shared schema registry.

**UNTP relationship**

JSON-LD is the linked-data syntax for all UNTP credentials. The UNTP core vocabulary publishes versioned `@context` files that map every UNTP term to its canonical IRI. This enables semantic interoperability and graph-native data querying across the entire transparency graph, allowing verifiers and analytics tools to merge credentials from different issuers without lossy translation.

---

### IETF JOSE

**Standard overview**

The [JOSE (JSON Object Signing and Encryption)](https://datatracker.ietf.org/doc/rfc7515/) family of IETF standards — including JWS (RFC 7515) and JWE (RFC 7516) — defines compact, URL-safe representations for digitally signing and encrypting JSON payloads. JOSE is widely deployed in web infrastructure and supported by every major programming language.

**UNTP relationship**

UNTP mandates JOSE enveloping proof (JWS / RFC 7515) for all Verifiable Credentials. JOSE is preferred over Data Integrity proofs for simplicity and because verification does not depend on `@context` resolution at proof-checking time. This design choice lowers the barrier for implementers and aligns with mainstream web-security tooling.

---

### IETF SD-JWT

**Standard overview**

[SD-JWT (Selective Disclosure for JWTs)](https://datatracker.ietf.org/doc/rfc9449/) is an IETF specification that enables a holder to selectively disclose individual claims from a signed JWT without revealing the entire payload, preserving issuer signatures while supporting privacy.

**UNTP relationship**

UNTP acknowledges SD-JWT but uses variant-based disclosure as the primary selective-disclosure mechanism. Because DPP issuers control credential content, holder-redaction patterns have limited utility in most supply-chain scenarios. There is no incompatibility — SD-JWT can be used alongside UNTP credentials where holder privacy is a requirement.

---

### ISO/IEC 15459

**Standard overview**

[ISO/IEC 15459](https://www.iso.org/standard/54779.html) is a multi-part standard that defines a system of globally unique identifiers for items, transport units, returnable assets, and groupings. It establishes Issuing Agency Codes (IACs) that guarantee uniqueness across identifier schemes.

**UNTP relationship**

UNTP leverages the ISO/IEC 15459 Issuing Agency Code registry for globally unique identifier encoding in barcodes and RFID tags. The UNTP [Identity Resolver specification](../specification/IdentityResolver.md) references 15459 as the foundation for parsing data carriers and extracting structured identifiers.

---

### ISO/IEC 18975

**Standard overview**

[ISO/IEC 18975](https://www.iso.org/standard/85540.html) defines a structured resolution protocol for identifiers encoded in data carriers — 1D barcodes, QR codes, RFID, and digital documents. It specifies how to construct resolution URLs from identifier components and how resolvers return typed links to associated resources.

**UNTP relationship**

ISO 18975 is foundational for the UNTP [Identity Resolver specification](../specification/IdentityResolver.md). The IDR implements the ISO 18975 structured-path syntax and link-type negotiation, enabling any product, facility, or organisation identifier to resolve to its associated UNTP credentials.

---

### ISO 59040 Product Circularity Data Sheet

**Standard overview**

[ISO 59040](https://www.iso.org/standard/82056.html) (the Product Circularity Data Sheet) defines a standard set of measures and a reporting format for product circularity. It covers circular content — the extent to which a product is made from recycled materials — and circular design — the extent to which a product has been designed to facilitate repair, remanufacture, repurposing, and recycling.

**UNTP relationship**

UNTP does not re-invent any ISO 59040 criteria. Instead, the UNTP Digital Product Passport provides a mechanism to digitalise product circularity data while remaining ISO 59040-compliant. The DPP data model includes the organisation, facility, and product metadata ISO 59040 requires. The `conformityClaim` structure within the DPP conveys each specific circularity criterion. Because UNTP DPPs are both human- and machine-readable and carry other sustainability information — such as carbon footprint — manufacturers can issue a single DPP that conforms to multiple sustainability standards.

---

### IFRS S1/S2

**Standard overview**

[IFRS S1 (General Sustainability Disclosures)](https://www.ifrs.org/issued-standards/ifrs-sustainability-standards-navigator/ifrs-s1-general-requirements/) and [IFRS S2 (Climate-related Disclosures)](https://www.ifrs.org/issued-standards/ifrs-sustainability-standards-navigator/ifrs-s2-climate-related-disclosures/) are the IFRS Foundation's sustainability reporting standards. They require entities to disclose material sustainability-related risks, opportunities, and climate metrics for investor decision-making.

**UNTP relationship**

The UNTP performance metrics taxonomy is designed so that product- and facility-level sustainability data can be automatically aggregated (rolled up) to enterprise-level IFRS S1 and S2 disclosures. By capturing granular metrics at the point of production, UNTP enables organisations to build IFRS-compliant corporate reports from verifiable, supply-chain-sourced data rather than top-down estimates.

---

### GRI Standards

**Standard overview**

The [GRI Standards](https://www.globalreporting.org/standards/) are the world's most widely used sustainability reporting standards. They define disclosure topics and indicators across environmental (emissions GRI 305, energy 302, water 303, waste 306, biodiversity 304), social (labour 401–409), and governance (anti-corruption 205, supplier environmental 308, supplier social 414) dimensions.

**UNTP relationship**

UNTP metrics categories map directly to GRI indicator families. Product- and facility-level data captured in UNTP credentials can be aggregated to satisfy GRI disclosure requirements, complementing the enterprise-level focus of GRI with verifiable supply-chain evidence.

---

### GHG Protocol

**Standard overview**

The [GHG Protocol](https://ghgprotocol.org/), developed by the World Resources Institute (WRI) and the World Business Council for Sustainable Development (WBCSD), is the most widely used international standard for measuring and reporting greenhouse gas emissions. It defines three scopes: Scope 1 (direct emissions), Scope 2 (purchased energy), and Scope 3 (value-chain emissions).

**UNTP relationship**

UNTP emissions metrics directly implement GHG Protocol scopes 1–3. Digital Facility Records (DFR) capture Scope 1 and 2 emissions at the facility level; Digital Product Passports (DPP) convey embedded (Scope 3) emissions per product. The transparency graph enables verifiers to trace and verify emissions claims across the value chain.

---

### CEN/CENELEC JTC24

**Standard overview**

[CEN/CENELEC JTC24](https://www.cencenelec.eu/) is the joint technical committee responsible for delivering the technical standards — data carriers, identifiers, data exchange — that support the European Commission's Eco-design for Sustainable Products Regulation (ESPR). The committee's outputs define:

- **Unique identifiers** — a system supporting both centralised and decentralised identifiers at model, batch, or item level.
- **Data carriers** — format, error correction, encoding methods, and printing and durability requirements for product data carriers such as QR codes.
- **Data exchange protocols** — an open, secure, high-integrity protocol for exchanging DPP data between systems, including access control for sensitive data.

**UNTP relationship**

The CIRPASS-2 alignment review has confirmed architectural interoperability between UNTP and CEN/CENELEC JTC24 across a 14-topic assessment. Both frameworks use W3C Verifiable Credentials, linked-data semantics, and content-negotiated identity resolution. CIRPASS-2 operates as a compatible EU regulatory profile within the broader UNTP architecture.

- **Identifiers and carriers:** UNTP maintains a human- and machine-readable register of organisation, facility, and product identifier schemes, including data on how to parse data carriers, resolve identifiers to discover passports, and verify identifier ownership and passport integrity. EU product registers implementing CEN standards are added to the UN register of schemes.
- **Data exchange protocol:** UNTP leverages open technical standards including JSON Schema, W3C JSON-LD semantics, and IETF Linksets. UNTP maps Digital Product Passport data to well-established semantic vocabularies — including vocabulary.uncefact.org and schema.org — and maintains mappings to EU-specific passport data semantics to ensure semantic interoperability.

---

### DIN DKE SPEC 99100

**Standard overview**

[DIN DKE SPEC 99100](https://www.din.de/en/getting-involved/standards-committees/dke/standards/wdc-beuth:din21:372438898) is a German national standard that specifies the content and structure of the battery passport required by the EU Battery Regulation. It defines 88 mandatory and recommended data attributes across seven clusters — general information, carbon footprint, supply chain due diligence, material composition, circularity, performance, and state of health — providing the detailed data model that battery passport implementations must follow.

**UNTP relationship**

The UNTP DPP specification includes a complete attribute-level mapping to all 88 DIN DKE SPEC 99100 data attributes with no gaps. Battery manufacturers implementing UNTP DPPs can satisfy DIN DKE SPEC 99100 requirements directly, using the DPP as the technical vehicle for EU Battery Regulation compliance while maintaining interoperability with global supply chain partners through UNTP's open standards.

---

### ISO 17000

**Standard overview**

[ISO 17000](https://www.iso.org/standard/73029.html) (Conformity assessment — Vocabulary and general principles) defines the terminology and concepts used across the entire ISO/CASCO conformity assessment framework. It establishes the vocabulary for attestation, conformity assessment bodies, accreditation, certification, inspection, and testing — providing the conceptual foundation on which standards such as ISO 17011, 17020, 17021, and 17065 are built.

**UNTP relationship**

The UNTP Digital Conformity Credential (DCC) directly implements ISO 17000 terminology. DCC data model concepts — attestation type, conformity assessment body, assessment level, and the relationship between accreditation and certification — map to ISO 17000 definitions. This ensures that UNTP conformity credentials are semantically consistent with established international conformity assessment practice.

---

### ISO 17011

**Standard overview**

[ISO 17011](https://www.iso.org/standard/67198.html) (Conformity assessment — Requirements for accreditation bodies accrediting conformity assessment bodies) defines the requirements for accreditation bodies that evaluate and accredit conformity assessment bodies (CABs). It establishes a trust hierarchy: a national or international accreditation authority accredits a CAB, which in turn certifies or inspects products, facilities, or management systems.

**UNTP relationship**

The UNTP Digital Conformity Credential (DCC) implements the ISO 17011 accreditation trust hierarchy. The DCC `issuingAuthority` and `accreditationBody` fields model the chain from accreditation authority to conformity assessment body to attestation. This allows verifiers to trace the trust chain from a conformity claim on a product or facility back through the accredited CAB to the accreditation authority, providing machine-verifiable assurance that the assessment was conducted by an accredited body.

---

### ISO 19987

**Standard overview**

[ISO/IEC 19987:2024](https://www.iso.org/standard/78760.html) (EPC Information Services) is a well-established standard for supply chain traceability. It defines six event types that combine to describe a value chain from raw material to finished product: Object Event (e.g. an inspection), Transaction Event (e.g. a shipment from seller to buyer), Aggregation Event (e.g. loading packages onto a pallet), Transformation Event (e.g. a manufacturing process that consumes inputs to create outputs), and Association Event (e.g. linking products to other products or facilities).

**UNTP relationship**

The UNTP Digital Traceability Event (DTE) is a conformant, simplified profile of ISO 19987, identifying the minimum subset needed to support value chain transparency. The DTE profile is optimised for packaging as verifiable credentials and for discovery as linked data, rather than the machine-to-machine API mechanisms the ISO standard defines.

---

### EU Ecodesign for Sustainable Products Regulation (ESPR)

**Regulation overview**

[Regulation (EU) 2024/1781](https://eur-lex.europa.eu/eli/reg/2024/1781) establishes the framework for Digital Product Passports across most product categories placed on the EU market, setting ecodesign requirements covering durability, repairability, recyclability, energy efficiency, and carbon footprint. Sector-specific delegated acts phase in from 2026 (iron and steel) through 2030, with batteries, textiles, and electronics among the earliest categories.

**UNTP relationship**

UNTP DPPs are architecturally interoperable with ESPR product passport requirements. The CIRPASS-2 alignment review confirmed compatibility between UNTP and the CEN/CENELEC JTC24 standards implementing ESPR across 14 assessment topics. UNTP provides a global, decentralised implementation framework that can carry EU-specific ecodesign data alongside other sustainability information, enabling manufacturers to serve both EU regulatory and global voluntary transparency requirements with a single credential.

---

### EU Battery Regulation

**Regulation overview**

[Regulation (EU) 2023/1542](https://eur-lex.europa.eu/eli/reg/2023/1542) requires a digital battery passport (accessible via QR code) for EV and industrial batteries above 2 kWh from February 2027. The passport must convey carbon footprint, recycled content, state of health, material composition, and supply chain due diligence information across a 10-year record.

**UNTP relationship**

The UNTP DPP specification already maps all 88 battery passport data attributes defined by DIN DKE SPEC 99100 (the German national standard implementing the EU Battery Regulation). The Global Battery Alliance extension is registered as a UNTP extension. UNTP provides the interoperable framework for battery passport data exchange, enabling battery data to flow across international supply chains.

---

### EU Carbon Border Adjustment Mechanism (CBAM)

**Regulation overview**

[Regulation (EU) 2023/956](https://eur-lex.europa.eu/eli/reg/2023/956) puts a carbon price on imports of cement, iron and steel, aluminium, fertilisers, electricity, and hydrogen based on embedded emissions. From 2026, importers must purchase CBAM certificates corresponding to the carbon price that would have been paid had the goods been produced under the EU Emissions Trading System. At least 80% of reported emissions must be based on actual data from upstream producers.

**UNTP relationship**

UNTP DPPs carry product-level emissions intensity data, and Digital Facility Records capture Scope 1 and 2 emissions at the facility level. Digital Conformity Credentials from accredited assessors can verify emissions claims. The transparency graph enables tracing embedded emissions back through the supply chain, providing the actual-data evidence CBAM demands.

---

### EU Deforestation Regulation (EUDR)

**Regulation overview**

[Regulation (EU) 2023/1115](https://eur-lex.europa.eu/eli/reg/2023/1115) prohibits placing products linked to post-2020 deforestation on the EU market. It covers seven commodity groups — soy, cattle, palm oil, coffee, cocoa, rubber, and timber — and requires due diligence including geolocation traceability to the plot of land where the commodity was produced.

**UNTP relationship**

UNTP Digital Traceability Events trace commodity flows from origin through transformation events (processing, manufacturing). Digital Facility Records capture facility and plot-of-origin geolocation data. DPPs can carry deforestation-free claims verified by Digital Conformity Credentials from accredited assessors. The transparency graph enables end-to-end traceability from forest or farm to finished product.

---

### EU Corporate Sustainability Reporting (CSRD/ESRS)

**Regulation overview**

[Directive (EU) 2022/2464](https://eur-lex.europa.eu/eli/dir/2022/2464) (CSRD) and the [European Sustainability Reporting Standards (ESRS)](https://eur-lex.europa.eu/eli/reg_del/2023/2772) require large companies to report on sustainability matters across environmental (E1–E5), social (S1–S4), and governance (G1) topics. Scope 3 value chain emissions are a core disclosure requirement, phased in from 2024 to 2028.

**UNTP relationship**

The UNTP performance metrics taxonomy is designed so that product- and facility-level sustainability data can be automatically aggregated to satisfy ESRS disclosures. Product-level DPP data and facility-level DFR data provide the verifiable Scope 3 supply chain evidence that CSRD reporting demands, replacing top-down estimates with bottom-up measured data.

---

### EU Corporate Sustainability Due Diligence Directive (CSDDD)

**Regulation overview**

[Directive (EU) 2024/1760](https://eur-lex.europa.eu/eli/dir/2024/1760) requires large companies to conduct human rights and environmental due diligence across their value chains, with obligations to identify, prevent, mitigate, and account for adverse impacts. Member states must transpose by July 2026.

**UNTP relationship**

UNTP provides the data infrastructure for value chain due diligence. The transparency graph of linked credentials — DPPs, DFRs, DCCs, and DTEs — across multi-tier supply chains gives companies the visibility needed to identify risks and demonstrate due diligence. Digital Conformity Credentials from social and environmental auditors provide verifiable evidence of remediation actions.

---

### EU Forced Labour Regulation

**Regulation overview**

[Regulation (EU) 2024/3015](https://eur-lex.europa.eu/eli/reg/2024/3015) prohibits placing on the EU market any product made using forced labour, regardless of origin. It applies to all economic operators regardless of size from December 2027. Enforcement follows a risk-based approach, with competent authorities empowered to investigate and order product withdrawals.

**UNTP relationship**

UNTP's transparency graph enables tracing products back through the supply chain to verify labour conditions at source. Digital Conformity Credentials from social auditors can attest to forced labour elimination. The UNTP conformity topic taxonomy includes forced labour criteria, and the multi-tier traceability provided by DTEs supports the due diligence that the regulation demands.

---

### EU Critical Raw Materials Act

**Regulation overview**

[Regulation (EU) 2024/1252](https://eur-lex.europa.eu/eli/reg/2024/1252) sets 2030 benchmarks for EU domestic extraction (10%), processing (40%), and recycling (25%) of strategic raw materials. It requires supply chain risk assessments for large manufacturers of strategic technologies and mandates traceability and recycled content requirements for permanent magnets.

**UNTP relationship**

UNTP DPPs can carry critical raw material composition and recycled content data. The Critical Raw Materials Transparency Protocol is already registered as a UNTP extension. Digital Traceability Events trace mineral supply chains from extraction through processing. Digital Facility Records capture extraction and processing facility data including geolocation for supply chain risk assessment.

---

### EU Conflict Minerals Regulation

**Regulation overview**

[Regulation (EU) 2017/821](https://eur-lex.europa.eu/eli/reg/2017/821) requires EU importers of tin, tantalum, tungsten, and gold (3TG) to conduct supply chain due diligence following OECD guidance. It applies to direct importers and covers minerals originating from all conflict-affected and high-risk areas worldwide — a broader geographic scope than the US Dodd-Frank equivalent.

**UNTP relationship**

UNTP Digital Traceability Events trace mineral flows through transformation events (smelting, refining). Digital Facility Records capture facility data with geolocation for conflict zone assessment. Digital Conformity Credentials from audited smelters and refiners verify responsible sourcing. The mass balance chain-of-custody design pattern directly addresses mineral traceability requirements.

---

### US Uyghur Forced Labor Prevention Act (UFLPA)

**Regulation overview**

The [Uyghur Forced Labor Prevention Act](https://www.congress.gov/bill/117th-congress/house-bill/6256) (2022) creates a rebuttable presumption that goods mined, produced, or manufactured wholly or in part in the Xinjiang Uyghur Autonomous Region are made with forced labour. Importers must provide complete supply chain tracing documentation to US Customs and Border Protection (CBP) to rebut the presumption. High-priority sectors include cotton, polysilicon, tomatoes, copper, lithium, and steel.

**UNTP relationship**

UNTP provides exactly the kind of supply chain tracing evidence UFLPA requires. Digital Traceability Events document product origin and transformation; Digital Facility Records establish facility locations; Digital Conformity Credentials from social auditors verify labour conditions. The transparency graph enables the complete, verifiable tracing documentation that CBP demands for rebuttal.

---

### US Dodd-Frank Act Section 1502

**Regulation overview**

[Section 1502 of the Dodd-Frank Act](https://www.congress.gov/bill/111th-congress/house-bill/4173) (2010) requires US-listed companies to determine whether their products contain tin, tantalum, tungsten, or gold (3TG) originating from the Democratic Republic of Congo or adjoining countries. Companies must conduct due diligence on the source and chain of custody and file annual conflict minerals reports with the SEC.

**UNTP relationship**

UNTP Digital Traceability Events trace mineral flows from extraction through smelting and manufacturing. Digital Conformity Credentials from audited smelters (e.g. RMAP-certified) verify responsible sourcing. The transparency graph enables companies to demonstrate chain of custody from mine to product, supporting SEC reporting obligations.

---

### California Climate Disclosure (SB 253 / SB 261)

**Regulation overview**

[SB 253](https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202320240SB253) (Climate Corporate Data Accountability Act, 2023) requires companies with revenues over $1 billion doing business in California to report Scope 1, 2, and 3 greenhouse gas emissions. [SB 261](https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202320240SB261) (Climate-Related Financial Risk Act) requires companies with revenue over $500 million to report climate-related financial risks.

**UNTP relationship**

UNTP emissions metrics align with GHG Protocol scopes 1–3. Product-level DPP data and facility-level DFR data can be aggregated to corporate-level Scope 3 disclosures. UNTP provides verifiable, supply-chain-sourced evidence for emissions claims, supporting the assurance requirements that SB 253 phases in over time.

---

### German Supply Chain Due Diligence Act (LkSG)

**Regulation overview**

The [Lieferkettensorgfaltspflichtengesetz (LkSG)](https://www.gesetze-im-internet.de/lksg/) (2023) requires companies headquartered or operating in Germany with 1,000 or more employees to establish risk management systems for human rights and environmental protection across their supply chains. The Federal Office for Economic Affairs and Export Control (BAFA) enforces compliance with administrative fines and public procurement exclusions.

**UNTP relationship**

UNTP provides the supply chain transparency data infrastructure that LkSG compliance requires. The transparency graph makes it possible to trace human rights and environmental risks through multi-tier supply chains. Digital Conformity Credentials from social and environmental auditors provide verifiable evidence of due diligence measures at the supplier level.

---

### UK Modern Slavery Act

**Regulation overview**

The [Modern Slavery Act 2015](https://www.legislation.gov.uk/ukpga/2015/30), Section 54, requires commercial organisations with annual turnover above GBP 36 million operating in the UK to publish annual modern slavery statements describing steps taken to ensure no slavery or human trafficking exists in their operations or supply chains.

**UNTP relationship**

UNTP transparency data can underpin modern slavery statements with verifiable evidence rather than self-declarations. Digital Conformity Credentials from social auditors provide third-party verification of labour conditions. The transparency graph enables companies to demonstrate multi-tier supply chain visibility — the depth of investigation that regulators and civil society increasingly expect.

---

### Australian Modern Slavery Act

**Regulation overview**

The [Modern Slavery Act 2018 (Cth)](https://www.legislation.gov.au/Details/C2018A00153) requires entities based or operating in Australia with consolidated revenue over AUD 100 million to publish annual modern slavery statements identifying risks in their operations and supply chains and describing actions taken to address them.

**UNTP relationship**

UNTP credentials provide verifiable evidence for modern slavery statements. Digital Conformity Credentials from social auditors verify labour conditions at supplier facilities. Digital Facility Records establish the identity and location of facilities in the supply chain. The transparency graph enables the multi-tier supply chain visibility needed to identify and address modern slavery risks.

---

### Australian Mandatory Climate Disclosure

**Regulation overview**

The [Treasury Laws Amendment (Financial Market Infrastructure and Other Measures) Act 2024](https://www.legislation.gov.au/C2024A00056) requires large Australian businesses and financial institutions to prepare annual sustainability reports with mandatory climate-related financial disclosures aligned with ISSB/IFRS S1 and S2. Reporting is phased in from January 2025, with Scope 3 emissions and reasonable assurance requirements introduced progressively.

**UNTP relationship**

The UNTP performance metrics taxonomy is designed for roll-up to IFRS S1/S2 disclosures, which Australia's framework is aligned to. Product- and facility-level data from UNTP credentials provides the Scope 3 supply chain evidence needed. Because UNTP metrics are ISSB-aligned by design, Australian companies using UNTP can aggregate supply chain data directly into their mandatory climate reports.

---

### Canada Fighting Against Forced Labour and Child Labour Act

**Regulation overview**

The [Fighting Against Forced Labour and Child Labour in Supply Chains Act (S-211)](https://laws-lois.justice.gc.ca/eng/acts/F-10.6/) (2024) requires Canadian entities and government institutions meeting revenue or asset thresholds to report annually on measures taken to prevent and reduce the risk of forced or child labour in their supply chains. Canada also prohibits the import of goods produced by forced or child labour.

**UNTP relationship**

UNTP credentials provide the supply chain tracing evidence needed for annual reporting and import compliance. Digital Traceability Events document product origin and transformation. Digital Conformity Credentials from social auditors verify labour conditions. The transparency graph enables the multi-tier visibility needed to identify forced and child labour risks across complex supply chains.

---

### UN Sustainable Development Goals

**Instrument overview**

The [UN Sustainable Development Goals (SDGs)](https://sdgs.un.org/goals) are 17 interconnected goals adopted by all UN member states in 2015 as a shared blueprint for peace and prosperity. Each goal has specific targets and indicators covering poverty, hunger, health, education, climate, environmental degradation, justice, and partnerships. The SDGs frame the global sustainability agenda through 2030.

**UNTP relationship**

UNTP conformity topics and performance metrics map to SDG targets, enabling product- and facility-level sustainability data to be aggregated as evidence of contribution to specific goals. For example, emissions metrics support SDG 13 (Climate Action), labour conformity topics support SDG 8 (Decent Work), and deforestation-free claims support SDG 15 (Life on Land). UNTP provides the verifiable, granular data layer that turns high-level SDG commitments into measurable supply chain outcomes.

---

### UNFCCC Paris Agreement

**Instrument overview**

The [Paris Agreement](https://unfccc.int/process-and-meetings/the-paris-agreement) (2015) is a legally binding international treaty under the UNFCCC. It commits 196 parties to limit global warming to well below 2°C (preferably 1.5°C) above pre-industrial levels. Each party submits nationally determined contributions (NDCs) setting out its emissions reduction targets and reports progress through a transparency framework.

**UNTP relationship**

UNTP emissions metrics — aligned with GHG Protocol scopes 1–3 — support measurement and verification of the supply chain emissions that underpin national climate targets. Product-level DPP data and facility-level DFR data provide the granular, verifiable evidence needed for the enhanced transparency framework the Paris Agreement demands. By enabling bottom-up emissions tracking across global supply chains, UNTP contributes to the accuracy of national greenhouse gas inventories.

---

### UNEP Digital Product Information System

**Instrument overview**

The [UNEP Digital Product Information System (DPIS)](https://www.unep.org/) initiative explores how digital product information — covering environmental footprint, circularity, and social impact — can be standardised and shared globally to support sustainable consumption and production (SDG 12). DPIS envisions interoperable product information flowing across borders and regulatory jurisdictions.

**UNTP relationship**

UNTP provides the decentralised credential infrastructure for UNEP's product information vision. UNTP Digital Product Passports carry exactly the environmental, circularity, and social data DPIS targets. The identity resolution layer enables discovery of product information from any data carrier. The use of W3C Verifiable Credentials and JSON-LD semantics ensures the interoperability across jurisdictions that DPIS requires.

---

### UNIDO Global Quality and Standards Programme

**Instrument overview**

The [UNIDO Global Quality and Standards Programme (GQSP)](https://www.unido.org/) builds the quality infrastructure — metrology, standardisation, accreditation, and conformity assessment — of developing countries. It helps small and medium enterprises meet the technical requirements of international markets, improving their competitiveness and integration into global value chains.

**UNTP relationship**

UNTP provides digital tools for developing-country enterprises to demonstrate conformity to international market requirements at low cost. Digital Conformity Credentials issued by accredited conformity assessment bodies give SMEs verifiable proof of compliance. The UNTP architecture — built on open standards and designed for low-cost implementation — aligns with UNIDO's goal of inclusive participation in global trade.

---

### OECD Due Diligence Guidance

**Instrument overview**

The [OECD Due Diligence Guidance for Responsible Business Conduct](https://www.oecd.org/en/topics/sub-issues/due-diligence-guidance-for-responsible-business-conduct.html) (2018) provides a five-step framework for companies to identify, prevent, mitigate, and account for adverse human rights, environmental, and governance impacts in their operations and supply chains. Sector-specific annexes cover minerals, garments and footwear, and agriculture. The guidance is endorsed by 50+ governments and forms the operational basis for most national due diligence legislation.

**UNTP relationship**

UNTP operationalises the OECD five-step framework at scale. The transparency graph provides the supply chain mapping and risk identification that steps 1–2 require. Digital Conformity Credentials document the prevention and mitigation actions of step 3. The verifiable, auditable nature of UNTP credentials supports the tracking and communication obligations of steps 4–5. Most national due diligence regulations reference the OECD guidance, making UNTP a common implementation layer across jurisdictions.

---

### IEA Critical Minerals Traceability Framework

**Instrument overview**

The [IEA Critical Minerals Traceability Framework](https://www.iea.org/) addresses the need for transparent, resilient supply chains for minerals essential to the clean energy transition — lithium, cobalt, nickel, rare earths, and copper. It calls for traceability systems that verify provenance, environmental performance, and social conditions from mine to manufactured product.

**UNTP relationship**

UNTP Digital Traceability Events trace mineral flows from extraction through processing and manufacturing. Digital Facility Records capture mine and refinery data including geolocation, emissions, and operating conditions. Digital Conformity Credentials from auditors verify responsible sourcing. The UNTP Critical Raw Materials extension and mass balance chain-of-custody design pattern directly implement the traceability and assurance the IEA framework calls for.

---

### WTO TBT Agreement

**Instrument overview**

The [WTO Agreement on Technical Barriers to Trade (TBT)](https://www.wto.org/english/tratop_e/tbt_e/tbt_e.htm) ensures that technical regulations, standards, and conformity assessment procedures do not create unnecessary obstacles to international trade. It requires members to use international standards where they exist, to apply regulations on a non-discriminatory basis, and to accept conformity assessments from other members through mutual recognition.

**UNTP relationship**

UNTP's design aligns with TBT principles. By building on international standards (W3C, ISO, IETF) rather than creating jurisdiction-specific protocols, UNTP avoids creating technical barriers. The Digital Conformity Credential architecture supports mutual recognition of conformity assessments — a conformity credential issued in one country can be verified and trusted in another. This enables developing-country producers to demonstrate compliance with importing-country requirements without duplicating assessments.

---

### WCO Authorised Economic Operator Programme

**Instrument overview**

The [WCO SAFE Framework of Standards](https://www.wcoomd.org/) establishes the Authorised Economic Operator (AEO) concept, under which customs administrations grant trusted-trader status to supply chain participants that meet security and compliance standards. AEO status provides trade facilitation benefits including expedited clearance, fewer inspections, and mutual recognition between customs authorities.

**UNTP relationship**

UNTP Digital Identity Anchors can link an economic operator's decentralised identifier to their AEO status in a national customs register, providing machine-verifiable proof of trusted-trader credentialing. Digital Conformity Credentials can carry AEO certification evidence. The transparency graph gives customs authorities supply chain visibility that supports both risk assessment and the expedited processing AEO operators expect.

---

### ILO Fundamental Conventions

**Instrument overview**

The [ILO Declaration on Fundamental Principles and Rights at Work](https://www.ilo.org/declaration/lang--en/index.htm) identifies eight fundamental conventions covering freedom of association (C87, C98), forced labour elimination (C29, C105), child labour abolition (C138, C182), and non-discrimination (C100, C111). These conventions define the core labour standards that all ILO member states are expected to respect regardless of ratification status.

**UNTP relationship**

UNTP Digital Conformity Credential social conformity topics map directly to ILO core labour standards. Conformity assessment bodies auditing against forced labour (C29), child labour (C182), freedom of association (C87/C98), and non-discrimination (C100/C111) criteria can issue DCCs that provide machine-verifiable evidence of compliance. The UNTP conformity topic taxonomy includes these ILO-aligned categories, enabling supply chain actors to demonstrate adherence to fundamental labour rights.

---

### UN Guiding Principles on Business and Human Rights

**Instrument overview**

The [UN Guiding Principles on Business and Human Rights (UNGPs)](https://www.ohchr.org/sites/default/files/documents/publications/guidingprinciplesbusinesshr_en.pdf), endorsed by the UN Human Rights Council in 2011, establish a three-pillar framework: the state duty to protect human rights, the corporate responsibility to respect human rights, and access to remedy for victims. The second pillar requires businesses to conduct human rights due diligence — identifying, preventing, mitigating, and accounting for adverse human rights impacts across their operations and value chains.

**UNTP relationship**

UNTP provides the supply chain visibility that the UNGPs' due diligence pillar requires. The transparency graph of linked credentials enables companies to identify human rights risks across multi-tier supply chains. Digital Conformity Credentials from social auditors provide verifiable evidence of prevention and mitigation actions. The UNGPs are the foundational framework behind the OECD Due Diligence Guidance and most national due diligence legislation — UNTP serves as a common digital implementation layer for all of them.

---

### UNECE Recommendation 49

**Instrument overview**

[UNECE Recommendation 49](https://unece.org/trade/uncefact/guidance-material) (Transparency at Scale) provides a framework for transparent, traceable, and sustainable value chains. It defines principles and guidelines for using verifiable credentials, decentralised identifiers, and linked data to exchange sustainability and traceability information across international supply chains. Recommendation 49 was developed by UN/CEFACT as the policy foundation for the UNTP technical specification.

**UNTP relationship**

UNTP is the technical implementation of UNECE Recommendation 49. Every UNTP specification — Digital Product Passport, Digital Conformity Credential, Digital Traceability Event, Digital Facility Record, Digital Identity Anchor, and Identity Resolver — implements the architecture and principles that Recommendation 49 defines. The recommendation provides the policy mandate and governance framework; UNTP provides the technical standards, data models, and interoperability protocols.

---

### CIRPASS-2

**Initiative overview**

[CIRPASS-2](https://cirpassproject.eu/) is the EU-funded coordination and support action that develops the standardisation roadmap and interoperability framework for Digital Product Passports under the ESPR. Building on the original CIRPASS project, CIRPASS-2 conducts alignment assessments with international DPP initiatives and defines the technical architecture for EU product passports across priority sectors.

**UNTP relationship**

The CIRPASS-2 alignment review assessed UNTP against 14 topics and confirmed architectural interoperability. Both frameworks share W3C Verifiable Credentials, linked-data semantics, and content-negotiated identity resolution. CIRPASS-2 operates as a compatible EU regulatory profile within the broader UNTP architecture — an EU manufacturer implementing UNTP can satisfy ESPR DPP requirements with minimal additional effort, and vice versa.

---

### Battery Pass

**Initiative overview**

The [Battery Pass](https://thebatterypass.eu/) consortium (2022–2025), funded by the German Federal Ministry for Economic Affairs and Climate Action, developed the content guidance and technical standards for the EU Battery Regulation's battery passport. It defined 88 mandatory and recommended data attributes across seven clusters and produced a reference implementation demonstrating data exchange between supply chain actors.

**UNTP relationship**

The Battery Pass content guidance maps directly to the UNTP DPP data model. The UNTP DPP specification includes a complete attribute-level mapping to DIN DKE SPEC 99100 (which codified the Battery Pass outputs). Battery manufacturers can use UNTP DPPs as the technical vehicle for issuing battery passports that satisfy EU Battery Regulation requirements while remaining interoperable with global supply chain partners.

---

### Global Battery Alliance

**Initiative overview**

The [Global Battery Alliance (GBA)](https://www.globalbattery.org/) is a public-private partnership of 200+ organisations working to establish a sustainable and responsible battery value chain. GBA defines the Battery Passport rulebook covering greenhouse gas emissions, human rights, child labour, recycled content, and responsible sourcing across the battery lifecycle.

**UNTP relationship**

The GBA Battery Passport is registered as a UNTP extension. GBA rulebook criteria map to UNTP DPP sustainability metrics and DCC conformity topics. By activating through the UNTP community, GBA members can issue interoperable battery credentials that satisfy both GBA rules and regulatory requirements (EU Battery Regulation, CBAM) using a single technical framework.

---

### Global Dialogue on Seafood Traceability

**Initiative overview**

The [Global Dialogue on Seafood Traceability (GDST)](https://traceability-dialogue.org/) is an international, business-to-business platform that developed interoperability standards for seafood traceability. GDST defines Key Data Elements (KDEs) and Critical Tracking Events (CTEs) for wild-capture and aquaculture supply chains, built on GS1/EPCIS foundations.

**UNTP relationship**

GDST Key Data Elements and Critical Tracking Events align with UNTP Digital Traceability Events, which are themselves a simplified profile of ISO 19987 (EPCIS). Seafood supply chain actors using GDST standards can issue UNTP DTEs as verifiable credentials, adding cryptographic integrity and linked-data discoverability to existing traceability data. UNTP DPPs can carry species, catch area, and sustainability certification data relevant to seafood markets.

---

### Catena-X

**Initiative overview**

[Catena-X](https://catena-x.net/) is the automotive industry's collaborative data ecosystem for secure, sovereign data exchange across the value chain. It defines standards for data models, digital twins, and decentralised data exchange covering use cases including carbon footprint tracking, circularity, traceability, and supply chain resilience. Catena-X operates through certified operating companies and data exchange infrastructure.

**UNTP relationship**

Catena-X's decentralised data exchange architecture is conceptually aligned with the UNTP transparency graph — both enable multi-tier supply chain data sharing without centralised platforms. Catena-X product carbon footprint data models overlap with UNTP DPP emissions metrics. The partnership opportunity lies in cross-industry interoperability: automotive supply chains intersect with mining, metals, chemicals, and electronics sectors where UNTP is also active.

---

### Responsible Minerals Initiative / RMAP

**Initiative overview**

The [Responsible Minerals Initiative (RMI)](https://www.responsiblemineralsinitiative.org/) provides tools and resources for companies to make sourcing decisions that improve regulatory compliance and support responsible mineral production. The Responsible Minerals Assurance Process (RMAP) is an independent third-party audit programme that assesses smelter and refiner management systems against responsible sourcing standards for tin, tantalum, tungsten, gold, cobalt, and mica.

**UNTP relationship**

RMI is a registered UNTP conformity scheme. RMAP smelter audit results can be issued as UNTP Digital Conformity Credentials, providing machine-verifiable proof that a smelter or refiner has been independently assessed against responsible sourcing criteria. UNTP Digital Traceability Events trace mineral flows through RMAP-audited facilities, enabling downstream manufacturers to demonstrate responsible sourcing for Dodd-Frank, EU Conflict Minerals, and OECD Due Diligence compliance.

---

### Coppermark

**Initiative overview**

[Coppermark](https://coppermark.org/) is a comprehensive assurance framework for the copper, molybdenum, nickel, and zinc value chains. It assesses mine sites and downstream facilities against 32 ESG criteria covering community, business, environmental, labour, and governance issues, aligned with the UN SDGs and referenced by major industry buyers.

**UNTP relationship**

Coppermark is a registered UNTP conformity scheme. Coppermark's 32 ESG criteria map to UNTP DCC conformity topics across environmental, social, and governance dimensions. Coppermark assessment results can be issued as UNTP Digital Conformity Credentials, enabling mine operators and processors to provide machine-verifiable proof of responsible production to downstream buyers, regulators, and investors.

---

### Aluminium Stewardship Initiative

**Initiative overview**

The [Aluminium Stewardship Initiative (ASI)](https://aluminium-stewardship.org/) operates two certification standards: the Performance Standard (covering governance, environment, social, and material stewardship at facility level) and the Chain of Custody Standard (tracking responsible aluminium through the value chain using mass balance or market credits). ASI certification is increasingly referenced by automotive and construction buyers and relevant to EU CBAM compliance.

**UNTP relationship**

ASI Performance Standard criteria align with UNTP DCC conformity topics. ASI Chain of Custody certification aligns with UNTP DTE chain-of-custody design patterns. ASI-certified facilities can issue UNTP Digital Conformity Credentials as machine-verifiable proof of certification. UNTP DPPs for aluminium products can carry embedded emissions data (supporting CBAM) alongside ASI certification claims.

---

### Textile Exchange

**Initiative overview**

[Textile Exchange](https://textileexchange.org/) develops and manages a suite of fibre and materials standards — including the Organic Content Standard (OCS), Recycled Claim Standard (RCS), Global Recycled Standard (GRS), and Responsible Wool Standard (RWS). These standards provide chain-of-custody certification for sustainable fibres from source to finished textile product.

**UNTP relationship**

Textile Exchange fibre standards map to UNTP DPP material composition data and DCC conformity claims. Chain-of-custody certification at each supply chain stage can be issued as UNTP Digital Traceability Events and Conformity Credentials. As the EU ESPR phases in textile DPP requirements, Textile Exchange certification data can flow through UNTP credentials to satisfy both voluntary buyer requirements and regulatory obligations.

---

### Roundtable on Sustainable Palm Oil

**Initiative overview**

The [Roundtable on Sustainable Palm Oil (RSPO)](https://rspo.org/) is a multi-stakeholder initiative that develops and implements global standards for sustainable palm oil. RSPO certification covers environmental criteria (no deforestation, no peat, no fire), social criteria (labour rights, community consent), and supply chain models (identity preserved, segregated, mass balance, book and claim).

**UNTP relationship**

RSPO supply chain certification aligns with UNTP DTE traceability and DCC conformity models. RSPO's supply chain models — particularly identity preserved and segregated — map to UNTP chain-of-custody design patterns. UNTP DTEs can trace palm oil from plantation through mill to refinery with geolocation data supporting EUDR compliance. RSPO certification can be issued as UNTP DCCs, providing machine-verifiable proof of sustainable sourcing.
