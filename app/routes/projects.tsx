import type { MetaFunction } from "react-router";
import { Link } from "react-router";
import { PageIntro } from "../components/editorial/PageIntro";
import { PageLayout } from "../components/editorial/PageLayout";
import { Reveal } from "../components/editorial/Reveal";
import { projects } from "../data/projects";

export const meta: MetaFunction = () => [
  { title: "Projets — Kahyl Salhi" },
  {
    name: "description",
    content:
      "Sept projets de formation autour des systèmes, des réseaux et du développement.",
  },
];

export default function Projects() {
  return (
    <PageLayout>
      <main className="page-content" id="contenu">
        <PageIntro
          index="01"
          title="Des idées mises à l’épreuve."
          description="Études de cas issues du portfolio précédent. Les démonstrations, simulations et informations à confirmer sont signalées comme telles."
        />
        <ol className="project-index">
          {projects.map((project, index) => (
            <li className="project-index__item" key={project.slug}>
              <Reveal>
                <Link
                  className={`project-card${project.media?.[0] ? " project-card--has-preview" : ""}`}
                  to={`/projets/${project.slug}`}
                >
                  <span className="project-card__number mono">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="project-card__body">
                    <span className="project-card__title">{project.title}</span>
                    <span className="project-card__summary">
                      {project.summary}
                    </span>
                  </span>
                  <span className="project-card__status mono">
                    {project.statusLabel}
                  </span>
                  {project.media?.[0] ? (
                    <span
                      aria-hidden="true"
                      className="project-card__preview"
                    >
                      <img
                        alt=""
                        decoding="async"
                        loading="lazy"
                        src={project.media[0].src}
                      />
                    </span>
                  ) : null}
                  <span aria-hidden="true" className="project-card__arrow">
                    ↗
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ol>
        <p className="editorial-note">
          Les informations sont limitées aux éléments recensés. Les dates, rôles
          individuels et résultats non vérifiés ne sont pas extrapolés.
        </p>
      </main>
    </PageLayout>
  );
}
