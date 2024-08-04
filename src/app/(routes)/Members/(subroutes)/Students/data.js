// data.js

// Array of student objects
const students = [
  {
    rollNumber: "2021001",
    name: "John Doe",
    photo:
      "https://media.istockphoto.com/id/1371704692/photo/portrait-of-a-confident-male-scientist-standing-in-a-medical-laboratory.jpg?s=612x612&w=0&k=20&c=pLVHdK4RW-sLZZqm18c-MAP1RkELQGQbSqiUAYWnggI=",
    about:
      "John Doe is a Computer Science major with a passion for software development and machine learning.",
    researches: [
      "Research on AI algorithms for predictive analytics.",
      "Study on machine learning models for natural language processing.",
    ],
    projects: [
      "Developed a web application for managing personal tasks.",
      "Created a machine learning model for sentiment analysis.",
    ],
    resumeButton: "https://example.com/resume/johndoe.pdf",
  },
  {
    rollNumber: "2021002",
    name: "Jane Smith",
    photo:
      "https://media.istockphoto.com/id/1371704692/photo/portrait-of-a-confident-male-scientist-standing-in-a-medical-laboratory.jpg?s=612x612&w=0&k=20&c=pLVHdK4RW-sLZZqm18c-MAP1RkELQGQbSqiUAYWnggI=",
    about:
      "Jane Smith is a Mathematics major specializing in data analysis and statistical modeling.",
    researches: [
      "Analysis of statistical methods for data prediction.",
      "Study on the impact of data quality on machine learning models.",
    ],
    projects: [
      "Developed a data visualization tool for statistical analysis.",
      "Created a predictive model for economic forecasting.",
    ],
    resumeButton: "https://example.com/resume/janesmith.pdf",
  },
  {
    rollNumber: "2021003",
    name: "Emily Johnson",
    photo:
      "https://media.istockphoto.com/id/1371704692/photo/portrait-of-a-confident-male-scientist-standing-in-a-medical-laboratory.jpg?s=612x612&w=0&k=20&c=pLVHdK4RW-sLZZqm18c-MAP1RkELQGQbSqiUAYWnggI=",
    about:
      "Emily Johnson is a Physics major focused on quantum mechanics and computational physics.",
    researches: [
      "Research on quantum entanglement and its applications.",
      "Study on computational methods for solving complex physical systems.",
    ],
    projects: [
      "Built a simulation tool for quantum mechanical systems.",
      "Developed a computational model for analyzing particle collisions.",
    ],
    resumeButton: "https://example.com/resume/emilyjohnson.pdf",
  },
  {
    rollNumber: "2021004",
    name: "Michael Brown",
    photo:
      "https://media.istockphoto.com/id/1371704692/photo/portrait-of-a-confident-male-scientist-standing-in-a-medical-laboratory.jpg?s=612x612&w=0&k=20&c=pLVHdK4RW-sLZZqm18c-MAP1RkELQGQbSqiUAYWnggI=",
    about:
      "Michael Brown is an Electrical Engineering major with interests in embedded systems and robotics.",
    researches: [
      "Study on embedded systems for autonomous vehicles.",
      "Research on robotics and control systems.",
    ],
    projects: [
      "Designed a robotic arm for precision tasks.",
      "Developed an embedded system for real-time data collection.",
    ],
    resumeButton: "https://example.com/resume/michaelbrown.pdf",
  },
  {
    rollNumber: "2021005",
    name: "Olivia Davis",
    photo:
      "https://media.istockphoto.com/id/1371704692/photo/portrait-of-a-confident-male-scientist-standing-in-a-medical-laboratory.jpg?s=612x612&w=0&k=20&c=pLVHdK4RW-sLZZqm18c-MAP1RkELQGQbSqiUAYWnggI=",
    about:
      "Olivia Davis is a Chemical Engineering major with a focus on sustainable energy and materials science.",
    researches: [
      "Research on renewable energy technologies.",
      "Study on advanced materials for energy storage.",
    ],
    projects: [
      "Developed a prototype for a solar-powered battery charger.",
      "Created a new composite material for high-efficiency energy storage.",
    ],
    resumeButton: "https://example.com/resume/oliviadavis.pdf",
  },
  {
    rollNumber: "2021006",
    name: "William Wilson",
    photo:
      "https://media.istockphoto.com/id/1371704692/photo/portrait-of-a-confident-male-scientist-standing-in-a-medical-laboratory.jpg?s=612x612&w=0&k=20&c=pLVHdK4RW-sLZZqm18c-MAP1RkELQGQbSqiUAYWnggI=",
    about:
      "William Wilson is a Civil Engineering major specializing in structural analysis and environmental engineering.",
    researches: [
      "Study on the impact of climate change on civil infrastructure.",
      "Research on new materials for sustainable construction.",
    ],
    projects: [
      "Designed a new type of eco-friendly building material.",
      "Developed a model for assessing structural integrity under extreme weather conditions.",
    ],
    resumeButton: "https://example.com/resume/williamwilson.pdf",
  },
  {
    rollNumber: "2021007",
    name: "Sophia Lee",
    photo:
      "https://media.istockphoto.com/id/1371704692/photo/portrait-of-a-confident-male-scientist-standing-in-a-medical-laboratory.jpg?s=612x612&w=0&k=20&c=pLVHdK4RW-sLZZqm18c-MAP1RkELQGQbSqiUAYWnggI=",
    about:
      "Sophia Lee is a Biology major focused on genetics and molecular biology.",
    researches: [
      "Research on gene editing techniques using CRISPR.",
      "Study on the effects of genetic mutations on disease susceptibility.",
    ],
    projects: [
      "Developed a genetic sequencing tool for research purposes.",
      "Created a model for predicting genetic predispositions to certain diseases.",
    ],
    resumeButton: "https://example.com/resume/sophialee.pdf",
  },
  {
    rollNumber: "2021008",
    name: "James Martinez",
    photo:
      "https://media.istockphoto.com/id/1371704692/photo/portrait-of-a-confident-male-scientist-standing-in-a-medical-laboratory.jpg?s=612x612&w=0&k=20&c=pLVHdK4RW-sLZZqm18c-MAP1RkELQGQbSqiUAYWnggI=",
    about:
      "James Martinez is an Economics major with a focus on econometrics and financial analysis.",
    researches: [
      "Analysis of econometric models for market predictions.",
      "Study on financial risk assessment methods.",
    ],
    projects: [
      "Developed a financial forecasting tool for investment strategies.",
      "Created a statistical model for analyzing economic trends.",
    ],
    resumeButton: "https://example.com/resume/jamesmartinez.pdf",
  },
  {
    rollNumber: "2021009",
    name: "Ava Anderson",
    photo:
      "https://media.istockphoto.com/id/1371704692/photo/portrait-of-a-confident-male-scientist-standing-in-a-medical-laboratory.jpg?s=612x612&w=0&k=20&c=pLVHdK4RW-sLZZqm18c-MAP1RkELQGQbSqiUAYWnggI=",
    about:
      "Ava Anderson is a Graphic Design major specializing in digital media and user experience design.",
    researches: [
      "Study on user interface design principles.",
      "Research on the impact of visual design on user engagement.",
    ],
    projects: [
      "Designed a user-friendly interface for a mobile application.",
      "Created a series of promotional graphics for a marketing campaign.",
    ],
    resumeButton: "https://example.com/resume/avaanderson.pdf",
  },
  {
    rollNumber: "2021010",
    name: "Ethan Thomas",
    photo:
      "https://media.istockphoto.com/id/1371704692/photo/portrait-of-a-confident-male-scientist-standing-in-a-medical-laboratory.jpg?s=612x612&w=0&k=20&c=pLVHdK4RW-sLZZqm18c-MAP1RkELQGQbSqiUAYWnggI=",
    about:
      "Ethan Thomas is a Mechanical Engineering major with interests in thermal systems and fluid dynamics.",
    researches: [
      "Research on heat transfer mechanisms in complex systems.",
      "Study on fluid dynamics for aerodynamics optimization.",
    ],
    projects: [
      "Developed a thermal management system for electronic devices.",
      "Created a simulation model for optimizing airflow in aerodynamic designs.",
    ],
    resumeButton: "https://example.com/resume/ethanthomas.pdf",
  },
];

// Export the students array
export default students;
