---
sidebar_position: 8
title: Case for Schemes and Registers
---

import Disclaimer from '../\_disclaimer.mdx';

<Disclaimer />

## Purpose

The purpose of this page is to provide a structured framework for building a business case for UNTP conformance by the services that form the trust infrastructure on which UNTP depends. While the [business case for industry](BusinessCaseIndustry.md) and [business case for government](BusinessCaseGovernment.md) address the demand side — organisations that produce, trade, and regulate goods — this page addresses the supply side: the services that issue credentials, publish vocabularies, and operate the identity infrastructure that makes UNTP work at scale.

Without these services, UNTP cannot function:

- Without **conformity schemes** publishing digital criteria vocabularies, Digital Conformity Credentials (DCCs) cannot reference standardised conformity topics and performance metrics.
- Without **conformity assessment bodies (CABs)** issuing DCCs, there is no third-party verification of sustainability claims.
- Without **identity registers** issuing Digital Identity Anchors (DIAs), there is no trust anchor linking DIDs to verified legal entities.
- Without **identity resolver operators** hosting resolver infrastructure, there is no discovery mechanism for DPPs, DCCs, and DTEs.

This page makes the case for each of these service types to invest in UNTP conformance, using the same cost/benefit structure as the industry and government pages.

Note: The economic impacts described in this document are projections based on available data and economic models. Actual results will vary. Regular monitoring and evaluation through the UNTP [Impact Assessment Framework (IAF)](ImpactAssessmentFramework.md) is recommended.

## Benefits — Revenue and Market Growth

### Expanded Market Reach

**Description** — As UNTP adoption grows across industries and jurisdictions, supply chains will increasingly require UNTP-conformant services as their default providers. Conformity schemes whose credentials are machine-readable and interoperable become the natural choice for regulated supply chains. CABs that issue verifiable DCCs become preferred over those issuing only paper certificates. Registers and resolver operators that conform to UNTP standards become essential infrastructure. Non-conformant services risk losing market share to competitors who have invested in UNTP conformance.

**How UNTP helps** — UNTP creates a network effect: as more industry participants adopt UNTP, the value of being a UNTP-conformant service provider increases. Schemes listed in the UNTP [Conformity Vocabulary Catalog (CVC)](../specification/ConformityCredential) registry, CABs that issue DCCs, and registers that issue DIAs are discoverable and usable by any UNTP participant — expanding addressable market without bilateral integration.

**Quantification** — Primarily a market positioning benefit. Early-mover conformity schemes and CABs are likely to capture disproportionate market share as UNTP adoption accelerates, particularly in sectors subject to EU and US sustainability regulations.

**Key variables**

- Current market share and competitive positioning
- Pace of UNTP adoption in served industry sectors
- Competitor investment in UNTP conformance
- Geographic exposure to regulated markets (EU, US, Japan, Australia)

### Multi-Scheme Recognition

**Description** — Conformity schemes that publish their criteria as digital vocabularies enable mutual recognition across supply chains. When scheme criteria are expressed as standardised conformity topics with measurable performance metrics, it becomes possible to map overlapping requirements across schemes — allowing a single assessment to satisfy multiple scheme requirements. This makes the scheme usable across more supply chain contexts without requiring duplicative assessments.

**How UNTP helps** — The UNTP [Conformity Vocabulary Catalog](../specification/ConformityCredential) provides a structured format for schemes to publish their criteria as machine-readable conformity topics and performance metrics. When multiple schemes publish in this format, automated comparison and mapping of requirements becomes possible. This enables multi-scheme mutual recognition — where a CAB assessment against one scheme can demonstrably satisfy overlapping requirements of other schemes.

**Quantification** — Schemes with digital vocabularies can serve 2–5x more supply chain contexts than those with paper-only criteria. Mutual recognition reduces total assessment volume while maintaining scheme revenue through broader applicability.

**Key variables**

- Degree of overlap with other major schemes in the same sector
- Number of supply chain contexts where the scheme is currently applicable
- Willingness of peer schemes to participate in mutual recognition
- Complexity and specificity of scheme criteria

### New Revenue Streams

**Description** — UNTP conformance opens new fee-based service opportunities for each service type. CABs can offer digital credential issuance as a value-added service alongside traditional assessment. Identity registers can offer DIA issuance and resolver hosting as subscription services. Conformity schemes can offer vocabulary licensing or registry listing fees. These represent incremental revenue from existing relationships rather than entirely new customer acquisition.

**How UNTP helps** — UNTP defines the credential formats (DCCs, DIAs) and infrastructure standards (identity resolvers) that create these service opportunities. The standardised approach means that service providers can build capabilities once and serve all UNTP-participating supply chains, rather than implementing bespoke solutions for each buyer or jurisdiction.

**Quantification** — $5–$20 per credential issued (volume-dependent) for CABs. Resolver hosting and DIA issuance as subscription services for registers. Revenue scales with UNTP adoption volume in served sectors.

**Key variables**

- Volume of assessments, registrations, or resolutions per year
- Pricing model (per-credential, subscription, bundled with existing services)
- Competitive landscape for digital credential services
- Client willingness to pay for digital value-added services

## Benefits — Operational Efficiency

### Assessment Efficiency

**Description** — When conformity schemes publish their criteria as structured digital vocabularies with defined conformity topics and measurable performance metrics, CABs benefit from reduced ambiguity in interpreting requirements. Assessment checklists can be generated programmatically from scheme vocabularies, evidence requirements become explicit, and semi-automated assessment workflows become possible.

**How UNTP helps** — UNTP's [Conformity Vocabulary Catalog](../specification/ConformityCredential) format structures scheme criteria into conformity topics and performance metrics with defined measurement methods, units, and thresholds. CABs can consume these vocabularies to auto-generate assessment templates, validate evidence against explicit criteria, and reduce the manual interpretation that currently adds time and cost to every assessment.

**Quantification** — 20–30% reduction in per-assessment effort when scheme criteria are machine-readable. The benefit is greatest for schemes with large numbers of criteria and for CABs assessing against multiple schemes.

**Key variables**

- Number of schemes the CAB assesses against
- Complexity and volume of criteria per scheme
- Current level of assessment automation
- Availability of structured evidence from assessed entities

### Reduced Duplication

**Description** — Many supply chains require conformity with multiple schemes that have substantially overlapping requirements. Without mutual recognition, each scheme requires a separate assessment — even where the same evidence satisfies multiple requirements. This duplication increases costs for assessed entities and reduces CAB throughput.

**How UNTP helps** — When schemes publish digital vocabularies, overlapping requirements become identifiable through automated comparison of conformity topics and metrics. Multi-scheme mutual recognition allows a single CAB assessment to satisfy requirements from multiple schemes, increasing CAB throughput without reducing assessment rigour.

**Quantification** — Overlapping requirements across common schemes in sectors such as mining, agriculture, and textiles can reduce total audit effort by 15–25% when mutual recognition is in place.

**Key variables**

- Degree of criteria overlap across schemes served
- Number of multi-scheme clients
- Current proportion of duplicative assessment effort
- Mutual recognition agreements in place or under negotiation

### Automated Credential Lifecycle

**Description** — Traditional certificate management — issuance, distribution, renewal, revocation, and status checking — is largely manual. Paper or PDF certificates must be emailed, tracked, renewed before expiry, and manually revoked if an entity loses conformity. This administrative burden scales linearly with the number of active certificates.

**How UNTP helps** — Digital Conformity Credentials and Digital Identity Anchors support automated lifecycle management. Issuance can be triggered by assessment completion, distribution is instant via identity resolvers, renewal can be automated based on surveillance schedules, and revocation is immediate and verifiable. Status checking by relying parties is automated through standard credential verification.

**Quantification** — 50–70% reduction in administrative overhead for credential management. The benefit is most significant for CABs and registers with large active credential portfolios (thousands of active certificates).

**Key variables**

- Number of active credentials under management
- Current administrative cost per credential lifecycle
- Renewal and revocation frequency
- Integration capability with existing management systems

## Benefits — Trust and Credibility

### Verifiable Authority

**Description** — Identity registers that issue Digital Identity Anchors provide cryptographically verifiable proof that a DID is controlled by a verified legal entity with specific attributes (legal name, jurisdiction, registration number). This is fundamentally stronger than paper-based registration certificates, which can be forged, and database lookups, which can be spoofed. Verifiable authority strengthens the entire trust chain that UNTP depends on.

**How UNTP helps** — UNTP's [Digital Identity Anchor](../specification/DigitalIdentityAnchor) specification defines how registers issue verifiable credentials that bind a DID to a verified identity. These credentials are cryptographically signed by the register, timestamped, and verifiable by any relying party without contacting the register. This creates a scalable trust anchor that works across jurisdictions.

**Quantification** — Primarily a qualitative trust benefit. Registers that issue DIAs become authoritative trust anchors in the UNTP ecosystem, strengthening their institutional role and relevance in digital trade.

**Key variables**

- Current authority and recognition of the register
- Volume of registrations and identity verifications
- Demand for verifiable identity in served jurisdictions
- Existing digital identity infrastructure

### Transparency of Scheme Governance

**Description** — Conformity schemes that publish their criteria digitally demonstrate governance transparency. When criteria, assessment methodologies, and performance thresholds are publicly available in machine-readable form, stakeholders can evaluate scheme rigour, compare schemes, and make informed decisions about which schemes to rely on. This transparency attracts more CABs willing to assess against the scheme and more industry participants willing to adopt it.

**How UNTP helps** — Publishing scheme criteria as a UNTP Conformity Vocabulary Catalog makes governance visible and auditable. Criteria changes are versioned and trackable. Industry participants, regulators, and peer schemes can independently evaluate the rigour and relevance of the scheme's requirements.

**Quantification** — Primarily a qualitative governance benefit. Schemes with transparent, machine-readable criteria are more likely to be referenced in regulatory frameworks and adopted by industry, increasing scheme relevance and sustainability.

**Key variables**

- Current transparency of scheme criteria and governance
- Stakeholder demand for governance visibility
- Regulatory interest in referencing scheme criteria
- Competitive positioning relative to peer schemes

## Costs — Implementation

### Vocabulary Publication (Conformity Schemes)

**Description** — Digitising scheme criteria into UNTP Conformity Vocabulary Catalog format requires mapping existing criteria to conformity topics and, optionally, defining performance metrics with measurement methods, units, and thresholds. The effort depends on scheme complexity and the desired level of digital maturity.

**How UNTP helps** — UNTP defines three maturity levels for vocabulary publication: (1) scheme-level registration only, (2) criteria expressed as conformity topics, and (3) full vocabulary with performance metrics. Schemes can start at level 1 and progressively deepen their digital vocabulary, spreading costs over time.

**Quantification** — $20K–$100K depending on scheme complexity and target maturity level. Level 1 (registration) is near-zero cost. Level 2 (topics) typically $20K–$50K. Level 3 (full vocabulary with metrics) $50K–$100K for complex schemes.

**Key variables**

- Number and complexity of scheme criteria
- Target maturity level (registration, topics, or full vocabulary)
- Existing digital representation of criteria (if any)
- Availability of technical expertise for vocabulary modelling

### Credential Issuance Capability (CABs)

**Description** — Implementing DCC issuance requires cryptographic key management, credential signing infrastructure, integration with assessment workflows, and staff training. The integration complexity depends on the CAB's existing IT landscape and the assessment management software in use.

**How UNTP helps** — UNTP specifies standard credential formats and issuance protocols that are increasingly supported by commercial assessment management platforms. CABs that use such platforms may find that UNTP credential issuance is available as a configuration option rather than a custom development project.

**Quantification** — $30K–$150K integration cost depending on existing IT maturity and whether issuance is delivered through existing software vendors or custom development. Cost is at the lower end when existing assessment management software supports UNTP credential issuance.

**Key variables**

- Existing assessment management software and its UNTP readiness
- IT team capability and capacity
- Volume and diversity of schemes assessed against
- Number of assessment offices and assessors

### Digital Identity Anchor Issuance (Registers)

**Description** — Implementing DIA issuance requires DID authentication capabilities, credential signing infrastructure, integration with registration workflows, and governance processes for credential lifecycle management (issuance, renewal, revocation).

**How UNTP helps** — UNTP provides a standard [DIA specification](../specification/DigitalIdentityAnchor) that defines the credential structure, issuance process, and lifecycle management requirements. This reduces design effort and ensures interoperability with other UNTP infrastructure.

**Quantification** — $50K–$200K depending on register scope, existing IT maturity, and governance complexity. Business registers with modern IT infrastructure will be at the lower end; registers with legacy systems will require more investment.

**Key variables**

- Existing IT infrastructure and modernisation plans
- Scale of the register (number of registered entities)
- Governance requirements for credential issuance
- Integration complexity with existing registration workflows

### Identity Resolver Deployment (Resolver Operators)

**Description** — Deploying ISO/IEC 18975 conformant resolver infrastructure requires implementing the link resolution protocol, hosting linkset responses, and ensuring high availability. Resolvers are the discovery mechanism that connects product identifiers to their associated credentials (DPPs, DCCs, DTEs).

**How UNTP helps** — UNTP specifies resolver requirements based on the [ISO/IEC 18975](../specification/IdentityResolver) standard, with reference implementations and conformity test suites available. Resolver infrastructure can be shared at community or national level, reducing per-operator costs.

**Quantification** — $30K–$100K initial deployment. Significantly lower when using existing resolver platforms or shared infrastructure at community or national level.

**Key variables**

- Whether deploying standalone or leveraging shared infrastructure
- Expected resolution volume (queries per day)
- Availability requirements (uptime SLA)
- Existing hosting and DevOps capabilities

## Costs — Ongoing Operations

### Vocabulary Maintenance (Conformity Schemes)

**Description** — Scheme criteria evolve as regulations change, scientific understanding advances, and stakeholder expectations shift. Digital vocabularies must be updated to reflect these changes, with version management to ensure backward compatibility.

**How UNTP helps** — UNTP vocabulary formats support versioning, allowing schemes to publish updates while maintaining references to previous versions. This enables smooth transitions for CABs and industry participants using the vocabulary.

**Quantification** — $10K–$30K/year depending on frequency of criteria changes and vocabulary complexity.

**Key variables**

- Frequency of scheme criteria updates
- Complexity of vocabulary (number of topics and metrics)
- Stakeholder consultation requirements for changes
- Technical capacity for vocabulary management

### Credential Operations (CABs and Registers)

**Description** — Ongoing costs include cryptographic key management, credential issuance processing, revocation management, system maintenance, and security operations. Scale depends on the volume of active credentials and the frequency of issuance and revocation events.

**How UNTP helps** — Standardised credential formats and protocols mean that operational processes are consistent and can be automated. Key management follows established best practices for verifiable credentials. Operational tooling is increasingly available from commercial vendors.

**Quantification** — $20K–$100K/year depending on credential volume, key management requirements, and whether operations are managed in-house or through a managed service.

**Key variables**

- Number of credentials issued per year
- Active credential portfolio size
- Key management and security requirements
- In-house vs managed service delivery model

### Resolver Hosting (Resolver Operators)

**Description** — Ongoing costs include infrastructure hosting, uptime monitoring, standards compliance maintenance, and capacity management. Resolvers must maintain high availability as they are a critical component of the UNTP discovery mechanism.

**How UNTP helps** — UNTP resolver specifications are based on widely implemented web standards, allowing operators to use standard cloud hosting and monitoring tools. Shared infrastructure models at community or national level distribute costs across multiple participants.

**Quantification** — $10K–$50K/year depending on resolution volume and availability requirements. Lower when infrastructure is shared across multiple organisations or operated at community/national level.

**Key variables**

- Resolution volume (queries per day/month)
- Availability and performance requirements
- Whether infrastructure is dedicated or shared
- Hosting model (cloud, on-premises, managed service)

## Business Case Templates

Downloadable business case templates are available for each service type:

- [Business Case Template — Conformity Schemes](../assets/files/UNTP-Business-Case-Template-Schemes.docx) — for scheme owners considering publishing digital vocabularies
- [Business Case Template — Identity Registers](../assets/files/UNTP-Business-Case-Template-Registers.docx) — for register operators considering DIA issuance and resolver services

The templates are designed to be populated using the benchmark ranges above combined with organisation-specific operational and financial data — including with the assistance of AI tools as described below.

## Generate Your Own Business Case

You can use a frontier AI model (such as ChatGPT, Claude, or Gemini) to generate a first-draft business case for your scheme or register. Upload your organisation's annual report, strategic plan, or published scheme documentation (PDF) alongside the appropriate prompt below. The AI will extract relevant operational data, apply the UNTP benchmark ranges, and produce a complete draft business case.

**Prerequisites:** This prompt requires a frontier AI model with a large context window (100K+ tokens) and the ability to process PDF attachments and fetch web content. You will likely need a professional-tier subscription (e.g. ChatGPT Plus/Pro, Claude Pro, Gemini Advanced) to handle the combined size of your documentation, the UNTP cost/benefit framework, and the business case template in a single session.

**Important disclaimer:** The generated business case is only an initial draft. AI models may misinterpret operational data, misjudge your scheme's or register's competitive position, or make unfounded assumptions about ecosystem readiness and adoption timelines. The output should be thoroughly reviewed and adjusted by your organisation's leadership and technical experts before being used for any decision-making purpose.

### For Conformity Schemes

**How to use:** Copy the prompt below, open your preferred AI assistant, attach your scheme documentation or annual report PDF, paste the prompt, and submit.

:::info[Business Case Generation AI Prompt]

You are preparing a first-draft UNTP business case for a conformity scheme (a standards body, certification programme, or industry scheme that defines criteria against which conformity is assessed). The attached document describes the scheme.

**Input documents**

1. **Scheme documentation** — attached PDF (annual report, scheme rules, criteria documentation, or strategic plan). Extract: scheme name, scope (sectors, geographies, product types), number of certified entities, number of CABs operating under the scheme, criteria structure (number and complexity of requirements), current digital maturity, and any mentions of mutual recognition with other schemes.

2. **UNTP cost/benefit framework** — fetch from https://untp.unece.org/business-case/BusinessCaseDependentServices and use the benchmark ranges for conformity scheme benefits and costs.

3. **Business case template** — fetch from https://untp.unece.org/assets/files/UNTP-Business-Case-Template-Schemes.docx and use this as the output structure. Fill in every section and every bracketed placeholder.

**How to weight each benefit category**

IMPORTANT: Always err on the side of conservatism. Use the lower end of each benchmark range unless there is strong, specific evidence to justify a higher figure. A credible business case with conservative estimates is far more useful than an optimistic one that loses credibility under scrutiny. When in doubt, round down. If evidence for a benefit category is weak or absent, use the minimum of the range or exclude it entirely.

Weight each benefit based on the scheme's specific context:

- **Expanded market reach** — weight HIGH if the scheme operates in sectors heavily affected by EUDR, CBAM, ESPR, or CSDDD, and if UNTP adoption is accelerating among the scheme's user base. Weight LOW if the scheme serves primarily domestic or unregulated sectors.
- **Multi-scheme recognition** — weight HIGH if the scheme's criteria overlap significantly with peer schemes (e.g. multiple sustainability standards in the same sector) and mutual recognition would expand the scheme's applicability. Weight LOW if the scheme is unique in its domain with little overlap.
- **New revenue streams** — weight HIGH if the scheme has a large certified base and can add digital vocabulary licensing or registry listing fees. Weight LOW if the scheme is small or revenue is primarily membership-based.
- **Assessment efficiency (for CABs)** — weight HIGH if the scheme has many complex criteria that would benefit from machine-readable expression. Weight LOW if criteria are simple and few.
- **Reduced duplication** — weight HIGH if certified entities frequently hold multiple overlapping certifications. Weight LOW if the scheme is standalone.
- **Governance transparency** — weight HIGH if the scheme faces scrutiny about the rigour of its criteria or if regulators are considering referencing the scheme. Weight LOW if governance credibility is already well established.

For costs, adjust based on:

- **Criteria complexity** — schemes with hundreds of criteria and detailed performance metrics will face higher vocabulary publication costs than simple registration schemes.
- **Existing digital maturity** — reduce costs if the scheme already has criteria in a structured digital format (database, API) rather than only in PDF documents.
- **CAB ecosystem** — the value of vocabulary publication depends on CABs being ready to consume it. Assess the digital maturity of the scheme's CAB network.

**Output requirements**

1. Populate the full template — every section, every table, every placeholder.
2. Assess the three CVC maturity levels (registration only, criteria with topics, full vocabulary with metrics) and recommend a target level with phasing.
3. Identify the specific peer schemes with overlapping criteria and the mutual recognition potential.
4. Assess CAB readiness to consume digital vocabularies and issue DCCs.
5. In the financial model, note that scheme business cases are typically smaller in absolute terms than industry cases — focus on benefit-cost ratio rather than absolute values.
6. Throughout, show your working — explain why you chose a particular point in a benchmark range.

**Output format**

Download the business case template from https://untp.unece.org/assets/files/UNTP-Business-Case-Template-Schemes.docx and produce the output as a completed version of that Word document. Fill in every bracketed placeholder, populate every table, and replace all instructional text with scheme-specific content. The output should be a ready-to-review Word document that can be presented to the scheme's board or governance body without further formatting.

:::

### For Identity Registers

**How to use:** Copy the prompt below, open your preferred AI assistant, attach your register documentation or annual report PDF, paste the prompt, and submit.

:::info[Business Case Generation AI Prompt]

You are preparing a first-draft UNTP business case for an identity register (a business register, product identifier register, facility register, trademark register, or industry association membership register). The attached document describes the register.

**Input documents**

1. **Register documentation** — attached PDF (annual report, strategic plan, or governance documentation). Extract: register name, type (business, product, facility, trademark, association), jurisdiction, number of registered entities, registration volume (new registrations per year), current digital services offered, existing identifier schemes used (e.g. GS1 GTIN, GLN, LEI), and any existing resolver or API services.

2. **UNTP cost/benefit framework** — fetch from https://untp.unece.org/business-case/BusinessCaseDependentServices and use the benchmark ranges for identity register benefits and costs.

3. **Business case template** — fetch from https://untp.unece.org/assets/files/UNTP-Business-Case-Template-Registers.docx and use this as the output structure. Fill in every section and every bracketed placeholder.

**How to weight each benefit category**

IMPORTANT: Always err on the side of conservatism. Use the lower end of each benchmark range unless there is strong, specific evidence to justify a higher figure. A credible business case with conservative estimates is far more useful than an optimistic one that loses credibility under scrutiny. When in doubt, round down. If evidence for a benefit category is weak or absent, use the minimum of the range or exclude it entirely.

Weight each benefit based on the register's specific context:

- **Expanded market reach** — weight HIGH if registered entities operate in sectors with growing UNTP adoption and need verifiable identity for issuing or receiving credentials. Weight LOW if registered entities are primarily in domestic, non-exporting sectors.
- **New revenue streams (resolver services)** — weight HIGH if the register manages product or facility identifiers that would benefit from resolution to DPPs or DFRs, and if the register can offer resolver hosting as a fee-based service. Weight LOW if the register manages only legal entity identifiers with limited resolution demand.
- **New revenue streams (DIA issuance)** — weight HIGH if the register has well-governed membership or registration processes that make its attestation valuable as a trust anchor. Weight LOW if the register's verification processes are minimal (e.g. self-registration with no vetting).
- **Automated credential lifecycle** — weight HIGH if the register manages a large portfolio of registrations with frequent changes (new registrations, updates, deregistrations). Weight LOW if the portfolio is small and stable.
- **Verifiable authority** — weight HIGH if the register is an authoritative source for its jurisdiction (e.g. national business register, national IP office). Weight LOW if the register is a voluntary or non-authoritative listing.

For costs, adjust based on:

- **Existing IT infrastructure** — reduce costs significantly if the register already has modern APIs, digital identity capabilities, or an existing resolver service.
- **Register scale** — larger registers (millions of entities) face higher initial investment but lower per-entity costs and stronger revenue potential.
- **Governance requirements** — registers with strict governance needs (e.g. government business registers) will face higher costs for DIA issuance policy development, key management, and liability frameworks.
- **Shared infrastructure** — reduce resolver hosting costs if the register can participate in shared national or regional resolver infrastructure.

**Output requirements**

1. Populate the full template — every section, every table, every placeholder.
2. Assess both the resolver service (IDR) and trust anchor (DIA) value propositions separately — not all registers will pursue both.
3. Map the register type to the DIA Application matrix in the template appendix (register type, DIA assertions, IDR resolution targets).
4. Assess governance requirements for DIA issuance — issuance policy, revocation procedures, scope definitions, liability, and key management.
5. Identify specific UNTP-adopting industries that would benefit from this register's services.
6. Throughout, show your working — explain why you chose a particular point in a benchmark range.

**Output format**

Download the business case template from https://untp.unece.org/assets/files/UNTP-Business-Case-Template-Registers.docx and produce the output as a completed version of that Word document. Fill in every bracketed placeholder, populate every table, and replace all instructional text with register-specific content. The output should be a ready-to-review Word document that can be presented to the register's board or governing authority without further formatting.

:::
