# Privacy Guidance

AgentManifest should help agents act with less guessing and less unnecessary data collection.

## Data Minimization

Knowledge sources should expose only information intended for agent use. Action inputs should request only fields required for the selected capability.

## Consent

Consent should be specific, informed, and tied to a user-visible input summary. Sensitive or state-changing actions should not proceed based on vague or stale approval.

## Retention

Publishers should define retention expectations for submitted action data and audit records. Retention should be appropriate to the business purpose, legal requirements, and user expectations.

## User-Visible Summaries

Agents should show a concise summary before submitting data. The summary should include the selected capability, target site, important input fields, expected result, and any high-impact consequences.

## Authentication

Capabilities that depend on user identity, account data, orders, payments, bookings, subscriptions, or private content should require appropriate authentication.

## Logging

Logs should avoid unnecessary sensitive data. Where audit requires durable records, store structured summaries and references instead of raw private content when possible.

## Sensitive Data

Manifests should not expose private customer data, unpublished content, credentials, private endpoints, internal operational details, or regulated data. Protocol implementations should validate and protect sensitive inputs server-side.
