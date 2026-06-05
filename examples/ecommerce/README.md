# E-commerce AgentManifest Examples

This directory contains AgentManifest examples for standalone, hosted,
self-hosted and headless e-commerce systems.

The central idea across all commerce manifests is risk separation. Agents may
read product data and compare options freely, but they must not place orders,
make payments, start subscriptions or create legal commitments without explicit
user approval and audit.

## What These Examples Cover

| Manifest | Platform Scenario | Main Purpose |
| --- | --- | --- |
| [`prestashop/agent-manifest.json`](./prestashop/agent-manifest.json) | Self-hosted PrestaShop | Product catalog, stock checks, cart preparation and order placement through a module. |
| [`magento-adobe-commerce/agent-manifest.json`](./magento-adobe-commerce/agent-manifest.json) | Magento / Adobe Commerce | Enterprise catalog search, store-view context, quote/order workflows and authenticated customer data. |
| [`shopify/agent-manifest.json`](./shopify/agent-manifest.json) | Hosted Shopify store | Storefront discovery, variant checks, checkout preparation and hosted checkout approval. |
| [`opencart/agent-manifest.json`](./opencart/agent-manifest.json) | Self-hosted OpenCart | Product search, total estimation, cart preparation and checkout through an extension. |
| [`shopware/agent-manifest.json`](./shopware/agent-manifest.json) | Shopware sales-channel store | Sales-channel aware product search, cart calculation and order submission. |
| [`bigcommerce/agent-manifest.json`](./bigcommerce/agent-manifest.json) | BigCommerce store | Hosted or headless storefront catalog, option checks and checkout workflows. |
| [`sylius/agent-manifest.json`](./sylius/agent-manifest.json) | Sylius custom/headless commerce | Channel-aware product search, order calculation and checkout state-machine integration. |

## Shared Commerce Design Rules

All commerce examples model these patterns:

- Product discovery and catalog search are `low` risk.
- Availability, product option validation and total estimation are usually
  `low` risk when they do not mutate state.
- Cart or checkout preparation is usually `medium` risk because it creates or
  modifies a business object.
- Order placement, payment, subscription start and legal commitments are
  `critical` risk.
- Critical capabilities require explicit user approval, full price summary and
  audit.
- Customer-specific pricing, addresses, account data and order history require
  authentication.
- Public catalogs must not expose internal cost, supplier data, unpublished
  products, admin API tokens or platform secrets.

## `prestashop/agent-manifest.json`

This manifest represents a self-hosted PrestaShop store.

It contains:

- active product and category catalogs,
- shipping and payment policy knowledge,
- product search and stock check capabilities,
- cart preparation as a medium-risk action,
- order placement as a critical-risk action,
- serving notes for a PrestaShop module and custom action gateway.

Use it for stores where a custom module can expose public catalog files and
agent-safe order workflows while keeping admin endpoints private.

## `magento-adobe-commerce/agent-manifest.json`

This manifest represents Magento Open Source or Adobe Commerce.

It contains:

- product catalog and store-view context,
- commerce rules and enterprise storefront policies,
- catalog search, product option validation and cart estimation,
- critical order submission through a governed action gateway,
- policies for store view, currency, quote id and customer authentication.

Use it for enterprise commerce where multi-store, multi-language, customer
groups, quote management and strict audit requirements matter.

## `shopify/agent-manifest.json`

This manifest represents a Shopify storefront.

It contains:

- product and collection knowledge,
- store policy references,
- product search through Storefront API or static catalogs,
- variant availability checks,
- checkout preparation through an app proxy or external runtime,
- critical purchase completion through hosted checkout.

Use it when the public storefront is hosted by Shopify but governed actions need
a Shopify app, app proxy, external runtime or hosted checkout boundary.

## `opencart/agent-manifest.json`

This manifest represents an OpenCart store.

It contains:

- product and category catalogs,
- shipping and payment policy knowledge,
- product search, order total estimation and cart preparation,
- critical order placement,
- extension-oriented serving notes.

Use it when implementing AgentManifest through an OpenCart extension that
normalizes catalog data and exposes safe checkout operations.

## `shopware/agent-manifest.json`

This manifest represents Shopware with sales channels.

It contains:

- product catalog knowledge,
- sales channel context,
- legal and commerce policy files,
- product search and cart calculation,
- order preparation and order submission,
- audit requirements that include language, currency and sales channel.

Use it for Shopware sites where product availability, language, currency and
legal requirements differ by sales channel.

## `bigcommerce/agent-manifest.json`

This manifest represents BigCommerce in hosted storefront or headless mode.

It contains:

- product and category catalogs refreshed by catalog webhooks,
- storefront policy knowledge,
- product search and product option validation,
- checkout preparation and order completion,
- policies around app tokens, admin API exposure and customer group pricing.

Use it when a BigCommerce storefront needs public AI-readable catalogs and a
separate app/runtime for safe checkout actions.

## `sylius/agent-manifest.json`

This manifest represents Sylius as a custom, headless or API Platform-based
commerce system.

It contains:

- product catalog knowledge,
- channel and promotion context,
- product search and order total calculation,
- checkout preparation and completion,
- policies for channel-aware audit and checkout state-machine safety.

Use it for custom commerce projects where developers control API resources,
channels, promotions and checkout workflow logic.

## Future Documentation To Add

Good next files for commerce examples:

- `openapi.json` for product, cart and order tools.
- `catalog.example.json` with product, variant, inventory and option fields.
- `checkout-policy.json` describing consent and approval requirements.
- `payment-risk-policy.json` for critical payment actions.
- `fulfillment-catalog.json` for shipping, pickup and delivery options.
- `customer-auth-policy.json` for customer-specific actions.
- `audit-schema.json` for order and cart action logs.

