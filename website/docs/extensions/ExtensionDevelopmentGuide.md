---
sidebar_position: 11
title: Extensions Development Guide
---

import Disclaimer from '../\_disclaimer.mdx';

<Disclaimer />

## Creating an Extension: Process Overview

### Is Your Industry Ready?

**Your industry is a strong candidate if**:

- ✓ Common sustainability metrics or regulatory requirements across sector
- ✓ Industry association or standards body that can coordinate
- ✓ 10+ organizations would implement if extension existed
- ✓ Association can dedicate 1-2 technical staff for 4-8 months
- ✓ Member interest in coordinated transparency approach

### High-Level Process

**Phase 1: Initiation** (Weeks 1-4)

- Form extension working group
- Identify representative stakeholders
- Contact UNTP team for guidance
- Develop initial business case

**Phase 2: Requirements** (Months 1-3)

- Document industry-specific product types
- Identify key sustainability metrics
- Map relevant standards and regulations
- Catalog industry identifier schemes
- Survey member implementation needs

**Phase 3: Development** (Months 2-5)

- Design credential schema extensions
- Create industry vocabulary context
- Specify identifier registrations
- Map conformity criteria
- Develop test cases and examples

**Phase 4: Testing** (Months 4-7)

- Pilot with 2-3 member companies
- Validate against UNTP core conformance
- Test interoperability with other extensions
- Iterate based on feedback

**Phase 5: Registration** (Months 6-8)

- Create extension specification website
- Prepare registration package
- Submit to UNTP for formal registration
- Announce to industry

**Phase 6: Support** (Month 8+)

- Provide implementation support to members
- Track implementations
- Maintain alignment with UNTP core
- Evolve based on feedback

### Extension Business Case

**Benefits of Creating an Extension**:

**For Your Industry Association**:

- Establish leadership in sector's digital transformation
- Create member value through coordinated approach
- Reduce individual member implementation costs by 60-80%
- Position as authoritative source for industry transparency standards
- Attract new members seeking transparency solutions

**For Industry Members**:

- Industry-relevant credentials (no forcing data into generic templates)
- Implement once, satisfy multiple customers/regulations
- Competitive advantage in transparency-demanding markets
- Shared implementation costs across association
- Access to sector-specific best practices and support

**Cost Comparison**:

| Approach                                                   | Cost Per Company   | Total Sector Cost (50 companies) |
| ---------------------------------------------------------- | ------------------ | -------------------------------- |
| No coordination: Each company creates proprietary solution | $100-300K          | $5M-15M                          |
| Commercial platform: Subscribe to vendor platform          | $50-150K + ongoing | $2.5M-7.5M + ongoing             |
| **UNTP Extension: Association creates, members implement** | **$15-50K**        | **$750K-2.5M**                   |

**Extension Development Cost**: $200-500K (association investment)
**Return**: 10-30x through member implementation savings

### Resources for Extension Creators

- [Extensions Methodology](/tools-and-support/ExtensionsMethodology.md) - Complete technical specification
- [Community Activation Program](../business-case/CommunityActivationProgram.md) - Coordination guidance
- [Business Case Templates](../business-case/) - ROI analysis for member value
- [Help & Support](../tools-and-support/HelpAndSupport.md) - Expert assistance and community

### Success Stories

**Australian Agriculture Traceability Protocol**

- **Timeline**: 8 months from initiation to registration
- **Investment**: $400K (association)
- **Member Benefit**: $20M+ in implementation savings (50+ members)
- **Impact**: 70% reduction in compliance documentation costs

**Critical Raw Materials Transparency Protocol**

- **Coverage**: Copper, lithium, cobalt, rare earths
- **Adoption**: Pilots in Canada, Australia, DRC
- **Impact**: Industry-wide coordination ahead of regulations

[→ Contact Us to Discuss Extension Development](/docs/tools-and-support/HelpAndSupport.md)

---

## Implementing an Existing Extension

### If Your Industry Has an Extension

**Step 1: Review Extension Specification**

Find your industry in the [Extensions Register](/docs/implementations/ExtensionsRegister.md) and follow the link to the extension's specification website.

**What to look for**:

- Credential schemas (what data fields are required/optional)
- Identifier schemes (which product IDs are accepted)
- Conformity criteria (which sustainability metrics matter)
- Implementation guides (step-by-step technical instructions)
- Test cases (how to validate your implementation)

**Step 2: Choose Implementation Approach**

**Option A: Extension-Compliant Software**

Check if your current business software or available solutions support your industry's extension:

- [UNTP Software Implementations Register](../implementations/Software)
- Contact extension governance body for recommended vendors
- Extension specification websites often list compatible software

**Best for**: Small-medium businesses, standard operations

**Option B: Custom Integration**

Work with your IT team or systems integrator to implement the extension:

- Use extension's reference implementation as starting point
- Integrate with your existing business systems
- Follow extension's test cases to validate conformance

**Best for**: Large enterprises, unique workflows

**Step 3: Join Extension Community**

Each registered extension maintains support infrastructure:

- Industry-specific implementation forums
- Regular office hours with extension technical team
- Shared learnings from other implementers
- Updates about extension evolution

**Find community links on extension specification websites**

**Step 4: Implement & Test**

- Follow extension implementation guide
- Issue sample credentials for test products/facilities
- Validate against extension test cases
- Validate against UNTP core tests
- Register your implementation in the extension's implementation register

**Step 5: Go Live & Share**

- Deploy to production
- Issue real credentials for your products/facilities
- Share credentials with supply chain partners
- Contribute case study to extension community
- Provide feedback for extension improvements

---

### Cross-Extension Interoperability

**Using Multiple Extensions**:

Some businesses operate across multiple industries and may need to implement multiple extensions:

**Example Scenarios**:

- Mining company (Critical Minerals extension) supplying battery manufacturer (Electronics extension)
- Agricultural producer (Agriculture extension) supplying food processor (Food & Beverage extension)
- Textile manufacturer (Textile extension) supplying fashion brand (Fashion extension)

**How it works**:

- All extensions are interoperable by design
- Credentials from one extension are readable by implementers of other extensions
- Supply chain data flows seamlessly across industry boundaries
- You implement each relevant extension using shared UNTP core infrastructure

**Key Benefit**: Instead of incompatible industry silos, UNTP extensions create an interoperable ecosystem where credentials flow across the entire supply chain from raw materials to finished products.

---

### Example: Battery Passport

**From UNTP Core**:

- Verifiable Credential structure
- Digital signature and verification
- Issuer identity
- Basic product information (ID, name, description)
- Generic sustainability claims structure

**Added by Battery Extension**:

- Battery-specific properties: capacity (kWh), chemistry type, voltage, warranty
- Battery regulations: EU Battery Regulation compliance mapping
- Battery identifiers: Battery serial number, DMC (Data Matrix Code)
- Battery standards: IEC 62619, UN 38.3, ISO 12405
- Battery lifecycle: Expected lifetime, state of health, recycling information

**Result**: A battery passport that uses universal UNTP infrastructure but contains battery-specific information, readable by anyone in the battery supply chain AND interoperable with upstream mining and downstream automotive extensions.

---

## Extensions and UNTP Implementation

### How Extensions Fit the Implementation Journey

Extensions are part of UNTP's five-step implementation framework:

**Step 1: Understand Your Role**  
→ Determine if your stakeholder type should implement core or extensions

- Producers/Manufacturers/Brands: Typically implement core + industry extension
- Software Vendors: Implement core + support for relevant extensions
- Industry Associations: Create and maintain extensions

**Step 2: Choose Implementation Path**  
→ Decide: UNTP core alone, or core + extension?

- Check if your industry has an extension
- Evaluate timing (wait for extension vs. implement core now)
- Consider creating extension if none exists

**Step 3-5: Register, Implement, Activate**  
→ Follow standard UNTP implementation process

- If using extension: Follow extension-specific guidance
- If using core only: Use generic credentials

### Key Principle

**Extensions enhance but don't replace UNTP implementation**. You still follow the same core process—extensions just provide industry-specific templates and guidance.

[→ View Complete Implementation Guidance](../tools-and-support/)

---

## Extension Ecosystem Momentum

### By the Numbers

- **6 registered extensions** across diverse industries
- **Major global organizations leading** (RBA, GBA, Standards Australia, UN/CEFACT)
- **Geographic diversity**: Australia + Global coverage
- **Industry diversity**: Agriculture, mining, batteries, electronics, automotive, construction
- **Timeline**: Consistent growth from Jan 2024 → Nov 2024 → Jun 2025

### Leading Organizations as Extension Owners

**Responsible Business Alliance (RBA)**

- Coalition of 200+ electronics/automotive companies
- $7 trillion in combined revenue
- Leading electronics extension

**Global Battery Alliance (GBA)**

- 140+ members across battery value chain
- World Economic Forum initiative
- Leading battery passport standards

**Standards Australia + International Code Council**

- Leading technical standards organizations
- Representing construction and built environment sectors
- Driving global built environment transparency

**UN/CEFACT**

- United Nations trade facilitation body
- Leading critical minerals extension
- Leveraging UN convening power

### More Extensions Coming

Industries actively developing extensions:

- Textiles & Fashion (Q2 2025)
- Seafood & Aquaculture (Q3 2025)
- Forestry & Wood Products (Q3 2025)
- Additional sectors in scoping phase

**The extension ecosystem is growing. Is your industry next?**

---

## Next Steps

**Run Community Activation now**

- Launch the **Community Activation Program** in parallel → `/docs/business-case/CommunityActivationProgram`
- Download the **Activation Asset Pack** and open a **Community Activation** GitLab issue

### Ready to Engage with Extensions?

**If you found your industry's extension**:

1. [Review the Extensions Register](/implementations/ExtensionsRegister.md) for details
2. Visit your extension's specification website
3. Join the extension community
4. Begin implementation planning

**If you want to create an extension**:

1. Review this page to understand extension value
2. [Read the Extensions Methodology](/tools-and-support/ExtensionsMethodology.md)
3. Contact UNTP team to discuss your industry
4. Assemble your industry working group

**If you have questions**:

- [Help & Support](../tools-and-support/HelpAndSupport.md)
- Community Slack Channel
- Email: [TBD]

### Stay Updated

**Register for Updates**:

- Email notifications when new extensions are registered
- Quarterly extension ecosystem reports
- Subscribe for updates

**Connect with the Community**:

- Extensions Developer Chat
- UNTP Slack Channel
- GitLab Discussions

---

## Related Resources

- [Extensions Register](/implementations/ExtensionsRegister.md) - Complete list of registered extensions
- [Extensions Methodology](/tools-and-support/ExtensionsMethodology.md) - Technical specification for creating extensions
- [Implementation Guidance](../tools-and-support/) - How to implement UNTP and extensions
- [Business Case Resources](../business-case/) - ROI analysis and templates
- [Community Activation Program](../business-case/CommunityActivationProgram) - Support for extension development
- [Help & Support](../tools-and-support/HelpAndSupport) - Get assistance
