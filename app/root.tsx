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
        <script dangerouslySetInnerHTML={{ __html: `(function(){var isMobile=function(){return window.innerWidth<768;};var open=false;var btn=document.createElement('button');btn.innerHTML='💬';function posBtn(){btn.style.cssText='position:fixed;bottom:20px;right:20px;width:56px;height:56px;border-radius:50%;background:#10b981;color:white;border:none;cursor:pointer;z-index:10000;font-size:22px;box-shadow:0 4px 16px rgba(0,0,0,.2)';}posBtn();var frame=document.createElement('iframe');frame.src='https://chatngage.com/widget/6';frame.allow='microphone';function applyPos(){if(isMobile()){frame.style.position='fixed';frame.style.bottom='0';frame.style.left='0';frame.style.right='0';frame.style.width='100%';frame.style.height='90vh';frame.style.border='none';frame.style.borderRadius='16px 16px 0 0';frame.style.boxShadow='0 -8px 32px rgba(0,0,0,.18)';frame.style.zIndex='9999';}else{frame.style.position='fixed';frame.style.bottom='88px';frame.style.left='auto';frame.style.right='20px';frame.style.width='400px';frame.style.height='600px';frame.style.border='none';frame.style.borderRadius='16px';frame.style.boxShadow='0 25px 50px rgba(0,0,0,.15)';frame.style.zIndex='9999';}}frame.style.display='none';applyPos();function setOpen(val){open=val;frame.style.display=open?'block':'none';btn.style.display=open&&isMobile()?'none':'flex';btn.style.alignItems='center';btn.style.justifyContent='center';}btn.onclick=function(){setOpen(!open);};window.addEventListener('resize',function(){applyPos();posBtn();if(open)btn.style.display=open&&isMobile()?'none':'flex';});window.addEventListener('message',function(e){if(e.data&&e.data.type==='chatngage:close')setOpen(false);});document.body.appendChild(frame);document.body.appendChild(btn);})();` }} />
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
