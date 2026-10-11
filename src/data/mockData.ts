import { CarpenterOrder, CustomerReview, PortfolioProject, ServiceItem } from '../types/carpentry';

export const OWNER_PROFILE = {
  name: "Arjun",
  brandName: "Arjun The Carpenter",
  phone: "9948639084",
  displayPhone: "+91 99486 39084",
  whatsappUrl: "https://wa.me/919948639084?text=Hello%20Arjun,%20I%20would%20like%20to%20inquire%20about%20carpentry%20work/repair",
  email: "arjun.carpenter.works@gmail.com",
  photo: "/images/arjun_profile.jpg",
  experienceYears: 18,
  completedProjects: 850,
  happyClients: 780,
  rating: 4.9,
  reviewCount: 246,
  address: "Carpenter Workshop Yard, Timber Market Road, Near Industrial Area (On-Site Visits across All Localities)",
  specialties: [
    "Custom Wardrobes & Cupboards",
    "Commercial Bank Works & Counter Fitouts",
    "Modern Modular Kitchen Installations",
    "Aluminium Glass Partitions & Sliding Works",
    "Complete Furniture Repair, Polish & Hardware Restorations"
  ],
  commitments: [
    "100% Free Site Inspection & Measurement",
    "Direct Carpenter Rates — Zero Middleman Commissions",
    "Free Quote Estimation with No Obligations or Subscriptions",
    "Top Quality Seasoned Teak, Marine Ply & Precision Hardware"
  ]
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "cupboards",
    title: "Cupboards & Designer Wardrobes",
    category: "cupboards",
    tagline: "Custom-built sliding & hinged cupboards engineered for maximum storage",
    description: "Floor-to-ceiling custom wardrobes, sliding glass/wooden doors, internal sensor LED channels, dedicated jewelry trays, and heavy-duty soft-close hinges. Built with termite-treated Century/Greenply and luxury laminates.",
    image: "/images/cupboard_work.jpg",
    materials: ["BWP Marine Plywood", "Natural Teak Veneer", "Acrylic / Soft Touch Laminates", "Hettich / Hafele Soft-Close Hardware"],
    features: ["Custom internal shelving & drawer partitions", "Integrated LED profile lights", "Concealed locker & safe compartments", "Durable hydraulic lift systems"],
    estimatedDays: "7 - 12 Days",
    freeServicesIncluded: ["Free room measurement & 3D layout advice", "Free material sample catalog demonstration", "Free site cleanup post-installation"],
    startingEstimate: "₹1,250 / sq.ft",
    popularFor: "Master Bedrooms, Walk-in Closets, Kids Room Storage"
  },
  {
    id: "modular_kitchen",
    title: "Modular Kitchen Installations",
    category: "modular_kitchen",
    tagline: "Ergonomic, moisture-proof kitchen cabinets & intelligent pull-outs",
    description: "End-to-end modular kitchens customized to your cooking lifestyle. L-shaped, U-shaped, parallel, and island layouts with BWP water-resistant plywood, high-gloss acrylic finishes, and tandem box drawers.",
    image: "/images/modular_kitchen.jpg",
    materials: ["710-Grade Boiling Waterproof Ply", "Quartz & Granite Countertop Fitment", "Stainless Steel 304 Baskets", "BLUM / Grass Soft Close Channels"],
    features: ["Spice rack pull-outs & corner carousel units", "Tall pantry units with multi-level wire racks", "Precision sink & chimney duct cutting", "Scratch & steam-resistant laminates"],
    estimatedDays: "10 - 15 Days",
    freeServicesIncluded: ["Free modular layout consultation", "Free hardware specification checklist", "Free plumbing & chimney coordinate alignment"],
    startingEstimate: "₹1,450 / sq.ft",
    popularFor: "Apartments, Villas, Kitchen Renovations"
  },
  {
    id: "bank_works",
    title: "Bank Works & Commercial Fitouts",
    category: "bank_works",
    tagline: "Heavy-duty commercial counters, cash cabins & acoustic paneling",
    description: "Specialized bank branch woodworking including teller cash counters, manager private cubicles, acrylic cash-drop transaction windows, server room wooden partitions, and fire-retardant wall paneling.",
    image: "/images/bank_works.jpg",
    materials: ["Commercial Grade Hardwood", "Fire-Retardant Marine Ply", "Bullet-Resistant Glass Framing", "Acoustic Wooden Slats & Veneers"],
    features: ["Cash counter ergonomic token drawers & cable grommets", "Privacy acrylic / frosted glass integration", "Heavy commercial security locks & deadbolts", "Sturdy file storage credenzas"],
    estimatedDays: "12 - 20 Days",
    freeServicesIncluded: ["Free architectural blueprint review", "Free commercial durability sample test", "Rapid weekend / after-hours installation"],
    startingEstimate: "₹1,600 / sq.ft",
    popularFor: "Bank Branches, Co-operative Societies, Financial Offices"
  },
  {
    id: "aluminium",
    title: "Aluminium Works & Glazing",
    category: "aluminium",
    tagline: "Modern slimline aluminium partitions, sliding doors & window frames",
    description: "Precision-cut aluminium frames with toughened glass, soundproof office cabins, balcony sliding windows with mosquito mesh, and aluminium composite panel (ACP) exterior/interior paneling.",
    image: "/images/aluminum_works.jpg",
    materials: ["Jindal / Hindalco Powder-Coated Aluminium", "8mm to 12mm Toughened Glass", "EPDM Weatherproof Rubber Gaskets", "Stainless Steel Heavy Rollers"],
    features: ["Smooth-glide bottom track rollers", "Sound-dampening acoustic glass fitments", "Anodized & matte black powder coat options", "Rustproof for lifetime balcony & bathroom use"],
    estimatedDays: "4 - 8 Days",
    freeServicesIncluded: ["Free laser level measurement on site", "Free glass safety check & advice", "Free replacement rubber seal warranty"],
    startingEstimate: "₹380 / sq.ft",
    popularFor: "Office Cabins, Balconies, Bathroom Partitions, Shopfronts"
  },
  {
    id: "repairs",
    title: "All Repair & Polishing Works",
    category: "repairs",
    tagline: "Fast doorstep repairs, hinge replacements, lock fixing & PU wood polish",
    description: "Got a sagging wardrobe door, jammed drawer, broken bed support, squeaking chairs, or faded teak dining table? Arjun arrives with full mobile workshop tools to resolve issues cleanly on the same day.",
    image: "/images/furniture_repair.jpg",
    materials: ["Imported PU & Melamine Polishes", "Heavy Duty Hydraulic Hinges", "Godrej / Yale High Security Locks", "Solid Teak Wood Dowels & Reinforcements"],
    features: ["Same-day emergency doorstep carpenter visit", "Wood scratch & dent restoration", "Termite chemical treatment & structural repair", "Antique furniture re-polishing to factory shine"],
    estimatedDays: "Same Day (2 - 6 Hours)",
    freeServicesIncluded: ["Free full home furniture health inspection", "Free hinge greasing & screw tightening", "Zero diagnosis fee if repair is done"],
    startingEstimate: "₹299 onwards",
    popularFor: "Doors, Wardrobe Drawers, Dining Tables, Beds, Locks"
  }
];

export const INITIAL_ORDERS: CarpenterOrder[] = [
  {
    id: "ARJ-8921",
    customerName: "Rajesh Sharma",
    phone: "9849012345",
    workType: "Master Bedroom Teak Cupboard & Wardrobe",
    category: "cupboards",
    woodMaterial: "Century Club Prime BWP Ply with Teak Veneer",
    finishType: "Matte PU Clear Polish with Gold Brass Handles",
    dimensions: "9 ft Width x 8 ft Height (3-Door Sliding)",
    address: "Flat 402, Green Meadows Enclave, Banjara Hills",
    createdAt: "2026-10-04",
    expectedDelivery: "2026-10-15",
    estimatedCost: "₹88,000",
    currentStage: "in_workshop",
    steps: [
      {
        stage: "received",
        title: "Request Received & Blueprint Approved",
        description: "Customer requested 3-door sliding cupboard with internal sensor LED channels.",
        dateCompleted: "2026-10-04",
        isCurrent: false,
        isCompleted: true
      },
      {
        stage: "measurement",
        title: "Site Visit & Laser Measurement Completed",
        description: "Arjun conducted detailed wall flatness check and verified clearance for sliding tracks.",
        dateCompleted: "2026-10-06",
        isCurrent: false,
        isCompleted: true
      },
      {
        stage: "in_workshop",
        title: "Timber Cutting & Carcass Joinery in Workshop",
        description: "Plywood carcass assembled, edge-banding applied, and soft-close channels fitted.",
        dateCompleted: "2026-10-09",
        isCurrent: true,
        isCompleted: false
      },
      {
        stage: "finishing",
        title: "Veneer Lamination & PU Polish Finishing",
        description: "Teak veneer pressing and multi-coat protective sealant application.",
        isCurrent: false,
        isCompleted: false
      },
      {
        stage: "installed",
        title: "On-Site Assembly & Handover",
        description: "Final installation at client bedroom, door balancing, and client sign-off.",
        isCurrent: false,
        isCompleted: false
      }
    ],
    carpenterNotes: [
      "10 Oct: Carcass assembly completed with 18mm marine grade ply.",
      "08 Oct: Teak wood veneer sheets matched for consistent grain flow.",
      "06 Oct: Site measurements confirmed. Leveling base plinth prepared."
    ]
  },
  {
    id: "ARJ-9104",
    customerName: "Manager K. Venkat (Union Bank Branch)",
    phone: "9948639084",
    workType: "Bank Commercial Fitout & Cash Counter Cabins",
    category: "bank_works",
    woodMaterial: "Commercial Hardwood with Fire-Retardant Core",
    finishType: "Heavy-Duty Scratch Resistant Melamine Veneer",
    dimensions: "3 Teller Counters + 1 Branch Manager Cubicle",
    address: "Union Bank Branch, Market Road Complex",
    createdAt: "2026-09-28",
    expectedDelivery: "2026-10-13",
    estimatedCost: "₹1,65,000",
    currentStage: "finishing",
    steps: [
      {
        stage: "received",
        title: "Branch Order Received",
        description: "Approved floor plan for 3 teller units and 1 manager glass-wood cabin.",
        dateCompleted: "2026-09-28",
        isCurrent: false,
        isCompleted: true
      },
      {
        stage: "measurement",
        title: "Bank Premises Measured",
        description: "Verified electrical ducting, token system wire slots, and counter heights.",
        dateCompleted: "2026-09-30",
        isCurrent: false,
        isCompleted: true
      },
      {
        stage: "in_workshop",
        title: "Counter Fabrication & Drawer Lock Rigging",
        description: "Heavy drawer assemblies with central locking systems built in workshop.",
        dateCompleted: "2026-10-06",
        isCurrent: false,
        isCompleted: true
      },
      {
        stage: "finishing",
        title: "Commercial Melamine Polish & Glass Fitment",
        description: "Cash transaction cutouts and toughened glass panel frames fitted.",
        dateCompleted: "2026-10-10",
        isCurrent: true,
        isCompleted: false
      },
      {
        stage: "installed",
        title: "Branch Setup & Final Handover",
        description: "Rigged onto floor slabs with secure anchoring.",
        isCurrent: false,
        isCompleted: false
      }
    ],
    carpenterNotes: [
      "10 Oct: 10mm toughened glass panels fitted into wooden counter rebate.",
      "07 Oct: Central drawer lock mechanisms tested for all 3 cash stations.",
      "03 Oct: Fire retardant chemical primer applied to all framing."
    ]
  },
  {
    id: "ARJ-7732",
    customerName: "Priya Reddy",
    phone: "9701123987",
    workType: "L-Shaped Modular Kitchen with Island Breakfast Counter",
    category: "modular_kitchen",
    woodMaterial: "710-Grade Boiling Water Resistant Marine Plywood",
    finishType: "Champagne High-Gloss Acrylic & Quartz Countertop Cutout",
    dimensions: "12 ft x 9 ft with 6 ft Island Counter",
    address: "Villa 18, Palm Grove Estates",
    createdAt: "2026-10-07",
    expectedDelivery: "2026-10-22",
    estimatedCost: "₹1,42,000",
    currentStage: "measurement",
    steps: [
      {
        stage: "received",
        title: "Modular Kitchen Consultation Booked",
        description: "Customer selected champagne acrylic and tandem soft close drawers.",
        dateCompleted: "2026-10-07",
        isCurrent: false,
        isCompleted: true
      },
      {
        stage: "measurement",
        title: "Kitchen Site Measurement & Plinth Check",
        description: "Plumbing points, electrical stove coordinates, and chimney duct verified.",
        dateCompleted: "2026-10-09",
        isCurrent: true,
        isCompleted: false
      },
      {
        stage: "in_workshop",
        title: "Modular Box Fabrication & Edge Banding",
        description: "Precision CNC cutting of 710 ply and PUR edge banding for 100% water seal.",
        isCurrent: false,
        isCompleted: false
      },
      {
        stage: "finishing",
        title: "Acrylic Shutter Lamination & Hardware Rigging",
        description: "Tandem boxes, pantry wire racks, and hydraulic lift-ups assembled.",
        isCurrent: false,
        isCompleted: false
      },
      {
        stage: "installed",
        title: "Kitchen Installation & Plinth Skirting",
        description: "Modular boxes anchored to wall, shutters aligned, and sink sealed with silicone.",
        isCurrent: false,
        isCompleted: false
      }
    ],
    carpenterNotes: [
      "09 Oct: Site inspection completed. Water line offset noted for the sink base unit.",
      "08 Oct: Acrylic shutter shades finalized with client."
    ]
  },
  {
    id: "ARJ-6520",
    customerName: "Mohd. Tariq",
    phone: "9123456789",
    workType: "Antique Teak Wood Dining Table & 6 Chairs Restoration",
    category: "repairs",
    woodMaterial: "Solid Burma Teak (Original Reconditioned)",
    finishType: "Hand-Rubbed Natural Teak Oil & Wax Polish",
    dimensions: "6-Seater Oval Dining Table (6 ft x 3.5 ft)",
    address: "House 12, Old City Heritage Colony",
    createdAt: "2026-09-22",
    expectedDelivery: "2026-09-27",
    estimatedCost: "₹16,500",
    currentStage: "installed",
    steps: [
      {
        stage: "received",
        title: "Restoration Request Confirmed",
        description: "Vintage dining set had loose mortise joints and sun-faded surface.",
        dateCompleted: "2026-09-22",
        isCurrent: false,
        isCompleted: true
      },
      {
        stage: "measurement",
        title: "Wood Grain & Joint Assessment",
        description: "Inspected joint integrity; found 4 chair joints requiring teak wood dowel re-pegging.",
        dateCompleted: "2026-09-23",
        isCurrent: false,
        isCompleted: true
      },
      {
        stage: "in_workshop",
        title: "Structural Joint Clamping & Sanding",
        description: "Clamped with high-strength resin, stripped old lacquer, sanded to 400 grit.",
        dateCompleted: "2026-09-25",
        isCurrent: false,
        isCompleted: true
      },
      {
        stage: "finishing",
        title: "Natural Teak Oil & French Wax Polish",
        description: "3 coats of deep penetrating teak oil followed by buffed carnuba wax.",
        dateCompleted: "2026-09-26",
        isCurrent: false,
        isCompleted: true
      },
      {
        stage: "installed",
        title: "Completed & Delivered with Care",
        description: "Safely delivered and placed. Customer delighted with rich natural sheen.",
        dateCompleted: "2026-09-27",
        isCurrent: false,
        isCompleted: true
      }
    ],
    carpenterNotes: [
      "27 Sep: Handed over in pristine condition. Customer awarded 5-star review.",
      "25 Sep: Replaced all loose screws with antique brass fittings."
    ]
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "port-1",
    title: "Master Bedroom Teak Sliding Cupboard",
    category: "cupboards",
    location: "Green Meadows Villa, Sector 4",
    image: "/images/cupboard_work.jpg",
    woodUsed: "Century Marine Plywood + Teak Veneer + Warm LED Channels",
    duration: "9 Days Fabrication",
    highlight: "Smooth glide whisper-quiet sliding doors with sensor LED interior",
    description: "Built custom to fit the exact 11-foot wall with floor-to-ceiling alignment, hidden jewelry drawer, and hydraulic dress hangers.",
    clientFeedback: {
      name: "S. Murthy",
      rating: 5,
      comment: "Arjun's finishing is superior to showroom brands. He saved us at least ₹40,000 and the wood is 100% genuine marine ply!"
    }
  },
  {
    id: "port-2",
    title: "Luxury Oak Finish Modular Kitchen",
    category: "modular_kitchen",
    location: "Skyline Residency, Penthouse",
    image: "/images/modular_kitchen.jpg",
    woodUsed: "Boiling Waterproof 710 Ply with Quartz Countertop",
    duration: "12 Days",
    highlight: "Tandem soft-close drawers, tall spice pantry, and seamless corner carousel",
    description: "Modern minimalist kitchen crafted with water-resistant wood cores, precision cutouts for induction hob and concealed exhaust.",
    clientFeedback: {
      name: "Sunita Agarwal",
      rating: 5,
      comment: "Every drawer closes like butter. Arjun gave us free layout suggestions that doubled our storage space."
    }
  },
  {
    id: "port-3",
    title: "Commercial Bank Branch Fitout & Cash Counters",
    category: "bank_works",
    location: "Regional Co-operative Bank Branch",
    image: "/images/bank_works.jpg",
    woodUsed: "Tough Teak Hardwood + Melamine Fire-Retardant Core + Toughened Glass",
    duration: "16 Days",
    highlight: "3 Ergonomic teller desks with dual-lock cash lockers and acoustic wall paneling",
    description: "Complete branch woodwork executed under strict timelines. High security mortise locks, token wire concealment, and manager cubicle partitions.",
    clientFeedback: {
      name: "Branch Senior Manager",
      rating: 5,
      comment: "Arjun completed the entire bank setup 2 days ahead of audit date! Sturdy craftsmanship that will last decades."
    }
  },
  {
    id: "port-4",
    title: "Aluminium Slimline Glass Partitions & Meeting Cabins",
    category: "aluminium",
    location: "Innovate Tech Hub, Cyber Corridor",
    image: "/images/aluminum_works.jpg",
    woodUsed: "Jindal Matte Black Powder-Coated Aluminium + 10mm Toughened Glass",
    duration: "5 Days",
    highlight: "Soundproof glass conference room with smooth sliding door tracks",
    description: "Sleek architectural black aluminium framework with natural wood handles and acoustic rubber dampeners for high-end office acoustics.",
    clientFeedback: {
      name: "Vikram Jain, CEO",
      rating: 5,
      comment: "Punctual, clean cuts, zero glass vibrations. Arjun's team worked after office hours so our work wasn't disturbed."
    }
  },
  {
    id: "port-5",
    title: "Antique Solid Teak Chair & Door Restoration",
    category: "repairs",
    location: "Heritage Bungalow, Old Cantonment",
    image: "/images/furniture_repair.jpg",
    woodUsed: "Reclaimed Solid Burma Teak + Natural Beeswax & Teak Oil",
    duration: "2 Days",
    highlight: "Joints re-pegged without ugly metal brackets, natural wood grain revived",
    description: "60-year old heirloom dining chairs had collapsed legs and heavy scratches. Completely restored to pristine structural stability and lustrous golden grain.",
    clientFeedback: {
      name: "Brigadier (Retd.) K. Rao",
      rating: 5,
      comment: "Arjun has the rare touch of a true traditional master carpenter. My grandfather's chairs look brand new yet hold their soul."
    }
  }
];

export const INITIAL_REVIEWS: CustomerReview[] = [
  {
    id: "rev-1",
    author: "Kalyan Chakravarthy",
    location: "Madhapur",
    rating: 5,
    date: "3 days ago",
    workType: "Complete Modular Kitchen & Crockery Unit",
    comment: "Arjun came personally on the same day I called 9948639084. He measured everything with a laser, explained the difference between commercial ply and marine ply, and gave an honest quote. The kitchen was ready on time and the finish is 10/10!",
    verified: true
  },
  {
    id: "rev-2",
    author: "Ananya Deshmukh",
    location: "Kondapur",
    rating: 5,
    date: "1 week ago",
    workType: "Master Bedroom Sliding Cupboard",
    comment: "I was worried about dust in my flat, but Arjun's team did all major cutting in their workshop and assembled it in my flat in just 1.5 days! The sliding soft close doors and mirror finish are gorgeous. Highly recommend Arjun!",
    verified: true
  },
  {
    id: "rev-3",
    author: "P. R. Mohan (Bank Auditor)",
    location: "Abids",
    rating: 5,
    date: "2 weeks ago",
    workType: "Bank Counters & Manager Cubicle Fitout",
    comment: "Arjun is our trusted carpenter for bank fitouts. Excellent quality hardwood, tamper-proof locks on all cash drawers, and very reasonable pricing. He doesn't take advance without delivering results.",
    verified: true
  },
  {
    id: "rev-4",
    author: "Girish Nambiar",
    location: "Gachibowli",
    rating: 5,
    date: "3 weeks ago",
    workType: "Aluminium Sliding Balcony Windows & Mesh",
    comment: "Smooth sliding, rain-proof seals, and neat silicone finish around the walls. Quick service and genuine Jindal aluminium section.",
    verified: true
  },
  {
    id: "rev-5",
    author: "Sowmya Rani",
    location: "Jubilee Hills",
    rating: 5,
    date: "1 month ago",
    workType: "Main Door Lock Repair & Wooden Dining Polish",
    comment: "Our heavy teak front door was scraping against the floor tiles and the lock was jammed. Arjun arrived in 40 minutes, trimmed the bottom edge, adjusted the hinges, and re-polished the frame. Charged very genuine rates!",
    verified: true
  }
];
