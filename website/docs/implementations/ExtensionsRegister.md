---
sidebar_position: 05
title: Community Extensions
---

import Disclaimer from '../\_disclaimer.mdx';

<Disclaimer />

**_Informative_**

# Extensions Register

> **UNTP Extensions Register: 6 Registered Extensions and Growing**
>
> This register lists industry and geographic extensions that have met UNTP interoperability requirements. Each registered extension maintains compatibility with UNTP core and all other registered extensions, enabling seamless data exchange across industries and borders.
>
> **Last Updated**: January 2026 | **Extensions**: 6 registered

---

## How to Use This Register

### What "Registered" Means

Extensions in this register have:

- ✓ Met UNTP interoperability requirements
- ✓ Followed the [Extensions Methodology](/tools-and-support/ExtensionsMethodology.md)
- ✓ Passed conformance testing with UNTP core
- ✓ Documented specifications publicly available
- ✓ Governance process in place

**Result**: All registered extensions work together - credentials from any extension can be read and verified by implementers of any other extension.

### Finding the Right Extension

**If your industry appears in the register**:

1. Review the extension's specification website
2. Check status and maturity indicators
3. Join the extension's community/support channels
4. Begin implementation following extension guidance

**If your industry has multiple relevant extensions**:

- Example: Battery manufacturers may use both GBA and RBA extensions
- Extensions are compatible - you can implement multiple
- Review each extension's focus and choose based on your needs
- Contact extension owners for guidance on combined implementation

**If your industry is NOT in the register**:

- Check "In Development" extensions - yours may be coming
- Consider implementing UNTP core now, add extension later
- Or initiate extension development through your industry association
- [Learn about creating an extension](/tools-and-support/ExtensionsMethodology.md)

### Extension Registration Process

**Want to register a new extension?**

Registration requires:

1. Extension specification following methodology requirements
2. Conformance test results showing UNTP core compatibility
3. Public specification website with documentation
4. Governance structure in place
5. At least 2 example credentials for each credential type

**Contact**:  
**Timeline**: 2-4 weeks for registration review after submission

---

## Extensions Ecosystem at a Glance

**Current Status**:

- 🔵 **Pilot**: 4 extensions (actively testing with early implementations)
- 🟡 **In Development**: 2 extensions (launching 2025)
- ⚪️ **Dormant**:

---

## Find Your Extension

### Quick Navigation

| Extension Name                                                                                                              | Extension Owner                                                                                                     | Geographic Scope | Industry Scope                            | Status |
| --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ---------------- | ----------------------------------------- | ------ |
| [Responsible Business Transparency Protocol (RBTP)](#responsible-business-transparency-protocol)                            | [Responsible Business Alliance](https://www.responsiblebusiness.org/)                                               | Global           | Electrical, electronic & automotive parts | 🔵     |
| [Universal Data Protocol (UDP) for the Global Built Environment](#universal-data-protocol-for-the-global-built-environment) | [Standards Australia](https://www.standards.org.au/) and the [International Code Council](https://www.iccsafe.org/) | Global           | Construction                              | 🟡     |
| [Australian Agriculture Traceability Protocol (AATP)](#australian-agriculture-traceability-protocol)                        | [Food Agility CRC](https://www.foodagility.com/)                                                                    | Australia        | Agriculture                               | 🔵     |
| [UN Critical Raw Materials Transparency Protocol (CRMTP)](#critical-raw-materials-transparency-protocol)                    | [UN/CEFACT](https://unece.org/trade/uncefact)                                                                       | Global           | Critical minerals mining & processing     | ⚪️    |
| [Global Battery Alliance Transparency Protocol](#global-battery-alliance-transparency-protocol)                             | [GBA](https://www.globalbattery.org/)                                                                               | Global           | Battery Manufacturing and Value Chains    | 🔵     |
| [International Copper Association Transparency Protocol (ICATP)](#international-copper-association-transparency-protocol)   | [ICA](https://internationalcopper.org/)                                                                             | Global           | Copper mining & processing                | 🔵     |

### Coverage Gaps

- Food & Beverage Processing
- Chemicals & Petrochemicals
- Plastics & Packaging
- Healthcare (non-pharmaceutical)
- Energy (renewable & conventional)
- Transportation & Logistics

---

## Registered Extensions

### Responsible Business Transparency Protocol

**Status**: 🔵 **Pilot** (Nov 2024 launch)

#### Quick Facts

- **Owner**: [Responsible Business Alliance (RBA)](https://www.responsiblebusiness.org/)
- **Industry**: Electrical, electronic & automotive
- **Geography**: Global
- **Website**: [RBA Transparency Protocol](https://www.responsiblebusiness.org/)
- **Version**: 0.X

#### Overview

The Responsible Business Alliance (RBA) is a coalition of companies driving sustainable value for workers, the environment and business throughout the global supply chain. Our members, suppliers and stakeholders collaborate to improve working and environmental conditions and business performance through leading standards and practices.

Transparency and traceability in value chains is key to building confidence and value of sustainable business practices. Accordingly, the RBA is pleased to build upon the foundational capabilities provided by the UN Transparency Protocol (UNTP) to deliver a suite of interoperability standards for the electrical and electronic goods and automotive parts industries.

#### Credentials Defined

| Credential                                           | Extends                       | Purpose                                           | Typical Flow                                                     |
| ---------------------------------------------------- | ----------------------------- | ------------------------------------------------- | ---------------------------------------------------------------- |
| Responsible Minerals Initiative Credential (RMIC)    | Digital Conformity Credential | Attests responsible sourcing of minerals          | Certifier → Mining company → Electronics manufacturer (verifies) |
| Responsible Labour Initiative Credential (RLIC)      | Digital Conformity Credential | Attests worker rights protection in supply chains | Auditor → Facility → Brand (verifies)                            |
| Responsible Environment Initiative Credential (REIC) | Digital Conformity Credential | Attests facility environmental performance        | Certifier → Facility → Customers (verify)                        |
| Responsible Factory Initiative Credential (RFIC)     | Digital Conformity Credential | Attests supplier facility meets RBA Code          | Auditor → Factory → Brand (verifies)                             |
| Electrical Goods Passport (EGP)                      | Digital Product Passport      | ESG data for electrical/electronic products       | Manufacturer → Customers → End users                             |
| Digital Battery Passport (DBP)                       | Digital Product Passport      | Battery sustainability & EU compliance            | Battery manufacturer → Vehicle OEM → Consumer                    |
| Electrical Facility Record (EFR)                     | Digital Facility Record       | Manufacturing facility sustainability data        | Facility operator → Brand (due diligence)                        |

#### Implementation Resources

- Extension specification: Available from RBA
- Implementation guide: In development
- Test suite: Available
- Community support: Through RBA membership

---

### Universal Data Protocol for the Global Built Environment

**Status**: 🔵 **Pilot** (Nov 2024 launch)

#### Quick Facts

- **Owner**: [Standards Australia](https://www.standards.org.au/) and [International Code Council](https://www.iccsafe.org/)
- **Industry**: Built Environment (construction)
- **Geography**: Global
- **Version**: 0.X

#### Overview

The Universal Data Protocol (UDP) is an extension of the UNTP and is seeking to leverage its decentralised framework to provide transparent, trustworthy, and verifiable data in the global built environment. The UDP is an open protocol that will allow for the efficient exchange of verifiable data, enhancing reporting and compliance across jurisdictions and life cycle stages.

This project seeks to improve the interoperability of data across the built environment, aiming to make reporting more cost effective, accurate and efficient for all stakeholders.

#### Credentials Defined

| Credential                   | Extends                           | Purpose                                             |
| ---------------------------- | --------------------------------- | --------------------------------------------------- |
| Built Environment Vocabulary | Sustainability Vocabulary Catalog | Catalog of sustainability criteria for construction |

#### Implementation Resources

- Extension specification: In development
- Implementation guide: Coming 2025
- Community support: Through Standards Australia

---

### Australian Agriculture Traceability Protocol (AATP)

**Status**: 🔵 **Pilot** (Feb 2024 launch)

#### Quick Facts

- **Owner**: [Food Agility CRC](https://www.foodagility.com/)
- **Industry**: Agriculture
- **Geography**: Australia
- **Website**: [https://aatp.foodagility.com/](https://aatp.foodagility.com/)
- **Version**: 0.X (pilot phase, moving toward 1.0)
- **Active Implementations**: N organizations

#### Overview

The AATP is an adaptation of the UN Transparency Protocol and is designed to help Australian producers meet emerging environmental, social, and governance (ESG) regulatory and consumer requirements. Operating as a governance framework, the AATP facilitates the interaction between multiple certifiers, farm systems, and enterprise systems.

Interoperability and traceability tools help the Australian agriculture sector attain higher quality information about the value of Australian-made products.

#### Credentials Defined

| Credential                            | Extends | Purpose                                                                                 |
| ------------------------------------- | ------- | --------------------------------------------------------------------------------------- |
| Livestock Digital Product Passport    | DPP     | For cattle, sheep, poultry (includes animal breed, RFID tag ID, welfare certifications) |
| Horticulture Digital Product Passport | DPP     | For fruits, vegetables (includes crop variety, organic certification, harvest date)     |
| Grain Digital Product Passport        | DPP     | For wheat, barley, rice (includes grain variety, moisture content, storage conditions)  |

#### Success Metrics

- 50+ members implementing or planning implementation
- 70% reduction in compliance documentation time
- EUDR-ready credentials accepted by EU importers
- Member satisfaction: 4.7/5

#### Implementation Resources

- Extension specification: https://aatp.foodagility.com/
- Implementation guide: Available
- Test suite: Operational
- Community support: Active forums and office hours

---

### Critical Raw Materials Transparency Protocol (CRMTP)

**Status**: ⚪️ **Dormant**

#### Quick Facts

- **Owner**: [UN/CEFACT](https://unece.org/trade/uncefact)
- **Industry**: Critical Minerals Mining & Processing
- **Geography**: Global
- **Website**: [https://uncefact.github.io/project-crm/](https://uncefact.github.io/project-crm/)
- **Version**: 0.X (pilot phase)
- **Active Pilots**: Canada, Australia, DRC

#### Overview

In line with the United Nations (UN) Sustainable Development Goals (SDGs) and building on the success of the UNECE Textile & Leather traceability project, this project seeks to empower the Critical Raw Material (CRM) industry with practical, low cost tools for digital data exchange to achieve product differentiation, maximize the value of existing permitting and ESG compliance efforts, counter green-washing, and support a more sustainable global economy.

This project supports the UN focus on extractive industries and leverages UN/CEFACT's role and capabilities to deliver digital standards for sustainable supply chains.

#### Credentials Defined

| Credential      | Extends                       | Purpose                                                        |
| --------------- | ----------------------------- | -------------------------------------------------------------- |
| Copper Passport | Digital Product Passport      | Quality & sustainability characteristics of copper concentrate |
| TSM Credential  | Digital Conformity Credential | Towards Sustainable Mining certification                       |

#### Implementation Resources

- Extension specification: https://uncefact.github.io/project-crm/
- Implementation guide: Available
- Test suite: Available
- Community support: Through UN/CEFACT channels

---

### Global Battery Alliance Transparency Protocol

**Status**: 🟡 **In Development** (Jun 2025 target launch)

#### Quick Facts

- **Owner**: [Global Battery Alliance (GBA)](https://www.globalbattery.org/)
- **Industry**: Batteries and accumulators (B.7 mining, C.24 basic metals, C.2720 batteries)
- **Geography**: Global
- **Version**: 0.X (pre-pilot development)

#### Overview

The Global Battery Alliance is the leading multistakeholder organisation for sustainable, transparent and resilient battery supply chains. The organisation's flagship initiative, the Battery Passport, leverages digital product passport technology to create harmonised data exchange, reporting, compliance and sustainability certification frameworks for companies in the battery supply chain worldwide.

#### Credentials Defined

| Credential                                     | Extends                       | Purpose                                                       |
| ---------------------------------------------- | ----------------------------- | ------------------------------------------------------------- |
| Digital Battery Passport (DBP)                 | Digital Product Passport      | Battery supply chain transparency & EU regulatory reporting   |
| Battery Sustainability Certificate             | Digital Conformity Credential | Attests battery meets GBA sustainability certification        |
| Carbon Calculation Certificate (CCC)           | Digital Conformity Credential | Attests correct carbon emissions calculation per GBA Rulebook |
| Digital Site / Facility Report (DSR)           | Digital Product Passport      | Site/facility data aligned to Battery Passport requirements   |
| Site/Facility Verification Credential (SVC)    | Digital Conformity Credential | Attests site/facility data reporting conformance              |
| Approved Verifier Credential (AVC)             | Digital Conformity Credential | Attests provider approved for verification services           |
| Approved Certifier Credential                  | Digital Conformity Credential | Attests provider approved for certification services          |
| Approved Carbon Calculation Partner Credential | Digital Conformity Credential | Attests provider approved for carbon calculation services     |

#### Implementation Resources

- Extension specification: In development
- Launch: June 2025
- Community: GBA membership channels

---

### International Copper Association Transparency Protocol (ICATP)

**Status**: 🟡 **In Development** (Jun 2025 target launch)

#### Quick Facts

- **Owner**: [International Copper Association (ICA)](https://internationalcopper.org/)
- **Industry**: Copper Mining
- **Geography**: Global
- **Website**: [https://internationalcopper.org/](https://internationalcopper.org/)
- **Version**: 0.X (development)

#### Overview

The International Copper Association (ICA) promotes copper, protects its markets, and defends and sustains copper demand as the superior material to address global challenges like electrification, urbanization and digitalization.

ICA members are industry leaders in responsible modern production and through ICA come together to address stakeholder questions around product environmental footprint, circularity and responsible production and use to maintain access to markets and promote copper as the material of choice. The copper extension to the UNTP will help copper producers to better demonstrate their responsible production practices and environmental performance and build trust in the copper supply chain.

#### Credentials Defined

| Credential            | Extends                       | Purpose                                                        |
| --------------------- | ----------------------------- | -------------------------------------------------------------- |
| Copper Passport       | Digital Product Passport      | Quality & sustainability characteristics of copper concentrate |
| Coppermark Credential | Digital Conformity Credential | Coppermark responsible production assurance                    |

#### Implementation Resources

- Extension specification: In development
- Launch: June 2025
- Community: Through ICA membership

---

## Extensions in Development Pipeline

Beyond the 6 registered extensions above, several industries are actively developing extensions:

| Industry                 | Coordinating Organization | Status                |
| ------------------------ | ------------------------- | --------------------- |
| Textiles & Fashion       | Industry association TBA  | Requirements phase    |
| Seafood & Aquaculture    | Industry association TBA  | Scoping               |
| Forestry & Wood Products | Industry association TBA  | Working group forming |
| Pharmaceuticals          | Industry association TBA  | Initial discussions   |

**Interested in initiating an extension?** [Contact us](/docs/tools-and-support/HelpAndSupport.md)

---

## Coverage Gap Analysis

**Industries with significant transparency pressure but no registered extension yet**:

- Food & Beverage Processing
- Chemicals & Petrochemicals
- Plastics & Packaging
- Medical Devices & Healthcare
- Renewable Energy
- Maritime & Logistics
- Recycling & Circular Economy Services

**Is your industry missing?** These represent opportunities for new extensions. Industry associations interested in leading extension development should [review the methodology](/tools-and-support/ExtensionsMethodology.md) and contact **_TBA_**.

---

> **Need pilots to progress your status?**  
> Launch the **Community Activation Program** and use the Activation Asset Pack to recruit, run, and showcase pilots in **8–12 weeks**.  
> Start here → `/docs/business-case/CommunityActivationProgram`

## Next Steps

### If You Found Your Industry's Extension

1. **Review Specification**  
   Visit the extension's website (linked above) to review full technical specifications

2. **Assess Implementation Path**

   - If you have UNTP-compliant software: Check if it supports your extension
   - If not: Consider extension-compliant software or custom implementation
   - [View software implementations](/docs/implementations/Software.md)

3. **Join Extension Community**  
   Most extensions have support channels, forums, or working groups - links provided in extension entries above

4. **Plan Implementation**  
   Follow your extension's implementation guide and use the five-step [UNTP implementation framework](/docs/tools-and-support/)

5. **Register Your Implementation**  
   After testing, register your implementation with both UNTP and your extension community

**If Your Industry Isn't Here Yet**: Follow these steps [Find Your Starting Point](./index.md)

---

## Related Resources

- [Extensions Overview](./index.md) - Why extensions matter and strategic context
- [Extensions Methodology](/tools-and-support/ExtensionsMethodology.md) - How to create an extension
- [Implementation Guidance](../tools-and-support/index.md) - How to implement UNTP and extensions
- [Business Case Resources](../business-case/index.md) - ROI analysis for extension development
- [Help & Support](../tools-and-support/HelpAndSupport.md) - Get assistance
