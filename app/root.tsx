import "./styles/style.css";
import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Blog Remix</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <div>
      <header className="h-10">
        <Link to="/">
          <h1 className="text-[50px] text-amber-700">miduRemix 🎮</h1>
        </Link>
      </header>
      <Outlet />
      <footer className="text-white mt-40">© Copyright 2024</footer>
    </div>
  );
}
