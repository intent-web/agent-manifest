# IntentWeb AgentManifest v0.1-draft

## Status of This Document

This document defines the experimental AgentManifest v0.1-draft specification for public discussion and implementation feedback.

AgentManifest is not an official RFC, is not an IETF-approved standard, and has not been reviewed through any formal standards process. The format is intentionally Internet-Draft-style so implementers can review the proposal with familiar structure and terminology.

Sections that define required manifest structure, discovery behavior, protocol expectations, and processing requirements are normative for this draft. Examples, explanatory notes, and deployment guidance are informative.

The key words MUST, MUST NOT, REQUIRED, SHALL, SHALL NOT, SHOULD, SHOULD NOT, RECOMMENDED, MAY, and OPTIONAL are to be interpreted as described in RFC 2119 and RFC 8174 when, and only when, they appear in all capitals. This convention is used for the purpose of this draft only.

## Abstract

AgentManifest is a proposed machine-readable website contract for AI agents. A manifest describes website identity, trusted knowledge sources, capabilities, protocol bindings, risk levels, consent requirements, authentication expectations, audit rules, and policy constraints. The goal is to let agents understand what a website knows and what it can safely do before relying on scraping, visual automation, or prompt-only instructions.

## Introduction

AI agents increasingly interact with websites on behalf of users. Without an explicit contract, agents often infer business meaning from pages, forms, button labels, and unstructured text. That inference can be brittle and unsafe, especially when an action submits data, changes state, creates obligations, or performs a transaction.

AgentManifest defines a JSON document that a website can publish to describe an agent-facing contract. The manifest does not replace HTML, OpenAPI, MCP, robots.txt, sitemap.xml, web app manifests, or human-facing UI. It complements them by describing identity, trusted knowledge, capabilities, risk, consent, and policy at a semantic level.

## Design Goals

Normative goals for this draft:

- A conforming manifest MUST be a JSON object.
- A conforming manifest MUST identify the draft version, owner, platform, discovery locations, knowledge sources, capabilities, and policies.
- Capabilities MUST declare risk, state-change behavior, consent requirements, and supported protocols.
- The format MUST allow additional properties for forward-compatible experimentation.
- The draft MUST support static discovery before requiring any runtime action infrastructure.

Informative goals:

- Make common websites understandable to agents in minutes.
- Reduce unsafe guessing by exposing trusted knowledge and explicit capabilities.
- Support gradual adoption from static files to governed runtime execution.
- Encourage policy enforcement outside prompts and inside server-side systems.

## Terminology

| Term | Meaning |
| --- | --- |
| Agent | Software acting for a user or organization, including AI assistants and automated clients. |
| AgentManifest | The JSON document defined by this draft. |
| Capability | A declared task, operation, or business intent that an agent may understand, prepare, or invoke. |
| Consent | Explicit user approval tied to a specific capability and input summary. |
| Knowledge source | A trusted public source that agents may use for understanding or planning. |
| Manifest publisher | The website or organization that publishes the manifest. |
| Protocol binding | A mapping from a capability to an execution or discovery protocol such as static files, OpenAPI, or MCP. |
| Risk level | A declared estimate of action impact: low, medium, high, or critical. |

## Conventions

An AgentManifest is encoded as JSON. Property names are case-sensitive. Implementations MUST treat unknown properties as extensions unless a future version defines stricter behavior.

Paths beginning with `/` are interpreted relative to the manifest publisher's origin unless otherwise stated. Relative paths beginning with `./` or `../` are interpreted relative to the manifest file location. Absolute URLs are interpreted according to their URI scheme.

## Discovery

Agents SHOULD first attempt discovery at:

```text
/.well-known/agent.json
```

Manifest publishers MAY also expose:

```text
/.well-known/agent-manifest.json
/agent-manifest.json
```

Publishers MAY add an HTML discovery hint:

```html
<link rel="agent-manifest" href="/.well-known/agent.json">
```

If no manifest is found, an agent SHOULD continue using ordinary web behavior and SHOULD NOT infer that unsupported actions are safe.

## Media Type

This draft uses JSON. Publishers SHOULD serve manifests with:

```text
application/agent-manifest+json
```

During the experimental phase, publishers MAY serve manifests as:

```text
application/json
```

Agents SHOULD accept both media types for v0.1-draft.

## Manifest Location

The preferred manifest location is:

```text
/.well-known/agent.json
```

The manifest MAY reference additional local or remote files through the `discovery`, `knowledge`, and `extensionPoints` fields. Sensitive implementation details, credentials, private endpoints, and admin-only operations MUST NOT be exposed in public manifest files.

## AgentManifest Object Model

The top-level AgentManifest object contains required core fields and optional extension fields. The canonical schema for this draft is:

```text
rfc/schemas/agent-manifest.v0.1.schema.json
```

The schema is normative for structural validation in this draft. This prose specification is normative for behavior, risk, consent, and protocol interpretation.

## Required Fields

| Field | Type | Description |
| --- | --- | --- |
| `agentManifestVersion` | string | MUST be `0.1-draft` for this draft. |
| `id` | string | Stable lowercase manifest identifier. |
| `status` | string | Lifecycle status: `draft`, `example`, `experimental`, `stable`, or `deprecated`. |
| `templateKind` | string | Template or platform family. |
| `identity` | object | Public identity of the site or organization. |
| `platform` | object | Platform and integration mode information. |
| `discovery` | object | Manifest and related resource discovery information. |
| `knowledge` | array | Trusted knowledge sources. |
| `capabilities` | array | Declared agent-facing capabilities. |
| `policies` | object | Consent, authentication, data minimization, and audit policy text. |

## Optional Fields

| Field | Type | Description |
| --- | --- | --- |
| `$schema` | string | JSON Schema URI or relative path. |
| `extensionPoints` | array | Related files such as OpenAPI, MCP, catalogs, policy documents, and validation reports. |

Additional properties MAY be present. Agents SHOULD ignore unknown properties they do not understand.

## Identity Object

The `identity` object identifies the publisher.

Required properties:

| Field | Type | Description |
| --- | --- | --- |
| `name` | string | Public name of the website, store, application, or organization. |
| `domain` | string | Primary domain represented by the manifest. |
| `owner` | string | Legal or operational owner. |
| `contact` | string | Public contact email or URL. |

Optional properties include `jurisdiction` and other implementation-specific metadata.

## Platform Object

The `platform` object describes the implementation context.

Required properties:

| Field | Type | Description |
| --- | --- | --- |
| `type` | string | Platform category. |
| `stack` | array | Technologies, products, or runtime components. |
| `integrationMode` | string | One of `static`, `bridge`, `runtime`, `static-or-bridge`, `static-or-runtime`, or `bridge-or-runtime`. |
| `servingNotes` | array | Deployment notes and serving constraints. |

## Discovery Object

The `discovery` object describes where related resources can be found.

Required properties:

| Field | Type | Description |
| --- | --- | --- |
| `recommendedLocations` | array | Preferred manifest locations. |

Optional properties:

| Field | Type | Description |
| --- | --- | --- |
| `llmContext` | array | LLM-readable context files. |
| `openapi` | string | OpenAPI document path or URL. |
| `mcp` | string | MCP server metadata path or URL. |

## Knowledge Sources

Each knowledge source MUST include `id`, `type`, and `source`.

Knowledge sources SHOULD point only to information that the publisher intends agents to use. They MUST NOT expose secrets, private customer data, unpublished content, internal operational documents, or admin-only resources.

Common knowledge source types include `summary`, `catalog`, `product-catalog`, `route-catalog`, `content-catalog`, `policy`, and `fulfillment-policy`.

## Capabilities

Each capability MUST include:

| Field | Type | Description |
| --- | --- | --- |
| `id` | string | Stable capability identifier. |
| `intent` | string | Machine-readable business intent. |
| `risk` | string | `low`, `medium`, `high`, or `critical`. |
| `stateChange` | boolean | Whether the capability mutates business state. |
| `requiresConsent` | boolean | Whether explicit consent is required. |
| `protocols` | array | Supported protocols or execution surfaces. |

Capabilities MAY include `name`, `description`, `requiresAuthentication`, `audit`, and protocol-specific extension fields.

## Risk Levels

| Risk | Meaning | Draft requirement |
| --- | --- | --- |
| `low` | Public, read-only information. | MAY proceed without explicit consent if policy allows. |
| `medium` | Submits data or starts a reversible workflow. | SHOULD require clear user confirmation. |
| `high` | Changes user data, makes bookings, or affects access, availability, or account state. | MUST require explicit confirmation and audit. |
| `critical` | Payments, orders, legal commitments, irreversible actions, destructive operations, or regulated workflows. | MUST require explicit confirmation, audit, and appropriate authentication. |

Critical capabilities MUST set `stateChange` to `true` and `requiresConsent` to `true`.

## Consent Model

Consent MUST be specific to a capability, input summary, user or user session, timestamp, and intended protocol invocation. Consent MUST NOT be treated as a general permanent authorization for unrelated actions.

For medium, high, and critical risk actions, agents SHOULD present a concise user-visible summary before invocation. High and critical actions MUST be auditable.

## Protocol Bindings

The `protocols` array declares the protocols or execution surfaces a capability supports. This draft recognizes `static`, `openapi`, and `mcp` as core protocol categories. Other values MAY be used as extensions.

A protocol binding MUST NOT weaken the risk and consent requirements declared by the capability.

## OpenAPI Binding

An OpenAPI binding is informative in v0.1-draft except for the following requirements:

- If `discovery.openapi` is present, it SHOULD point to a valid OpenAPI document.
- Operations intended for agent invocation SHOULD map clearly to capability identifiers.
- State-changing OpenAPI operations MUST enforce consent, authorization, validation, and policy server-side.

Capability-to-operation mapping MAY be expressed through operation IDs, tags, or extension fields such as `x-agent-capability`.

## MCP Binding

An MCP binding is informative in v0.1-draft except for the following requirements:

- If `discovery.mcp` is present, it SHOULD point to MCP server metadata or a connection description.
- MCP tools intended for agent use SHOULD map clearly to capability identifiers.
- MCP servers MUST enforce authorization, consent, validation, and policy server-side for state-changing or sensitive tools.

## Action Invocation

Before invoking a capability, an agent SHOULD:

1. Discover and validate the manifest.
2. Confirm the publisher identity is appropriate for the user request.
3. Select the capability matching the user intent.
4. Check the declared risk, consent, authentication, and audit requirements.
5. Obtain user consent when required.
6. Invoke a declared protocol.
7. Return a result summary and audit or correlation identifier when available.

Agents MUST NOT rely only on prompt instructions in the manifest for safety decisions. Protocol endpoints and servers are responsible for policy enforcement.

## Action Result Envelope

Protocol implementations SHOULD return an action result envelope for state-changing actions.

```json
{
  "status": "accepted",
  "capabilityId": "request-offer",
  "correlationId": "req_20260609_001",
  "auditId": "audit_20260609_001",
  "summary": "Offer request submitted for two service options.",
  "requiresFollowUp": true,
  "links": [
    {
      "rel": "status",
      "href": "https://example.com/requests/req_20260609_001"
    }
  ]
}
```

The envelope is informative for v0.1-draft and is expected to become more precise in later drafts.

## Error Handling

Agents and protocol implementations SHOULD use explicit error responses. Errors SHOULD include a stable error code, a human-readable message, and a correlation ID when possible.

Example:

```json
{
  "status": "error",
  "error": {
    "code": "consent_required",
    "message": "This capability requires explicit user confirmation before execution."
  },
  "capabilityId": "request-offer",
  "correlationId": "req_20260609_002"
}
```

## Security Considerations

Manifest publishers MUST NOT expose secrets, private credentials, internal tokens, admin-only endpoints, or unsafe privileged operations in public manifests.

High and critical risk capabilities MUST require explicit user confirmation. Critical capabilities SHOULD require authentication appropriate to the action.

Servers MUST enforce authorization, validation, rate limits, replay protection, duplicate transaction controls, consent checks, and audit requirements outside the prompt. A manifest can describe policy, but prompt text alone is not enforcement.

Agents MUST treat manifests as untrusted input until validated and contextualized. A malicious manifest could overstate authority, hide risk, request credentials, or direct an agent to attacker-controlled endpoints.

## Privacy Considerations

Publishers SHOULD minimize disclosed and collected data. Knowledge sources SHOULD include only information intended for public agent use. State-changing actions SHOULD collect only fields required for the declared capability.

Agents SHOULD provide user-visible summaries for submitted data and SHOULD avoid logging sensitive user information unless required for audit, compliance, or fraud prevention.

## IANA Considerations

This draft makes no IANA registration request.

The media type `application/agent-manifest+json` is proposed for discussion only and is not registered by this draft.

## Versioning

The `agentManifestVersion` field identifies the manifest draft version. For this draft, the value MUST be `0.1-draft`.

Experimental implementations SHOULD be prepared for incompatible changes before a stable 1.0 version. Publishers SHOULD mark manifests as `experimental` or `example` unless they are intentionally declaring stable behavior.

## Extensibility

Unknown properties are allowed by the v0.1 schema. Implementations MAY define extension fields for platform-specific capabilities, protocol bindings, policy details, or validation metadata.

Extension fields SHOULD avoid conflicting with existing top-level property names. Future drafts may reserve additional names.

## Examples

Informative examples are available in:

```text
rfc/examples/
examples/
```

The `rfc/examples/` directory contains compact examples for the draft package. The root `examples/` directory contains broader platform and ecosystem examples.

## References

Normative references:

- RFC 2119: Key words for use in RFCs to Indicate Requirement Levels.
- RFC 8174: Ambiguity of Uppercase vs Lowercase in RFC 2119 Key Words.
- JSON Schema Draft 2020-12.

Informative references:

- OpenAPI Specification.
- Model Context Protocol.
- W3C Well-Known URI conventions.
