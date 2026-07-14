/**
 * Renders a clean, user-facing error page.
 *
 * NOTE: Error details (message, stack) are intentionally NOT included in the
 * HTML output. They are already written to server logs via console.error in
 * server.ts. Exposing internal error details in the browser response is a
 * security risk and was causing the "h3 swallowed SSR error" message to be
 * displayed directly to users in production.
 */
export function renderErrorPage(error?: unknown): string {
  const errorMsg = error instanceof Error ? error.message : typeof error === "string" ? error : "";
  const errorStack = error instanceof Error ? error.stack : "";
  const errorComment = errorMsg
    ? `\n<!-- \n=========================================\nERROR DETAILS (for debugging):\nMessage: ${errorMsg}\nStack:\n${errorStack}\n=========================================\n-->`
    : "";

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>This page didn't load · Fusion Shoe Zone</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      *, *::before, *::after { box-sizing: border-box; }
      body {
        font: 15px/1.5 system-ui, -apple-system, sans-serif;
        background: linear-gradient(135deg, #0f1b2d 0%, #0b3d3b 100%);
        color: #fff;
        display: grid;
        place-items: center;
        min-height: 100vh;
        margin: 0;
        padding: 1.5rem;
      }
      .card { max-width: 28rem; width: 100%; text-align: center; }
      .icon { font-size: 3rem; margin-bottom: 1rem; }
      h1 { font-size: 1.25rem; font-weight: 700; margin: 0 0 0.5rem; }
      p { color: rgba(255,255,255,0.65); margin: 0 0 2rem; font-size: 0.9375rem; }
      .actions { display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap; }
      a, button {
        padding: 0.625rem 1.25rem;
        border-radius: 9999px;
        font: inherit;
        font-weight: 600;
        font-size: 0.875rem;
        cursor: pointer;
        text-decoration: none;
        border: 1px solid transparent;
        transition: opacity 0.15s, transform 0.15s;
      }
      a:hover, button:hover { opacity: 0.85; transform: scale(1.03); }
      .primary { background: #ff8a00; color: #fff; }
      .secondary { background: transparent; color: #fff; border-color: rgba(255,255,255,0.35); }
    </style>
  </head>
  <body>
    <div class="card">
      <div class="icon">⚡</div>
      <h1>This page didn't load</h1>
      <p>Something went wrong on our end. You can try refreshing or head back home.</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">Try again</button>
        <a class="secondary" href="/">Go home</a>
      </div>
    </div>${errorComment}
  </body>
</html>`;
}
