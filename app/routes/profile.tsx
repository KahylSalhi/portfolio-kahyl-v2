import type { MetaFunction } from "react-router";
import { PageIntro } from "../components/editorial/PageIntro";
import { PageLayout } from "../components/editorial/PageLayout";
import { Reveal } from "../components/editorial/Reveal";
import {
  documentedPractices,
  educationHistory,
  professionalExperiences,
  profile,
} from "../data/profile";
import { projects } from "../data/projects";

export const meta: MetaFunction = () => [
  { title: "Profil — Kahyl Salhi" },
  {
    name: "description",
    content: "Profil de Kahyl Salhi, étudiant en BTS SIO option SISR.",
  },
];

export default function Profile() {
  return (
    <PageLayout>
      <main className="page-content" id="contenu">
        <PageIntro
          index="02"
          title="Curieux des systèmes. Attentif aux connexions."
          description="Après un BAC STI2D option SIN puis une année de BUT Informatique, je poursuis mon parcours en deuxième année de BTS SIO SISR au CFA INSTA, à travers des projets concrets."
        />
        <Reveal>
          <section className="profile-statement" aria-labelledby="profile-title">
            <p className="eyebrow">Mon parcours</p>
            <h2 id="profile-title">{profile.headline}</h2>
            <p>{profile.professionalGoal}</p>
            <p>
              Les travaux présentés ici illustrent les sujets que j’ai abordés
              pendant mon parcours.
            </p>
          </section>
        </Reveal>
        <section
          className="profile-experiences"
          aria-labelledby="profile-experiences-title"
        >
          <div className="profile-experiences__heading">
            <p className="eyebrow">Parcours professionnel</p>
            <h2 id="profile-experiences-title">
              Expériences professionnelles
            </h2>
          </div>
          <ol
            className="profile-experiences__timeline"
            aria-label="Expériences professionnelles"
          >
            {professionalExperiences.map((experience, index) => (
              <li
                className={`profile-experience profile-experience--${experience.category}`}
                key={experience.id}
              >
                <span
                  className="profile-experiences__index mono"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Reveal>
                  <article aria-labelledby={`experience-${experience.id}`}>
                    <div className="profile-experience__meta">
                      <span className="mono">{experience.period}</span>
                      <span className="profile-experience__category mono">
                        {experience.category === "it"
                          ? "INFORMATIQUE"
                          : "AUTRE EXPÉRIENCE"}
                      </span>
                    </div>
                    <h3 id={`experience-${experience.id}`}>
                      {experience.role}
                    </h3>
                    <p className="profile-experience__employer">
                      {experience.employer}
                    </p>
                    <ul>
                      {experience.responsibilities.map((responsibility) => (
                        <li key={responsibility}>{responsibility}</li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </section>
        <section className="profile-topics" aria-labelledby="education-title">
          <p className="eyebrow">Formation</p>
          <h2 id="education-title">Un parcours tourné vers l’informatique.</h2>
          <ol className="school-timeline" aria-label="Parcours scolaire">
            {educationHistory.map((entry, index) => (
              <li key={entry.id}>
                <span className="school-timeline__index mono">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="eyebrow">
                    {entry.endDate
                      ? `${entry.startDate} — ${entry.endDate}`
                      : `Depuis ${entry.startDate}`}
                  </p>
                  <h2>{entry.title}</h2>
                  {entry.institution ? <p>{entry.institution}</p> : null}
                </div>
                <span className="school-timeline__meta mono">
                  {entry.status === "current"
                    ? "DEUXIÈME ANNÉE"
                    : "PARCOURS SUIVI"}
                </span>
              </li>
            ))}
          </ol>
        </section>
        <section
          className="profile-topics"
          aria-labelledby="profile-topics-title"
        >
          <p className="eyebrow">Exemples issus des projets</p>
          <h2 id="profile-topics-title">
            Pratiques documentées dans les projets.
          </h2>
          <ul className="editorial-list">
            {documentedPractices.map((practice) => (
              <li key={practice.id}>
                <strong>{practice.name}</strong>
                <p>{practice.description}</p>
                <p>
                  Fiches associées :{" "}
                  {practice.projectSlugs.map((slug, index) => {
                    const project = projects.find(
                      (candidate) => candidate.slug === slug,
                    );

                    return project ? (
                      <span key={project.slug}>
                        {index > 0 ? ", " : ""}
                        <a href={`/projets/${project.slug}`}>{project.title}</a>
                      </span>
                    ) : null;
                  })}
                </p>
              </li>
            ))}
          </ul>
          <p className="editorial-note">
            Ces exemples décrivent les sujets travaillés dans les projets ; ils
            ne constituent pas une autoévaluation de niveau.
          </p>
        </section>
      </main>
    </PageLayout>
  );
}
