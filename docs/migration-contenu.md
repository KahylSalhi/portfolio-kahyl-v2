# Migration du contenu de l’ancien portfolio

**État** : inventaire documentaire terminé et parcours scolaire confirmé par le
propriétaire intégré à `/profil` et `/ecole`. Les coordonnées personnelles et les
détails qui restent non confirmés ne sont pas publiés.

## Méthode et sources

Les pages de `ancien-portfolio/` sont des déclarations historiques, pas une
vérification indépendante de leur actualité. Le [rapport d’audit](./audit-ancien-portfolio.md)
recense les sources, les réserves et les ressources sans modifier le portfolio
historique. Les références ci-dessous pointent vers les fichiers et lignes concernés.

| Sujet | Source exacte | Interprétation retenue |
|---|---|---|
| Identité et présentation | [`portfolio.html`, lignes 76–129](../ancien-portfolio/portfolio.html#L76) ; [`profile.ts`](../app/data/profile.ts) | Le nom et le BTS SIO SISR sont déjà les éléments publics validés dans l’application. L’objectif d’alternance reste celui du profil actuel ; les ambitions plus détaillées de l’ancien texte ne sont pas reprises comme actuelles. |
| Cursus et école | Confirmation directe du propriétaire (présente demande) ; [`portfolio.html`, lignes 143–219](../ancien-portfolio/portfolio.html#L143) ; [audit, lignes 68–76](./audit-ancien-portfolio.md#L68) | Le propriétaire confirme BAC STI2D option SIN (2022–2023), une année de BUT Informatique (2023–2024), puis BTS SIO option SISR au CFA INSTA depuis 2025 et actuellement en deuxième année. Les mentions d’incertitude de l’audit historique sont supersédées pour ces faits précis. |
| Compétences auto-déclarées | [`portfolio.html`, lignes 234–280](../ancien-portfolio/portfolio.html#L234) ; [audit, lignes 78–88](./audit-ancien-portfolio.md#L78) | Linux, Bash, réseau, HTML/CSS, support et travail en équipe sont cités. Les niveaux et jauges sont des autoévaluations sans méthode ni validation ; ils ne sont pas repris. Les thèmes techniques ne sont retenus qu’avec des exemples de projets recensés. |
| Projets et outils | [`portfolio.html`, lignes 290–445](../ancien-portfolio/portfolio.html#L290) ; [audit, lignes 90–104](./audit-ancien-portfolio.md#L90) ; [`projects.ts`](../app/data/projects.ts) | Les sept entrées et leurs limites sont comparées ci-dessous aux données courantes. Les descriptions n’établissent ni dates, ni contribution individuelle détaillée, ni déploiement réel. |
| Coordonnées | [`portfolio.html`, lignes 456–490](../ancien-portfolio/portfolio.html#L456) | L’ancien site contient une adresse e-mail, une mention de profil GitHub, une URL LinkedIn et un formulaire externe. Les valeurs personnelles ne sont pas reproduites ici et aucune n’est publiée sans approbation explicite. |
| Ressources visuelles | [`media-review.md`](../specs/001-portfolio-bts-sisr/media-review.md) ; [audit, lignes 106–188](./audit-ancien-portfolio.md#L106) | Les quatre images de projet et le logo du CFA INSTA ont été examinés ; seuls ces éléments listés comme copiés dans la revue sont publiés. Les autres restent exclues ou non vérifiées. |

## Informations récupérées et intégration

### Profil

La page Profil présente les trois étapes de formation confirmées, le statut de
deuxième année de BTS SIO option SISR au CFA INSTA et la recherche d’une alternance
en systèmes, réseaux ou support informatique. Les domaines de pratique sont formulés comme des
pratiques illustrées par des projets, non comme des niveaux de maîtrise :

- **Systèmes Linux** : diagnostic et informations système, avec l’environnement
  WSL cité dans la fiche du projet Linux.
- **Scripting Bash** : conditions, boucles et automatisation décrites dans les
  entrées Linux et gestion des utilisateurs.
- **Réseaux** : simulation Cisco Packet Tracer, routage RIP v2 et tests de
  connectivité mentionnés dans le projet Cisco.
- **Diagnostic et support informatique** : diagnostic de problèmes système et
  réseau, avec vérification de connectivité documentés par les projets de
  diagnostic et de surveillance réseau.
- **Interfaces web** : HTML, CSS et JavaScript documentés pour le testeur de
  mot de passe, l’assistant à règles et VigilFlow.

Ces éléments sont reliés aux fiches de projets qui les documentent. La page ne
reprend ni les pourcentages, ni les niveaux d’autoévaluation de l’ancien portfolio.
Le support est limité aux pratiques de diagnostic décrites par les projets ; il
n’implique ni expérience professionnelle ni niveau de maîtrise. Le travail en
équipe et la cybersécurité au sens large ne sont pas présentés comme des compétences
acquises sur la seule base des anciennes autoévaluations.

### École et parcours

La page identifie le CFA INSTA comme établissement actuel et présente le BTS SIO
option SISR ainsi que les pratiques documentées par les projets. Elle précise que
ces travaux ne constituent pas une liste officielle des matières du cursus.

Les éléments scolaires confirmés directement par le propriétaire sont :

| Information historique | Source | État |
|---|---|---|
| CFA INSTA | Confirmation directe du propriétaire ; [`portfolio.html`, lignes 86, 191–209](../ancien-portfolio/portfolio.html#L86) | Établissement actuel confirmé. |
| BAC STI2D option SIN, période 2022–2023 | Confirmation directe du propriétaire ; [`portfolio.html`, lignes 150–153](../ancien-portfolio/portfolio.html#L150) | Intitulé et période confirmés ; aucune affirmation de diplôme obtenu n’est ajoutée. |
| Une année de BUT Informatique, période 2023–2024 | Confirmation directe du propriétaire ; [`portfolio.html`, lignes 159–163](../ancien-portfolio/portfolio.html#L159) | Parcours et durée confirmés ; établissement et obtention non affirmés. |
| BTS SIO option SISR depuis 2025, actuellement en deuxième année | Confirmation directe du propriétaire ; [`portfolio.html`, lignes 168–171](../ancien-portfolio/portfolio.html#L168) | Établissement, début et situation actuelle confirmés ; aucune date de fin n’est déduite. |
| Matières officielles, emploi du temps, résultats ou certifications | Aucun document probant recensé ; [audit, lignes 188–190](./audit-ancien-portfolio.md#L188) | Non récupérables à partir des sources inventoriées. |

### Expérience, objectifs et éléments à actualiser

- L’audit ne trouve aucune expérience d’emploi, de stage ou de mission en
  entreprise. Cela signifie qu’aucune expérience n’est documentée dans les
  sources examinées, pas qu’il n’en existe pas.
- Le propriétaire confirme rechercher une alternance en informatique, notamment
  en systèmes, réseaux ou support informatique. Aucune échéance n’est indiquée.
- Les niveaux de compétences, la localisation, les éventuels résultats scolaires
  et les liens externes restent non confirmés ou non autorisés.
- Aucun CV PDF, certificat, dépôt de code source des scripts Bash ou fichier de
  simulation Packet Tracer n’a été recensé par l’audit. Les projets sont donc
  décrits à partir des pages et captures historiques, avec les réserves affichées
  dans `app/data/projects.ts`.

### Logo de l’établissement

Le fichier [`ecole.jpg`](../ancien-portfolio/images/ecole.jpg) a été ouvert et
visuellement vérifié comme logo du CFA INSTA. Son contenu PNG (597 × 388 px) est
copié dans `public/assets/images/school/cfa-insta-logo.png` ; le site sert cette
copie avec le texte alternatif « Logo du CFA INSTA ». L’original n’a pas été modifié.

## Vérification des sept projets et ressources

Les sept fiches courantes de [`projects.ts`](../app/data/projects.ts) correspondent
aux sept cartes historiques recensées. Les images publiées ci-dessous sont celles
déjà validées par la revue visuelle ; l’absence d’image pour les autres fiches est
intentionnelle.

| Projet et source historique | Données et limites conservées dans le nouveau site | Ressource publiable |
|---|---|---|
| **Testeur de mot de passe** — [`portfolio.html`, ligne 304](../ancien-portfolio/portfolio.html#L304) et [`projet-testeur-mdp.html`, lignes 47–71](../ancien-portfolio/projet-testeur-mdp.html#L47) | HTML/CSS/JavaScript ; cinq critères simples. Le résultat reste un indicateur pédagogique, pas une mesure complète de sécurité. | `images/projet-mdp-code.png` → `public/assets/images/projects/password-checker-code.png` (revue, [media-review, ligne 12](../specs/001-portfolio-bts-sisr/media-review.md#L12)). |
| **Infrastructure Cisco — RIP** — [`portfolio.html`, lignes 326–342](../ancien-portfolio/portfolio.html#L326) et [`projet-cisco-rip.html`, lignes 42–91](../ancien-portfolio/projet-cisco-rip.html#L42) | Cisco Packet Tracer, Cisco IOS, RIP v2 et tests de connectivité annoncés ; simulation, configuration d’origine et résultats complets à confirmer. | `images/topologie-cisco.png` → `public/assets/images/projects/cisco-topology.png` (revue, [media-review, ligne 13](../specs/001-portfolio-bts-sisr/media-review.md#L13)). |
| **Assistant de diagnostic système et réseau** — [`portfolio.html`, ligne 350](../ancien-portfolio/portfolio.html#L350), [`assistant-diagnostic-detail.html`, ligne 68](../ancien-portfolio/assistant-diagnostic-detail.html#L68) et [`assistant-ia.html`](../ancien-portfolio/assistant-ia.html) | HTML/CSS/JavaScript ; réponses préécrites associées à des mots-clés, pas d’IA générative. Conseils et contribution individuelle non vérifiés. | Aucune image publiée ; les captures d’origine contiennent compte, hôte ou détails réseau ([media-review, lignes 21–22](../specs/001-portfolio-bts-sisr/media-review.md#L21)). |
| **Script de surveillance réseau** — [`portfolio.html`, ligne 373](../ancien-portfolio/portfolio.html#L373) et [`projet-surveillance.html`, lignes 50–66](../ancien-portfolio/projet-surveillance.html#L50) | Bash et `ping` ; fonctionnement actuel et script source non vérifiés. | Aucune image publiée ; la capture de code contient une cible réseau privée ([media-review, ligne 25](../specs/001-portfolio-bts-sisr/media-review.md#L25)). |
| **Script de diagnostic Linux** — [`portfolio.html`, ligne 395](../ancien-portfolio/portfolio.html#L395) et [`projet-linux.html`, lignes 32–75](../ancien-portfolio/projet-linux.html#L32) | Bash et WSL ; fonctionnalités annoncées autour des informations système et réseau, sans script source recensé. | Aucune image publiée ; certaines captures exposent hôte, chemins ou adresses ([media-review, ligne 26](../specs/001-portfolio-bts-sisr/media-review.md#L26)). |
| **VigilFlow** — [`portfolio.html`, ligne 417](../ancien-portfolio/portfolio.html#L417), [`projet-vigilflow.html`, lignes 34–79](../ancien-portfolio/Saas-VigilFLOW/projet-vigilflow.html#L34) et [`script.js`, lignes 1–3](../ancien-portfolio/Saas-VigilFLOW/script.js#L1) | HTML/CSS/JavaScript et état local ; tableau de bord front-end, états simulés, sans supervision réseau ni authentification serveur. | `images/vigilflow-graphique.png` → `public/assets/images/projects/vigilflow-chart.png` (revue, [media-review, ligne 14](../specs/001-portfolio-bts-sisr/media-review.md#L14)). |
| **Automatisation Bash et gestionnaire d’utilisateurs** — [`portfolio.html`, lignes 439–445](../ancien-portfolio/portfolio.html#L439) et [`gestion-users.html`, lignes 49–89](../ancien-portfolio/gestion-users.html#L49) | Bash et Ubuntu ; actions annoncées de gestion d’utilisateurs. Le dernier item de la liste pointe vers cette même page : il ne prouve pas l’existence d’un huitième projet ni de deux réalisations distinctes. | `images/bash-script.png` → `public/assets/images/projects/bash-user-manager-code.png` (revue, [media-review, ligne 15](../specs/001-portfolio-bts-sisr/media-review.md#L15)). |

**Contradiction de décompte** : l’ancien portfolio présente sept cartes, mais la
septième est une carte d’automatisation qui renvoie à la page du gestionnaire
Bash. Le nouveau site conserve les sept entrées/routes demandées tout en signalant
que l’existence de deux projets Bash séparés n’est pas établie. Le terme historique
« projets professionnels » n’est pas repris : les sources les présentent comme des
travaux de formation.

## Coordonnées en attente d’autorisation

L’ancien fichier [`portfolio.html`, lignes 471–481](../ancien-portfolio/portfolio.html#L471)
contient une adresse e-mail, une mention d’un profil GitHub et une URL LinkedIn.
Les valeurs ne sont volontairement pas recopiées dans ce rapport, dans les données
de l’application ou dans les liens publics. Le profil de contact actuel reste vide.

Le formulaire historique (même fichier, lignes 488–490) envoie également les
messages à une adresse par un service tiers. Il n’est pas migré. Avant toute
intégration, il faut autoriser explicitement chaque destination exacte et confirmer
qu’elle est toujours valide. Aucun contact personnel n’est publié dans cette passe.

## Informations impossibles à établir automatiquement

- Validité actuelle de l’établissement, dates, progression scolaire et formations
  antérieures.
- Statut d’obtention des diplômes, résultats, certifications ou programme officiel
  détaillé des matières.
- Situation professionnelle, expériences éventuellement acquises, disponibilité
  et objectif professionnel actuel au-delà de celui déjà approuvé.
- Niveau réel de maîtrise des outils, rôle individuel, réalisation seul/en groupe,
  dates et résultats mesurables pour chaque projet.
- Disponibilité des dépôts, scripts et fichier Packet Tracer d’origine ; l’audit
  ne les recense pas.
- Validité actuelle des coordonnées et autorisation de les publier.
- Contenu sûr et pertinent des images qui n’ont pas été examinées dans
  `media-review.md`. Elles restent non publiées.

## Prochaine mise à jour manuelle

Pour compléter les éléments en attente, il suffira de confirmer ou corriger les
informations marquées ci-dessus. Aucune coordonnée ni donnée scolaire historique
non confirmée n’a été ajoutée aux pages dans l’intervalle.
