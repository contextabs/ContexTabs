# Ambient Context

StormHacks Chrome extension that adds an opt-in AI assistant beside common editable fields. Field detection runs locally; field contents and page context are sent to the API only after the user activates the widget.

## Prerequisites

- Node.js 20+
- pnpm 9+
- Gemini API key from Google AI Studio

## Start the API

```powershell
Copy-Item apps/api/.env.example apps/api/.env
# Set GEMINI_API_KEY in apps/api/.env
pnpm install
pnpm dev:api
```

The API listens on `http://127.0.0.1:8787`. It does not persist requests, page content, or model output.

## Start the extension

In another terminal:

```powershell
pnpm dev:extension
```

Load `apps/extension/build/chrome-mv3-dev` at `chrome://extensions` with Developer mode enabled. Grant the extension access to sites where you want the inline widget to appear; this broad access is required for automatic field detection. Chrome internal pages and the Chrome Web Store do not allow content-script injection.

Set `PLASMO_PUBLIC_API_URL` to the API origin before building if it is not `http://127.0.0.1:8787`. This value is public and must never contain an API key.

If pnpm reports ignored native build scripts, review `pnpm approve-builds` and allow only the required bundler/watch packages before running Plasmo.

## MVP behavior

- Detects text inputs, textareas, and contenteditable elements locally.
- Shows a small Grammarly-style button beside the focused editable field.
- Starts a request after an explicit manual click, or automatically after a completion signal in supported AI chat fields.
- Rewrites the user's intent into a stronger prompt and inserts that refined prompt into the field; the MVP does not answer or execute the request.
- On ChatGPT, Gemini, and Claude prompt fields, starts refinement after a short typing pause and shows a compact comparison only when the rewrite is materially useful. Further typing cancels the pending suggestion.
- On that explicit action, reads the active page plus readable text from up to 8 relevant open tabs; it considers tab titles, URLs, recency, and (when permitted) tab group names.
- Uses that evidence to enrich a prompt for a downstream LLM; it asks at most one clarification question and never answers or executes the original task.
- Stores saved research sessions and approved preferences in extension-local storage.
- Tab grouping is available only as an explicit action from a saved research session.

The API endpoint is unauthenticated for a local hackathon demo. Do not expose it publicly without adding authentication or a per-user token and abuse controls.
