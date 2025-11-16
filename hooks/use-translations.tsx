"use client"

import { useLanguage } from "@/components/language-provider"

const translations = {
  // Navigation
  nav: {
    services: { nl: "Diensten", en: "Services", no: "Tjenester" },
    methodology: { nl: "Methodiek", en: "Methodology", no: "Metodikk" },
    about: { nl: "Over Mij", en: "About Me", no: "Om Meg" },
    experiences: { nl: "Ervaringen", en: "Experiences", no: "Erfaringer" },
    contact: { nl: "Contact", en: "Contact", no: "Kontakt" },
    cta: { nl: "Aan de slag", en: "Get Started", no: "Kom i Gang" },
  },

  // Hero Section
  hero: {
    title: {
      nl: "Op zoek naar verbetering op de fiets?",
      en: "Looking to improve your cycling?",
      no: "Ønsker du å forbedre sykkelprestasjonene dine?",
    },
    subtitle: {
      nl: "Professionele ondersteuning voor elk niveau",
      en: "Professional support for every level",
      no: "Profesjonell støtte for alle nivåer",
    },
    startButton: { nl: "Begin Nu", en: "Start Now", no: "Start Nå" },
    moreInfo: { nl: "Meer Informatie", en: "More Information", no: "Mer Informasjon" },
  },

  // Services Section
  services: {
    title: { nl: "Onze Diensten", en: "Our Services", no: "Våre Tjenester" },
    subtitle: {
      nl: "We bieden uitgebreide coachingsdiensten op maat om je te helpen je fietsdoelen te bereiken, ongeacht je niveau.",
      en: "We offer comprehensive coaching services tailored to help you achieve your cycling goals, regardless of your level.",
      no: "Vi tilbyr omfattende skreddersydde treningstjenester for å hjelpe deg med å nå dine sykkelmål, uavhengig av nivå.",
    },

    // Individual services
    individual: {
      title: {
        nl: "Individuele Trainingsschema's",
        en: "Individual Training Plans",
        no: "Individuelle Treningsplaner",
      },
      description: {
        nl: "Op maat gemaakte trainingsplannen op basis van jouw niveau, beschikbare tijd en doelen. We houden rekening met jouw fysieke capaciteiten en herstelbehoefte.",
        en: "Custom training plans based on your level, available time, and goals. We take into account your physical capabilities and recovery needs.",
        no: "Skreddersydde treningsplaner basert på ditt nivå, tilgjengelig tid og mål. Vi tar hensyn til dine fysiske kapasiteter og restitusjonsbehovet.",
      },
    },
    analysis: {
      title: { nl: "Analyseren van Trainingsdata", en: "Training Data Analysis", no: "Treningsdataanalyse" },
      description: {
        nl: "Met behulp van TrainingPeaks en Intervals.icu analyseren we jouw vermogensdata, hartslag en andere prestatie-indicatoren voor optimale progressie.",
        en: "Using TrainingPeaks and Intervals.icu, we analyze your power data, heart rate, and other performance indicators for optimal progression.",
        no: "Ved hjelp av TrainingPeaks og Intervals.icu analyserer vi dine effektdata, puls og andre prestasjonsindikatorer for optimal progresjon.",
      },
    },
    guidance: {
      title: {
        nl: "Persoonlijke Begeleiding & Feedback",
        en: "Personal Guidance & Feedback",
        no: "Personlig Veiledning & Tilbakemelding",
      },
      description: {
        nl: "Regelmatige feedback en aanpassingen waar nodig. Coaching is meer dan een schema volgen, we werken samen aan jouw ontwikkeling.",
        en: "Regular feedback and adjustments where needed. Coaching is more than following a plan; we work together on your development.",
        no: "Regelmessig tilbakemelding og justeringer når det trengs. Coaching er mer enn å følge en plan; vi jobber sammen om din utvikling.",
      },
    },
    testing: {
      title: {
        nl: "Testen en Progressiemetingen",
        en: "Testing and Progress Measurements",
        no: "Testing og Fremgangsmålinger",
      },
      description: {
        nl: "Regelmatige prestatietesten zoals power profiling-testen om je voortgang te monitoren en je trainingszones scherp te stellen.",
        en: "Regular performance tests such as power profiling tests to monitor your progress and fine-tune your training zones.",
        no: "Regelmessige prestasjonsstester som effektprofileringstester for å overvåke fremgangen din og finjustere treningssonene.",
      },
    },
    recovery: {
      title: {
        nl: "Herstel, Voeding en Slaap",
        en: "Recovery, Nutrition and Sleep",
        no: "Restitusjon, Ernæring og Søvn",
      },
      description: {
        nl: "Richtlijnen en strategieën om je herstel te verbeteren, slim te eten en kwalitatief te slapen voor maximale prestaties.",
        en: "Guidelines and strategies to improve your recovery, eat smart, and sleep well for maximum performance.",
        no: "Retningslinjer og strategier for å forbedre restitusjonen din, spise smart og sove godt for maksimal prestasjon.",
      },
    },
  },

  // Meet Coach Section
  coach: {
    title: { nl: "Maak kennis met je Coach", en: "Meet your Coach", no: "Møt Din Trener" },
    bio1: {
      nl: "Mijn naam is Tycho Parmentier en ik ben een gepassioneerd wielercoach met een sterke wetenschappelijke achtergrond. In 2024 studeerde ik af als bewegingswetenschapper aan de Vrije Universiteit Amsterdam, met een specialisatie in inspanningsfysiologie. Tijdens mijn studie deed ik onderzoek naar efficiënte trainingsstrategieën voor amateurwielrenners.",
      en: "My name is Tycho Parmentier and I am a passionate cycling coach with a strong scientific background. In 2024, I graduated as a movement scientist from VU Amsterdam, specializing in exercise Physiology. During my studies, I researched efficient training strategies for amateur cyclists.",
      no: "Mitt navn er Tycho Parmentier og jeg er en lidenskapelig sykkeltrener med en sterk vitenskapelig bakgrunn. I 2024 tok jeg eksamen som bevegelsesvitenskap fra VU Amsterdam, med spesialisering i treningsfysiologi. Under studiene forsket jeg på effektive treningsstrategier for amatørsyklister.",
    },
    bio2: {
      nl: "Momenteel ben ik bezig met een master in Cell- en Moleculaire Biologie in Trondheim, Noorwegen. Hiermee vergroot ik mijn inzicht in de fundamentele processen die prestaties en herstel beïnvloeden – van de werking van spieren op celniveau tot de impact van training op metabolisme.",
      en: "Currently, I am pursuing a master's degree in Cell and Molecular Biology in Trondheim, Norway. This enhances my understanding of the fundamental processes that influence performance and recovery – from how muscles work at the cellular level to the impact of training on metabolism.",
      no: "For øyeblikket tar jeg en mastergrad i celle- og molekylærbiologi i Trondheim, Norge. Dette øker min forståelse av de grunnleggende prosessene som påvirker prestasjon og restitusjon – fra hvordan muskler fungerer på cellenivå til treningens påvirkning på metabolismen.",
    },
    bio3: {
      nl: "Naast mijn academische achtergrond ben ik zelf een fanatiek amateurwielrenner op het hoogste niveau in Nederland. Ik heb deelgenomen aan een UCI-wedstrijd in Kameroen en werk aan het bereiken van het Noorse amateur/semi-prof niveau. Met mijn ervaring als atleet én wetenschapper help ik jou om slimmer, efficiënter en met maximale impact te trainen.",
      en: "Besides my academic background, I am an avid amateur cyclist at the highest level in the Netherlands. I have participated in a UCI race in Cameroon and am working towards reaching the Norwegian amateur/semi-pro level. With my experience as both an athlete and scientist, I help you train smarter, more efficiently, and with maximum impact.",
      no: "Ved siden av min akademiske bakgrunn er jeg selv en ivrig amatørsyklist på høyeste nivå i Nederland. Jeg har deltatt i et UCI-ritt i Kamerun og jobber mot å nå det norske amatør/semi-prof nivået. Med min erfaring som både utøver og vitenskapsmann hjelper jeg deg med å trene smartere, mer effektivt og med maksimal påvirkning.",
    },
    bio4: {
      nl: "Naast mijn eigen coachingplatform werk ik ook als freelance coach voor Cyclinglab.cc, een wetenschappelijk gebaseerd coaching collectief gericht op prestaties en data-gedreven training voor amateurs en elite wielrenners. Dit stelt mij in staat om verbonden te blijven met een coaching netwerk en mijn methodologieën te blijven verfijnen.",
      en: "In addition to my own coaching platform, I also work as a freelance coach for Cyclinglab.cc, a science-based coaching collective focused on performance and data-driven training for amateurs and elite cyclists. This allows me to stay connected with a coaching network and continue refining my methodologies.",
      no: "I tillegg til min egen treningsplattform jobber jeg også som frilanstrener for Cyclinglab.cc, et vitenskapsbasert trenerkollektiv fokusert på prestasjon og datadrevet trening for amatører og elitesyklister. Dette lar meg holde kontakten med et trenernettverk og fortsette å forfine metodikkene mine.",
    },
    contactButton: { nl: "Neem Contact Op", en: "Contact Me", no: "Kontakt Meg" },
    academic: { nl: "Academisch", en: "Academic", no: "Akademisk" },
    academicSubtitle: { nl: "Onderbouwde Coaching", en: "Evidence-Based Coaching", no: "Evidensbasert Trening" },
  },

  // Methodology Section
  methodology: {
    title: {
      nl: "Wetenschappelijke Trainingsmethodiek",
      en: "Scientific Training Methodology",
      no: "Vitenskapelig Treningsmetodikk",
    },
    subtitle: {
      nl: "Onze trainingsaanpak is gebaseerd op de nieuwste wetenschappelijke inzichten en wordt ondersteund door academisch onderzoek in inspanningsfysiologie.",
      en: "Our training approach is based on the latest scientific insights and is supported by academic research in exercise Physiology.",
      no: "Vår treningsmetode er basert på de nyeste vitenskapelige innsiktene og støttes av akademisk forskning innen treningsfysiologi.",
    },

    // Methodology points
    critical: {
      title: { nl: "Critical Power Model", en: "Critical Power Model", no: "Critical Power Modell" },
      description: {
        nl: "Ons trainingsplan maakt gebruik van het Critical Power model, een wetenschappelijk bewezen methode om je inspanningszones nauwkeurig te bepalen en je aerobe capaciteit te verbeteren (Jones et al. 2010).",
        en: "Our training plan uses the Critical Power model, a scientifically proven method to accurately determine your effort zones and improve your aerobic capacity (Jones et al. 2010).",
        no: "Vår treningsplan bruker Critical Power-modellen, en vitenskapelig bevist metode for å nøyaktig bestemme anstrengelsessonene dine og forbedre den aerobe kapasiteten (Jones et al. 2010).",
      },
    },
    load: {
      title: {
        nl: "Trainingsbelasting Monitoren",
        en: "Training Load Monitoring",
        no: "Treningsbelastningsovervåking",
      },
      description: {
        nl: "We combineren interne en externe trainingsbelasting metingen volgens de principes van Impellizzeri et al. (2019) om je progressie optimaal te monitoren en overbelasting te voorkomen.",
        en: "We combine internal and external training load measurements according to the principles of Impellizzeri et al. (2019) to optimally monitor your progress and prevent overtraining.",
        no: "Vi kombinerer interne og eksterne treningsbelastningsmålinger i henhold til prinsippene til Impellizzeri et al. (2019) for å optimalt overvåke fremgangen din og forhindre overtrening.",
      },
    },
    intensity: {
      title: {
        nl: "Optimale Intensiteitsverdeling",
        en: "Optimal Intensity Distribution",
        no: "Optimal Intensitetsfordeling",
      },
      description: {
        nl: "Gebaseerd op het nieuwste onderzoek van Rosenblat et al. (2025) passen we de optimale trainingsintensiteitsverdeling toe om je maximale zuurstofopname en tijdritprestaties te verbeteren.",
        en: "Based on the latest research by Rosenblat et al. (2025), we apply the optimal training intensity distribution to improve your maximum oxygen uptake and time trial performance.",
        no: "Basert på den nyeste forskningen av Rosenblat et al. (2025) bruker vi optimal treningsintensitetsfordeling for å forbedre ditt maksimale oksygenopptak og tempoprestasjoner.",
      },
    },

    // Personal approach
    personal: {
      title: { nl: "Persoonlijke Aanpak", en: "Personal Approach", no: "Personlig Tilnærming" },
      description: {
        nl: "Als bewegingswetenschapper met specialisatie in inspanningsfysiologie pas ik deze wetenschappelijke principes aan jouw unieke fysiologie en doelstellingen aan. Elk plan is volledig gepersonaliseerd, gebaseerd op:",
        en: "As a movement scientist specializing in exercise Physiology, I adapt these scientific principles to your unique physiology and goals. Each plan is fully personalized, based on:",
        no: "Som bevegelsesvitenskap med spesialisering i treningsfysiologi tilpasser jeg disse vitenskapelige prinsippene til din unike fysiologi og mål. Hver plan er fullstendig personalisert, basert på:",
      },
      point1: {
        nl: "Uitgebreide fitness assessment en bepaling van je trainingszones",
        en: "Comprehensive fitness assessment and determination of your training zones",
        no: "Omfattende kondisjonsvurdering og bestemmelse av treningssonene dine",
      },
      point2: {
        nl: "Periodisering afgestemd op jouw doelevenementen",
        en: "Periodization tailored to your target events",
        no: "Periodisering tilpasset dine målarrangementer",
      },
      point3: {
        nl: "Wekelijkse aanpassingen gebaseerd op trainingsdata en feedback",
        en: "Weekly adjustments based on training data and feedback",
        no: "Ukentlige justeringer basert på treningsdata og tilbakemelding",
      },
      point4: {
        nl: "Integratie van herstel- en voedingsstrategieën",
        en: "Integration of recovery and nutrition strategies",
        no: "Integrering av restitusjons- og ernæringsstrategier",
      },
      point5: {
        nl: "Technische en mentale coaching voor optimale prestaties",
        en: "Technical and mental coaching for optimal performance",
        no: "Teknisk og mental coaching for optimal prestasjon",
      },
    },
  },

  // Testimonials Section
  testimonials: {
    title: { nl: "Succesverhalen", en: "Success Stories", no: "Suksesshistorier" },
    subtitle: {
      nl: "Ontdek hoe onze persoonlijke aanpak echte resultaten oplevert voor wielrenners van alle niveaus.",
      en: "Discover how our personal approach delivers real results for cyclists of all levels.",
      no: "Oppdag hvordan vår personlige tilnærming gir reelle resultater for syklister på alle nivåer.",
    },
    previous: { nl: "Vorige", en: "Previous", no: "Forrige" },
    next: { nl: "Volgende", en: "Next", no: "Neste" },

    // Tijmen's testimonial
    jelle: {
      quote: {
        nl: "Ik wordt sinds kort getraind en begeleid door Tycho, hij maakt mijn trainingsschema en houdt nauwkeurig contact met hoe het gaat en wat ik er van vind. Persoonlijk ben ik in korte tijd flink gegroeid en heb ik mijn prestaties op de fiets kunnen verbeteren.",
        en: "I have recently been trained and coached by Tycho, he creates my training schedule and keeps close contact with how it's going and what I think of it. Personally, I have grown significantly in a short time and have been able to improve my cycling performance.",
        no: "Jeg har nylig blitt trent og coachet av Tycho, han lager treningsprogrammet mitt og holder tett kontakt med hvordan det går og hva jeg synes om det. Personlig har jeg vokst betydelig på kort tid og har klart å forbedre sykkelprestasjonen min.",
      },
      name: { nl: "Tijmen", en: "Tijmen", no: "Tijmen" },
      title: { nl: "Para-wielrenner", en: "Para-cyclist", no: "Para-syklist" },
      stat1: { nl: "Verbetering in vermogen", en: "Power improvement", no: "Effektforbedring" },
      stat2: { nl: "Maanden coaching", en: "Months of coaching", no: "Måneder med coaching" },
      stat3: { nl: "Tevredenheid", en: "Satisfaction", no: "Tilfredshet" },
    },

    // Keimpe testimonial
    cyclist: {
      quote: {
        nl: "Ik merkte dat ik moeite had om mij aan een vast schema te houden omdat ik niet wist of het trainingsschema wat ik zelf gemaakt had effect zou hebben. Bij Tycho merkte ik meteen dat hij er verstand van zaken had, waardoor ik ook in het schema begon te geloven en door bleef trainen! Met name richting mijn doelen en tijdens trainingskampen heeft dit mij geholpen! Dankzij Tycho heb ik nu de vorm van mijn leven te pakken :)",
        en: "I noticed I had trouble sticking to a fixed schedule because I didn't know if the training plan I made myself would be effective. With Tycho, I immediately noticed he knew what he was doing, which made me believe in the plan and keep training! Especially towards my goals and during training camps, this helped me! Thanks to Tycho, I now have the best form of my life :)",
        no: "Å jobbe med en trener ga meg strukturen i treningen som jeg trengte. Jeg har forbedret prestasjonen min betydelig og hver treningsøkt passer perfekt til målene mine og tilgjengeligheten. Jeg opplevde den personlige tilnærmingen som veldig hyggelig!",
      },
      name: { nl: "Keimpe", en: "Keimpe", no: "Keimpe" },
      title: { nl: "Amateur Racer", en: "Amateur Racer", no: "Amatør Rytter" },
      stat1: {
        number: { nl: "Beste", en: "Best", no: "Beste" },
        label: { nl: "Vorm ooit", en: "Form Ever", no: "Form Noensinne" },
      },
      stat2: {
        number: { nl: "100%", en: "100%", no: "100%" },
        label: { nl: "Vertrouwen", en: "Confidence", no: "Tillit" },
      },
      stat3: {
        number: { nl: "6+", en: "6+", no: "6+" },
        label: { nl: "Maanden samen", en: "Months Together", no: "Måneder Sammen" },
      },
    },

    // Max testimonial
    max: {
      quote: {
        nl: "Het samenwerken met een coach gaf mij de structuur in het trainen die ik nodig had. Ik heb mijn prestaties flink verbeterd en iedere training sluit perfect aan bij mijn doelen en beschikbaarheid. De persoonlijke aanpak heb ik als erg fijn ervaren!",
        en: "Working with a coach gave me the structure in training that I needed. I have significantly improved my performance and every training session perfectly matches my goals and availability. I experienced the personal approach as very pleasant!",
        no: "Å jobbe med en trener ga meg strukturen i treningen som jeg trengte. Jeg har forbedret prestasjonen min betydelig og hver treningsøkt passer perfekt til målene mine og tilgjengeligheten. Jeg opplevde den personlige tilnærmingen som veldig hyggelig!",
      },
      name: { nl: "Max", en: "Max", no: "Max" },
      title: { nl: "Amateur wielrenner", en: "Amateur cyclist", no: "Amatør syklist" },
      stat1: {
        number: { nl: "Flink", en: "Significant", no: "Betydelig" },
        label: { nl: "Verbetering", en: "Improvement", no: "Forbedring" },
      },
      stat2: {
        number: { nl: "Perfect", en: "Perfect", no: "Perfekt" },
        label: { nl: "Aansluiting", en: "Match", no: "Match" },
      },
      stat3: {
        number: { nl: "Erg fijn", en: "Very Pleasant", no: "Veldig Hyggelig" },
        label: { nl: "Ervaring", en: "Experience", no: "Opplevelse" },
      },
    },
  },

  // Packages Section
  packages: {
    title: { nl: "Coaching Pakketten", en: "Coaching Packages", no: "Treningspakker" },
    subtitle: {
      nl: "Kies het coachingspakket dat het beste bij jouw behoeften en doelen past. Alle plannen omvatten persoonlijke aandacht en ondersteuning.",
      en: "Choose the coaching package that best suits your needs and goals. All plans include personal attention and support.",
      no: "Velg treningspakken som passer best til dine behov og mål. Alle planer inkluderer personlig oppmerksomhet og støtte.",
    },
    popular: { nl: "POPULAIR", en: "POPULAR", no: "POPULÆR" },
    month: { nl: "/maand", en: "/month", no: "/måned" },
    selectPlan: { nl: "Selecteer Plan", en: "Select Plan", no: "Velg Plan" },

    // Basic package
    basic: {
      title: { nl: "Basis", en: "Basic", no: "Grunnleggende" },
      price: "€50",
      description: {
        nl: "Voor renners die graag met een gestructureerd plan trainen, maar zelfstandig aan de slag willen.",
        en: "For riders who want to train with a structured plan but want to work independently.",
        no: "For ryttere som ønsker å trene med en strukturert plan, men vil jobbe selvstendig.",
      },
      feature1: {
        nl: "4-wekelijks trainingsschema op maat",
        en: "4-weekly customized training schedule",
        no: "4-ukers skreddersydd treningsprogram",
      },
      feature2: {
        nl: "Gebruik van TrainingPeaks Basic",
        en: "Use of TrainingPeaks Basic",
        no: "Bruk av TrainingPeaks Basic",
      },
      feature3: {
        nl: "Maandelijks contactmoment (30 min)",
        en: "Monthly contact moment (30 min)",
        no: "Månedlig kontaktmøte (30 min)",
      },
      feature4: {
        nl: "Wekelijks contact met coach",
        en: "Weekly contact with coach",
        no: "Ukentlig kontakt med trener",
      },
      feature5: {
        nl: "Diepgaande data-analyse",
        en: "In-depth data analysis",
        no: "Dybdegående dataanalyse",
      },
    },

    // Premium package
    premium: {
      title: { nl: "Premium", en: "Premium", no: "Premium" },
      price: "€90",
      description: {
        nl: "Voor renners die serieus werk willen maken van hun training met regelmatige feedback en diepgaandere analyse.",
        en: "For riders who want to seriously work on their training with regular feedback and more in-depth analysis.",
        no: "For ryttere som ønsker å jobbe seriøst med treningen sin med regelmessig tilbakemelding og mer dybdegående analyse.",
      },
      feature1: {
        nl: "Wekelijks geüpdatet trainingsschema",
        en: "Weekly updated training schedule",
        no: "Ukentlig oppdatert treningsprogram",
      },
      feature2: {
        nl: "TrainingPeaks Premium inbegrepen",
        en: "TrainingPeaks Premium included",
        no: "TrainingPeaks Premium inkludert",
      },
      feature3: {
        nl: "Jaarplan en periodisering",
        en: "Annual plan and periodization",
        no: "Årsplan og periodisering",
      },
      feature4: {
        nl: "2x per week contact via whatsapp, mail en bellen",
        en: "2x weekly contact via WhatsApp, email and calls",
        no: "2x ukentlig kontakt via WhatsApp, e-post og telefon",
      },
      feature5: {
        nl: "Diepgaande analyse van vermogensdata",
        en: "In-depth analysis of power data",
        no: "Dybdegående analyse av effektdata",
      },
    },

    // Pro package
    pro: {
      title: { nl: "Pro", en: "Pro", no: "Pro" },
      price: "€150",
      description: {
        nl: "Voor renners die het beste uit zichzelf willen halen en met een persoonlijke coach op hoog niveau willen werken.",
        en: "For riders who want to get the best out of themselves and work with a personal coach at a high level.",
        no: "For ryttere som ønsker å få det beste ut av seg selv og jobbe med en personlig trener på høyt nivå.",
      },
      feature1: {
        nl: "Volledig op maat gemaakt trainingsschema",
        en: "Fully customized training schedule",
        no: "Fullstendig skreddersydd treningsprogram",
      },
      feature2: {
        nl: "TrainingPeaks Premium inbegrepen",
        en: "TrainingPeaks Premium included",
        no: "TrainingPeaks Premium inkludert",
      },
      feature3: {
        nl: "Intensief contact via whatsapp, mail en bellen",
        en: "Intensive contact via WhatsApp, email and calls",
        no: "Intensiv kontakt via WhatsApp, e-post og telefon",
      },
      feature4: {
        nl: "Diepgaande analyse van elke training",
        en: "In-depth analysis of each training",
        no: "Dybdegående analyse av hver treningsøkt",
      },
      feature5: {
        nl: "Begeleiding op gebied van herstel, voeding en slaap",
        en: "Guidance on recovery, nutrition and sleep",
        no: "Veiledning innen restitusjon, ernæring og søvn",
      },
    },

    customNeed: {
      nl: "Heb je iets specifieker nodig? We bieden ook aangepaste coaching oplossingen.",
      en: "Need something more specific? We also offer customized coaching solutions.",
      no: "Trenger du noe mer spesifikt? Vi tilbyr også tilpassede treningsløsninger.",
    },
    customButton: {
      nl: "Contact voor Aangepast Plan",
      en: "Contact for Custom Plan",
      no: "Kontakt for Tilpasset Plan",
    },
  },

  // Contact Form
  contact: {
    title: { nl: "Neem Contact Op", en: "Get in Touch", no: "Ta Kontakt" },
    subtitle: {
      nl: "Klaar om je fietsprestaties naar een hoger niveau te tillen? Vul het formulier in en we nemen binnen 24 uur contact met je op.",
      en: "Ready to take your cycling performance to the next level? Fill out the form and we'll contact you within 24 hours.",
      no: "Klar til å ta sykkelprestasjonen din til neste nivå? Fyll ut skjemaet så tar vi kontakt innen 24 timer.",
    },
    name: { nl: "Naam", en: "Name", no: "Navn" },
    email: { nl: "E-mailadres", en: "Email Address", no: "E-postadresse" },
    phone: { nl: "Telefoonnummer", en: "Phone Number", no: "Telefonnummer" },
    gender: { nl: "Geslacht", en: "Gender", no: "Kjønn" },
    genderPlaceholder: { nl: "Selecteer geslacht", en: "Select gender", no: "Velg kjønn" },
    male: { nl: "Man", en: "Male", no: "Mann" },
    female: { nl: "Vrouw", en: "Female", no: "Kvinne" },
    other: { nl: "Anders", en: "Other", no: "Annet" },
    age: { nl: "Leeftijd", en: "Age", no: "Alder" },
    package: { nl: "Gewenst pakket", en: "Desired Package", no: "Ønsket Pakke" },
    packagePlaceholder: { nl: "Selecteer een pakket", en: "Select a package", no: "Velg en pakke" },
    basicPackage: { nl: "Basis - €89/maand", en: "Basic - €89/month", no: "Grunnleggende - €89/måned" },
    premiumPackage: { nl: "Premium - €129/maand", en: "Premium - €129/month", no: "Premium - €129/måned" },
    proPackage: { nl: "Pro - €209/maand", en: "Pro - €209/month", no: "Pro - €209/måned" },
    customPackage: { nl: "Aangepast pakket", en: "Custom package", no: "Tilpasset pakke" },
    message: { nl: "Bericht (optioneel)", en: "Message (optional)", no: "Melding (valgfritt)" },
    messagePlaceholder: {
      nl: "Vertel ons over je huidige trainingsniveau, doelen, of specifieke vragen...",
      en: "Tell us about your current training level, goals, or specific questions...",
      no: "Fortell oss om ditt nåværende treningsnivå, mål eller spesifikke spørsmål...",
    },
    submit: { nl: "Versturen", en: "Submit", no: "Send" },
    submitting: { nl: "Versturen...", en: "Submitting...", no: "Sender..." },
    success: {
      title: { nl: "Bericht verzonden!", en: "Message sent!", no: "Melding sendt!" },
      description: {
        nl: "We nemen binnen 24 uur contact met je op.",
        en: "We'll contact you within 24 hours.",
        no: "Vi tar kontakt innen 24 timer.",
      },
    },
    error: {
      title: { nl: "Er ging iets mis", en: "Something went wrong", no: "Noe gikk galt" },
      description: {
        nl: "Probeer het opnieuw of stuur een e-mail naar tychocoach@gmail.com",
        en: "Please try again or send an email to tychocoach@gmail.com",
        no: "Vennligst prøv igjen eller send en e-post til tychocoach@gmail.com",
      },
    },
  },

  // Footer
  footer: {
    rights: {
      nl: "© 2025 Tycho Coaching. Alle rechten voorbehouden.",
      en: "© 2025 Tycho Coaching. All rights reserved.",
      no: "© 2025 Tycho Coaching. Alle rettigheter forbeholdt.",
    },
    privacy: { nl: "Privacybeleid", en: "Privacy Policy", no: "Personvernregler" },
    terms: { nl: "Algemene Voorwaarden", en: "Terms of Service", no: "Vilkår for Bruk" },
  },
}

export function useTranslations() {
  const { language, isLoaded } = useLanguage()

  const t = (key: string) => {
    // Return a default value during SSR or before hydration
    if (!isLoaded) {
      return key
    }

    const keys = key.split(".")
    let value: any = translations

    for (const k of keys) {
      if (value[k] === undefined) {
        console.warn(`Translation key not found: ${key}`)
        return key
      }
      value = value[k]
    }

    if (value[language] === undefined) {
      console.warn(`Translation for language ${language} not found for key: ${key}`)
      return key
    }

    return value[language]
  }

  return { t, language, isLoaded }
}
