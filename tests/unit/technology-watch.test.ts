import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import {
  technologyNews,
  technologyReferences,
  technologyWatchFeeds,
} from "../../app/data/technology-watch";

const readRoute = () =>
  readFileSync(
    new URL("../../app/routes/technology-watch.tsx", import.meta.url),
    "utf8",
  );

describe("Zero Trust technology watch", () => {
  it("keeps verified reference publications separate from the alert feed", () => {
    expect(technologyReferences).toHaveLength(2);
    expect(technologyReferences[0]).toMatchObject({
      title: "Zero Trust Architecture",
      organization: "NIST — Special Publication 800-207",
      publishedAt: "août 2020",
      url: "https://csrc.nist.gov/pubs/sp/800/207/final",
    });
    expect(technologyReferences[1]).toMatchObject({
      title: "Modèle Zero Trust",
      organization: "ANSSI — MesServicesCyber",
      publishedAt: "20 juin 2025",
      url: "https://messervices.cyber.gouv.fr/guides/zero-trust",
    });
    for (const reference of technologyReferences) {
      expect(reference.summary.length).toBeGreaterThan(30);
      expect(reference.technicalTakeaway.length).toBeGreaterThan(20);
    }

    expect(technologyWatchFeeds).toHaveLength(1);
    expect(technologyWatchFeeds[0].organization).toBe("CERT-FR");
    expect(technologyWatchFeeds[0].url).toBe(
      "https://www.cert.cyber.gouv.fr/alerte",
    );
    expect(technologyWatchFeeds[0]).not.toHaveProperty("publishedAt");
  });

  it("presents the learning outline without claiming personal research", () => {
    const route = readRoute();

    for (const requiredContent of [
      "ZERO",
      "Qu’est-ce que le Zero Trust",
      "Authentification multifacteur",
      "Moindre privilège",
      "Segmentation et microsegmentation",
      "Identités et appareils",
      "défense en profondeur",
      "pare-feu",
      "VPN",
      "Ce que cette veille m’apporte",
      "Aucun ressenti ni conclusion personnelle",
      "ne signifient pas",
      "Zero Trust a déjà été mise en place",
    ]) {
      expect(route).toContain(requiredContent);
    }
  });

  it("keeps the selected 2026 publications traceable and their analysis unanswered", () => {
    expect(technologyNews).toHaveLength(3);
    expect(technologyNews.map(({ id }) => id)).toEqual([
      "nsa-zero-trust-implementation-guidelines",
      "nist-secure-dns-deployment-guide",
      "nist-ir-8587",
    ]);

    expect(technologyNews[0]).toMatchObject({
      publishedAt: "14 janvier 2026",
      organization: "National Security Agency (NSA)",
      officialTitle:
        "NSA Releases First in Series of Zero Trust Implementation Guidelines",
      url: "https://www.nsa.gov/Press-Room/Press-Releases-Statements/Press-Release-View/Article/4378980/nsa-releases-first-in-series-of-zero-trust-implementation-guidelines/",
    });
    expect(technologyNews[1]).toMatchObject({
      publishedAt: "19 mars 2026",
      organization: "National Institute of Standards and Technology (NIST)",
      officialTitle:
        "NIST Publishes SP 800-81r3: Secure Domain Name System (DNS) Deployment Guide",
      url: "https://www.nist.gov/news-events/news/2026/03/secure-domain-name-system-dns-deployment-guide-final-publication",
    });
    expect(technologyNews[2]).toMatchObject({
      publishedAt: "15 septembre 2026",
      organization: "NIST, avec la contribution de la CISA",
      officialTitle: expect.stringContaining(
        "Protecting Tokens and Assertions from Forgery, Theft, and Misuse",
      ),
      url: "https://csrc.nist.gov/pubs/ir/8587/final",
    });

    for (const publication of technologyNews) {
      expect(publication.publishedOn).toMatch(/^2026-\d{2}-\d{2}$/);
      expect(publication.frenchTitle.length).toBeGreaterThan(20);
      expect(publication.summary.length).toBeGreaterThan(80);
      expect(publication.technicalRecommendation.length).toBeGreaterThan(40);
      expect(publication.sisrConnection.length).toBeGreaterThan(40);
      expect(publication.analysisQuestions).toEqual([
        "Qu’est-ce que cette publication m’apprend ?",
        "Quel lien avec mes projets Cisco, Linux ou Bash ?",
        "Quelle application pourrait-on imaginer dans une entreprise ?",
      ]);
    }

    expect(readRoute()).toContain("aucun statut de lecture n’est renseigné");
  });
});
