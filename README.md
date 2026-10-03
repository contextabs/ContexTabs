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
- Sends the request only after the user opens the widget and presses **Improve**.
- Captures the active page's readable text and open-tab titles/URLs on that explicit action.
- Asks at most one clarification question, evaluates the answer, and performs at most one correction pass.
- Stores saved research sessions and approved preferences in extension-local storage.
- This MVP never moves tabs; grouping is a later enhancement.

The API endpoint is unauthenticated for a local hackathon demo. Do not expose it publicly without adding authentication or a per-user token and abuse controls.
