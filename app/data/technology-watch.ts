export interface TechnologyReference {
  id: string;
  title: string;
  organization: string;
  publishedAt: string;
  summary: string;
  technicalTakeaway: string;
  url: string;
}

export interface TechnologyWatchFeed {
  title: string;
  organization: string;
  description: string;
  url: string;
}

export interface TechnologyNewsPublication {
  id: string;
  publishedAt: string;
  publishedOn: string;
  organization: string;
  frenchTitle: string;
  officialTitle: string;
  summary: string;
  technicalRecommendation: string;
  sisrConnection: string;
  url: string;
  analysisQuestions: readonly string[];
}

export const technologyReferences = [
  {
    id: "nist-zero-trust-architecture",
    title: "Zero Trust Architecture",
    organization: "NIST — Special Publication 800-207",
    publishedAt: "août 2020",
    summary:
      "Le NIST décrit une architecture centrée sur les utilisateurs, les équipements et les ressources, sans confiance implicite fondée uniquement sur la localisation réseau ou la propriété d’un appareil.",
    technicalTakeaway:
      "Authentifier et autoriser séparément l’utilisateur et son équipement avant d’établir une session vers une ressource.",
    url: "https://csrc.nist.gov/pubs/sp/800/207/final",
  },
  {
    id: "anssi-zero-trust",
    title: "Modèle Zero Trust",
    organization: "ANSSI — MesServicesCyber",
    publishedAt: "20 juin 2025",
    summary:
      "L’ANSSI présente le Zero Trust comme un complément aux protections périmétriques : il vise à réduire la confiance implicite dans un contexte où les accès, les appareils et les services sont plus dispersés.",
    technicalTakeaway:
      "Inscrire le Zero Trust dans une stratégie de défense en profondeur ; il ne remplace pas automatiquement les pare-feu ni les VPN.",
    url: "https://messervices.cyber.gouv.fr/guides/zero-trust",
  },
] satisfies readonly TechnologyReference[];

export const technologyNews = [
  {
    id: "nsa-zero-trust-implementation-guidelines",
    publishedAt: "14 janvier 2026",
    publishedOn: "2026-01-14",
    organization: "National Security Agency (NSA)",
    frenchTitle:
      "La NSA publie les premiers guides d’une série consacrée à la mise en œuvre du Zero Trust",
    officialTitle:
      "NSA Releases First in Series of Zero Trust Implementation Guidelines",
    summary:
      "Le communiqué annonce les deux premiers documents d’une série de guides pratiques : un guide de présentation et un guide consacré à la phase de découverte. Cette première phase aide une organisation à établir une vision de ses données, applications, équipements, services et activités d’accès avant de planifier les étapes suivantes.",
    technicalRecommendation:
      "Commencer par dresser un état des lieux fiable des ressources et des accès pour mieux prioriser la mise en œuvre. Les guides sont des recommandations et des méthodes d’accompagnement, pas une nouvelle fonctionnalité logicielle.",
    sisrConnection:
      "Cette démarche rejoint l’inventaire et la documentation d’une infrastructure systèmes et réseaux avant toute évolution de ses contrôles d’accès.",
    url: "https://www.nsa.gov/Press-Room/Press-Releases-Statements/Press-Release-View/Article/4378980/nsa-releases-first-in-series-of-zero-trust-implementation-guidelines/",
    analysisQuestions: [
      "Qu’est-ce que cette publication m’apprend ?",
      "Quel lien avec mes projets Cisco, Linux ou Bash ?",
      "Quelle application pourrait-on imaginer dans une entreprise ?",
    ],
  },
  {
    id: "nist-secure-dns-deployment-guide",
    publishedAt: "19 mars 2026",
    publishedOn: "2026-03-19",
    organization: "National Institute of Standards and Technology (NIST)",
    frenchTitle:
      "Publication finale du guide de déploiement sécurisé du système DNS",
    officialTitle:
      "NIST Publishes SP 800-81r3: Secure Domain Name System (DNS) Deployment Guide",
    summary:
      "Le guide NIST SP 800-81r3 explique comment sécuriser les services DNS, qui traduisent les noms de domaine en adresses IP. Il décrit notamment le rôle du DNS comme point d’application de politiques et comme source d’informations pour évaluer des demandes d’accès dans une architecture Zero Trust.",
    technicalRecommendation:
      "Protéger l’intégrité et l’authenticité du DNS faisant autorité avec DNSSEC, et limiter la divulgation d’informations dans les requêtes récursives. Le guide précise aussi que le DNS peut contribuer à l’application et à l’évaluation de politiques Zero Trust.",
    sisrConnection:
      "Le DNS est un service d’infrastructure réseau à administrer et superviser ; sa sécurité touche à la résolution de noms, à la confidentialité des requêtes et aux contrôles d’accès.",
    url: "https://www.nist.gov/news-events/news/2026/03/secure-domain-name-system-dns-deployment-guide-final-publication",
    analysisQuestions: [
      "Qu’est-ce que cette publication m’apprend ?",
      "Quel lien avec mes projets Cisco, Linux ou Bash ?",
      "Quelle application pourrait-on imaginer dans une entreprise ?",
    ],
  },
  {
    id: "nist-ir-8587",
    publishedAt: "15 septembre 2026",
    publishedOn: "2026-09-15",
    organization: "NIST, avec la contribution de la CISA",
    frenchTitle:
      "Protéger les jetons et assertions contre la falsification, le vol et les abus",
    officialTitle:
      "Protecting Tokens and Assertions from Forgery, Theft, and Misuse: Implementation Recommendations for Agencies and Cloud Service Providers (NIST IR 8587)",
    summary:
      "Le rapport présente des recommandations de mise en œuvre pour protéger les jetons d’identité, les jetons d’accès et les assertions utilisés par les administrations et les fournisseurs cloud. Il aborde notamment le SSO, la fédération d’identités et les accès aux API.",
    technicalRecommendation:
      "Renforcer la gestion des clés, la vérification des jetons et leur cycle de vie afin de réduire les risques de falsification, de vol ou de réutilisation abusive. Il s’agit de recommandations de sécurité, pas d’un nouveau mécanisme de jeton.",
    sisrConnection:
      "Ces contrôles sont utiles pour comprendre l’authentification fédérée, les identités de services et la sécurisation des accès applicatifs et API dans une infrastructure.",
    url: "https://csrc.nist.gov/pubs/ir/8587/final",
    analysisQuestions: [
      "Qu’est-ce que cette publication m’apprend ?",
      "Quel lien avec mes projets Cisco, Linux ou Bash ?",
      "Quelle application pourrait-on imaginer dans une entreprise ?",
    ],
  },
] satisfies readonly TechnologyNewsPublication[];

export const technologyWatchFeeds = [
  {
    title: "Alertes de sécurité",
    organization: "CERT-FR",
    description:
      "Un flux d’alertes évolutif à consulter pour suivre les vulnérabilités et les risques. Il s’agit d’une source d’actualités, pas d’une publication Zero Trust citée dans cette page.",
    url: "https://www.cert.cyber.gouv.fr/alerte",
  },
] satisfies readonly TechnologyWatchFeed[];
