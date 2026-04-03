---
sidebar_position: 2
title: Specification
---

import Disclaimer from '../\_disclaimer.mdx';

<Disclaimer />

The UNTP specification defines a suite of interoperable digital credentials and discovery mechanisms that, together, enable verifiable supply chain transparency at scale. Each credential type is independently implementable and targeted at a specific supply chain role, but the real value emerges when multiple actors across a value chain each play their part — creating a connected graph of verifiable data that supports automated compliance assessment without any central authority or data store.

![UNTP Components](../assets/images/arch-untp-components.png)

## Credential Specifications

### For Producers and Manufacturers

Producers and manufacturers integrate DPP, DFR, and DTE credentials into their existing production management and ERP systems — either by building their own integration or because their business software provider has implemented UNTP credential support.

The [Digital Product Passport](DigitalProductPassport.md) (DPP) is issued by the shipper of goods and carries product identity, characteristics, and sustainability performance data for serialised products or product batches. It is deliberately lightweight, designed to carry the minimum data needed by downstream receivers — such as scope 3 emissions intensity or deforestation-free status — while linking to conformity credentials for independent verification and traceability events for supply chain visibility.

The [Digital Facility Record](DigitalFacilityRecord.md) (DFR) is issued by facility owners or operators and describes facility identity, location, ownership, and sustainability performance over defined reporting periods. Facilities typically hold multiple identifiers from different authorities, and the DFR allows each to resolve to the same authoritative facility record via the identity resolver infrastructure.

The [Digital Traceability Event](DigitalTraceabilityEvents.md) (DTE) records the lifecycle activities of products as lightweight verifiable credentials capturing the what, when, where, who, and how of supply chain events. Three event types — make, move, and modify — model any supply chain activity, enabling facility-level mass-balance assessment and full upstream traceability when linked to DPPs.

### For Conformity Scheme Owners

The [Conformity Vocabulary Catalog](ConformityVocabularyCatalog.md) (CVC) enables scheme owners and regulators to publish their rules, criteria, and scoring frameworks as machine-readable linked data vocabularies. When conformity criteria are published as unique digital objects, DPP claims can be unambiguously verified against conformity credentials and compared across different schemes — pushing complexity to scheme owners so that manufacturers and conformity assessment bodies have simpler, more consistent work.

### For Conformity Assessment Bodies

The [Conformity Credential](ConformityCredential.md) is issued by conformity assessment bodies (CABs) and provides independent, digitally verifiable assessments of products, facilities, or organisations against published standards and regulations. Each credential carries the assessor's accreditation, the reference scheme and profile, measured performance metrics, and a conformance determination — giving downstream verifiers high-confidence evidence to support the claims made in product passports and facility records.

### For Identifier Registers

The [Identity Resolver](IdentityResolver.md) (IDR) defines how existing identifier systems — business registers, product registries, facility cadastres — participate in a consistent discover-resolve-verify workflow. UNTP does not replace existing identifiers but builds upon them, enabling any identifier (whether registry-managed or self-issued as a DID) to resolve to verifiable data such as product passports, facility records, and conformity credentials.

### For Identity Authorities

The [Digital Identity Anchor](DigitalIdentityAnchor.md) (DIA) is issued by authoritative registers — national business registers, trademark offices, mining cadastres, accreditation bodies — and provides a digitally verifiable binding between a decentralised identifier (DID) and an authoritative registered identity. The DIA allows verifiers to confirm not only that a credential was issued by the controller of a DID, but that the DID controller is the genuine holder of a registered identity.

### Foundational Components

The following specifications provide the shared technical foundations and semantic building blocks used across all UNTP credential types.

The [Verifiable Credentials Profile](VerifiableCredentials.md) (VCP) specifies the W3C Verifiable Credentials and DID standards that underpin all UNTP credentials, ensuring that every credential is digitally signed, tamper-evident, revocable, and independently verifiable.

The [Decentralised Access Control](DecentralisedAccessControl.md) (DAC) specification defines patterns for balancing transparency with confidentiality. It provides six progressively stronger access control patterns — from anonymous public access through to decentralised authentication — that can be applied independently or in combination to meet each actor's data-sharing policies.

The [Core Vocabulary](CoreVocabulary.md) defines the shared classes and properties — such as Product, Facility, Party, Attestation, and Assessment — that are reused across all UNTP credential types, ensuring consistent semantics and interoperability.

The [Core Taxonomies](CoreTaxonomies.md) provide standardised classification schemes for conformity topics (what is being assessed) and performance metrics (how performance is measured), enabling automated comparison and aggregation of sustainability data across credentials and value chains.

## Beyond the Specification

The specification is the technical core of UNTP, but successful adoption depends on broader context. The following sections of this site provide complementary guidance.

- **[Governance](../governance)** — How the UNTP is developed, maintained, and versioned through an open, consensus-driven process.
- **[Best Practices](../design-patterns)** — Solutions for common supply chain challenges including transparency graphs, anti-counterfeiting, and chain-of-custody mass-balance allocation.
- **[Business Case](../business-case)** — The value proposition for industry and government, including cost-benefit analysis and adoption incentives.
- **[Tools and Support](../tools-and-support)** — Implementation guidance including how to test and verify your UNTP implementation.
- **[Implementations](../implementations)** — Registers of software providers, industry pilots, conformity schemes, identity registers, and other implementers — and how to register your own implementation.
