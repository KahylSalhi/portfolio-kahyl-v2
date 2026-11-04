import type { MetaFunction } from "react-router";
import { PageIntro } from "../components/editorial/PageIntro";
import { PageLayout } from "../components/editorial/PageLayout";
import { Reveal } from "../components/editorial/Reveal";
import { profile } from "../data/profile";

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
          description="Un profil tourné vers l’informatique, les systèmes et les réseaux."
        />
        <Reveal>
          <section className="profile-statement" aria-labelledby="profile-title">
            <p className="eyebrow">En quelques mots</p>
            <h2 id="profile-title">{profile.headline}</h2>
            <p>{profile.professionalGoal}</p>
          </section>
        </Reveal>
        <section className="profile-topics" aria-labelledby="profile-topics-title">
          <p className="eyebrow">Centres d’intérêt évoqués</p>
          <h2 id="profile-topics-title">Apprendre en pratiquant.</h2>
          <ul className="editorial-list">
            <li>Systèmes et environnements Linux</li>
            <li>Réseaux et infrastructures</li>
            <li>Diagnostic et automatisation</li>
          </ul>
          <p className="editorial-note">
            Les anciens niveaux autoévalués ne sont pas repris comme niveaux de
            maîtrise.
          </p>
        </section>
      </main>
    </PageLayout>
  );
}
