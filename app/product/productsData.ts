export interface ProductItem {
  id: string | number;
  name: string;
  city: string;
  title: string;
  description: string;
  phone: string;
  hasWhatsapp: boolean;
  whatsappNumber: string;
  age: number;
  rating: number;
  status: string;
  image: string; // Image path or URL
  aboutMe?: string;
  services?: string[];
  locationDetail?: string;
  height?: string;
  weight?: string;
  figure?: string;
  hair?: string;
  eyes?: string;
  languages?: string[];
  timing?: string;
  badge?: string;
  availableFor?: string[];
  metaTitle?: string;
  metaDescription?: string;
}

export const initialProductsData: ProductItem[] = [
  // 1. Koregaon Park
  {
    id: "ananya-sharma-pune-koregaon-park",
    name: "Ananya Sharma",
    city: "Pune / Koregaon Park",
    title: "Hey I am Ananya provide all service Real meet and video call in Koregaon Park 💋✨",
    description: "I am high class independent companion with attractive figure in Koregaon Park. Sexy curvy figure will get u mad. Very neat and clean. Available 24/7 for luxury hotel and home visits with complete privacy guaranteed.",
    phone: "+91 82941 07610",
    hasWhatsapp: true,
    whatsappNumber: "918294107610",
    age: 23,
    rating: 4.9,
    status: "Available Now",
    image: "/images/image1.avif",
    aboutMe: "GUARANTEE FULL SATISFACTION & IN CASE OF ANY UNHAPPY EXPERIENCE, WE WOULD REFUND YOUR FEES, WITHOUT ANY QUESTIONS ASKED 👉 WILL PROVIDE YOU WITH SEXY MODELS WHO WILL DANCE & DRINK WITH YOU AND ALSO PROVIDE YOU RELAXING COMPANIONSHIP. 👉YOU MAY TAKE THEM OUT FOR A PARTY OR PRIVATE DINNER. 👉THESE GIRLS ARE INTERESTED IN MAKING YOUR TIME IN PUNE SPECIAL.\n\nBookings Open Now! Excellent High profile Independent Female Model VIP High Class And Top Class Service with us in Koregaon Park Pune.",
    metaTitle: "Ananya Sharma – Call Girl in Koregaon Park Pune | 24/7",
    metaDescription: "Meet Ananya Sharma, a high-class independent companion in Koregaon Park Pune. Real meet & video call available 24/7. Luxury hotel & home visits with full privacy.",
  },
  // 2. Kalyani Nagar
  {
    id: "pooja-hegde-pune-kalyani-nagar",
    name: "Pooja Hegde",
    city: "Pune / Kalyani Nagar",
    title: "VIP Companion & Model Service in Kalyani Nagar Pune 👑",
    description: "Charming and friendly VIP companion in Kalyani Nagar. Professional service for corporate events, dinner dates, and luxury hotel stays. Real meet available.",
    phone: "+91 82941 07610",
    hasWhatsapp: true,
    whatsappNumber: "918294107610",
    age: 24,
    rating: 4.8,
    status: "Available Now",
    image: "/images/image31.avif",
    aboutMe: "High profile Independent Female Model VIP High Class Service in Kalyani Nagar Pune. Professional service provider with discrete companionship and entertainment guaranteed.",
    metaTitle: "Pooja Hegde – VIP Escort in Kalyani Nagar Pune | Model",
    metaDescription: "Pooja Hegde offers VIP companion & model services in Kalyani Nagar Pune. Available for corporate events, dinner dates & luxury hotel stays. Real meet guaranteed.",
  },

  // 3. Viman Nagar
  {
    id: "priya-kulkarni-pune-viman-nagar",
    name: "Priya Kulkarni",
    city: "Pune / Viman Nagar",
    title: "Premium College Escort Service in Viman Nagar 🔥",
    description: "Sophisticated and educated companion available in Viman Nagar near Phoenix Marketcity. 100% genuine photos, sweet nature and fully confidential service guaranteed.",
    phone: "+91 82941 07610",
    hasWhatsapp: true,
    whatsappNumber: "918294107610",
    age: 22,
    rating: 4.9,
    status: "Available Now",
    image: "/images/image3.avif",
    aboutMe: "100% genuine photos, sweet nature and fully confidential service guaranteed for luxury hotel outcalls and residential visits in Viman Nagar Pune.",
    metaTitle: "Priya Kulkarni – Call Girl in Viman Nagar Pune | Premium",
    metaDescription: "Priya Kulkarni is a premium college companion in Viman Nagar Pune near Phoenix Marketcity. 100% genuine photos & confidential hotel/home outcall service.",
  },

  // 4. Hinjewadi
  {
    id: "sneha-joshi-pune-hinjewadi",
    name: "Sneha Joshi",
    city: "Pune / Hinjewadi",
    title: "Independent IT Park Escort in Hinjewadi Phase 1 & 2 🌸",
    description: "Located near Hinjewadi Infotech Park. Sweet, friendly demeanor, instant booking for outcall and incall services with top hospitality for IT executives and travelers.",
    phone: "+91 82941 07610",
    hasWhatsapp: true,
    whatsappNumber: "918294107610",
    age: 24,
    rating: 4.7,
    status: "Available Now",
    image: "/images/image29.avif",
    aboutMe: "Sweet, friendly demeanor, instant booking for outcall and incall services with top hospitality in Hinjewadi Pune.",
    metaTitle: "Sneha Joshi – Escort in Hinjewadi IT Park Pune | Instant",
    metaDescription: "Sneha Joshi is an independent escort near Hinjewadi Infotech Park Pune. Instant incall & outcall booking for IT executives. Friendly & discreet service.",
  },

  // 5. Baner
  {
    id: "priya-sen-pune-baner",
    name: "Priya Sen",
    city: "Pune / Baner",
    title: "Celebrity & Model Escort Service in Baner High Street 💃",
    description: "High class model companion in Baner. Perfect for business travelers seeking premium companion experience with full privacy on Baner Road.",
    phone: "+91 82941 07610",
    hasWhatsapp: true,
    whatsappNumber: "918294107610",
    age: 21,
    rating: 4.9,
    status: "Available Now",
    image: "/images/image5.avif",
    aboutMe: "High class model companion in Baner Pune. Perfect for business travelers seeking premium companion experience with full privacy.",
    metaTitle: "Priya Sen – Model Escort in Baner Pune | High Class VIP",
    metaDescription: "Priya Sen is a high-class model escort on Baner Road Pune. Ideal for business travelers seeking a premium companion experience with complete privacy.",
  },

  // 6. Wakad
  {
    id: "kavya-verma-pune-wakad",
    name: "Kavya Verma",
    city: "Pune / Wakad",
    title: "Luxury Escort & Dating Partner in Wakad Pune 💕",
    description: "Gentle and attentive escort partner in Wakad near Mumbai-Pune Expressway. Fast response on call and WhatsApp for instant hotel visits.",
    phone: "+91 82941 07610",
    hasWhatsapp: true,
    whatsappNumber: "918294107610",
    age: 25,
    rating: 4.6,
    status: "Available Now",
    image: "/images/image25.avif",
    aboutMe: "Gentle and attentive escort partner in Wakad Pune. Fast response on call and WhatsApp for instant hotel visits.",
    metaTitle: "Kavya Verma – Luxury Escort in Wakad Pune | Fast Booking",
    metaDescription: "Kavya Verma is a luxury escort & dating partner in Wakad Pune near Expressway. Fast WhatsApp response & instant hotel visit booking available.",
  },

  // 7. Kothrud
  {
    id: "divya-deshmukh-pune-kothrud",
    name: "Divya Deshmukh",
    city: "Pune / Kothrud",
    title: "Independent Escort Companion in Kothrud ✨",
    description: "Quiet and respectful escort in Kothrud area. Direct call booking available with 100% privacy assurance for discreet gentlemen.",
    phone: "+91 82941 07610",
    hasWhatsapp: true,
    whatsappNumber: "918294107610",
    age: 23,
    rating: 4.8,
    status: "online",
    image: "/images/image7.avif",
    aboutMe: "Quiet and respectful escort in Kothrud Pune. Direct call booking available with 100% privacy assurance.",
    metaTitle: "Divya Deshmukh – Independent Escort in Kothrud Pune",
    metaDescription: "Divya Deshmukh is a quiet & respectful independent escort in Kothrud Pune. Direct call booking with 100% privacy assurance for discreet gentlemen.",
  },

  // 8. Shivajinagar
  {
    id: "neha-singh-pune-shivajinagar",
    name: "Neha Singh",
    city: "Pune / Shivajinagar",
    title: "High Profile Call Girl Service in Shivajinagar 🌹",
    description: "Attractive and friendly companion in central Shivajinagar. Available for evening dates, luxury hotel visits and long drives across Pune.",
    phone: "+91 82941 07610",
    hasWhatsapp: true,
    whatsappNumber: "918294107610",
    age: 22,
    rating: 4.9,
    status: "Available Now",
    image: "/images/image8.avif",
    aboutMe: "Attractive and friendly companion in Shivajinagar Pune. Available for evening dates, hotel visits and relaxing companionship.",
    metaTitle: "Neha Singh – High Profile Call Girl in Shivajinagar Pune",
    metaDescription: "Neha Singh is an attractive high-profile companion in Shivajinagar Pune. Available for evening dates, luxury hotel visits & long drives across Pune.",
  },

  // 9. Aundh
  {
    id: "simran-gill-pune-aundh",
    name: "Simran Gill",
    city: "Pune / Aundh",
    title: "Independent Young Escort Girl in Aundh Pune 💋",
    description: "Beautiful independent girl in Aundh. Polite, punctual and committed to providing a peaceful and glamorous companion experience.",
    phone: "+91 82941 07610",
    hasWhatsapp: true,
    whatsappNumber: "918294107610",
    age: 24,
    rating: 4.7,
    status: "Available Now",
    image: "/images/image9.avif",
    aboutMe: "Beautiful independent girl in Aundh Pune. Polite, punctual and committed to providing a peaceful experience.",
    metaTitle: "Simran Gill – Young Independent Escort in Aundh Pune",
    metaDescription: "Simran Gill is a beautiful independent escort in Aundh Pune. Polite, punctual & committed to a glamorous companion experience. Book now via WhatsApp.",
  },

  // 10. Magarpatta City
  {
    id: "aarti-patel-pune-magarpatta-city",
    name: "Aarti Patel",
    city: "Pune / Magarpatta City",
    title: "College Student Escort Service in Magarpatta Cybercity 🎓",
    description: "Fun-loving college student escort in Magarpatta City Hadapsar. Flexible timings, affordable packages, instant WhatsApp chat.",
    phone: "+91 82941 07610",
    hasWhatsapp: true,
    whatsappNumber: "918294107610",
    age: 23,
    rating: 4.8,
    status: "Available Now",
    image: "/images/image10.avif",
    aboutMe: "Fun-loving college student escort in Magarpatta Cybercity Pune. Flexible timings, affordable packages, instant WhatsApp chat.",
    metaTitle: "Aarti Patel – College Escort in Magarpatta City Pune",
    metaDescription: "Aarti Patel is a fun-loving college escort in Magarpatta Cybercity Hadapsar Pune. Flexible timings, affordable packages & instant WhatsApp booking.",
  },

  // 11. Kharadi
  {
    id: "ishita-roy-pune-kharadi",
    name: "Ishita Roy",
    city: "Pune / Kharadi",
    title: "Corporate Companion & VIP Escort in Kharadi IT Hub 💼",
    description: "Elegant corporate companion in Kharadi near EON Free Zone. Professional, discrete and well-mannered for corporate executives.",
    phone: "+91 82941 07610",
    hasWhatsapp: true,
    whatsappNumber: "918294107610",
    age: 22,
    rating: 4.6,
    status: "Busy",
    image: "/images/image11.avif",
    aboutMe: "Elegant corporate companion in Kharadi EON IT Park Pune. Professional, discrete and well-mannered.",
    metaTitle: "Ishita Roy – Corporate VIP Escort in Kharadi Pune | EON",
    metaDescription: "Ishita Roy is an elegant corporate companion in Kharadi near EON Free Zone Pune. Professional & discreet service for IT executives and business travelers.",
  },

  // 12. FC Road
  {
    id: "meera-joshi-pune-fc-road",
    name: "Meera Joshi",
    city: "Pune / FC Road",
    title: "Independent Escort Service on FC Road Pune 🌺",
    description: "Charming independent escort near Fergusson College Road. Ideal companion for relaxing cafe dates, city drives and hotel stays.",
    phone: "+91 82941 07610",
    hasWhatsapp: true,
    whatsappNumber: "918294107610",
    age: 25,
    rating: 4.9,
    status: "Available Now",
    image: "/images/image12.avif",
    aboutMe: "Charming independent escort on FC Road Pune. Ideal companion for relaxing evenings and luxury hotel stays.",
    metaTitle: "Meera Joshi – Independent Escort on FC Road Pune",
    metaDescription: "Meera Joshi is a charming escort near Fergusson College Road Pune. Perfect for cafe dates, city drives & luxury hotel stays. Call or WhatsApp anytime.",
  },

  // 13. Pune Camp
  {
    id: "shreya-das-pune-camp",
    name: "Shreya Das",
    city: "Pune / Pune Camp",
    title: "Five Star Hotel Escort Partner in Pune Camp & MG Road ⭐",
    description: "Sophisticated escort girl in Pune Camp area. Specially available for luxury 5-star hotel outcalls and VIP heritage visits.",
    phone: "+91 82941 07610",
    hasWhatsapp: true,
    whatsappNumber: "918294107610",
    age: 21,
    rating: 4.8,
    status: "Available Now",
    image: "/images/image13.avif",
    aboutMe: "Sophisticated escort girl in Pune Camp & MG Road. Specially available for luxury 5-star hotel outcalls.",
    metaTitle: "Shreya Das – 5-Star Hotel Escort in Pune Camp | MG Road",
    metaDescription: "Shreya Das is a sophisticated escort in Pune Camp & MG Road. Specialises in luxury 5-star hotel outcalls & VIP heritage visits. Discreet & professional.",
  },

  // 14. Senapati Bapat Road
  {
    id: "natasha-malik-pune-senapati-bapat-road",
    name: "Natasha Malik",
    city: "Pune / Senapati Bapat Road",
    title: "Fashion Model Escort in Senapati Bapat Road Pune 💄",
    description: "Glamorous fashion model companion on SB Road near JW Marriott. Warm nature, hygienic, and committed to total discretion.",
    phone: "+91 82941 07610",
    hasWhatsapp: true,
    whatsappNumber: "918294107610",
    age: 23,
    rating: 4.9,
    status: "Available Now",
    image: "/images/image14.avif",
    aboutMe: "Glamorous fashion model companion on Senapati Bapat Road Pune. Warm nature, hygienic, and committed to discretion.",
    metaTitle: "Natasha Malik – Model Escort on SB Road Pune | JW Marriott",
    metaDescription: "Natasha Malik is a glamorous fashion model escort on Senapati Bapat Road near JW Marriott Pune. Warm, hygienic & fully discreet companion service.",
  },

  // 15. Balewadi
  {
    id: "sonal-chauhan-pune-balewadi",
    name: "Sonal Chauhan",
    city: "Pune / Balewadi",
    title: "Independent Escort & Companion in Balewadi High Street 🌟",
    description: "Friendly independent girl in Balewadi High Street. Quick response on WhatsApp with direct phone call support for dinner dates.",
    phone: "+91 82941 07610",
    hasWhatsapp: true,
    whatsappNumber: "918294107610",
    age: 24,
    rating: 4.7,
    status: "Available Now",
    image: "/images/image15.avif",
    aboutMe: "Friendly independent girl in Balewadi High Street Pune. Quick response on WhatsApp with direct phone call support.",
    metaTitle: "Sonal Chauhan – Escort in Balewadi High Street Pune",
    metaDescription: "Sonal Chauhan is a friendly independent escort in Balewadi High Street Pune. Quick WhatsApp & call response. Available for dinner dates & hotel visits.",
  },

  // 16. Bavdhan
  {
    id: "nisha-agarwal-pune-bavdhan",
    name: "Nisha Agarwal",
    city: "Pune / Bavdhan",
    title: "Desi College Girl Escort in Bavdhan Pune 💖",
    description: "Lovely desi college girl in Bavdhan near Chandani Chowk. Sweet conversationalist and attentive companion for private time.",
    phone: "+91 82941 07610",
    hasWhatsapp: true,
    whatsappNumber: "918294107610",
    age: 22,
    rating: 4.8,
    status: "Available Now",
    image: "/images/image16.avif",
    aboutMe: "Lovely desi college girl in Bavdhan Pune. Sweet conversationalist and attentive companion.",
    metaTitle: "Nisha Agarwal – Desi College Escort in Bavdhan Pune",
    metaDescription: "Nisha Agarwal is a lovely desi college girl escort in Bavdhan near Chandani Chowk Pune. Sweet conversationalist & attentive private companion.",
  },

  // 17. Pimple Saudagar
  {
    id: "tanvi-shah-pune-pimple-saudagar",
    name: "Tanvi Shah",
    city: "Pune / Pimple Saudagar",
    title: "High Class Escort in Pimple Saudagar Pune ✨",
    description: "Mature and caring companion in Pimple Saudagar. Safe, secure, and hassle-free meeting arrangements in PCMC.",
    phone: "+91 82941 07610",
    hasWhatsapp: true,
    whatsappNumber: "918294107610",
    age: 23,
    rating: 4.6,
    status: "Available Now",
    image: "/images/image17.avif",
    aboutMe: "Mature and caring companion in Pimple Saudagar Pune. Safe, secure, and hassle-free meeting arrangements.",
    metaTitle: "Tanvi Shah – High Class Escort in Pimple Saudagar PCMC",
    metaDescription: "Tanvi Shah is a mature high-class escort in Pimple Saudagar Pune (PCMC). Safe, secure & hassle-free meeting arrangements. Call or WhatsApp to book.",
  },

  // 18. Pimpri Chinchwad
  {
    id: "maya-deshmukh-pune-pimpri-chinchwad",
    name: "Maya Deshmukh",
    city: "Pune / Pimpri Chinchwad",
    title: "Luxury VIP Escort in Pimpri Chinchwad (PCMC) 🏰",
    description: "High profile companion residing in Pimpri Chinchwad. Available for industrial executive meets and local weekend hotel stays.",
    phone: "+91 82941 07610",
    hasWhatsapp: true,
    whatsappNumber: "918294107610",
    age: 24,
    rating: 4.9,
    status: "Available Now",
    image: "/images/image18.avif",
    aboutMe: "High profile companion in Pimpri Chinchwad Pune. Available for outstation travels and local weekend stays.",
    metaTitle: "Maya Deshmukh – VIP Escort in Pimpri Chinchwad Pune",
    metaDescription: "Maya Deshmukh is a high-profile luxury escort in Pimpri Chinchwad (PCMC) Pune. Available for executive meets & weekend hotel stays. Book via WhatsApp.",
  },

  // 19. Swargate
  {
    id: "kriti-malhotra-pune-swargate",
    name: "Kriti Malhotra",
    city: "Pune / Swargate",
    title: "Independent High Class Escort in Swargate Pune 💫",
    description: "Elegant companion near Swargate transit hub. Top rated verified profile with excellent feedback.",
    phone: "+91 82941 07610",
    hasWhatsapp: true,
    whatsappNumber: "918294107610",
    age: 22,
    rating: 4.8,
    status: "Available Now",
    image: "/images/image19.avif",
    aboutMe: "Elegant companion in Swargate Pune. Top rated verified profile with excellent feedback.",
    metaTitle: "Kriti Malhotra – High Class Escort in Swargate Pune",
    metaDescription: "Kriti Malhotra is a top-rated elegant escort near Swargate Pune transit hub. Verified profile with excellent feedback. Instant call & WhatsApp booking.",
  },

  // 20. Kondhwa
  {
    id: "payal-rajput-pune-kondhwa",
    name: "Payal Rajput",
    city: "Pune / Kondhwa",
    title: "Independent Escort Partner in Kondhwa & NIBM Road 🌸",
    description: "Polite independent profile in Kondhwa NIBM area. Simple booking process via direct phone call.",
    phone: "+91 82941 07610",
    hasWhatsapp: true,
    whatsappNumber: "918294107610",
    age: 25,
    rating: 4.7,
    status: "Offline",
    image: "/images/image20.avif",
    aboutMe: "Polite independent profile in Kondhwa & NIBM Road Pune. Simple booking process via direct phone call.",
    metaTitle: "Payal Rajput – Independent Escort in Kondhwa NIBM Pune",
    metaDescription: "Payal Rajput is a polite independent escort in Kondhwa & NIBM Road Pune. Simple and quick booking process via direct phone call. Discreet service.",
  },

  // 21. Fatima Nagar
  {
    id: "swati-mishra-pune-fatima-nagar",
    name: "Swati Mishra",
    city: "Pune / Fatima Nagar",
    title: "High Profile Call Girl Service in Fatima Nagar & Wanowrie 💖",
    description: "Friendly companion in Fatima Nagar area. 100% real photos, safety first policy and privacy guaranteed.",
    phone: "+91 82941 07610",
    hasWhatsapp: true,
    whatsappNumber: "918294107610",
    age: 23,
    rating: 4.8,
    status: "Available Now",
    image: "/images/image21.avif",
    aboutMe: "Friendly companion in Fatima Nagar Wanowrie Pune. 100% real photos, safety first policy and privacy guaranteed.",
    metaTitle: "Swati Mishra – Call Girl in Fatima Nagar Wanowrie Pune",
    metaDescription: "Swati Mishra is a high-profile companion in Fatima Nagar & Wanowrie Pune. 100% real photos, safety-first policy and complete privacy guaranteed.",
  },

  // 22. Yerwada
  {
    id: "rashmi-gautham-pune-yerwada",
    name: "Rashmi Gautham",
    city: "Pune / Yerwada",
    title: "Independent Escort Girl in Yerwada Near Airport Road 🔥",
    description: "Attractive girl available for home and luxury hotel outcall services in Yerwada Pune.",
    phone: "+91 82941 07610",
    hasWhatsapp: true,
    whatsappNumber: "918294107610",
    age: 24,
    rating: 4.9,
    status: "Available Now",
    image: "/images/image22.avif",
    aboutMe: "Attractive girl available for home and hotel outcall services in Yerwada Pune.",
    metaTitle: "Rashmi Gautham – Escort in Yerwada Airport Road Pune",
    metaDescription: "Rashmi Gautham is an attractive independent escort in Yerwada near Airport Road Pune. Available for home & luxury hotel outcall services anytime.",
  },

  // 23. Pashan
  {
    id: "deepika-nambiar-pune-pashan",
    name: "Deepika Nambiar",
    city: "Pune / Pashan",
    title: "College Student Escort in Pashan & Sus Road ⚾",
    description: "Young college escort near Pashan Lake and Sus Road. Fun, energetic and well-mannered companion for outings.",
    phone: "+91 82941 07610",
    hasWhatsapp: true,
    whatsappNumber: "918294107610",
    age: 22,
    rating: 4.7,
    status: "Available Now",
    image: "/images/image23.avif",
    aboutMe: "Young college escort near Pashan & Sus Road Pune. Fun, energetic and well-mannered companion for outings.",
    metaTitle: "Deepika Nambiar – College Escort in Pashan Sus Road Pune",
    metaDescription: "Deepika Nambiar is a fun & energetic college escort near Pashan Lake & Sus Road Pune. Well-mannered companion for outings, dates & hotel visits.",
  },

  // 24. Mundhwa
  {
    id: "shruti-iyer-pune-mundhwa",
    name: "Shruti Iyer",
    city: "Pune / Mundhwa",
    title: "Verified Independent Companion in Mundhwa Pune 🌷",
    description: "Sweet and honest companion in Mundhwa near Koregaon Park Annexe. Direct phone call booking and quick WhatsApp response.",
    phone: "+91 82941 07610",
    hasWhatsapp: true,
    whatsappNumber: "918294107610",
    age: 23,
    rating: 4.8,
    status: "Available Now",
    image: "/images/image24.avif",
    aboutMe: "Sweet and honest companion in Mundhwa Pune. Direct phone call booking and quick WhatsApp response.",
    metaTitle: "Shruti Iyer – Verified Escort in Mundhwa Pune | KP Annexe",
    metaDescription: "Shruti Iyer is a verified sweet companion in Mundhwa near Koregaon Park Annexe Pune. Direct call booking & quick WhatsApp response guaranteed.",
  },

  // 25. Lohegaon
  {
    id: "trisha-mukherjee-pune-lohegaon",
    name: "Trisha Mukherjee",
    city: "Pune / Lohegaon",
    title: "VIP Airport Transit & Hotel Escort in Lohegaon Dhanori 🏖️",
    description: "High class model companion for Pune Airport layovers and hotel visits in Lohegaon Dhanori.",
    phone: "+91 82941 07610",
    hasWhatsapp: true,
    whatsappNumber: "918294107610",
    age: 25,
    rating: 4.9,
    status: "Available Now",
    image: "/images/image25.avif",
    aboutMe: "High class model companion for Pune Airport layovers and hotel visits in Lohegaon & Dhanori.",
    metaTitle: "Trisha Mukherjee – Airport Escort in Lohegaon Pune | VIP",
    metaDescription: "Trisha Mukherjee is a VIP model escort for Pune Airport layovers & hotel stays in Lohegaon Dhanori. High-class discreet service available 24/7.",
  },

  // 26. Katraj
  {
    id: "aditi-bhatia-pune-katraj",
    name: "Aditi Bhatia",
    city: "Pune / Katraj",
    title: "Young Independent Girl Escort in Katraj Pune 🎀",
    description: "Polite young companion in Katraj area near Bharati Vidyapeeth. Available for daytime and overnight bookings.",
    phone: "+91 82941 07610",
    hasWhatsapp: true,
    whatsappNumber: "918294107610",
    age: 21,
    rating: 4.6,
    status: "Available Now",
    image: "/images/image26.avif",
    aboutMe: "Polite young companion in Katraj Pune. Available for daytime and overnight bookings.",
    metaTitle: "Aditi Bhatia – Young Escort in Katraj Pune | Bharati Area",
    metaDescription: "Aditi Bhatia is a polite young independent escort in Katraj near Bharati Vidyapeeth Pune. Available for daytime & overnight bookings via call.",
  },

  // 27. Model Colony
  {
    id: "radhika-merchant-pune-model-colony",
    name: "Radhika Merchant",
    city: "Pune / Model Colony",
    title: "VIP Escort & Dating Partner in Model Colony Shivajinagar ✈️",
    description: "Located in serene Model Colony Pune. Ideal companion for executives, fine dining and peaceful layovers.",
    phone: "+91 82941 07610",
    hasWhatsapp: true,
    whatsappNumber: "918294107610",
    age: 24,
    rating: 4.9,
    status: "Available Now",
    image: "/images/image27.avif",
    aboutMe: "Located in Model Colony Pune. Ideal companion for travelers and executives with prompt service.",
    metaTitle: "Radhika Merchant – VIP Escort in Model Colony Pune",
    metaDescription: "Radhika Merchant is a VIP escort & dating partner in Model Colony Shivajinagar Pune. Ideal for executives, fine dining & peaceful private companionship.",
  },

  // 28. Prabhat Road
  {
    id: "jyoti-saxena-pune-prabhat-road",
    name: "Jyoti Saxena",
    city: "Pune / Prabhat Road",
    title: "Independent Escort & Dating Partner on Prabhat Road 💐",
    description: "Charming independent partner in Prabhat Road Deccan area. Clean, safe, and professional companion service.",
    phone: "+91 82941 07610",
    hasWhatsapp: true,
    whatsappNumber: "918294107610",
    age: 22,
    rating: 4.8,
    status: "Available Now",
    image: "/images/image28.avif",
    aboutMe: "Charming independent partner on Prabhat Road Pune. Clean, safe, and professional companion service.",
    metaTitle: "Jyoti Saxena – Independent Escort on Prabhat Road Pune",
    metaDescription: "Jyoti Saxena is a charming independent escort on Prabhat Road Deccan Pune. Clean, safe & professional companion service. Call or WhatsApp to book.",
  },

  // 29. Deccan Gymkhana
  {
    id: "mansi-joshi-pune-deccan-gymkhana",
    name: "Mansi Joshi",
    city: "Pune / Deccan Gymkhana",
    title: "High Profile Call Girl Service in Deccan Gymkhana 🌺",
    description: "Respectful companion in Deccan Gymkhana Pune. Booking available directly via phone line and WhatsApp.",
    phone: "+91 82941 07610",
    hasWhatsapp: true,
    whatsappNumber: "918294107610",
    age: 23,
    rating: 4.7,
    status: "Busy",
    image: "/images/image29.avif",
    aboutMe: "Respectful companion in Deccan Gymkhana Pune. Booking available directly via phone line.",
    metaTitle: "Mansi Joshi – High Profile Escort in Deccan Gymkhana Pune",
    metaDescription: "Mansi Joshi is a respectful high-profile companion in Deccan Gymkhana Pune. Direct WhatsApp & phone call booking. Discreet & professional service.",
  },

  // 30. Wagholi
  {
    id: "sunita-rao-pune-wagholi",
    name: "Sunita Rao",
    city: "Pune / Wagholi",
    title: "Desi College Escort Service in Wagholi Pune 💋",
    description: "Sweet desi college girl in Wagholi on Nagar Road. High quality companion service for home and hotel outcalls.",
    phone: "+91 82941 07610",
    hasWhatsapp: true,
    whatsappNumber: "918294107610",
    age: 22,
    rating: 4.9,
    status: "Available Now",
    image: "/images/image2.avif",
    aboutMe: "Sweet desi college girl in Wagholi Pune. High quality companion service for home and hotel outcalls.",
    metaTitle: "Sunita Rao – Desi College Escort in Wagholi Nagar Road Pune",
    metaDescription: "Sunita Rao is a sweet desi college escort in Wagholi on Nagar Road Pune. High-quality home & hotel outcall service. Instant WhatsApp booking available.",
  },
];
