export const siteConfig = {
  name: "Clay Artist Pottery",
  legalName: "Clay Artist Pottery Studio Karachi",
  tagline: "Karachi's Premier Artisan Pottery & Clay Sculpting Studio",
  description: "Experience the therapeutic art of pottery in Clifton, Karachi. Offering daily wheel throwing workshops, unforgettable birthday parties, school field trips, and corporate pottery team-building events.",
  url: "https://clayartistpottery.pk",
  ogImage: "/images/logo.png",
  logo: "/images/logo.png",
  logoIcon: "/images/logo1.png",
  
  contact: {
    address: "Clifton Block 4, Near Dolmen Mall, Karachi, Pakistan",
    city: "Karachi",
    state: "Sindh",
    country: "Pakistan",
    postalCode: "75600",
    phone: "+92 315 2984450",
    phoneDisplay: "0315 2984450",
    whatsappRaw: "923152984450",
    email: "clayartistpottery@gmail.com",
    openingHours: "Monday – Sunday: 11:00 AM – 9:00 PM (Open All 7 Days)",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14484.582845347908!2d67.0261358!3d24.824707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33dc08573190b%3A0xb355152b9b734898!2sClifton%20Block%204%2C%20Karachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s",
    googleMapsDirectionsUrl: "https://maps.google.com/?q=Clifton+Block+4+Near+Dolmen+Mall+Karachi+Pakistan",
  },

  socials: {
    instagram: "https://instagram.com/clayartistpottery",
    facebook: "https://facebook.com/clayartistpottery",
    tiktok: "https://tiktok.com/@clayartistpottery",
    whatsapp: "https://wa.me/923152984450?text=Hi%20Clay%20Artist%20Studio!%20I%20am%20interested%20in%20booking%20a%20pottery%20session.%20Please%20share%20details.",
  },

  pricing: {
    currency: "PKR",
    currencySymbol: "Rs.",
    startingWorkshop: 3500,
    startingParty: 25000,
    startingSchoolStudent: 1500,
    startingCorporate: 45000,
  },

  navigation: [
    { name: "Home", href: "/" },
    {
      name: "Services & Events",
      href: "/services",
      dropdown: [
        {
          name: "Daily Workshops",
          href: "/services/daily-workshops",
          description: "Hands-on wheel throwing & hand-building sessions for beginners and enthusiasts.",
          icon: "Sparkles",
        },
        {
          name: "Birthday Parties",
          href: "/services/birthday-parties",
          description: "Creative pottery celebrations for kids, teens, and adults with keepsakes.",
          icon: "PartyPopper",
        },
        {
          name: "School Trips",
          href: "/services/school-trips",
          description: "Educational STEAM & sensory clay workshops tailored for school groups.",
          icon: "GraduationCap",
        },
        {
          name: "Event Packages",
          href: "/event-packages",
          description: "All-in-one celebration entertainment, live pottery, magic shows, puppets & carnival setups.",
          icon: "PartyPopper",
        },
        {
          name: "Event Organizers",
          href: "/services/event-organizers",
          description: "Corporate team bonding, brand activations, bridal showers & private events.",
          icon: "Briefcase",
        },
      ],
    },
    { name: "Gallery", href: "/gallery" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],

  trustPoints: [
    {
      title: "All Materials Included",
      description: "High-grade stoneware clay, studio potter wheels, shaping tools, glazes, and aprons provided.",
      icon: "ShieldCheck",
    },
    {
      title: "Keep Your Creations",
      description: "Trim, glaze, and take home your handcrafted ceramic masterpieces to treasure forever.",
      icon: "HeartHandshake",
    },
    {
      title: "Master Artisan Mentors",
      description: "Step-by-step guidance from passionate master potters with 10+ years of studio experience.",
      icon: "Award",
    },
    {
      title: "Prime Clifton Studio",
      description: "Centrally located in Clifton Block 4 near Dolmen Mall with air-conditioned luxury ambiance.",
      icon: "MapPin",
    },
  ],

  journeySteps: [
    {
      step: "01",
      title: "Enquire & Book",
      subtitle: "Choose your session",
      description: "Choose your date, preferred time slot, and clay workshop package online or via WhatsApp.",
    },
    {
      step: "02",
      title: "Shape & Wheel Throw",
      subtitle: "Feel the clay spin",
      description: "Center clay on electric wheels and learn hand-building sculpting techniques with guided mentoring.",
    },
    {
      step: "03",
      title: "Sculpt & Glaze",
      subtitle: "Add textures & color",
      description: "Carve patterns, add handles or organic textures, and paint with vibrant food-safe ceramic colors.",
    },
    {
      step: "04",
      title: "Kiln Firing & Collect",
      subtitle: "Take your creation home",
      description: "Bisque & glaze high-firing at 1200°C in our studio kiln, ready to showcase and use at home.",
    },
  ],

  creations: [
    {
      title: "Artisan Coffee Mugs",
      subtitle: "Wheel Thrown & Handled",
      description: "Craft your morning espresso cup or warm tea mug with a custom thumb-rest handle and organic rim.",
      tag: "Most Popular",
      image: "/images/gallery-mug.jpg",
    },
    {
      title: "Ramen & Salad Bowls",
      subtitle: "Deep Sculpted Ceramics",
      description: "Design wide flared stoneware bowls featuring ribbed exterior textures and smooth interior glazes.",
      tag: "Beginner Friendly",
      image: "/images/gallery-bowl.jpg",
    },
    {
      title: "Terracotta Flower Vases",
      subtitle: "Flared Neck Silhouettes",
      description: "Shape tall botanical vases inspired by historic Indus Valley and modern minimalist aesthetics.",
      tag: "Signature Craft",
      image: "/images/gallery-vase.jpg",
    },
    {
      title: "Indoor Plant Planters",
      subtitle: "With Drainage Trays",
      description: "Sculpt porous terracotta succulent pots and hanging planters with hand-stamped patterns.",
      tag: "Home Decor",
      image: "/images/gallery-planter.jpg",
    },
    {
      title: "Trinket Dishes & Coasters",
      subtitle: "Intricate Slab Work",
      description: "Create jewelry catchalls, incense holders, and leaf-imprinted decorative pottery plates.",
      tag: "Quick & Fun",
      image: "/images/gallery-trinket.jpg",
    },
  ],

  testimonials: [
    {
      id: "1",
      name: "Ayesha Siddiqui",
      role: "Weekend Workshop Attendee (DHA Karachi)",
      rating: 5,
      comment: "Attended the Saturday wheel throwing workshop with my sister. The studio vibe in Clifton is so serene and therapeutic! The instructor took time to guide every single hand movement on the wheel. Drinking coffee from my handmade mug today is pure joy!",
      date: "2 weeks ago",
      serviceType: "Daily Workshops",
      verified: true,
    },
    {
      id: "2",
      name: "Tariq Mansoor",
      role: "Father of Birthday Celebrant (Clifton)",
      rating: 5,
      comment: "We organized our daughter's 9th birthday party here. 14 energetic kids and every single one was mesmerized by the clay wheel! Safe, clean, beautifully organized, and every kid took home their glazed bowl. Hands down the best birthday idea in Karachi.",
      date: "1 month ago",
      serviceType: "Birthday Parties",
      verified: true,
    },
    {
      id: "3",
      name: "Fatima Al-Hassan",
      role: "Head of Arts, Karachi Grammar School (KGS)",
      rating: 5,
      comment: "Our Grade 6 art trip to Clay Artist Pottery was exceptional. The students learned about kiln science, tactile sensory shaping, and the heritage of Pakistani terracotta art. Outstanding educators and very safe environment.",
      date: "3 weeks ago",
      serviceType: "School Trips",
      verified: true,
    },
    {
      id: "4",
      name: "Bilal & Sarah",
      role: "Couples Pottery Date Night",
      rating: 5,
      comment: "Such a romantic and memorable date night! Getting messy with clay, laughing over wobbly pots, and walking away with our matching candle holders. 10/10 recommendation for couples in Karachi looking for something fresh.",
      date: "Just recent",
      serviceType: "Daily Workshops",
      verified: true,
    },
    {
      id: "5",
      name: "Khurram Qureshi",
      role: "HR Lead, Systems Limited",
      rating: 5,
      comment: "Booked an offsite team building session for 25 engineers. It was the most relaxing and engaging corporate activity we've ever had. No screens, just pure tactile creativity and team camaraderie. Highly recommend for corporate HR teams.",
      date: "1 month ago",
      serviceType: "Event Organizers",
      verified: true,
    },
  ],

  faqs: [
    {
      question: "Do I need any prior art or pottery experience?",
      answer: "Absolutely not! Over 90% of our guests have never touched clay or spun a pottery wheel before. Our experienced master potters guide you step-by-step through centering, opening, pulling, and shaping your pieces.",
      category: "General",
    },
    {
      question: "What should I wear to a pottery session?",
      answer: "Wear comfortable, casual clothing that you don't mind getting a little dusty. We provide full studio aprons, and clay washes out of 100% of fabrics with standard warm water. We recommend trimming long fingernails and tying long hair back.",
      category: "General",
    },
    {
      question: "Can I take my pottery pieces home right after the class?",
      answer: "Clay pieces need to slowly air-dry for 3-5 days to prevent cracking, then undergo bisque firing in our 1000°C kiln, followed by glazing and high-fire at 1200°C. Your waterproof, food-safe pieces will be ready for pickup or courier delivery within 10–14 days.",
      category: "Workshops",
    },
    {
      question: "Where is your studio located in Karachi?",
      answer: "We are situated in Clifton Block 4, Karachi, right near Dolmen Mall and Marine Drive. We have dedicated parking and a secure, air-conditioned studio environment.",
      category: "Location",
    },
    {
      question: "How do I book a birthday party or private corporate event?",
      answer: "You can submit the form on our Birthday Parties or Event Organizers page, or WhatsApp us directly at +92 315 2984450. We reserve the full studio exclusively for your group, customize themes, and coordinate cake/refreshment setups.",
      category: "Events",
    },
    {
      question: "Are your pottery glazes food-safe and microwave-safe?",
      answer: "Yes! All glazes used at Clay Artist Pottery are 100% lead-free, non-toxic, food-safe, dishwasher-safe, and microwave-safe once fired at stoneware temperatures.",
      category: "Safety",
    },
  ],
};
