import type { MetaFunction } from "react-router";
import { Link, useLoaderData } from "react-router";
import { PageLayout } from "../components/editorial/PageLayout";
import { Reveal } from "../components/editorial/Reveal";
import { getProjectBySlug } from "../data/projects";

export async function loader({ params }: { params: { slug?: string } }) {
  return { project: getProjectBySlug(params.slug) };
}

export const meta: MetaFunction = ({ params }) => {
  const project = getProjectBySlug(params.slug);

  return [
    {
      title: project
        ? `${project.title} — Kahyl Salhi`
        : "Projet introuvable — Kahyl Salhi",
    },
    {
      name: "description",
      content: project?.summary ?? "Cette étude de cas n’existe pas.",
    },
  ];
};

export default function ProjectDetail() {
  const { project } = useLoaderData<typeof loader>();

  if (!project) {
    return (
      <PageLayout>
        <main className="page-content not-found" id="contenu">
          <p className="eyebrow">Projet / Introuvable</p>
          <h1>Cette étude de cas n’existe pas.</h1>
          <Link className="text-link" to="/projets">
            Retour aux projets <span aria-hidden="true">↗</span>
          </Link>
        </main>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <main className="page-content project-detail" id="contenu">
        <Link className="back-link" to="/projets">
          <span aria-hidden="true">←</span> Tous les projets
        </Link>
        <header className="project-detail__header">
          <p className="eyebrow">
            Étude de cas / {project.statusLabel}
          </p>
          <h1>{project.title}</h1>
          <p className="project-detail__summary">{project.summary}</p>
        </header>

        <div className="project-detail__meta">
          <span className="mono">Technologies documentées</span>
          <ul aria-label="Technologies" className="tag-list">
            {project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </div>

        {project.media?.length ? (
          <div
            aria-label="Visuels du projet"
            className="project-detail__gallery"
          >
            {project.media.map((image, index) => (
              <Reveal key={image.src}>
                <figure className="project-detail__figure">
                  <span className="project-detail__figure-index mono">
                    VISUEL / {String(index + 1).padStart(2, "0")}
                  </span>
                  <img
                    alt={image.alt}
                    decoding="async"
                    loading="lazy"
                    src={image.src}
                  />
                  <figcaption>{image.caption}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        ) : null}

        <div className="case-study">
          <Reveal>
            <section aria-labelledby="case-context">
              <p className="eyebrow">01 / Contexte</p>
              <h2 id="case-context">{project.caseStudy.context}</h2>
            </section>
          </Reveal>
          <Reveal>
            <section aria-labelledby="case-work">
              <p className="eyebrow">02 / Démarche documentée</p>
              <h2 className="visually-hidden" id="case-work">
                Démarche documentée
              </h2>
              <ul>
                {project.caseStudy.workPerformed.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </Reveal>
          <Reveal>
            <section aria-labelledby="case-objectives">
              <p className="eyebrow">03 / Intentions</p>
              <h2 className="visually-hidden" id="case-objectives">
                Intentions documentées
              </h2>
              <ul>
                {project.caseStudy.objectives.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </Reveal>
          <Reveal>
            <section aria-labelledby="case-results">
              <p className="eyebrow">04 / Résultats documentés</p>
              <h2 className="visually-hidden" id="case-results">
                Résultats documentés
              </h2>
              <ul>
                {project.results.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </Reveal>
          <Reveal>
            <section aria-labelledby="case-limitations">
              <p className="eyebrow">05 / Limites et informations à confirmer</p>
              <h2 className="visually-hidden" id="case-limitations">
                Limites et informations à confirmer
              </h2>
              <ul>
                {project.limitations.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </Reveal>
        </div>

        <Link className="text-link" to="/projets">
          Revenir aux sept projets <span aria-hidden="true">↗</span>
        </Link>
      </main>
    </PageLayout>
  );
}
