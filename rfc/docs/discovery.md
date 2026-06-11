# AgentManifest Discovery

AgentManifest discovery lets an agent find a machine-readable website contract before it guesses from pages, forms, or visual UI.

## Well-Known Location

Agents SHOULD first request:

```text
https://example.com/.well-known/agent.json
```

Publishers MAY also serve compatible manifests at:

```text
https://example.com/.well-known/agent-manifest.json
https://example.com/agent-manifest.json
```

The preferred response media type is:

```text
application/agent-manifest+json
```

During the draft phase, `application/json` is acceptable.

## HTML Discovery

Publishers MAY expose a link relation in HTML pages:

```html
<link rel="agent-manifest" href="/.well-known/agent.json">
```

Agents can use this as a hint when direct well-known discovery fails or when they start from a specific page instead of an origin.

## Fallback Behavior

If no manifest is found, an agent SHOULD continue normal web behavior and SHOULD NOT assume that state-changing actions are safe.

Absence of a manifest means only that no AgentManifest contract was discovered. It does not imply permission to automate forms, bypass UI checks, ignore authentication, or infer business policy from page text alone.

## Capability and Binding Selection

After discovering and validating a manifest, an agent should select the capability that matches the user intent, check the capability-level risk, consent, authentication, and enforcement requirements, then choose the best supported binding by priority and client capability.

Bindings describe how a capability can be read or executed. OpenAPI and MCP are binding kinds, not replacements for the capability contract.

## Recommended Discovery Order

1. Request `/.well-known/agent.json`.
2. Request `/.well-known/agent-manifest.json`.
3. Request `/agent-manifest.json`.
4. Inspect HTML for `<link rel="agent-manifest">`.
5. If still absent, proceed without AgentManifest-specific capabilities.
