import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Group, Quaternion, Vector3 } from "three";
import type { NetworkNodeId } from "./networkSceneData";
import { networkNodes } from "./networkSceneData";

type NetworkSceneCanvasProps = {
  selectedNode: NetworkNodeId;
  onNodeSelect: (node: NetworkNodeId) => void;
  onReady: () => void;
};

const auxiliaryNodes = [
  { position: [-1.55, 0.95, -0.8] as const, color: "#315bff", radius: 0.11 },
  { position: [1.55, 0.8, 0.65] as const, color: "#ff7049", radius: 0.075 },
  { position: [-0.75, -1.15, 0.85] as const, color: "#315bff", radius: 0.09 },
  { position: [1.55, -1.15, -0.85] as const, color: "#f5f3ee", radius: 0.13 },
  { position: [-0.25, 1.5, -1.1] as const, color: "#315bff", radius: 0.06 },
  { position: [-1.8, -0.85, -0.65] as const, color: "#ff7049", radius: 0.07 },
];

const connections = [
  { from: [-1.55, 0.95, -0.8], to: [0, 0.65, 0], color: "#315bff" },
  { from: [1.55, 0.8, 0.65], to: [0, 0.65, 0], color: "#ff7049" },
  { from: [0, 0.65, 0], to: [-1.25, -0.2, 0.15], color: "#315bff" },
  { from: [0, 0.65, 0], to: [1.2, -0.45, -0.15], color: "#315bff" },
  { from: [-1.25, -0.2, 0.15], to: [-0.75, -1.15, 0.85], color: "#315bff" },
  { from: [1.2, -0.45, -0.15], to: [1.55, -1.15, -0.85], color: "#f5f3ee" },
  { from: [-1.25, -0.2, 0.15], to: [1.2, -0.45, -0.15], color: "#315bff" },
  { from: [-0.25, 1.5, -1.1], to: [0, 0.65, 0], color: "#315bff" },
  { from: [-1.8, -0.85, -0.65], to: [-1.25, -0.2, 0.15], color: "#ff7049" },
  { from: [1.55, 0.8, 0.65], to: [1.2, -0.45, -0.15], color: "#315bff" },
];

function Connection({
  from,
  to,
  color,
}: {
  from: readonly number[];
  to: readonly number[];
  color: string;
}) {
  const start = useMemo(
    () => new Vector3(from[0], from[1], from[2]),
    [from],
  );
  const end = useMemo(() => new Vector3(to[0], to[1], to[2]), [to]);
  const direction = useMemo(() => end.clone().sub(start), [end, start]);
  const quaternion = useMemo(
    () =>
      new Quaternion().setFromUnitVectors(
        new Vector3(0, 1, 0),
        direction.clone().normalize(),
      ),
    [direction],
  );
  const midpoint = useMemo(() => start.clone().add(end).multiplyScalar(0.5), [
    end,
    start,
  ]);

  return (
    <mesh position={midpoint} quaternion={quaternion}>
      <cylinderGeometry args={[0.012, 0.012, direction.length(), 8]} />
      <meshBasicMaterial color={color} transparent opacity={color === "#315bff" ? 0.78 : 0.46} />
    </mesh>
  );
}

function FloatingNode({
  position,
  radius,
  color,
  phase,
  selected = false,
  onClick,
}: {
  position: readonly [number, number, number];
  radius: number;
  color: string;
  phase: number;
  selected?: boolean;
  onClick?: () => void;
}) {
  const group = useRef<Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const time = state.clock.elapsedTime * 0.28 + phase;
    group.current.position.set(
      position[0] + Math.sin(time) * 0.035,
      position[1] + Math.sin(time * 0.72) * 0.055,
      position[2] + Math.cos(time * 0.8) * 0.065,
    );
  });

  return (
    <group ref={group} position={position}>
      <mesh
        onClick={(event) => {
          event.stopPropagation();
          onClick?.();
        }}
      >
        <sphereGeometry args={[radius, 28, 24]} />
        <meshStandardMaterial
          color={color}
          emissive={selected ? color : "#315bff"}
          emissiveIntensity={selected ? 0.11 : 0.035}
          metalness={0.28}
          roughness={0.3}
        />
        {selected ? (
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[radius * 1.65, 0.009, 8, 40]} />
            <meshBasicMaterial color="#ff7049" transparent opacity={0.82} />
          </mesh>
        ) : null}
      </mesh>
    </group>
  );
}

function NetworkGraph({
  selectedNode,
  onNodeSelect,
}: Pick<NetworkSceneCanvasProps, "selectedNode" | "onNodeSelect">) {
  const group = useRef<Group>(null);
  const pointer = useThree((state) => state.pointer);

  useFrame((state, delta) => {
    if (!group.current) return;

    const timeStep = Math.min(delta, 0.05);
    group.current.rotation.y += timeStep * 0.035;
    group.current.rotation.x +=
      (Math.sin(state.clock.elapsedTime * 0.16) * 0.025 +
        pointer.y * 0.035 -
        group.current.rotation.x) *
      Math.min(timeStep, 0.04);
    group.current.rotation.z +=
      (pointer.x * 0.025 - group.current.rotation.z) *
      Math.min(timeStep, 0.04);
  });

  return (
    <group ref={group}>
      {connections.map((connection, index) => (
        <Connection key={index} {...connection} />
      ))}
      {auxiliaryNodes.map((node, index) => (
        <FloatingNode
          key={`auxiliary-${index}`}
          {...node}
          phase={index * 0.8}
        />
      ))}
      {networkNodes.map((node, index) => (
        <FloatingNode
          key={node.id}
          position={node.position}
          radius={node.radius}
          color={node.color}
          phase={index * 1.4}
          selected={node.id === selectedNode}
          onClick={() => onNodeSelect(node.id)}
        />
      ))}
    </group>
  );
}

function ReadySignal({ onReady }: { onReady: () => void }) {
  const gl = useThree((state) => state.gl);

  useEffect(() => {
    onReady();
  }, [gl, onReady]);

  return null;
}

export default function NetworkSceneCanvas({
  selectedNode,
  onNodeSelect,
  onReady,
}: NetworkSceneCanvasProps) {
  return (
    <Canvas
      aria-hidden="true"
      camera={{ position: [0, 0, 5.7], fov: 38 }}
      className="network-scene-canvas"
      dpr={[1, 1.4]}
      gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
    >
      <ambientLight intensity={1.35} />
      <directionalLight position={[3, 4, 5]} intensity={2} />
      <pointLight
        color="#315bff"
        decay={2}
        distance={8}
        intensity={3.5}
        position={[-3, 2, 3]}
      />
      <NetworkGraph
        selectedNode={selectedNode}
        onNodeSelect={onNodeSelect}
      />
      <ReadySignal onReady={onReady} />
    </Canvas>
  );
}
