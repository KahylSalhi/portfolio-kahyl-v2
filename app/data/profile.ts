import type { EducationEntry, Profile, Skill } from "./types";

export interface ProfessionalExperience {
  id: string;
  employer: string;
  role: string;
  period: string;
  category: "it" | "other";
  responsibilities: readonly string[];
}

export const profile: Profile = {
  displayName: "Kahyl Salhi",
  headline: "Étudiant en deuxième année de BTS SIO, option SISR.",
  professionalGoal:
    "À la recherche d’une alternance en informatique, notamment en systèmes, réseaux ou support informatique.",
  contactChannels: [],
};

export const professionalExperiences: readonly ProfessionalExperience[] = [
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
];

export const educationHistory: readonly EducationEntry[] = [
  {
    id: "sti2d-sin",
    title: "BAC STI2D — option SIN",
    startDate: "2022",
    endDate: "2023",
    status: "attended",
  },
  {
    id: "but-informatique",
    title: "BUT Informatique — une année",
    startDate: "2023",
    endDate: "2024",
    status: "attended",
  },
  {
    id: "bts-sio-sisr",
    title: "BTS SIO — option SISR",
    institution: "CFA INSTA",
    startDate: "2025",
    status: "current",
    description: "Étudiant en deuxième année.",
  },
];

export const documentedPractices: Skill[] = [
  {
    id: "linux-systems",
    name: "Systèmes Linux",
    category: "systems",
    description:
      "Diagnostic système présenté dans un projet réalisé sous Linux via WSL.",
    projectSlugs: ["linux-diagnostic"],
    evidenceStatus: "reviewed",
  },
  {
    id: "bash-scripting",
    name: "Scripts Bash",
    category: "systems",
    description:
      "Automatisation et gestion d’utilisateurs décrites dans les projets Bash.",
    projectSlugs: ["bash-user-manager", "linux-diagnostic"],
    evidenceStatus: "reviewed",
  },
  {
    id: "networking",
    name: "Réseaux",
    category: "network",
    description:
      "Routage RIP v2 et tests de connectivité présentés en simulation Packet Tracer.",
    projectSlugs: ["cisco-rip"],
    evidenceStatus: "reviewed",
  },
  {
    id: "technical-support",
    name: "Diagnostic et support informatique",
    category: "support",
    description:
      "Diagnostic de problèmes système et réseau, et vérification de connectivité présentés dans les projets.",
    projectSlugs: [
      "system-network-diagnostic",
      "network-monitor",
      "linux-diagnostic",
    ],
    evidenceStatus: "reviewed",
  },
  {
    id: "web-interfaces",
    name: "Interfaces web",
    category: "development",
    description:
      "Interfaces HTML, CSS et JavaScript documentées dans des démonstrations et prototypes.",
    projectSlugs: [
      "password-checker",
      "system-network-diagnostic",
      "vigilflow",
    ],
    evidenceStatus: "reviewed",
  },
];
