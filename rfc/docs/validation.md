# Validation

This repository provides a canonical JSON Schema for AgentManifest v0.1-draft:

```text
rfc/schemas/agent-manifest.v0.1.schema.json
```

## Validate Examples

Install Node.js dependencies:

```sh
npm install
```

Validate RFC examples and practical existing examples:

```sh
npm run validate:examples
```

The validation script checks:

- `rfc/examples/**/*.json`
- existing `examples/**/agent-manifest.json` files where practical

## Validate the Schema File

```sh
npm run validate:schema
```

This verifies that the canonical schema is valid JSON and can be compiled by the validator.

## Schema Reference Convention

New example manifests should include a relative `$schema` reference where practical. For root examples under `examples/<name>/agent-manifest.json`, use:

```json
{
  "$schema": "../../rfc/schemas/agent-manifest.v0.1.schema.json"
}
```

For RFC examples under `rfc/examples/<name>/agent-manifest.json`, use:

```json
{
  "$schema": "../../schemas/agent-manifest.v0.1.schema.json"
}
```
