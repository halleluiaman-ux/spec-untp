---
sidebar_position: 25
title: Supply Chain Group
---

import Disclaimer from '../\_disclaimer.mdx';

<Disclaimer />

## Terms of Reference

### Objectives

- Maintain the following UNTP specification pages, learning from the experiences of real-world pilots and implementations.
  - Digital Product Passports (DPP)
  - Digital Facility Records (DFR)
  - Digital Traceability Events (DTE)
- Maintain the following UNTP Best practice guidance pages, learning from the experiences of real-world pilots and implementations.
  - Transparency Graphs
  - Chain of Custody
- Address all issues in the issues log related to the supply chain working group in a timely manner to support the UNTP overall release timeline
  - Version 0.7.0 (due early March 2026)
  - Version 1.0.0 (due early July after public review)
- Seek alignment wherever possible with relevant international standards and key government regulations.
- Communicate lessons learnt (+ve & -ve) and implementation tips to help lower UNTP implementation effort
- Develop simple approaches to managing overlapping and parallel data disclosures using the UNTP

### Purpose

- By maintaining high quality technical specifications, informed from real-world pilots and implementations, we will increase trust and confidence in the UNTP specification.
- Through applying the UNTP to real world and relevant disclosure schemes, we will be able to validate the efficacy of the UNTP solution across different types of supply chains.
- Reducing the effort to implement the UNTP will support faster adoption, faster learning cycles and faster improvement of the protocol. This in turn should help accelerate real world adoption.
- By providing approaches to managing overlapping disclosure schemes we can demonstrate the strength of the UNTP as a unifying standard, as opposed to niche focused on one disclosure scheme
- By demonstrating alignment with relevant standards and regulations (eg the EU DPP), we will reduce cost and risk for implementers who will be able to confidently build on UNTP for global markets.

### Example of Supply Chain Questions being addressed by this working group

- Help address how confidentiality changes as data moves and transforms along the supply chain
- Consider how UNTP works when there are breaks in supply chain digitisation upstream, which is key to phased deployment of UNTP
- Help address how bulk commodity mass balancing (in it's different forms) interacts with UNTP along a supply chain
- How to facilitate mapping and mutual recognition between disclosure schemes with similar intent so that audot fatigue can be reduced.

## Mailing List

A group mailing list is maintained and can be used by any list member to post messages to the group. The list also maintains an archive of all messages sent to the group.

- To [join the mailing list](https://gaggle.email/join/untp-supplychain@gaggle.email) - your request will be reviewed by a list administrator.

## Meetings

Group meetings are held Fortnightly in two timezones.

- The **[EU Timezone calendar link](https://www.addevent.com/event/dk0h31lws77v)** - every second tuesday at 11:00 am CET (9pm AEST tuesdays)
- The **[US timezone calendar link](https://www.addevent.com/event/3m4dglft4y81)** - every second tuesday at 3:00pm EST (7am AEST wednesdays)
- The **[zoom link](https://us06web.zoom.us/j/85476253850?pwd=xBVZajLN5QkV2bhEhklNHkEtZle2Jv.1)** for both meetings is the same.

## Previous Meeting Minutes

Click on the date to see the more detailed meeting summary.

| Date                                                | Summary                                                                                                                                                                                                                                                                                                                              |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [17 Mar 2026 - EU](#17-03-2026-meeting-eu-timezone) | The meeting reviewed UNTP 0.7 specifications before public review, covering vocabulary taxonomies, implementation guidance, architectural improvements, and practical adoption pathways for manufacturers and SMEs including the Fashion Producer Collective.                                                                        |
| [17 Mar 2026 - US](#17-03-2026-meeting-us-timezone) | The meeting covered the 0.7 release approaching member state review, including core vocabulary and taxonomy updates, reference criteria optionality in claims, battery passport mapping, and the vision of continuous machine auditing of sustainability claims at scale.                                                            |
| [3 Mar 2026 - EU](#03-03-2026-meeting-eu-timezone)  | The meeting focused on finalizing the UNTP 0.7 release candidate, covering data model consolidation, traceability event terminology debates (make/move/maintain), mass balance verification approaches, and conformity credential scheme endorsements with a proposed trust register model.                                          |
| [3 Mar 2026 - US](#03-03-2026-meeting-us-timezone)  | The meeting reviewed data model consolidation into a unified namespace, traceability event alignment with GS1 EPCIS, optional party role fields, transport emissions handling, and battery passport extension methodology including dynamic data via separate verifiable credentials.                                                |
| [17 Feb 2026 - EU](#17-02-2026-meeting-eu-timezone) | The meeting focused on simplifying UNTP party roles, improving packaging and facility reporting models, and replacing fixed performance measures with a flexible but controlled vocabulary of metrics to support more consistent, machine-readable product passport and sustainability reporting.                                    |
| [17 Feb 2026 - US](#17-02-2026-meeting-us-timezone) | The meeting reviewed updates to the UNTP data model covering party roles, facility reporting, assessment periods, measurement tolerances, and the shift to controlled-vocabulary performance claims, with actions to align the model with regulatory requirements and clarify implementation details.                                |
| [3 Feb 2026 - EU](#03-01-2026-meeting-eu-timezone)  | The Supply Chain Working Group reviewed progress toward UNTP v0.7, focusing on mass balance, product passports, and digital credentials for sustainability and carbon data, while agreeing on governance-driven issue closure and next steps to improve transparency, traceability, and SME-friendly implementation.                 |
| [3 Feb 2026 - US](#03-01-2026-meeting-us-timezone)  | The working group reviewed administrative updates and refined the UNTP specification, focusing on how claims, conformity credentials, and product passports interrelate—particularly for sustainability and carbon data—while agreeing next steps to clarify link semantics, close pending issues, and prepare for the v0.7 release. |
| [20 Jan 2026 - EU](#20-01-2026-meeting-eu-timezone) | The UNTP Supply Chain Working Group reconvened under Steven Capell’s leadership to advance an industry-neutral, interoperable traceability standard, agree on priorities to resolve open technical issues, and progress toward releasing UNTP v0.7 within six weeks to enable broader consultation and early adoption                |
| [20 Jan 2026 - US](#20-01-2026-meeting-us-timezone) | The UNTP Supply Chain Working Group reviewed progress toward UNTP as a digital interoperability standard, confirmed targets for v0.7 by mid-March and v1.0 by June, and agreed on next steps to resolve open GitLab issues and advance JSON schema and linked-data integration for interoperable implementations.                    |

---

## 17-03-2026 Meeting EU timezone

### Quick recap

The Supply Chain Working Group meeting focused on reviewing UNTP version 0.7 specifications before entering public review. Steven presented updates to the specification pages, including new vocabulary taxonomies, implementation guidance, and architectural improvements. The group discussed how manufacturers and software providers can implement UNTP standards, with different approaches needed for large enterprises using systems like SAP versus small and medium-sized enterprises (SMEs) using simpler systems or spreadsheets. Anett from the Fashion Producer Collective raised questions about testing the specifications and how to connect internal systems with brand requirements. The discussion covered various implementation scenarios, including the role of software providers, the European Union's mandatory DPP requirements, and the need for collective action to influence software vendors. The conversation ended with agreement that version 0.7 is ready for public review, pending final naming conventions for certain sections.

---

### Next steps

- **Michael**: List suggestion for a better name for "implementation guidance" as an issue in GitLab, including any alternative naming suggestions.
- **Steven**: Clean up and merge updates to the specification pages, including addressing naming suggestions for "implementation guidance" and "best practices" (or "advanced concepts"), in preparation for the 0.7 release.
- **Steven**: Go through all open/closed issues in the supply chain group in the next day or two, point to the relevant specification pages that implement each issue, and close issues as appropriate.
- **All working group members**: Review the updated specification pages (especially product passport, facility record, and traceability event) and provide any urgent feedback or suggestions for changes before the 0.7 release.
- **Steven**: Update the test playground/documentation to indicate that it is not yet updated for 0.7 and will be updated in the coming weeks.
- **Anett (and Fashion Producer Collective)**: Identify which software systems are in use by member manufacturers, and engage relevant software vendors to request/add support for UNTP protocol (version 0.7) as appropriate.
- **Michael**: Set up a separate call with Anett to discuss daily practicalities and adoption details for the Fashion Producer Collective.
- **Steven**: Reach out to software providers listed in the Software Solutions Implementation Register after 0.7 release to confirm their intent and progress on UNTP implementation.
- **All**: Suggest better names for "best practices" (e.g., "advanced concepts") and provide feedback before the 0.7 release.
- **Anett**: Send email to Michael to schedule follow-up call on adoption/practical implementation for the Fashion Producer Collective.

---

### Summary

#### UNTP Specification Version 0.7 Update

The Supply Chain Working Group discussed the transition to version 0.7 of the UNTP specification, which will be released in the coming days and serve as the basis for formal public review. Steven presented updates to the specification pages, including changes to the digital product passport model, such as removing performance dashboards and replacing them with categorized claims, and adding concepts like labels based on gap analysis with European standards. The team also added implementation guidance to help users map their product requirements to the standard, addressing questions about how to adapt the specification for different industries and use cases.

---

#### UNTP Specifications Update Meeting

Steven presented updates on three specifications: product passport, facility record, and traceability events. Michael suggested changing the term "implementation guidance" to avoid confusion with existing navigation terms. Virginia proposed alternative names including "Guidance on the Use of UNTP" and "Guidance on the Use of UNTP Components." Steven explained the architecture of UNTP components, including core vocabulary, industry extensions, and conformity schemes. The team discussed performance metrics taxonomy and conformity topics to standardize numerical measurements across different passports. Steven announced that the specifications would move to version 0.7 for public review in the coming days, with a request for team members to review the documents and provide feedback on any needed changes.

---

#### Project Review Status Discussion

Steven and Michael discussed the status of a project that is ready for public review, with content checked in and awaiting final review before a Docusaurus version release. They reviewed the consistent structure across different pages including Brett's conformity credentials page and Harley's Digital Identity Anchor schema. Michael suggested renaming the "best practices" section as these topics are important and might be overlooked with that title.

---

#### UNTP Project Progress Update

Steven provided an update on the UNTP project's progress, highlighting 11 specifications targeting different implementer groups, over 680 community members, and successful pilots in Australian agriculture and electronics. He noted that while version 0.7 is not yet final, it is ready for public review, with significant external groups like GDST and Tech Against Trafficking seeking alignment. Anett inquired about testing opportunities for the Fashion Producer Collective, and Steven confirmed that version 0.7 would be suitable for pilots, though he noted that the test playground needs updating.

---

#### Product Passports Implementation Discussion

Steven discussed implementing product passports for the Fashion Collective, suggesting they could use open source tools or manufacturer resources to map garment properties like size and color to direct properties and characteristics. He referenced the Responsible Business Alliance's Responsible Minerals Assurance Scheme as an example of industry standards and explained how conformity criteria could be referenced in product passports. Steven highlighted the challenge of navigating the numerous industry standards (around 500 schemes globally) and their associated criteria, using standardsmap.org as an example of the extensive landscape of conformity standards in agriculture, textiles, and other sectors.

---

#### UNTP Specification Classification System

Steven explained the purpose of the UNTP specification, which is a classification scheme to organize and compare different conformity criteria across various industry schemes. He described how this system could help reduce audit fatigue for manufacturers by allowing brands to accept certificates from trusted schemes rather than requiring their own audits. Steven also mentioned previous pilot programs, including one in Australia focused on tracing Australian beef cattle to farms and ensuring non-deforested status through satellite surveys.

---

#### EUDR Requirements and Digital Passports

The team discussed ongoing work on EUDR requirements and digital product passports, with Steven explaining two completed pilots involving agriculture and data center components, while noting that textile-specific work is still in early preparation stages. Anett inquired about connections between this work and the UNECE stakeholder consultation group, which Michael confirmed is led by Christian and involves sector-specific teams including textiles. Steven suggested that larger manufacturers could begin reviewing the current implementation guidance and mapping principles, though he noted that textiles would likely have fewer mappings than battery products due to differences in product lifecycle.

---

#### UNTP Version 7 Testing Discussion

The team discussed the upcoming testing of UNTP version 7, focusing on interoperability and conformity claims layers. Steven emphasized the goal of enabling different manufacturers to produce digital textiles passports using their own internal systems without relying on specific platforms imposed by brands. Anett raised questions about the practical implementation and linkage between manufacturers' ERPs and brands' systems, which Michael offered to address in a separate offline discussion. The group also mentioned an online meeting scheduled for April 15 and Anett's involvement in various working groups.

---

#### UNTP Digital Product Passport Implementation

The discussion focused on implementing UNTP digital product passports as a standard for connecting manufacturers' production systems with brands' supply chain management systems. Steven and Michael explained that manufacturers don't need to log into a separate platform, but rather need software providers to implement the UNTP protocol in their existing systems. They clarified that while large organizations with IT departments might implement this directly, small and medium enterprises (SMEs) would need to work with their software providers to ensure compliance. The conversation highlighted that SMEs in the fashion industry would need to choose software solutions that support UNTP, whether through existing modules or new implementations, rather than having to use multiple brand-imposed systems.

---

#### UNTP Compliance for Fashion Manufacturers

The group discussed how small and medium-sized fashion manufacturers can implement UNTP compliance, with Steven and Michael explaining that rather than purchasing new software, manufacturers should use their existing systems. They clarified that the approach would depend on the manufacturer's size and technology usage, with options including working with common software providers, using spreadsheets with built-in mapping, or accessing a free ITC platform for Global South SMEs. Anett confirmed they would begin assessing these options through working groups in mid-April, though Michael suggested this timeline should be verified.

---

#### Digital Product Passport Implementation Discussion

The group discussed the implementation of digital product passports (DPP) and UNTP specifications, particularly focusing on European regulations and technical standards. Suna explained that European implementation would involve a central registry system where DPPs are registered rather than created, and noted that Microsoft has proposed an OpenDPP framework that could align with UNTP ecosystem needs. The discussion addressed how fashion producers could pilot version 7 specifications, with Steven clarifying that software providers would need to implement the standards, either through existing platforms like Yimpact or by developing new solutions. Michael and Anett discussed practical adoption challenges, including incentives for software providers to implement UNTP, with Michael explaining that EU-funded projects have been driving smaller providers' participation.

---

## 17-03-2026 Meeting US timezone

### Quick recap

The meeting focused on the upcoming 0.7 release of UNTP, which is approaching public review by member states. Steven presented the key changes including updated site pages, new core vocabulary and taxonomies for categorizing conformity claims, and performance metrics that enable corporate-level reporting aggregation. The discussion covered how different types of evidence and criteria can be linked in claims, with particular attention to whether reference criteria should be mandatory versus optional, ultimately deciding that at least one of reference criteria, regulation, or standard must be present. The team also reviewed how industry-specific mappings work, using battery passports as an example, and discussed the broader vision of UNTP enabling continuous machine auditing of sustainability claims at scale to address compliance challenges in global supply chains.

---

### Next steps

- **Steven**: Review and close all remaining open tickets with references to the spec pages in the next day or two.
- **All group members**: Review the updated 0.7 pages (including core vocabulary and core taxonomies) and provide feedback if anything important is missing before 0.7 is locked for member state review.
- **Christian**: Review the mapping of 88 properties in the product passport (especially for battery passport/DIN spec) and provide feedback on any inaccuracies found.
- **Steven**: Consider making "reference criteria" optional in the schema, and ensure that at least one of reference criteria, reference regulation, or reference standard is mandatory for claims.
- **Steven**: Make any necessary schema tweaks based on the discussion (e.g., reference criteria optionality, mandatory reference for claims, etc.).

---

### Summary

#### UNTP 0.7 Release Updates

Christian and Steven discussed updates to the UNTP 0.7 release, which is set for member state review. Steven presented the current work-in-progress version, explaining that it includes updated pages with version 0.7 schema and examples across various sections like Product Passport, Conformity Credential, and Traceability Events. He noted the addition of an "Implementation Guidance" section that helps map industry requirements to UNTP passports, using the battery passport as an example based on a published specification from DIN. The team agreed to review specific tickets regarding reference criteria changes, with Christian suggesting they should be made optional rather than mandatory.

---

#### DIN to UNTP Mapping Assessment

Steven and Christian discussed mapping requirements from the DIN specification to UNTP digital product passport. They identified three types of mappings: direct property mappings, product-specific characteristics stored in product characteristics, and performance claims assessed against external standards. The team discovered one missing element in their model - product labeling requirements - which they added after identifying it during the mapping exercise. Steven concluded that the mapping appears feasible based on their initial assessment, pending review from Kristen.

---

#### UNTP Ecosystem Version 0.7 Update

Steven presented updates on the UNTP ecosystem, highlighting new sections in the DPP and other credential types, including challenges and code snippets. He announced that version 0.7 is close to public review, introducing new pages on core vocabulary and taxonomies to help categorize and compare performance claims across different standards and schemes. Steven explained the purpose of the conformity topic and performance metrics classification schemes, emphasizing their role in making numerical claims consistent and easily rollable up to corporate disclosures. He requested feedback on these new pages and mentioned that future meetings would be paused during the public review process to address any comments.

---

#### Performance Metrics Classification System Overview

Steven explained the purpose of the classification scheme for performance metrics, comparing it to general ledger accounting in corporate finance. He demonstrated how metrics at the product passport level can be rolled up for corporate disclosures, using the example of emissions reporting. Steven also showed how external criteria from organizations like the Responsible Business Alliance can be linked to claims in the system, providing detailed descriptions and URLs for assessment criteria.

---

#### Sustainability Standards: Complexity and Challenges

Steven explained the complexity of sustainability and conformity standards, noting that over 500 schemes exist globally with approximately 15,000 criteria combined. He highlighted how these standards, including European Delegated Acts, follow a similar architectural approach despite varying in importance and origin. Steven used Amazon as an example to illustrate the challenge of consumer understanding, where a supplier's claim of ABNT Ecolabel compliance might not be meaningful to consumers.

---

#### UNTP Conformity Vocabulary Standardization

Steven explained the purpose of the UNTP conformity vocabulary catalog, which aims to help scheme owners like RBA break down their criteria into fine-grained components and classify them according to a standardized vocabulary. This allows for better comparability among different schemes and product passports. Christian asked if scheme owners could express general compliance without referencing specific criteria, and Steven confirmed this was possible through high-level claims, though detailed breakdowns are available for those who need them.

---

#### Automated Auditing for Value Chains

Steven explained the purpose of UNTP, which aims to replace manual paper-based auditing with continuous automated auditing of data and claims in value chains. He clarified for Ann how standard classification schemes and core taxonomies provide comparability between different schemes by using machine-readable URLs and classifications. The discussion ended with Christian asking about linking evidence attributes to conformity credentials, though the answer was cut off at the end of the transcript.

---

#### Digital Credentials and Identity Resolution

Steven and Christian discussed the implementation of digital credentials and identifiers, particularly focusing on how DIDs (Decentralized Identifiers) can be used to represent both physical things and credentials. They explored the challenges of handling different types of evidence, including paper certificates and satellite images, and how an identity resolver could be used to find relevant information. The conversation concluded with an explanation of how DIDs could be used to identify products or facilities and resolve to wallets or URLs containing multiple data items, rather than being directly tied to specific credentials.

---

#### Optional Reference Criteria in Claims

Christian and Steven discussed making reference criteria optional in the claim class, considering that not all references might need a specific criteria. Steven explained that while logically it might seem optional, the conformity topic is kept mandatory in the passport to help organize and categorize claims, especially as the system scales up with many claims. They clarified that there are two different conformity topics: one from the scheme owner and another from the product passport, which may sometimes be different but are necessary for proper classification and readability.

---

#### Product Passport Taxonomy Requirements

The team discussed requirements for product passport taxonomies and mandatory reference criteria. They agreed that at least one of reference criteria, regulation, or standard must be present for meaningful claims, with Steven clarifying that evidence is separate from these references. The discussion covered how industry-specific profiles could tighten mandatory field requirements while maintaining UNTP compliance. Steven explained the broader context of UNTP's goal to enable continuous machine auditing of sustainability claims at scale, addressing the challenge of detecting non-compliance when handling high volumes of data. The team was reminded that version 0.7 would be frozen for member state public review within a few days.

---

## 03-03-2026 Meeting EU timezone

### Quick recap

The Supply Chain Working Group meeting focused on finalizing the UNTP 0.7 release candidate, with Steven presenting progress on consolidating data models and addressing traceability event definitions. The group discussed and debated terminology for product lifecycle events, considering alternatives to "modify" and exploring concepts around circular economy language. Michael and Rafael contributed insights about mass balance verification and blockchain-like approaches to maintaining records without revealing sensitive supplier information. The conversation ended with a detailed explanation of how UNTP handles conformity credentials and scheme endorsements, with Bogharald suggesting a trust register model for scheme verification.

---

### Next steps

- **Steven**: Finalize the integration and simplification of all data models into one unified model and demonstrate how to extend it for industry-specific use cases (e.g., battery passport) by the next call.
- **Steven**: Check that the new packaging element meets all requirements of the referenced EU regulation before publishing with the 0.7 release.
- **Steven**: Confirm alignment between UNTP's "conformative vocabulary" and EU "rulebooks" to ensure interoperability and update documentation as needed.
- **Steven**: Update the traceability event model to integrate with the rest of the UNTP model, using the agreed event types (make, move, maintain/revise), and connect it to UNTP product and facility vocabularies.
- **All (via Slack)**: Vote on and decide the final terminology for the "modify" event (options: maintain, revise, etc.) and update the model accordingly before 0.7 release.
- **Steven**: Revisit and clarify in the model how to distinguish between product consumption and record retention periods, especially regarding decommissioning of DPPs and regulatory requirements.
- **Steven**: Prepare and (if possible) show a live example of a conformity catalog in an upcoming meeting.
- **Steven**: Update the vocabulary endpoint from test.uncfact.org to vocabulary.unc.org for the 0.7 release.

---

### Summary

#### Data Model 0.7 Release Progress

The meeting focused on the progress and upcoming release of the 0.7 candidate for public review. Steven discussed the consolidation of data models into one unified model to simplify the vocabulary and make it easier to extend for industry-specific applications. He also presented a revised model for digital traceability events, which aims to address concerns from organizations that have implemented GS1's EPCIS standard. The group discussed the potential for creating a profile that aligns with both UNTP and EPCIS standards, allowing for flexibility in implementation. Steven expressed confidence in the progress made and planned to demonstrate the ease of extending the unified model with a few examples before the release.

---

#### Event Definitions and Naming System

The team discussed the definitions of make, move, and modify events in their model, with Steven explaining that make events involve creating new products, move events involve transferring products between facilities, and modify events involve repairs or modifications to the same product. They agreed that the current naming system, while simple, might be misleading, particularly with the term "modify." The team also discussed the potential impact of changing these event names in future versions, as it could cause significant issues. Steven mentioned that from version 0.7 onwards, they would be publishing their vocabularies to the production endpoint, emphasizing the importance of getting the event names right.

---

#### EPC Terminology and DPP Decommissioning

The team discussed terminology around maintaining and modifying EPCs, with Virginia suggesting "revise" as an alternative to "modify" to avoid implying a different product. Adrienna raised questions about the decommissioning of DPPs, particularly in the context of recycled materials like shredded tires used in road construction, noting that while the original product may be consumed in the recycling process, the digital record might still need to be maintained. Steven explained that when materials like tires are recycled into new products, a new DPP may be created to track the origin of the recycled material, even though the original tires no longer exist.

---

#### Digital Product Passport Regulations

The group discussed regulatory requirements for digital product passports in the EU, where member states have different retention periods ranging from 6 months to 10 years. Steven noted the need to distinguish between product consumption and record retention periods, particularly regarding the availability of product passports after a business ceases to exist. Michael shared insights from Michelin's workshops with recyclers, highlighting how recyclers can now access detailed information about tire composition, though questions remain about the duration of this backward reference tracking.

---

#### Mass Balance in Recycling Processes

Steven and Michael discussed mass balance calculations in the context of tire recycling and battery production. They emphasized the importance of verifying mass balance claims with evidence from input materials to output products, without necessarily revealing commercially sensitive supplier information. Steven suggested using third-party auditors and potentially automating the process to reduce costs. They also highlighted the need to consider both quantities and qualities in mass balance assessments, using product passports to provide information on the carbon intensity of inputs.

---

#### Product Modification Terminology Discussion

The group discussed terminology for product modification events in a circular economy context, focusing on the distinction between make, move, modify, and maintain events. Steven presented a diagram showing how credentials can verify mass balance claims through automated auditing, which would be more cost-effective than human audits. The team agreed to change "modify" to "maintain" in their terminology, and Rafael suggested "enhanced" as an alternative, though Steven noted that "maintain" had the advantage of carrying a circularity connotation that would appeal to Adrienna.

---

#### Circular Economy Terminology Discussion

The team discussed terminology related to circular economy concepts, with Adrienna expressing concerns about the proposed terms "modify and maintain" not adequately conveying circularity. Steven and Michael agreed that while the terminology should be clear for programmers, they need to consider how it might be interpreted by a wider audience. Rafael suggested using a blockchain-like approach to maintain records without revealing sensitive supplier information, which Steven confirmed aligns with the UNTP framework's concept of auditable history and trusted governance regimes for mass balance verification.

---

#### Blockchain Implementation in UNTP Discussion

The discussion focused on blockchain technology and its application in UNTP, where Rafael suggested implementing blockchain-like mechanisms for data verification, but Steven clarified that while blockchain principles of tamper-proof records are valuable, specific blockchain technologies are not suitable due to lack of interoperability. The conversation also covered reporting periods for facilities, with Steven explaining that these are now associated with claims rather than facilities, allowing for various overlapping periods. Finally, they discussed the language of claims in UNTP, highlighting the challenge of representing compliance with various standards and regulations, and the need for algorithmic verification of performance claims to prevent fraud.

---

#### Digital Trade Verification Conformity Schemes

The discussion focused on UNTP's approach to digital trade verification and conformity schemes. Steven explained how algorithmic due diligence uses machine-readable credentials to verify claims in product passports, with a particular emphasis on the importance of digitally referenceable criteria from various conformity schemes. The group discussed how UNTP helps reduce complexity by creating a conformity catalog that allows schemes to publish their rules in a consistent, machine-readable format, even when those schemes are not owned by UNTP. Bogharald suggested that the middle box in their model could function as a trust register, which Steven confirmed was already part of UNTP's scheme endorsement system that categorizes schemes based on their level of external endorsement.

---

## 03-03-2026 Meeting US timezone

### Quick recap

This meeting focused on reviewing and addressing issues in the UNTP data model, with Steven leading the discussion and participants providing feedback. The main topics covered included updates to the data model structure, particularly consolidating vocabulary between core and DPP/DCC components into a single model, and changes to traceability events to better align with GS1 EPCIS standards while maintaining flexibility for non-EPCIS implementers. Key discussions centered around making party role fields optional rather than mandatory, handling transport emissions data in the mass balance framework, and addressing battery passport specific requirements including mandatory fields and date types. The team also discussed how to handle dynamic information in battery passports through separate verifiable credentials rather than modifying the core passport structure.

---

### Next steps

- **Steven**: Do an example (or two) of extending the unified data model for battery passport use case before the next meeting.
- **Susanne**: Connect (re-connect) Steven with the contact working on Chinese lifecycle event standard for review and comparison.
- **Steven**: Prepare and submit pull requests in the next day or two to update the model based on feedback (e.g., mandatory/optional fields, thresholds in measure, etc.).
- **Steven**: Make a note and update the model to make "party role" and "related party" (previously "object party role") optional in product and facility, and consider renaming for clarity.
- **Steven**: Add an optional "role" field to Credential issuer to distinguish issuer types (e.g., manufacturer, scheme, conformity assessment body) and make "related role" optional.
- **Steven**: Review and correct the spelling of "product quantity" label (add missing 'u' if needed).
- **Steven**: Raise a ticket (or ensure one exists) to address the need to handle transport/shipping emissions and transport as a product in the data model, and consider developing a guidance page for handling shipping/transport emissions.
- **Christian**: Raise a ticket to request that address be added as an optional field in Party.
- **Steven**: Discuss with Harley (and possibly the technical working group) a methodology for making certain fields mandatory in extensions (e.g., for battery passport) without redefining core semantics, and raise a ticket for this discussion.
- **Christian and Steven**: Collaborate on the battery passport extension to establish a repeatable methodology for extensions, ensuring the approach can be reused for other domains.
- **Steven**: Update the Slack channel link and post the new join link today.

---

### Summary

#### Follow-up Meeting on Technical Tools

The meeting began with technical discussions about recording and note-taking tools. Steven noted this was a follow-up meeting to one held 8 hours earlier, primarily targeting US time zones but also accommodating European participants. Susanne mentioned experiencing connection issues when trying to join what she believed was an earlier meeting at 11am, though Steven confirmed she could have joined this meeting instead. The meeting appeared to be getting underway with plans to review open issues and their closure pathways.

---

#### Supply Chain Data Model Consolidation

Steven reviewed supply chain issues and updated the data model based on feedback, consolidating the vocabulary from separate core and DPP/DCC models into a single model for better manageability. He explained that all components including vocabulary, context files, and credential schemas now come from a unified namespace, which will make it easier for extenders to create new features like battery passports. Steven also discussed changes to the traceability event model, noting that while the intent remained the same, it was realigned to better align with GS1 EPCIS standards rather than redefining them.

---

#### UNTP and EPCIS Integration Challenges

Steven discussed the challenges with the current UNTP approach, which represents an unhappy compromise between GS1 EPCIS and the rest of UNTP. He proposed creating a more aligned set of lifecycle events (make, move, and modify) that would integrate better with the core model and reference other UNTP semantic objects. Susanne raised questions about connecting EPCIS events to the data model and suggested making events more flexible to accommodate various types. Steven explained the difference between their focus on product provenance and EPCIS's focus on trackability, noting that traceability events would likely be more private than public credentials due to sensitive information they contain.

---

#### Credential Data Structure Updates

The team discussed updates to verifiable credentials and data structure requirements. Steven agreed to make party role fields optional in both credential issuer and product information sections, addressing concerns raised by Susanne about mandatory fields being impractical for many use cases. The team also discussed potential improvements to mass balancing processes, with Nick sharing insights about typical manual data ingestion and recalibration practices in commodities sectors.

---

#### Mass Balance Automation Challenges

Steven and Nick discussed the challenges and potential automation of mass balance assessments in commodity and manufacturing processes. They explored the importance of verifiable input data, audited systems, and the role of product passports in ensuring data accuracy and traceability. The conversation touched on separating quantities from calculated facts in mass balance specifications and the potential for automating certain aspects of the process in the future.

---

#### Integrating Transport Emissions in DPP

The group discussed how to handle transport emissions in the digital product passport (DPP) structure. Steven explained that emissions intensity data from mines should be separated from transport emissions data, as the current diagram only shows volume-based shipping information without transport emissions. Nick suggested allowing shipping suppliers to include transport carbon intensity data in a single digital entity, but Steven clarified that this would require additional guidance on handling shipping and transport emissions. The group agreed that transport emissions need to be incorporated into the overall product carbon footprint, though the specific implementation details require further discussion.

---

#### UNTP Battery Passport Extensions

The team discussed extending UNTP core functionality for battery passports, focusing on making certain fields mandatory without changing their semantic meaning. Steven advised against redefining existing terms and suggested creating a repeatable methodology for extensions, potentially using a constraint or rule system. They also addressed the need to distinguish between production and service dates, deciding to initially implement this in an extension with the possibility of adding it to core if widely needed. Finally, they discussed adding address fields to the Party structure, with Steven suggesting this could be implemented as optional fields in Party.

---

#### Battery Passport Dynamic Data Handling

The team discussed handling dynamic information in battery passports, with Steven suggesting using both static information (DPP) and dynamic information as verifiable credentials. Christian and Susanne raised concerns about implementing this approach, noting that it would require issuing additional credentials with issuer and subject information, which might be different from embedding the data directly in the battery passport. Steven acknowledged this as an ongoing debate not just in UNTP but also in Europe, and mentioned that the Surpass team is facing similar questions and reaching similar conclusions about lifecycle data handling.

---

#### Sensor-Monitored Data System Implementation

The team discussed implementing a sensor-monitored data system, with Susanne and Steven agreeing to proceed without mandating it, allowing the market to determine the best approach. Steven explained the connection between criteria and attestation in the rulebook system, demonstrating how schemes like the Responsible Minerals Assurance Program define profiles containing criteria that can be referenced in claims and assessments. The team confirmed that publishing the Global Battery Alliance rulebook is a lower priority after completing the battery passport and Dinspec 99100 work.

---

## 17-01-2026 Meeting EU timezone

### Quick recap

The meeting focused on reviewing and discussing updates to the UNTP (Universal Product Passport) data model, particularly around product parties, packaging information, and facility records.

The group agreed to simplify the party model by allowing multiple parties with defined roles, rather than using a large pre-defined list of roles.

They discussed how to handle packaging information, with Kit raising concerns about different types of packaging across the supply chain, and Adrienne suggesting alignment with the EU Packaging and Packaging Waste Directive.

The team also reviewed proposed changes to how performance metrics and emissions data would be reported, moving away from fixed circularity and emissions performance boxes toward a more flexible but controlled vocabulary of metrics.

Bogharald contributed insights about textile product passports and the importance of machine-readable credentials, while Adrienne emphasized the need for sector-specific metrics and criteria in different industries.

---

### Next steps

- **Steven**: Draft a controlled vocabulary of metrics (including emissions, circularity, water usage, etc.) for use in product and facility records, drawing from relevant standards/frameworks (e.g., ESRS, IFRS, GRI, Pathfinder), and seek subject matter expertise input before the next supply chain meeting in two weeks.
- **Adrian**: Share the updated UNTP Chain of Custody page with the Chemex COC team and provide feedback.
- **Steven**: Review the Packaging and Packaging Waste Directive (PPWR) and Extended Producer Responsibility regulations (as referenced by Adrian) to ensure the packaging information model in the product passport covers all required reporting elements.
- **Steven**: Monitor for the public release of JTC24’s suggested roles for economic operators/actors and update the UNTP party role list as appropriate.
- **Steven**: Develop sample examples showing how circularity and emissions performance claims can be reported using the new, more flexible and rigorous claims structure, to illustrate migration from the current “circularity performance” and “emissions performance” boxes.
- **Steven**: Prepare and demonstrate a working example of a real conformity vocabulary catalog issued by a particular scheme owner for the next meeting.

---

### Summary

#### EU Business Wallet Simplification Progress

Bogharald discussed the progress of business wallets in the EU, highlighting that simplification is now a top priority, with a focus on making public sector wallets mandatory and eliminating pre-certification requirements.

He mentioned that his company has already implemented this simplified system, allowing for direct wallet-to-wallet transactions.

Steven noted a discussion in the W3C Credentials Community Group about differences in wallet verification approaches between Europe and the US, but the conversation focused on the progress and benefits of the European business wallet system.

---

#### UNTP Supply Chain Roles Update

The supply chain group discussed issues and plans to publish version 0.7 of UNTP, focusing on supply chain components including Product Passport, Facility Record, Traceability, and Event.

Steven shared updates on the party model, proposing changes to include multiple party roles relevant to product passports and facility records, while prioritizing simplicity over using a vast standard role list.

The group agreed to review and provide feedback on suggested roles, with Steven expressing a preference for a smaller, focused set of roles.

---

#### ESPR Roles and Packaging Updates

The group discussed roles and responsibilities in the EU's ESPR and economic operator framework, with Adrienne and Michael noting that multiple roles need to be reported, including manufacturers and importers.

They agreed to follow ESPR Section 32 and subsequent guidance, along with JTC24 recommendations, to determine appropriate roles globally.

The team also addressed packaging information, with Steven proposing to add packaging as an optional property of the product in the data model, including dimensions and material composition.

---

#### Packaging and Product Passport Discussion

Kit raised questions about different types of packaging along the supply chain, and Steven explained how the UNTP system handles fabric and product passports separately.

Adrienne recommended reviewing the Packaging and Packaging Waste Directive (PPWR) and extended producer responsibility regulations, which Steven noted would need to be checked against the current data model.

Michael raised questions about handling nested packaging in the DPP system.

Steven explained that facility records require a defined reporting period to be meaningful, which could be monthly, quarterly, or annual.

---

#### Facility Reporting Period Flexibility Discussion

The team discussed facility reporting periods for sustainability assessments.

Adrienne explained that Together for Sustainability recommends:

- using facility IDs
- allowing one year of primary data, or
- up to three years of documented assumptions if primary data is unavailable

Steven proposed making the reporting period a mandatory attribute while allowing facilities to define their own reporting periods rather than restricting them to fixed timeframes.

The team agreed this was a reasonable approach.

---

#### Material Origin Reporting Requirements

Steven discussed requirements for facilities to report the origin of materials, similar to pilot work on critical mineral supply chains.

Facilities must report:

- material types
- mass fractions
- country of origin

Detailed supplier information is not required due to commercial sensitivity.

He also referenced the Responsible Business Alliance cascading spreadsheet framework used to trace materials to their source for Dodd-Frank conflict minerals compliance.

---

#### Mass Balance and Chain of Custody

The discussion focused on mass balance verification and chain of custody for materials in manufacturing facilities.

Steven and Michael noted that facility declarations about material sourcing are difficult to verify without detailed mass balance data, which is often commercially sensitive.

Adrienne described Chemex work on chain of custody guidelines and highlighted a significant update to the UNTP Chain of Custody page, including a new transparency diagram showing how facilities can provide traceability while protecting sensitive information.

---

#### Product Passport Performance Metrics Update

The team discussed replacing circularity and emissions performance claims with categorized claims in the Product Passport.

Steven proposed improving rigor and comparability through a controlled code list for reporting metrics, structured similarly to conformity topic lists and aligned with ESRS, IFRS, and GRI.

The group agreed to review the revised model and provide feedback.

---

#### Circular Metrics Recording Framework

Adrienne raised concerns about how companies such as Siemens would record circular performance metrics, especially for remanufacturing.

Steven explained that performance facts could be reported as claims against criteria using a controlled vocabulary covering activities such as:

- recycling
- repair
- remanufacturing

The group agreed to develop a flexible structure with a controlled vocabulary before the next supply chain meeting, drawing on frameworks such as the WBCSD Pathfinder.

---

#### Performance Tracking System Development

The group discussed development of a performance tracking system.

Michael highlighted limitations of arbitrary performance boxes and supported a flexible but controlled vocabulary.

Steven explained that the new UNTP data model would support multiple performance types, but emphasized the need for governance to prevent loss of meaning.

Bogharald shared insights from a German textile passport project, stressing the importance of machine-readable credentials and the potential for self-issued credentials from reputable organizations.

---

#### Product Passports and Compliance Standards

The meeting reviewed the role of product passports and facility records as manufacturer statements whose credibility depends on brand reputation.

Steven described the optional conformity component, signed by an independent assessor or machine, to support or challenge claims.

Adrienne shared insights from the chemicals sector, emphasizing the need for sector-specific metrics and metadata to generate key indicators and support compliance evaluation.

The group highlighted the importance of publishing schemes digitally to enable comparison of criteria across different conformity schemes.

---

## 17-02-2026 Meeting US timezone

### Quick recap

The meeting focused on reviewing and discussing updates to the UNTP data model, including changes to party roles, facility records, and performance metrics. The group debated the inclusion of multiple party roles in product passports and facility records, with Susanne questioning the necessity of certain roles for EU regulations.

They also discussed replacing circularity and emissions performance measures with categorized claims, with Steven proposing a new approach using controlled vocabularies for metrics.

The team addressed the need for tolerances in product measurements and considered whether to create separate extensions for copper-specific data or include it in a broader critical raw materials extension.

The conversation ended with a brief discussion on updating the definition of the ID property in the model.

---

### Next steps

- **Steven**: Check ESPR Section 32 and other relevant regulations/standards to determine the required party roles for product passports and facility records, and consider community input on whether multiple party roles are needed.
- **All interested parties (especially Susanne, Nick, Todd)**: Comment on the relevant ticket regarding the necessity and scope of party roles in the data model, particularly in the context of ESPR and other jurisdictions.
- **Steven**: Reconsider and potentially revise the requirement for a mandatory reporting period in the facility record, based on Nick's feedback about overlapping claim periods and implementation complexity; seek further input before finalizing.
- **Susanne (and others)**: Add comments to the new ticket regarding the need to capture assessment period (applicable period for which data was assessed) in credentials, and clarify language/requirements for assessment, audit, and validity periods.
- **Christian / Susanne**: Add upper and lower tolerance fields to the measure class in the core model (or raise/progress the ticket for this), to support tolerances for product dimensions/measures, and process the associated ticket.
- **Christian / Susanne**: Raise or update a ticket regarding the handling of corrosion and other attributes for copper and other critical raw materials, and document implementation in the copper extension for now, with a note for future harmonization if similar needs arise in other materials.
- **Susanne**: Update the definition of the ID property in the model to remove or clarify the reference to ISO 8975 and resolvable URLs, as per discussion.
- **Steven**: Assign the new ticket regarding assessment period to the appropriate group (Brett's group) for tracking.
- **All**: Provide feedback and comments on the proposed changes to claims, metrics, and performance measures, especially regarding the controlled vocabulary for metrics and the handling of “Other” metrics, via the relevant ticket.
- **Christian**: Raise a ticket (if not already done) regarding the need for tolerances on measures/dimensions, and ensure it is labeled appropriately (or follow up with Steven if unable to add labels).

---

### Summary

#### UNTP Data Model Party Roles Update

The team discussed updates to the data model for UNTP, focusing on changes to handle multiple party roles for products and facilities. They plan to use the party roles defined in ESPR Section 32 as guidance for encoding these roles in the model.

Steven mentioned addressing a backlog of issues before the next version release, and the team agreed to review the proposed changes to ensure they meet regulatory requirements.

---

#### Digital Product Passport Roles Discussion

The team discussed two main topics: party roles in digital product passports (DPPs) and facility records.

- **Party roles**:
  They debated whether to use the extensive UN/CEFACT code list of 300+ roles or create a more specific list. Nick suggested that for EU ESPR requirements, only the economic operator needs to issue product passports, with manufacturer and importer roles potentially needed in other jurisdictions.

- **Facility records**:
  Nick raised concerns about making the reporting period mandatory, as this could force multiple DFRs to align with different claim periods.

The team agreed to reconsider the mandatory reporting period requirement and to create a new ticket for addressing the assessment period in conformity credentials.

---

#### Assessment Period Clarification Discussion

The team discussed the concept of assessment periods in credentials and reports, clarifying that it refers to the period for which data is assessed, rather than the duration of on-site audits.

Susanne explained this using the Copper Mark credential as an example, distinguishing between:

- the assessment period
- the issuance date
- the validity period of the credential

Steven suggested using the term **“applicable period”** to better convey this meaning. The team agreed that clearer language is needed to avoid confusion.

---

#### Standardizing Assessment Date Reporting

The team discussed the need to clarify and standardize the reporting of assessment dates and periods, with Susanne highlighting discrepancies in the current system.

Steven explained the differences between:

- audit site dates
- assessment periods
- credential validity dates

A ticket has been created to address these issues.

The group also discussed replacing circularity and emissions performance metrics with categorized claims, with Steven proposing a more structured approach using a controlled vocabulary for metrics to ensure consistency and alignment with existing reporting standards.

---

#### Environmental Metrics Implementation Challenges

Nick and Steven discussed the challenges of implementing a system for measuring and disclosing various environmental metrics, such as carbon intensity and product carbon footprint.

Key ideas:

- Create a short list of metrics
- Categorize assessment criteria under each metric
- Separate the vocabulary for metrics and conformity topics from the UNTP core data model to allow easier updates
- Remove confusing performance boxes and replace them with a more user-friendly display

Susanne noted that 2–3 tickets had been issued before the meeting (details not discussed).

---

#### Product Passport Threshold Modeling Discussion

The team discussed modeling tolerances and thresholds in product passports and whether these belong in the core model or extensions.

Key distinctions:

- **Performance thresholds** → defined criteria
- **Claimed performance** → actual measured results

Nick suggested many measurements could be represented as claims with associated standards.

They also discussed:

- difference between product characteristics (e.g. color, size) and performance measures
- need for industry-specific decisions about which data points require verifiable assessments versus simple properties

---

#### Product Dimensions and Tolerance Standards

The team discussed handling dimensions and tolerances in product classes.

Decisions and considerations:

- Add tolerance information to the measure field for product dimensions
- Useful for implementations such as copper product descriptions
- Debate whether copper-specific attributes should be in a dedicated extension or a broader critical raw materials extension
- Steven recommended waiting to see if attributes are reused before moving them into industry-wide extensions

They also clarified the definition of the ID property, removing reference to ISO 8975 and allowing a more flexible approach to resolving URLs.

---

## 03-01-2026 Meeting EU timezone

### Quick recap

The Supply Chain Working Group discussed the process for reviewing and closing open issues in the UNTP specification, with Steven explaining the governance structure and contribution process through GitLab. The meeting focused on mass balance and product passports in supply chain management, including discussions about facility records, carbon footprints, and national regulations across different countries. The group explored digital credentials and transparency in supply chains, covering topics like UNTP architecture, digital product passports, and mass balance calculations for sustainable production, with particular attention to auditing challenges for SMEs in developing countries.

### Next steps

- steven: Close the mass balance ticket after a week if no further comments or concerns are raised on GitHub/Slack, otherwise keep it open for further discussion.
- All participants (especially those with GitHub accounts): Comment on the mass balance ticket on GitHub within the next week to provide consensus, concerns, or questions before the ticket is closed.
- steven: Look up and share the contact information of the person at ITC working on the DPP issuer tool for SMEs/developing countries with David.
  Summary

### UNTP Specification Version 0.7 Review

The Supply Chain Working Group discussed the process for reviewing and closing open issues in the UNTP specification, with a focus on reaching version 0.7. Steven explained the governance structure and how participants can contribute through GitLab, including the registration process and commenting on existing tickets. The group reviewed the agenda, which included a quick review of last meeting's minutes, addressing issues towards version 0.7, and a Q&A session. David Jensen introduced himself as a new participant, interested in deploying UNTP in developing countries, and mentioned his background with the UN and GIZ.

### Supply Chain Mass Balance Discussion

The meeting focused on discussing mass balance and product passports in supply chain management. Steven explained how facilities handle mass balance by recording objecting opinions and progressing with majority decisions. He also described the concept of product passports for unique product classes, including how they apply to bulk commodities and changes in production methods. İrem raised questions about overlapping credentials and how the system distinguishes between facility records and product passports. Steven clarified that product passports are attached to specific shipments or batches, while facility records represent broader time-bound performance data.

### Carbon Footprint Mapping in Apparel

The discussion focused on the challenges of mapping fragmented facilities in the apparel industry and calculating product-specific carbon footprints (DPPs) across different countries. Matin raised concerns about how national regulations could affect DPP comparisons between countries, particularly Bangladesh and Australia. Steven explained that while different countries may use varying calculation methods and regulations, the protocol aims to record the calculation basis for each facility, ensuring transparency but not harmonizing national regulations.

### Sustainable Materials Chain Tracking Methods

The discussion focused on mass balance and chain of custody methods for tracking sustainable materials in supply chains. Steven explained that mass balance allows mixing of materials while ensuring totals match on both sides, enabling facilities to claim percentages of sustainable materials based on actual inputs and outputs. Virginia raised a question about conformity certificates and DPPs, which Steven confirmed are time-bound and can be evaluated based on the date of facility evaluation or batch. Jeremy inquired about protocols for transparency and signing of credentials, to which Steven emphasized the importance of digital standards for traceability and transparency, aiming to enable scalable algorithmic due diligence and maintain confidence in sustainability claims.

### Digital Certificate Traceability Solutions

The meeting focused on the transparency and traceability of digital certificates and credentials in supply chains. Jeremy emphasized the importance of public availability and traceability of audit processes to ensure credibility. Steven discussed the UNTP (Universal Numerical Traceability Protocol) architecture, highlighting its ability to create a digital twin of a value chain using interconnected credentials and allowing for verification of entire graphs rather than individual credentials. He also explained the concept of transformation events and the need for an architecture that balances traceability, transparency, and confidentiality, offering alternative means to build trust without compromising sensitive information.

### UNTP Digital Product Passport

The discussion focused on the UNTP digital product passport standard and its approach to traceability and accountability. Steven explained that the standard allows for the digital signing and hashing of evidence to ensure auditor credibility and prevent tampering, while also accommodating different levels of conformity assurance. Rafael inquired about the DPP's consideration of factors like gender and age in production, to which Steven responded that UNTP abstracts these details into a claim structure to accommodate various national regulations and schemes, with industry working groups able to specify relevant criteria at a more granular level.

### Mass Balance and Digital Credentials

The meeting focused on discussing mass balance and digital credentials for sustainable production. Steven explained how facilities handle inputs and outputs, including batch processes and the importance of transparency or auditing for carbon intensity claims. Matin raised questions about apportioning materials across multiple facilities in a value chain, which Steven addressed by emphasizing that facilities are responsible for their own mass balance calculations. David asked about potential bottlenecks in auditing for SMEs in developing countries, to which Steven responded that tools like the ITC issuer toolkit aim to make digital credentialing accessible and efficient for small producers. The conversation ended with Steven proposing to close the mass balance ticket, inviting participants to provide feedback on GitHub if they wished to keep it open.

---

## 03-01-2026 Meeting US timezone

### Quick recap

The supply chain working group meeting focused on administrative updates and discussions around the UNTP specification, including revised terms of reference and meeting minutes. The team explored various aspects of product passports and conformity credentials, discussing how claims and credentials are managed and linked within the UNTP system. The conversation ended with detailed discussions about carbon footprint calculations, data verification methods, and the handling of digital and paper-based credentials, along with identifying a bug in the specification documentation.

### Next steps

- steven: Send email to the main list with links to all issues marked "pending close" and seek consensus on their closure within 2-3 weeks
- steven: Publish this meeting's minutes by tomorrow
- Susanne/Christian: Select key questions from Slack discussion and create corresponding tickets in UNTP GitLab
- steven: Update the specification page with the correct links to the current latest logical model (addressing Christian's point about outdated model links)
- Todd: Raise a ticket about using hashing/zero knowledge proof for PDF certificate validation
- Nick/steven: Clarify in the main specification pages what "link" means in different contexts, particularly distinguishing between discovery links and content verification links
- steven: Update page with the right links to the current latest model (0.61) as identified by Christian
- All participants: Review the published meeting minutes and provide feedback or corrections if needed
- All participants: Review the list of "pending close" issues when email is sent and provide opinions/objections via GitLab or mailing list to establish consensus before closure
- All participants: Ensure they have (or request) access to GitLab for commenting on tickets and participating in consensus process

### Supply Chain Meeting: Mass Balance Focus

The supply chain fortnightly meeting began with a reminder that it is a UN meeting and contributions should be made freely available. The group discussed last week's meeting minutes and considered topics for the current meeting, with mass balance being a key focus from a previous 8-hour meeting. Susanne raised questions on Slack about mapping to EUDPP and data locations, which could be an interesting topic to address. The group also mentioned the need to close tickets and prepare for the 0.7 release in the coming weeks, ensuring any new concerns or unanswered questions are addressed.

### Supply Chain Working Group Updates

The meeting focused on administrative updates to the supply chain working group, including revised terms of reference and meeting minutes. Steven announced plans to close several pending issues and requested team feedback through an email survey, emphasizing the need for consensus on closure. The group discussed the handling of declarations and reporting against various regulatory frameworks, standards, and schemes, with Steven explaining that UNTP serves as a vehicle for claims and evidence against any standard or regulation.

### UNTP Claims and Conformity Discussion

The team discussed how to handle claims and conformity credentials in the UNTP specification, focusing on how these relate to products and companies. Steven explained that UNTP aims to automate auditing through digitalization, allowing for continuous verification of data. He emphasized that claims must be linked to formal methodologies or rulebooks, such as industry schemes or regulations, to have meaning. The team agreed to transfer relevant Slack questions to GitLab as permanent records, with Susanne creating a ticket to clarify the concept of claims and criteria in UNTP.

### Sustainability Claims and Credentials Discussion

Susanne and Steven discussed the challenges of managing multiple sustainability claims and credentials, such as coppermark certifications, in product passports. Susanne expressed concerns about the complexity of linking claims to credentials and the difficulty of updating them when credentials expire. Steven clarified the purpose of claims and conformity credentials, explaining that claims are self-declarations by facilities or companies, while conformity credentials are independent assessments. He emphasized that the passport allows for various performance declarations, which may or may not be substantiated by third-party evidence, while the conformity credential provides a certificate for third-party verified assessments.

### UNTP System Credentials Discussion

Susanne and Steven discussed the use of product passports and conformity credentials in the UNTP system. They clarified that credentials should not be hard-coded into product passports, as they might change or expire. Steven explained that the intent of UNTP is to automate due diligence, not just data exchange. They also discussed the identity resolver specification, which allows for resolving identifiers to lists of associated data, including conformity credentials. The conversation touched on the question of whether to break down conformity credentials into more detail, with Steven suggesting it might be useful for certain applications.

### Claims Management in Digital Passports

Nick explained the concept of claims in the context of digital product passports and facility records, emphasizing that claims can carry various types of data, including self-declared information, and can be verified through third-party audits. He highlighted the importance of managing claims, especially when dealing with thousands of them, and suggested that vendors should be evaluated based on their ability to manage claims effectively. Nick also discussed the granularity of credentials, noting that they can be wrapped up into single claims or broken down into more detailed ones, depending on their intended use.

### Claims vs Properties in Product Passports

The group discussed the distinction between claims and properties in product passports, with Steven emphasizing the importance of objective standards for assessing claims. Susanne proposed a flexible approach where facility identifiers could be discovered and linked to conformity credentials, rather than managing static claims. They also explored the challenges of granularity in emissions audits and the need for relevant information for different stakeholders.

### Product Passports and Carbon Credentials

Steven and Susanne discussed the use of product passports and carbon footprint credentials in supply chains. Steven emphasized the importance of including product-level carbon intensity information in passports, particularly for bulk materials and high-volume items, while Susanne focused on the Global Battery Alliance's approach of calculating carbon footprints at the product level. They agreed that while facility-level credentials are useful, product-level passports are essential for sharing relevant information with subsequent actors in the value chain.

### Battery Carbon Assessment Framework

The group discussed the carbon calculation rules for batteries and the distinction between self-claimed claims and independently assessed conformity credentials in digital product passports. Steven explained that while the Global Battery Alliance provides rules for carbon intensity assessment, mine site emissions are regulated by different frameworks, and product-level independent assessments may be necessary for high-value finished products. The discussion clarified how algorithms can verify the connection between claims in product passports and conformity credentials through shared criteria and identifiers, with Steven emphasizing that links between credentials are not based on URLs but on correct content references.

### UNTP Link Specification Clarification

The meeting focused on clarifying the concept of links in the UNTP (Uniform Networked Trade Product) specification, particularly distinguishing between signpost links for data discovery and actual data content links. Steven explained that while links are important for finding credentials, it's the data within the credentials that establishes valid connections between product identifiers and assessments. The group discussed practical considerations for handling both digital and paper-based credentials, with Todd suggesting the use of zero-knowledge proofs and hashing as a way to validate PDF certificates in the interim. The conversation ended with Christian pointing out a bug in the specification documentation regarding version 0.61, which Steven agreed to fix.

---

## 20-01-2026 Meeting EU timezone

### Quick recap

The UNTP Supply Chain Working Group reconvened under Steven Capell’s leadership to progress the development of interoperable traceability and transparency systems across value chains.

The group’s primary objective is to finalize **UNTP version 0.7 before June**, enabling wider consultation and early adoption.

New participants were welcomed, and use cases across seafood, diamonds/precious minerals, and textiles were discussed. Emphasis was placed on:

- Interoperability between existing traceability platforms
- Adherence to UN rules regarding non‑commercial, public‑good standards
- Practical alignment between business needs and technical design

Outstanding technical issues will be addressed prior to the v0.7 release, targeted in approximately six weeks.

### Next steps

- **All participants**  
  Review open supply-chain-related issues/tickets in UN GitLab and provide comments, particularly comparing:

  - Questions raised by previous groups
  - Answers provided in the _Transparency Graph_ and _Chain of Custody_ pages.

- **All participants**  
  Read the _Transparency Graph_ and _Chain of Custody_ pages on the UNTP site and provide feedback where explanations are unclear or insufficient.

- **John Phillips (Global Trust Registry Project)**  
  Provide consolidated issues, pull requests, and feedback on digital identity anchor changes to the relevant working group within four weeks.

- **Steven Capell**  
  Circulate instructions on registering for UN GitLab to enable direct commenting on issues/tickets.

- **All interested participants**  
  Submit questions or concerns via the mailing list, Slack channel, or email in preparation for the v0.7 release.

### Leadership update

Steven Capell confirmed the resumption of leadership of the UNTP Supply Chain Working Group.

The group reiterated its mandate to produce **industry‑neutral core standards with industry‑specific extensions**, and to publish outputs as open, common‑good specifications.

### New participants

New members introduced themselves, including:

- Vlasis
- Denis
- Xiaodi
- Matthew
- Rafael
- Jennifermoriconi
- Irene
- Anett
- Irem
- Tobias

Steven noted that:

- The **seafood sector (GDST)** is moving toward UNTP alignment.
- UNTP is intended to enable cross‑sector interoperability rather than replace existing domain standards.

Jennifermoriconi expressed interest in applying UNTP to diamond and precious minerals traceability.  
Participants were encouraged to connect with John Phillips regarding digital identity and the Global Trust Registry.

### UNTP in textiles and fashion

Discussion focused on how UNTP can interoperate with existing textile and fashion traceability platforms (e.g., Industry 4.0 and ChemX).

- Emma (Lectra) presented the **Techstat Genesis** platform for textiles and leather traceability and expressed interest in future pilots.
- Nick emphasized framing technical discussions in business terms relevant to ESG managers and supply chain owners.

Future pilots with multiple platforms are anticipated once v0.6 stabilisation and bug fixes are complete.

### UNTP as a supply chain interoperability standard

Steven provided an overview of UNTP as a digital interoperability protocol supporting:

- Digital Product Passports (DPPs)
- Digital Facility Records (DFRs)
- Conformity Credentials
- Digital Traceability Events

Key characteristics:

- Publish-and-discover architecture
- Machine- and human-readable data
- Support for automated due diligence

Key open questions being addressed:

- Handling confidential and commercially sensitive data
- Non-participating actors in supply chains
- Bulk materials and mass-balance models

These issues are targeted for resolution before the v0.7 release.

### Facility data integration in DPPs

Facility information is linked to Digital Product Passports through **shared identifiers**, rather than hard-coded links.

Nick raised questions regarding ESPR-aligned facility data structures in Europe.  
Steven demonstrated how facility data can be discovered via identifiers within the UNTP model.

Participants were encouraged to review recent updates to the _Transparency Graph_ and _Chain of Custody_ pages and assess whether they adequately explain:

- Business problem coverage
- Data discovery patterns
- Handling of different data types

---

## 20-01-2026 Meeting US timezone

### Quick recap

The meeting focused on progress toward the development and implementation of UNTP as a digital interoperability standard for supply chain traceability and due diligence.

Key objectives include publishing **version 0.7 by mid-March** for public review and progressing toward **version 1.0 by June**.

Discussions covered UNTP architecture, data publication mechanisms, and the role of digital credentials in enabling verification and interoperability across platforms. Participants also explored challenges in transitioning from unstructured to structured data and ongoing work on JSON schemas and linked data ontologies.

### Next steps

- **Steven Capell**

  - Send a reminder and calendar invite for the next meeting to Susanne and other participants as needed.
  - Send an email to the working group with instructions for registering on GitLab and guidance on participation (raising tickets, merge requests, etc.).

- **Susanne**

  - Align with Steven offline to schedule a separate conversation about Coppermark credential details.

- **Fins**

  - Locate and share the link to the OGC Building Blocks project in the chat or relevant channel.

- **Juan**

  - Join the Slack channel and mailing list.
  - Consider raising the topic of a JSON Schema ↔ RDF bridge and potential collaboration with the JSON Schema community, including a possible blog post or promotion to raise UNTP awareness.

- **All interested technical participants**
  - Review and help resolve open GitLab issues with the goal of reaching v0.7 within 4–6 weeks.

### UNTP version milestones and timeline

Steven outlined the following targets:

- Publish **v0.7** by mid-March for public review.
- Conduct a **two-month public review** period.
- Progress toward **v1.0 by June**.

Steven reminded participants of the UN meeting code of conduct:

- Commercial product promotion is not permitted.
- Contributions to the UNTP website are considered UN Intellectual Property (UNIP).

The meeting was recorded, and minutes will be published publicly on the website.

### UNTP as digital supply chain standards

Steven introduced UNTP as a collection of digital standards supporting:

- Digital Product Passports (DPPs)
- Digital Facility Records (DFRs)
- Conformity / sustainability credentials
- Digital Traceability Events

Architecture highlights:

- Verifiable credentials published and discovered via URLs.
- Facilities and products described using facility records and product passports.
- Data publication mechanisms are defined but **implementation-agnostic** (e.g., APIs, JSON files, or other approaches).

Adoption considerations discussed:

- Simplicity of implementation
- Clear incentives for adopters
- Interoperability across competing service providers

Susanne requested a deeper offline discussion on Coppermark credentials.

### UNTP standard development update

UNTP is being developed as a platform that software vendors can implement in a consistent, interoperable way.

Key points:

- A test playground is planned to help validate implementations.
- UNTP aims to support **algorithmic due diligence** for sustainability and product quality claims.
- Specifications must serve both technical implementers and business users.

Steven reiterated that the target for **version 1.0 is June**, with active work underway to resolve GitLab issues.

### Specification timeline and review process

- v0.7 expected in 4–6 weeks.
- Followed by a formalized public review period (~2 months).

Steven emphasized:

- The importance of incentives for implementation.
- The value of a competitive ecosystem of service providers using the same standard.
- The challenge of verifying data across heterogeneous platforms.

### JSON Schema and linked data integration

Technical discussion focused on balancing:

- Structured JSON schemas for developers
- Compatibility with linked data / RDF graphs

Juan expressed interest in collaborating on improving JSON schemas and promoting the UN/CEFACT JSON Schema ecosystem.

Marcus and Fins highlighted existing tooling such as **OGC Building Blocks** that supports conversion between JSON and RDF formats.

The group agreed to continue discussion via Slack and the mailing list, with the shared goal of reaching a level of maturity where implementers can have confidence in the specifications.
