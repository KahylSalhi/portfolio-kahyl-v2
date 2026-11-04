export const networkNodes = [
  {
    id: "router",
    label: "Routeur",
    description:
      "Achemine les paquets entre différents réseaux à partir des adresses IP.",
    position: [0, 0.65, 0],
    color: "#315bff",
    radius: 0.19,
  },
  {
    id: "switch",
    label: "Switch",
    description:
      "Relie les équipements d’un même réseau local et achemine les trames.",
    position: [-1.25, -0.2, 0.15],
    color: "#ff7049",
    radius: 0.16,
  },
  {
    id: "server",
    label: "Serveur",
    description:
      "Fournit des services ou des ressources à d’autres équipements du réseau.",
    position: [1.2, -0.45, -0.15],
    color: "#f5f3ee",
    radius: 0.22,
  },
] as const;

export type NetworkNodeId = (typeof networkNodes)[number]["id"];

export function isNetworkNodeId(value: string): value is NetworkNodeId {
  return networkNodes.some((node) => node.id === value);
}
