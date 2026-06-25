// Pour ajouter un article : copier un objet, changer tous les champs.
// - slug : URL de l'article (pas d'espaces ni accents, tirets uniquement)
// - image : chemin depuis /public (ex: "/mon-image.jpg")
// - contenu : tableau de paragraphes. Chaque paragraphe = une chaîne de texte.

export const actualites = [
  {
    slug: 'seminaire-securite-aerienne-dakar-2024',
    titre: 'Séminaire sur la sécurité aérienne à Dakar',
    date: '2024-11-15',
    categorie: 'Séminaire',
    resume: "ACI a animé un séminaire de deux jours dédié aux normes OACI de sécurité opérationnelle, réunissant les acteurs clés de l'aviation civile en Afrique de l'Ouest.",
    image: '/actualites-hero.jpg',
    contenu: [
      "Du 14 au 15 novembre 2024, Aviation Consulting International a organisé à Dakar un séminaire de haut niveau centré sur les exigences OACI en matière de sécurité opérationnelle.",
      "Plus de 40 professionnels issus d'administrations d'aviation civile, de compagnies aériennes et d'aéroports de la sous-région ont participé aux deux journées de travail.",
      "Les thématiques abordées ont inclus la mise en place de Systèmes de Gestion de la Sécurité (SMS), l'audit interne, et le retour d'expérience sur les incidents de sécurité.",
      "ACI a animé les sessions avec des experts certifiés OACI, apportant une approche pratique et des outils directement applicables pour les participants.",
    ],
  },
  {
    slug: 'formation-surete-aeroportuaire-2024',
    titre: 'Formation en sûreté aéroportuaire — Promotion 2024',
    date: '2024-09-03',
    categorie: 'Formation',
    resume: "Une nouvelle promotion de professionnels a été formée aux normes OACI et IATA en sûreté aéroportuaire, avec remise des attestations de compétence.",
    image: '/airport-planning.webp',
    contenu: [
      "En septembre 2024, ACI a clôturé sa promotion annuelle de formation en sûreté aéroportuaire, accueillant 25 professionnels venus de 6 pays d'Afrique subsaharienne.",
      "Le programme, d'une durée de cinq jours, couvre l'ensemble des domaines définis par l'Annexe 17 de l'OACI : contrôle d'accès, inspection des passagers, sûreté du fret et gestion des menaces.",
      "Les participants ont reçu leurs attestations de compétence à l'issue des évaluations pratiques et théoriques.",
      "Cette formation s'inscrit dans la mission d'ACI de renforcer les capacités humaines du secteur aéronautique en Afrique.",
    ],
  },
  {
    slug: 'mission-audit-compagnie-aerienne-2025',
    titre: "Mission d'audit auprès d'une compagnie régionale",
    date: '2025-02-20',
    categorie: 'Mission',
    resume: "ACI a conduit une mission d'audit de sécurité opérationnelle pour le compte d'une compagnie aérienne régionale, aboutissant à un plan d'action concret.",
    image: '/air-operations.jpg',
    contenu: [
      "En février 2025, les experts d'ACI ont réalisé un audit complet de sécurité opérationnelle au sein d'une compagnie aérienne régionale africaine.",
      "L'audit a porté sur la documentation opérationnelle, les procédures de vol, la gestion des équipages, la maintenance et la conformité réglementaire.",
      "À l'issue de la mission, ACI a remis un rapport détaillé accompagné d'un plan d'action priorisé, permettant à la compagnie d'engager immédiatement les corrections nécessaires.",
      "Cette mission illustre l'approche terrain d'ACI : des recommandations concrètes, directement applicables, adaptées au contexte opérationnel local.",
    ],
  },
  {
    slug: 'atelier-gestion-crise-aeroportuaire-2025',
    titre: "Atelier de gestion de crise aéroportuaire — Abidjan 2025",
    date: '2025-05-08',
    categorie: 'Atelier',
    resume: "ACI a animé un atelier intensif sur la gestion des situations d'urgence aéroportuaires à Abidjan, réunissant les équipes de sécurité de trois aéroports internationaux.",
    image: '/airport-capacity.webp',
    contenu: [
      "Les 7 et 8 mai 2025, ACI a organisé à Abidjan un atelier pratique dédié à la gestion des crises et situations d'urgence en environnement aéroportuaire.",
      "Cet atelier a réuni les responsables sécurité de trois grands aéroports internationaux de la sous-région, soit une trentaine de participants au total.",
      "Au programme : simulations de scénarios d'urgence, coordination inter-services, communication de crise et retour d'expérience sur des incidents réels anonymisés.",
      "Les participants ont notamment travaillé sur les protocoles d'évacuation, la coordination avec les services de secours extérieurs et la gestion médiatique en situation de crise.",
      "ACI compte reconduire cet atelier en format régional dès le second semestre 2025, avec l'objectif d'harmoniser les pratiques à l'échelle de l'Afrique de l'Ouest.",
    ],
  },
]
