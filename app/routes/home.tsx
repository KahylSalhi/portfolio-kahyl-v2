import type { MetaFunction } from "react-router";
import { Link } from "react-router";
import { HeroComposition } from "../components/editorial/HeroComposition";
import { PageLayout } from "../components/editorial/PageLayout";
import { Reveal } from "../components/editorial/Reveal";
import { SectionLink } from "../components/navigation/SectionLink";
import { profile } from "../data/profile";
import { projects } from "../data/projects";

const featuredProjects = projects
  .filter((project) => project.media?.length)
  .slice(0, 3);

export const meta: MetaFunction = () => [
  { title: "Kahyl Salhi — BTS SIO SISR" },
  {
    name: "description",
    content:
      "Portfolio de Kahyl Salhi, étudiant en BTS SIO option SISR, à la recherche d’une alternance en informatique.",
  },
];

export default function Home() {
  return (
    <PageLayout>
      <main className="home-page" id="contenu">
        <HeroComposition />

        <section
          className="home-profile"
          data-home-section="profile"
          aria-labelledby="home-profile-title"
        >
          <Reveal>
            <div className="home-profile__index mono">02 / Profil</div>
            <div className="home-profile__content">
              <p className="eyebrow">Une trajectoire en construction</p>
              <h2 id="home-profile-title">
                Une formation.
                <br />
                Un cap.
              </h2>
              <p className="home-profile__facts">{profile.headline}</p>
              <p className="home-profile__goal">{profile.professionalGoal}</p>
              <SectionLink href="/profil">Découvrir mon profil</SectionLink>
            </div>
          </Reveal>
        </section>

        <section
          className="home-systems"
          data-home-section="systems"
          aria-labelledby="home-systems-title"
        >
          <Reveal>
            <div className="home-systems__index mono">03 / Systèmes &amp; réseaux</div>
            <div className="home-systems__content">
              <p className="eyebrow">Un terrain d’apprentissage</p>
              <h2 id="home-systems-title">
                Systèmes
                <br />
                <span>&amp; réseaux.</span>
              </h2>
              <p>
                Des sujets documentés autour de scripts Bash, d’une simulation
                RIP et de prototypes web.
              </p>
              <div className="home-systems__tags mono" aria-label="Thèmes des projets">
                <span>Bash</span>
                <span>RIP v2</span>
                <span>Interfaces web</span>
              </div>
              <SectionLink href="/projets" variant="light">
                Explorer les projets
              </SectionLink>
            </div>
            <div className="home-systems__mark" aria-hidden="true">
              <span>SYS</span>
              <span className="home-systems__mark-dot">/</span>
              <span>NET</span>
            </div>
          </Reveal>
        </section>

        <section
          className="home-projects"
          data-home-section="projects"
          aria-labelledby="home-projects-title"
        >
          <Reveal>
            <div className="home-projects__heading">
              <p className="eyebrow">04 / Études de cas</p>
              <h2 id="home-projects-title">
                Projets
                <br />
                choisis<span>.</span>
              </h2>
              <p>
                Une sélection issue des projets documentés, présentés avec
                leurs limites et leur contexte.
              </p>
            </div>

            <div className="home-projects__grid">
              {featuredProjects.map((project, index) => {
                const image = project.media?.[0];
                if (!image) return null;

                return (
                  <Link
                    className={`home-project home-project--${index + 1}`}
                    key={project.slug}
                    to={`/projets/${project.slug}`}
                  >
                    <span className="home-project__index mono">
                      0{index + 1} / {project.statusLabel}
                    </span>
                    <figure className="home-project__figure">
                      <img
                        alt={image.alt}
                        decoding="async"
                        loading="lazy"
                        src={image.src}
                      />
                      <figcaption className="home-project__caption mono">
                        {image.caption}
                      </figcaption>
                    </figure>
                    <span className="home-project__details">
                      <span>
                        <span className="home-project__title">{project.title}</span>
                        <span className="home-project__summary">
                          {project.summary}
                        </span>
                      </span>
                      <span className="home-project__arrow" aria-hidden="true">
                        ↗
                      </span>
                    </span>
                  </Link>
                );
              })}
            </div>

            <div className="home-projects__footer">
              <span className="mono">Sélection / 03—07</span>
              <SectionLink href="/projets">Voir les sept projets</SectionLink>
            </div>
          </Reveal>
        </section>

        <section
          className="home-contact"
          data-home-section="contact"
          aria-labelledby="home-contact-title"
        >
          <Reveal>
            <p className="eyebrow">05 / Et après ?</p>
            <h2 id="home-contact-title">
              Parlons de
              <br />
              la suite<span>.</span>
            </h2>
            <p>{profile.professionalGoal}</p>
            <SectionLink href="/contact">Me contacter</SectionLink>
          </Reveal>
        </section>
      </main>
    </PageLayout>
  );
}
