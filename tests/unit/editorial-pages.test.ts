import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { projects } from "../../app/data/projects";
import {
  documentedPractices,
  educationHistory,
  professionalExperiences,
  profile as profileData,
} from "../../app/data/profile";

const readRoute = (name: string) =>
  readFileSync(new URL(`../../app/routes/${name}`, import.meta.url), "utf8");

describe("editorial page copy", () => {
  it("publishes only the owner-confirmed education details", () => {
    const school = readRoute("school.tsx");
    const profile = readRoute("profile.tsx");

    expect(educationHistory).toHaveLength(3);
    expect(educationHistory[0]).toMatchObject({
      title: "BAC STI2D — option SIN",
      startDate: "2022",
      endDate: "2023",
      status: "attended",
    });
    expect(educationHistory[1]).toMatchObject({
      title: "BUT Informatique — une année",
      startDate: "2023",
      endDate: "2024",
      status: "attended",
    });
    expect(educationHistory[2]).toMatchObject({
      title: "BTS SIO — option SISR",
      institution: "CFA INSTA",
      startDate: "2025",
      status: "current",
      description: expect.stringContaining("deuxième année"),
    });
    expect(educationHistory[2].endDate).toBeUndefined();
    expect(profile).toContain("Parcours scolaire");
    expect(profileData.headline).toContain("Étudiant en deuxième année");
    expect(profile).not.toContain("Diplôme obtenu");
    expect(school).toContain("CFA INSTA");
    expect(school).not.toContain("DATES ET ÉTABLISSEMENT À CONFIRMER");
    expect(school).not.toContain("EN ATTENTE DE CONFIRMATION");
  });

  it("identifies the technology watch as a framework, not completed research", () => {
    const watch = readRoute("technology-watch.tsx");

    expect(watch).toContain("Ce que cette veille m’apporte");
    expect(watch).toContain("Aucun ressenti ni conclusion personnelle");
  });

  it("uses project-backed practices without claiming proficiency levels", () => {
    const profile = readRoute("profile.tsx");

    expect(profile).toContain("Pratiques documentées dans les projets");
    expect(profile).not.toContain("Intermédiaire");
    expect(profile).not.toContain("mailto:");
    expect(profileData.contactChannels).toEqual([]);
    expect(documentedPractices.length).toBeGreaterThan(0);
    for (const practice of documentedPractices) {
      expect(practice.projectSlugs.length).toBeGreaterThan(0);
      for (const slug of practice.projectSlugs) {
        expect(projects.some((project) => project.slug === slug)).toBe(true);
      }
    }
  });

  it("labels project topics as examples, not as the official school curriculum", () => {
    const school = readRoute("school.tsx");

    expect(school).toContain("Thèmes visibles dans les projets");
    expect(school).toContain("ne prétend pas");
    expect(school).not.toContain("STI2D");
    expect(school).not.toContain("2022");
  });

  it("uses the owner-confirmed apprenticeship focus without claiming work experience", () => {
    expect(profileData.professionalGoal).toContain("systèmes");
    expect(profileData.professionalGoal).toContain("réseaux");
    expect(profileData.professionalGoal).toContain("support");
    expect(profileData.professionalGoal).toContain("alternance");
  });

  it("publishes only the four CV-backed professional experiences and duties", () => {
    expect(professionalExperiences).toEqual([
      {
        id: "groupe-casino",
        employer: "Groupe Casino",
        role: "Stage Support IT",
        period: "2026",
        category: "it",
        responsibilities: [
          "Diagnostic et résolution de pannes matérielles et logicielles.",
          "Remplacement de composants : SSD, RAM, batterie et périphériques.",
          "Installation de postes, écrans et imprimantes.",
          "Assistance aux utilisateurs.",
        ],
      },
      {
        id: "groupe-monoprix",
        employer: "Groupe Monoprix",
        role: "Employé polyvalent",
        period: "Depuis 2026",
        category: "other",
        responsibilities: [
          "Accueil et conseil clients.",
          "Gestion des demandes avec réactivité.",
          "Travail en équipe et sens du service.",
        ],
      },
      {
        id: "mairie-montreuil",
        employer: "Mairie de Montreuil",
        role: "Animateur école",
        period: "2025",
        category: "other",
        responsibilities: [
          "Encadrement de groupes d’enfants.",
          "Organisation d’activités.",
          "Communication et travail en équipe.",
        ],
      },
      {
        id: "axa-france",
        employer: "AXA France",
        role: "Stage Support et découverte SI",
        period: "2019",
        category: "it",
        responsibilities: [
          "Découverte du support informatique et des infrastructures.",
          "Participation à des opérations de maintenance de base.",
          "Découverte de la supervision et du traitement des tickets.",
        ],
      },
    ]);

    const profile = readRoute("profile.tsx");
    expect(profile).toContain("Expériences professionnelles");
    expect(profile).toContain(
      "profile-experience--${experience.category}",
    );
    expect(professionalExperiences.filter(({ category }) => category === "it"))
      .toHaveLength(2);
    expect(
      professionalExperiences.filter(({ category }) => category === "other"),
    ).toHaveLength(2);
    expect(profile).not.toContain("mailto:");
    expect(profileData.contactChannels).toEqual([]);
  });
});
