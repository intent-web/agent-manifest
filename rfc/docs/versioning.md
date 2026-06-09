# Versioning

AgentManifest documents declare their draft version with `agentManifestVersion`.

For this draft, the value is:

```json
{
  "agentManifestVersion": "0.1-draft"
}
```

## Experimental Changes

Before a stable `1.0` release, fields may be renamed, added, constrained, or removed based on implementation feedback. Publishers should mark production experiments as `experimental` and examples as `example`.

## Backwards Compatibility

The v0.1 schema allows `additionalProperties: true` so implementers can test extensions without breaking validation. Agents should ignore unknown properties they do not understand.

Future stable versions should define clearer compatibility rules, including how agents should process manifests from older versions.

## Deprecation

Deprecated fields or behaviors should be documented in `CHANGELOG.md`, `SPEC.md`, schema descriptions, and at least one migration example when practical.

## Breaking Changes

Changes to the manifest shape should update:

- `rfc/SPEC.md`
- `rfc/schemas/agent-manifest.v0.1.schema.json` or a new versioned schema
- at least one example manifest
- validation documentation
