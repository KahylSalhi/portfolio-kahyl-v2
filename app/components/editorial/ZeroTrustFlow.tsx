import { motion } from "motion/react";
import { useState } from "react";

const stages = [
  {
    label: "Demande",
    title: "Une ressource est demandée.",
    description:
      "Un utilisateur cherche à ouvrir une application ou un service. Être déjà connecté au réseau interne ne suffit pas à lui accorder l’accès.",
  },
  {
    label: "Identité",
    title: "L’identité est vérifiée.",
    description:
      "Le service d’identité vérifie le compte et peut exiger une authentification multifacteur (MFA) avant de poursuivre.",
  },
  {
    label: "Contrôles",
    title: "Les droits et le contexte sont contrôlés.",
    description:
      "La politique vérifie les autorisations demandées et l’état de l’appareil, puis limite l’accès à la ressource nécessaire.",
  },
  {
    label: "Décision",
    title: "La politique autorise ou refuse.",
    description:
      "La décision dépend des contrôles précédents. Un appareil non conforme entraîne ici un refus, même si l’identité a été vérifiée.",
  },
] as const;

export function ZeroTrustFlow() {
  const [activeStage, setActiveStage] = useState(0);
  const [deviceCompliant, setDeviceCompliant] = useState(false);
  const decision = deviceCompliant ? "autorisé" : "refusé";

  return (
    <div className="watch-flow">
      <div className="watch-flow__header">
        <p className="eyebrow">Parcours d’accès</p>
        <p className="mono">IDENTITÉ + CONTEXTE + POLITIQUE</p>
      </div>

      <ol className="watch-flow__steps" aria-label="Étapes de la décision d’accès">
        {stages.map((stage, index) => (
          <li key={stage.label}>
            <button
              aria-current={activeStage === index ? "step" : undefined}
              className={
                activeStage === index
                  ? "watch-flow__step watch-flow__step--active"
                  : "watch-flow__step"
              }
              onClick={() => setActiveStage(index)}
              type="button"
            >
              <span className="watch-flow__step-index mono">
                0{index + 1}
              </span>
              <span>{stage.label}</span>
            </button>
          </li>
        ))}
      </ol>

      <div className="watch-flow__detail" aria-live="polite" aria-atomic="true">
        <motion.div
          key={activeStage}
          initial={{ opacity: 1, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <p className="mono">ÉTAPE 0{activeStage + 1}</p>
          <h3>{stages[activeStage].title}</h3>
          <p>{stages[activeStage].description}</p>
          {activeStage === 2 ? (
            <button
              aria-pressed={deviceCompliant}
              className="watch-flow__device"
              onClick={() => setDeviceCompliant((compliant) => !compliant)}
              type="button"
            >
              <span>État de l’appareil</span>
              <strong>
                {deviceCompliant
                  ? "Conforme à la politique"
                  : "Non conforme — activer pour tester"}
              </strong>
            </button>
          ) : null}
          {activeStage === 3 ? (
            <p
              className={`watch-flow__decision watch-flow__decision--${decision}`}
            >
              <span className="mono">DÉCISION DE LA POLITIQUE</span>
              <strong>Accès {decision}</strong>
              <span>
                {deviceCompliant
                  ? "Identité vérifiée et appareil conforme."
                  : "L’identité est vérifiée, mais l’appareil ne respecte pas la politique."}
              </span>
            </p>
          ) : null}
        </motion.div>
      </div>

      <div className="watch-flow__controls">
        <button
          disabled={activeStage === 0}
          onClick={() => setActiveStage((stage) => Math.max(0, stage - 1))}
          type="button"
        >
          Étape précédente
        </button>
        <span className="mono">
          {String(activeStage + 1).padStart(2, "0")} / 04
        </span>
        <button
          disabled={activeStage === stages.length - 1}
          onClick={() =>
            setActiveStage((stage) => Math.min(stages.length - 1, stage + 1))
          }
          type="button"
        >
          Étape suivante
        </button>
      </div>
    </div>
  );
}
