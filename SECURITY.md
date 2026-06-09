# Security Policy

AgentManifest is an experimental specification for public, agent-facing website metadata.

## Reporting Vulnerabilities

If you find a security issue in the specification, examples, validation tooling, or repository configuration, please report it privately to the maintainers before public disclosure.

Include:

- affected files or examples,
- impact,
- reproduction steps,
- suggested mitigation if known.

## Manifest Security Expectations

Agent-facing manifests and related public files should follow these rules:

- Do not expose secrets, API keys, bearer tokens, session identifiers, or credentials.
- Do not expose admin-only endpoints, private network locations, or privileged internal operations.
- Require explicit user confirmation for high-risk and critical actions.
- Never rely only on prompt instructions for safety.
- Enforce consent, authorization, validation, rate limits, replay protection, and policy server-side.
- Keep audit records for high-risk and critical actions.

## Experimental Status

This repository does not define a certified security standard. Implementers are responsible for threat modeling and enforcing their own production controls.
