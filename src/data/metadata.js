/**
 * WEBSITE METADATA - CENTRAL DATA FILE
 * 
 * All website content is stored here for easy updates.
 * Edit this file to change any text, links, images, or data across the entire site.
 */

export const metadata = {
  // ========================================
  // SITE INFO
  // ========================================
  site: {
    name: "Salman Auto",
    tagline: "SERVICES",
    fullName: "AutoPro Services",
    description: "Your trusted partner for professional automotive care and maintenance services.",
    year: new Date().getFullYear(),
  },

  // ========================================
  // NAVBAR
  // ========================================
  navbar: {
    links: [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Services", path: "/services" },
      { name: "Contact", path: "/contact" },
    ],
    ctaButton: {
      text: "Book Now",
      link: "/contact",
    },
  },

  // ========================================
  // HOME PAGE
  // ========================================
home: {
  hero: {
    subtitle: "Services automobiles premium",
    title: "Votre voiture mérite",
    titleHighlight: "un entretien expert",
    description: "Des services professionnels d'entretien et de réparation automobile sur lesquels vous pouvez compter. Nous maintenons votre véhicule à des performances optimales.",
    image: "https://images.unsplash.com/photo-1760688962025-e56c8022daf8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcG9ydHMlMjBjYXIlMjBmcm9udCUyMHZpZXclMjBkYXJrfGVufDF8fHx8MTc3NDExNTg0Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    buttons: [
      { text: "Explorer les services", link: "/services", primary: true },
      { text: "Prendre rendez-vous", link: "/contact", primary: false },
    ],
  },

  servicesSection: {
    subtitle: "Ce que nous proposons",
    title: "Nos services premium",
    description: "De l'entretien courant aux réparations spécialisées, nous proposons des services automobiles complets pour garder votre véhicule en parfait état.",
    viewAllLink: "/services",
    viewAllText: "Voir tous les services",
  },

  services: [
    {
      title: "Entretien automobile",
      description: "Un entretien régulier pour garantir le bon fonctionnement et l'efficacité de votre véhicule.",
      image: "https://images.unsplash.com/photo-1702146713870-8cdd7ab983fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBtYWludGVuYW5jZSUyMG1lY2hhbmljJTIwd29ya3Nob3B8ZW58MXx8fHwxNzc0MTE1ODQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Diagnostic",
      description: "Des diagnostics informatiques avancés pour identifier et résoudre rapidement les problèmes.",
      image: "https://images.unsplash.com/photo-1737493698550-085d3cf55445?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBkaWFnbm9zdGljJTIwY29tcHV0ZXIlMjBzY2FubmVyfGVufDF8fHx8MTc3NDExNTg0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Nettoyage automobile",
      description: "Des services de detailing professionnels pour redonner à votre voiture un aspect neuf.",
      image: "https://images.unsplash.com/photo-1761934657948-708146148588?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjYXIlMjBkZXRhaWxpbmclMjBjbGVhbmluZ3xlbnwxfHx8fDE3NzQxMTU4NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Service des pneus",
      description: "Services complets pour les pneus, incluant le remplacement, la rotation et l'équilibrage.",
      image: "https://images.unsplash.com/photo-1764015805414-df7de89d405b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aXJlJTIwd2hlZWwlMjBzZXJ2aWNlJTIwY2hhbmdlfGVufDF8fHx8MTc3NDExNTg0NHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ],

  whyChooseUs: {
    subtitle: "Pourquoi nous choisir",
    title: "L'excellence en entretien automobile",
    description: "Nous combinons expertise, qualité et service client pour offrir la meilleure expérience automobile.",
    benefits: [
      "Techniciens certifiés et expérimentés",
      "Équipements de diagnostic de pointe",
      "Tarification transparente sans frais cachés",
      "Pièces de qualité avec garantie",
      "Service rapide et efficace",
    ],
    ctaText: "En savoir plus sur nous",
    ctaLink: "/about",
  },

  features: [
    {
      title: "Techniciens experts",
      description: "Des professionnels certifiés avec des années d'expérience",
    },
    {
      title: "Service rapide",
      description: "Un service rapide sans compromettre la qualité",
    },
    {
      title: "Qualité garantie",
      description: "Satisfaction garantie à 100% sur tous nos services",
    },
  ],

  testimonials: {
    subtitle: "Témoignages",
    title: "Ce que disent nos clients",
    description: "Ne vous fiez pas seulement à notre parole - découvrez les avis de nos clients satisfaits.",
    items: [
      {
        name: "John Davis",
        role: "Chef d'entreprise",
        content: "AutoPro entretient ma flotte depuis 3 ans. Leur professionnalisme et leur souci du détail sont incomparables.",
        rating: 5,
      },
      {
        name: "Sarah Miller",
        role: "Cliente régulière",
        content: "Le meilleur service automobile en ville ! Ils expliquent toujours tout clairement et le travail est impeccable.",
        rating: 5,
      },
      {
        name: "Mike Johnson",
        role: "Passionné d'automobile",
        content: "Je fais confiance à AutoPro pour mes véhicules de luxe. Ils traitent chaque voiture comme la leur.",
        rating: 5,
      },
    ],
  },

  cta: {
    title: "Prêt à commencer ?",
    description: "Prenez rendez-vous dès aujourd'hui et découvrez la différence AutoPro. Votre voiture mérite le meilleur entretien.",
    buttonText: "Prendre rendez-vous maintenant",
    buttonLink: "/contact",
  },
},

  // ========================================
  // ABOUT PAGE
  // ========================================
about: {
  hero: {
    subtitle: "À propos de nous",
    title: "Leader dans l'excellence automobile",
    description: "Depuis plus de 15 ans, AutoPro est le choix de confiance pour les services automobiles professionnels, alliant expertise, qualité et service client.",
  },

  stats: [
    { number: "15+", label: "Années d'expérience" },
    { number: "10K+", label: "Clients satisfaits" },
    { number: "50+", label: "Techniciens experts" },
    { number: "98%", label: "Satisfaction client" },
  ],

  story: {
    subtitle: "Notre histoire",
    title: "Construit sur la passion et l'expertise",
    description: "Ce qui a commencé comme un petit garage familial est devenu le centre de service automobile le plus fiable de la région.",
    image: "https://images.unsplash.com/photo-1759655360665-13a456981d74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwdGVhbSUyMHByb2Zlc3Npb25hbHN8ZW58MXx8fHwxNzc0MTE1ODQ0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    paragraphs: [
      "Fondé en 2010, AutoPro est né d'une mission simple : offrir des services automobiles honnêtes et de qualité sur lesquels les conducteurs peuvent réellement compter. Notre fondateur, mécanicien de troisième génération, a identifié le besoin d’un centre combinant technologie de pointe et savoir-faire traditionnel.",
      "Aujourd’hui, nous avons grandi pour devenir une équipe de plus de 50 techniciens certifiés, sans jamais perdre de vue nos valeurs fondamentales. Chaque véhicule reçoit le même soin méticuleux et la même attention aux détails qui ont bâti notre réputation.",
      "Nous investissons dans les derniers équipements de diagnostic et dans la formation continue de notre équipe, afin de pouvoir gérer aussi bien l’entretien courant que les réparations complexes sur toutes les marques et modèles.",
    ],
  },

  mission: {
    title: "Notre mission",
    description: "Offrir des services automobiles exceptionnels qui dépassent les attentes des clients grâce à un savoir-faire expert, une communication transparente et un engagement constant envers la qualité. Nous visons à être le partenaire automobile de confiance de nos clients.",
  },

  vision: {
    title: "Notre vision",
    description: "Être reconnu comme le leader des services automobiles, en établissant des standards d'excellence, d'innovation et de service client. Nous imaginons un avenir où chaque conducteur a accès à un service honnête et professionnel.",
  },

  values: [
    {
      title: "Qualité",
      description: "Nous ne faisons aucun compromis sur la qualité. Chaque service respecte nos normes les plus élevées.",
    },
    {
      title: "Orientation client",
      description: "Votre satisfaction est notre priorité. Nous écoutons et offrons un service personnalisé.",
    },
    {
      title: "Excellence",
      description: "Amélioration continue et savoir-faire expert dans tout ce que nous faisons.",
    },
    {
      title: "Fiabilité",
      description: "Un service fiable sur lequel vous pouvez compter, livré à temps, à chaque fois.",
    },
  ],

  team: {
    subtitle: "Notre équipe",
    title: "Des techniciens experts de confiance",
    description: "Notre équipe de professionnels certifiés apporte des décennies d'expérience combinée et une passion pour l'excellence automobile.",
    image: "https://images.unsplash.com/photo-1765603729821-804d347a3680?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjYXIlMjBzaG93cm9vbSUyMGludGVyaW9yfGVufDF8fHx8MTc3Mzk5NDUxOXww&ixlib=rb-4.1.0&q=80&w=1080",
    highlights: [
      {
        title: "Certifiés ASE",
        description: "Tous nos techniciens sont certifiés ASE et formés régulièrement aux dernières technologies automobiles.",
      },
      {
        title: "Formation continue",
        description: "Nous investissons dans la formation continue pour rester à la pointe des évolutions du secteur.",
      },
    ],
  },

  cta: {
    title: "Découvrez la différence AutoPro",
    description: "Rejoignez des milliers de clients satisfaits qui nous font confiance. Planifiez votre service dès aujourd'hui.",
    buttonText: "Nous contacter",
    buttonLink: "/contact",
  },
},

  // ========================================
  // SERVICES PAGE
  // ========================================
  services: {
  hero: {
    subtitle: "Nos services",
    title: "Entretien automobile complet",
    description: "De l'entretien courant aux réparations majeures, nous proposons des services automobiles complets pour maintenir votre véhicule à des performances optimales.",
  },

  mainServices: [
    {
      title: "Entretien général",
      description: "Services d'entretien régulier incluant la vidange, la vérification des fluides, le remplacement des filtres et les inspections préventives pour assurer le bon fonctionnement de votre véhicule.",
      image: "https://images.unsplash.com/photo-1702146713870-8cdd7ab983fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBtYWludGVuYW5jZSUyMG1lY2hhbmljJTIwd29ya3Nob3B8ZW58MXx8fHwxNzc0MTE1ODQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Diagnostic informatique",
      description: "Services de diagnostic avancés utilisant des équipements de pointe pour identifier et résoudre rapidement et précisément les problèmes du moteur, de la transmission et des systèmes électriques.",
      image: "https://images.unsplash.com/photo-1737493698550-085d3cf55445?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBkaWFnbm9zdGljJTIwY29tcHV0ZXIlMjBzY2FubmVyfGVufDF8fHx8MTc3NDExNTg0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Nettoyage professionnel",
      description: "Services complets de detailing intérieur et extérieur incluant lavage, cirage, polissage, nettoyage des sièges et protection de la peinture pour redonner à votre voiture un aspect neuf.",
      image: "https://images.unsplash.com/photo-1761934657948-708146148588?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjYXIlMjBkZXRhaWxpbmclMjBjbGVhbmluZ3xlbnwxfHx8fDE3NzQxMTU4NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Services des pneus",
      description: "Entretien complet des pneus incluant installation de pneus neufs, rotation, équilibrage, alignement et vérification de la pression. Nous proposons toutes les grandes marques.",
      image: "https://images.unsplash.com/photo-1764015805414-df7de89d405b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aXJlJTIwd2hlZWwlMjBzZXJ2aWNlJTIwY2hhbmdlfGVufDF8fHx8MTc3NDExNTg0NHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Service batterie",
      description: "Test, remplacement de batterie et diagnostic du système électrique. Nous proposons des batteries premium avec garantie et installation professionnelle.",
      image: "https://images.unsplash.com/photo-1767990495521-95cceb571125?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBiYXR0ZXJ5JTIwZWxlY3RyaWNhbCUyMHNlcnZpY2V8ZW58MXx8fHwxNzc0MTE1ODQ0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Climatisation & chauffage",
      description: "Réparation et entretien du système de climatisation incluant recharge de clim, réparation du chauffage et remplacement du filtre habitacle pour un confort optimal.",
    },
    {
      title: "Service de transmission",
      description: "Vidange de transmission, réparations et révisions complètes. Service expert pour transmissions automatiques et manuelles.",
    },
    {
      title: "Réparation moteur",
      description: "Diagnostic complet et réparation moteur, des réglages mineurs aux révisions majeures. Nous intervenons sur toutes les marques et modèles.",
    },
  ],

  additionalServices: [
    {
      title: "Service de freinage",
      description: "Inspection des freins, remplacement des plaquettes, rectification des disques",
    },
    {
      title: "Correction de peinture",
      description: "Suppression des rayures, retouches peinture, traitement céramique",
    },
    {
      title: "Suspension",
      description: "Remplacement des amortisseurs, services d’alignement",
    },
    {
      title: "Inspection avant achat",
      description: "Inspection complète du véhicule avant achat",
    },
  ],

  whyChoose: {
    subtitle: "Excellence du service",
    title: "Pourquoi choisir nos services ?",
    description: "Nous nous engageons à offrir des services automobiles de la plus haute qualité avec transparence et professionnalisme.",
    benefits: [
      "Techniciens certifiés ASE avec plusieurs années d'expérience",
      "Équipements et outils de diagnostic de pointe",
      "Pièces de haute qualité OEM et aftermarket",
      "Tarification transparente avec devis détaillés",
      "Garantie sur toutes les pièces et la main-d'œuvre",
      "Délais rapides sans compromettre la qualité",
      "Service de navette et véhicules de prêt disponibles",
      "Prise de rendez-vous en ligne et suivi du service",
    ],
  },

  process: {
    title: "Processus de service",
    steps: [
      {
        number: "01",
        title: "Prendre rendez-vous",
        description: "Réservez en ligne ou appelez-nous pour planifier votre service",
      },
      {
        number: "02",
        title: "Déposer le véhicule",
        description: "Amenez votre voiture à notre centre à l'heure qui vous convient",
      },
      {
        number: "03",
        title: "Inspection & devis",
        description: "Nous inspectons votre véhicule et fournissons un devis détaillé",
      },
      {
        number: "04",
        title: "Service & réparation",
        description: "Nos experts réalisent les services approuvés",
      },
      {
        number: "05",
        title: "Contrôle qualité",
        description: "Inspection complète pour garantir un résultat parfait",
      },
      {
        number: "06",
        title: "Récupération",
        description: "Récupérez votre véhicule et profitez de la conduite",
      },
    ],
  },

  pricing: {
    title: "Tarification transparente",
    description: "Nous croyons en une tarification honnête et claire. Chaque service comprend un devis détaillé avant le début des travaux. Pas de frais cachés, pas de surprises. Nous vous informons toujours avant tout travail supplémentaire.",
    features: [
      { label: "Gratuit", sublabel: "Devis" },
      { label: "12 mois", sublabel: "Garantie main-d'œuvre" },
      { label: "24/7", sublabel: "Service d'urgence" },
    ],
  },

  cta: {
    title: "Prêt à entretenir votre véhicule ?",
    description: "Prenez rendez-vous dès aujourd'hui et découvrez un service automobile professionnel qui dépasse vos attentes.",
    buttonText: "Réserver maintenant",
    buttonLink: "/contact",
  },
},

  // ========================================
  // CONTACT PAGE
  // ========================================
contact: {
  hero: {
    subtitle: "Contactez-nous",
    title: "Entrer en contact",
    description: "Vous avez des questions ou souhaitez réserver un service ? Nous sommes là pour vous aider. Contactez-nous et nous vous répondrons dès que possible.",
  },

  info: [
    {
      type: "phone",
      title: "Téléphone",
      details: "(555) 123-4567",
      subdetails: "Lun-Ven : 8h - 18h",
    },
    {
      type: "email",
      title: "Email",
      details: "info@autopro.com",
      subdetails: "Nous répondons sous 24 heures",
    },
    {
      type: "address",
      title: "Adresse",
      details: "123 Auto Street",
      subdetails: "Car City, CC 12345",
    },
    {
      type: "hours",
      title: "Horaires",
      details: "Lun-Ven : 8h - 18h",
      subdetails: "Sam : 9h - 16h, Dim : Fermé",
    },
  ],

  form: {
    title: "Envoyez-nous un message",
    successMessage: "Merci ! Nous vous répondrons bientôt.",
    fields: {
      name: { label: "Nom complet", placeholder: "John Doe", required: true },
      email: { label: "Email", placeholder: "john@example.com", required: true },
      phone: { label: "Téléphone", placeholder: "(555) 123-4567", required: false },
      service: {
        label: "Service souhaité",
        placeholder: "Sélectionnez un service",
        required: false,
        options: [
          { value: "", label: "Sélectionnez un service" },
          { value: "maintenance", label: "Entretien général" },
          { value: "diagnostics", label: "Diagnostic informatique" },
          { value: "detailing", label: "Nettoyage automobile" },
          { value: "tires", label: "Service des pneus" },
          { value: "battery", label: "Service batterie" },
          { value: "ac", label: "Climatisation & chauffage" },
          { value: "transmission", label: "Service de transmission" },
          { value: "engine", label: "Réparation moteur" },
          { value: "other", label: "Autre" },
        ],
      },
      message: {
        label: "Message",
        placeholder: "Parlez-nous de votre véhicule et du service dont vous avez besoin...",
        required: true,
      },
    },
    submitButton: "Envoyer le message",
    submittingButton: "Envoi en cours...",
  },

  businessHours: {
    title: "Heures d'ouverture",
    schedule: [
      { days: "Lundi - Vendredi", hours: "8:00 - 18:00" },
      { days: "Samedi", hours: "9:00 - 16:00" },
      { days: "Dimanche", hours: "Fermé" },
    ],
  },

  emergency: {
    title: "Service d'urgence 24/7",
    description: "Pour une assistance routière urgente, appelez notre ligne d'urgence au (555) 999-8888",
  },

  visitInfo: {
    title: "Visitez notre centre",
    description: "Passez dans notre centre moderne pour une visite ou pour discuter avec notre équipe. Nous disposons d'un espace d'attente confortable avec Wi-Fi gratuit et rafraîchissements.",
  },

  faq: {
    subtitle: "FAQ",
    title: "Questions fréquentes",
    items: [
      {
        question: "Ai-je besoin d'un rendez-vous ?",
        answer: "Les visites sans rendez-vous sont acceptées, mais nous recommandons de réserver afin de réduire le temps d'attente et garantir la disponibilité du technicien adapté.",
      },
      {
        question: "Quels moyens de paiement acceptez-vous ?",
        answer: "Nous acceptons toutes les principales cartes bancaires, les cartes de débit, les espèces et les chèques. Nous proposons également des options de financement pour les réparations importantes.",
      },
      {
        question: "Proposez-vous des garanties ?",
        answer: "Oui ! Nous offrons une garantie de 12 mois / 12 000 miles sur la main-d'œuvre, ainsi qu'une garantie sur les pièces selon les spécifications du fabricant.",
      },
      {
        question: "Combien de temps prendra le service ?",
        answer: "La durée dépend du type de service. Nous vous donnerons une estimation lors du dépôt du véhicule. Pour les travaux longs, nous proposons des véhicules de prêt.",
      },
    ],
  },
},

  // ========================================
  // FOOTER
  // ========================================
footer: {
  company: {
    name: "AutoPro",
    tagline: "SERVICES",
    description: "Votre partenaire de confiance pour les services professionnels d'entretien et de maintenance automobile.",
  },

  quickLinks: {
    title: "Liens rapides",
    links: [
      { name: "Accueil", path: "/" },
      { name: "À propos", path: "/about" },
      { name: "Services", path: "/services" },
      { name: "Contact", path: "/contact" },
    ],
  },

  services: {
    title: "Nos services",
    items: [
      "Entretien automobile",
      "Diagnostic",
      "Réparation automobile",
      "Nettoyage",
      "Service des pneus",
    ],
  },

  contact: {
    title: "Contactez-nous",
    address: "123 Auto Street, Car City, CC 12345",
    phone: "(555) 123-4567",
    email: "info@autopro.com",
  },

  social: {
    facebook: "#",
    instagram: "#",
    twitter: "#",
  },

  legal: {
    copyright: "AutoPro Services. Tous droits réservés.",
    links: [
      { name: "Politique de confidentialité", url: "#" },
      { name: "Conditions d'utilisation", url: "#" },
    ],
  },
}
};
