import { NetworkDiagram } from "../../components/editorial/NetworkDiagram";

export function NetworkSceneFallback() {
  return (
    <div className="network-fallback" aria-label="Illustration réseau statique">
      <NetworkDiagram />
    </div>
  );
}
