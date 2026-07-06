# IntentWeb AgentManifest

Internet-Draft-style document: draft-jernalczyk-intentweb-agent-manifest-00

Author: Mariusz Jernalczyk

Intended status: Experimental

Expires: December 2026

## Status of This Memo

This document is an Internet-Draft-style proposal for discussion. It is not an official Internet-Draft submission, not an RFC, and not an IETF-approved standard.

AgentManifest is currently an experimental open specification. Implementers are encouraged to test the draft, report interoperability issues, and propose improvements through the repository governance process.

The key words MUST, MUST NOT, REQUIRED, SHALL, SHALL NOT, SHOULD, SHOULD NOT, RECOMMENDED, MAY, and OPTIONAL are to be interpreted as described in RFC 2119 and RFC 8174 when they appear in all capitals.

## Abstract

AgentManifest defines a JSON document that websites can publish to describe identity, trusted knowledge, agent-facing capabilities, structured bindings, risk levels, consent requirements, authentication expectations, audit rules, and policies.

The goal is to help AI agents understand what a website knows and what it can safely do before scraping, guessing from visual UI, or executing brittle browser automation.

## Overview

The canonical specification for this draft is maintained in [`SPEC.md`](./SPEC.md). This file provides an Internet-Draft-style packaging of the proposal and points implementers to the normative schema and supporting guidance.

An AgentManifest document declares:

- the manifest version and status,
- the website or organization identity,
- the platform and integration mode,
- discovery locations for the manifest and related resources,
- trusted knowledge sources,
- capabilities with type, risk, consent, state-change, binding, and audit metadata,
- policy expectations for consent, authentication, data minimization, and audit.

Capabilities describe what a website can do and under which policy. Structured `bindings` describe how that capability can be accessed or executed, such as through HTML, static resources, HTTP, OpenAPI, MCP, or hosted checkout. OpenAPI operations and MCP tools are binding targets, not the whole capability contract.

AgentManifest is vendor-neutral. Implementation frameworks may generate manifests and bindings, but the manifest does not require any specific generator or expose implementation ownership as a normative field.

## Discovery

Agents SHOULD attempt static discovery at `/.well-known/agent.json`. Publishers MAY also expose `/.well-known/agent-manifest.json`, `/agent-manifest.json`, or an HTML discovery hint:

```html
<link rel="agent-manifest" href="/.well-known/agent.json">
```

If no manifest is found, agents SHOULD continue normal web behavior and SHOULD NOT infer that unsupported actions are safe.

## Schema

The canonical JSON Schema is:

```text
rfc/schemas/agent-manifest.v0.1.schema.json
```

The schema uses JSON Schema Draft 2020-12 and keeps `additionalProperties: true` for forward-compatible experimentation.

## Risk and Consent

Capabilities declare a risk level of `low`, `medium`, `high`, or `critical`.

Low-risk capabilities are public and read-only. Medium-risk capabilities submit data or start a workflow. High-risk capabilities modify user or business state. Critical capabilities include payments, orders, legal commitments, destructive actions, or irreversible operations.

High and critical actions MUST require explicit confirmation and audit. Critical actions MUST set `stateChange` to `true`, `requiresConsent` to `true`, and `consentMode` to `explicit`, `step_up`, or `human_review`.

AgentManifest declares authentication, authorization, consent, audit, and policy expectations. Protocol endpoints are responsible for enforcement. Consent must be specific to a capability invocation and must not be treated as broad permanent authorization. Critical actions should use appropriate authentication, explicit confirmation, audit, replay protection, and duplicate transaction controls.

## Security

Manifests and related public files MUST NOT expose secrets, private tokens, unpublished data, private customer information, admin-only endpoints, or privileged internal operations.

Servers MUST enforce authorization, consent, validation, replay protection, duplicate transaction controls, and policy checks outside prompt text. Prompt instructions are not a security boundary.

## References

- [`SPEC.md`](./SPEC.md)
- [`schemas/agent-manifest.v0.1.schema.json`](./schemas/agent-manifest.v0.1.schema.json)
- [`docs/security.md`](./docs/security.md)
- RFC 2119
- RFC 8174
- JSON Schema Draft 2020-12
