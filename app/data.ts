export const resumeData = {
  personal: {
    name: "Andrea Biaggi", 
    role: "Software Engineer", 
    bio: "I am a software engineer dedicated to building high-quality tools that empower people. I am driven by the belief that technology makes the world a better place, which is why I have made it the central focus of my career. Outside of engineering, I stay active by rock climbing and surfing, and keep my creative side alive by playing guitar and piano.",
    email: "biaggi.jack@gmail.com", 
    phone: "+39 3339553735", 
    location: "Legnano, MI Italy", 
  },
  skills: [
    "Java", 
    "Spring Boot", 
    "AWS", 
    "Python", 
    "SQL", 
    "JavaScript" 
  ],
  experience: [
    {
      id: 1,
      company: "Satispay", 
      position: "Senior Software Engineer", 
      duration: "2024 - Present", 
      description: "Led the design of new products in the consumer domain: Loyalty program: designed and delivered a loyalty points program that led up to 15-20% uplift in consumers' weekly average spend; Membership program: designed and delivered premium plans providing benefits to subscribed consumers that led to the creation of a new revenue line.",
    },
    {
      id: 2,
      company: "Satispay", 
      position: "Software Engineer", 
      duration: "2022 - 2024", 
      description: "Collaborated on several features under the merchant domain. Led the re-engineering and the migration of IBAN registration and verification by centralizing them under a single microservice.",
    },
    {
      id: 3,
      company: "UniCredit Bank", 
      position: "Software Engineer", 
      duration: "2021 - 2022", 
      description: "Development of cybersecurity solutions for UniCredit Secure Gateway, a component that provides security features to prevent frauds on Mobile Banking services.",
    },
    {
      id: 4,
      company: "NTT Data", 
      position: "Software Engineer", 
      duration: "2020 - 2021", 
      description: "Development of cybersecurity solutions for UniCredit Bank. ",
    },
    {
      id: 5,
      company: "University of Milano-Bicocca", 
      position: "Researcher", 
      duration: "2019", 
      description: "Performance antipatterns detection in Java applications through the analysis of profiling data extracted during the execution of load tests.",
    },
    {
      id: 6,
      company: "Chalmers University", 
      position: "Research Assistant", 
      duration: "2017", 
      description: "Academic collaboration in a research project for an industrial case study in a big automotive company located in Gothenburg, SE.",
    }
  ],
  education: [
    {
      id: 1,
      degree: "M.Sc. in Computer Science", 
      institution: "University of Milano-Bicocca", 
      duration: "2017 - 2019", 
      details: "Graduated with honors. Focus on: Software Engineering, Software Architecture, Reverse Engineering, Technical Debt, Software Quality."
    },
    {
      id: 2,
      degree: "B.Sc. in Computer Science", 
      institution: "University of Milano-Bicocca", 
      duration: "2014 - 2017", 
      details: "" // Left blank as no specific details were provided
    }
  ],
  publications: [
    {
      id: 1,
      year: "2023",
      title: "Automated detection of software performance antipatterns in java-based applications",
      authors: "Trubiani, C., Pinciroli, R., Biaggi, A., Arcelli Fontana, F.",
      link: "https://ieeexplore.ieee.org/abstract/document/10013942"
    },
    {
      id: 2,
      year: "2023",
      title: "A New Approach for Software Quality Assessment Based on Automated Code Anomalies Detection",
      authors: "Biaggi, A., Azadi, U., Arcelli Fontana, F.",
      link: "https://boa.unimib.it/handle/10281/457158"
    },
    {
      id: 3,
      year: "2018",
      title: "Identifying and prioritizing architectural debt through architectural smells: a case study in a large software company",
      authors: "Martini, A., Fontana, F. A., Biaggi, A., Roveda, R.",
      link: "https://link.springer.com/chapter/10.1007/978-3-030-00761-4_21"
    },
    {
      id: 4,
      year: "2018",
      title: "An Architectural Smells Detection Tool for C and C++ Projects",
      authors: "Biaggi, A., Fontana, F. A., Roveda, R.",
      link: "https://ieeexplore.ieee.org/abstract/document/8498241"
    }
  ],
  languages: [
    { language: "Italian", proficiency: "Mother Tongue" }, 
    { language: "English", proficiency: "C1" } 
  ]
};