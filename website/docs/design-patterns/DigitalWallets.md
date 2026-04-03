---
sidebar_position: 56
title: 'Digital Wallets'
---

# Digital wallets

:::info
Please note that this content is under development and is not ready for implementation. This status message will be updated as content development progresses.
:::

## Overview

UNTP is **wallet-agnostic**. It neither mandates nor precludes the use of digital wallets for storing, managing, or exchanging verifiable credentials. The protocol's primary credential exchange model is a resolver-based "pull" pattern where credentials are published by issuers and discovered by verifiers through [Identity Resolvers](../specification/IdentityResolver) or linked data. However, there are legitimate implementation contexts — particularly those driven by regulatory requirements or existing digital identity infrastructure — where digital wallets play a valuable role. This page provides guidance for implementers operating in those contexts.

A digital wallet, in the context of UNTP, is any software application that enables an entity to receive, store, manage, and present verifiable credentials. Wallets may be operated by organisations (enterprise wallets) or individuals (personal wallets), and may be hosted services or edge applications running on a user's device.

## Challenges

The verifiable credentials ecosystem has matured around a model where a human **holder** stores credentials in a personal wallet and presents them to verifiers on demand. This model works well for personal identity credentials such as driver's licenses and educational certificates, where the holder is a person who can actively participate in a presentation exchange.

UNTP operates in a fundamentally different context. The subject of most UNTP credentials is an **inanimate object** — a box of goods, a shipment of steel, a battery module. As the [Verifiable Credentials](../specification/VerifiableCredentials#presentations) specification explains:

> _The box of goods does not create verifiable presentations on demand and the binding is to the identity of the goods._

In supply chain scenarios, any party with physical or digital access to a product identifier (via a barcode, QR code, or RFID tag) can discover credentials about that product through an Identity Resolver.

There is no human "holder" in the loop presenting credentials from a wallet. This is why UNTP's architecture centres on the resolver-based pull model rather than a wallet-based push model.

This does not mean wallets are irrelevant. It means UNTP is designed so that wallets are **one possible mechanism** among several for credential exchange — not a prerequisite.

## When wallets are relevant

Although the resolver-based pull model is the primary UNTP credential exchange pattern, digital wallets become relevant in several implementation scenarios.

**Organisational identity and accreditation.** When a supply chain actor needs to prove its identity or accreditation status to access non-public credentials (see [Decentralised Access Control](../specification/DecentralisedAccessControl) Pattern 6), an enterprise wallet can store and present [Digital Identity Anchor](../specification/DigitalIdentityAnchor) credentials, accreditation credentials, or role-based authorisation credentials. For example, an accredited recycler presenting its DIA credential to a battery manufacturer's access control endpoint to obtain decryption keys for confidential facility records.

**Regulatory compliance in wallet-mandated jurisdictions.** Some regulatory frameworks — notably the [EU Digital Identity (EUDI) Wallet](https://digital-strategy.ec.europa.eu/en/policies/eudi-wallet-toolbox) initiative under the eIDAS 2.0 regulation — are establishing infrastructure where digital wallets are a primary mechanism for credential exchange. Implementers operating in these jurisdictions may need to support wallet-based flows alongside resolver-based discovery to meet local regulatory expectations.

**Business-to-business credential exchange.** In scenarios where supply chain actors have established commercial relationships and exchange credentials as part of procurement or onboarding workflows, enterprise wallets or credential management platforms can streamline the exchange of digital product passports, conformity credentials, and traceability events. The UNTP specification explicitly permits this:

> A conformant UNTP implementation MAY exchange these and any other credentials as verifiable presentations in wallet-to-wallet transfers or any other method.

**Consumer-facing transparency.** When end consumers interact with product transparency information through mobile applications, the consumer's device may function as a lightweight wallet that receives and stores verifiable credentials for offline verification, comparison shopping, or personal sustainability tracking.

## Design principles for wallet implementations

Implementers introducing wallets into UNTP deployments should follow the same design principles that underpin the broader protocol.

### Postel's robustness principle applies

The UNTP [Verifiable Credentials](../specification/VerifiableCredentials) specification applies [Postel's robustness principle](https://en.wikipedia.org/wiki/Robustness_principle): **be conservative in issuing and liberal in verifying**. For wallet implementations, this means:

- When a wallet **issues or presents** UNTP credentials, it MUST conform to the [UNTP Verifiable Credentials Profile](../specification/VerifiableCredentials) — specifically W3C VC Data Model v2.0, JSON-LD Compacted Document Form, JOSE enveloping proofs, and `did:web` as the organisational DID method.
- When a wallet **receives or verifies** credentials, it SHOULD accept the widest practical range of credential formats. Sustainability evidence discovered across a value chain may arrive as W3C VCs, ISO mDL credentials, or even human-readable PDF documents.

This asymmetry is deliberate. Strict issuance ensures interoperability across the ecosystem. Liberal verification ensures that sustainability assessments can draw on the broadest possible evidence base.

### Resolver-based discovery remains primary

A wallet-based exchange does not replace the need for resolver-based credential publication. Conformant UNTP implementations MUST issue and publish credentials discoverable via Identity Resolvers regardless of whether those credentials are also exchanged via wallets. The resolver-based model ensures that any party with access to a product identifier can discover credentials without requiring a prior relationship, wallet infrastructure, or specific software.

Wallets and resolvers are **complementary, not competing** models. A practical deployment may use resolver-based discovery for public product transparency data and wallet-based exchange for confidential credentials requiring authenticated access.

### No lock-in to specific wallet technologies

Consistent with UNTP's principle that it is a **protocol, not a platform**, implementations MUST NOT require counterparties to adopt any specific wallet software, wallet provider, or wallet framework. The interoperability boundary is defined by the credential format and exchange protocol, not by the wallet application.

## Conformity requirements

The following requirements apply to UNTP implementations that incorporate digital wallet functionality.

| ID     | Name                  | Requirement Statement                                                                                                           | Solution Mapping                                                   |
| ------ | --------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| WAL-01 | Credential format     | Credentials issued or presented from a wallet MUST conform to the UNTP Verifiable Credentials Profile                           | [VC Profile](../specification/VerifiableCredentials#vcdm-profile)  |
| WAL-02 | Resolver publication  | Credentials exchanged via wallet MUST also be published and discoverable via an Identity Resolver                               | [Identity Resolver](../specification/IdentityResolver)             |
| WAL-03 | Technology neutrality | Implementations MUST NOT require counterparties to use any specific wallet software or provider                                 | [Architecture](../specification/Architecture)                      |
| WAL-04 | Liberal verification  | Wallet-based verifiers SHOULD accept credentials in any format that can be meaningfully verified                                | [VC Profile](../specification/VerifiableCredentials#presentations) |
| WAL-05 | DID methods           | Wallets issuing or presenting UNTP credentials MUST use `did:web` as the organisational DID method                              | [DID Methods](../specification/VerifiableCredentials#did-methods)  |
| WAL-06 | Access control        | Wallets used for authenticated access to non-public credentials SHOULD implement DID-Authentication and MAY implement OpenID4VP | [DAC](../specification/DecentralisedAccessControl)                 |

## Examples

### Pattern A: Resolver discovery with wallet-assisted authentication

This is the most common pattern where wallets add value in UNTP deployments. The primary credential discovery flow uses the standard resolver-based pull model. When the verifier encounters a non-public (encrypted) credential, the wallet assists with the authentication step required to obtain decryption keys.

1. Verifier scans product data carrier and queries the Identity Resolver
2. Resolver returns a link-set including both public and non-public credential links
3. Verifier retrieves and verifies public credentials directly
4. For non-public credentials, the link-set indicates the required `accessRole` and `encryptionMethod`
5. Verifier's wallet presents a DID-Authenticated request including role credentials (e.g., DIA proving accredited recycler status)
6. Data provider validates the presentation and returns decryption keys
7. Verifier decrypts and verifies the non-public credentials

This pattern combines the universality of resolver-based discovery with the security of wallet-based authentication. It aligns with [Decentralised Access Control](../specification/DecentralisedAccessControl) Pattern 6 (Decentralised Authentication).

### Pattern B: Direct wallet-to-wallet credential exchange

In this pattern, supply chain actors exchange UNTP credentials directly through wallet infrastructure, bypassing resolver-based discovery for the initial exchange. This may be appropriate for B2B procurement workflows where parties have established relationships.

1. Issuer creates UNTP credentials (DPP, DCC, DTE) conforming to the VC Profile
2. Issuer's wallet packages credentials as a Verifiable Presentation signed by the issuer's DID
3. Presentation is transmitted to the receiver's wallet via any mutually agreed protocol
4. Receiver's wallet verifies the presentation and extracts the credentials
5. Issuer MUST also publish the credentials via an Identity Resolver (WAL-02)

Note that even in direct wallet-to-wallet exchange, the credentials themselves are standard UNTP VCs. The wallet is a transport mechanism; the credential format and semantics are what ensure interoperability.

## Relationship to other UNTP specifications

Digital wallets interact with several UNTP specifications. The table below maps the key touchpoints.

| UNTP Specification                                                          | Wallet Relevance                                                                                 |
| --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| [Verifiable Credentials Profile](../specification/VerifiableCredentials)    | Defines the credential format that wallets MUST use when issuing or presenting UNTP credentials  |
| [Identity Resolver](../specification/IdentityResolver)                      | Wallets complement but do not replace resolver-based credential discovery                        |
| [Digital Identity Anchor](../specification/DigitalIdentityAnchor)           | DIAs may be stored in and presented from organisational wallets for identity verification        |
| [Decentralised Access Control](../specification/DecentralisedAccessControl) | Wallet-based DID-Authentication (Pattern 6) enables access to non-public credentials             |
| [Digital Product Passport](../specification/DigitalProductPassport)         | DPPs may be exchanged via wallet-to-wallet transfer as an alternative to resolver discovery      |
| [Digital Conformity Credential](../specification/ConformityCredential)      | DCCs may be stored in organisational wallets and presented during procurement or audit workflows |

## Conclusion

UNTP is deliberately wallet-agnostic because its primary use case — product-level sustainability transparency — centres on inanimate objects discoverable through resolvers rather than human holders presenting from wallets. This design ensures the widest possible adoption across supply chain actors of varying technical maturity. Where wallets are relevant — for organisational authentication, regulatory compliance, B2B exchange, or consumer interaction — they function as a complementary transport and management layer. The credential format and semantics defined by the UNTP Verifiable Credentials Profile are what ensure interoperability, regardless of whether those credentials travel through a resolver, a wallet, an email attachment, or a QR code printed on the side of a box.
