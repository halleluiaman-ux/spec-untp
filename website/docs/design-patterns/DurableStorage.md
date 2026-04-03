---
sidebar_position: 56
title: Durable Storage
---

import Disclaimer from '../\_disclaimer.mdx';

<Disclaimer />

# Durable Storage

## Overview

A common and important question raised by UNTP implementers and policymakers is:

> _"What happens to a Digital Product Passport or conformity credential when the issuing organisation goes out of business?"_

This page provides guidance on how UNTP credential publishers can select storage approaches that ensure their credentials remain accessible, tamper-evident, and verifiable for the full required lifetime of those credentials — independent of any individual organisation or service provider.

This guidance is relevant to all actors who publish UNTP credentials including issuers of:

- [Digital Product Passports (DPP)](../specification/DigitalProductPassport.md)
- [Digital Conformity Credentials (DCC)](../specification/ConformityCredential.md)
- [Digital Traceability Events (DTE)](../specification/DigitalTraceabilityEvents.md)
- [Digital Facility Records (DFR)](../specification/DigitalFacilityRecord.md)
- [Digital Identity Anchors (DIA)](../specification/DigitalIdentityAnchor.md)

---

## Challenges

UNTP credentials are designed to carry sustainability, traceability, and conformity claims that must remain verifiable for the lifetime of a product, facility, or business — which may be decades. However, the organisations that issue those credentials (manufacturers, certifiers, conformity assessment bodies) are subject to the normal lifecycle of businesses: they may restructure, be acquired, become insolvent, or simply cease operations.

Similarly, commercial storage or hosting services used by those organisations may be discontinued, acquired, or changed.

The challenge this creates has three distinct dimensions:

1. **Availability**: Will the credential still be retrievable at its URL after the issuer is gone?
2. **Integrity**: Can a verifier be confident the content at a given URL has not been silently altered or replaced?
3. **Economic sustainability**: Who pays for storage to continue when the original publisher no longer exists?

A naive approach — hosting credentials on the issuer's own web server or even a standard cloud provider — fails on all three counts once the issuer stops paying their bills. Even blockchain-based or decentralised storage networks are not immune: networks can lose critical mass of participants, be abandoned by their developer communities, or become economically unviable if token incentives collapse. No technical solution can guarantee infinite longevity, but the approaches described below are designed to maximise durability by distributing both the storage responsibility and the economic incentive to serve data across many independent actors.

---

## Why a Protocol-Based Approach Is Preferred

UNTP is a fundamentally decentralised architecture. It deliberately avoids any requirement for a central data repository. This design principle applies equally to credential storage.

Rather than recommending a centralised national or international backup register — which would be costly to build, politically contentious to govern, and fragile as a single point of failure — UNTP recommends a **protocol-based** approach to durable storage.

A compliant durable storage approach SHOULD satisfy all three of the following properties:

1. **Post-issuer availability**: The credential continues to be served even after the original publisher has ceased operations.
2. **Post-provider availability**: The credential continues to be served even if the specific storage service provider also ceases operations.
3. **Tamper-evident integrity**: It is not possible to silently replace or alter a credential at its storage address without detection.

Existing open protocols already satisfy these properties. The following sections describe them and provide practical implementation guidance.

---

## Content-Addressable Storage: The Key Concept

The foundation of durable, tamper-evident storage is **content-addressability**. In a content-addressable system:

- The **address** (identifier/URL) of a credential is derived directly from a cryptographic hash of its content.
- This means a given address always and only refers to one specific document. Any change to the document — even a single character — produces a completely different address.
- Because the address _is_ the hash of the content, any party serving the content can be verified independently, without trusting the server itself.

This approach is fundamentally different from conventional web hosting, where a URL like `https://company.example/dpp/product-123.json` is just a pointer controlled by the domain owner, who can change or delete the content at will without any external party detecting the substitution.

Content-addressable storage underpins both of the primary protocols recommended below.

---

## Recommended Protocols

### IPFS — InterPlanetary File System

[IPFS](https://ipfs.tech/) is a widely-adopted, open, content-addressable distributed file system. Key properties relevant to UNTP:

- **Content Identifiers (CIDs)**: Every object stored in IPFS is identified by a CID — a hash-based, self-describing identifier. This CID is the canonical address of a credential regardless of which node serves it.
- **Competitive marketplace of storage nodes**: Many independent IPFS pinning services and gateways exist. If one goes offline, the content remains accessible from others that have pinned the same CID.
- **Vendor neutrality**: Because the CID is independent of any specific provider, publishers can migrate between storage providers without changing the credential's address.
- **HTTP gateway compatibility**: IPFS content is accessible via standard HTTPS gateways (e.g., `https://ipfs.io/ipfs/<CID>` or `https://<CID>.ipfs.dweb.link`), ensuring compatibility with conventional web verifiers.

#### Filecoin — Economic Incentives for IPFS Durability

[Filecoin](https://filecoin.io/) operates on top of IPFS and adds a cryptoeconomic incentive layer. Storage "miners" are rewarded for proving they continue to store specific data over time. This means:

- Storage can be paid for in advance for a defined period (or in perpetuity through endowment-style deals).
- Even after a publisher ceases operations, independent miners have a financial incentive to continue serving the data.
- Filecoin is complementary to IPFS: the same CID is used, and content is retrievable through any IPFS-compatible gateway.

### Arweave — Permanent, Incentivised Storage

[Arweave](https://www.arweave.org/) is a separate protocol designed specifically around the concept of **permanent, one-time-payment storage**. Key properties:

- **Endowment model**: Publishers pay a single upfront fee calculated to fund storage in perpetuity by a decentralised network of miners.
- **Permaweb**: Data stored on Arweave is added to an append-only, immutable ledger — content cannot be deleted or altered.
- **Content addressing**: Like IPFS, Arweave uses content-based transaction IDs, providing tamper-evident integrity.
- **Long-term economic design**: The protocol's economic model is explicitly designed to sustain storage without ongoing payments from the original publisher, making it particularly well-suited to the "issuer goes out of business" scenario.

In effect, Arweave combines the distributed storage of IPFS with the economic durability incentives of Filecoin in a single, self-contained protocol.

---

## Storage Maturity Levels

UNTP acknowledges that implementers will have varying levels of technical capability and risk tolerance. The following maturity levels are provided to guide implementers and help policymakers understand the relative durability of different approaches.

### Level 1 — Self-Hosted (Baseline)

The credential publisher hosts credentials on their own infrastructure (web server, cloud storage bucket, etc.).

| Property                   | Assessment                                                                         |
| -------------------------- | ---------------------------------------------------------------------------------- |
| Post-issuer availability   | ❌ Credentials will likely become unavailable when the publisher ceases operations |
| Post-provider availability | ❌ Dependent on the publisher's infrastructure and payment continuity              |
| Tamper-evident integrity   | ⚠️ Dependent on credential signature only; URL content can be silently replaced    |
| Cost                       | Low                                                                                |
| Complexity                 | Low                                                                                |

This approach is adequate for early pilot implementations and short-lived credentials but is **not recommended** for production Digital Product Passports that must remain accessible for the product's full lifetime.

### Level 2 — Managed Commercial Storage

The publisher uses a commercial cloud or managed hosting service (e.g., a major cloud provider's object storage) with up-front contractual terms for a defined retention period.

| Property                   | Assessment                                                                                                                           |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Post-issuer availability   | ⚠️ Dependent on contract terms and continued payment; likely fails when issuer ceases operations                                     |
| Post-provider availability | ⚠️ Major providers are relatively durable but operate on recurring payment models — credentials will be deleted if fees are not paid |
| Tamper-evident integrity   | ⚠️ Dependent on credential signature only unless content-addressable hosting is used                                                 |
| Cost                       | Low–Medium                                                                                                                           |
| Complexity                 | Low                                                                                                                                  |

**Note**: Even major cloud providers (AWS, Azure, Google Cloud) do not currently offer a "pay once, store forever" model. All operate on a recurring-fee basis, which means credentials will be deleted when payment stops — which will typically happen when a business ceases operations.

This level provides modest improvement over Level 1 but does not adequately address the core durability problem for long-lived credentials.

### Level 3 — Protocol-Based Durable Storage (Recommended)

The publisher stores credentials using a content-addressable, economically incentivised decentralised storage protocol such as Filecoin or Arweave.

| Property                   | Assessment                                                                                                       |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Post-issuer availability   | ✅ Content remains accessible via any compatible gateway, independent of the original publisher                  |
| Post-provider availability | ✅ No single provider dependency; content addressed by hash, served by any participating node                    |
| Tamper-evident integrity   | ✅ Content addressing guarantees integrity at the storage layer, in addition to the VC's cryptographic signature |
| Cost                       | Low (especially Arweave's one-time model)                                                                        |
| Complexity                 | Medium                                                                                                           |

This is the **recommended approach** for all UNTP credentials that must remain accessible for multi-year or multi-decade periods. It is the only non-government approach that can credibly satisfy the durability requirements of regulations such as the EU Digital Product Passport framework without requiring state-managed infrastructure.

---

## How Durable Storage Interacts with UNTP Identity Resolution

UNTP uses an [Identity Resolver](../specification/IdentityResolver.md) to link a product identifier (e.g., a GS1 Digital Link) to the set of credentials associated with that product. The relationship between identity resolution and durable storage is as follows:

- The **Identity Resolver** provides a discoverable, resolvable link to the current location of a credential. This link can be updated if a credential is re-issued or migrated.
- The **credential's storage address** (e.g., an IPFS CID or Arweave transaction ID) is the permanent, tamper-evident reference to a specific credential version.
- For Level 3 implementations, it is recommended that the Identity Resolver link-set include the content-addressable URI (e.g., `ipfs://<CID>` or `ar://<txid>`) alongside any HTTPS gateway URL, so that verifiers can independently confirm integrity.

This combination means that:

1. Discoverability is maintained through the identity resolution layer.
2. Long-term integrity and availability are guaranteed through the durable storage layer.

---

## Guidance for Policymakers and Regulators

National regulations inspired by the EU DPP model often propose a centralised government-managed backup register as a solution to the post-issuer availability problem. UNTP recommends that policymakers consider protocol-based durable storage as an alternative or complement to such registers, for the following reasons:

- **Lower cost**: Protocol-based storage requires no government infrastructure build-out or ongoing operational budget.
- **Higher scalability**: A decentralised network scales naturally with the volume of credentials without central bottlenecks.
- **Greater durability**: Decentralised protocols are not subject to a single point of failure, including government budget cuts or policy changes.
- **Higher integrity**: Content-addressable storage provides tamper-evidence at the storage layer that a conventional register cannot offer without additional technical measures.
- **Vendor and jurisdiction neutrality**: No single national government, company, or jurisdiction controls access to the stored data.

Where national regulation requires a register, policymakers are encouraged to design that register as an **index of content-addressable identifiers** (pointing to credentials stored in decentralised protocols) rather than as a centralised store of credential content. This approach provides the regulatory assurance of a known inventory while leveraging the durability and integrity of open protocols.

---

## Implementation Guidance for Credential Publishers

Publishers wishing to implement Level 3 durable storage should follow these steps:

1. **Generate the credential** according to the relevant UNTP specification (DPP, DCC, DTE, etc.) and sign it with the issuer's DID key.
2. **Store the credential** using a supported durable storage protocol:
   - For IPFS + Filecoin: Use a pinning service such as [web3.storage](https://web3.storage/), [Pinata](https://www.pinata.cloud/), or [Lighthouse](https://www.lighthouse.storage/) and request a Filecoin storage deal for long-term durability.
   - For Arweave: Upload using the [Arweave SDK](https://docs.arweave.org/) or a bundling service such as [Irys (formerly Bundlr)](https://irys.xyz/).
3. **Record the content-addressable identifier** (CID or Arweave TX ID) returned by the storage service.
4. **Register the credential** in your Identity Resolver link-set, including:
   - An HTTPS gateway URL for broad compatibility.
   - The native content-addressable URI (`ipfs://<CID>` or `ar://<txid>`) for integrity verification.
5. **Verify retrievability** by resolving the CID or TX ID through an independent gateway before publishing the product identifier.

---

## Summary

|                                     | Level 1     | Level 2                 | Level 3                    |
| ----------------------------------- | ----------- | ----------------------- | -------------------------- |
| **Storage**                         | Self-hosted | Commercial cloud        | IPFS+Filecoin or Arweave   |
| **Survives issuer closure**         | ❌          | ⚠️                      | ✅                         |
| **Survives provider closure**       | ❌          | ❌                      | ✅                         |
| **Tamper-evident at storage layer** | ❌          | ❌                      | ✅                         |
| **One-time payment possible**       | N/A         | ❌                      | ✅ (Arweave)               |
| **Recommended for production**      | Pilots only | Short-lived credentials | All long-lived credentials |

For any UNTP credential that must remain accessible for the lifetime of a physical product — particularly Digital Product Passports — **Level 3 protocol-based durable storage is strongly recommended**.
