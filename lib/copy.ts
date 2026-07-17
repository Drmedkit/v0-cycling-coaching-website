import type { Locale } from "@/lib/i18n"
import type { MarketingPage } from "@/lib/site"

export type PageSection = {
  kicker?: string
  title: string
  body: string[]
  points?: string[]
}

export type PageCopy = {
  eyebrow: string
  title: string
  lead: string
  metaTitle: string
  metaDescription: string
  sections: PageSection[]
}

type PackageCopy = {
  name: string
  price: string
  audience: string
  features: string[]
  featured?: boolean
}

type SiteCopy = {
  languageLabel: string
  skip: string
  nav: Record<"coaching" | "method" | "cyclists" | "about" | "results" | "knowledge" | "packages" | "faq" | "contact", string>
  common: {
    intake: string
    learnMore: string
    readArticle: string
    viewAll: string
    perMonth: string
    choosePackage: string
    backToKnowledge: string
    minutes: string
    updated: string
    openMenu: string
    closeMenu: string
  }
  home: {
    metaTitle: string
    metaDescription: string
    eyebrow: string
    title: string
    lead: string
    primaryCta: string
    secondaryCta: string
    proof: string[]
    cardsEyebrow: string
    cardsTitle: string
    cardsLead: string
    cards: Array<{ href: string; number: string; title: string; body: string; image: string }>
    processEyebrow: string
    processTitle: string
    process: Array<{ number: string; title: string; body: string }>
    resultEyebrow: string
    resultTitle: string
    resultQuote: string
    resultName: string
    resultRole: string
    packagesEyebrow: string
    packagesTitle: string
    knowledgeEyebrow: string
    knowledgeTitle: string
    knowledgeLead: string
    finalTitle: string
    finalBody: string
  }
  packages: PackageCopy[]
  packagesIntro: string
  packageNote: string
  testimonials: Array<{ quote: string; name: string; role: string; stat: string; statLabel: string; image: string }>
  faq: Array<{ question: string; answer: string }>
  knowledge: {
    eyebrow: string
    title: string
    lead: string
    metaTitle: string
    metaDescription: string
    featured: string
    all: string
  }
  contact: {
    eyebrow: string
    title: string
    lead: string
    metaTitle: string
    metaDescription: string
    response: string
    fields: Record<string, string>
    options: Record<string, string>
    consent: string
    privacyLink: string
    submit: string
    submitting: string
    successTitle: string
    successBody: string
    errorTitle: string
    errorBody: string
    duplicate: string
    invalid: string
  }
  footer: {
    statement: string
    explore: string
    contact: string
    legal: string
    rights: string
  }
  pages: Record<MarketingPage, PageCopy>
}

const en: SiteCopy = {
  languageLabel: "Language",
  skip: "Skip to content",
  nav: {
    coaching: "Coaching",
    method: "Method",
    cyclists: "For cyclists",
    about: "About",
    results: "Results",
    knowledge: "Knowledge",
    packages: "Packages",
    faq: "FAQ",
    contact: "Contact",
  },
  common: {
    intake: "Start your intake",
    learnMore: "Explore the approach",
    readArticle: "Read article",
    viewAll: "View all insights",
    perMonth: "/ month",
    choosePackage: "Choose this package",
    backToKnowledge: "Back to knowledge",
    minutes: "min read",
    updated: "Updated",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  home: {
    metaTitle: "Online cycling coaching built around your real life",
    metaDescription: "Personal, science-led online cycling coaching for ambitious amateur cyclists. Training that adapts to your goals, data and available time.",
    eyebrow: "Personal cycling coaching · worldwide",
    title: "Turn your ambition into better days on the bike.",
    lead: "Structured training, honest feedback and sports science translated into a plan that works around your job, family and goals.",
    primaryCta: "Start your intake",
    secondaryCta: "See how coaching works",
    proof: ["Movement scientist", "Weekly plan adjustments", "Power-led analysis", "EN · NL · NO"],
    cardsEyebrow: "One coach. A complete system.",
    cardsTitle: "More than a schedule in your calendar.",
    cardsLead: "The work connects physiology, training data and the reality of your week—so every session has a reason and every change has context.",
    cards: [
      { href: "/coaching", number: "01", title: "Personal coaching", body: "A plan built around your physiology, priorities and the hours you genuinely have.", image: "/images/cycling-race.webp" },
      { href: "/method", number: "02", title: "The method", body: "Critical Power, internal load and clear decisions—not dashboards for their own sake.", image: "/images/coach-profile.webp" },
      { href: "/for-cyclists", number: "03", title: "Built for ambitious amateurs", body: "For riders who care about progress but still have a full life away from cycling.", image: "/images/testimonial-max.webp" },
      { href: "/knowledge", number: "04", title: "Knowledge hub", body: "Practical explanations that help you understand the training, not merely complete it.", image: "/images/hero-bg.webp" },
    ],
    processEyebrow: "How it starts",
    processTitle: "Clarity before intensity.",
    process: [
      { number: "01", title: "Tell me where you are", body: "Share your goals, history, weekly rhythm and equipment through the intake." },
      { number: "02", title: "Build the direction", body: "We align the season, establish a baseline and turn priorities into a realistic plan." },
      { number: "03", title: "Train, review, adapt", body: "You ride. I read the data and your feedback, then adjust the work as life unfolds." },
    ],
    resultEyebrow: "What riders notice",
    resultTitle: "Structure creates confidence before it creates speed.",
    resultQuote: "Working with a coach gave me the structure I needed. Every training session matches my goals and availability, and my performance has improved significantly.",
    resultName: "Max",
    resultRole: "Amateur cyclist",
    packagesEyebrow: "Choose your level of support",
    packagesTitle: "A clear monthly relationship. No generic plan library.",
    knowledgeEyebrow: "From the knowledge hub",
    knowledgeTitle: "Understand the work behind the watts.",
    knowledgeLead: "Evidence-informed writing for cyclists who want useful answers without the noise.",
    finalTitle: "Your next season can start with one honest conversation.",
    finalBody: "The intake takes around five minutes. I will review it personally and reply within two working days.",
  },
  packages: [
    { name: "Basic", price: "€89", audience: "For self-directed riders who want a sound structure and a monthly expert review.", features: ["Personal four-week training plan", "Intervals.icu setup", "Monthly 30-minute review", "Training zones and progress checks"] },
    { name: "Premium", price: "€129", audience: "For ambitious riders who want regular feedback and a plan that moves with their week.", featured: true, features: ["Weekly plan updates", "Intervals.icu and TrainingPeaks Premium", "Two contact moments per week", "In-depth training data analysis", "Event-specific preparation", "Recovery, nutrition and sleep guidance"] },
    { name: "Pro", price: "€209", audience: "For competitive riders who need close, high-level support around racing and performance.", features: ["Continuously tailored training plan", "Intensive coach contact", "Advanced power and load analysis", "Race, camp and season planning", "Heat and altitude strategies", "Recovery, nutrition and sleep guidance"] },
  ],
  packagesIntro: "All packages start with an intake and baseline review. We choose the level of contact that fits the rider—not the fanciest label.",
  packageNote: "Need a different setup? Tell me in the intake and we can discuss a tailored arrangement.",
  testimonials: [
    { quote: "Tycho keeps close contact about how the training is going and what I think of it. In a short time I have grown significantly and improved my performance on the bike.", name: "Tijmen", role: "Para-cyclist", stat: "15%", statLabel: "power improvement", image: "/images/testimonial-jelle.webp" },
    { quote: "I immediately noticed Tycho knew what he was doing. That made me believe in the plan and keep training. Thanks to him, I now have the best form of my life.", name: "Keimpe", role: "Amateur racer", stat: "Best", statLabel: "form to date", image: "/images/testimonial-cyclist.webp" },
    { quote: "Working with a coach gave me the structure I needed. Every session matches my goals and availability, and the personal approach has been excellent.", name: "Max", role: "Amateur cyclist", stat: "Strong", statLabel: "progress", image: "/images/testimonial-max.webp" },
  ],
  faq: [
    { question: "Who is online cycling coaching for?", answer: "Tycho Coaching is designed for ambitious amateur and competitive cyclists who want structure, individual feedback and a plan that fits around work, study or family. You do not need elite numbers; you do need the willingness to communicate and train consistently." },
    { question: "Do I need a power meter?", answer: "A power meter is useful but not mandatory. Heart rate, perceived exertion, route context and your comments still provide meaningful information. The coaching method uses the best data available to you." },
    { question: "Which platforms do you use?", answer: "Intervals.icu is central to analysis and planning. TrainingPeaks Premium is included in Premium and Pro when useful. You can continue recording rides with your existing Garmin, Wahoo or other compatible device." },
    { question: "How often does my plan change?", answer: "Premium plans are reviewed and updated weekly; Pro plans can change continuously when required. Basic provides a tailored four-week structure with a monthly review. Illness, fatigue, travel and schedule changes are reasons to adapt—not reasons to abandon the plan." },
    { question: "Can you prepare me for a gran fondo or race?", answer: "Yes. We work backwards from the demands of your target event, then develop the physiology, pacing, fuelling and practical confidence you will need on the day." },
    { question: "How quickly will you respond?", answer: "Intakes receive a personal reply within two working days. Ongoing response frequency depends on the coaching package, with the closest contact in Pro." },
    { question: "Is there a minimum commitment?", answer: "The final subscription and cancellation terms will be confirmed before coaching begins. You will always see and accept the applicable terms before entering a paid agreement." },
  ],
  knowledge: {
    eyebrow: "Knowledge hub",
    title: "Better questions lead to better training.",
    lead: "Clear, practical notes on performance, planning and the physiology behind your work.",
    metaTitle: "Cycling training knowledge hub",
    metaDescription: "Evidence-informed guides on cycling training, Critical Power, training load, planning and race preparation from Tycho Coaching.",
    featured: "Featured guide",
    all: "All articles",
  },
  contact: {
    eyebrow: "Start your intake",
    title: "Tell me about the rider behind the data.",
    lead: "There is no sales call script. I read every intake personally and reply with an honest view of whether—and how—I can help.",
    metaTitle: "Cycling coaching intake",
    metaDescription: "Start a personal cycling coaching intake with Tycho Coaching. Share your goals, available training time and preferred support level.",
    response: "Personal reply within two working days",
    fields: { name: "Full name", email: "Email address", phone: "Phone (optional)", country: "Country", discipline: "Cycling discipline", level: "Current level", hours: "Weekly training hours", goal: "Primary goal", event: "Target event (optional)", eventDate: "Event date (optional)", powerMeter: "Do you use a power meter?", platform: "Current training platform", package: "Package of interest", message: "Anything else I should know? (optional)", consent: "Consent", website: "Website" },
    options: { select: "Select an option", road: "Road", gravel: "Gravel", mtb: "Mountain bike", cyclocross: "Cyclocross", track: "Track", triathlon: "Triathlon", other: "Other", beginner: "New to structured training", amateur: "Ambitious amateur", racer: "Competitive racer", elite: "Elite / UCI", yes: "Yes", no: "No", intervals: "Intervals.icu", trainingpeaks: "TrainingPeaks", garmin: "Garmin Connect", none: "None yet", basic: "Basic · €89", premium: "Premium · €129", pro: "Pro · €209", unsure: "Not sure yet" },
    consent: "I agree that Tycho Coaching may use these details to assess and respond to my coaching request.",
    privacyLink: "Read the privacy policy",
    submit: "Send my intake",
    submitting: "Sending securely…",
    successTitle: "Your intake is with me.",
    successBody: "Thank you. I will review your answers and reply within two working days.",
    errorTitle: "The intake could not be sent.",
    errorBody: "Please try again, or email tychocoach@gmail.com if the problem continues.",
    duplicate: "This intake was already received recently. I will be in touch soon.",
    invalid: "Please check this field.",
  },
  footer: {
    statement: "Personal, science-led cycling coaching for ambitious riders everywhere.",
    explore: "Explore",
    contact: "Contact",
    legal: "Legal",
    rights: "All rights reserved.",
  },
  pages: {
    coaching: {
      eyebrow: "Personal online coaching",
      title: "A training relationship, not a downloaded schedule.",
      lead: "Your plan is built from your physiology, your goals and the reality of your calendar—and then changed when any of those change.",
      metaTitle: "Personal online cycling coaching",
      metaDescription: "Discover personal online cycling coaching with tailored plans, training-data analysis and regular feedback from movement scientist Tycho Parmentier.",
      sections: [
        { kicker: "The difference", title: "The plan is only the visible part.", body: ["Good coaching connects the work you complete with the response it creates. Your power, heart rate and training load matter, but so do sleep, stress, motivation and the demands outside sport.", "I combine those signals to decide when to progress, hold, replace or remove a session. That is what makes coaching different from a static plan."], points: ["Individual season and goal planning", "Sessions matched to available time", "Regular feedback and data review", "Fast adjustments when life changes"] },
        { kicker: "Communication", title: "Context makes the data useful.", body: ["A graph can show what happened. Your feedback helps explain why. Short, honest notes after training let me distinguish productive fatigue from a problem that needs attention.", "Depending on your package, we review progress monthly, weekly or continuously. You always know what the current block is trying to achieve."] },
        { kicker: "Outcome", title: "Become a more capable, more independent rider.", body: ["The goal is not to make you dependent on instructions. It is to build fitness while helping you understand pacing, recovery and the choices that shape performance."] },
      ],
    },
    method: {
      eyebrow: "Evidence into practice",
      title: "Science is useful when it improves the next decision.",
      lead: "The method combines Critical Power, internal and external training load, progressive overload and clear rider feedback.",
      metaTitle: "Science-led cycling training method",
      metaDescription: "See how Tycho Coaching applies Critical Power, training load, testing and rider feedback to personal cycling programmes.",
      sections: [
        { kicker: "01 · Profile", title: "Measure what matters for the work ahead.", body: ["Testing establishes a practical profile rather than a single vanity number. Critical Power and work capacity help describe how long you can sustain demanding work and how you perform above that boundary."], points: ["Field testing in real riding conditions", "Power and heart-rate zones with context", "Repeatable checkpoints across the season"] },
        { kicker: "02 · Load", title: "Read the session from both sides.", body: ["External load describes the work: power, duration and intensity. Internal load describes your response: heart rate, exertion and fatigue. Looking at both prevents false certainty.", "The same wattage can be routine one week and costly the next. Training decisions should notice that difference."] },
        { kicker: "03 · Adapt", title: "Progress is planned; adaptation is observed.", body: ["Training blocks have a direction, but they are not sacred. We progress load when you are absorbing it, protect recovery when you are not, and keep the route to your target event realistic."] },
      ],
    },
    "for-cyclists": {
      eyebrow: "Who I coach",
      title: "Serious about progress. Not pretending cycling is your only responsibility.",
      lead: "This coaching is for ambitious amateurs, developing racers and endurance riders who want their training to fit a full life.",
      metaTitle: "Cycling coaching for ambitious amateur riders",
      metaDescription: "Online coaching for ambitious amateur road, gravel, mountain-bike and endurance cyclists balancing training with work and family.",
      sections: [
        { kicker: "Ambitious amateurs", title: "You want to improve with the hours you have.", body: ["You may be preparing for a first gran fondo, trying to move up a race category or simply ready to stop guessing. We prioritise the sessions that create the most value within your week."], points: ["Road, gravel, MTB and cyclocross", "Gran fondos and target events", "Competitive amateur racing", "Fitness and long-term development"] },
        { kicker: "Real schedules", title: "Consistency does not require a perfect week.", body: ["Work deadlines, family commitments and travel are normal inputs—not failures. A useful plan has enough structure to create adaptation and enough flexibility to survive reality."] },
        { kicker: "The fit", title: "Curiosity and communication matter more than your FTP.", body: ["The best coaching relationship is collaborative. If you share honest feedback, ask questions and can train with reasonable consistency, we have something strong to build from."] },
      ],
    },
    about: {
      eyebrow: "Meet your coach",
      title: "From muscle biology to the next climb.",
      lead: "I am Tycho Parmentier: movement scientist, endurance athlete and coach translating physiology into practical work on the bike.",
      metaTitle: "About cycling coach Tycho Parmentier",
      metaDescription: "Meet Tycho Parmentier, movement scientist and cycling coach with a background in exercise physiology and muscle adaptation research.",
      sections: [
        { kicker: "Background", title: "A scientific foundation, used practically.", body: ["In 2024 I graduated in Movement Sciences at Vrije Universiteit Amsterdam, specialising in exercise physiology. I now study Cell and Molecular Biology at NTNU in Trondheim, researching how muscles and mitochondria adapt to training.", "That combination—from laboratory mechanisms to the messy reality of a training week—shapes how I coach. Evidence informs the work; the rider in front of me decides how it is applied."] },
        { kicker: "On the bike", title: "I understand the pull of a big goal.", body: ["Cycling became increasingly serious during my student years and led to racing internationally, including in Cameroon and Malaysia. I know the satisfaction of structured preparation and the difficulty of combining it with study, work and relationships."] },
        { kicker: "In practice", title: "Methods sharpen through collaboration.", body: ["Alongside Tycho Coaching I work as a freelance coach with Cyclinglab.cc, a science-oriented cycling platform. Exchanging ideas with other coaches keeps the method critical, current and grounded in practice."] },
      ],
    },
    results: {
      eyebrow: "Rider experiences",
      title: "Progress is personal. The pattern is consistent.",
      lead: "Better structure, clearer feedback and training that matches the rider’s actual life.",
      metaTitle: "Cycling coaching results and rider stories",
      metaDescription: "Read experiences from cyclists coached by Tycho Coaching, from ambitious amateurs to para-cyclists and racers.",
      sections: [
        { kicker: "What we look for", title: "Numbers matter, but they are not the whole result.", body: ["A higher power profile can be meaningful. So can arriving at a target event healthy, holding form through a busy period or finally trusting why each session is in the plan.", "Results are presented as individual experiences, never as guarantees. Your starting point, consistency and circumstances shape what is possible."] },
      ],
    },
    packages: {
      eyebrow: "Coaching packages",
      title: "Choose how closely we work together.",
      lead: "Every package is personal. The difference is how frequently we review, communicate and adjust.",
      metaTitle: "Online cycling coaching packages and prices",
      metaDescription: "Compare Basic, Premium and Pro personal cycling coaching from €89 per month, with training plans, analysis and individual feedback.",
      sections: [
        { title: "What happens after the intake?", body: ["I review your goals, history and availability first. If coaching is a good fit, we agree on the package and starting point before any paid work begins."] },
      ],
    },
    faq: {
      eyebrow: "Frequently asked questions",
      title: "The useful details, before you commit.",
      lead: "How the coaching works, what equipment you need and what to expect from the first weeks.",
      metaTitle: "Online cycling coaching FAQ",
      metaDescription: "Answers about power meters, training platforms, plan changes, target events and starting personal cycling coaching.",
      sections: [],
    },
    privacy: {
      eyebrow: "Privacy",
      title: "Your training story stays yours.",
      lead: "This policy explains which personal information Tycho Coaching uses, why it is needed and how long it is kept.",
      metaTitle: "Privacy policy",
      metaDescription: "Privacy policy for Tycho Coaching website visitors and cycling coaching enquiries.",
      sections: [
        { title: "Who is responsible", body: ["Tycho Coaching, operated by Tycho Parmentier (KVK 97624195), is responsible for personal information submitted through this website. Questions can be sent to tychocoach@gmail.com."] },
        { title: "Information used for enquiries", body: ["The intake asks for contact details, country, cycling discipline and level, available training hours, goals, event information, equipment, training platform and package interest. This is used only to assess and respond to your request, based on your consent.", "The website does not ask for age, gender, payment information or medical records through the intake form. Please do not include sensitive health information in the free-text field."] },
        { title: "Storage and retention", body: ["Intake data is sent securely to a private Google Sheet available to Tycho Coaching. Enquiries that do not become a coaching relationship are marked closed and deleted six months later. Records for clients may need to be kept longer to perform an agreement or meet legal obligations.", "The form uses short-term duplicate protection based on a one-way representation of your email address. It is not used for marketing."] },
        { title: "Analytics and service providers", body: ["Vercel hosts this website and provides privacy-conscious traffic and performance measurements. Google processes intake delivery and storage. These providers may process technical information under their own data-processing terms."] },
        { title: "Your rights", body: ["Depending on applicable law, you may request access, correction, deletion, restriction or portability of your information, or withdraw consent. Email tychocoach@gmail.com. You may also complain to your local data-protection authority."] },
      ],
    },
    terms: {
      eyebrow: "Terms · draft for review",
      title: "Clear expectations make better coaching.",
      lead: "These website terms are an implementation draft. The final coaching agreement and cancellation policy must be approved before the 2.0 site is published.",
      metaTitle: "Terms of service — draft",
      metaDescription: "Draft website and coaching terms for Tycho Coaching, pending owner review before publication.",
      sections: [
        { title: "Website information", body: ["The material on this website is general educational information. It is not medical advice, diagnosis or a guarantee of performance. Seek an appropriate healthcare professional when symptoms, injury or medical concerns affect exercise."] },
        { title: "Coaching agreement", body: ["A paid coaching relationship starts only after both parties agree in writing on the selected service, price, start date and applicable coaching terms. The final agreement will describe communication, billing, duration, cancellation and each party’s responsibilities."] },
        { title: "Athlete responsibility", body: ["Athletes remain responsible for deciding whether they are fit to train, following traffic rules, using safe equipment and sharing relevant feedback. Stop training and seek qualified help if you experience concerning symptoms."] },
        { title: "Intellectual property", body: ["Website copy and original coaching materials belong to Tycho Coaching unless stated otherwise. Personal training plans are supplied for the named athlete’s own use and may not be resold or published without permission."] },
        { title: "Review required", body: ["This page intentionally remains marked as a draft. It must be replaced or approved by Tycho Coaching before the production launch of version 2.0."] },
      ],
    },
  },
}

const nl: SiteCopy = {
  ...en,
  languageLabel: "Taal",
  skip: "Naar inhoud",
  nav: { coaching: "Coaching", method: "Methode", cyclists: "Voor wielrenners", about: "Over Tycho", results: "Resultaten", knowledge: "Kennis", packages: "Pakketten", faq: "Veelgestelde vragen", contact: "Contact" },
  common: { intake: "Start je intake", learnMore: "Ontdek de aanpak", readArticle: "Lees artikel", viewAll: "Bekijk alle inzichten", perMonth: "/ maand", choosePackage: "Kies dit pakket", backToKnowledge: "Terug naar kennis", minutes: "min leestijd", updated: "Bijgewerkt", openMenu: "Menu openen", closeMenu: "Menu sluiten" },
  home: {
    ...en.home,
    metaTitle: "Online wielercoaching die past bij jouw leven",
    metaDescription: "Persoonlijke, wetenschappelijk onderbouwde online wielercoaching voor ambitieuze amateurs. Training afgestemd op jouw doelen, data en beschikbare tijd.",
    eyebrow: "Persoonlijke wielercoaching · wereldwijd",
    title: "Zet je ambitie om in betere dagen op de fiets.",
    lead: "Gestructureerde training, eerlijke feedback en sportwetenschap vertaald naar een plan dat past naast werk, gezin en doelen.",
    primaryCta: "Start je intake",
    secondaryCta: "Bekijk hoe coaching werkt",
    proof: ["Bewegingswetenschapper", "Wekelijkse aanpassingen", "Vermogensanalyse", "EN · NL · NO"],
    cardsEyebrow: "Eén coach. Een compleet systeem.",
    cardsTitle: "Meer dan een schema in je agenda.",
    cardsLead: "De aanpak verbindt fysiologie, trainingsdata en de realiteit van jouw week—zodat elke training een reden heeft en elke wijziging context.",
    cards: [
      { href: "/coaching", number: "01", title: "Persoonlijke coaching", body: "Een plan rond jouw fysiologie, prioriteiten en de uren die je echt hebt.", image: "/images/cycling-race.webp" },
      { href: "/method", number: "02", title: "De methode", body: "Critical Power, interne belasting en heldere keuzes—geen dashboards om de dashboards.", image: "/images/coach-profile.webp" },
      { href: "/for-cyclists", number: "03", title: "Voor ambitieuze amateurs", body: "Voor renners die progressie serieus nemen én een vol leven naast de fiets hebben.", image: "/images/testimonial-max.webp" },
      { href: "/knowledge", number: "04", title: "Kennisbank", body: "Praktische uitleg waarmee je de training begrijpt in plaats van alleen uitvoert.", image: "/images/hero-bg.webp" },
    ],
    processEyebrow: "Zo beginnen we",
    processTitle: "Eerst helderheid, dan intensiteit.",
    process: [
      { number: "01", title: "Vertel waar je staat", body: "Deel doelen, achtergrond, weekritme en materiaal via de intake." },
      { number: "02", title: "Bepaal de richting", body: "We lijnen je seizoen uit, maken een nulmeting en vertalen prioriteiten naar een realistisch plan." },
      { number: "03", title: "Train, evalueer, pas aan", body: "Jij fietst. Ik lees data en feedback en stuur bij wanneer het leven daarom vraagt." },
    ],
    resultEyebrow: "Wat renners merken",
    resultTitle: "Structuur geeft vertrouwen voordat het snelheid geeft.",
    resultQuote: "Samenwerken met een coach gaf mij de structuur die ik nodig had. Iedere training sluit aan op mijn doelen en beschikbaarheid, en mijn prestaties zijn flink verbeterd.",
    resultName: "Max",
    resultRole: "Amateurwielrenner",
    packagesEyebrow: "Kies je niveau van begeleiding",
    packagesTitle: "Een heldere maandelijkse samenwerking. Geen bibliotheek met standaardschema’s.",
    knowledgeEyebrow: "Uit de kennisbank",
    knowledgeTitle: "Begrijp het werk achter de watts.",
    knowledgeLead: "Onderbouwde artikelen voor renners die bruikbare antwoorden willen zonder ruis.",
    finalTitle: "Je volgende seizoen kan beginnen met één eerlijk gesprek.",
    finalBody: "De intake duurt ongeveer vijf minuten. Ik lees hem persoonlijk en reageer binnen twee werkdagen.",
  },
  packages: [
    { name: "Basis", price: "€89", audience: "Voor zelfstandige renners die structuur en een maandelijkse expertcheck willen.", features: ["Persoonlijk vierwekenschema", "Inrichting van Intervals.icu", "Maandelijkse evaluatie van 30 minuten", "Trainingszones en voortgangschecks"] },
    { name: "Premium", price: "€129", audience: "Voor ambitieuze renners die regelmatige feedback willen en een plan dat met hun week meebeweegt.", featured: true, features: ["Wekelijkse schema-updates", "Intervals.icu en TrainingPeaks Premium", "Twee contactmomenten per week", "Diepgaande trainingsdata-analyse", "Gerichte eventvoorbereiding", "Begeleiding bij herstel, voeding en slaap"] },
    { name: "Pro", price: "€209", audience: "Voor wedstrijdrijders die intensieve begeleiding op hoog niveau nodig hebben.", features: ["Continu aangepast trainingsplan", "Intensief contact met coach", "Geavanceerde vermogens- en belastingsanalyse", "Wedstrijd-, kamp- en seizoensplanning", "Hitte- en hoogtestrategieën", "Begeleiding bij herstel, voeding en slaap"] },
  ],
  packagesIntro: "Elk pakket start met een intake en nulmeting. We kiezen de contactfrequentie die bij jou past—niet het mooiste label.",
  packageNote: "Een andere opzet nodig? Benoem het in de intake, dan bespreken we een passende oplossing.",
  testimonials: [
    { quote: "Tycho houdt nauw contact over hoe het gaat en wat ik ervan vind. In korte tijd ben ik flink gegroeid en heb ik mijn prestaties op de fiets verbeterd.", name: "Tijmen", role: "Para-wielrenner", stat: "15%", statLabel: "vermogensverbetering", image: "/images/testimonial-jelle.webp" },
    { quote: "Ik merkte meteen dat Tycho verstand van zaken had. Daardoor ging ik in het schema geloven en bleef ik trainen. Dankzij hem heb ik nu de vorm van mijn leven.", name: "Keimpe", role: "Amateur racer", stat: "Beste", statLabel: "vorm tot nu", image: "/images/testimonial-cyclist.webp" },
    { quote: "Een coach gaf mij de structuur die ik nodig had. Iedere training sluit aan bij mijn doelen en beschikbaarheid, en de persoonlijke aanpak is erg fijn.", name: "Max", role: "Amateurwielrenner", stat: "Sterke", statLabel: "vooruitgang", image: "/images/testimonial-max.webp" },
  ],
  faq: [
    { question: "Voor wie is online wielercoaching?", answer: "Tycho Coaching is bedoeld voor ambitieuze amateurs en wedstrijdrijders die structuur, individuele feedback en een plan naast werk, studie of gezin willen. Je hebt geen elitewaarden nodig; wel de bereidheid om te communiceren en consequent te trainen." },
    { question: "Heb ik een vermogensmeter nodig?", answer: "Een vermogensmeter is nuttig, maar niet verplicht. Hartslag, ervaren inspanning, routecontext en jouw opmerkingen leveren ook waardevolle informatie. We gebruiken de beste data die jij beschikbaar hebt." },
    { question: "Welke platforms gebruiken jullie?", answer: "Intervals.icu staat centraal voor analyse en planning. TrainingPeaks Premium is bij Premium en Pro inbegrepen wanneer dat zinvol is. Je kunt ritten blijven opnemen met je huidige Garmin, Wahoo of ander compatibel apparaat." },
    { question: "Hoe vaak verandert mijn schema?", answer: "Premium-schema’s worden wekelijks bijgewerkt; Pro kan doorlopend veranderen. Basis biedt een persoonlijk vierwekenschema met maandelijkse evaluatie. Ziekte, vermoeidheid en agenda-aanpassingen zijn redenen om bij te sturen." },
    { question: "Kun je mij voorbereiden op een granfondo of wedstrijd?", answer: "Ja. We werken terug vanuit de eisen van jouw doelevent en ontwikkelen de fysiologie, pacing, voeding en praktische zekerheid die je op de dag zelf nodig hebt." },
    { question: "Hoe snel reageer je?", answer: "Op een intake reageer ik persoonlijk binnen twee werkdagen. De reactiefrequentie tijdens coaching hangt af van je pakket, met het nauwste contact binnen Pro." },
    { question: "Is er een minimale looptijd?", answer: "De definitieve abonnements- en annuleringsvoorwaarden worden bevestigd voordat coaching start. Je ziet en accepteert altijd de geldende voorwaarden voordat je een betaalde overeenkomst aangaat." },
  ],
  knowledge: { eyebrow: "Kennisbank", title: "Betere vragen leiden tot betere training.", lead: "Heldere, praktische artikelen over prestaties, planning en de fysiologie achter het werk.", metaTitle: "Kennisbank wielertraining", metaDescription: "Onderbouwde artikelen over wielertraining, Critical Power, trainingsbelasting, planning en wedstrijdvoorbereiding van Tycho Coaching.", featured: "Uitgelicht artikel", all: "Alle artikelen" },
  contact: {
    ...en.contact,
    eyebrow: "Start je intake", title: "Vertel over de renner achter de data.", lead: "Geen verkoopscript. Ik lees iedere intake persoonlijk en geef eerlijk aan of—en hoe—ik je kan helpen.", metaTitle: "Intake wielercoaching", metaDescription: "Start een persoonlijke intake voor wielercoaching bij Tycho Coaching en deel je doelen, beschikbare tijd en gewenste begeleiding.", response: "Persoonlijke reactie binnen twee werkdagen",
    fields: { name: "Volledige naam", email: "E-mailadres", phone: "Telefoon (optioneel)", country: "Land", discipline: "Wielerdiscipline", level: "Huidig niveau", hours: "Trainingsuren per week", goal: "Belangrijkste doel", event: "Doelevent (optioneel)", eventDate: "Datum event (optioneel)", powerMeter: "Gebruik je een vermogensmeter?", platform: "Huidig trainingsplatform", package: "Interesse in pakket", message: "Wat moet ik nog weten? (optioneel)", consent: "Toestemming", website: "Website" },
    options: { select: "Kies een optie", road: "Weg", gravel: "Gravel", mtb: "Mountainbike", cyclocross: "Veldrijden", track: "Baan", triathlon: "Triathlon", other: "Anders", beginner: "Nieuw met gestructureerd trainen", amateur: "Ambitieuze amateur", racer: "Wedstrijdrijder", elite: "Elite / UCI", yes: "Ja", no: "Nee", intervals: "Intervals.icu", trainingpeaks: "TrainingPeaks", garmin: "Garmin Connect", none: "Nog geen", basic: "Basis · €89", premium: "Premium · €129", pro: "Pro · €209", unsure: "Nog niet zeker" },
    consent: "Ik geef toestemming om deze gegevens te gebruiken om mijn coachingsaanvraag te beoordelen en te beantwoorden.", privacyLink: "Lees het privacybeleid", submit: "Verstuur mijn intake", submitting: "Veilig versturen…", successTitle: "Je intake is binnen.", successBody: "Dank je. Ik bekijk je antwoorden en reageer binnen twee werkdagen.", errorTitle: "De intake kon niet worden verstuurd.", errorBody: "Probeer het opnieuw of mail tychocoach@gmail.com als het probleem blijft bestaan.", duplicate: "Deze intake is onlangs al ontvangen. Ik neem snel contact op.", invalid: "Controleer dit veld.",
  },
  footer: { statement: "Persoonlijke, wetenschappelijk onderbouwde wielercoaching voor ambitieuze renners overal.", explore: "Ontdek", contact: "Contact", legal: "Juridisch", rights: "Alle rechten voorbehouden." },
  pages: {
    coaching: { eyebrow: "Persoonlijke online coaching", title: "Een trainingsrelatie, geen gedownload schema.", lead: "Je plan vertrekt vanuit jouw fysiologie, doelen en agenda—en verandert wanneer een daarvan verandert.", metaTitle: "Persoonlijke online wielercoaching", metaDescription: "Ontdek persoonlijke wielercoaching met maatwerkschema’s, data-analyse en regelmatige feedback van bewegingswetenschapper Tycho Parmentier.", sections: [
      { kicker: "Het verschil", title: "Het schema is alleen het zichtbare deel.", body: ["Goede coaching verbindt het werk dat je doet met de respons die het oproept. Vermogen, hartslag en trainingsbelasting tellen mee, maar slaap, stress, motivatie en verantwoordelijkheden buiten de sport ook.", "Ik combineer die signalen om te bepalen wanneer we opbouwen, vasthouden, vervangen of schrappen. Dat onderscheidt coaching van een statisch schema."], points: ["Individuele seizoen- en doelplanning", "Trainingen passend bij je beschikbare tijd", "Regelmatige feedback en datareview", "Snel aanpassen wanneer het leven verandert"] },
      { kicker: "Communicatie", title: "Context maakt data bruikbaar.", body: ["Een grafiek toont wat er gebeurde. Jouw feedback helpt verklaren waarom. Korte, eerlijke opmerkingen na een training maken het verschil tussen productieve vermoeidheid en een probleem.", "Afhankelijk van je pakket evalueren we maandelijks, wekelijks of doorlopend. Je weet steeds wat een trainingsblok probeert te bereiken."] },
      { kicker: "Resultaat", title: "Word een sterkere én zelfstandiger renner.", body: ["Het doel is niet dat je afhankelijk wordt van instructies. We bouwen conditie en tegelijk je inzicht in pacing, herstel en de keuzes achter prestaties."] },
    ] },
    method: { eyebrow: "Wetenschap in de praktijk", title: "Wetenschap is waardevol als ze de volgende keuze verbetert.", lead: "De methode combineert Critical Power, interne en externe belasting, progressieve opbouw en heldere feedback.", metaTitle: "Wetenschappelijke methode voor wielertraining", metaDescription: "Lees hoe Tycho Coaching Critical Power, trainingsbelasting, testen en feedback toepast in persoonlijke wielerprogramma’s.", sections: [
      { kicker: "01 · Profiel", title: "Meet wat relevant is voor het werk dat komt.", body: ["Testen geeft een praktisch profiel, geen los ijdel getal. Critical Power en work capacity beschrijven hoe lang je zwaar werk volhoudt en wat je boven die grens kunt leveren."], points: ["Veldtests in echte rijomstandigheden", "Vermogens- en hartslagzones met context", "Herhaalbare meetmomenten in het seizoen"] },
      { kicker: "02 · Belasting", title: "Lees de training van twee kanten.", body: ["Externe belasting beschrijft het werk: vermogen, duur en intensiteit. Interne belasting beschrijft jouw respons: hartslag, inspanning en vermoeidheid. Beide bekijken voorkomt schijnzekerheid.", "Hetzelfde vermogen kan de ene week normaal en de volgende week kostbaar zijn. Goede keuzes zien dat verschil."] },
      { kicker: "03 · Aanpassen", title: "Progressie plan je; adaptatie observeer je.", body: ["Trainingsblokken hebben richting, maar zijn niet heilig. We bouwen op als je de belasting verwerkt, beschermen herstel wanneer dat niet lukt en houden de route naar je doel realistisch."] },
    ] },
    "for-cyclists": { eyebrow: "Voor wie", title: "Serieus over progressie. Zonder te doen alsof fietsen je enige verantwoordelijkheid is.", lead: "Voor ambitieuze amateurs, ontwikkelende racers en duurrenners die een plan naast een vol leven willen.", metaTitle: "Wielercoaching voor ambitieuze amateurs", metaDescription: "Online coaching voor ambitieuze weg-, gravel-, mountainbike- en duurrenners die training combineren met werk en gezin.", sections: [
      { kicker: "Ambitieuze amateurs", title: "Je wilt verbeteren met de uren die je hebt.", body: ["Misschien train je voor een eerste granfondo, wil je een wedstrijdcategorie opschuiven of ben je klaar met gokken. We kiezen de trainingen met de meeste waarde binnen jouw week."], points: ["Weg, gravel, MTB en veldrijden", "Granfondo’s en doelevents", "Amateurwedstrijden", "Conditie en langetermijnontwikkeling"] },
      { kicker: "Echte agenda’s", title: "Consistentie vraagt geen perfecte week.", body: ["Deadlines, gezin en reizen zijn normale input—geen mislukkingen. Een goed plan heeft genoeg structuur voor adaptatie en genoeg flexibiliteit voor de werkelijkheid."] },
      { kicker: "De match", title: "Nieuwsgierigheid en communicatie tellen meer dan je FTP.", body: ["De beste coachrelatie is samenwerking. Deel je eerlijke feedback, stel vragen en train redelijk consequent; dan hebben we een sterke basis."] },
    ] },
    about: { eyebrow: "Maak kennis met je coach", title: "Van spierbiologie naar de volgende klim.", lead: "Ik ben Tycho Parmentier: bewegingswetenschapper, duursporter en coach die fysiologie vertaalt naar praktisch werk op de fiets.", metaTitle: "Over wielercoach Tycho Parmentier", metaDescription: "Maak kennis met Tycho Parmentier, bewegingswetenschapper en wielercoach met een achtergrond in inspanningsfysiologie en spieradaptatie.", sections: [
      { kicker: "Achtergrond", title: "Een wetenschappelijke basis, praktisch gebruikt.", body: ["In 2024 studeerde ik af in Bewegingswetenschappen aan de Vrije Universiteit Amsterdam, met specialisatie inspanningsfysiologie. Nu studeer ik Cell- en Moleculaire Biologie aan de NTNU in Trondheim en onderzoek ik hoe spieren en mitochondriën zich aanpassen aan training.", "Die combinatie—van labmechanismen tot de rommelige werkelijkheid van een trainingsweek—vormt mijn coaching. Bewijs informeert; de renner bepaalt de toepassing."] },
      { kicker: "Op de fiets", title: "Ik ken de aantrekkingskracht van een groot doel.", body: ["Tijdens mijn studententijd werd wielrennen steeds serieuzer en reed ik internationaal, onder meer in Kameroen en Maleisië. Ik ken het plezier van voorbereiding en de uitdaging om die met studie, werk en relaties te combineren."] },
      { kicker: "In de praktijk", title: "Methodes worden scherper door samenwerking.", body: ["Naast Tycho Coaching werk ik freelance voor Cyclinglab.cc, een wetenschappelijk georiënteerd wielerplatform. Sparren met andere coaches houdt mijn methode kritisch, actueel en praktisch."] },
    ] },
    results: { eyebrow: "Ervaringen van renners", title: "Vooruitgang is persoonlijk. Het patroon is herkenbaar.", lead: "Meer structuur, helderdere feedback en training die past bij het echte leven van de renner.", metaTitle: "Resultaten en ervaringen met wielercoaching", metaDescription: "Lees ervaringen van renners die door Tycho Coaching worden begeleid, van ambitieuze amateurs tot para-wielrenners.", sections: [{ kicker: "Waar we naar kijken", title: "Getallen tellen, maar zijn niet het hele resultaat.", body: ["Een hoger vermogensprofiel kan betekenisvol zijn. Gezond aan je doelevent verschijnen, vorm vasthouden in een drukke periode of eindelijk vertrouwen in je schema ook.", "Ervaringen zijn individueel, nooit garanties. Startpunt, consistentie en omstandigheden bepalen wat mogelijk is."] }] },
    packages: { eyebrow: "Coachingspakketten", title: "Kies hoe nauw we samenwerken.", lead: "Elk pakket is persoonlijk. Het verschil zit in hoe vaak we evalueren, communiceren en bijsturen.", metaTitle: "Pakketten en prijzen voor online wielercoaching", metaDescription: "Vergelijk Basis, Premium en Pro persoonlijke wielercoaching vanaf €89 per maand, met schema’s, analyse en feedback.", sections: [{ title: "Wat gebeurt er na de intake?", body: ["Ik bekijk eerst je doelen, achtergrond en beschikbaarheid. Als coaching past, spreken we pakket en startpunt af voordat betaald werk begint."] }] },
    faq: { eyebrow: "Veelgestelde vragen", title: "De nuttige details voordat je kiest.", lead: "Hoe coaching werkt, welk materiaal je nodig hebt en wat je in de eerste weken verwacht.", metaTitle: "Veelgestelde vragen over online wielercoaching", metaDescription: "Antwoorden over vermogensmeters, trainingsplatforms, schemawijzigingen, doelevents en starten met persoonlijke wielercoaching.", sections: [] },
    privacy: { eyebrow: "Privacy", title: "Jouw trainingsverhaal blijft van jou.", lead: "Dit beleid legt uit welke persoonsgegevens Tycho Coaching gebruikt, waarom en hoe lang.", metaTitle: "Privacybeleid", metaDescription: "Privacybeleid voor bezoekers en aanvragen bij Tycho Coaching.", sections: [
      { title: "Wie is verantwoordelijk", body: ["Tycho Coaching, geëxploiteerd door Tycho Parmentier (KVK 97624195), is verantwoordelijk voor gegevens die via deze website worden ingediend. Vragen: tychocoach@gmail.com."] },
      { title: "Gegevens voor aanvragen", body: ["De intake vraagt om contactgegevens, land, discipline, niveau, beschikbare uren, doelen, eventinformatie, materiaal, platform en pakketinteresse. Deze worden alleen gebruikt om jouw aanvraag te beoordelen en beantwoorden, op basis van toestemming.", "Het formulier vraagt niet om leeftijd, geslacht, betaalgegevens of medische dossiers. Zet geen gevoelige gezondheidsinformatie in het vrije tekstveld."] },
      { title: "Opslag en bewaartermijn", body: ["Intakegegevens gaan veilig naar een privé Google Sheet van Tycho Coaching. Aanvragen die geen coachrelatie worden, worden gesloten en zes maanden later verwijderd. Klantgegevens kunnen langer nodig zijn voor overeenkomst of wettelijke plichten.", "Het formulier gebruikt tijdelijke duplicaatbeveiliging met een eenrichtingsrepresentatie van je e-mail. Niet voor marketing."] },
      { title: "Analytics en dienstverleners", body: ["Vercel host de website en levert privacybewuste verkeers- en prestatiemetingen. Google verwerkt bezorging en opslag van intakes. Zij kunnen technische gegevens verwerken onder eigen verwerkersvoorwaarden."] },
      { title: "Jouw rechten", body: ["Je kunt, afhankelijk van de wet, inzage, correctie, verwijdering, beperking of overdraagbaarheid vragen of toestemming intrekken. Mail tychocoach@gmail.com. Je kunt ook klagen bij de Autoriteit Persoonsgegevens."] },
    ] },
    terms: { eyebrow: "Voorwaarden · concept ter beoordeling", title: "Duidelijke verwachtingen maken betere coaching.", lead: "Dit is een implementatieconcept. De definitieve coachovereenkomst en annuleringsregeling moeten vóór publicatie worden goedgekeurd.", metaTitle: "Algemene voorwaarden — concept", metaDescription: "Conceptvoorwaarden voor Tycho Coaching, nog te beoordelen vóór publicatie.", sections: [
      { title: "Website-informatie", body: ["Materiaal op deze website is algemene educatieve informatie. Het is geen medisch advies, diagnose of prestatiegarantie. Raadpleeg een geschikte zorgprofessional bij klachten, blessures of medische zorgen rond inspanning."] },
      { title: "Coachovereenkomst", body: ["Een betaalde coachrelatie start pas nadat beide partijen schriftelijk akkoord zijn over dienst, prijs, startdatum en voorwaarden. De definitieve overeenkomst beschrijft communicatie, betaling, looptijd, annulering en verantwoordelijkheden."] },
      { title: "Verantwoordelijkheid sporter", body: ["Sporters blijven verantwoordelijk voor hun trainingsgeschiktheid, verkeersregels, veilig materiaal en relevante feedback. Stop en zoek gekwalificeerde hulp bij zorgwekkende klachten."] },
      { title: "Intellectueel eigendom", body: ["Websitecopy en originele coachmaterialen behoren aan Tycho Coaching tenzij anders vermeld. Persoonlijke schema’s zijn voor eigen gebruik en mogen niet zonder toestemming worden doorverkocht of gepubliceerd."] },
      { title: "Beoordeling vereist", body: ["Deze pagina blijft bewust als concept gemarkeerd. Tycho Coaching moet haar vervangen of goedkeuren vóór de productielancering van versie 2.0."] },
    ] },
  },
}

const no: SiteCopy = {
  ...en,
  languageLabel: "Språk",
  skip: "Gå til innhold",
  nav: { coaching: "Coaching", method: "Metode", cyclists: "For syklister", about: "Om Tycho", results: "Resultater", knowledge: "Kunnskap", packages: "Pakker", faq: "Spørsmål", contact: "Kontakt" },
  common: { intake: "Start kartleggingen", learnMore: "Utforsk tilnærmingen", readArticle: "Les artikkel", viewAll: "Se alle artikler", perMonth: "/ måned", choosePackage: "Velg denne pakken", backToKnowledge: "Tilbake til kunnskap", minutes: "min lesetid", updated: "Oppdatert", openMenu: "Åpne meny", closeMenu: "Lukk meny" },
  home: {
    ...en.home,
    metaTitle: "Nettbasert sykkelcoaching tilpasset livet ditt",
    metaDescription: "Personlig, vitenskapsbasert sykkelcoaching for ambisiøse amatører. Trening tilpasset målene, dataene og tiden din.",
    eyebrow: "Personlig sykkelcoaching · over hele verden",
    title: "Gjør ambisjonene om til bedre dager på sykkelen.",
    lead: "Strukturert trening, ærlige tilbakemeldinger og idrettsvitenskap oversatt til en plan som fungerer med jobb, familie og mål.",
    primaryCta: "Start kartleggingen",
    secondaryCta: "Se hvordan coaching fungerer",
    proof: ["Bevegelsesviter", "Ukentlige justeringer", "Effektbasert analyse", "EN · NL · NO"],
    cardsEyebrow: "Én trener. Et komplett system.",
    cardsTitle: "Mer enn en plan i kalenderen.",
    cardsLead: "Arbeidet kobler fysiologi, treningsdata og virkeligheten i uken din—slik at hver økt har en grunn og hver endring en sammenheng.",
    cards: [
      { href: "/coaching", number: "01", title: "Personlig coaching", body: "En plan bygget rundt fysiologien, prioriteringene og timene du faktisk har.", image: "/images/cycling-race.webp" },
      { href: "/method", number: "02", title: "Metoden", body: "Critical Power, intern belastning og tydelige valg—ikke dashbord for dashbordets skyld.", image: "/images/coach-profile.webp" },
      { href: "/for-cyclists", number: "03", title: "For ambisiøse amatører", body: "For syklister som bryr seg om fremgang og samtidig har et helt liv utenfor sporten.", image: "/images/testimonial-max.webp" },
      { href: "/knowledge", number: "04", title: "Kunnskapsbase", body: "Praktiske forklaringer som hjelper deg å forstå treningen, ikke bare gjennomføre den.", image: "/images/hero-bg.webp" },
    ],
    processEyebrow: "Slik starter det",
    processTitle: "Klarhet før intensitet.",
    process: [
      { number: "01", title: "Fortell hvor du står", body: "Del mål, historikk, ukerytme og utstyr i kartleggingen." },
      { number: "02", title: "Bygg retningen", body: "Vi setter retning for sesongen, finner utgangspunktet og gjør prioriteringer til en realistisk plan." },
      { number: "03", title: "Tren, vurder, tilpass", body: "Du sykler. Jeg leser data og tilbakemeldinger og justerer når livet endrer seg." },
    ],
    resultEyebrow: "Det utøverne merker",
    resultTitle: "Struktur skaper trygghet før den skaper fart.",
    resultQuote: "Å jobbe med en trener ga meg strukturen jeg trengte. Hver økt passer målene og tiden min, og prestasjonen har blitt betydelig bedre.",
    resultName: "Max",
    resultRole: "Amatørsyklist",
    packagesEyebrow: "Velg oppfølgingsnivå",
    packagesTitle: "Et tydelig månedlig samarbeid. Ingen bibliotek med standardplaner.",
    knowledgeEyebrow: "Fra kunnskapsbasen",
    knowledgeTitle: "Forstå arbeidet bak wattene.",
    knowledgeLead: "Kunnskapsbaserte artikler for syklister som vil ha nyttige svar uten støy.",
    finalTitle: "Din neste sesong kan begynne med én ærlig samtale.",
    finalBody: "Kartleggingen tar rundt fem minutter. Jeg leser den personlig og svarer innen to virkedager.",
  },
  packages: [
    { name: "Basis", price: "€89", audience: "For selvstendige syklister som vil ha god struktur og månedlig ekspertvurdering.", features: ["Personlig fireukersplan", "Oppsett av Intervals.icu", "Månedlig 30-minutters gjennomgang", "Treningssoner og progresjonssjekk"] },
    { name: "Premium", price: "€129", audience: "For ambisiøse syklister som vil ha jevnlige tilbakemeldinger og en plan som følger uken.", featured: true, features: ["Ukentlige planoppdateringer", "Intervals.icu og TrainingPeaks Premium", "To kontaktpunkter i uken", "Grundig treningsdataanalyse", "Målrettet rittforberedelse", "Veiledning om restitusjon, ernæring og søvn"] },
    { name: "Pro", price: "€209", audience: "For konkurransesyklister som trenger tett oppfølging på høyt nivå.", features: ["Kontinuerlig tilpasset treningsplan", "Tett kontakt med trener", "Avansert effekt- og belastningsanalyse", "Ritt-, samlings- og sesongplanlegging", "Varme- og høydeprotokoller", "Veiledning om restitusjon, ernæring og søvn"] },
  ],
  packagesIntro: "Alle pakker starter med kartlegging og utgangsvurdering. Vi velger kontaktnivået som passer utøveren—ikke den fineste etiketten.",
  packageNote: "Trenger du et annet oppsett? Beskriv det i kartleggingen, så diskuterer vi en tilpasset løsning.",
  testimonials: [
    { quote: "Tycho følger tett opp hvordan treningen går og hva jeg synes. På kort tid har jeg utviklet meg mye og forbedret prestasjonen på sykkelen.", name: "Tijmen", role: "Parasyklist", stat: "15%", statLabel: "effektforbedring", image: "/images/testimonial-jelle.webp" },
    { quote: "Jeg merket med en gang at Tycho visste hva han gjorde. Det ga meg tro på planen og gjorde at jeg fortsatte. Nå har jeg min beste form noensinne.", name: "Keimpe", role: "Amatørrytter", stat: "Beste", statLabel: "form til nå", image: "/images/testimonial-cyclist.webp" },
    { quote: "En trener ga meg strukturen jeg trengte. Hver økt passer målene og tiden min, og den personlige tilnærmingen har vært svært god.", name: "Max", role: "Amatørsyklist", stat: "Sterk", statLabel: "fremgang", image: "/images/testimonial-max.webp" },
  ],
  faq: [
    { question: "Hvem passer nettbasert sykkelcoaching for?", answer: "Tycho Coaching er laget for ambisiøse amatører og konkurransesyklister som ønsker struktur, individuell tilbakemelding og en plan som fungerer med jobb, studier eller familie. Du trenger ikke elitetall, men du må ville kommunisere og trene jevnt." },
    { question: "Trenger jeg effektmåler?", answer: "En effektmåler er nyttig, men ikke obligatorisk. Puls, opplevd anstrengelse, rutekontekst og kommentarene dine gir også god informasjon. Vi bruker de beste dataene du har tilgjengelig." },
    { question: "Hvilke plattformer bruker dere?", answer: "Intervals.icu er sentralt for analyse og planlegging. TrainingPeaks Premium er inkludert i Premium og Pro når det er nyttig. Du kan registrere turer med Garmin, Wahoo eller annen kompatibel enhet." },
    { question: "Hvor ofte endres planen?", answer: "Premium-planer vurderes og oppdateres ukentlig; Pro kan endres fortløpende. Basis gir en personlig fireukersstruktur med månedlig gjennomgang. Sykdom, tretthet og endringer i kalenderen er grunner til å tilpasse." },
    { question: "Kan du forberede meg til gran fondo eller ritt?", answer: "Ja. Vi jobber bakover fra kravene i målrittet og utvikler fysiologi, pacing, ernæring og praktisk trygghet for konkurransedagen." },
    { question: "Hvor raskt svarer du?", answer: "Jeg svarer personlig på kartleggingen innen to virkedager. Oppfølgingen under coaching avhenger av pakken, med tettest kontakt i Pro." },
    { question: "Er det bindingstid?", answer: "Endelige abonnements- og oppsigelsesvilkår bekreftes før coaching starter. Du får alltid se og godta gjeldende vilkår før en betalt avtale inngås." },
  ],
  knowledge: { eyebrow: "Kunnskapsbase", title: "Bedre spørsmål gir bedre trening.", lead: "Tydelige, praktiske artikler om prestasjon, planlegging og fysiologien bak arbeidet.", metaTitle: "Kunnskapsbase for sykkeltrening", metaDescription: "Kunnskapsbaserte guider om sykkeltrening, Critical Power, treningsbelastning, planlegging og rittforberedelse.", featured: "Utvalgt guide", all: "Alle artikler" },
  contact: {
    ...en.contact,
    eyebrow: "Start kartleggingen", title: "Fortell om utøveren bak dataene.", lead: "Ingen salgssamtale med manus. Jeg leser hver kartlegging personlig og sier ærlig om—og hvordan—jeg kan hjelpe.", metaTitle: "Kartlegging for sykkelcoaching", metaDescription: "Start en personlig kartlegging hos Tycho Coaching og del mål, tilgjengelig treningstid og ønsket oppfølging.", response: "Personlig svar innen to virkedager",
    fields: { name: "Fullt navn", email: "E-postadresse", phone: "Telefon (valgfritt)", country: "Land", discipline: "Sykkelgren", level: "Nåværende nivå", hours: "Treningstimer per uke", goal: "Hovedmål", event: "Målritt (valgfritt)", eventDate: "Dato for ritt (valgfritt)", powerMeter: "Bruker du effektmåler?", platform: "Nåværende treningsplattform", package: "Aktuell pakke", message: "Er det noe annet jeg bør vite? (valgfritt)", consent: "Samtykke", website: "Nettside" },
    options: { select: "Velg et alternativ", road: "Landevei", gravel: "Gravel", mtb: "Terrengsykkel", cyclocross: "Sykkelkross", track: "Bane", triathlon: "Triatlon", other: "Annet", beginner: "Ny med strukturert trening", amateur: "Ambisiøs amatør", racer: "Konkurransesyklist", elite: "Elite / UCI", yes: "Ja", no: "Nei", intervals: "Intervals.icu", trainingpeaks: "TrainingPeaks", garmin: "Garmin Connect", none: "Ingen ennå", basic: "Basis · €89", premium: "Premium · €129", pro: "Pro · €209", unsure: "Ikke sikker ennå" },
    consent: "Jeg samtykker til at Tycho Coaching bruker opplysningene for å vurdere og svare på coachingforespørselen.", privacyLink: "Les personvernerklæringen", submit: "Send kartleggingen", submitting: "Sender sikkert…", successTitle: "Kartleggingen er mottatt.", successBody: "Takk. Jeg vurderer svarene og tar kontakt innen to virkedager.", errorTitle: "Kartleggingen kunne ikke sendes.", errorBody: "Prøv igjen, eller send e-post til tychocoach@gmail.com hvis problemet fortsetter.", duplicate: "Denne kartleggingen ble nylig mottatt. Jeg tar snart kontakt.", invalid: "Kontroller dette feltet.",
  },
  footer: { statement: "Personlig, vitenskapsbasert sykkelcoaching for ambisiøse utøvere overalt.", explore: "Utforsk", contact: "Kontakt", legal: "Juridisk", rights: "Alle rettigheter forbeholdt." },
  pages: {
    coaching: { eyebrow: "Personlig nettcoaching", title: "Et treningssamarbeid, ikke en nedlastet plan.", lead: "Planen bygges fra fysiologien, målene og kalenderen din—og endres når noe av dette endres.", metaTitle: "Personlig nettbasert sykkelcoaching", metaDescription: "Oppdag personlig sykkelcoaching med tilpassede planer, dataanalyse og regelmessig tilbakemelding fra bevegelsesviter Tycho Parmentier.", sections: [
      { kicker: "Forskjellen", title: "Planen er bare den synlige delen.", body: ["God coaching kobler arbeidet du gjør med responsen det skaper. Effekt, puls og belastning betyr noe, men det gjør også søvn, stress, motivasjon og ansvar utenfor sporten.", "Jeg bruker disse signalene til å avgjøre når vi øker, holder, bytter eller fjerner en økt. Det skiller coaching fra en statisk plan."], points: ["Individuell sesong- og målplanlegging", "Økter tilpasset tiden du har", "Jevnlig tilbakemelding og dataanalyse", "Rask justering når livet endres"] },
      { kicker: "Kommunikasjon", title: "Kontekst gjør data nyttig.", body: ["En graf viser hva som skjedde. Tilbakemeldingen din forklarer hvorfor. Korte, ærlige kommentarer etter økten skiller produktiv tretthet fra et problem.", "Avhengig av pakken vurderer vi månedlig, ukentlig eller fortløpende. Du vet alltid hva blokken skal utvikle."] },
      { kicker: "Resultat", title: "Bli en sterkere og mer selvstendig syklist.", body: ["Målet er ikke å gjøre deg avhengig av instrukser. Vi bygger kapasitet og forståelse for pacing, restitusjon og valgene bak prestasjon."] },
    ] },
    method: { eyebrow: "Kunnskap i praksis", title: "Vitenskap er nyttig når den forbedrer neste valg.", lead: "Metoden kombinerer Critical Power, intern og ekstern belastning, progresjon og tydelige tilbakemeldinger.", metaTitle: "Vitenskapsbasert metode for sykkeltrening", metaDescription: "Se hvordan Tycho Coaching bruker Critical Power, treningsbelastning, testing og tilbakemeldinger i personlige programmer.", sections: [
      { kicker: "01 · Profil", title: "Mål det som betyr noe for arbeidet foran deg.", body: ["Testing gir en praktisk profil, ikke ett pyntetall. Critical Power og arbeidskapasitet beskriver hvor lenge du holder hard belastning og hva du kan gjøre over grensen."], points: ["Felttester i reelle forhold", "Effekt- og pulssoner med kontekst", "Repeterbare kontrollpunkter gjennom sesongen"] },
      { kicker: "02 · Belastning", title: "Les økten fra begge sider.", body: ["Ekstern belastning beskriver arbeidet: effekt, varighet og intensitet. Intern belastning beskriver responsen: puls, anstrengelse og tretthet. Begge hindrer falsk sikkerhet.", "Samme watt kan være rutine én uke og kostbart den neste. Treningsvalg bør fange den forskjellen."] },
      { kicker: "03 · Tilpass", title: "Progresjon planlegges; tilpasning observeres.", body: ["Treningsblokker har retning, men er ikke hellige. Vi øker når du absorberer belastningen, beskytter restitusjon når du ikke gjør det og holder veien mot målet realistisk."] },
    ] },
    "for-cyclists": { eyebrow: "Hvem jeg trener", title: "Seriøs om fremgang. Uten å late som sykling er ditt eneste ansvar.", lead: "For ambisiøse amatører, konkurransesyklister i utvikling og utholdenhetsutøvere som trenger en plan for et fullt liv.", metaTitle: "Sykkelcoaching for ambisiøse amatører", metaDescription: "Nettcoaching for ambisiøse landeveis-, gravel-, terreng- og utholdenhetssyklister som kombinerer trening med jobb og familie.", sections: [
      { kicker: "Ambisiøse amatører", title: "Du vil bli bedre med timene du har.", body: ["Kanskje du forbereder din første gran fondo, vil opp en rittkategori eller er ferdig med å gjette. Vi prioriterer øktene som gir mest verdi i uken din."], points: ["Landevei, gravel, MTB og sykkelkross", "Gran fondo og målritt", "Amatørkonkurranser", "Form og langsiktig utvikling"] },
      { kicker: "Virkelige kalendere", title: "Kontinuitet krever ikke en perfekt uke.", body: ["Frister, familie og reiser er normale innspill—ikke feil. En nyttig plan har nok struktur for tilpasning og nok fleksibilitet for virkeligheten."] },
      { kicker: "Samarbeidet", title: "Nysgjerrighet og kommunikasjon betyr mer enn FTP.", body: ["Det beste trenerforholdet er samarbeid. Del ærlig, still spørsmål og tren rimelig jevnt; da har vi et sterkt utgangspunkt."] },
    ] },
    about: { eyebrow: "Møt treneren", title: "Fra muskelbiologi til neste klatring.", lead: "Jeg er Tycho Parmentier: bevegelsesviter, utholdenhetsutøver og trener som oversetter fysiologi til praktisk arbeid på sykkelen.", metaTitle: "Om sykkeltrener Tycho Parmentier", metaDescription: "Møt Tycho Parmentier, bevegelsesviter og sykkeltrener med bakgrunn i treningsfysiologi og forskning på muskeltilpasning.", sections: [
      { kicker: "Bakgrunn", title: "Et vitenskapelig fundament, brukt praktisk.", body: ["I 2024 fullførte jeg bevegelsesvitenskap ved Vrije Universiteit Amsterdam med spesialisering i treningsfysiologi. Nå studerer jeg celle- og molekylærbiologi ved NTNU i Trondheim og forsker på hvordan muskler og mitokondrier tilpasser seg trening.", "Kombinasjonen—fra laboratoriemekanismer til en uoversiktlig treningsuke—former coachingarbeidet. Kunnskap informerer; utøveren avgjør anvendelsen."] },
      { kicker: "På sykkelen", title: "Jeg kjenner dragningen mot et stort mål.", body: ["Sykling ble stadig mer seriøst i studietiden og førte til internasjonale ritt, blant annet i Kamerun og Malaysia. Jeg kjenner gleden ved strukturert forberedelse og utfordringen med å kombinere den med studier, jobb og relasjoner."] },
      { kicker: "I praksis", title: "Metoder skjerpes gjennom samarbeid.", body: ["Ved siden av Tycho Coaching arbeider jeg som frilanstrener hos Cyclinglab.cc, en vitenskapsorientert sykkelplattform. Diskusjoner med andre trenere holder metoden kritisk, aktuell og praktisk."] },
    ] },
    results: { eyebrow: "Utøvererfaringer", title: "Fremgang er personlig. Mønsteret er tydelig.", lead: "Bedre struktur, tydeligere tilbakemeldinger og trening som passer utøverens faktiske liv.", metaTitle: "Resultater og erfaringer med sykkelcoaching", metaDescription: "Les erfaringer fra syklister hos Tycho Coaching, fra ambisiøse amatører til parasyklister og konkurranseutøvere.", sections: [{ kicker: "Hva vi ser etter", title: "Tall betyr noe, men er ikke hele resultatet.", body: ["En høyere effektprofil kan bety mye. Det kan også være å møte frisk til målrittet, holde formen gjennom en travel periode eller endelig stole på planen.", "Resultater er individuelle erfaringer, aldri garantier. Utgangspunkt, kontinuitet og omstendigheter former mulighetene."] }] },
    packages: { eyebrow: "Coachingpakker", title: "Velg hvor tett vi arbeider.", lead: "Alle pakker er personlige. Forskjellen er hvor ofte vi vurderer, kommuniserer og justerer.", metaTitle: "Pakker og priser for nettbasert sykkelcoaching", metaDescription: "Sammenlign Basis, Premium og Pro personlig sykkelcoaching fra €89 per måned med planer, analyse og oppfølging.", sections: [{ title: "Hva skjer etter kartleggingen?", body: ["Jeg vurderer først mål, historikk og tilgjengelighet. Hvis coaching passer, blir vi enige om pakke og startpunkt før betalt arbeid begynner."] }] },
    faq: { eyebrow: "Ofte stilte spørsmål", title: "Nyttige detaljer før du bestemmer deg.", lead: "Hvordan coachingen fungerer, hvilket utstyr du trenger og hva du kan forvente i starten.", metaTitle: "Spørsmål om nettbasert sykkelcoaching", metaDescription: "Svar om effektmålere, plattformer, planendringer, målritt og oppstart med personlig sykkelcoaching.", sections: [] },
    privacy: { eyebrow: "Personvern", title: "Treningshistorien din forblir din.", lead: "Denne erklæringen forklarer hvilke personopplysninger Tycho Coaching bruker, hvorfor og hvor lenge.", metaTitle: "Personvernerklæring", metaDescription: "Personvernerklæring for besøkende og henvendelser til Tycho Coaching.", sections: [
      { title: "Behandlingsansvarlig", body: ["Tycho Coaching, drevet av Tycho Parmentier (KVK 97624195), er ansvarlig for opplysninger sendt via nettstedet. Spørsmål kan sendes til tychocoach@gmail.com."] },
      { title: "Opplysninger ved forespørsel", body: ["Kartleggingen spør om kontaktinformasjon, land, gren, nivå, treningstid, mål, ritt, utstyr, plattform og pakkeinteresse. Dette brukes bare for å vurdere og svare på forespørselen, basert på samtykke.", "Skjemaet spør ikke om alder, kjønn, betalingsdata eller journalopplysninger. Ikke skriv sensitive helseopplysninger i fritekstfeltet."] },
      { title: "Lagring og sletting", body: ["Opplysninger sendes sikkert til et privat Google-ark tilgjengelig for Tycho Coaching. Forespørsler som ikke blir et kundeforhold, lukkes og slettes seks måneder senere. Kundeopplysninger kan måtte lagres lenger av avtale- eller lovhensyn.", "Skjemaet bruker kortvarig duplikatvern basert på en enveisrepresentasjon av e-postadressen. Det brukes ikke til markedsføring."] },
      { title: "Analyse og leverandører", body: ["Vercel drifter nettstedet og gir personvernvennlig trafikk- og ytelsesmåling. Google behandler levering og lagring av kartlegginger. Leverandørene kan behandle tekniske data under egne vilkår."] },
      { title: "Dine rettigheter", body: ["Avhengig av loven kan du be om innsyn, retting, sletting, begrensning eller portabilitet, eller trekke samtykket. Send e-post til tychocoach@gmail.com. Du kan også klage til Datatilsynet."] },
    ] },
    terms: { eyebrow: "Vilkår · utkast til gjennomgang", title: "Tydelige forventninger gir bedre coaching.", lead: "Dette er et implementeringsutkast. Endelig coachingavtale og oppsigelsesregler må godkjennes før publisering.", metaTitle: "Vilkår — utkast", metaDescription: "Utkast til vilkår for Tycho Coaching, til gjennomgang før publisering.", sections: [
      { title: "Informasjon på nettstedet", body: ["Materialet er generell opplæringsinformasjon. Det er ikke medisinsk råd, diagnose eller prestasjonsgaranti. Kontakt kvalifisert helsepersonell ved symptomer, skade eller medisinske spørsmål rundt trening."] },
      { title: "Coachingavtale", body: ["Et betalt samarbeid starter først når begge parter skriftlig er enige om tjeneste, pris, startdato og vilkår. Den endelige avtalen beskriver kommunikasjon, betaling, varighet, oppsigelse og ansvar."] },
      { title: "Utøverens ansvar", body: ["Utøveren er ansvarlig for å vurdere om han eller hun kan trene, følge trafikkregler, bruke sikkert utstyr og dele relevant informasjon. Stopp og søk kvalifisert hjelp ved bekymringsfulle symptomer."] },
      { title: "Opphavsrett", body: ["Nettstedstekst og originalt coachingmateriale tilhører Tycho Coaching hvis ikke annet er oppgitt. Personlige planer er til eget bruk og kan ikke videreselges eller publiseres uten tillatelse."] },
      { title: "Gjennomgang kreves", body: ["Siden er med vilje merket som utkast. Den må erstattes eller godkjennes av Tycho Coaching før versjon 2.0 lanseres i produksjon."] },
    ] },
  },
}

export const dictionaries: Record<Locale, SiteCopy> = { en, nl, no }

export function getCopy(locale: Locale) {
  return dictionaries[locale]
}
