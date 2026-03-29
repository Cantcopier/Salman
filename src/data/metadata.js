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
    name: "AutoPro",
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
      subtitle: "Premium Auto Services",
      title: "Your Car Deserves",
      titleHighlight: "Expert Care",
      description: "Professional automotive maintenance and repair services you can trust. We keep your vehicle running at peak performance.",
      image: "https://images.unsplash.com/photo-1760688962025-e56c8022daf8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcG9ydHMlMjBjYXIlMjBmcm9udCUyMHZpZXclMjBkYXJrfGVufDF8fHx8MTc3NDExNTg0Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      buttons: [
        { text: "Explore Services", link: "/services", primary: true },
        { text: "Book Appointment", link: "/contact", primary: false },
      ],
    },

    servicesSection: {
      subtitle: "What We Offer",
      title: "Our Premium Services",
      description: "From routine maintenance to specialized repairs, we provide comprehensive automotive services to keep your vehicle in top condition.",
      viewAllLink: "/services",
      viewAllText: "View All Services",
    },

    services: [
      {
        title: "Car Maintenance",
        description: "Regular maintenance to keep your vehicle running smoothly and efficiently.",
        image: "https://images.unsplash.com/photo-1702146713870-8cdd7ab983fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBtYWludGVuYW5jZSUyMG1lY2hhbmljJTIwd29ya3Nob3B8ZW58MXx8fHwxNzc0MTE1ODQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        title: "Diagnostics",
        description: "Advanced computer diagnostics to identify and resolve issues quickly.",
        image: "https://images.unsplash.com/photo-1737493698550-085d3cf55445?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBkaWFnbm9zdGljJTIwY29tcHV0ZXIlMjBzY2FubmVyfGVufDF8fHx8MTc3NDExNTg0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        title: "Auto Detailing",
        description: "Professional detailing services to make your car look brand new.",
        image: "https://images.unsplash.com/photo-1761934657948-708146148588?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjYXIlMjBkZXRhaWxpbmclMjBjbGVhbmluZ3xlbnwxfHx8fDE3NzQxMTU4NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        title: "Tire Service",
        description: "Complete tire services including replacement, rotation, and balancing.",
        image: "https://images.unsplash.com/photo-1764015805414-df7de89d405b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aXJlJTIwd2hlZWwlMjBzZXJ2aWNlJTIwY2hhbmdlfGVufDF8fHx8MTc3NDExNTg0NHww&ixlib=rb-4.1.0&q=80&w=1080",
      },
    ],

    whyChooseUs: {
      subtitle: "Why Choose Us",
      title: "Excellence in Automotive Care",
      description: "We combine expertise, quality, and customer service to deliver the best automotive experience.",
      benefits: [
        "Certified and experienced technicians",
        "State-of-the-art diagnostic equipment",
        "Transparent pricing with no hidden fees",
        "Quality parts and warranties",
        "Fast and efficient service",
      ],
      ctaText: "Learn More About Us",
      ctaLink: "/about",
    },

    features: [
      {
        title: "Expert Technicians",
        description: "Certified professionals with years of experience",
      },
      {
        title: "Fast Service",
        description: "Quick turnaround without compromising quality",
      },
      {
        title: "Quality Guaranteed",
        description: "100% satisfaction guarantee on all services",
      },
    ],

    testimonials: {
      subtitle: "Testimonials",
      title: "What Our Clients Say",
      description: "Don't just take our word for it - hear from our satisfied customers.",
      items: [
        {
          name: "John Davis",
          role: "Business Owner",
          content: "AutoPro has been servicing my fleet for 3 years. Their professionalism and attention to detail is unmatched.",
          rating: 5,
        },
        {
          name: "Sarah Miller",
          role: "Regular Customer",
          content: "Best auto service in town! They always explain everything clearly and the work is top-notch.",
          rating: 5,
        },
        {
          name: "Mike Johnson",
          role: "Car Enthusiast",
          content: "I trust AutoPro with my luxury vehicles. They treat every car like it's their own.",
          rating: 5,
        },
      ],
    },

    cta: {
      title: "Ready to Get Started?",
      description: "Book your appointment today and experience the AutoPro difference. Your car deserves the best care.",
      buttonText: "Book Appointment Now",
      buttonLink: "/contact",
    },
  },

  // ========================================
  // ABOUT PAGE
  // ========================================
  about: {
    hero: {
      subtitle: "About Us",
      title: "Leading the Way in Automotive Excellence",
      description: "For over 15 years, AutoPro has been the trusted choice for professional automotive services, combining expertise, quality, and customer care.",
    },

    stats: [
      { number: "15+", label: "Years Experience" },
      { number: "10K+", label: "Happy Customers" },
      { number: "50+", label: "Expert Technicians" },
      { number: "98%", label: "Customer Satisfaction" },
    ],

    story: {
      subtitle: "Our Story",
      title: "Built on Passion and Expertise",
      description: "What started as a small family garage has grown into the region's most trusted automotive service center.",
      image: "https://images.unsplash.com/photo-1759655360665-13a456981d74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwdGVhbSUyMHByb2Zlc3Npb25hbHN8ZW58MXx8fHwxNzc0MTE1ODQ0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      paragraphs: [
        "Founded in 2010, AutoPro was born from a simple mission: to provide honest, quality automotive services that car owners can truly rely on. Our founder, a third-generation mechanic, saw the need for a service center that combined cutting-edge technology with old-school craftsmanship.",
        "Today, we've grown to a team of over 50 certified technicians, but we've never lost sight of our core values. Every vehicle that comes through our doors receives the same meticulous care and attention to detail that built our reputation.",
        "We invest in the latest diagnostic equipment and continuous training for our team, ensuring we can handle everything from routine maintenance to complex repairs on all makes and models.",
      ],
    },

    mission: {
      title: "Our Mission",
      description: "To provide exceptional automotive services that exceed customer expectations through expert craftsmanship, transparent communication, and unwavering commitment to quality. We strive to be the automotive partner our customers trust and recommend.",
    },

    vision: {
      title: "Our Vision",
      description: "To be recognized as the leading automotive service provider, setting industry standards for quality, innovation, and customer care. We envision a future where every car owner has access to honest, professional service they can depend on.",
    },

    values: [
      {
        title: "Quality",
        description: "We never compromise on quality. Every service meets our highest standards.",
      },
      {
        title: "Customer Focus",
        description: "Your satisfaction is our priority. We listen and deliver personalized service.",
      },
      {
        title: "Excellence",
        description: "Continuous improvement and expert craftsmanship in everything we do.",
      },
      {
        title: "Reliability",
        description: "Dependable service you can count on, delivered on time, every time.",
      },
    ],

    team: {
      subtitle: "Our Team",
      title: "Expert Technicians You Can Trust",
      description: "Our team of certified professionals brings decades of combined experience and a passion for automotive excellence.",
      image: "https://images.unsplash.com/photo-1765603729821-804d347a3680?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjYXIlMjBzaG93cm9vbSUyMGludGVyaW9yfGVufDF8fHx8MTc3Mzk5NDUxOXww&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        {
          title: "ASE Certified",
          description: "All our technicians are ASE certified and regularly trained on the latest automotive technologies.",
        },
        {
          title: "Continuous Training",
          description: "We invest in ongoing education to stay ahead of industry developments and new vehicle technologies.",
        },
      ],
    },

    cta: {
      title: "Experience the AutoPro Difference",
      description: "Join thousands of satisfied customers who trust us with their vehicles. Schedule your service today.",
      buttonText: "Get in Touch",
      buttonLink: "/contact",
    },
  },

  // ========================================
  // SERVICES PAGE
  // ========================================
  services: {
    hero: {
      subtitle: "Our Services",
      title: "Comprehensive Automotive Care",
      description: "From routine maintenance to major repairs, we provide complete automotive services to keep your vehicle running at peak performance.",
    },

    mainServices: [
      {
        title: "General Maintenance",
        description: "Regular maintenance services including oil changes, fluid checks, filter replacements, and preventive inspections to keep your vehicle running smoothly.",
        image: "https://images.unsplash.com/photo-1702146713870-8cdd7ab983fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBtYWludGVuYW5jZSUyMG1lY2hhbmljJTIwd29ya3Nob3B8ZW58MXx8fHwxNzc0MTE1ODQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        title: "Computer Diagnostics",
        description: "Advanced diagnostic services using state-of-the-art equipment to identify and resolve engine, transmission, and electrical system issues quickly and accurately.",
        image: "https://images.unsplash.com/photo-1737493698550-085d3cf55445?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBkaWFnbm9zdGljJTIwY29tcHV0ZXIlMjBzY2FubmVyfGVufDF8fHx8MTc3NDExNTg0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        title: "Professional Detailing",
        description: "Complete interior and exterior detailing services including washing, waxing, polishing, upholstery cleaning, and paint protection to restore your car's showroom shine.",
        image: "https://images.unsplash.com/photo-1761934657948-708146148588?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjYXIlMjBkZXRhaWxpbmclMjBjbGVhbmluZ3xlbnwxfHx8fDE3NzQxMTU4NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        title: "Tire Services",
        description: "Complete tire care including new tire installation, rotation, balancing, alignment, and pressure checks. We carry all major tire brands.",
        image: "https://images.unsplash.com/photo-1764015805414-df7de89d405b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aXJlJTIwd2hlZWwlMjBzZXJ2aWNlJTIwY2hhbmdlfGVufDF8fHx8MTc3NDExNTg0NHww&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        title: "Battery Service",
        description: "Battery testing, replacement, and electrical system diagnostics. We offer premium batteries with warranty and professional installation.",
        image: "https://images.unsplash.com/photo-1767990495521-95cceb571125?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBiYXR0ZXJ5JTIwZWxlY3RyaWNhbCUyMHNlcnZpY2V8ZW58MXx8fHwxNzc0MTE1ODQ0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        title: "AC & Heating",
        description: "Climate control system repair and maintenance including AC recharge, heating system repair, and cabin filter replacement for optimal comfort.",
      },
      {
        title: "Transmission Service",
        description: "Transmission fluid changes, repairs, and complete rebuilds. Expert service for both automatic and manual transmissions.",
      },
      {
        title: "Engine Repair",
        description: "Complete engine diagnostics and repair services from minor tune-ups to major overhauls. We handle all makes and models.",
      },
    ],

    additionalServices: [
      {
        title: "Brake Service",
        description: "Brake inspection, pad replacement, rotor resurfacing",
      },
      {
        title: "Paint Correction",
        description: "Scratch removal, paint touch-ups, ceramic coating",
      },
      {
        title: "Suspension Work",
        description: "Shock and strut replacement, alignment services",
      },
      {
        title: "Pre-Purchase Inspection",
        description: "Comprehensive vehicle inspection before buying",
      },
    ],

    whyChoose: {
      subtitle: "Service Excellence",
      title: "Why Choose Our Services?",
      description: "We're committed to delivering the highest quality automotive services with transparency and care.",
      benefits: [
        "Certified ASE technicians with years of experience",
        "State-of-the-art diagnostic equipment and tools",
        "High-quality OEM and aftermarket parts",
        "Transparent pricing with detailed estimates",
        "Warranty on all parts and labor",
        "Fast turnaround times without compromising quality",
        "Shuttle service and loaner vehicles available",
        "Online appointment scheduling and service tracking",
      ],
    },

    process: {
      title: "Service Process",
      steps: [
        {
          number: "01",
          title: "Book Appointment",
          description: "Schedule online or call us to book your service",
        },
        {
          number: "02",
          title: "Drop Off Vehicle",
          description: "Bring your car to our facility at your time",
        },
        {
          number: "03",
          title: "Inspection & Estimate",
          description: "We inspect your vehicle and provide a detailed estimate",
        },
        {
          number: "04",
          title: "Service & Repair",
          description: "Our experts perform the approved services",
        },
        {
          number: "05",
          title: "Quality Check",
          description: "Thorough inspection to ensure everything is perfect",
        },
        {
          number: "06",
          title: "Pick Up",
          description: "Collect your vehicle and enjoy the ride",
        },
      ],
    },

    pricing: {
      title: "Transparent Pricing",
      description: "We believe in honest, upfront pricing. Every service includes a detailed estimate before we begin work. No hidden fees, no surprises. We'll always communicate with you about any additional work needed and get your approval first.",
      features: [
        { label: "Free", sublabel: "Estimates" },
        { label: "12 Months", sublabel: "Labor Warranty" },
        { label: "24/7", sublabel: "Emergency Service" },
      ],
    },

    cta: {
      title: "Ready to Service Your Vehicle?",
      description: "Book your appointment today and experience professional automotive care that exceeds expectations.",
      buttonText: "Schedule Service Now",
      buttonLink: "/contact",
    },
  },

  // ========================================
  // CONTACT PAGE
  // ========================================
  contact: {
    hero: {
      subtitle: "Contact Us",
      title: "Get in Touch",
      description: "Have questions or ready to book your service? We're here to help. Reach out to us and we'll get back to you as soon as possible.",
    },

    info: [
      {
        type: "phone",
        title: "Phone",
        details: "(555) 123-4567",
        subdetails: "Mon-Fri: 8AM - 6PM",
      },
      {
        type: "email",
        title: "Email",
        details: "info@autopro.com",
        subdetails: "We'll respond within 24 hours",
      },
      {
        type: "address",
        title: "Address",
        details: "123 Auto Street",
        subdetails: "Car City, CC 12345",
      },
      {
        type: "hours",
        title: "Hours",
        details: "Mon-Fri: 8AM - 6PM",
        subdetails: "Sat: 9AM - 4PM, Sun: Closed",
      },
    ],

    form: {
      title: "Send us a Message",
      successMessage: "Thank you! We'll get back to you soon.",
      fields: {
        name: { label: "Full Name", placeholder: "John Doe", required: true },
        email: { label: "Email", placeholder: "john@example.com", required: true },
        phone: { label: "Phone", placeholder: "(555) 123-4567", required: false },
        service: {
          label: "Service Interested In",
          placeholder: "Select a service",
          required: false,
          options: [
            { value: "", label: "Select a service" },
            { value: "maintenance", label: "General Maintenance" },
            { value: "diagnostics", label: "Computer Diagnostics" },
            { value: "detailing", label: "Auto Detailing" },
            { value: "tires", label: "Tire Service" },
            { value: "battery", label: "Battery Service" },
            { value: "ac", label: "AC & Heating" },
            { value: "transmission", label: "Transmission Service" },
            { value: "engine", label: "Engine Repair" },
            { value: "other", label: "Other" },
          ],
        },
        message: {
          label: "Message",
          placeholder: "Tell us about your vehicle and what service you need...",
          required: true,
        },
      },
      submitButton: "Send Message",
      submittingButton: "Sending...",
    },

    businessHours: {
      title: "Business Hours",
      schedule: [
        { days: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
        { days: "Saturday", hours: "9:00 AM - 4:00 PM" },
        { days: "Sunday", hours: "Closed" },
      ],
    },

    emergency: {
      title: "24/7 Emergency Service",
      description: "For urgent roadside assistance, call our emergency line at (555) 999-8888",
    },

    visitInfo: {
      title: "Visit Our Facility",
      description: "Stop by our modern facility for a tour or to speak with our team. We have a comfortable waiting area with complimentary WiFi and refreshments.",
    },

    faq: {
      subtitle: "FAQ",
      title: "Frequently Asked Questions",
      items: [
        {
          question: "Do I need an appointment?",
          answer: "While walk-ins are welcome, we recommend scheduling an appointment to minimize wait times and ensure we have the right technician available for your needs.",
        },
        {
          question: "What forms of payment do you accept?",
          answer: "We accept all major credit cards, debit cards, cash, and checks. We also offer financing options for larger repairs.",
        },
        {
          question: "Do you offer warranties?",
          answer: "Yes! We provide a 12-month/12,000-mile warranty on labor and parts warranty based on manufacturer specifications.",
        },
        {
          question: "How long will my service take?",
          answer: "Service times vary depending on the work needed. We'll provide an estimated completion time when you drop off your vehicle. For longer jobs, we offer loaner vehicles.",
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
      description: "Your trusted partner for professional automotive care and maintenance services.",
    },

    quickLinks: {
      title: "Quick Links",
      links: [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Contact", path: "/contact" },
      ],
    },

    services: {
      title: "Our Services",
      items: [
        "Car Maintenance",
        "Diagnostics",
        "Auto Repair",
        "Detailing",
        "Tire Service",
      ],
    },

    contact: {
      title: "Contact Us",
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
      copyright: "AutoPro Services. All rights reserved.",
      links: [
        { name: "Privacy Policy", url: "#" },
        { name: "Terms of Service", url: "#" },
      ],
    },
  },
};
