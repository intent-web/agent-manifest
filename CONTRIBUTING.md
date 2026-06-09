# Contributing

AgentManifest is an experimental open specification. Contributions should preserve the current concept while improving clarity, interoperability, safety, and implementation feedback.

## What to Contribute

| Change type | Expected updates |
| --- | --- |
| Schema changes | Update `rfc/SPEC.md`, `rfc/schemas/`, validation docs, and at least one example. |
| Example changes | Keep examples safe, realistic, and based on `example.com` domains. |
| Documentation changes | Use a specification-oriented tone and avoid implying official RFC or IETF status. |
| Breaking changes | Open an issue or proposal first and explain migration impact. |

## Proposing Schema Changes

Manifest shape changes should include:

- the problem the change solves,
- the proposed field or behavior,
- risk and privacy considerations,
- compatibility impact,
- updates to `rfc/SPEC.md`,
- updates to the canonical schema,
- at least one updated or new example manifest.

## Examples

Examples should be valid JSON, use safe `example.com` domains, avoid credentials, avoid private endpoints, and keep state-changing capabilities explicit about risk and consent.

## Documentation

Documentation should distinguish normative draft requirements from informative guidance. Do not describe AgentManifest as an official RFC, IETF standard, or approved standard.

## Review

Draft changes are reviewed for interoperability, security, privacy, readability, and compatibility with existing examples.
