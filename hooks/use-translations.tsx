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
        nl: "Met behulp van Intervals.ICU analyseren we jouw vermogensdata, hartslag en andere prestatie-indicatoren voor optimale progressie.",
        en: "Using Intervals.ICU, we analyze your power data, heart rate, and other performance indicators for optimal progression.",
        no: "Ved hjelp av Intervals.ICU analyserer vi dine effektdata, puls og andre prestasjonsindikatorer for optimal progresjon.",
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
      nl: "Ik help wielrenners van eerste toertocht tot UCI-koers – van jonge talenten en ambitieuze granfondo-rijders tot iedereen die fitter en gezonder wil worden. Niet meer “maar wat aanrommelen”, maar een persoonlijk trainingsplan op basis van wetenschappelijke kennis, datagedreven analyse en persoonlijke feedback.",
      en: "I help cyclists from their first tour to UCI races – from young talents and ambitious gran fondo riders to anyone who wants to become fitter and healthier. No more 'just messing around', but a personal training plan based on scientific knowledge, data-driven analysis, and personal feedback.",
      no: "Jeg hjelper syklister fra deres første turritt til UCI-ritt – fra unge talenter og ambisiøse granfondo-ryttere til alle som ønsker å bli sprekere og sunnere. Ikke mer 'bare rot', men en personlig treningsplan basert på vitenskapelig kunnskap, datadrevet analyse og personlig tilbakemelding.",
    },
    bio2: {
      nl: "In 2024 studeerde ik af als bewegingswetenschapper aan de Vrije Universiteit Amsterdam, met een specialisatie in inspanningsfysiologie. Direct na mijn afstuderen ben ik als trainer aan de slag gegaan om wielrenners te begeleiden. Momenteel volg ik een master Cell- en Moleculaire Biologie aan de NTNU in Trondheim, waar ik onderzoek doe naar hoe spieren en mitochondriën zich aanpassen aan training. Die combinatie – van lab tot praktijk – vertaal ik naar heldere trainingsschema’s, herstelstrategieën en lange-termijnplanning.",
      en: "In 2024, I graduated as a movement scientist from the Vrije Universiteit Amsterdam, specializing in exercise Physiology. Immediately after graduating, I started working as a trainer to guide cyclists. Currently, I am pursuing a master's in Cell and Molecular Biology at NTNU in Trondheim, where I research how muscles and mitochondria adapt to training. I translate that combination – from lab to practice – into clear training schedules, recovery strategies, and long-term planning.",
      no: "I 2024 ble jeg uteksaminert som bevegelsesviter fra Vrije Universiteit Amsterdam, med spesialisering i treningsfysiologi. Rett etter utdanningen begynte jeg å jobbe som trener for å veilede syklister. For tiden tar jeg en mastergrad i celle- og molekylærbiologi ved NTNU i Trondheim, hvor jeg forsker på hvordan muskler og mitokondrier tilpasser seg trening. Den kombinasjonen – fra lab til praksis – oversetter jeg til klare treningsplaner, restitusjonsstrategier og langsiktig planlegging.",
    },
    bio3: {
      nl: "Aan het begin van mijn studententijd ben ik gaan wielrennen, na tal van andere duursporten. Elk jaar werd het serieuzer en ging het niveau omhoog, wat de afgelopen jaren onder andere heeft geleid tot internationale racen in Kameroen en Maleisië. Ik weet dus hoe het is om grote doelen te hebben, gestructureerd te trainen, het avontuur op te zoeken en dat allemaal te combineren met studie, werk en privé.",
      en: "At the beginning of my student days, I started cycling, after numerous other endurance sports. Every year it became more serious and the level went up, which in recent years has led to international racing in Cameroon and Malaysia, among other places. So I know what it's like to have big goals, train structurally, seek adventure, and combine all that with study, work, and private life.",
      no: "I begynnelsen av studietiden begynte jeg å sykle, etter mange andre utholdenhetsidretter. Hvert år ble det mer seriøst og nivået økte, noe som de siste årene blant annet har ført til internasjonale ritt i Kamerun og Malaysia. Så jeg vet hvordan det er å ha store mål, trene strukturert, søke eventyr og kombinere alt dette med studier, jobb og privatliv.",
    },
    bio4: {
      nl: "Naast mijn eigen coachingplatform TychoCoaching werk ik als freelance coach bij Cyclinglab.cc, een wetenschappelijk georiënteerd wielerplatform. Daar spar ik met andere trainers en blijf ik mijn methodes aanscherpen – zodat jij profiteert van zowel de nieuwste inzichten als praktische ervaring op de fiets.",
      en: "In addition to my own coaching platform TychoCoaching, I work as a freelance coach at Cyclinglab.cc, a scientifically oriented cycling platform. There I spar with other trainers and continue to sharpen my methods – so that you benefit from both the latest insights and practical experience on the bike.",
      no: "I tillegg til min egen coachingplattform TychoCoaching, jobber jeg som frilanscoach hos Cyclinglab.cc, en vitenskapelig orientert sykkelplattform. Der sparrer jeg med andre trenere og fortsetter å spisse metodene mine – slik at du drar nytte av både den nyeste innsikten og praktisk erfaring på sykkelen.",
    },
    contactButton: { nl: "Neem Contact Op", en: "Contact Me", no: "Kontakt Meg" },
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
        nl: "Trainingsschema afgestemd op jouw werk, studie, gezin en doelen",
        en: "Training plan tailored to your work, study, family, and goals",
        no: "Treningsplan tilpasset jobb, studier, familie og mål",
      },
      point2: {
        nl: "Regelmatige feedbackmomenten met ruimte voor vragen, twijfels en ideeën",
        en: "Regular feedback moments with room for questions, doubts, and ideas",
        no: "Regelmessige tilbakemeldinger med rom for spørsmål, tvil og ideer",
      },
      point3: {
        nl: "Snel bijsturen bij ziekte, drukte of veranderende doelen",
        en: "Quick adjustments for illness, busy schedules, or changing goals",
        no: "Raske justeringer ved sykdom, travle perioder eller endrede mål",
      },
      point4: {
        nl: "Coaching die verder gaat dan alleen watts: ook mentale voorbereiding, wedstrijdtactiek en herstel",
        en: "Coaching that goes beyond just watts: also mental preparation, race tactics, and recovery",
        no: "Coaching som går utover bare watt: også mental forberedelse, ritt-taktikk og restitusjon",
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
        nl: "Gebruik van Intervals.ICU",
        en: "Use of Intervals.ICU",
        no: "Bruk av Intervals.ICU",
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
      price: "€129",
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
        nl: "Intervals.ICU Premium inbegrepen",
        en: "Intervals.ICU Premium included",
        no: "Intervals.ICU Premium inkludert",
      },
      feature3: {
        nl: "Gerichte voorbereiding op jouw belangrijkste wedstrijden en events",
        en: "Targeted preparation for your most important races and events",
        no: "Målrettet forberedelse til dine viktigste ritt og arrangementer",
      },
      feature4: {
        nl: "2x per week contact via whatsapp, mail en bellen",
        en: "2x weekly contact via WhatsApp, email and calls",
        no: "2x ukentlig kontakt via WhatsApp, e-post og telefon",
      },
      feature5: {
        nl: "Diepgaande analyse van vermogensdata (WKO5)",
        en: "In-depth analysis of power data (WKO5)",
        no: "Dybdegående analyse av effektdata (WKO5)",
      },
      feature6: {
        nl: "Begeleiding op herstel, voeding en slaap",
        en: "Guidance on recovery, nutrition, and sleep",
        no: "Veiledning om restitusjon, ernæring og søvn",
      },
    },

    // Pro package
    pro: {
      title: { nl: "Pro", en: "Pro", no: "Pro" },
      price: "€209",
      description: {
        nl: "Voor wedstrijdrenners die het beste uit zichzelf willen halen en met een persoonlijke coach op hoog niveau willen werken.",
        en: "For competitive cyclists who want to get the best out of themselves and work with a personal coach at a high level.",
        no: "For konkurranseryttere som ønsker å få det beste ut av seg selv og jobbe med en personlig trener på høyt nivå.",
      },
      feature1: {
        nl: "Volledig op maat gemaakt trainingsschema",
        en: "Fully customized training schedule",
        no: "Fullstendig skreddersydd treningsprogram",
      },
      feature2: {
        nl: "Intervals.ICU Premium inbegrepen",
        en: "Intervals.ICU Premium included",
        no: "Intervals.ICU Premium inkludert",
      },
      feature3: {
        nl: "Gerichte voorbereiding op wedstrijden, trainingskampen, hitte adaptatie en hoogtestages",
        en: "Targeted preparation for races, training camps, heat adaptation, and altitude training",
        no: "Målrettet forberedelse til ritt, treningsleirer, varmetilpasning og høydetrening",
      },
      feature4: {
        nl: "Intensief contact via whatsapp, mail en bellen",
        en: "Intensive contact via WhatsApp, email and calls",
        no: "Intensiv kontakt via WhatsApp, e-post og telefon",
      },
      feature5: {
        nl: "Diepgaande analyse van elke training",
        en: "In-depth analysis of each training",
        no: "Dybdegående analyse av hver treningsøkt",
      },
      feature6: {
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
