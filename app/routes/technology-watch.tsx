import type { MetaFunction } from "react-router";
import { Link } from "react-router";
import { ZeroTrustFlow } from "../components/editorial/ZeroTrustFlow";
import { PageLayout } from "../components/editorial/PageLayout";
import { Reveal } from "../components/editorial/Reveal";
import {
  technologyNews,
  technologyReferences,
  technologyWatchFeeds,
} from "../data/technology-watch";

export const meta: MetaFunction = () => [
  { title: "Veille technologique — Zero Trust — Kahyl Salhi" },
  {
    name: "description",
    content:
      "Comprendre le modèle Zero Trust, ses principes d’accès et ses liens avec les infrastructures BTS SIO SISR.",
  },
];

const principles = [
  {
    number: "01",
    title: "Authentification multifacteur",
    label: "MFA",
    description:
      "La MFA associe au moins deux facteurs de catégories différentes, par exemple un secret connu et une validation sur un appareil. Elle réduit le risque lié à un mot de passe volé, sans supprimer tous les risques.",
  },
  {
    number: "02",
    title: "Moindre privilège",
    label: "DROITS",
    description:
      "Un compte reçoit uniquement les permissions nécessaires à sa tâche, sur les ressources concernées et pour la durée utile. Les droits doivent être réévalués lorsqu’ils ne sont plus nécessaires.",
  },
  {
    number: "03",
    title: "Segmentation et microsegmentation",
    label: "RÉSEAU",
    description:
      "La segmentation sépare des zones ou des usages. La microsegmentation applique des règles plus fines entre charges de travail ou ressources afin de limiter les déplacements latéraux après une compromission.",
  },
  {
    number: "04",
    title: "Identités et appareils",
    label: "CONTEXTE",
    description:
      "La politique prend en compte l’identité du compte et l’état de l’équipement : conformité, mises à jour ou mesures de protection. La décision porte sur une ressource précise, pas seulement sur une adresse réseau.",
  },
];

const benefits = [
  {
    title: "Ce que le modèle apporte",
    points: [
      "Réduit la confiance implicite liée au seul emplacement sur le réseau.",
      "Permet d’adapter les décisions aux identités, aux ressources et au contexte.",
      "Peut limiter l’impact d’un compte compromis grâce à des droits ciblés et à la segmentation.",
    ],
  },
  {
    title: "Ce qu’il faut anticiper",
    points: [
      "Nécessite des identités, des inventaires et des politiques d’accès bien administrés.",
      "Ajoute de la complexité d’intégration, de supervision et de support.",
      "Ne rend pas les erreurs de configuration, les comptes compromis ou les vulnérabilités impossibles.",
    ],
  },
];

export default function TechnologyWatch() {
  return (
    <PageLayout>
      <main className="watch-page" id="contenu">
        <header className="watch-hero">
          <div className="watch-hero__topline">
            <span>Veille technologique / BTS SIO SISR</span>
            <span className="mono">DOSSIER 01 — CYBERSÉCURITÉ</span>
          </div>
          <div className="watch-hero__body">
            <div>
              <p className="watch-hero__eyebrow">Accès aux infrastructures</p>
              <h1 id="watch-title">
                ZERO
                <br />
                TRUST<span>.</span>
              </h1>
              <p className="watch-hero__subtitle">
                Ne jamais faire confiance par défaut. Toujours vérifier.
              </p>
            </div>
            <p className="watch-hero__aside">
              Un modèle de sécurité centré sur les ressources, les identités et
              les décisions d’accès — pas seulement sur la frontière du réseau.
            </p>
          </div>
          <a className="watch-hero__scroll" href="#comprendre">
            <span className="mono">DÉFILER POUR EXPLORER</span>
            <span aria-hidden="true">↓</span>
          </a>
        </header>

        <div className="watch-content">
          <Reveal>
            <section
              className="watch-section watch-definition"
              id="comprendre"
              aria-labelledby="watch-definition-title"
            >
              <div className="watch-section__marker">
                <p className="eyebrow">01 / Le modèle</p>
                <span className="watch-section__symbol" aria-hidden="true">
                  ZT
                </span>
              </div>
              <div className="watch-section__content">
                <h2 id="watch-definition-title">Qu’est-ce que le Zero Trust&nbsp;?</h2>
                <p className="watch-lead">
                  « Ne jamais faire confiance par défaut » signifie qu’un accès
                  est vérifié selon une politique, même si la demande vient d’un
                  réseau interne.
                </p>
                <p>
                  Le Zero Trust n’est pas un produit unique ni une simple
                  configuration. C’est une façon de concevoir les accès autour
                  des utilisateurs, des équipements et des ressources : chaque
                  demande est évaluée avant d’ouvrir une session, avec des
                  autorisations limitées et un contexte pris en compte.
                </p>
                <aside className="watch-callout">
                  <span className="mono">À RETENIR</span>
                  <p>
                    Le Zero Trust complète la défense en profondeur. Il ne
                    remplace pas automatiquement un pare-feu, un VPN, la gestion
                    des correctifs ou les autres protections déjà en place.
                  </p>
                </aside>
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section className="watch-section watch-reasons" aria-labelledby="watch-reasons-title">
              <div className="watch-section__marker">
                <p className="eyebrow">02 / Le contexte</p>
                <span className="mono">POURQUOI MAINTENANT&nbsp;?</span>
              </div>
              <div className="watch-section__content">
                <h2 id="watch-reasons-title">
                  Les infrastructures dépassent le périmètre historique.
                </h2>
                <p>
                  Télétravail, appareils personnels (BYOD), services cloud et
                  ressources hébergées sur plusieurs sites multiplient les
                  points d’accès. Une connexion au réseau d’entreprise ne
                  prouve donc pas, à elle seule, qu’un utilisateur ou un
                  appareil devrait accéder à chaque service.
                </p>
                <p>
                  Le modèle répond à ce changement en vérifiant les demandes au
                  niveau des ressources et en appliquant des politiques
                  cohérentes. Il s’ajoute à une stratégie de défense en
                  profondeur plutôt que de supprimer les protections
                  périmétriques.
                </p>
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section className="watch-section watch-demo" aria-labelledby="watch-demo-title">
              <div className="watch-section__marker">
                <p className="eyebrow">03 / Démonstration</p>
                <span className="mono">INTERACTIVE — 4 ÉTAPES</span>
              </div>
              <div className="watch-section__content">
                <h2 id="watch-demo-title">Une décision, étape par étape.</h2>
                <p>
                  Parcours le schéma avec les boutons, le clavier ou l’écran
                  tactile. À l’étape des contrôles, change l’état de l’appareil
                  pour observer la décision de la politique.
                </p>
                <ZeroTrustFlow />
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section className="watch-principles" aria-labelledby="watch-principles-title">
              <div className="watch-principles__heading">
                <p className="eyebrow">04 / Les mécanismes</p>
                <h2 id="watch-principles-title">Quatre repères techniques.</h2>
              </div>
              <div className="watch-principles__grid">
                {principles.map((principle) => (
                  <article className="watch-principle" key={principle.number}>
                    <span className="watch-principle__label mono">
                      {principle.label}
                    </span>
                    <span className="watch-principle__number mono">
                      {principle.number}
                    </span>
                    <h3>{principle.title}</h3>
                    <p>{principle.description}</p>
                  </article>
                ))}
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section className="watch-section watch-balance" aria-labelledby="watch-balance-title">
              <div className="watch-section__marker">
                <p className="eyebrow">05 / Prendre du recul</p>
                <span className="mono">BÉNÉFICES & LIMITES</span>
              </div>
              <div className="watch-section__content">
                <h2 id="watch-balance-title">
                  Un cadre utile, pas une solution magique.
                </h2>
                <div className="watch-balance__grid">
                  {benefits.map((group) => (
                    <article
                      className="watch-balance__card"
                      key={group.title}
                    >
                      <h3>{group.title}</h3>
                      <ul>
                        {group.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section className="watch-section watch-bts" aria-labelledby="watch-bts-title">
              <div className="watch-section__marker">
                <p className="eyebrow">06 / Lien avec le BTS</p>
                <span className="mono">SISR — SYSTÈMES & RÉSEAUX</span>
              </div>
              <div className="watch-section__content">
                <h2 id="watch-bts-title">
                  Des notions à relier aux infrastructures.
                </h2>
                <ul className="watch-bts__list">
                  <li>
                    <strong>Configuration et routage Cisco</strong>
                    <p>
                      Comprendre les réseaux et leurs segments aide à raisonner
                      sur les flux. Le routage, seul, ne définit pas qui est
                      autorisé à accéder à une ressource.
                    </p>
                    <Link to="/projets/cisco-rip">Voir le projet Cisco RIP</Link>
                  </li>
                  <li>
                    <strong>Administration Linux et scripts Bash</strong>
                    <p>
                      La gestion des comptes, des droits et l’automatisation
                      font écho à l’administration des identités et au moindre
                      privilège, sans constituer à eux seuls une architecture
                      Zero Trust.
                    </p>
                    <Link to="/projets/bash-user-manager">
                      Voir le projet Bash
                    </Link>
                  </li>
                  <li>
                    <strong>Surveillance réseau</strong>
                    <p>
                      Observer la disponibilité complète les contrôles : la
                      supervision aide à repérer des événements, mais ne
                      remplace pas l’authentification ni l’autorisation.
                    </p>
                    <Link to="/projets/network-monitor">
                      Voir le projet de surveillance
                    </Link>
                  </li>
                </ul>
                <p className="watch-note">
                  Ces rapprochements sont conceptuels. Ils ne signifient pas
                  qu’une architecture Zero Trust a déjà été mise en place dans
                  ces projets.
                </p>
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section className="watch-sources" aria-labelledby="watch-sources-title">
              <div className="watch-sources__heading">
                <p className="eyebrow">07 / Documentation</p>
                <h2 id="watch-sources-title">Références de fond.</h2>
                <p>
                  Les dates et résumés ci-dessous correspondent aux pages de
                  publication officielles. Les enseignements sont reformulés.
                </p>
              </div>
              <ol className="watch-timeline">
                {technologyReferences.map((reference) => (
                  <li key={reference.id}>
                    <span className="watch-timeline__date mono">
                      {reference.publishedAt}
                    </span>
                    <article className="watch-reference">
                      <p className="watch-reference__organization mono">
                        {reference.organization}
                      </p>
                      <h3>{reference.title}</h3>
                      <p>{reference.summary}</p>
                      <aside>
                        <span className="mono">ENSEIGNEMENT TECHNIQUE</span>
                        <p>{reference.technicalTakeaway}</p>
                      </aside>
                      <a
                        href={reference.url}
                        rel="noreferrer"
                        target="_blank"
                      >
                        Consulter la source officielle
                        <span aria-hidden="true"> ↗</span>
                      </a>
                    </article>
                  </li>
                ))}
              </ol>
            </section>
          </Reveal>

          <section
            className="watch-evolution"
            aria-labelledby="watch-evolution-title"
          >
            <div className="watch-evolution__heading">
              <p className="eyebrow">08 / Publications sélectionnées</p>
              <h2 id="watch-evolution-title">
                L’évolution du Zero Trust en 2026
              </h2>
              <p>
                Une sélection de publications officielles. Leur présence ici
                ne signifie pas qu’elles ont déjà été lues ou analysées
                personnellement : aucun statut de lecture n’est renseigné.
              </p>
            </div>
            <ol className="watch-evolution__timeline">
              {technologyNews.map((publication, index) => (
                <li
                  className="watch-evolution__item"
                  key={publication.id}
                >
                  <time
                    className="watch-evolution__date mono"
                    dateTime={publication.publishedOn}
                  >
                    {publication.publishedAt}
                  </time>
                  <Reveal>
                    <article
                      className={`watch-evolution__card watch-evolution__card--${index % 2 === 0 ? "ivory" : "stone"}`}
                    >
                      <p className="watch-evolution__organization mono">
                        {publication.organization}
                      </p>
                      <p className="watch-evolution__status">
                        Publication sélectionnée · analyse personnelle à
                        renseigner
                      </p>
                      <h3>{publication.frenchTitle}</h3>
                      <p className="watch-evolution__official-title">
                        <span className="mono">TITRE OFFICIEL</span>
                        <span>{publication.officialTitle}</span>
                      </p>
                      <p>{publication.summary}</p>
                      <aside className="watch-evolution__takeaway">
                        <span className="mono">
                          NOUVEAUTÉ / REPÈRE TECHNIQUE
                        </span>
                        <p>{publication.technicalRecommendation}</p>
                      </aside>
                      <p className="watch-evolution__connection">
                        <span className="mono">LIEN AVEC LE BTS SIO SISR</span>
                        <span>{publication.sisrConnection}</span>
                      </p>
                      <div className="watch-evolution__questions">
                        <h4>Questions pour mon analyse</h4>
                        <ul>
                          {publication.analysisQuestions.map((question) => (
                            <li key={question}>{question}</li>
                          ))}
                        </ul>
                      </div>
                      <a
                        className="watch-evolution__source"
                        href={publication.url}
                        rel="noreferrer"
                        target="_blank"
                      >
                        Lire la publication officielle
                        <span aria-hidden="true"> ↗</span>
                      </a>
                    </article>
                  </Reveal>
                </li>
              ))}
            </ol>
          </section>

          <Reveal>
            <section className="watch-news" aria-labelledby="watch-news-title">
              <div>
                <p className="eyebrow">À suivre / Actualités de veille</p>
                <h2 id="watch-news-title">Un flux, pas une publication de référence.</h2>
              </div>
              {technologyWatchFeeds.map((feed) => (
                <article className="watch-news__card" key={feed.url}>
                  <p className="mono">{feed.organization}</p>
                  <h3>{feed.title}</h3>
                  <p>{feed.description}</p>
                  <a href={feed.url} rel="noreferrer" target="_blank">
                    Ouvrir les alertes CERT-FR
                    <span aria-hidden="true"> ↗</span>
                  </a>
                </article>
              ))}
            </section>
          </Reveal>

          <Reveal>
            <section className="watch-reflection" aria-labelledby="watch-reflection-title">
              <p className="eyebrow">09 / Bilan personnel</p>
              <h2 id="watch-reflection-title">
                Ce que cette veille m’apporte.
              </h2>
              <p className="watch-reflection__status">
                Trame à compléter après étude des sources
              </p>
              <p>
                Aucun ressenti ni conclusion personnelle n’est attribué ici.
                Cette section est réservée à une réflexion rédigée après
                lecture et mise en perspective des documents.
              </p>
              <ul>
                <li>Ce que je retiens du modèle et de ses mécanismes.</li>
                <li>Le lien que je fais avec les notions du BTS SIO SISR.</li>
                <li>Les limites ou questions que je souhaite approfondir.</li>
              </ul>
            </section>
          </Reveal>
        </div>
      </main>
    </PageLayout>
  );
}
