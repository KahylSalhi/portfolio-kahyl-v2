import {
  Component,
  Suspense,
  lazy,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import type { ReactNode } from "react";
import { useReducedMotion } from "motion/react";
import { NetworkSceneFallback } from "./NetworkSceneFallback";
import {
  isNetworkNodeId,
  networkNodes,
  type NetworkNodeId,
} from "./networkSceneData";

const NetworkSceneCanvas = lazy(() => import("./NetworkSceneCanvas"));

type SceneErrorBoundaryProps = {
  children: ReactNode;
  fallback: ReactNode;
  onFailure: () => void;
};

type SceneErrorBoundaryState = {
  hasError: boolean;
};

class SceneErrorBoundary extends Component<
  SceneErrorBoundaryProps,
  SceneErrorBoundaryState
> {
  state: SceneErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): SceneErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch() {
    this.props.onFailure();
  }

  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}

export function NetworkSceneLoader() {
  const reducedMotion = useReducedMotion();
  const observerTarget = useRef<HTMLDivElement>(null);
  const [isNearViewport, setIsNearViewport] = useState(false);
  const [sceneReady, setSceneReady] = useState(false);
  const [sceneFailed, setSceneFailed] = useState(false);
  const [clientReady, setClientReady] = useState(false);
  const [selectedNode, setSelectedNode] = useState<NetworkNodeId>("router");

  useEffect(() => setClientReady(true), []);

  useEffect(() => {
    if (reducedMotion !== false || isNearViewport) return;

    const target = observerTarget.current;
    if (!target) return;

    if (!("IntersectionObserver" in window)) {
      setIsNearViewport(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNearViewport(true);
          observer.disconnect();
        }
      },
      { rootMargin: "160px" },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [isNearViewport, reducedMotion]);

  const handleNodeSelect = useCallback((nodeId: string) => {
    if (isNetworkNodeId(nodeId)) setSelectedNode(nodeId);
  }, []);

  const handleSceneReady = useCallback(() => setSceneReady(true), []);
  const handleSceneFailure = useCallback(() => setSceneFailed(true), []);
  const selectedNodeInfo = networkNodes.find(
    (node) => node.id === selectedNode,
  );
  const sceneState = !clientReady
    ? "fallback"
    : reducedMotion === true
      ? "reduced-motion"
      : sceneFailed
        ? "unavailable"
      : sceneReady
        ? "ready"
        : isNearViewport
          ? "loading"
          : "fallback";

  return (
    <div
      className="network-scene"
      data-scene-state={sceneState}
      ref={observerTarget}
    >
      <div aria-hidden="true" className="network-scene__stage">
        {reducedMotion === false && isNearViewport && !sceneFailed ? (
          <SceneErrorBoundary
            fallback={<NetworkSceneFallback />}
            onFailure={handleSceneFailure}
          >
            <Suspense fallback={<NetworkSceneFallback />}>
              <NetworkSceneCanvas
                onNodeSelect={handleNodeSelect}
                onReady={handleSceneReady}
                selectedNode={selectedNode}
              />
            </Suspense>
          </SceneErrorBoundary>
        ) : (
          <NetworkSceneFallback />
        )}
      </div>
      <div
        aria-label="Équipements réseau"
        className="network-scene__controls"
        role="group"
      >
        {networkNodes.map((node) => (
          <button
            aria-pressed={selectedNode === node.id}
            className="network-scene__control"
            key={node.id}
            onClick={() => setSelectedNode(node.id)}
            type="button"
          >
            {node.label}
          </button>
        ))}
      </div>
      <p aria-atomic="true" aria-live="polite" className="network-scene__detail">
        <span className="network-scene__detail-label mono">
          {selectedNodeInfo?.label}
        </span>
        {selectedNodeInfo?.description}
      </p>
    </div>
  );
}
