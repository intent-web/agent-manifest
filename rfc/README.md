# AgentManifest RFC-Style Draft Package

This directory contains the Internet-Draft-style specification package for the experimental IntentWeb AgentManifest draft.

AgentManifest is a proposed machine-readable website contract for AI agents. It describes identity, trusted knowledge, capabilities, structured bindings, risk, consent, authentication, audit, and policies.

This package is experimental. It is not an official RFC, is not an IETF-approved standard, and has not gone through a formal standards process.

## Contents

| Path | Purpose |
| --- | --- |
| [`SPEC.md`](./SPEC.md) | Main normative-ish specification for AgentManifest v0.1-draft. |
| [`draft-jernalczyk-intentweb-agent-manifest-00.md`](./draft-jernalczyk-intentweb-agent-manifest-00.md) | Internet-Draft-style presentation of the same proposal. |
| [`schemas/agent-manifest.v0.1.schema.json`](./schemas/agent-manifest.v0.1.schema.json) | Canonical JSON Schema for this repository. |
| [`docs/`](./docs/) | Supporting implementation, security, privacy, validation, and versioning guidance. |
| [`examples/`](./examples/) | Compact draft examples for minimal, e-commerce, and local service manifests. |

## Draft Status

The current draft version is `0.1-draft`. Implementers should expect changes while the community tests discovery, validation, structured bindings, consent models, and policy examples.
