# Security Guidance

AgentManifest files are public, machine-readable inputs. Agents should treat them as untrusted until validated, and publishers should assume that anything in a manifest can be read by anyone.

## Prompt Injection

Manifests and knowledge sources can contain malicious or misleading text. Agents should not treat manifest prose as instructions that override user intent, system policy, or security controls.

Publishers should keep policy text declarative and avoid embedding prompt-like commands.

## Malicious Manifests

A malicious manifest may claim ownership of another domain, understate risk, request credentials, or point to attacker-controlled endpoints. Agents should bind manifests to the origin from which they were discovered and apply normal transport security checks.

## Overbroad Capabilities

Capabilities should be narrow and auditable. Avoid broad declarations such as `manage_account` or `perform_admin_action`. Split high-impact workflows into specific steps with clear consent boundaries.

## Binding Trust

Bindings are untrusted until the manifest is validated and the binding target is checked against the publisher origin, expected transport security, and capability-level safety rules. A binding must not weaken the capability-level `risk`, `stateChange`, `consentMode`, `requiresConsent`, `requiresAuthentication`, or enforcement requirements.

HTML and static bindings are read-oriented and must not silently execute state-changing actions. Use HTTP, OpenAPI, MCP, hosted checkout, or another explicit execution binding for state-changing workflows.

## Credential Leakage

Public manifests and bindings must not include API keys, bearer tokens, session identifiers, private URLs, admin-only endpoints, internal hostnames, private service endpoints, or privileged operation details.

## Replay Attacks

State-changing binding implementations should use idempotency keys, timestamps, nonces, or short-lived consent tokens where appropriate. Duplicate submissions should not create duplicate purchases, bookings, or legal commitments.

## Duplicate Transactions

Critical actions such as payments and orders need duplicate transaction controls. Servers should detect repeated requests with the same user, cart, amount, and idempotency key.

## Policy Bypass

Do not rely only on prompt instructions for safety. State-changing bindings require server-side enforcement for input validation, consent, authentication, authorization, risk handling, rate limits, replay protection, duplicate transaction controls, and audit rules.

## Auditability

High and critical risk actions should create durable audit records containing the capability ID, input summary, user confirmation reference, authenticated user where applicable, timestamp, binding operation, and result correlation ID.
