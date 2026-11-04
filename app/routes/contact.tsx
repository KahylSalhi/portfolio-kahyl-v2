import type { MetaFunction } from "react-router";
import { PageIntro } from "../components/editorial/PageIntro";
import { PageLayout } from "../components/editorial/PageLayout";
import { profile } from "../data/profile";
import { isPublishableContactChannel } from "../data/types";

const contactChannels = profile.contactChannels ?? [];

export const meta: MetaFunction = () => [
  { title: "Contact — Kahyl Salhi" },
  {
    name: "description",
    content: "Contacter Kahyl Salhi au sujet de son parcours et de ses projets.",
  },
];

export default function Contact() {
  const approvedChannels = contactChannels.filter(isPublishableContactChannel);

  return (
    <PageLayout>
      <main className="page-content contact-page" id="contenu">
        <PageIntro
          index="05"
          title="Parlons de la suite."
          description="Un échange autour de l’informatique, des projets et d’une recherche d’alternance."
        />
        {approvedChannels.length > 0 ? (
          <ul className="contact-channel-list">
            {approvedChannels.map((channel) => (
              <li key={channel.type}>
                <a
                  href={
                    channel.type === "email"
                      ? `mailto:${channel.value}`
                      : channel.value
                  }
                  rel={channel.type === "email" ? undefined : "noreferrer"}
                  target={channel.type === "email" ? undefined : "_blank"}
                >
                  {channel.type}
                  <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <section className="contact-pending" aria-label="Coordonnées">
            <p className="eyebrow">Coordonnées publiques</p>
            <h2>Les moyens de contact sont en attente de confirmation.</h2>
            <p>
              Aucun lien personnel n’est affiché tant que sa destination n’a
              pas été approuvée.
            </p>
          </section>
        )}
      </main>
    </PageLayout>
  );
}
