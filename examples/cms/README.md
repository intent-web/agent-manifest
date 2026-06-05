# CMS AgentManifest Examples

This directory contains AgentManifest examples for traditional CMS platforms,
publishing systems and headless CMS tools.

CMS manifests should expose trusted public knowledge and safe content discovery
without leaking draft, private, preview-only, protected or administrative
content. For most CMS systems, the first useful AgentManifest implementation is
static or read-only: pages, posts, taxonomies, content models, menus and public
policies. State-changing capabilities such as contact forms or newsletter
signups need explicit consent and audit.

## What These Examples Cover

| Manifest | Platform Scenario | Main Purpose |
| --- | --- | --- |
| [`drupal/agent-manifest.json`](./drupal/agent-manifest.json) | Drupal CMS | JSON:API content discovery, taxonomy, menus and webform submission. |
| [`joomla/agent-manifest.json`](./joomla/agent-manifest.json) | Joomla CMS | Articles, categories, menus and contact form capabilities through a component. |
| [`typo3/agent-manifest.json`](./typo3/agent-manifest.json) | TYPO3 enterprise CMS | Multi-site, multi-language page tree and form framework integration. |
| [`ghost/agent-manifest.json`](./ghost/agent-manifest.json) | Ghost publication | Public posts, tags, newsletter signup and paid membership boundaries. |
| [`strapi/agent-manifest.json`](./strapi/agent-manifest.json) | Strapi headless CMS | Content models, public entries, locales and public API boundaries. |
| [`contentful/agent-manifest.json`](./contentful/agent-manifest.json) | Contentful headless CMS | Delivery API content, content model exports and frontend-hosted discovery. |

## Shared CMS Design Rules

All CMS examples follow these rules:

- Published public content may be exposed as agent knowledge.
- Drafts, previews, private files, protected pages and admin APIs must not be
  exposed in public manifests.
- Public content search is low risk.
- Reading public content is low risk.
- Contact forms, lead forms, newsletter signups and membership actions require
  user confirmation.
- Headless CMS public delivery APIs are safe knowledge sources; preview and
  management APIs require authentication and must be treated separately.
- Content access rules must be represented in policies, not inferred from the
  visual user interface.

## `drupal/agent-manifest.json`

This manifest represents a Drupal site.

It contains:

- public node, taxonomy and menu catalogs,
- JSON:API as a content discovery protocol,
- content search and content reading capabilities,
- webform submission as a medium-risk action,
- policies for unpublished revisions, private files and admin routes.

Use it for Drupal sites where public content is exposed through JSON:API or a
custom module and user-submitted forms need consent-aware handling.

## `joomla/agent-manifest.json`

This manifest represents a Joomla site.

It contains:

- article, category and menu knowledge,
- a component-based integration model,
- article search and article reading capabilities,
- contact submission as a medium-risk action,
- policies for ACL-restricted resources and extension secrets.

Use it for Joomla sites where a component can generate public catalogs and
expose a small set of safe agent actions.

## `typo3/agent-manifest.json`

This manifest represents an enterprise TYPO3 installation.

It contains:

- page tree, content element and language catalogs,
- multi-site and localization awareness,
- content search and page reading,
- TYPO3 form framework submission,
- policies for workspaces, hidden pages and protected content.

Use it for larger public-sector, enterprise or multi-language sites where TYPO3
site roots, language variants and access restrictions must be explicit.

## `ghost/agent-manifest.json`

This manifest represents a Ghost publication.

It contains:

- public post and tag catalogs through the Content API,
- membership policy knowledge,
- public article search and reading,
- newsletter signup as a medium-risk action,
- paid membership start as a critical-risk action,
- policies that protect member emails, paid content and admin API keys.

Use it for newsletters, public publications, paid content sites and membership
publications.

## `strapi/agent-manifest.json`

This manifest represents a Strapi headless CMS.

It contains:

- content type catalog knowledge,
- public entry catalogs,
- locale context,
- public content search and entry reading,
- lead/contact submission through an action gateway,
- policies for roles, permissions, draft content and private fields.

Use it when Strapi is the content source and a separate frontend renders the
website. The manifest may be published by the frontend, the Strapi API or both.

## `contentful/agent-manifest.json`

This manifest represents a Contentful-backed site.

It contains:

- content model knowledge,
- public delivery entries,
- locale context,
- public content search and entry reading,
- frontend/serverless contact submission,
- policies that separate Delivery API content from Preview API and Management
  API operations.

Use it for sites where Contentful is the source of content and the public
website or edge/frontend app publishes the agent-facing layer.

## Future Documentation To Add

Good next files for CMS examples:

- `content-model-export.json` for content types and public fields.
- `content-index.json` for published public entries.
- `access-policy.json` for draft, preview, member-only and protected content.
- `form-adapter.md` for CMS-specific form systems.
- `delivery-api-mapping.md` for headless CMS delivery APIs.
- `openapi.json` for safe form and content query tools.
- `validation-report.example.json` for ensuring private content is not exposed.

