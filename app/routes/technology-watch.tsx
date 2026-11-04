import type { MetaFunction } from "react-router";
import { PageIntro } from "../components/editorial/PageIntro";
import { PageLayout } from "../components/editorial/PageLayout";

export const meta: MetaFunction = () => [
  { title: "Veille technologique — Kahyl Salhi" },
  {
    name: "description",
    content:
      "Une trame éditoriale pour organiser une veille technologique en BTS SIO SISR.",
  },
];

const watchTopics = [
  {
    number: "01",
    title: "Systèmes",
    description:
      "Évolutions des environnements Linux, de l’administration et de l’automatisation.",
  },
  {
    number: "02",
    title: "Réseaux",
    description:
      "Protocoles, infrastructures, outils de diagnostic et pratiques d’exploitation.",
  },
  {
    number: "03",
    title: "Cybersécurité",
    description:
      "Bonnes pratiques, menaces et mesures de protection à mettre en perspective.",
  },
];

export default function TechnologyWatch() {
  return (
    <PageLayout>
      <main className="page-content" id="contenu">
        <PageIntro
          index="03"
          title="Observer. Vérifier. Comprendre."
          description="Une trame de veille à construire autour des systèmes, des réseaux et de la cybersécurité, en lien avec le BTS SIO SISR."
        />
        <section className="watch-intro" aria-labelledby="watch-method-title">
          <p className="eyebrow">Méthode éditoriale</p>
          <h2 id="watch-method-title">
            Une source, un contexte, un regard.
          </h2>
          <ol className="watch-method">
            <li>Identifier la source et sa date de publication.</li>
            <li>Résumer l’information sans la sortir de son contexte.</li>
            <li>
              Relier le sujet aux systèmes, aux réseaux ou à la sécurité.
            </li>
            <li>Noter les questions qui restent à vérifier.</li>
          </ol>
        </section>
        <section className="watch-topics" aria-labelledby="watch-topics-title">
          <p className="eyebrow">Pistes de sujets</p>
          <h2 id="watch-topics-title">Des thèmes pour commencer.</h2>
          <ol className="watch-topic-list">
            {watchTopics.map((topic) => (
              <li key={topic.number}>
                <span className="mono">{topic.number}</span>
                <div>
                  <h3>{topic.title}</h3>
                  <p>{topic.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="editorial-note">
            Aucune recherche personnelle ni publication de veille n’est
            présentée comme déjà réalisée. Les sources et observations seront
            ajoutées après validation.
          </p>
        </section>
      </main>
    </PageLayout>
  );
}
