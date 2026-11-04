export function NetworkDiagram() {
  return (
    <figure className="network-diagram">
      <img
        className="network-diagram__drawing"
        src="/assets/images/network-scene-fallback.svg"
        alt="Schéma abstrait de plusieurs équipements reliés dans un réseau."
        width="520"
        height="360"
      />
      <figcaption className="network-diagram__caption">
        <span>01 — INFRASTRUCTURE</span>
        <span>Étudier les liens, pas seulement les machines.</span>
      </figcaption>
    </figure>
  );
}
