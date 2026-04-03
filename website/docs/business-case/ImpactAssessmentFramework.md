---
sidebar_position: 4
title: Impact Assessment Framework
---

import Disclaimer from '../\_disclaimer.mdx';

<Disclaimer />

# Impact Assessment Framework

## Introduction

The Impact Assessment Framework (IAF) provides a structured methodology for measuring the value of UNTP implementation at global scale. While the [business case for industry](BusinessCaseIndustry.md) and [business case for government](BusinessCaseGovernment.md) describe the expected benefits of UNTP adoption, the IAF defines how those benefits are actually measured over time through real implementation data.

The IAF closes the feedback loop between implementation activity and demonstrable impact. As registered implementers progress from planned to active status, they provide 6-monthly anonymised volumetric reports via the same [implementation registration](../implementations/index.md) process. These reports are aggregated at community and global levels to produce dashboards and scorecards that track UNTP impact over time.

The methodology follows an OECD-style results framework that traces a causal chain from implementer investments (inputs) through directly measurable activity (outputs) to modelled market effects (outcomes) and, ultimately, estimated contributions to UN [Sustainable Development Goal](https://sdgs.un.org/goals) targets (impacts). This four-level structure ensures that reporting remains grounded in observable data while still connecting implementation activity to the global goals that motivate it.

## Results Framework

The IAF uses a four-level results chain. Each level builds on the previous one, with increasing reliance on modelling assumptions as the chain progresses from directly measured data to estimated global impact.

```
Inputs → Outputs → Outcomes → Impacts
(invested)  (measured)  (modelled)  (estimated)
```

### Inputs

Inputs represent what implementers invest in UNTP adoption. These are not collected as part of the IAF reporting process but are described here to complete the results chain. Typical input categories include:

- **Capital investment** — system integration, consulting, credential infrastructure setup, and conformity testing. These are one-time costs incurred during implementation.
- **Operational investment** — credential issuance, identity resolution, ongoing system maintenance, and staff time. These are recurring costs that scale with transaction volume.

Reference cost categories are described in detail in the [Business Case for Industry](BusinessCaseIndustry.md#costs---transparency-system) and [Business Case for Government](BusinessCaseGovernment.md) pages.

### Outputs

Outputs are the directly measurable results of UNTP implementation. They are collected from each registered implementer via 6-monthly volumetric reports. Output metrics are specific to each implementer type and are defined in detail in the [Output Metrics](#output-metrics) section below.

Outputs answer the question: _how much UNTP activity is happening?_

### Outcomes

Outcomes are the market-level effects that result from aggregate UNTP outputs. They are modelled from output data using defined assumptions rather than directly measured. Key outcome categories include:

- **Supply chain transparency coverage** — the proportion of global trade value covered by verifiable digital credentials, estimated from the aggregate volume and commodity scope of issued DPPs.
- **Greenwashing reduction** — the shift from unverifiable sustainability claims to verifiable conformity credentials, estimated from DCC volumes relative to known certification markets.
- **Regulatory compliance efficiency** — the reduction in compliance burden enabled by machine-readable credentials, estimated from regulator DCC volumes and identity resolution traffic.

Outcomes answer the question: _what difference is UNTP activity making?_

### Impacts

Impacts are the long-term societal changes to which UNTP adoption contributes. They are estimated by mapping outcome indicators to specific SDG targets as described in the [SDG Target Mapping](#sdg-target-mapping) section below.

Impact measurement acknowledges attribution challenges. UNTP is one of many interventions contributing to sustainable development outcomes. The IAF therefore reports UNTP's _contribution_ to SDG targets rather than claiming sole causation.

Impacts answer the question: _how is UNTP activity contributing to global goals?_

## Output Metrics

Each implementer type reports a defined set of volumetric metrics every 6 months. These metrics are designed to be simple to collect and to avoid exposing commercially sensitive information.

### Industry Actors

| Metric             | Description                                              | Unit  |
| ------------------ | -------------------------------------------------------- | ----- |
| DPPs issued        | Digital Product Passports issued in the reporting period | Count |
| Product categories | UN CPC product categories covered by issued DPPs         | Count |
| Countries          | Countries in which DPPs were issued                      | Count |
| DFRs issued        | Digital Facility Records issued or updated               | Count |
| DTEs issued        | Digital Traceability Events published                    | Count |

### Software Solutions

| Metric           | Description                                               | Unit  |
| ---------------- | --------------------------------------------------------- | ----- |
| Active customers | Customer organisations with active UNTP implementations   | Count |
| Credential types | UNTP credential types supported (DPP, DCC, DFR, DTE, DIA) | List  |
| Industry sectors | UN ISIC sectors served by active customers                | Count |
| Countries served | Countries in which customers operate                      | Count |

### Conformity Scheme Owners

| Metric            | Description                                  | Unit  |
| ----------------- | -------------------------------------------- | ----- |
| CVCs published    | Conformity Vocabulary Catalogs published     | Count |
| Conformity topics | Conformity topic categories covered          | Count |
| Industry sectors  | UN ISIC sectors covered by published schemes | Count |
| Countries         | Countries in which schemes are active        | Count |

### Conformity Assessment Bodies

| Metric             | Description                                                   | Unit  |
| ------------------ | ------------------------------------------------------------- | ----- |
| DCCs issued        | Digital Conformity Credentials issued in the reporting period | Count |
| Conformity schemes | Number of different conformity schemes assessed against       | Count |

### Regulators

| Metric             | Description                                                             | Unit  |
| ------------------ | ----------------------------------------------------------------------- | ----- |
| DCCs issued        | Digital Conformity Credentials issued (permits, licenses, certificates) | Count |
| Regulation types   | Types of regulation covered by issued DCCs                              | Count |
| Regulated entities | Number of entities holding government-issued DCCs                       | Count |

### Identity Registers

| Metric              | Description                                | Unit  |
| ------------------- | ------------------------------------------ | ----- |
| Resolution requests | Identifier resolution requests processed   | Count |
| DIAs issued         | Digital Identity Anchors issued or updated | Count |
| Registered members  | Number of registered members or entities   | Count |

## Aggregation Model

IAF data is aggregated at three levels, with anonymisation applied at each aggregation boundary.

**Implementer level** — Each registered implementer submits their own 6-monthly volumetric report. Individual data is held confidentially and is not published. Implementers can benchmark their own performance against anonymised averages for their implementer type, sector, and geographic region.

**Community level** — [Community Activation Program](CommunityActivationProgram.md) governance bodies aggregate reports from implementers within their sector or region. Community-level dashboards allow member associations and development banks to track the progress and value of their community investment.

**Global level** — UN/CEFACT aggregates community-level data across all communities to produce global dashboards for member states. Global aggregates are mapped to SDG targets and published in annual impact reports.

All data is anonymised at aggregate levels. No individual implementer's data is identifiable in community or global reports.

## SDG Target Mapping

Aggregate outcome indicators are mapped to specific SDG targets to estimate UNTP's contribution to the global goals. The mapping below connects IAF outcome categories to the most relevant targets.

| Outcome Category          | SDG Targets                                | Example Indicator                                    |
| ------------------------- | ------------------------------------------ | ---------------------------------------------------- |
| Verifiable emissions data | 13.2 — Climate action integration          | Trade volume covered by verified carbon data         |
| Ethical sourcing evidence | 8.7 — End forced labour                    | DCC coverage of social compliance criteria           |
| Circular economy data     | 12.5 — Reduce waste generation             | DPPs with circular economy fields populated          |
| Deforestation-free supply | 15.2 — Sustainable forest management       | DPPs covering forest-risk commodities                |
| Responsible production    | 12.6 — Sustainable practices and reporting | Companies with verifiable sustainability disclosures |
| Clean water and chemicals | 6.3 — Improve water quality                | DPPs with chemical compliance data                   |

This mapping builds on the conformity topic classification defined in the [UNTP core taxonomies](../specification/CoreTaxonomies.md), which provides a structured vocabulary for linking conformity criteria to sustainability themes.

## Reporting Process

**Frequency** — Reports are submitted 6-monthly. The first half (January–June) is reported in July; the second half (July–December) is reported in January.

**Mechanism** — Implementers submit volumetric data via the same [registration process](../implementations/index.md) used for initial implementation registration. Reporting is integrated into the existing registration workflow to minimise additional burden.

**Anonymisation** — Individual implementer data is not published. Only sector-level and geographic aggregates are made available in dashboards and reports.

**Publication** — UN/CEFACT publishes aggregated dashboards on an ongoing basis and produces an annual impact report summarising global UNTP adoption and its estimated contribution to SDG targets.

**First reporting** — IAF reporting will commence when a sufficient number of registered implementations reach Active status to produce meaningful aggregates.

## Relationship to Business Case

The IAF is designed to progressively replace qualitative estimates with empirical benchmarks. The cost and benefit projections in the [business case for industry](BusinessCaseIndustry.md) and [business case for government](BusinessCaseGovernment.md) are currently supported by references to external research. As IAF data accumulates, these projections will be supplemented — and eventually validated or refined — by actual implementation data from registered implementers.

At the community level, [CAP](CommunityActivationProgram.md) governance bodies can use IAF dashboards to demonstrate realised value to potential members, strengthening the case for new organisations to join. At the global level, UN/CEFACT can use IAF reports to inform policy recommendations for member states and to demonstrate the impact of UNTP to funding bodies and development partners.
