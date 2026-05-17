const questions = [

// ═══════════════════════════════════════════════
// NIVEAU TERRE — Questions fondamentales
// ═══════════════════════════════════════════════

{
  difficulty: "🟫 TERRE",
  question: "Combien de modules composent l'application Puls@r ?",
  answers: ["3 modules", "4 modules", "5 modules", "7 modules"],
  correct: 2,
  explanation: "Puls@r comporte exactement 5 modules : Formules, Registre, MIS, Service et BAAC."
},

{
  difficulty: "🟫 TERRE",
  question: "Quelle application Puls@r remplace-t-elle principalement en brigade ?",
  answers: ["Windows", "BB 2000", "Agorha", "NATINF"],
  correct: 1,
  explanation: "Puls@r remplace notamment la bureautique brigade « BB 2000 », dont il conserve les principes."
},

{
  difficulty: "🟫 TERRE",
  question: "Quel module Puls@r gère les accidents corporels de la route ?",
  answers: ["MIS", "Registre", "BAAC", "Service"],
  correct: 2,
  explanation: "Le module BAAC (Bulletin d'Analyse d'Accident Corporel de la circulation) gère les accidents corporels de circulation routière."
},

{
  difficulty: "🟫 TERRE",
  question: "Qu'est-ce qu'un jour de permission ?",
  answers: [
    "8 heures de repos",
    "Une période de 24h débutant à l'heure normale de prise de service",
    "Un week-end du vendredi soir au lundi matin",
    "Une journée calendaire de minuit à minuit"
  ],
  correct: 1,
  explanation: "Un jour de permission = 24h débutant ET se terminant à l'heure normale de prise de service fixée par le commandant de formation administrative."
},

{
  difficulty: "🟫 TERRE",
  question: "Qui peut accorder une autorisation d'absence de courte durée (≤ 4h) ?",
  answers: [
    "Le commandant de groupement",
    "Le commandant de compagnie",
    "Le commandant d'unité élémentaire",
    "Le directeur général de la gendarmerie"
  ],
  correct: 2,
  explanation: "L'autorisation d'absence de courte durée (≤ 4h) est accordée par le commandant d'unité élémentaire (ou autorité assimilée)."
},

{
  difficulty: "🟫 TERRE",
  question: "Où est implantée la base centrale de sauvegarde de Puls@r ?",
  answers: [
    "À la DGGN Paris",
    "Au CTGN à Rosny-sous-Bois",
    "À Fontainebleau",
    "Au CORG régional"
  ],
  correct: 1,
  explanation: "La sauvegarde automatique se fait dans la base centrale du CTGN (Centre Technique de la Gendarmerie Nationale) à Rosny-sous-Bois."
},

{
  difficulty: "🟫 TERRE",
  question: "Quel est le pourcentage maximal de permissionnaires simultanés autorisé en gendarmerie départementale ?",
  answers: ["20 %", "25 %", "33 %", "50 %"],
  correct: 2,
  explanation: "Le seuil est de 33 % des effectifs réalisés, toutes catégories confondues."
},

{
  difficulty: "🟫 TERRE",
  question: "Quel est le ratio de génération des quartiers libres (QL) ?",
  answers: [
    "1 QL pour 1 journée d'emploi",
    "1 QL pour 2 journées d'emploi ou d'astreinte",
    "1 QL pour 3 journées d'emploi",
    "2 QL par semaine automatiquement"
  ],
  correct: 1,
  explanation: "1 quartier libre pour 2 journées d'emploi ou d'astreinte, consécutives ou non."
},

{
  difficulty: "🟫 TERRE",
  question: "Quel système gère le module « Gestion du temps » pour les permissions ?",
  answers: ["Puls@r", "Agorha", "LRPGN", "BDSP"],
  correct: 1,
  explanation: "La gestion des permissions est dématérialisée dans le module « Gestion du temps » de l'application Agorha."
},

{
  difficulty: "🟫 TERRE",
  question: "Quelle est la durée de la permission supplémentaire accordée pour un mariage ou un PACS ?",
  answers: ["1 jour", "2 jours", "3 jours", "5 jours"],
  correct: 2,
  explanation: "Les événements familiaux (mariage, PACS, naissance, mariage d'un enfant, décès de parent) donnent droit à 3 jours de permission supplémentaire."
},

// ═══════════════════════════════════════════════
// NIVEAU PIERRE — Questions intermédiaires
// ═══════════════════════════════════════════════

{
  difficulty: "🪨 PIERRE",
  question: "PIÈGE — La fraction de permission non utilisée lors d'un rappel est-elle perdue ?",
  answers: [
    "Oui, définitivement perdue",
    "Non, elle reste acquise au militaire",
    "Oui, sauf si le rappel est général",
    "Elle est convertie en QL"
  ],
  correct: 1,
  explanation: "PIÈGE ! La fraction de permission non utilisée reste toujours acquise au militaire, que le rappel soit général ou individuel."
},

{
  difficulty: "🪨 PIERRE",
  question: "PIÈGE — Un congé maladie pendant une permission, qu'arrive-t-il à la permission ?",
  answers: [
    "La permission continue normalement",
    "La permission est annulée sans compensation",
    "Le congé maladie interrompt la permission ; la fraction non utilisée est réattribuée",
    "La permission reprend après la guérison sans interruption"
  ],
  correct: 2,
  explanation: "PIÈGE ! Le congé de maladie INTERROMPT la permission et entraîne la réattribution de la fraction dont le militaire n'a pas bénéficié."
},

{
  difficulty: "🪨 PIERRE",
  question: "PIÈGE — Les repos hebdomadaires inclus dans une permission sont-ils décomptés des droits à permission ?",
  answers: [
    "Oui, toujours",
    "Non, jamais",
    "Seulement le dimanche",
    "Seulement en période estivale"
  ],
  correct: 1,
  explanation: "PIÈGE ! Les repos hebdomadaires inclus dans une permission NE sont PAS décomptés des droits à permission."
},

{
  difficulty: "🪨 PIERRE",
  question: "PIÈGE — Quelle est la durée de la permission supplémentaire pour le décès du conjoint (ou partenaire PACS) ?",
  answers: ["3 jours", "5 jours", "7 jours", "10 jours"],
  correct: 1,
  explanation: "PIÈGE ! Pour le décès du conjoint ou partenaire PACS, la durée est de 5 jours (et non 3 jours comme pour les autres événements familiaux)."
},

{
  difficulty: "🪨 PIERRE",
  question: "PIÈGE — Les permissions pour événements familiaux peuvent-elles être reportées ?",
  answers: [
    "Oui, sans limite",
    "Oui, dans les 6 mois",
    "Non, sauf cas de force majeure lié au service",
    "Oui, dans le mois civil suivant"
  ],
  correct: 2,
  explanation: "PIÈGE ! Les permissions pour événements familiaux NE peuvent PAS être reportées, SAUF cas de force majeure lié à l'exécution du service (OPEX, mission de courte durée...)."
},

{
  difficulty: "🪨 PIERRE",
  question: "PIÈGE — Un QL non accordé ou interrompu pour raisons de service est-il perdu ?",
  answers: [
    "Oui, définitivement",
    "Non, il est réattribué dans les 4 semaines",
    "Il est converti en permission",
    "Il donne lieu à une compensation financière"
  ],
  correct: 1,
  explanation: "PIÈGE ! Un QL non accordé ou interrompu est OBLIGATOIREMENT réattribué dans les 4 semaines suivant sa suppression."
},

{
  difficulty: "🪨 PIERRE",
  question: "PIÈGE — Combien de QL nocturnes minimum par semaine d'emploi effective ?",
  answers: ["1 QL nocturne", "2 QL nocturnes", "3 QL nocturnes", "1 QL diurne + 1 nocturne"],
  correct: 1,
  explanation: "Par principe, le militaire bénéficie d'au moins 2 quartiers libres nocturnes par semaine d'emploi effective."
},

{
  difficulty: "🪨 PIERRE",
  question: "PIÈGE — Quelle est la durée maximale d'un détachement dans Puls@r ?",
  answers: ["3 mois", "6 mois", "1 an", "2 ans"],
  correct: 2,
  explanation: "La durée d'un détachement enregistré dans Puls@r est d'un an au plus."
},

{
  difficulty: "🪨 PIERRE",
  question: "PIÈGE — L'autorisation d'absence est-elle un droit du militaire ?",
  answers: [
    "Oui, c'est un droit statutaire",
    "Non, c'est une facilité accordée par le commandement",
    "Oui, après 5 ans de service",
    "Non, sauf pour les événements familiaux"
  ],
  correct: 1,
  explanation: "PIÈGE ! L'autorisation d'absence NE constitue PAS un droit — c'est une facilité qui peut être accordée par le commandement selon les impératifs de service."
},

{
  difficulty: "🪨 PIERRE",
  question: "PIÈGE — Pendant combien de jours les droits à QL doivent-ils être pris sans report possible ?",
  answers: [
    "Dans les 2 semaines",
    "Dans les 4 semaines",
    "Dans les 8 semaines",
    "Dans le mois civil en cours"
  ],
  correct: 1,
  explanation: "Les droits à QL doivent être pris dans les 4 semaines suivant leur génération et ne font PAS l'objet de report (sauf réattribution obligatoire si supprimés pour raisons de service)."
},

// ═══════════════════════════════════════════════
// NIVEAU FER — Questions avancées
// ═══════════════════════════════════════════════

{
  difficulty: "⚙️ FER",
  question: "PIÈGE — Quelle est la durée de la permission supplémentaire pour le décès d'un enfant de moins de 25 ans ?",
  answers: ["5 jours", "8 jours", "12 jours", "14 jours + 8 jours supplémentaires"],
  correct: 3,
  explanation: "PIÈGE COMPLEXE ! Pour le décès d'un enfant de moins de 25 ans : 14 jours PLUS une 2e permission supplémentaire de 8 jours (fractionnables), à prendre dans l'année suivant le décès."
},

{
  difficulty: "⚙️ FER",
  question: "PIÈGE — Quel est le décompte des jours des permissions pour événements familiaux ?",
  answers: [
    "En jours calendaires",
    "En jours ouvrés",
    "En jours de 24h débutant à 8h",
    "En heures de service"
  ],
  correct: 1,
  explanation: "PIÈGE ! Les permissions pour événements familiaux se décomptent en jours OUVRÉS (lundi au vendredi non fériés), contrairement aux permissions de longue durée."
},

{
  difficulty: "⚙️ FER",
  question: "PIÈGE — Quelle est la durée de la permission d'éloignement par année de séjour ?",
  answers: [
    "10 jours ouvrés",
    "15 jours ouvrés non fractionnables",
    "20 jours calendaires",
    "30 jours calendaires"
  ],
  correct: 1,
  explanation: "La permission d'éloignement est de 15 jours ouvrés NON FRACTIONNABLES par année prévue de séjour, dans la limite de 30 jours ouvrés au total."
},

{
  difficulty: "⚙️ FER",
  question: "PIÈGE — La prolongation d'un séjour en cours ouvre-t-elle droit à une permission d'éloignement supplémentaire ?",
  answers: [
    "Oui, au prorata de la prolongation",
    "Oui, si la prolongation dépasse 6 mois",
    "Non, aucun droit supplémentaire",
    "Oui, avec accord du commandant de groupement"
  ],
  correct: 2,
  explanation: "PIÈGE ! La prolongation du séjour en cours N'OUVRE AUCUN DROIT SUPPLÉMENTAIRE au titre de la permission d'éloignement."
},

{
  difficulty: "⚙️ FER",
  question: "PIÈGE — Quelle est la durée minimale d'un séjour ouvrant droit au Congé de Fin de Campagne (CFC) ?",
  answers: [
    "6 mois consécutifs",
    "9 mois consécutifs",
    "Plus de 11 mois consécutifs",
    "12 mois calendaires"
  ],
  correct: 2,
  explanation: "Le CFC est accordé à l'issue d'un séjour de PLUS DE 11 MOIS CONSÉCUTIFS hors métropole (ou conditions spécifiques DOM-TOM)."
},

{
  difficulty: "⚙️ FER",
  question: "PIÈGE — Quelle est la durée maximale d'un Congé de Fin de Campagne ?",
  answers: ["3 mois", "6 mois", "9 mois", "12 mois"],
  correct: 1,
  explanation: "La durée du CFC ne peut excéder 6 mois. Elle correspond aux permissions annuelles dont le militaire n'a pas pu bénéficier pour raisons de service durant le séjour."
},

{
  difficulty: "⚙️ FER",
  question: "PIÈGE — L'autorisation d'absence pour contraintes particulières est accordée par qui ?",
  answers: [
    "Le commandant d'unité élémentaire",
    "Le commandant de compagnie",
    "Le commandant de groupement",
    "Le directeur général"
  ],
  correct: 2,
  explanation: "PIÈGE ! L'autorisation pour contraintes particulières (≤ 72h après effort opérationnel prolongé) est accordée par le COMMANDANT DE GROUPEMENT (ou autorité assimilée) — pas le CUE !"
},

{
  difficulty: "⚙️ FER",
  question: "PIÈGE — Quelle est la durée maximale de l'autorisation d'absence pour contraintes particulières ?",
  answers: ["24 heures", "48 heures", "72 heures", "4 jours"],
  correct: 2,
  explanation: "L'autorisation d'absence pour contraintes particulières ne peut excéder 72 heures. Elle est accordée après des activités opérationnelles ayant requis des efforts prolongés et inhabituels."
},

{
  difficulty: "⚙️ FER",
  question: "PIÈGE — Quelle est la durée maximale de l'autorisation d'absence pour déménagement (mutation) ?",
  answers: ["2 jours", "3 jours", "4 jours", "5 jours"],
  correct: 2,
  explanation: "Le militaire muté peut bénéficier d'une autorisation d'absence d'une durée MAXIMALE DE 4 JOURS pour déménagement, que la mutation soit d'intérêt du service ou pour convenances personnelles."
},

{
  difficulty: "⚙️ FER",
  question: "PIÈGE — Un militaire muté à l'intérieur d'une même commune bénéficie-t-il de l'autorisation de déménagement ?",
  answers: [
    "Non, uniquement si changement de commune",
    "Non, uniquement si mutation hors région",
    "Oui, même mutation intra-commune",
    "Seulement s'il est propriétaire"
  ],
  correct: 2,
  explanation: "PIÈGE ! Le militaire muté à l'intérieur d'une même commune bénéficie AUSSI de l'autorisation d'absence pour déménagement."
},

// ═══════════════════════════════════════════════
// NIVEAU DIAMANT — Questions expertes / pièges forts
// ═══════════════════════════════════════════════

{
  difficulty: "💎 DIAMANT",
  question: "PIÈGE EXPERT — Un militaire peut faire un don de jours de permission à son conjoint civil travaillant au même employeur. Quelle condition ?",
  answers: [
    "Impossible, le don est réservé aux militaires",
    "Possible, pour permettre une période de réserve militaire ou activité sapeur-pompier volontaire",
    "Possible, uniquement pour congé maladie du conjoint",
    "Possible, sans aucune condition"
  ],
  correct: 1,
  explanation: "Un militaire peut renoncer à des permissions au bénéfice de son conjoint civil (même employeur) pour lui permettre d'effectuer une période de réserve militaire OU de participer à des missions en tant que sapeur-pompier volontaire."
},

{
  difficulty: "💎 DIAMANT",
  question: "PIÈGE EXPERT — Dans quel délai la DGGN fixe-t-elle chaque année les dates de la période des permissions estivales ?",
  answers: [
    "Avant le 1er décembre de l'année précédente",
    "Avant le 15 janvier de l'année en cours",
    "Avant le 1er mars de l'année en cours",
    "Avant le 1er avril de l'année en cours"
  ],
  correct: 1,
  explanation: "En principe avant le 15 JANVIER, la DGGN fixe les dates de début et de fin de la période des permissions estivales."
},

{
  difficulty: "💎 DIAMANT",
  question: "PIÈGE EXPERT — Pendant la période estivale, quelle est la durée maximale de permission consécutive ?",
  answers: ["21 jours", "25 jours", "28 jours consécutifs", "30 jours"],
  correct: 2,
  explanation: "Pendant la période estivale, tout militaire peut bénéficier de 28 JOURS CONSÉCUTIFS de permission (décompte calendaire). Cette durée peut être augmentée ou réduite selon les nécessités."
},

{
  difficulty: "💎 DIAMANT",
  question: "PIÈGE EXPERT — L'autorisation d'absence pour fête religieuse — quelle condition préalable ?",
  answers: [
    "Elle est accordée automatiquement sur demande",
    "Elle nécessite l'accord du commandant de groupement",
    "Le militaire ne doit pas avoir pu se voir octroyer ce jour-là de permission ou repos hebdomadaire",
    "Elle est limitée à 2 fois par an"
  ],
  correct: 2,
  explanation: "PIÈGE ! L'autorisation pour fête religieuse n'est accordée QUE si le militaire n'a PAS pu se voir octroyer ce jour-là une permission ou un repos hebdomadaire. Et seulement si compatible avec le fonctionnement normal du service."
},

{
  difficulty: "💎 DIAMANT",
  question: "PIÈGE EXPERT — Quelle est la limite annuelle des autorisations d'absence pour garde d'enfant/personne handicapée ?",
  answers: [
    "10 jours ouvrés par an",
    "15 jours ouvrés par an, consécutifs ou fractionnés",
    "20 jours calendaires par an",
    "Sans limite précise, à appréciation du commandement"
  ],
  correct: 1,
  explanation: "Les autorisations pour garde d'enfant ou de personne handicapée à charge sont limitées à 15 JOURS OUVRÉS PAR AN, consécutifs ou fractionnés, sur présentation d'un justificatif."
},

{
  difficulty: "💎 DIAMANT",
  question: "PIÈGE EXPERT — L'autorisation d'absence pour candidature à une élection politique — quelle durée ?",
  answers: [
    "5 jours non fractionnables",
    "10 jours pouvant être fractionnés",
    "15 jours non fractionnables",
    "20 jours automatiques"
  ],
  correct: 1,
  explanation: "Le militaire candidat à une élection peut bénéficier de 10 JOURS d'autorisation d'absence pouvant être FRACTIONNÉS, accordée par le commandant de groupement. Il peut prolonger en prenant des permissions de longue durée."
},

{
  difficulty: "💎 DIAMANT",
  question: "PIÈGE EXPERT — Combien de QL peut-on théoriquement prendre pour 20 jours d'emploi ?",
  answers: ["5 QL", "8 QL", "10 QL minimum", "20 QL"],
  correct: 2,
  explanation: "Pour 20 jours d'emploi ou d'astreinte = 10 QL minimum (1 QL pour 2 jours). Le commandant peut en accorder davantage, mais jamais moins."
},

{
  difficulty: "💎 DIAMANT",
  question: "PIÈGE EXPERT — L'architecture du numéro attribué par le module Registre de Puls@r est ?",
  answers: [
    "Date/Unité/Type",
    "Numéro/Commune/Année",
    "Unité/Numéro/Année (UNA)",
    "Code/Unité/Séquence"
  ],
  correct: 2,
  explanation: "Le module Registre affecte chronologiquement un numéro selon l'architecture UNA : Unité/Numéro/Année, quel que soit le type de document."
},

{
  difficulty: "💎 DIAMANT",
  question: "PIÈGE EXPERT — Combien de temps après la clôture d'un document les données nominatives du module Registre sont-elles effacées ?",
  answers: ["6 mois", "12 mois", "24 mois", "36 mois"],
  correct: 1,
  explanation: "Toute information nominative est effacée 12 MOIS après la clôture du document (procédure d'anonymisation), pour interdire tout recoupement."
},

{
  difficulty: "💎 DIAMANT",
  question: "PIÈGE EXPERT — La mutation annulée pour raisons PERSONNELLES — impact sur la permission d'éloignement déjà prise ?",
  answers: [
    "Aucun impact, les jours restent acquis",
    "Les jours sont déduits des droits à permission de longue durée",
    "Les jours sont perdus définitivement",
    "Le militaire doit les rembourser financièrement"
  ],
  correct: 1,
  explanation: "PIÈGE ! Si la mutation est annulée pour raisons PERSONNELLES : les jours de permission d'éloignement pris sont déduits des droits à permission de longue durée. Si annulée pour raisons de SERVICE ou de SANTÉ : aucune déduction."
},

// ═══════════════════════════════════════════════
// NIVEAU OBSIDIENNE — Questions ultra-pièges
// ═══════════════════════════════════════════════

{
  difficulty: "🖤 OBSIDIENNE",
  question: "PIÈGE ULTIME — Un CFC peut-il faire l'objet d'un don ?",
  answers: [
    "Non, jamais",
    "Oui, dans les conditions prévues par les textes",
    "Seulement en OPEX",
    "Uniquement aux militaires de même grade"
  ],
  correct: 1,
  explanation: "PIÈGE ULTIME ! Contrairement aux permissions pour événements familiaux qui ne peuvent PAS être données, les CONGÉS DE FIN DE CAMPAGNE (CFC) PEUVENT faire l'objet d'un don dans les conditions prévues."
},

{
  difficulty: "🖤 OBSIDIENNE",
  question: "PIÈGE ULTIME — Combien de jours de don de permission au maximum peut-on solliciter ?",
  answers: [
    "10 jours non renouvelables",
    "20 jours non renouvelables",
    "30 jours renouvelables",
    "Illimité selon accord hiérarchique"
  ],
  correct: 2,
  explanation: "La demande de don ne peut excéder 30 JOURS RENOUVELABLES. Le médecin peut demander le fractionnement de ces jours."
},

{
  difficulty: "🖤 OBSIDIENNE",
  question: "PIÈGE ULTIME — Qui peut décider du rappel GÉNÉRAL des permissionnaires ?",
  answers: [
    "Uniquement le ministre de l'Intérieur",
    "Le DGGN pour les mesures d'alerte, ou le commandant de formation administrative pour nécessités exceptionnelles",
    "Uniquement le commandant de groupement",
    "Le préfet de département"
  ],
  correct: 1,
  explanation: "Le rappel général peut être décidé par : (1) le DGGN en application de mesures d'alerte, ou (2) un commandant de formation administrative si des nécessités de service exceptionnelles l'exigent. Le rappel INDIVIDUEL peut aussi être décidé par le commandant de formation administrative."
},

{
  difficulty: "🖤 OBSIDIENNE",
  question: "PIÈGE ULTIME — L'autorisation d'absence pour allaitement : quelle durée par jour ?",
  answers: [
    "30 minutes par jour",
    "1 heure par jour",
    "2 heures par jour",
    "Sans limite précise"
  ],
  correct: 1,
  explanation: "L'autorisation d'absence pour allaitement est limitée à 1 HEURE PAR JOUR, accordée par le commandant d'unité élémentaire."
},

{
  difficulty: "🖤 OBSIDIENNE",
  question: "PIÈGE ULTIME — Combien d'actes médicaux de PMA le conjoint peut-il accompagner avec autorisation d'absence ?",
  answers: [
    "1 acte médical",
    "2 actes médicaux",
    "3 actes médicaux au plus",
    "Sans limite"
  ],
  correct: 2,
  explanation: "Le conjoint ou partenaire PACS peut bénéficier d'une autorisation d'absence pour assister à 3 AU PLUS des actes médicaux obligatoires de PMA, sous réserve des nécessités de service."
},

{
  difficulty: "🖤 OBSIDIENNE",
  question: "PIÈGE ULTIME — Un militaire peut-il s'opposer au maintien de son QL si ce dernier n'a pas pu être accordé à temps ?",
  answers: [
    "Non, jamais",
    "Oui, s'il n'a pas été accordé au plus tard 1h après le début prévu, ou au-delà de 20h00",
    "Oui, uniquement avec accord du commandant de compagnie",
    "Non, sauf s'il est en repos hebdomadaire le lendemain"
  ],
  correct: 1,
  explanation: "Le militaire PEUT s'opposer au maintien de son QL si ce dernier n'a pu être accordé au plus tard 1 heure après le début normalement prévu OU au-delà de 20h00 pour raisons de service. S'il le souhaite, le QL peut malgré tout être maintenu."
},

{
  difficulty: "🖤 OBSIDIENNE",
  question: "PIÈGE ULTIME — La seconde permission supplémentaire de 8 jours suite au décès d'un enfant de moins de 25 ans — dans quel délai doit-elle être prise ?",
  answers: [
    "Dans les 3 mois suivant le décès",
    "Dans les 6 mois suivant le décès",
    "Dans l'année suivant le décès",
    "Sans limitation de délai"
  ],
  correct: 2,
  explanation: "La seconde permission supplémentaire de 8 jours (fractionnables en 2 périodes d'au moins 1 jour) doit être prise dans un délai d'UN AN à compter du décès."
},

{
  difficulty: "🖤 OBSIDIENNE",
  question: "PIÈGE ULTIME — Quelle est la règle pour le QL nocturne la veille d'une permission ?",
  answers: [
    "Il n'y a aucune règle particulière",
    "Un QL nocturne est accordé la veille d'une permission, sauf contrainte particulière",
    "Un QL diurne est accordé la veille",
    "Deux QL sont accordés la veille d'une longue permission"
  ],
  correct: 1,
  explanation: "Sauf contrainte particulière liée aux besoins du service, un QL NOCTURNE est accordé la veille d'une permission ou d'un repos hebdomadaire."
},

{
  difficulty: "🖤 OBSIDIENNE",
  question: "PIÈGE ULTIME — Puls@r est-il destiné à remplacer Sédn@ pour toutes les subdivisions d'arme ?",
  answers: [
    "Oui, pour toute la gendarmerie",
    "Non, uniquement pour la gendarmerie départementale",
    "Non, Sédn@ est remplacé uniquement pour la gendarmerie mobile et la garde républicaine",
    "Oui, mais seulement pour le module Service"
  ],
  correct: 2,
  explanation: "PIÈGE ! Puls@r a vocation à se substituer à Sédn@ UNIQUEMENT pour la gendarmerie mobile et la garde républicaine. Pour la gendarmerie départementale, c'est BB 2000 qui est remplacé."
},

{
  difficulty: "🖤 OBSIDIENNE",
  question: "PIÈGE ULTIME — Un CR (compte-rendu) validé dans Puls@r peut-il être modifié ?",
  answers: [
    "Oui, dans les 24h suivant la validation",
    "Oui, uniquement par le CDTUE",
    "Non, un CR validé n'est pas modifiable",
    "Oui, avec accord du commandant de compagnie"
  ],
  correct: 2,
  explanation: "PIÈGE ULTIME ! Un compte-rendu VALIDÉ n'est PAS modifiable. Avant validation, toute modification est tracée (GDH, grade, nom), mais seule la dernière modification apparaît — et le contenu précédent est écrasé."
}

];


// ═══════════════════════════════════════════════
// ÉTAT DU JEU — sans système de vies
// ═══════════════════════════════════════════════

let currentQuestion = 0;
let score = 0;
let xp = parseInt(localStorage.getItem("xp")) || 0;
let level = parseInt(localStorage.getItem("level")) || 1;
let combo = 0;
let goodAnswers = 0;
let badAnswers = 0;
let questionsShuffled = [];

function shuffle(arr) {
  let a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ═══════════════════════════════════════════════
// ÉLÉMENTS DOM
// ═══════════════════════════════════════════════

const questionEl    = document.getElementById("question");
const answersEl     = document.getElementById("answers");
const feedbackEl    = document.getElementById("feedback");
const nextBtn       = document.getElementById("nextBtn");
const scoreEl       = document.getElementById("score");
const xpEl          = document.getElementById("xp");
const levelEl       = document.getElementById("level");
const comboEl       = document.getElementById("combo");
const statsEl       = document.getElementById("stats");
const xpFill        = document.getElementById("xpFill");
const difficultyEl  = document.getElementById("difficulty");
const questionNumEl = document.getElementById("questionNumber");

// ═══════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════

function init() {
  questionsShuffled = shuffle(questions);
  currentQuestion = 0;
  score = 0;
  combo = 0;
  goodAnswers = 0;
  badAnswers = 0;
  scoreEl.textContent = 0;
  comboEl.textContent = "x0";
  if (statsEl) statsEl.textContent = "✅ 0  ❌ 0";
  xpEl.textContent = xp;
  levelEl.textContent = level;
  updateXPBar();
  loadQuestion();
}

// ═══════════════════════════════════════════════
// CHARGER LA QUESTION
// ═══════════════════════════════════════════════

function loadQuestion() {
  if (currentQuestion >= questionsShuffled.length) {
    showEndScreen();
    return;
  }

  const q = questionsShuffled[currentQuestion];

  difficultyEl.textContent = q.difficulty;
  difficultyEl.className = "difficulty " + getDiffClass(q.difficulty);

  questionNumEl.textContent = `Question ${currentQuestion + 1} / ${questionsShuffled.length}`;
  questionEl.textContent = q.question;

  answersEl.innerHTML = "";
  feedbackEl.style.display = "none";
  nextBtn.style.display = "none";

  const letters = ["A", "B", "C", "D"];
  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.classList.add("answer-btn");
    btn.innerHTML = `<span class="letter">${letters[index]}</span> ${answer}`;
    btn.onclick = () => checkAnswer(index, btn);
    answersEl.appendChild(btn);
  });
}

function getDiffClass(diff) {
  if (diff.includes("TERRE"))      return "diff-terre";
  if (diff.includes("PIERRE"))     return "diff-pierre";
  if (diff.includes("FER"))        return "diff-fer";
  if (diff.includes("DIAMANT"))    return "diff-diamant";
  if (diff.includes("OBSIDIENNE")) return "diff-obsidienne";
  return "";
}

// ═══════════════════════════════════════════════
// VÉRIFIER LA RÉPONSE
// ═══════════════════════════════════════════════

function checkAnswer(index, btn) {
  const q = questionsShuffled[currentQuestion];
  const buttons = document.querySelectorAll(".answer-btn");
  buttons.forEach(b => b.disabled = true);

  if (index === q.correct) {
    btn.classList.add("correct");
    const pts = 10 + (combo * 2);
    score += pts;
    xp += 20;
    combo++;
    goodAnswers++;
    feedbackEl.className = "feedback-good";
    feedbackEl.innerHTML = `<strong>✅ BONNE RÉPONSE ! +${pts} pts${combo >= 3 ? ' 🔥 COMBO x' + combo : ''}</strong><br><br>${q.explanation}`;
  } else {
    btn.classList.add("wrong");
    buttons[q.correct].classList.add("correct");
    combo = 0;
    badAnswers++;
    feedbackEl.className = "feedback-bad";
    feedbackEl.innerHTML = `<strong>❌ MAUVAISE RÉPONSE — Retiens bien ça !</strong><br><br>${q.explanation}`;
  }

  feedbackEl.style.display = "block";
  scoreEl.textContent = score;
  comboEl.textContent = combo >= 3 ? `x${combo} 🔥` : `x${combo}`;
  if (statsEl) statsEl.textContent = `✅ ${goodAnswers}  ❌ ${badAnswers}`;
  updateXP();
  nextBtn.style.display = "inline-block";
}

// ═══════════════════════════════════════════════
// XP & LEVEL
// ═══════════════════════════════════════════════

function updateXP() {
  xpEl.textContent = xp;
  updateXPBar();
  if (xp >= level * 100) {
    level++;
    levelEl.textContent = level;
    localStorage.setItem("level", level);
    showLevelUp();
  }
  localStorage.setItem("xp", xp);
}

function updateXPBar() {
  const percent = xp % 100;
  xpFill.style.width = percent + "%";
  const pctEl = document.getElementById("xp-pct");
  if (pctEl) pctEl.textContent = percent + "%";
}

// ═══════════════════════════════════════════════
// POPUPS
// ═══════════════════════════════════════════════

function showPopup(title, text, btnLabel, onClose) {
  const popup = document.getElementById("popup");
  document.getElementById("popup-title").textContent = title;
  document.getElementById("popup-text").textContent = text;
  const btn = document.getElementById("popup-btn");
  btn.textContent = btnLabel;
  btn.onclick = () => {
    popup.style.display = "none";
    if (onClose) onClose();
  };
  popup.style.display = "flex";
}

function showLevelUp() {
  showPopup("⬆️ LEVEL UP !", `Niveau ${level} atteint !\n+20 XP — Continue comme ça !`, "CONTINUER !", null);
}

function showEndScreen() {
  const total = questionsShuffled.length;
  const pct = Math.round((goodAnswers / total) * 100);
  let rank, emoji;
  if (pct === 100)     { rank = "GRAND MAÎTRE JEDI";    emoji = "🏆"; }
  else if (pct >= 85)  { rank = "MAÎTRE JEDI";           emoji = "⚡"; }
  else if (pct >= 70)  { rank = "CHEVALIER CONFIRMÉ";    emoji = "🛡️"; }
  else if (pct >= 55)  { rank = "PADAWAN AVANCÉ";        emoji = "📋"; }
  else                 { rank = "RECRUE EN FORMATION";   emoji = "📚"; }

  const msg = `${emoji} ${rank}\n\n✅ Bonnes réponses : ${goodAnswers} / ${total} (${pct}%)\n❌ Erreurs : ${badAnswers}\n💎 Score : ${score} pts\n⚡ XP total : ${xp}`;
  showPopup("🎉 QUIZ TERMINÉ !", msg, "↺ REJOUER", () => init());
}

// ═══════════════════════════════════════════════
// BOUTON SUIVANT
// ═══════════════════════════════════════════════

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  loadQuestion();
});

// ═══════════════════════════════════════════════
// STARFIELD ANIMÉ
// ═══════════════════════════════════════════════

const canvas = document.getElementById("stars");
const ctx    = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let stars = [];
for (let i = 0; i < 200; i++) {
  stars.push({
    x:     Math.random() * window.innerWidth,
    y:     Math.random() * window.innerHeight,
    r:     Math.random() * 1.5 + 0.3,
    speed: Math.random() * 0.3 + 0.05,
    a:     Math.random()
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach(s => {
    s.y += s.speed;
    if (s.y > canvas.height) { s.y = 0; s.x = Math.random() * canvas.width; }
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${s.a})`;
    ctx.fill();
  });
  requestAnimationFrame(drawStars);
}

drawStars();
init();
