import type { Config } from "@react-router/dev/config";

export default {
  ssr: false,
  prerender: [
    "/",
    "/projets",
    "/profil",
    "/veille-technologique",
    "/ecole",
    "/contact",
    "/projets/password-checker",
    "/projets/cisco-rip",
    "/projets/system-network-diagnostic",
    "/projets/network-monitor",
    "/projets/linux-diagnostic",
    "/projets/vigilflow",
    "/projets/bash-user-manager",
  ],
} satisfies Config;
