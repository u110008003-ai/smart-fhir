# SMART FHIR Launchpad

A standalone SMART on FHIR app built with `client-js` and Next.js.

## What it does

- launches against a SMART sandbox or EHR-provided `iss`
- completes the SMART OAuth callback
- reads `Patient`, `Encounter`, and recent `Observation` resources
- renders a clean clinician-facing workspace

## Routes

- `/` launch page
- `/callback` SMART redirect URI
- `/app` patient workspace

## Environment

```env
NEXT_PUBLIC_SMART_CLIENT_ID=your-smart-client-id
NEXT_PUBLIC_SMART_FHIR_BASE_URL=https://launch.smarthealthit.org/v/r4/fhir
NEXT_PUBLIC_SMART_SCOPE=launch/patient openid fhirUser patient/*.read user/*.read
NEXT_PUBLIC_SMART_REDIRECT_PATH=/callback
```

## Local development

```bash
npm install
npm run dev
```
