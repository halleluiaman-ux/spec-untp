---
sidebar_position: 4
title: Best Practices
---

import Disclaimer from '../\_disclaimer.mdx';

<Disclaimer />

## Overview

Supply chain transparency is not just a matter of issuing verifiable credentials — it requires solving a series of interconnected challenges that arise when many independent actors exchange sustainability data across complex, multi-tier value chains. This section describes common supply chain challenges and presents how UNTP can be used to address each of them. Each design pattern is non-normative best practice guidance for UNTP implementers.

## [Transparency Graphs](./TrustGraphs.md)

**Challenge:** Verifying a single credential proves it hasn't been tampered with and was issued by the stated issuer — but it says nothing about whether the _graph_ of linked claims across many credentials is trustworthy. Real compliance verification requires following chains of evidence across multiple credentials issued by different parties: confirming issuer identity, checking accreditation of conformity assessment bodies, tracing product origins through traceability events, and verifying mass-balance consistency.

**Solution:** UNTP provides a method to recursively discover credentials via identity resolvers, assemble them into a linked-data transparency graph that represents your value chain, and verify the graph against tiered business rules — from core UNTP validation through industry-specific, geography-specific, and organisation-specific rules.

## [Different Digital Maturities](./DigitalMaturities.md)

**Challenge:** Supply chains will operate with a mix of paper certificates, PDF documents, and digital credentials for years to come. Upstream suppliers may not yet issue verifiable data (no machine-readable structure, no cryptographic integrity, no consistent discovery). Downstream customers may not yet be equipped to consume digital credentials.

**Solution:** Use AI (Large Language Models) to transform unstructured upstream data into graph-compatible linked data — flagged as unverified — so that the same validation rules can run across the entire graph regardless of source maturity. For downstream consumers, every UNTP credential is designed to be both human-readable (via render templates and hosted verifier links) and machine-readable, so a single credential serves all maturity levels.

## [Mass Balance](./MassBalance.md)

**Challenge:** When qualifying and non-qualifying materials are mixed during production, a manufacturer could fraudulently claim the entire output as sustainable — re-using valid input credentials across a larger volume than they cover. Verifying mass-balance integrity requires visibility of all facility inputs, outputs, and production processes, but this data is almost always commercially confidential.

**Solution:** Record every input shipment, production run, and output shipment as verifiable traceability events with quantity data. An independent auditor verifies that output sustainability claims never exceed input quantities, issuing a conformity credential that attests to mass-balance integrity — without exposing the facility's confidential production data to buyers or competitors.

## [Linked Lifecycle Data](./LinkedLifecycleData.md)

**Challenge:** A product's lifecycle extends far beyond the factory gate — through retail, use, repair, refurbishment, and end-of-life processing. But the original manufacturer may no longer exist when lifecycle events need to be recorded years later, and re-issuing product passports creates problems of provenance, authorisation, and fragmentation.

**Solution:** Maintain the original Digital Product Passport as an immutable, cryptographically signed record. Authorised parties (service centres, recyclers, owners) add lifecycle events as new linked credentials via the identity resolver — building a complete, verifiable audit trail without modifying the original passport.

## [Variant-Based Disclosure](./VariantBasedDisclosure.md)

**Challenge:** Different supply chain actors — the public, customers, regulators, auditors, recyclers — need access to different claims within the same credential. But credential-level access control is too coarse-grained: a party either has access to an entire credential or they don't.

**Solution:** Publish multiple document variants of the same credential, each containing a role-appropriate subset of claims with stubs indicating what other data exists. The identity resolver routes requests to the appropriate variant based on an access role parameter, enabling claim-level granularity without requiring cryptographic selective disclosure.

## [Digital Wallets](./DigitalWallets.md)

**Challenge:** The verifiable credentials ecosystem assumes a human holder presenting credentials from a wallet on demand. But UNTP credentials describe inanimate products — a box of goods, a shipment of steel — that cannot participate in presentation exchanges. The wallet-centric model does not fit supply chain transparency as the primary exchange pattern.

**Solution:** UNTP centres on resolver-based credential discovery rather than wallet-based presentation, ensuring any party with access to a product identifier can find credentials without prior relationships or specific software. Wallets remain a complementary mechanism for organisational authentication, regulatory compliance in wallet-mandated jurisdictions, and B2B credential exchange.

## [Durable Storage](./DurableStorage.md)

**Challenge:** UNTP credentials must remain verifiable for the lifetime of a product — potentially decades — but issuing organisations may cease operations and stop paying for hosting. Conventional web hosting and even commercial cloud storage fail once the bills stop being paid.

**Solution:** Use content-addressable, economically incentivised storage protocols (IPFS/Filecoin or Arweave) where the credential's address is derived from its content hash, storage persists independent of the original publisher, and tamper-evidence is guaranteed at the storage layer. This provides post-issuer and post-provider durability without requiring centralised government registers.
