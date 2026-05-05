import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";

import type { Route } from "./+types/root";
import { Toaster } from "./components/ui/toaster/toaster";
import colorSchemeApi from "@dazl/color-scheme/client?url";

import "./styles/reset.css";
import "./styles/global.css";
import "./styles/tokens/keyframes.css";
import "./styles/tokens/animations.css";
import "./styles/tokens/colors.css";
import "./styles/tokens/decorations.css";
import "./styles/tokens/spacings.css";
import "./styles/tokens/typography.css";
import "./styles/theme.css";
import { useColorScheme } from "@dazl/color-scheme/react";
import favicon from "/logo.png";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "icon",
    href: favicon,
    type: "image/png",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const { rootCssClass, resolvedScheme } = useColorScheme();
  return (
    <html lang="en" suppressHydrationWarning className={rootCssClass} style={{ colorScheme: resolvedScheme }}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://hicrossseeds.com" />
        <Meta />
        <script src={colorSchemeApi}></script>
        <Links />
      </head>
      <body>
        {children}
        <Toaster />
        <ScrollRestoration />
        <Scripts />
        <script dangerouslySetInnerHTML={{ __html: `(function(){var isMobile=function(){return window.innerWidth<768;};var open=false;var btn=document.createElement('button');btn.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>';function posBtn(){btn.style.cssText='position:fixed;bottom:20px;right:20px;width:56px;height:56px;border-radius:50%;background:#10b981;color:white;border:none;cursor:pointer;z-index:10000;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 16px rgba(0,0,0,.2)';}posBtn();var frame=document.createElement('iframe');frame.src='https://adcdae85-0978-46e0-81ee-489fdb637f78-00-3d8h8y23gvwfo.sisko.replit.dev/widget/6';frame.allow='microphone';frame.style.outline='none';function applyPos(){if(isMobile()){frame.style.cssText='position:fixed;bottom:0;left:0;right:0;width:100%;height:90vh;border:none;outline:none;border-radius:16px 16px 0 0;box-shadow:0 -8px 32px rgba(0,0,0,.18);z-index:9999;display:block;';}else{frame.style.cssText='position:fixed;bottom:88px;left:auto;right:20px;width:400px;height:600px;border:none;outline:none;border-radius:16px;box-shadow:0 25px 50px rgba(0,0,0,.15);z-index:9999;display:block;';}}frame.style.display='none';function setOpen(val){open=val;if(open){applyPos();}else{frame.style.display='none';}btn.style.display=open&&isMobile()?'none':'flex';}btn.onclick=function(){setOpen(!open);};window.addEventListener('resize',function(){if(open)applyPos();posBtn();if(open)btn.style.display=open&&isMobile()?'none':'flex';});window.addEventListener('message',function(e){if(!e.data||!e.data.type)return;if(e.data.type==='chatngage:close')setOpen(false);if(e.data.type==='chatngage:minimize')setOpen(false);if(e.data.type==='chatngage:restore')setOpen(true);if(e.data.type==='chatngage:expand'){frame.style.width='100vw';frame.style.height='100vh';frame.style.bottom='0';frame.style.right='0';frame.style.borderRadius='0';}});document.body.appendChild(frame);document.body.appendChild(btn);})();` }} />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main>
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre>
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
