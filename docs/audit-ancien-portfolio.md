# Audit de l’ancien portfolio

## 1. Périmètre et méthode

Audit effectué à partir des fichiers de `ancien-portfolio/` pertinents pour le site : pages HTML, feuilles CSS, scripts JavaScript, références aux ressources et contenu statique. Le dossier `.git` et les fichiers générés ou dépendances n’ont pas été examinés. Aucun fichier de l’ancien portfolio n’a été modifié.

Le dossier contient 13 pages HTML, 5 feuilles CSS, 2 fichiers JavaScript et 47 images. Aucun fichier React (JSX/TSX), document PDF, fichier de données structuré autonome, SVG, police locale ou logo autonome n’a été trouvé dans les catégories recherchées. Les contenus de profil, cursus, compétences et projets sont principalement inscrits directement dans les pages HTML.

Les coordonnées directes détectées dans la section contact ne sont pas reproduites ici. Les captures n’ont pas été authentifiées comme exemptes d’informations privées : les examiner visuellement avant toute republication.

## 2. Synthèse

- Le site présente un profil d’étudiant en **BTS SIO option SISR**, avec un parcours antérieur STI2D/SIN puis une année en BUT Informatique.
- Sept cartes de projets sont exposées sur la page principale. Elles couvrent l’administration Linux/Bash, le réseau Cisco, le diagnostic, la sécurité des mots de passe et une maquette de supervision IT.
- Aucune expérience professionnelle ou mission en entreprise n’est décrite. Le stage et l’alternance sont évoqués comme objectifs de recherche.
- Plusieurs informations sont datées ou potentiellement périmées : le cursus, le niveau d’étude, la disponibilité, les compétences évaluées et les statistiques de présentation.
- Plusieurs projets sont des prototypes pédagogiques. En particulier, l’« assistant IA » est implémenté par détection de mots-clés et réponses prédéfinies ; VigilFlow simule des tests et conserve ses données dans le navigateur. Les présenter comme un service réellement connecté ou une IA générative serait inexact.
- Les fichiers contiennent des textes, visuels et interactions réutilisables comme matière première, mais le nouveau site devra repartir d’une direction visuelle différente.

## 3. Structure actuelle

### Pages HTML

| Fichier | Rôle et contenu constatés |
|---|---|
| `ancien-portfolio/index.html` | Page d’accueil très courte avec nom, titre BTS SIO SISR, résumé et lien vers `portfolio.html`. Elle utilise `accueil.css` et l’image `images/pp.jpeg`. |
| `ancien-portfolio/portfolio.html` | Page principale : profil, cursus, école, compétences, projets, contact et pied de page. Le contenu et plusieurs interactions JavaScript sont intégrés dans ce fichier. |
| `ancien-portfolio/assistant-ia.html` | Démonstration autonome d’un assistant de diagnostic fondé sur des règles et mots-clés. CSS et JavaScript intégrés à la page. |
| `ancien-portfolio/assistant-diagnostic-detail.html` | Présentation du projet de diagnostic, de ses objectifs, fonctionnalités et compétences, avec deux captures. |
| `ancien-portfolio/gestion-users.html` | Détail d’un gestionnaire interactif de comptes Linux en Bash, avec captures du script et de son exécution. |
| `ancien-portfolio/projet-cisco-rip.html` | Présentation d’une topologie Cisco Packet Tracer, de l’adressage, de RIP v2 et de tests de connectivité. |
| `ancien-portfolio/projet-linux.html` | Présentation d’un script Bash de diagnostic système fonctionnant sous WSL. |
| `ancien-portfolio/projet-surveillance.html` | Présentation d’un script Bash qui teste la disponibilité de plusieurs hôtes avec ping. |
| `ancien-portfolio/projet-testeur-mdp.html` | Détail du testeur web de robustesse de mot de passe, avec captures d’interface et d’extraits de code. |
| `ancien-portfolio/Saas-VigilFLOW/index.html` | Démonstration du tableau de bord VigilFlow : équipements, filtres, statuts, incidents et graphique. |
| `ancien-portfolio/Saas-VigilFLOW/login.html` | Formulaire de connexion de démonstration. La connexion repose sur un état local du navigateur, sans authentification serveur. |
| `ancien-portfolio/Saas-VigilFLOW/projet-vigilflow.html` | Présentation de VigilFlow, de ses fonctionnalités annoncées et de ses captures. |
| `ancien-portfolio/testeur-mdp/test-mdp.html` | Interface autonome du testeur de mot de passe, reliée à son script et à sa feuille CSS. |

### CSS, JavaScript et données

| Fichier | Rôle constaté |
|---|---|
| `ancien-portfolio/accueil.css` | Mise en forme de la page d’accueil courte : fond animé, carte translucide, portrait et bouton. |
| `ancien-portfolio/style.css` | Feuille principale du portfolio et de plusieurs pages de projet. Elle définit notamment les composants, la mise en page responsive, les cartes, filtres et transitions. |
| `ancien-portfolio/style2.css` | Feuille de style alternative présente dans le dossier, mais aucune page HTML examinée ne la référence. |
| `ancien-portfolio/Saas-VigilFLOW/style.css` | Styles de la démonstration de supervision et de sa page de connexion. |
| `ancien-portfolio/testeur-mdp/testeur-mdp.css` | Styles propres à l’interface du testeur de mot de passe. |
| `ancien-portfolio/Saas-VigilFLOW/script.js` | Gère les machines de démonstration, filtres, compteurs, graphique, incidents et état local. Les résultats des tests d’hôte sont simulés ; aucun test réseau réel n’est effectué. |
| `ancien-portfolio/testeur-mdp/script.js` | Vérifie en direct cinq critères de composition d’un mot de passe et affiche un niveau calculé. Le mot de passe saisi n’est pas affiché dans le rapport. |

La page principale contient aussi les scripts d’animation du texte, d’apparition au défilement et de filtrage des projets. L’assistant de diagnostic inclut son propre CSS et son propre script en ligne. Certaines pages chargent des ressources externes (notamment une police web, Chart.js ou un service de formulaire) : leurs usages et leur nécessité devront être réévalués lors de la migration.

## 4. Informations personnelles et parcours extraits

Les éléments ci-dessous sont ceux déclarés dans les pages, et ne constituent pas une vérification indépendante.

### Profil

- Nom affiché : **Kahyl Salhi**.
- Présentation : étudiant en **BTS SIO, option SISR**, intéressé par les systèmes, les réseaux et la cybersécurité.
- Établissement déclaré : **CFA INSTA**.
- Localisation indiquée de façon générale : région parisienne.
- Intérêts et qualités revendiqués : résolution de problèmes techniques, curiosité, rigueur, autonomie et apprentissage par la pratique.
- Objectif professionnel présenté : stage ou alternance, puis spécialisation en réseaux/cybersécurité et poursuite d’études jusqu’au niveau Master.
- La section contact contient des coordonnées et liens personnels. Ils sont volontairement omis de ce rapport ; les vérifier et décider lesquels publier dans le nouveau site.

### Formation

| Période affichée | Formation déclarée | Commentaire |
|---|---|---|
| 2022–2023 | Bac STI2D, option SIN | À confirmer si l’intitulé exact du diplôme et l’année d’obtention doivent apparaître. |
| 2023–2024 | Une année de BUT Informatique | L’établissement, le parcours et la validation ne sont pas précisés. |
| 2025–« aujourd’hui » | BTS SIO, option SISR, au CFA INSTA | L’année de début, l’année de formation actuelle et la date prévue d’obtention sont à actualiser. |

Aucune date de stage, d’alternance, d’emploi ou d’autre expérience professionnelle n’est indiquée.

### Compétences déclarées

- **Linux** : terminal, fichiers et navigation — niveau autoévalué « intermédiaire ».
- **Bash** : scripts, conditions, boucles et automatisation — « intermédiaire ».
- **Réseau** : adressage IP, tests de connectivité et bases du routage avec Packet Tracer — « intermédiaire ».
- **HTML/CSS** : interfaces structurées et responsive — « intermédiaire/avancé ».
- **Support informatique** : diagnostic, assistance et résolution d’incidents — « intermédiaire ».
- **Travail en équipe** : organisation et communication — « avancé ».
- Autres technologies citées dans le profil ou les projets : JavaScript, Cisco IOS, RIP v2, Ubuntu, WSL, Packet Tracer et VS Code.

Les niveaux et pourcentages affichés sont autoévalués et ne sont accompagnés ni d’une grille, ni d’exemples de validation. Les remplacer par des preuves concrètes ou les retirer plutôt que de reprendre ces jauges telles quelles.

## 5. Projets recensés

La page principale comporte sept cartes. Le dernier item, intitulé « scripts Bash pour automatisation », mène à la page du gestionnaire d’utilisateurs ; il semble s’agir d’un seul projet présenté sous deux intitulés, pas de deux projets distincts.

| Projet | Description vérifiable dans les fichiers | Éléments à confirmer ou améliorer |
|---|---|---|
| Testeur de mot de passe | Page HTML/CSS/JavaScript qui évalue cinq critères (longueur, majuscule, minuscule, chiffre, caractère spécial) et affiche un score/niveau en direct. Une page de détail et une démo séparée existent. | Présenter le résultat comme un indicateur pédagogique fondé sur des critères simples, non comme une mesure complète de sécurité. Confirmer le lien public et décider si la démo doit rester accessible. |
| Infrastructure Cisco — RIP | Projet Packet Tracer annoncé avec trois routeurs, trois réseaux et RIP v2. Les pages décrivent adressage, configuration CLI et tests par ping. | Confirmer la topologie, les configurations et les tests à partir du projet Packet Tracer d’origine si disponible ; les fichiers de simulation ne sont pas présents dans l’inventaire. |
| Assistant de diagnostic système/réseau | Page web qui repère des termes saisis et affiche des réponses prédéfinies sur les thèmes réseau, DNS, permissions, SSH, pare-feu, DHCP, Bash, IP et services. | Le nom « assistant IA » peut laisser croire à un modèle d’IA : le code visible est une logique conditionnelle à mots-clés. Le qualifier d’assistant pédagogique à règles, et réviser les conseils techniques avant republication. |
| Script de surveillance réseau | Script Bash présenté comme parcourant des hôtes et affichant leur disponibilité avec des couleurs, à partir de résultats de ping. | Le script Bash source n’est pas recensé ; les captures sont la seule preuve locale repérée. Confirmer les hôtes utilisés et éviter de publier des détails de réseau privé. |
| Script de diagnostic Linux | Script Bash sous WSL décrit comme regroupant l’affichage du nom de machine, des adresses IP, de la connectivité, de l’espace disque, de la mémoire et des processus. | Le script source n’est pas recensé ; vérifier les captures et les commandes avant de présenter le projet comme opérationnel. |
| VigilFlow — tableau de bord de monitoring IT | Prototype front-end avec équipements, recherche, filtre par statut, compteurs, graphique, incidents et état conservé dans `localStorage`. | Le statut des machines est simulé, pas mesuré par une supervision réelle. La page login ne fournit pas d’authentification serveur. Le décrire explicitement comme maquette/prototype. |
| Gestionnaire d’utilisateurs Linux en Bash | Page dédiée décrivant un menu Bash sous Ubuntu pour créer, supprimer et lister des utilisateurs, avec vérification d’erreurs et captures. | Le script source n’est pas recensé. Confirmer le périmètre et les protections avant de publier des instructions d’administration système. |

Pour chaque projet, les pages donnent surtout le sujet, des fonctionnalités et quelques compétences apprises. Elles ne fournissent généralement ni date, ni rôle individuel précis, ni contexte de réalisation, ni difficulté rencontrée, ni résultats mesurables, ni lien vers le code source.

## 6. Inventaire des ressources réutilisables

Les chemins ci-dessous sont relatifs à la racine du dépôt. Les descriptions proviennent des noms de fichiers et des références HTML ; elles ne certifient pas le contenu visible dans les images.

### Images référencées par les pages

**Profil et établissement**

- `ancien-portfolio/images/pp.jpeg` — portrait utilisé par la page d’accueil.
- `ancien-portfolio/images/ecole.jpg` — image présentée comme celle du CFA INSTA.

**Assistant de diagnostic**

- `ancien-portfolio/images/assistant-accueil.png` — capture de l’interface.
- `ancien-portfolio/images/assistant-resultat.png` — capture d’un résultat de diagnostic.

**Gestionnaire d’utilisateurs Linux / Bash**

- `ancien-portfolio/images/bash-script.png`
- `ancien-portfolio/images/bash-script2.png`
- `ancien-portfolio/images/bash-script3.png` — captures associées au script Bash.
- `ancien-portfolio/images/linux-crea.png`
- `ancien-portfolio/images/linux-sup.png`
- `ancien-portfolio/images/linux-liste.png`
- `ancien-portfolio/images/linux-quit.png` — captures des actions du menu terminal.

**Routage Cisco**

- `ancien-portfolio/images/topologie-cisco.png` — topologie.
- `ancien-portfolio/images/config-rip.png`
- `ancien-portfolio/images/config-rip3.png` — captures de configuration RIP.
- `ancien-portfolio/images/ping-cisco.png` — capture de connectivité.

**Diagnostic Linux**

- `ancien-portfolio/images/projet-linux-Diag-code.png` — capture de code.
- `ancien-portfolio/images/projet-linux-test.png`
- `ancien-portfolio/images/projet-linux-test1.png`
- `ancien-portfolio/images/projet-linux-test2.png` — captures d’exécution et de résultats.

**Surveillance réseau**

- `ancien-portfolio/images/projet-surveillance-code.png` — capture de code.
- `ancien-portfolio/images/projet-surveillance-resultat.png` — capture de résultat.

**Testeur de mot de passe**

- `ancien-portfolio/images/projet-mdp-interface.png` — interface.
- `ancien-portfolio/images/projet-mdp-tresfaible.png`
- `ancien-portfolio/images/projet-mdp-faible.png`
- `ancien-portfolio/images/projet-mdp-fort.png`
- `ancien-portfolio/images/projet-mdp-tresfort.png` — exemples de niveaux affichés.
- `ancien-portfolio/images/projet-mdp-code.png`
- `ancien-portfolio/images/projet-mdp-code1.png`
- `ancien-portfolio/images/projet-mdp-code2.png` — captures de code.

**VigilFlow**

- `ancien-portfolio/images/vigilflow-dashboard.png`
- `ancien-portfolio/images/vigilflow-tableau.png`
- `ancien-portfolio/images/vigilflow-ajout-machine.png`
- `ancien-portfolio/images/vigilflow-graphique.png`
- `ancien-portfolio/images/vigilflow-login.png`
- `ancien-portfolio/images/vigilflow-login2.png` — captures du tableau de bord, de la gestion des équipements et de la connexion.

### Images non référencées par les pages HTML examinées

À vérifier avant suppression, déplacement ou réutilisation : elles peuvent avoir servi à une version précédente ou être utilisées hors du périmètre analysé.

- `ancien-portfolio/images/bash-1.jpeg`
- `ancien-portfolio/images/photo-profil.jpeg`
- `ancien-portfolio/images/config-rip2.png`
- `ancien-portfolio/images/projet-ia-dns-JS.jpg`
- `ancien-portfolio/images/projet-ia-dns.jpg`
- `ancien-portfolio/images/projet-ia-function-JS.jpg`
- `ancien-portfolio/images/projet-ia-interface.jpg`
- `ancien-portfolio/images/projet-ia-permission.jpg`
- `ancien-portfolio/images/projet-ia-ping-JS.jpg`
- `ancien-portfolio/images/projet-ia-ping.jpg`
- `ancien-portfolio/images/reseau-1.png`
- `ancien-portfolio/images/reseau-2.png`

### Autres ressources

- Aucun PDF, CV téléchargeable, certificat, logo autonome ou ressource 3D n’a été trouvé dans les formats recherchés sous `ancien-portfolio/`.
- La marque « PORTFOLIO-KAHYL_SALHI » est rendue sous forme de texte HTML, pas d’image de logo.
- Des dépendances sont chargées depuis des URL externes dans le navigateur ; elles ne sont pas des ressources locales à migrer automatiquement.

## 7. À conserver, améliorer et actualiser

### Pertinent à conserver comme contenu source

- L’orientation SISR et les thèmes systèmes, réseaux, Linux/Bash et support.
- Les étapes de formation, sous réserve de confirmer les intitulés, années et statuts.
- Les projets les plus démonstratifs : topologie Cisco, scripts Linux, assistant de diagnostic, testeur de mot de passe et VigilFlow.
- Les captures utiles à la compréhension des projets, après vérification de leur qualité et de l’absence de données privées.
- Les formulations de motivation centrées sur la résolution de problèmes, l’apprentissage pratique et la progression.

### À améliorer avant intégration

- Transformer les descriptions génériques en fiches projet factuelles : besoin, contexte, contribution personnelle, environnement, démarche, résultat, limites et apprentissages.
- Réduire les répétitions entre cartes de projet et pages détaillées ; relier chaque carte au bon détail.
- Distinguer une démonstration front-end, un prototype simulé et un système réellement déployé.
- Remplacer les niveaux et barres de progression subjectifs par des compétences illustrées par des tâches ou des livrables.
- Contrôler les chemins de navigation : plusieurs pages détaillées renvoient à `index.html#projects`, mais la page `index.html` examinée ne contient pas de section projets.
- Revoir l’accessibilité des captures, des animations, des titres, des formulaires et des contrôles interactifs.
- Ne pas reprendre les anciennes feuilles de style ni leur ambiance visuelle dans le nouveau site.

### À actualiser ou confirmer

- Situation actuelle en BTS : année, date de début, date de fin prévue, statut et établissement.
- État actuel de la recherche de stage/alternance et objectif professionnel réel.
- Statut des projets : réalisés seul ou en groupe, période, technologies effectivement utilisées et liens encore valides.
- Disponibilité des dépôts sources et des fichiers originaux de simulation ou scripts.
- Exactitude des affirmations de niveau et des compétences annoncées.
- Toute information de contact, tout profil social et toute image personnelle à publier.
- Le nombre « 7 projets professionnels » affiché dans le hero est incohérent dans sa formulation avec les projets présentés comme travaux scolaires ; reformuler en fonction du décompte et du statut réels.
- La date « 2025 — Aujourd’hui » et la statistique « 1 année en BTS » doivent être revues, car elles peuvent être périmées ou contradictoires avec la situation actuelle.

## 8. Proposition d’arborescence du nouveau portfolio

Structure indicative, indépendante du framework qui sera choisi. Elle sépare le contenu, les styles et les ressources sans imposer de reprendre l’ancien design.

```text
nouveau-portfolio/
├── index.html
├── public/
│   └── assets/
│       ├── images/
│       │   ├── profile/
│       │   └── projects/
│       │       ├── cisco-rip/
│       │       ├── linux-bash/
│       │       ├── diagnostic/
│       │       ├── password-checker/
│       │       └── vigilflow/
│       ├── models/              # modèles 3D optimisés, si nécessaires
│       └── icons/
├── src/
│   ├── data/
│   │   ├── profile
│   │   ├── education
│   │   ├── skills
│   │   └── projects
│   ├── styles/
│   │   ├── tokens.css
│   │   ├── base.css
│   │   ├── layout.css
│   │   └── components.css
│   ├── components/
│   ├── sections/
│   │   ├── hero
│   │   ├── profile
│   │   ├── education
│   │   ├── skills
│   │   ├── projects
│   │   └── contact
│   └── main
└── docs/
    └── audit-ancien-portfolio.md
```

### Direction artistique et migration

- Construire une identité **Hybrid Minimal 3D** originale : hiérarchie éditoriale claire, espace négatif, détails techniques discrets et un élément 3D focal plutôt qu’un décor omniprésent.
- Ne pas reprendre les anciens fonds aurora, les cartes translucides, les couleurs ou les compositions comme base graphique.
- Prévoir un rendu de remplacement sans 3D, un chargement progressif, des médias légers et la prise en charge de `prefers-reduced-motion`.
- Utiliser des captures recadrées et légendées comme preuves de projet ; ne transférer que les ressources validées et nécessaires.
- Geler les informations de profil dans des données faciles à réviser et garder les fiches de projets indépendantes de la présentation.

