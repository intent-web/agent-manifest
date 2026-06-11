# Web Framework AgentManifest Examples

This directory contains AgentManifest examples for frontend frameworks,
server-rendered frameworks, backend web frameworks and static websites.

Framework manifests focus less on a specific business domain and more on how a
site is served: static generation, SPA fallback, SSR, API routes, serverless
functions, controller actions, route handlers or full backend runtimes.

The most important implementation rule for frontend apps is simple: serve
AgentManifest and AI files as real files or explicit routes. They must not be
swallowed by a single-page application fallback.

## What These Examples Cover

| Manifest | Platform Scenario | Main Purpose |
| --- | --- | --- |
| [`vue/agent-manifest.json`](./vue/agent-manifest.json) | Vue/Vite SPA or static site | Build-time generated AI files, route catalog and form submission through external APIs. |
| [`react-vite/agent-manifest.json`](./react-vite/agent-manifest.json) | React/Vite SPA or static site | Static manifest generation, SPA fallback exceptions and serverless lead actions. |
| [`angular/agent-manifest.json`](./angular/agent-manifest.json) | Angular SPA or SSR site | Asset-based manifest delivery, route catalog and backend form actions. |
| [`nextjs/agent-manifest.json`](./nextjs/agent-manifest.json) | Next.js app | Public files, route handlers, server actions, OpenAPI and runtime tools. |
| [`nuxt/agent-manifest.json`](./nuxt/agent-manifest.json) | Nuxt app | Static or Nitro-served manifest, server routes and Nuxt content. |
| [`sveltekit/agent-manifest.json`](./sveltekit/agent-manifest.json) | SvelteKit app | Static/SSR adapters, endpoints and form actions. |
| [`php/agent-manifest.json`](./php/agent-manifest.json) | Plain PHP site | Static or PHP JSON manifest, page catalogs and PHP action gateway. |
| [`laravel/agent-manifest.json`](./laravel/agent-manifest.json) | Laravel app | Routes, form requests, policies, jobs and auditable business commands. |
| [`django/agent-manifest.json`](./django/agent-manifest.json) | Django app | URL patterns, DRF/views, forms, permissions and workflow tasks. |
| [`rails/agent-manifest.json`](./rails/agent-manifest.json) | Ruby on Rails app | Routes, controllers, resources, authorization and Active Job workflows. |
| [`express-node/agent-manifest.json`](./express-node/agent-manifest.json) | Express/Node.js app | Express routes, static files, queues and action middleware. |
| [`spring-boot/agent-manifest.json`](./spring-boot/agent-manifest.json) | Spring Boot app | Controllers, Spring Security, OpenAPI and audited service commands. |
| [`aspnet-blazor/agent-manifest.json`](./aspnet-blazor/agent-manifest.json) | ASP.NET Blazor app | Blazor WebAssembly/static files or Blazor Server/minimal API routes. |
| [`aspnet-mvc/agent-manifest.json`](./aspnet-mvc/agent-manifest.json) | ASP.NET MVC/Razor Pages app | MVC routes, controllers, authorization and domain workflows. |
| [`static-html/agent-manifest.json`](./static-html/agent-manifest.json) | Plain static site | Static manifest, page catalog and external/serverless forms. |

## Shared Framework Design Rules

All framework examples follow these rules:

- Public static discovery should be served at predictable paths such as
  `/.well-known/agent-manifest.json`.
- SPA fallback rules must exclude `/.well-known`, `/agent-manifest.json` and
  `/ai/*` files.
- Build-time generators should output route catalogs, content catalogs and LLM
  context files.
- Server-side frameworks should expose state-changing actions through explicit
  route handlers, controllers or APIs.
- Environment variables, server secrets, session identifiers and internal route
  metadata must never be exposed in public manifests.
- User-submitted forms and workflow commands require confirmation and audit.
- Authenticated user-specific data must be represented as protected
  capabilities, not as public knowledge.

## `vue/agent-manifest.json`

This manifest represents a Vue app, usually built with Vite and deployed as a
static site or SPA.

It contains:

- route, static content and form catalogs generated at build time,
- static discovery paths,
- read/search capabilities,
- a medium-risk lead form submission through a serverless function or external
  API,
- serving notes that warn about SPA fallback redirecting agent files to
  `index.html`.

Use it for Vue marketing sites, dashboards with public areas, product sites and
static company websites.

## `react-vite/agent-manifest.json`

This manifest represents a React app built with Vite.

It contains:

- route, content and component catalogs,
- static discovery and LLM context files,
- public route reading and content search,
- serverless or external lead submission,
- policies for Vite environment variables and backend audit.

Use it for React SPAs where the agent layer is generated during build and
served by static hosting.

## `angular/agent-manifest.json`

This manifest represents an Angular site.

It contains:

- route, content and form catalogs emitted into Angular assets,
- static discovery paths,
- low-risk content search and route reading,
- backend or serverless form submission,
- rewrite guidance so Angular fallback does not consume agent files.

Use it for Angular SPAs, Angular Universal/SSR sites and enterprise frontends
that call separate APIs.

## `nextjs/agent-manifest.json`

This manifest represents a Next.js app using either App Router or Pages Router.

It contains:

- route, content and server action catalogs,
- static public files or route-handler discovery,
- OpenAPI and MCP route placeholders,
- public content search,
- contact request and transaction preparation capabilities,
- policies for server actions, sessions and server-only data.

Use it for SSR, SSG, ISR or hybrid Next.js sites where agent files may be
generated at build time or served through route handlers.

## `nuxt/agent-manifest.json`

This manifest represents a Nuxt app.

It contains:

- route, content and server-route catalogs,
- static or Nitro-served discovery,
- content search,
- form submission and offer request capabilities,
- policies for private runtime config and server-only plugin state.

Use it for Vue SSR/static sites built with Nuxt, including Nuxt Content and
Nitro server routes.

## `sveltekit/agent-manifest.json`

This manifest represents a SvelteKit app.

It contains:

- route, content and form-action catalogs,
- static or SSR adapter serving notes,
- public content search,
- SvelteKit form action submission,
- offer request endpoint patterns,
- policies for private environment values and server-only modules.

Use it for SvelteKit apps where endpoints and form actions are natural places
to expose governed agent capabilities.

## `php/agent-manifest.json`

This manifest represents a plain PHP website without assuming a full framework.

It contains:

- page, service and form catalogs,
- static or PHP endpoint discovery,
- public page search,
- offer request and booking request capabilities,
- policies for admin panels, sessions, CSRF and server path secrecy.

Use it for custom PHP sites, older PHP applications and small business websites.

## `laravel/agent-manifest.json`

This manifest represents a Laravel app.

It contains:

- route, resource and policy catalogs,
- Laravel controller/form request capability patterns,
- public data search,
- form request submission,
- high-risk domain command execution,
- policies for gates, authorization policies, hidden model fields and audit
  events.

Use it for Laravel business apps, portals, service platforms and websites where
routes, jobs and policies can be mapped into agent capabilities.

## `django/agent-manifest.json`

This manifest represents a Django app.

It contains:

- URL, public model and form catalogs,
- Django view or Django REST Framework binding patterns,
- public content search,
- form submission,
- high-risk workflow start through a task queue such as Celery,
- policies for Django permissions, DRF permission classes, staff routes and
  private model fields.

Use it for Django sites, portals, APIs and content-backed business apps.

## `rails/agent-manifest.json`

This manifest represents a Ruby on Rails app.

It contains:

- route, resource and policy catalogs,
- controller-based capabilities,
- public resource search,
- business request submission,
- high-risk domain actions through Active Job,
- policies for authorization frameworks and internal model attributes.

Use it for Rails business applications where controllers and jobs can become
agent-facing tools under policy control.

## `express-node/agent-manifest.json`

This manifest represents an Express/Node.js website or API.

It contains:

- route, public data and form catalogs,
- Express route and static binding patterns,
- public data search,
- contact submission,
- high-risk workflow triggering through a queue,
- policies for middleware auth, secrets, route internals and structured logs.

Use it for Node.js apps where a custom middleware or route registry can expose
agent-safe operations.

## `spring-boot/agent-manifest.json`

This manifest represents a Spring Boot app.

It contains:

- controller, public data and security policy catalogs,
- OpenAPI route placeholders,
- public data queries,
- business request submission,
- high-risk service command execution,
- policies for Spring Security roles, method security, actuator exposure and
  audit events.

Use it for Java enterprise applications where controllers, services and security
policies need to be reflected in agent capabilities.

## `aspnet-blazor/agent-manifest.json`

This manifest represents ASP.NET Blazor, either Blazor WebAssembly or Blazor
Server.

It contains:

- route, component and policy catalogs,
- static file serving for WebAssembly or minimal API serving for Server,
- app summary and public data query capabilities,
- workflow request submission,
- policies for claims, circuits, connection strings and audit logging.

Use it for Blazor frontends, internal apps with public surfaces and .NET apps
that expose minimal API agent tools.

## `aspnet-mvc/agent-manifest.json`

This manifest represents ASP.NET Core MVC or Razor Pages.

It contains:

- route, public data and form catalogs,
- MVC controller/action binding patterns,
- public site search,
- contact submission,
- high-risk business workflow start,
- policies for authorization attributes, antiforgery, model fields and request
  correlation.

Use it for .NET server-rendered applications where controller actions can be
mapped into explicit, governed agent capabilities.

## `static-html/agent-manifest.json`

This manifest represents a plain static HTML site.

It contains:

- page, service and policy catalogs,
- static discovery and LLM context files,
- low-risk site summary and content search,
- external or serverless form submission,
- policies for static-only public data and external audit handling.

Use it for brochure sites, documentation sites, landing pages and static
websites without a backend.

## Future Documentation To Add

Good next files for framework examples:

- `build-plugin.md` for generator integration.
- `routing-policy.md` for SPA fallback and server rewrite rules.
- `openapi.json` for route handlers, controllers or serverless functions.
- `mcp-server.example.json` for framework-specific MCP exposure.
- `auth-policy.json` for protected capabilities.
- `audit-middleware.md` for logging state-changing actions.
- `catalog-generation.md` for route, content and form catalogs.
