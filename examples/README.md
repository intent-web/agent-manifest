# AgentManifest Examples

This directory contains draft AgentManifest examples for common website stacks,
CMS platforms, e-commerce systems and web frameworks.

The examples are not final schemas. They are practical, concrete starting
points that show how a website can describe itself to AI agents: identity,
trusted knowledge, available capabilities, protocols, risk levels, consent
requirements and audit expectations.

Each platform has its own folder and an `agent-manifest.json` file. The folder
layout is designed so implementation guides, generated OpenAPI files, MCP
server definitions, catalogs, policies and validation reports can be added next
to each manifest later.

## What Every Manifest Demonstrates

Each example uses the same high-level structure:

| Section | Purpose |
| --- | --- |
| `agentManifestVersion` | Draft format version used by the example. |
| `id` | Stable example identifier. Useful for validators and documentation links. |
| `templateKind` | Platform-oriented template label, such as `framework-vue` or `ecommerce-prestashop`. |
| `identity` | Business owner, domain and contact metadata an agent should know before acting. |
| `platform` | Stack type, integration mode and deployment-specific serving notes. |
| `discovery` | Suggested locations for the manifest, LLM context, OpenAPI and MCP endpoints. |
| `knowledge` | Public, trusted sources an agent may use for understanding the site. |
| `capabilities` | Agent-usable tasks with intent, risk, state change, consent and protocol metadata. |
| `policies` | Consent, authentication, data minimization and audit rules. |
| `extensionPoints` | Future files that can be added beside the manifest as documentation grows. |

## Directory Map

| Directory | Scope | What the Examples Are For |
| --- | --- | --- |
| [`base/`](./base/) | Default vendor-neutral manifest | A normal business website with public pages, site summary, public content search and contact/offer request actions. Use this as the baseline for new templates. |
| [`wordpress/`](./wordpress/) | WordPress core and WordPress plugin variants | WordPress sites, WooCommerce stores, digital product stores, membership sites and other WordPress-based commerce workflows. |
| [`ecommerce/`](./ecommerce/) | Standalone and hosted commerce platforms | Product search, availability, cart preparation, checkout review, order placement, payment risk and commerce audit patterns. |
| [`cms/`](./cms/) | Traditional and headless content management systems | Public content discovery, page/post catalogs, taxonomy catalogs, preview/draft separation and safe form submission. |
| [`frameworks/`](./frameworks/) | Web frameworks and application stacks | Static sites, SPAs, SSR apps, server-rendered apps, backend frameworks and API-capable runtimes. |

## Example Groups

### Base

[`base/agent-manifest.json`](./base/agent-manifest.json) is the reference
starting point for a vendor-neutral business website. It models a simple site
that exposes:

- public identity and contact information,
- LLM-readable site summary files,
- public page and policy catalogs,
- low-risk read/search capabilities,
- a medium-risk contact request capability that requires user confirmation,
- basic consent, authentication, data minimization and audit rules.

The base folder also contains
[`base/agent-manifest.schema.json`](./base/agent-manifest.schema.json), a draft
JSON Schema for the `0.1-draft` manifest shape. The base manifest references it
through `$schema`, so editors and validators can use it as the initial contract
for future examples.

Use it when designing a new platform template or when a site does not fit a
specific CMS or framework yet.

### WordPress

The [`wordpress/`](./wordpress/) group covers WordPress as both a CMS and a
commerce platform host. It includes WordPress core plus common plugin-driven
commerce and membership patterns. These examples emphasize the plugin adoption
model: an admin UI configures identity, knowledge, capabilities and policies,
then publishes AI-readable files and optional action gateways.

### E-commerce

The [`ecommerce/`](./ecommerce/) group covers stores where the risk model is
especially important. Public product discovery is usually low risk. Cart or
checkout preparation is usually medium risk. Payments, order placement,
subscriptions and legal commitments are critical risk and require explicit user
approval plus durable audit records.

### CMS

The [`cms/`](./cms/) group covers public content platforms. These manifests
focus on exposing trusted public content while avoiding leakage of drafts,
preview content, private files, admin routes, editorial APIs and protected
member content.

### Frameworks

The [`frameworks/`](./frameworks/) group covers application stacks that serve
websites. These examples focus on deployment shape: static files, SPA fallback,
SSR routes, serverless handlers, controller actions, route handlers, API routes
and authenticated backend workflows.

## Conventions

- `agentManifestVersion` is set to `0.1-draft`.
- URLs use `https://example.com` placeholders.
- `risk` uses `low`, `medium`, `high` or `critical`.
- `stateChange` indicates whether a capability changes business state.
- `requiresConsent` tells agents whether the user must confirm before execution.
- `platform.servingNotes` captures platform-specific traps and best practices.
- `extensionPoints` lists future documents that can be added beside the manifest.

## Risk Interpretation

| Risk | Typical Example | Expected Behavior |
| --- | --- | --- |
| `low` | Read a public page, search a product catalog, check availability | Agent may proceed without explicit user confirmation. |
| `medium` | Submit a contact form, prepare a cart, create a checkout session | Agent should summarize the action and ask the user to confirm. |
| `high` | Start a business workflow, modify important user data, trigger a booking-like process | Agent must ask for explicit confirmation and usually requires audit. |
| `critical` | Place an order, start paid membership, complete purchase, payment, subscription | Agent requires explicit approval, strong audit and often authentication or hosted checkout. |

## Suggested Future Files Per Platform

Add these files next to a platform manifest as the project matures:

- `README.md` with platform-specific implementation steps.
- `openapi.json` for tool execution.
- `mcp-server.example.json` for MCP exposure.
- `llms.txt` and `llms-full.txt` for LLM-readable context.
- `catalog.example.json` for products, pages, services or content.
- `policy.example.json` for risk, consent and audit rules.
- `validation-report.example.json` for CI output.
- `adapter.md` or `plugin.md` for platform-specific implementation notes.
