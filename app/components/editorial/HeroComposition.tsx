import { SectionLink } from "../navigation/SectionLink";
import { profile } from "../../data/profile";
import { NetworkSceneLoader } from "../../features/network-scene/NetworkSceneLoader";

export function HeroComposition() {
  return (
    <section
      className="hero home-hero"
      data-home-section="hero"
      id="accueil"
      aria-labelledby="hero-title"
    >
      <div className="home-hero__surface">
        <div className="home-hero__topline mono">
          <span>Portfolio — BTS SIO / SISR</span>
          <span>01 — 05 / Accueil</span>
        </div>

        <div className="home-hero__scene">
          <NetworkSceneLoader />
        </div>

        <div className="home-hero__content">
          <p className="home-hero__identity">
            {profile.displayName}
            <span aria-hidden="true"> / </span>
            <span>{profile.headline}</span>
          </p>
          <h1 className="home-hero__title" id="hero-title">
            <span>Building</span>
            <span className="home-hero__title-second">
              Connections<span className="home-hero__period">.</span>
            </span>
          </h1>
          <p className="home-hero__goal">{profile.professionalGoal}</p>
          <div className="home-hero__actions">
            <SectionLink
              className="home-hero__primary"
              href="/projets"
              variant="light"
            >
              Voir les projets
            </SectionLink>
            <SectionLink
              className="home-hero__secondary"
              href="/contact"
              variant="light"
            >
              Me contacter
            </SectionLink>
          </div>
        </div>

        <div className="home-hero__bottom mono">
          <span>Des systèmes aux réseaux</span>
          <span aria-hidden="true">Scroll pour explorer ↓</span>
        </div>
      </div>
    </section>
  );
}
