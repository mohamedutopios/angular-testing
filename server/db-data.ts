export const COURSES: any = {

  12: {
    id: 12,
    titles: {
      description: 'Cours de Pâtisserie',
      longDescription: 'Guide complet sur la pâtisserie, des bases aux techniques avancées'
    },
    iconUrl: 'https://mohamed-formation.s3.eu-west-3.amazonaws.com/pat.webp',
    category: 'BEGINNER',
    seqNo: 0,
    url: 'patisserie-course',
    lessonsCount: 10,
  },

  2: {
    id: 2,
    titles: {
      description: 'Cuisine Française Traditionnelle',
      longDescription: 'Découvrez les plats emblématiques de la cuisine française et apprenez à les préparer à la maison'
    },
    iconUrl: 'https://mohamed-formation.s3.eu-west-3.amazonaws.com/trad.webp',
    lessonsCount: 10,
    category: 'BEGINNER',
    seqNo: 1,
    url: 'cuisine-francaise-course'
  },

  3: {
    id: 3,
    titles: {
      description: 'Techniques de Découpe des Aliments',
      longDescription: 'Apprenez à manipuler les couteaux comme un chef et à découper les aliments de manière précise'
    },
    iconUrl: 'https://mohamed-formation.s3.eu-west-3.amazonaws.com/coupe.webp',
    category: 'BEGINNER',
    lessonsCount: 10,
    seqNo: 2,
    url: 'decoupe-course'
  },

  4: {
    id: 4,
    titles: {
      description: 'Cuisine Végétarienne',
      longDescription: 'Explorez une grande variété de recettes végétariennes, saines et savoureuses'
    },
    iconUrl: 'https://mohamed-formation.s3.eu-west-3.amazonaws.com/vege.webp',
    category: 'BEGINNER',
    lessonsCount: 10,
    seqNo: 3,
    url: 'vegetarien-course'
  },

  1: {
    id: 1,
    titles: {
      description: 'Cuisine Fusion - Techniques Modernes',
      longDescription: 'Découvrez comment fusionner des cuisines du monde entier avec des techniques modernes'
    },
    iconUrl: 'https://mohamed-formation.s3.eu-west-3.amazonaws.com/fusion.webp',
    lessonsCount: 10,
    category: 'ADVANCED',
    seqNo: 4,
    url: 'fusion-course'
  },

  5: {
    id: 5,
    titles: {
      description: 'Cours de Boulangerie',
      longDescription: 'Maîtrisez les bases de la boulangerie et apprenez à faire vos propres pains et viennoiseries'
    },
    iconUrl: 'https://mohamed-formation.s3.eu-west-3.amazonaws.com/pain.webp',
    category: 'BEGINNER',
    lessonsCount: 10,
    seqNo: 5,
    url: 'boulangerie-course'
  },

  6: {
    id: 6,
    titles: {
      description: 'Cuisine Asiatique - Techniques Fondamentales',
      longDescription: 'Apprenez les techniques de base de la cuisine asiatique et préparez des plats classiques'
    },
    iconUrl: 'https://mohamed-formation.s3.eu-west-3.amazonaws.com/asian.webp',
    category: 'ADVANCED',
    lessonsCount: 11,
    seqNo: 6,
    url: 'cuisine-asiatique-course'
  },

  7: {
    id: 7,
    titles: {
      description: 'Cuisine Méditerranéenne',
      longDescription: 'Explorez les saveurs et les techniques de la cuisine méditerranéenne'
    },
    iconUrl: 'https://mohamed-formation.s3.eu-west-3.amazonaws.com/med.webp',
    category: 'ADVANCED',
    lessonsCount: 8,
    seqNo: 7,
    url: 'mediterraneenne-course'
  },

  8: {
    id: 8,
    titles: {
      description: 'Techniques Avancées de Boulangerie',
      longDescription: 'Apprenez des techniques avancées de boulangerie pour créer des pains et pâtisseries sophistiqués'
    },
    iconUrl: 'https://mohamed-formation.s3.eu-west-3.amazonaws.com/boul2.webp',
    category: 'ADVANCED',
    seqNo: 8,
    url: 'advanced-boulangerie-course'
  },

  9: {
    id: 9,
    titles: {
      description: 'Techniques de Conservation des Aliments',
      longDescription: 'Apprenez comment conserver les aliments de manière efficace avec des techniques traditionnelles et modernes'
    },
    iconUrl: 'https://mohamed-formation.s3.eu-west-3.amazonaws.com/rangement.webp',
    category: 'BEGINNER',
    seqNo: 9,
    url: 'conservation-course'
  },

  10: {
    id: 10,
    titles: {
      description: 'Cuisine Réactive - Techniques de Récupération des Restes',
      longDescription: 'Apprenez des astuces et techniques pour transformer les restes en délicieux plats créatifs'
    },
    iconUrl: 'https://mohamed-formation.s3.eu-west-3.amazonaws.com/creative.webp',
    category: 'BEGINNER',
    seqNo: 10,
    url: 'cuisine-reactive-course'
  },

  11: {
    id: 11,
    titles: {
      description: 'Cours sur les Épices et Aromates',
      longDescription: 'Comprenez l’importance des épices et aromates et apprenez à les utiliser pour sublimer vos plats'
    },
    iconUrl: 'https://mohamed-formation.s3.eu-west-3.amazonaws.com/arome.webp',
    category: 'BEGINNER',
    seqNo: 11,
    url: 'epices-course'
  }

};

export const LESSONS = {

  1: {
    id: 1,
    description: 'Introduction à la Pâtisserie - Préparer son espace de travail',
    duration: '4:17',
    seqNo: 1,
    courseId: 12
  },
  2: {
    id: 2,
    description: 'Les bases de la Boulangerie - Pétrissage à la main',
    duration: '2:07',
    seqNo: 2,
    courseId: 12
  },
  3: {
    id: 3,
    description: 'Techniques de Découpe - Les différents types de couteaux et leur utilisation',
    duration: '2:33',
    seqNo: 3,
    courseId: 2
  },
  4: {
    id: 4,
    description: 'Préparation des Pâtes - Types et Consistances',
    duration: '4:44',
    seqNo: 4,
    courseId: 12
  },
  5: {
    id: 5,
    description: 'Techniques de Cuisson - Maîtriser la température et le temps',
    duration: '2:55',
    seqNo: 5,
    courseId: 12
  },
  6: {
    id: 6,
    description: 'Éléments Clés pour une Pâtisserie Réussie - Dosage et Ingrédients',
    duration: '3:27',
    seqNo: 6,
    courseId: 12
  },
  7: {
    id: 7,
    description: 'Décoration et Finitions des Pâtisseries - Techniques de Présentation',
    duration: '9:22',
    seqNo: 7,
    courseId: 12
  },
  8: {
    id: 8,
    description: 'Recette Classique : Les Croissants - Réalisation de A à Z',
    duration: '1:26',
    seqNo: 8,
    courseId: 12
  },
  9: {
    id: 9,
    description: 'Recette Classique : La Baguette Traditionnelle',
    duration: '2:08',
    seqNo: 9,
    courseId: 5
  },
  10: {
    id: 10,
    description: 'Techniques de Fermentation pour le Pain - Contrôle du Temps de Levée',
    duration: '4:01',
    seqNo: 10,
    courseId: 5
  },

  // Cours de Cuisine Asiatique
  11: {
    id: 11,
    description: 'Introduction à la Cuisine Asiatique - Les Épices et Ingrédients Clés',
    duration: '08:19',
    seqNo: 1,
    courseId: 6
  },
  12: {
    id: 12,
    description: 'Les Bases du Riz Parfait - Techniques de Cuisson',
    duration: '04:17',
    seqNo: 2,
    courseId: 6
  },
  13: {
    id: 13,
    description: 'Préparation des Nouilles - Astuces pour une Texture Parfaite',
    duration: '06:05',
    seqNo: 3,
    courseId: 6
  },
  14: {
    id: 14,
    description: 'Cuisson au Wok - Maîtrise de la Chaleur',
    duration: '03:57',
    seqNo: 4,
    courseId: 6
  },
  15: {
    id: 15,
    description: 'Sushis et Makis - Techniques Traditionnelles de Roulement',
    duration: '06:00',
    seqNo: 5,
    courseId: 6
  },
  16: {
    id: 16,
    description: 'Plats Vapeur : Dim Sum et Baozi - Maîtrise de la Cuisson Vapeur',
    duration: '04:53',
    seqNo: 6,
    courseId: 6
  },
  17: {
    id: 17,
    description: 'Recette de Soupe Miso - Techniques et Variations',
    duration: '09:14',
    seqNo: 7,
    courseId: 6
  },
  18: {
    id: 18,
    description: 'Tartare de Poisson - Manipulation et Préparation Sûres',
    duration: '06:08',
    seqNo: 8,
    courseId: 6
  },
  19: {
    id: 19,
    description: 'Tempura Parfaite - Techniques de Friture Légère',
    duration: '08:50',
    seqNo: 9,
    courseId: 6
  },
  20: {
    id: 20,
    description: 'Maîtrise du Bouillon Ramen - Secrets pour une Saveur Riche',
    duration: '05:46',
    seqNo: 10,
    courseId: 6
  },
  21: {
    id: 21,
    description: 'Sushi Avancé - Création de Rouleaux Complexes',
    duration: '06:31',
    seqNo: 11,
    courseId: 6
  },

  // Cours de Cuisine Méditerranéenne
  22: {
    id: 22,
    description: 'Introduction à la Cuisine Méditerranéenne - Les Saveurs Essentielles',
    duration: '07:19',
    seqNo: 1,
    courseId: 7
  },
  23: {
    id: 23,
    description: 'Les Herbes et Épices de la Méditerranée - Utilisation et Propriétés',
    duration: '6:59',
    seqNo: 2,
    courseId: 7
  },
  24: {
    id: 24,
    description: 'Recettes de Mezze - Houmous, Tzatziki, et plus',
    duration: '7:28',
    seqNo: 3,
    courseId: 7
  },
  25: {
    id: 25,
    description: 'Maîtrise de la Feta et des Fromages Méditerranéens',
    duration: '10:17',
    seqNo: 4,
    courseId: 7
  },
  26: {
    id: 26,
    description: 'Cuisson Parfaite du Poisson Méditerranéen',
    duration: '09:50',
    seqNo: 5,
    courseId: 7
  },
  27: {
    id: 27,
    description: 'Préparation des Tagines - Techniques et Secrets de la Cuisson Lente',
    duration: '04:44',
    seqNo: 6,
    courseId: 7
  },
  28: {
    id: 28,
    description: 'Salades Méditerranéennes - Fraîcheur et Équilibre des Saveurs',
    duration: '06:07',
    seqNo: 7,
    courseId: 7
  },
  29: {
    id: 29,
    description: 'Pains Méditerranéens - Focaccia et Pita Maison',
    duration: '05:38',
    seqNo: 8,
    courseId: 7
  },
  30: {
    id: 30,
    description: 'Desserts Méditerranéens - Baklava et Halva',
    duration: '07:05',
    seqNo: 9,
    courseId: 7
  },

  // Cours de Cuisine Fusion
  31: {
    id: 31,
    description: 'Introduction à la Cuisine Fusion - Combiner les Saveurs du Monde',
    duration: '5:38',
    seqNo: 1,
    courseId: 1
  },
  32: {
    id: 32,
    description: 'Techniques Modernes en Cuisine - Utilisation de l’Azote Liquide',
    duration: '5:12',
    seqNo: 2,
    courseId: 1
  },
  33: {
    id: 33,
    description: 'Cuisine Moléculaire - Gelées et Mousses Innovantes',
    duration: '4:07',
    seqNo: 3,
    courseId: 1
  },
  34: {
    id: 34,
    description: 'Combinaison de Saveurs Inattendues - Salé et Sucré',
    duration: '7:32',
    seqNo: 4,
    courseId: 1
  },
  35: {
    id: 35,
    description: 'Présentation Artistique des Plats - Techniques Visuelles',
    duration: '6:28',
    seqNo: 5,
    courseId: 1
  },
  36: {
    id: 36,
    description: 'Utilisation des Émulsions et Espumas',
    duration: '4:38',
    seqNo: 6,
    courseId: 1
  },
  37: {
    id: 37,
    description: 'Techniques de Sphérification - Création de Billes Liquides',
    duration: '7:54',
    seqNo: 7,
    courseId: 1
  },
  38: {
    id: 38,
    description: 'Déconstruction de Plats Classiques - Nouvelle Approche',
    duration: '5:31',
    seqNo: 8,
    courseId: 1
  },
  39: {
    id: 39,
    description: 'Cuisine Sous Vide - Cuisson Précise des Aliments',
    duration: '8:19',
    seqNo: 9,
    courseId: 1
  },
  40: {
    id: 40,
    description: 'Création de Menus Dégustation - Équilibre et Progression',
    duration: '7:05',
    seqNo: 10,
    courseId: 1
  },

  // Cours sur les Épices et Aromates
  41: {
    id: 41,
    description: 'Introduction aux Épices du Monde',
    duration: '5:38',
    seqNo: 1,
    courseId: 11
  },
  42: {
    id: 42,
    description: 'Mélanges d’Épices - Créer Vos Propres Assaisonnements',
    duration: '5:12',
    seqNo: 2,
    courseId: 11
  },
  43: {
    id: 43,
    description: 'Utilisation des Herbes Fraîches - Techniques de Coupe et Conservation',
    duration: '4:07',
    seqNo: 3,
    courseId: 11
  },
  44: {
    id: 44,
    description: 'Épices et Santé - Propriétés Bénéfiques',
    duration: '7:32',
    seqNo: 4,
    courseId: 11
  },
  45: {
    id: 45,
    description: 'Épices dans les Desserts - Cannelle, Vanille, et Plus',
    duration: '6:28',
    seqNo: 5,
    courseId: 11
  },
  46: {
    id: 46,
    description: 'Infusions et Huiles Aromatisées Maison',
    duration: '4:38',
    seqNo: 6,
    courseId: 11
  },
  47: {
    id: 47,
    description: 'Marinades et Rubs - Techniques pour Sublimer les Viandes',
    duration: '7:54',
    seqNo: 7,
    courseId: 11
  },
  48: {
    id: 48,
    description: 'Épices Exotiques - Découverte et Utilisation',
    duration: '5:31',
    seqNo: 8,
    courseId: 11
  },
  49: {
    id: 49,
    description: 'Stockage et Conservation des Épices - Maintenir la Fraîcheur',
    duration: '8:19',
    seqNo: 9,
    courseId: 11
  },

  50: {
    id: 50,
    description: 'Introduction à la Cuisine Française - Histoire et Influence',
    duration: '5:31',
    seqNo: 1,
    courseId: 2
  },
  51: {
    id: 51,
    description: 'Les Sauces Mères - Fondements de la Gastronomie Française',
    duration: '8:19',
    seqNo: 2,
    courseId: 2
  },
  52: {
    id: 52,
    description: 'Techniques de Cuisson Classiques - Poêler, Rôtir, Braiser',
    duration: '7:05',
    seqNo: 3,
    courseId: 2
  },
  53: {
    id: 53,
    description: 'Préparation des Viandes - Découpe et Cuisson',
    duration: '5:38',
    seqNo: 4,
    courseId: 2
  },
  54: {
    id: 54,
    description: 'Introduction aux Techniques de Découpe - Sécurité et Précautions',
    duration: '5:31',
    seqNo: 1,
    courseId: 3
  },
  55: {
    id: 55,
    description: 'Les Couteaux de Cuisine - Types et Utilisations',
    duration: '8:19',
    seqNo: 2,
    courseId: 3
  },
  56: {
    id: 56,
    description: 'Technique de la Julienne - Découpe en Fins Bâtonnets',
    duration: '7:05',
    seqNo: 3,
    courseId: 3
  },
  57: {
    id: 57,
    description: 'Technique du Brunoise - Découpe en Petits Dés',
    duration: '5:38',
    seqNo: 4,
    courseId: 3
  },
  58: {
    id: 58,
    description: 'Introduction à la Cuisine Végétarienne - Principes et Bienfaits',
    duration: '5:31',
    seqNo: 1,
    courseId: 4
  },
  59: {
    id: 59,
    description: 'Substituts de Viande - Légumineuses et Protéines Végétales',
    duration: '8:19',
    seqNo: 2,
    courseId: 4
  },
  60: {
    id: 60,
    description: 'Techniques de Cuisson pour les Légumes - Vapeur, Grillé, Rôti',
    duration: '7:05',
    seqNo: 3,
    courseId: 4
  },
  61: {
    id: 61,
    description: 'Préparation des Grains Complet - Quinoa, Riz Brun, Orge',
    duration: '5:38',
    seqNo: 4,
    courseId: 4
  },
  62: {
    id: 62,
    description: 'Cuisiner avec le Tofu et le Tempeh - Marinades et Saveurs',
    duration: '5:12',
    seqNo: 5,
    courseId: 4
  },
  63: {
    id: 63,
    description: 'Introduction à la Conservation des Aliments - Principes de Base',
    duration: '5:45',
    seqNo: 1,
    courseId: 6
  },
  64: {
    id: 64,
    description: 'Méthodes de Conservation Traditionnelles - Salage, Fumage, Séchage',
    duration: '6:30',
    seqNo: 2,
    courseId: 6
  },
  65: {
    id: 65,
    description: 'Conservation par Froid - Réfrigération et Congélation',
    duration: '7:15',
    seqNo: 3,
    courseId: 6
  },
  66: {
    id: 66,
    description: 'Stérilisation et Mise en Conserve - Techniques et Sécurité',
    duration: '8:05',
    seqNo: 4,
    courseId: 6
  },
  67: {
    id: 67,
    description: 'Introduction à la Cuisine Réactive - Valoriser les Restes',
    duration: '5:20',
    seqNo: 1,
    courseId: 7
  },
  68: {
    id: 68,
    description: 'Organisation et Stockage des Restes - Bonnes Pratiques',
    duration: '6:15',
    seqNo: 2,
    courseId: 7
  },
  69: {
    id: 69,
    description: 'Recettes de Soupes avec des Restes - Créativité Culinaire',
    duration: '7:05',
    seqNo: 3,
    courseId: 7
  },
  70: {
    id: 70,
    description: 'Transformation des Restes de Viande - Hachis, Boulettes, et Plus',
    duration: '5:50',
    seqNo: 4,
    courseId: 7
  },
  71: {
    id: 71,
    description: 'Restes de Pain - Croûtons, Pudding, Pain Perdu',
    duration: '6:40',
    seqNo: 5,
    courseId: 7
  },

};

export function findCourseById(courseId: number) {
  return COURSES[courseId];
}

export function findLessonsForCourse(courseId: number) {
  return Object.values(LESSONS).filter(lesson => lesson.courseId == courseId);
}
