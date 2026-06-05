# AgentManifest Examples

This directory contains draft AgentManifest examples for common website stacks,
CMS platforms, e-commerce systems and web frameworks.

The examples are intentionally structured for future documentation growth. Each
platform has its own folder and an `agent-manifest.json` file. Add platform
notes, implementation guides, generated OpenAPI files or MCP examples next to
the manifest as the specification matures.

## Directory Map

| Directory | Scope |
| --- | --- |
| `base/` | Default vendor-neutral manifest for a normal business website |
| `wordpress/` | WordPress core and WordPress commerce/plugin variants |
| `ecommerce/` | Standalone or hosted commerce platforms |
| `cms/` | Traditional and headless content management systems |
| `frameworks/` | Web frameworks and application stacks that can serve websites |

## Conventions

- `agentManifestVersion` is set to `0.1-draft`.
- URLs use `https://example.com` placeholders.
- `risk` uses `low`, `medium`, `high` or `critical`.
- `stateChange` indicates whether the capability changes business state.
- `requiresConsent` tells agents whether the user must confirm before execution.
- `platform.servingNotes` captures deployment-specific traps and best practices.
- `extensionPoints` lists future documents that can be added beside the manifest.

## Suggested Future Files Per Platform

- `README.md` with implementation steps.
- `openapi.json` for tool execution.
- `mcp-server.example.json` for MCP exposure.
- `llms.txt` and `llms-full.txt` for LLM-readable context.
- `catalog.example.json` for products, pages, services or content.
- `policy.example.json` for risk, consent and audit rules.
- `validation-report.example.json` for CI output.

