import type { MetaFunction } from "react-router";
import { PageIntro } from "../components/editorial/PageIntro";
import { PageLayout } from "../components/editorial/PageLayout";
import { documentedPractices } from "../data/profile";
import { projects } from "../data/projects";

export const meta: MetaFunction = () => [
  { title: "École et parcours — Kahyl Salhi" },
  {
    name: "description",
    content:
      "Kahyl Salhi, étudiant en deuxième année de BTS SIO option SISR au CFA INSTA.",
  },
];

export default function School() {
  return (
    <PageLayout>
      <main className="page-content" id="contenu">
        <PageIntro
          index="04"
          title="Mon école et ma formation."
          description="Je prépare un BTS SIO option SISR au CFA INSTA, où je suis actuellement en deuxième année."
        />
        <section className="school-identity" aria-labelledby="school-title">
          <img
            alt="Logo du CFA INSTA"
            className="school-identity__logo"
            height="388"
            src="/assets/images/school/cfa-insta-logo.png"
            width="597"
          />
          <div>
            <p className="eyebrow">Établissement actuel</p>
            <h2 id="school-title">CFA INSTA</h2>
            <p>
              J’y suis actuellement en deuxième année de BTS Services
              Informatiques aux Organisations, option SISR — Solutions
              d’infrastructure, systèmes et réseaux. Je recherche une alternance
              en informatique, notamment en systèmes, réseaux ou support
              informatique.
            </p>
          </div>
        </section>
        <section
          className="profile-topics"
          aria-labelledby="school-topics-title"
        >
          <p className="eyebrow">Thèmes visibles dans les projets</p>
          <h2 id="school-topics-title">Apprendre par la pratique.</h2>
          <p>
            Mes projets donnent à voir des travaux pratiques autour de
            l’administration système, du réseau et de la création d’outils.
            Cette sélection illustre mon travail personnel et ne prétend pas
            décrire le programme officiel complet du BTS.
          </p>
          <ul className="editorial-list">
            {documentedPractices.map((practice) => (
              <li key={practice.id}>
                <strong>{practice.name}</strong>
                <p>{practice.description}</p>
                <p>
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
        </section>
      </main>
    </PageLayout>
  );
}
