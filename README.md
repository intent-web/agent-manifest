<p align="center">
  <img src="./logo-text.png" alt="IntentWeb logo" width="720">
</p>

# AgentManifest

**AgentManifest is a proposed machine-readable website contract for AI agents.**

It tells an AI agent what a website is, what trusted knowledge it exposes, which
business capabilities are available, which actions are safe, and when user
consent, authentication or audit is required.

In simple terms: **AgentManifest helps websites explain themselves to AI agents
before the agent starts guessing, scraping, clicking buttons or filling forms.**

> From websites to capabilities. From clicks to intents. From SEO to AIO:
> Agent Interface Optimization.

## Where AgentManifest Fits

AgentManifest is one part of the broader IntentWeb concept:

| Layer | Purpose | Repository |
| --- | --- | --- |
| **IntentWeb** | The vision: an AI-native layer of the Internet built around user intent. | [TODO: IntentWeb repository](https://github.com/your-org/intentweb) |
| **AgentManifest** | The contract: a structured declaration that websites expose to AI agents. | This repository |
| **Agent Layer Framework** | The implementation toolkit: generators, plugins, runtimes, policy engines and adapters. | [TODO: Agent Layer Framework repository](https://github.com/your-org/agent-layer-framework) |

IntentWeb and the Agent Layer Framework will be documented in separate
repositories. This repository focuses only on **AgentManifest as the standard
contract**.

## Why This Matters

Today, AI agents are often forced to behave like humans:

- They inspect visual layouts, buttons, forms, menus and popups.
- They infer business meaning from inconsistent user interfaces.
- They use brittle browser automation when an official contract does not exist.
- They often cannot know whether an action is read-only, risky, irreversible or
  legally binding.

That works poorly for business workflows. A browser can show a "Submit" button,
but an agent needs to know what "submit" means:

- Is it a search?
- Is it a contact request?
- Is it a booking?
- Is it an order?
- Is it a payment?
- Does it require explicit user approval?

AgentManifest makes those answers explicit.

## The Core Idea

A traditional website says:

> "Here are my pages."

An IntentWeb-ready website can also say:

> "Here are the tasks I can safely help an AI agent complete."

AgentManifest turns a website into an **agent-readable, intent-aware and
action-ready interface**. It does not replace HTML, SEO metadata, APIs,
OpenAPI, MCP or the human user experience. It adds an official semantic layer
beside them.

## What AgentManifest Describes

An AgentManifest should answer the first questions an AI agent has before it
acts:

| Area | Question | Examples |
| --- | --- | --- |
| **Identity** | Who owns this website? | Organization, domain, contacts, legal entity |
| **Knowledge** | What sources are trusted? | Pages, docs, catalogs, FAQs, policies, product data |
| **Capabilities** | What can the agent do? | Search products, request an offer, check availability, prepare a cart |
| **Protocols** | How can tools be called? | Static files, OpenAPI, MCP, webhooks, custom APIs |
| **Risk & policy** | What are the rules? | Consent, authentication, audit, rate limits, human review |

This makes AgentManifest both technical and semantic. It describes **how** to
call something and **what it means** for the user and the business.

## Capability, Not Just Endpoint

An API endpoint gives syntax:

```text
POST /api/request-offer
```

A capability gives meaning:

```text
Intent: request a commercial offer
Risk: medium
State change: creates a sales workflow
Consent: required before submission
Audit: store request summary, user confirmation and timestamp
```

For AI agents, this difference is critical. Agents reason about goals, risk and
user intent, not only HTTP methods and payloads.

## Conceptual Manifest Shape

The exact schema is expected to evolve, but an AgentManifest may look like this:

```json
{
  "agentManifestVersion": "0.1",
  "identity": {
    "name": "Example Store",
    "domain": "example.com",
    "owner": "Example Inc.",
    "contact": "support@example.com"
  },
  "knowledge": [
    {
      "type": "catalog",
      "name": "Product catalog",
      "url": "https://example.com/ai/catalog.json"
    },
    {
      "type": "policy",
      "name": "Returns policy",
      "url": "https://example.com/returns"
    }
  ],
  "capabilities": [
    {
      "id": "request-offer",
      "name": "Request an offer",
      "description": "Submit customer requirements and create a sales inquiry.",
      "intent": "request_commercial_offer",
      "risk": "medium",
      "requiresConsent": true,
      "requiresAuthentication": false,
      "protocols": {
        "openapi": "https://example.com/ai/openapi.json"
      },
      "audit": {
        "required": true,
        "records": ["input_summary", "user_confirmation", "timestamp"]
      }
    }
  ],
  "policies": {
    "consent": "Consent must be tied to a specific action, input, user and time.",
    "dataUse": "Only collect fields required for the selected capability."
  }
}
```

## Risk and Consent Model

AgentManifest should make risk visible before execution.

| Risk level | Meaning | Expected agent behavior |
| --- | --- | --- |
| **Low** | Public, read-only information | May proceed without explicit confirmation |
| **Medium** | Submits data or starts a workflow | Should ask the user to confirm |
| **High** | Modifies user data, books something or changes state | Must require explicit confirmation and audit |
| **Critical** | Payments, orders, legal commitments or irreversible actions | Requires explicit approval, audit and often additional authentication |

The principle is simple: **the more serious the action, the stronger the
confirmation and audit requirements.**

## Example Agent Flow

User intent:

> "Ask this company for an offer."

AgentManifest-enabled flow:

1. The agent discovers the website manifest.
2. It reads the site's identity, knowledge sources, capabilities and policies.
3. It maps the user's request to the `request-offer` capability.
4. It checks that the action is medium risk and requires consent.
5. It prepares a clear summary of the request.
6. It asks the user to confirm the exact data that will be submitted.
7. It executes the action through the declared protocol.
8. It returns the result and audit reference.

The user stays in control. The business gets structured, auditable automation.

## Business Value

AgentManifest helps organizations prepare for AI-driven discovery and
automation:

- **Better AI visibility**: websites become easier for AI assistants to
  understand and recommend.
- **Safer automation**: agents use declared capabilities instead of guessing
  from UI elements.
- **Higher conversion quality**: user intent can map directly to business
  workflows such as quotes, bookings, purchases and support requests.
- **Governance by design**: risk, consent, authentication and audit are part of
  the contract.
- **Gradual adoption**: a site can start with read-only discovery files before
  exposing real actions.

For search engines, websites created SEO metadata. For AI agents, websites need
**Agent Interface Optimization (AIO)**.

## Technical Value

For developers and platform teams, AgentManifest provides a stable surface for:

- AI agent discovery
- Capability registries
- Policy-aware tool execution
- LLM-readable site context
- OpenAPI and MCP adapters
- Consent-aware action gateways
- Audit trails for agent-initiated workflows
- Validation tooling for AI-ready websites

It is intended to work with existing websites, CMS platforms, e-commerce
systems, SaaS applications and APIs.

## Adoption Modes

AgentManifest can support gradual adoption:

| Mode | Description | Typical use |
| --- | --- | --- |
| **Static Mode** | Publish AI-readable files only. No backend required. | Company websites, static sites, Vue/React builds |
| **Bridge Mode** | Add a small set of safe actions through existing forms, serverless functions or APIs. | Offer requests, contact forms, lead capture, booking requests |
| **Runtime Mode** | Use a governed runtime with policy, consent, authentication, OpenAPI, MCP and audit. | E-commerce, SaaS, enterprise workflows |

A website can become understandable to agents before it allows agents to perform
state-changing actions.

## Example Manifests

This repository includes a growing library of draft manifests under
[`examples/`](./examples/):

- [`examples/base/`](./examples/base/) for a default vendor-neutral business
  website.
- [`examples/wordpress/`](./examples/wordpress/) for WordPress core and
  WordPress commerce plugins such as WooCommerce, Easy Digital Downloads,
  SureCart, WP EasyCart and MemberPress.
- [`examples/ecommerce/`](./examples/ecommerce/) for stores such as PrestaShop,
  Magento/Adobe Commerce, Shopify, OpenCart, Shopware, BigCommerce and Sylius.
- [`examples/cms/`](./examples/cms/) for CMS and headless CMS platforms such as
  Drupal, Joomla, TYPO3, Ghost, Strapi and Contentful.
- [`examples/frameworks/`](./examples/frameworks/) for web frameworks and stacks
  such as Vue, React/Vite, Angular, Nuxt, Next.js, SvelteKit, PHP, Laravel,
  Django, Rails, Express, Spring Boot, ASP.NET Blazor and ASP.NET MVC.

Each example is structured so implementation notes, OpenAPI files, MCP adapters,
catalog exports, policies and validation reports can be added next to the
manifest later.

## Relationship to Existing Web Standards

AgentManifest is inspired by existing web conventions but serves a different
purpose:

- `sitemap.xml` helps search engines find pages.
- `robots.txt` communicates crawler rules.
- Web app manifests describe installable web applications.
- OpenAPI describes API syntax.
- MCP exposes tools to AI clients.
- **AgentManifest describes identity, knowledge, capabilities, policies and
  risk for AI agents.**

The goal is interoperability, not replacement.

## SEO and AIO Keywords

This project is relevant to:

- AI-native web
- AI agent discovery
- machine-readable website manifest
- Agent Interface Optimization
- AIO for websites
- intent-aware websites
- agent-readable websites
- AI agent capabilities
- AI website automation
- consent-aware AI actions
- OpenAPI for AI agents
- MCP tools for websites
- AI governance and audit trails

## Roadmap

Initial work should focus on the smallest useful standard:

- Define AgentManifest `0.1`.
- Specify identity, knowledge, capability and policy schemas.
- Create examples for company sites, e-commerce, WordPress and SaaS.
- Build a validator so developers can check manifests automatically.
- Add reference outputs for LLM-readable context, OpenAPI and MCP adapters.
- Document discovery conventions for where agents should look for the manifest.

First success metric:

> A normal website can publish a valid AgentManifest and three useful
> capabilities in minutes.

## Status

This repository currently represents an early concept and specification draft
for AgentManifest within the broader IntentWeb vision.

Planned repository placeholders:

- [TODO: IntentWeb repository](https://github.com/your-org/intentweb)
- [TODO: Agent Layer Framework repository](https://github.com/your-org/agent-layer-framework)

## One-Sentence Summary

**AgentManifest is the official, machine-readable contract that lets AI agents
understand what a website knows, what it can do, and how to act safely with
consent and audit.**
