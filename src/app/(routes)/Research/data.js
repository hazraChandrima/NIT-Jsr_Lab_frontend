const researchData = [
  {
    id: 1,
    title: "AI in Healthcare",
    subtitle: "Transforming Medicine with Artificial Intelligence",
    heading:
      "Development of AI-driven healthcare solutions for diagnostics and patient care",
    themes: ["Machine Learning", "Data Analysis", "Healthcare"],
    content:
      "This research focuses on the application of AI in diagnosing diseases, improving patient care, and reducing healthcare costs. This includes developing AI models that can analyze medical images, predict patient outcomes, and assist in clinical decision-making. This research focuses on the application of AI in diagnosing diseases, improving patient care, and reducing healthcare costs. This includes developing AI models that can analyze medical images, predict patient outcomes, and assist in clinical decision-making. This research focuses on the application of AI in diagnosing diseases, improving patient care, and reducing healthcare costs. This includes developing AI models that can analyze medical images, predict patient outcomes, and assist in clinical decision-making.",
    members: ["Dr. John Doe", "Jane Smith", "Emily Davis"],
    summary:
      "Exploring the impact of AI on modern healthcare practices. Exploring the impact of AI on modern healthcare practices. Exploring the impact of AI on modern healthcare practices.Exploring the impact of AI on modern healthcare practices. Exploring the impact of AI on modern healthcare practices. Exploring the impact of AI on modern healthcare practices.Exploring the impact of AI on modern healthcare practices. Exploring the impact of AI on modern healthcare practices. Exploring the impact of AI on modern healthcare practices.Exploring the impact of AI on modern healthcare practices. Exploring the impact of AI on modern healthcare practices. Exploring the impact of AI on modern healthcare practices.Exploring the impact of AI on modern healthcare practices. Exploring the impact of AI on modern healthcare practices. Exploring the impact of AI on modern healthcare practices.",
    aim: "To develop AI models that can assist doctors in making accurate diagnoses.",
    papers: [
      {
        title: "AI-Based Diagnostics in Radiology",
        authors: ["Dr. John Doe", "Jane Smith"],
        publishedIn: "Journal of Medical Imaging",
        year: 2023,
      },
      {
        title: "Machine Learning Algorithms for Predicting Patient Outcomes",
        authors: ["Emily Davis", "Jane Smith"],
        publishedIn: "Journal of Healthcare Informatics",
        year: 2022,
      },
    ],
    imageUrl:
      "https://www.mccmdclinic.org/wp-content/uploads/2020/01/Microscope.jpg",
  },
  {
    id: 2,
    title: "Renewable Energy Technologies",
    subtitle: "Innovations in Sustainable Energy Solutions",
    heading:
      "Advancements in harnessing renewable energy for a sustainable future",
    themes: ["Solar Energy", "Wind Energy", "Sustainability"],
    content:
      "Research on new technologies for harnessing renewable energy sources to reduce dependence on fossil fuels. This includes developing more efficient solar panels, wind turbines, and energy storage systems. Research on new technologies for harnessing renewable energy sources to reduce dependence on fossil fuels. This includes developing more efficient solar panels, wind turbines, and energy storage systems. Research on new technologies for harnessing renewable energy sources to reduce dependence on fossil fuels. This includes developing more efficient solar panels, wind turbines, and energy storage systems.",
    members: ["Dr. Alice Brown", "Michael Green", "Sarah Johnson"],
    summary:
      "Investigating the potential of renewable energy technologies. Investigating the potential of renewable energy technologies. Investigating the potential of renewable energy technologies.Investigating the potential of renewable energy technologies. Investigating the potential of renewable energy technologies. Investigating the potential of renewable energy technologies.Investigating the potential of renewable energy technologies. Investigating the potential of renewable energy technologies. Investigating the potential of renewable energy technologies.Investigating the potential of renewable energy technologies. Investigating the potential of renewable energy technologies. Investigating the potential of renewable energy technologies.Investigating the potential of renewable energy technologies. Investigating the potential of renewable energy technologies. Investigating the potential of renewable energy technologies.",
    aim: "To develop efficient and cost-effective renewable energy systems.",
    papers: [
      {
        title: "Advances in Solar Panel Efficiency",
        authors: ["Dr. Alice Brown", "Michael Green"],
        publishedIn: "Journal of Renewable Energy",
        year: 2021,
      },
      {
        title: "Wind Turbine Design and Performance",
        authors: ["Sarah Johnson", "Michael Green"],
        publishedIn: "Journal of Sustainable Engineering",
        year: 2020,
      },
    ],
    imageUrl:
      "https://www.mccmdclinic.org/wp-content/uploads/2020/01/Microscope.jpg",
  },
  {
    id: 3,
    title: "Cybersecurity in the Digital Age",
    subtitle: "Protecting Information in an Interconnected World",
    heading:
      "Development of advanced cybersecurity measures to safeguard digital assets",
    themes: ["Network Security", "Data Encryption", "Cyber Threats"],
    content:
      "This research focuses on developing advanced cybersecurity measures to protect sensitive information from cyber threats. This includes encryption technologies, network security protocols, and intrusion detection systems. This research focuses on developing advanced cybersecurity measures to protect sensitive information from cyber threats. This includes encryption technologies, network security protocols, and intrusion detection systems. This research focuses on developing advanced cybersecurity measures to protect sensitive information from cyber threats. This includes encryption technologies, network security protocols, and intrusion detection systems.",
    members: ["Dr. Robert Lee", "Anna Martinez", "David Wilson"],
    summary:
      "Enhancing the security of digital information and communication systems. Enhancing the security of digital information and communication systems. Enhancing the security of digital information and communication systems.",
    aim: "To create robust cybersecurity solutions that can withstand evolving cyber threats.",
    papers: [
      {
        title: "Encryption Techniques for Secure Data Transmission",
        authors: ["Dr. Robert Lee", "Anna Martinez"],
        publishedIn: "Journal of Cybersecurity",
        year: 2023,
      },
      {
        title: "Network Security Protocols in the Age of IoT",
        authors: ["David Wilson", "Anna Martinez"],
        publishedIn: "Journal of Information Security",
        year: 2022,
      },
    ],
    imageUrl:
      "https://www.mccmdclinic.org/wp-content/uploads/2020/01/Microscope.jpg",
  },
  {
    id: 4,
    title: "Biotechnology Innovations",
    subtitle: "Revolutionizing Medicine and Agriculture",
    heading:
      "Harnessing biotechnology for medical and agricultural advancements",
    themes: [
      "Genetic Engineering",
      "Biomedical Research",
      "Agricultural Biotechnology",
    ],
    content:
      "Research on biotechnology innovations that are transforming medicine and agriculture. This includes genetic engineering techniques, biomedical research for disease treatment, and advancements in crop production. Research on biotechnology innovations that are transforming medicine and agriculture. This includes genetic engineering techniques, biomedical research for disease treatment, and advancements in crop production. Research on biotechnology innovations that are transforming medicine and agriculture. This includes genetic engineering techniques, biomedical research for disease treatment, and advancements in crop production.",
    members: ["Dr. Linda Nguyen", "Paul Walker", "Sophia Hernandez"],
    summary:
      "Exploring the potential of biotechnology to improve health and food security. Exploring the potential of biotechnology to improve health and food security. Exploring the potential of biotechnology to improve health and food security.",
    aim: "To develop biotechnological solutions that address medical and agricultural challenges.",
    papers: [
      {
        title: "CRISPR-Cas9 in Genetic Engineering",
        authors: ["Dr. Linda Nguyen", "Paul Walker"],
        publishedIn: "Journal of Biotechnology",
        year: 2023,
      },
      {
        title: "Biotechnological Advances in Crop Yield",
        authors: ["Sophia Hernandez", "Paul Walker"],
        publishedIn: "Journal of Agricultural Science",
        year: 2022,
      },
    ],
    imageUrl:
      "https://www.mccmdclinic.org/wp-content/uploads/2020/01/Microscope.jpg",
  },
  {
    id: 5,
    title: "Quantum Computing",
    subtitle: "The Future of Computational Power",
    heading:
      "Exploring the capabilities of quantum computing for solving complex problems",
    themes: [
      "Quantum Algorithms",
      "Quantum Cryptography",
      "Computational Physics",
    ],
    content:
      "This research focuses on the development and application of quantum computing technologies. This includes creating quantum algorithms, enhancing quantum cryptography, and exploring the potential of quantum computers in various fields. This research focuses on the development and application of quantum computing technologies. This includes creating quantum algorithms, enhancing quantum cryptography, and exploring the potential of quantum computers in various fields. This research focuses on the development and application of quantum computing technologies. This includes creating quantum algorithms, enhancing quantum cryptography, and exploring the potential of quantum computers in various fields.",
    members: ["Dr. James Taylor", "Laura Roberts", "Daniel Kim"],
    summary:
      "Investigating the transformative potential of quantum computing. Investigating the transformative potential of quantum computing. Investigating the transformative potential of quantum computing.",
    aim: "To harness quantum computing to solve problems that are intractable for classical computers.",
    papers: [
      {
        title: "Quantum Algorithms for Optimization Problems",
        authors: ["Dr. James Taylor", "Laura Roberts"],
        publishedIn: "Journal of Quantum Computing",
        year: 2023,
      },
      {
        title: "Quantum Cryptography: Ensuring Data Security",
        authors: ["Daniel Kim", "Laura Roberts"],
        publishedIn: "Journal of Computational Physics",
        year: 2022,
      },
    ],
    imageUrl:
      "https://www.mccmdclinic.org/wp-content/uploads/2020/01/Microscope.jpg",
  },
];

export default researchData;
