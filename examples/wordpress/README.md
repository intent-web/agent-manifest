# WordPress AgentManifest Examples

This directory contains AgentManifest examples for WordPress-based websites and
WordPress plugins that turn WordPress into a commerce, digital product or
membership platform.

The intended adoption model is similar to SEO plugins. A site owner configures
identity, trusted knowledge, capabilities and policies in the WordPress admin
area. The plugin then publishes static AI-readable files and, when needed,
governed action gateways through WordPress REST routes or plugin-specific
adapters.

## What These Examples Cover

| Manifest | Platform Scenario | Main Purpose |
| --- | --- | --- |
| [`core/agent-manifest.json`](./core/agent-manifest.json) | Normal WordPress website | Public pages, posts, taxonomies and contact-form style actions. |
| [`woocommerce/agent-manifest.json`](./woocommerce/agent-manifest.json) | WooCommerce store | Product discovery, availability, cart preparation and critical order placement. |
| [`easy-digital-downloads/agent-manifest.json`](./easy-digital-downloads/agent-manifest.json) | Digital products and downloads | Digital product search, license comparison, purchase preparation and license/payment risk. |
| [`surecart/agent-manifest.json`](./surecart/agent-manifest.json) | SureCart commerce site | Hosted checkout, subscriptions, plans, trials and recurring billing consent. |
| [`wp-easycart/agent-manifest.json`](./wp-easycart/agent-manifest.json) | WP EasyCart store | Product search, order total calculation, cart preparation and checkout approval. |
| [`memberpress/agent-manifest.json`](./memberpress/agent-manifest.json) | Membership site | Membership plan comparison, protected content rules and paid membership start. |

## Shared WordPress Design Rules

All WordPress examples follow these rules:

- Public knowledge comes from published pages, posts, products, plans or public
  policy pages.
- Drafts, private posts, password-protected content and admin-only data must not
  appear in public catalogs.
- Public discovery can be static, but form submissions, cart creation,
  subscriptions and purchases need a governed action gateway.
- WordPress REST routes should expose only agent-safe operations, not raw admin
  or plugin internals.
- User confirmation is required before any capability submits personal data,
  starts a workflow, prepares a cart, purchases a product or starts billing.

## `core/agent-manifest.json`

This manifest represents a standard WordPress site without commerce.

It contains:

- `platform.stack`: `wordpress`, `php`, `mysql`, `theme`, `plugins`.
- `knowledge` sources for public pages, public posts and taxonomies.
- `capabilities` for content search, page reading and contact form submission.
- `policies` that prevent admin routes, draft content and private data from
  becoming agent-visible.
- `extensionPoints` for plugin admin UI notes, WordPress REST OpenAPI output,
  form adapters and a content index.

Use this example for company websites, blogs, agencies, service providers,
documentation sites or public editorial sites built on WordPress.

## `woocommerce/agent-manifest.json`

This manifest represents a WooCommerce storefront.

It contains:

- public product catalog knowledge from WooCommerce Store API-like sources,
- shipping, returns and fulfillment policy references,
- low-risk product search and availability checks,
- a medium-risk `prepare-cart` capability,
- a critical-risk `place-order` capability,
- policies that require a full checkout summary before approval.

The manifest is designed for agents that help users compare products, check
availability, build a cart and ask for explicit approval before any order is
placed. It deliberately separates product browsing from purchase execution.

## `easy-digital-downloads/agent-manifest.json`

This manifest represents stores selling digital files, software, licenses,
templates, reports or other downloadable products.

It contains:

- digital product catalog knowledge,
- license policy and refund policy knowledge,
- low-risk digital product search and license comparison,
- medium-risk purchase preparation,
- critical-risk purchase completion,
- policies that protect private download URLs, license keys and purchase
  history.

Use it for software stores, digital asset marketplaces, paid reports, online
templates or downloadable educational content.

## `surecart/agent-manifest.json`

This manifest represents a WordPress site using SureCart or a similar hosted
commerce checkout model.

It contains:

- product and plan catalog knowledge,
- subscription terms and hosted checkout policy knowledge,
- product search and subscription plan comparison,
- checkout session creation as a medium-risk capability,
- subscription start as a critical-risk capability,
- policies that require the agent to show price, renewal interval, trial length
  and cancellation terms before user approval.

Use it where the WordPress site is the storefront and checkout or billing is
handled by a hosted commerce service.

## `wp-easycart/agent-manifest.json`

This manifest represents a WP EasyCart store.

It contains:

- product, tax and shipping knowledge,
- product search and total calculation,
- cart preparation as a medium-risk action,
- order placement as a critical-risk action,
- policies for item, shipping, tax and total confirmation.

It is useful for small to medium WordPress stores where product and checkout
data must be normalized into agent-readable files.

## `memberpress/agent-manifest.json`

This manifest represents a WordPress membership site.

It contains:

- membership plan catalog knowledge,
- public content catalog knowledge,
- membership terms,
- low-risk plan comparison and access requirement checks,
- medium-risk membership signup preparation,
- critical-risk paid membership start,
- policies that prevent protected member content from leaking into public
  catalogs.

Use it for paid newsletters, course sites, gated communities, subscription
content and membership-driven businesses.

## Future Documentation To Add

Good next files for each WordPress example:

- `plugin-admin-ui.md` describing admin screens and settings.
- `wp-rest-openapi.json` for REST route exposure.
- `forms-adapters.md` for Contact Form 7, WPForms, Gravity Forms and native
  WordPress forms.
- `content-index.json` for generated pages/posts/products.
- `checkout-policy.json` for commerce plugins.
- `billing-consent-policy.json` for subscriptions and memberships.

