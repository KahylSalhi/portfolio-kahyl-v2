import type { MetaFunction } from "react-router";
import { Link } from "react-router";
import { PageLayout } from "../components/editorial/PageLayout";
import { Reveal } from "../components/editorial/Reveal";
import {
  approvedContactChannels,
  cvDocument,
  cvPublicPath,
} from "../data/contact";
import { profile } from "../data/profile";
import { isPublishableContactChannel } from "../data/types";

export const meta: MetaFunction = () => [
  { title: "Contact — Kahyl Salhi" },
  {
    name: "description",
    content:
      "Contacter Kahyl Salhi, étudiant en deuxième année de BTS SIO SISR au CFA INSTA, en recherche d’alternance informatique.",
  },
];

const channelDetails = [
  {
    type: "email" as const,
    title: "E-mail",
    description: "Pour échanger au sujet d’une opportunité ou d’un projet.",
  },
  {
    type: "github" as const,
    title: "GitHub",
    description: "Pour retrouver mes dépôts et projets.",
  },
  {
    type: "linkedin" as const,
    title: "LinkedIn",
    description: "Pour consulter mon profil professionnel.",
  },
];

export default function Contact() {
  const approvedChannels = approvedContactChannels.filter(
    isPublishableContactChannel,
  );
  const approvedCvDocument =
    cvDocument.approved === true &&
    cvDocument.filePresent === true &&
    cvDocument.publicPath === cvPublicPath
      ? cvDocument
      : undefined;

  return (
    <PageLayout>
      <main className="contact-page" id="contenu">
        <section className="contact-hero" aria-labelledby="contact-title">
          <div className="contact-hero__topline">
            <p className="mono">BTS SIO / SISR — CFA INSTA</p>
            <p className="mono">CONTACT / 06</p>
          </div>
          <div className="contact-hero__body">
            <div className="contact-hero__title-block">
              <p className="contact-hero__eyebrow">Ouvert aux opportunités</p>
              <h1 id="contact-title">
                LET'S
                <br />
                CONNECT<span>.</span>
              </h1>
              <p className="contact-hero__subtitle">
                Construisons la suite, ensemble.
              </p>
            </div>
            <div className="contact-hero__profile">
              <span className="contact-hero__index mono">01 — DISPONIBILITÉ</span>
              <h2>{profile.headline}</h2>
              <p>{profile.professionalGoal}</p>
              <p>
                Un intérêt particulier pour les systèmes, les réseaux et le
                support informatique.
              </p>
              <Link className="contact-hero__link" to="/projets">
                Découvrir les projets
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
          <div className="contact-hero__footer">
            <span className="mono">ALTERNANCE INFORMATIQUE</span>
            <a className="mono" href="#coordonnees">
              COORDONNÉES <span aria-hidden="true">↓</span>
            </a>
          </div>
          <span className="contact-hero__orbit" aria-hidden="true" />
        </section>

        <div className="contact-content" id="coordonnees">
          <Reveal>
            <section
              className="contact-channels"
              aria-labelledby="contact-channels-title"
            >
              <div className="contact-section-heading">
                <p className="eyebrow">02 / Restons en contact</p>
                <h2 id="contact-channels-title">
                  Le bon canal, au bon moment.
                </h2>
                <p>
                  Choisissez le canal qui vous convient pour échanger au sujet
                  d’une opportunité ou d’un projet.
                </p>
              </div>
              <ul className="contact-channel-cards">
                {channelDetails.map((channel, index) => {
                  const approvedChannel = approvedChannels.find(
                    (item) => item.type === channel.type,
                  );
                  const destination =
                    approvedChannel?.type === "email"
                      ? `mailto:${approvedChannel.value}`
                      : approvedChannel?.value;

                  return (
                    <li key={channel.type}>
                      {destination ? (
                        <a
                          className="contact-channel-card"
                          href={destination}
                          rel={approvedChannel?.type === "email" ? undefined : "noopener noreferrer"}
                          target={
                            approvedChannel?.type === "email"
                              ? undefined
                              : "_blank"
                          }
                        >
                          <span className="contact-channel-card__topline mono">
                            0{index + 1} / {channel.type}
                          </span>
                          <strong>{channel.title}</strong>
                          <span className="contact-channel-card__description">
                            {approvedChannel?.type === "email"
                              ? approvedChannel.value
                              : approvedChannel?.value}
                          </span>
                          <span
                            className="contact-channel-card__status"
                            aria-hidden="true"
                          >
                            {approvedChannel?.type === "email"
                              ? "Écrire un e-mail ↗"
                              : "Ouvrir le profil ↗"}
                          </span>
                        </a>
                      ) : (
                        <div className="contact-channel-card">
                          <span className="contact-channel-card__topline mono">
                            0{index + 1} / {channel.type}
                          </span>
                          <strong>{channel.title}</strong>
                          <span className="contact-channel-card__description">
                            {channel.description}
                          </span>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </section>
          </Reveal>

          <Reveal>
            <section className="contact-cv" aria-labelledby="contact-cv-title">
              <div>
                <p className="eyebrow">03 / Dossier de candidature</p>
                <h2 id="contact-cv-title">Mon CV</h2>
                <p>
                  Consultez et téléchargez mon CV au format PDF.
                </p>
              </div>
              {approvedCvDocument ? (
                <a
                  className="contact-cv__link"
                  href={approvedCvDocument.publicPath}
                  download
                >
                  Télécharger mon CV
                  <span aria-hidden="true">↓</span>
                </a>
              ) : (
                <span className="contact-cv__status mono">
                  EN ATTENTE D’UN PDF VALIDÉ
                </span>
              )}
            </section>
          </Reveal>
        </div>
      </main>
    </PageLayout>
  );
}
