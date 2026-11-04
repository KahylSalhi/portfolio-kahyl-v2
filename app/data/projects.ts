import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "password-checker",
    title: "Testeur de mot de passe",
    summary:
      "Démonstration web qui vérifie cinq critères simples de composition.",
    statusLabel: "Démonstration pédagogique",
    caseStudy: {
      context:
        "Une interface web examine un mot de passe saisi selon cinq critères de composition.",
      objectives: [
        "Afficher en direct la présence de critères de composition simples.",
        "Présenter un résultat pédagogique dans une interface web.",
      ],
      workPerformed: [
        "La logique recensée vérifie la longueur, les majuscules, les minuscules, les chiffres et les caractères spéciaux.",
        "Une interface HTML, CSS et JavaScript présente les critères et un indicateur.",
      ],
      outcome:
        "La démonstration illustre des contrôles de composition ; elle ne constitue pas une évaluation complète de la sécurité d'un mot de passe.",
      limitations: [
        "Le score ne prend pas en compte tous les aspects de la robustesse d'un mot de passe.",
        "Aucune mesure de résultat ni contribution individuelle n'est documentée dans l'audit.",
      ],
    },
    technologies: ["HTML", "CSS", "JavaScript"],
    status: "working-demo",
    results: ["Cinq critères de composition sont affichés par l'interface."],
    limitations: [
      "Indicateur pédagogique uniquement, pas un audit complet de sécurité.",
      "Dates et rôle individuel non documentés.",
    ],
    mediaIds: ["password-checker-code"],
    relatedProjectSlugs: [],
    contentStatus: "draft",
    media: [
      {
        src: "/assets/images/projects/password-checker-code.png",
        alt: "Extrait JavaScript vérifiant cinq critères de composition.",
        caption:
          "Extrait du script : cinq critères simples alimentent l'indicateur pédagogique.",
      },
    ],
  },
  {
    slug: "cisco-rip",
    title: "Infrastructure Cisco — RIP",
    summary:
      "Simulation de routage dynamique présentée autour de RIP v2 dans Packet Tracer.",
    statusLabel: "Simulation",
    caseStudy: {
      context:
        "L'ancien portfolio décrit un exercice de routage sous Cisco Packet Tracer.",
      objectives: [
        "Présenter une topologie de plusieurs routeurs et réseaux.",
        "Illustrer la configuration annoncée de RIP v2 et des tests de connectivité.",
      ],
      workPerformed: [
        "Une capture de topologie et des pages de configuration sont recensées dans l'audit.",
        "Les pages historiques décrivent des commandes Cisco IOS et des tests par ping.",
      ],
      limitations: [
        "Simulation pédagogique ; aucun déploiement réel n'est établi.",
        "Le fichier Packet Tracer source et les configurations complètes restent à confirmer.",
      ],
    },
    technologies: ["Cisco Packet Tracer", "Cisco IOS", "RIP v2"],
    status: "simulation",
    results: ["Une capture de topologie est disponible dans l'ancien portfolio."],
    limitations: [
      "Aucun fichier de simulation d'origine n'a été recensé.",
      "Les résultats complets et la contribution individuelle ne sont pas vérifiés.",
    ],
    mediaIds: ["cisco-topology"],
    relatedProjectSlugs: [],
    contentStatus: "draft",
    media: [
      {
        src: "/assets/images/projects/cisco-topology.png",
        alt: "Topologie Cisco Packet Tracer reliant des postes et des routeurs.",
        caption:
          "Topologie présentée dans le portfolio précédent ; la simulation d'origine reste à confirmer.",
      },
    ],
  },
  {
    slug: "system-network-diagnostic",
    title: "Assistant de diagnostic système et réseau",
    summary:
      "Prototype pédagogique qui associe des mots-clés à des pistes de diagnostic prédéfinies.",
    statusLabel: "Prototype à règles",
    caseStudy: {
      context:
        "Une page web reçoit une description de problème et affiche des réponses préparées.",
      objectives: [
        "Illustrer des pistes de diagnostic système et réseau à partir de mots-clés.",
      ],
      workPerformed: [
        "Les pages et scripts recensés présentent une logique conditionnelle et des réponses prédéfinies.",
        "Les thèmes annoncés incluent le réseau, le DNS, les permissions, SSH, le pare-feu, DHCP, Bash, IP et les services.",
      ],
      limitations: [
        "Le code repéré n'utilise pas de modèle d'intelligence artificielle générative.",
        "Les conseils doivent être relus avant réutilisation comme documentation technique.",
        "Aucun résultat mesuré ni déploiement n'est documenté.",
      ],
    },
    technologies: ["HTML", "CSS", "JavaScript"],
    status: "prototype",
    results: [
      "Des réponses statiques sont associées à des mots-clés recensés.",
    ],
    limitations: [
      "Prototype à règles, et non une IA générative.",
      "Les conseils et la contribution individuelle ne sont pas validés indépendamment.",
    ],
    mediaIds: [],
    relatedProjectSlugs: [],
    contentStatus: "draft",
  },
  {
    slug: "network-monitor",
    title: "Script de surveillance réseau",
    summary:
      "Script Bash présenté comme testant la disponibilité d'hôtes avec ping.",
    statusLabel: "Détails à confirmer",
    caseStudy: {
      context:
        "L'ancien portfolio décrit un script qui teste la disponibilité de plusieurs hôtes.",
      objectives: [
        "Illustrer un contrôle de disponibilité à partir de résultats de ping.",
      ],
      workPerformed: [
        "Une capture de code et une capture de résultat figurent dans l'inventaire de l'audit.",
        "La description historique mentionne des états colorés selon le résultat du test.",
      ],
      limitations: [
        "Le fichier source n'a pas été recensé.",
        "Les cibles de la capture ne sont pas reproduites ici afin d'éviter de publier des détails réseau.",
        "Le fonctionnement actuel et le contexte d'exécution restent à confirmer.",
      ],
    },
    technologies: ["Bash", "ping"],
    status: "unverified",
    results: ["L'audit recense des captures de code et de résultat."],
    limitations: [
      "Script source non recensé ; état de fonctionnement à confirmer.",
      "Aucun réseau réel ou service de supervision n'est revendiqué.",
    ],
    mediaIds: [],
    relatedProjectSlugs: [],
    contentStatus: "draft",
  },
  {
    slug: "linux-diagnostic",
    title: "Script de diagnostic Linux",
    summary:
      "Script Bash sous WSL présenté comme regroupant plusieurs informations système.",
    statusLabel: "Détails à confirmer",
    caseStudy: {
      context:
        "L'ancien portfolio présente un script de diagnostic système exécuté sous WSL.",
      objectives: [
        "Rassembler des informations système utiles à une première observation.",
      ],
      workPerformed: [
        "La description historique cite le nom de la machine, les adresses IP, la connectivité, le disque, la mémoire et les processus.",
        "Des captures de code et d'exécution sont référencées dans l'audit, mais ne sont pas publiées ici car elles exposent des détails d'environnement.",
      ],
      limitations: [
        "Le script source n'a pas été recensé.",
        "L'environnement et les résultats montrés dans les anciennes captures ne sont pas vérifiés.",
      ],
    },
    technologies: ["Bash", "WSL"],
    status: "unverified",
    results: ["Les fonctions citées proviennent de la description historique."],
    limitations: [
      "Script source et fonctionnement actuel à confirmer.",
      "Les détails personnels et adresses réseau des captures ne sont pas republiés.",
    ],
    mediaIds: [],
    relatedProjectSlugs: [],
    contentStatus: "draft",
  },
  {
    slug: "vigilflow",
    title: "VigilFlow — tableau de bord IT",
    summary:
      "Prototype front-end avec équipements, filtres, incidents et états simulés.",
    statusLabel: "Prototype simulé",
    caseStudy: {
      context:
        "Une interface locale présente un tableau de bord de supervision fictif.",
      objectives: [
        "Illustrer une interface de suivi d'équipements et d'incidents.",
      ],
      workPerformed: [
        "L'audit recense des équipements, filtres, compteurs, graphique, incidents et données conservées localement.",
        "Les pages de démonstration montrent des écrans de tableau de bord et de graphique.",
      ],
      limitations: [
        "Les états des équipements et tests sont simulés ; aucun test réseau réel n'est effectué.",
        "La connexion de démonstration n'est pas une authentification serveur.",
        "Aucun déploiement comme service de supervision n'est établi.",
      ],
    },
    technologies: ["HTML", "CSS", "JavaScript", "localStorage"],
    status: "prototype",
    results: [
      "Le prototype présente des états et graphiques de démonstration dans le navigateur.",
    ],
    limitations: [
      "Aucun agent ou test réseau réel.",
      "Connexion locale de démonstration, sans authentification serveur.",
    ],
    mediaIds: ["vigilflow-chart"],
    relatedProjectSlugs: [],
    contentStatus: "draft",
    media: [
      {
        src: "/assets/images/projects/vigilflow-chart.png",
        alt: "Graphique du prototype VigilFlow illustrant des états simulés.",
        caption:
          "Écran du graphique de démonstration ; les états affichés sont simulés.",
      },
    ],
  },
  {
    slug: "bash-user-manager",
    title: "Automatisation Bash et gestionnaire d’utilisateurs",
    summary:
      "Entrée du portfolio historique consacrée à un menu Bash de gestion d'utilisateurs Linux.",
    statusLabel: "Détails à confirmer",
    caseStudy: {
      context:
        "Une page historique décrit un menu Bash sous Ubuntu pour des opérations de gestion d'utilisateurs.",
      objectives: [
        "Présenter des actions de création, suppression et liste d'utilisateurs.",
      ],
      workPerformed: [
        "Des captures d'écran de code et d'exécution sont répertoriées dans l'audit.",
        "La description historique mentionne des vérifications d'erreurs.",
      ],
      limitations: [
        "Le script source n'a pas été recensé.",
        "L'audit indique que la carte « scripts Bash pour automatisation » renvoie à cette page ; l'existence d'une réalisation distincte n'est pas établie.",
        "Les captures d'exécution exposent des noms d'utilisateur et ne sont donc pas republiées.",
      ],
    },
    technologies: ["Bash", "Ubuntu"],
    status: "unverified",
    results: ["Les fonctionnalités décrites proviennent des pages historiques."],
    limitations: [
      "Script source, protections et fonctionnement actuel à confirmer.",
      "Une seule entrée est présentée ; aucun travail distinct n'est affirmé.",
    ],
    mediaIds: ["bash-user-manager-code"],
    relatedProjectSlugs: [],
    contentStatus: "draft",
    media: [
      {
        src: "/assets/images/projects/bash-user-manager-code.png",
        alt: "Extrait de Bash illustrant la création d'un utilisateur avec une variable.",
        caption:
          "Extrait de code sans les captures d'exécution qui contiennent des noms d'utilisateur.",
      },
    ],
  },
];

export function getProjectBySlug(slug: string | undefined) {
  return projects.find((project) => project.slug === slug);
}
