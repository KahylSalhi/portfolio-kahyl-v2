import type { MetaFunction } from "react-router";
import { PageIntro } from "../components/editorial/PageIntro";
import { PageLayout } from "../components/editorial/PageLayout";

export const meta: MetaFunction = () => [
  { title: "École et parcours — Kahyl Salhi" },
  {
    name: "description",
    content:
      "Parcours scolaire de Kahyl Salhi : BTS SIO option SISR et informations à confirmer.",
  },
];

export default function School() {
  return (
    <PageLayout>
      <main className="page-content" id="contenu">
        <PageIntro
          index="04"
          title="Un parcours en construction."
          description="Les informations affichées ici se limitent à ce qui est confirmé. Les détails manquants sont signalés plutôt que déduits."
        />
        <ol className="school-timeline">
          <li>
            <span className="school-timeline__index mono">01</span>
            <div>
              <p className="eyebrow">Formation confirmée</p>
              <h2>BTS Services Informatiques aux Organisations</h2>
              <p>Option SISR — Solutions d’infrastructure, systèmes et réseaux.</p>
            </div>
            <span className="school-timeline__pending mono">
              DATES À CONFIRMER
            </span>
          </li>
          <li>
            <span className="school-timeline__index mono">02</span>
            <div>
              <p className="eyebrow">Information à compléter</p>
              <h2>Établissement et parcours antérieur</h2>
              <p>
                Le nom de l’établissement, les périodes et les précisions sur
                les formations précédentes ne sont pas publiés avant
                confirmation.
              </p>
            </div>
            <span className="school-timeline__pending mono">
              EN ATTENTE DE CONFIRMATION
            </span>
          </li>
        </ol>
      </main>
    </PageLayout>
  );
}
