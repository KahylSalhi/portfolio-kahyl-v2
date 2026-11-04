import "@fontsource-variable/space-grotesk";
import "@fontsource-variable/inter";
import "@fontsource/ibm-plex-mono/400.css";
import "./styles/tokens.css";
import "./styles/global.css";
import "./styles/typography.css";

import { MotionConfig, motion } from "motion/react";
import type { ReactNode } from "react";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "react-router";
import { SiteNavigation } from "./components/navigation/SiteNavigation";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#F5F3EE" />
        <Meta />
        <Links />
      </head>
      <body>
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const { pathname } = useLocation();

  return (
    <>
      <a className="skip-link" href="#contenu">
        Aller au contenu
      </a>
      <SiteNavigation />
      <motion.div
        key={pathname}
        className="route-transition"
        initial={{ y: 8, opacity: 1 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
      >
        <Outlet />
      </motion.div>
      <footer className="site-footer page-shell">
        <span>© Kahyl Salhi</span>
        <a href="/">Accueil</a>
        <span className="mono">BTS SIO / SISR</span>
      </footer>
    </>
  );
}
