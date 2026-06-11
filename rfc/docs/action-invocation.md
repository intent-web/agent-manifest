# Action Invocation

AgentManifest separates capability selection from binding execution. An agent should first decide what the user is asking for, then select a declared capability, validate risk and policy, obtain consent when required, and finally call a supported binding.

## Invocation Flow

1. Discover and parse the manifest.
2. Validate the manifest against `rfc/schemas/agent-manifest.v0.1.schema.json`.
3. Confirm the manifest identity matches the site the user intended.
4. Select the capability whose `intent` matches the user request.
5. Check `risk`, `stateChange`, `consentMode`, `requiresConsent`, `requiresAuthentication`, `enforcement`, and `audit`.
6. Choose the best supported binding by `priority` and client support.
7. Obtain explicit user confirmation for medium, high, and critical actions when required by policy.
8. Invoke the selected binding, such as HTTP, OpenAPI, MCP, or hosted checkout.
9. Return a concise result summary with a correlation ID or audit ID when available.

## Consent Check

Consent should be tied to:

- the selected capability,
- a user-visible input summary,
- the user or session,
- the timestamp,
- the selected binding operation.

Consent for one capability should not authorize unrelated capabilities.

## Action Result Envelope

Binding implementations SHOULD return a consistent envelope for state-changing actions:

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

For errors:

```json
{
  "status": "error",
  "capabilityId": "request-offer",
  "correlationId": "req_20260609_002",
  "error": {
    "code": "consent_required",
    "message": "This capability requires explicit user confirmation before execution."
  }
}
```

## Server-Side Enforcement

Agents can read policy, but servers must enforce it. State-changing endpoints should validate authentication, authorization, consent, request shape, replay protection, duplicate submission handling, and audit logging before committing business state.
