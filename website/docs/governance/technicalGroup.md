---
sidebar_position: 35
title: Technical Group
---

import Disclaimer from '../\_disclaimer.mdx';

<Disclaimer />

## Terms of Reference

### Background

The Technical Working Group (TWG) operates under the United Nations Transparency Protocol governance framework. The group ensures the development, validation, and maintenance of core technical components underpinning UNTP, including identity resolution, decentralised access control, verifiable credentials, and verifiable graphs.
The TWG works in close alignment with other UNTP groups (Adoption, Supply Chain, Conformity) to ensure technical solutions are interoperable, verifiable, and ready for adoption at global scale to meet stakeholder needs.

### Purpose

The TWG is responsible for defining, maintaining, and delivering the technical standards and reference implementations that enable transparency across supply chains. Its purpose is to:

- Maintain and advance the design of the Identity Resolver (IDR), Decentralised Access Control (DAC), Verifiable Credentials Profile (VCP), and other related protocols.
- Provide a forum for technical contributors to review, test, and approve specifications.
- Support development of reference sites, implementations, and libraries that demonstrate concepts at production quality.
- Support formalisation of verification rules for trust graphs.

### Scope & Objectives

The TWG scope covers specification design, open-source reference development, and verification frameworks. Specific objectives include:

- Identity Resolver (IDR):
  - Maintain a resolver framework that supports multiple identity schemas and carriers.
  - Ensure the resolver can handle both decentralised identifiers and other widely used identity schemes in supply chains.
- Decentralised Access Control (DAC):
  - Explore and evaluate methods for decentralised, policy-based, and credential-based access control.
  - Assess relevant approaches and emerging standards without presupposing a single technical pathway.
  - Provide recommendations to guide the evolution of DAC within UNTP.
- Verifiable Credentials Profile (VCP):
  - Explore approaches for representing, exchanging, and presenting verifiable data.
  - Ensure alignment with relevant global standards bodies while keeping technology choices open.
  - Define requirements for rendering, presentation, and interoperability.
- Verification Rules:
  - Formalise rules for validating UNTP datasets in a discovered trust graph.
  - Explore creation of a shared library of verification rules.
- Reference Implementation:
  - Support the delivery of a functioning reference site and open-source tooling.
  - Achieve sufficient quality and stability to support the UNTP version 1.0 release.

### Membership

Membership is open to technical experts, implementors, and representatives from standards bodies or organizations building solutions on top of UNTP.
Potential implementors (solution providers, digital wallet developers, verifiable credential platforms, supply chain IT providers) are encouraged to participate actively.

### Roles and Responsibilities

- Technical Working Group Lead (Chair):
  - Oversees group activities and progress.
  - Chairs fortnightly meetings.
  - Ensures issues are created, addressed, and closed.
  - Coordinates reference implementation delivery.
  - Guides the group toward achieving quality suitable for UNTP 1.0.
- Group Members:
  - Contribute specifications, code, and technical feedback.
  - Participate in reviews and testing.
  - Propose and maintain verification rules.
- Observers:
  - Attend meetings, access documentation, and provide feedback.
  - Must become registered experts to contribute formally.

### Working Methods

- Meetings: Held fortnightly to review GitLab issues, approve merge requests, and track progress.
- Collaboration: All work is conducted openly via GitLab repositories and mailing lists, with decisions made by consensus where possible.
- Quality Targets: Drafts and contributions should progress toward production-grade reference implementations, capable of real-world adoption.

### Deliverables

- Maintained specifications for IDR, DAC, and VCP.
- Open-source reference implementations (including a reference site).
- Test suites and validation frameworks.
- A library of formalised verification rules.
- Guidance and documentation to support implementors.

### Governance & Reporting

The TWG reports into the UNTP Steering Group and collaborates closely with other working groups to ensure alignment. Decisions are made by consensus where possible, or by majority vote when consensus cannot be achieved.

### Review

This ToR will be reviewed annually, or earlier if significant scope or responsibility changes occur.

## Mailing List

A group mailing list is maintained and can be used by any list member to post messages to the group. The list also maintains an archive of all messages sent to the group.

- To [join the mailing list](https://gaggle.email/join/untp-technical@gaggle.email) - your request will be reviewed by a list administrator.

## Meetings

Group meetings are held fortnightly. Please add the following links to your calendar.

- **Thursday 9am UTC meetings**. Every 2 weeks. Next meeting **9th April 2026 at 9 UTC** (moved from 2nd April).
  - [ICS Calendar File](/meetings/technical-working-group/option-b.ics). Download and double click to add the meetings to your calendar.
  - [Join the meeting](https://meet.google.com/hur-sobw-dmq). Click to join the meeting without a calendar entry.

Each meeting will generally work through open [issues](https://opensource.unicc.org/un/unece/uncefact/spec-untp/-/issues/?sort=created_date&state=opened&label_name%5B%5D=WG-Technical) and [merge requests](https://opensource.unicc.org/un/unece/uncefact/spec-untp/-/merge_requests).

Previous meeting dates, recordings, transcripts, and minutes are summarised below with the most recent meeting at the top.

## Previous Meetings

| Meeting    | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2026-03-20 | [The UNTP Technical WG discussed linked data graph verification, and preventing user tracking in credential render methods.](/meetings/technical-working-group/2026-03-20.pdf)                                                                                                                                                                                                                                                                    |
| 2026-03-05 | [Covered progress on IANA link relation type registrations, W3C Verifiable Credentials Working Group charter updates, and several GitLab issues related to the product class data model. Key decisions included making the `registeredID` attribute optional, handling industry-specific mandatory attributes via sector-published profiles, and clarifying redundancies in the `claim` class.](/meetings/technical-working-group/2026-03-05.pdf) |
| 2026-02-19 | [The UNTP Technical WG discussed various open issues and merge requests around data carriers, link types, and more.](/meetings/technical-working-group/2026-02-19.pdf)                                                                                                                                                                                                                                                                            |
| 2026-02-10 | [The UNTP Technical WG discussed post-sale data addition, DPP variants, and other needs for data discoverability.](/meetings/technical-working-group/2026-02-10.pdf)                                                                                                                                                                                                                                                                              |
| 2026-01-22 | [The UNTP Technical WG discussed methods of adding product information (like a battery repair event) post sale after the initial Digital Product Passport has been created.](/meetings/technical-working-group/2026-01-22.pdf)                                                                                                                                                                                                                    |
| 2026-01-08 | [The UNTP Technical WG discussed methods of selective disclosure to meet Supply Chain working group use cases.](/meetings/technical-working-group/2026-01-08.pdf)                                                                                                                                                                                                                                                                                 |
| 2025-12-11 | [The UNTP Technical WG discussed challenging requirements needed for DAC to meet Supply Chain working group use cases.](/meetings/technical-working-group/2025-12-11.pdf)                                                                                                                                                                                                                                                                         |
| 2025-11-27 | [The UNTP Technical WG discussed open Merge Requests and discussed Decentralized Access Control, and how to meet the needs of other working groups.](/meetings/technical-working-group/2025-11-27.pdf)                                                                                                                                                                                                                                            |
| 2025-11-18 | [The UNTP Technical WG discussed errors in the Identity Resolver page. Discussion of VC standards.](/meetings/technical-working-group/2025-11-18.pdf)                                                                                                                                                                                                                                                                                             |
| 2025-10-30 | [The UNTP Technical WG discussed the Identity Resolver page restructure, focusing on harmonization with various DID methods. Review of the proposed DID Methods page.](/meetings/technical-working-group/2025-10-30.pdf)                                                                                                                                                                                                                          |
| 2025-10-02 | [The UNTP Technical WG discussed the role of Identity Resolver in making data discoverable across a supply chain, what it's role is, and other ways of discovering link data via Digital Product Passport.](/meetings/technical-working-group/2025-10-02.pdf)                                                                                                                                                                                     |
| 2025-09-18 | [The UNTP Technical WG discussed assignment of open tickets to working group members, outreach to additional individuals to join the working group, and the need for better component diagrams.](/meetings/technical-working-group/2025-09-18.pdf)                                                                                                                                                                                                |
| 2025-09-05 | [The UNTP Technical WG discussed UNTP and AATP implementation, tackling decentralized access control, standard alignment, and user onboarding, aiming for a version 7 spec by year-end.](/meetings/technical-working-group/2025-09-04.pdf)                                                                                                                                                                                                        |
