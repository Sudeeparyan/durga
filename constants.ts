import { Profile, Project, SkillCategory, Education, NavItem } from './types';
import { Database, Cloud, Code, BarChart3, Brain, Server } from 'lucide-react';

export const PROFILE: Profile = {
  name: "Durga Prasad Reddy",
  role: "Data Analytics & AI Graduate | Turning Data into Business Impact",
  location: "Dublin, Ireland",
  email: "m.durga0712@gmail.com",
  linkedin: "https://www.linkedin.com/in/durga-prasad-reddy", // Placeholder as requested
  github: "https://github.com/durga-prasad-reddy", // Placeholder
  summary: "Results-oriented Data Professional specializing in AI, Cloud Analytics (Azure), and Machine Learning. Proven ability to translate complex datasets into actionable business insights. eligible to work in Ireland (Stamp 1G).",
  about: [
    "I am a Data Analytics and AI professional with a strong foundation in transforming raw data into strategic business value.",
    "With a Master’s in Data Analytics from the National College of Ireland and hands-on experience in Azure Cloud ecosystems, I specialize in building scalable data pipelines, deploying machine learning models, and creating intuitive dashboards.",
    "My approach combines rigorous technical execution with a consulting mindset—focusing not just on the 'how' of the technology, but the 'why' for the business. I am passionate about leveraging Generative AI and predictive modeling to solve real-world operational challenges.",
    "Currently based in Dublin and actively seeking opportunities to drive data maturity for forward-thinking enterprises in Ireland."
  ]
};

export const SKILLS: SkillCategory[] = [
  {
    title: "Programming & Data",
    skills: ["Python (Pandas, NumPy)", "SQL (Advanced)", "R Programming", "TypeScript", "Scala"],
    icon: Code
  },
  {
    title: "Machine Learning & AI",
    skills: ["TensorFlow & PyTorch", "Scikit-learn", "NLP (Spacy, NLTK)", "GANs", "Generative AI", "Computer Vision"],
    icon: Brain
  },
  {
    title: "Cloud & Big Data",
    skills: ["Azure Data Factory", "Azure Synapse", "Databricks", "Spark", "Docker", "Kubernetes"],
    icon: Cloud
  },
  {
    title: "Visualization & Tools",
    skills: ["Power BI", "Tableau", "Matplotlib/Seaborn", "Git/GitHub", "Jira", "Excel (VBA)"],
    icon: BarChart3
  }
];

export const PROJECTS: Project[] = [
  {
    title: "IoT Anomaly Detection using GANs",
    category: "AI",
    problem: "Traditional threshold-based monitoring systems failed to detect subtle anomalies in high-velocity IoT sensor streams, leading to preventative maintenance delays.",
    techStack: ["Python", "PyTorch", "GANs (Generative Adversarial Networks)", "Time-Series Analysis"],
    results: [
      "Developed a semi-supervised GAN model to identify anomalies with 94% accuracy.",
      "Reduced false positive alerts by 30% compared to statistical baselines.",
      "Simulated a preventative maintenance workflow capable of saving 15% in operational downtime."
    ],
    githubUrl: "#"
  },
  {
    title: "AI-Based Sentiment Analysis for Customer Feedback",
    category: "Data",
    problem: "Unstructured customer feedback data was manually processed, causing a 2-week lag in identifying negative sentiment trends affecting brand reputation.",
    techStack: ["Python", "NLTK", "BERT Transformers", "Power BI"],
    results: [
      "Automated sentiment classification of 50,000+ reviews using NLP transformers.",
      "Created a real-time Power BI dashboard visualizing sentiment trends by region.",
      "Enabled the product team to identify and address a critical UX bug within 48 hours."
    ],
    githubUrl: "#"
  },
  {
    title: "Azure Cloud Sales Analytics Platform",
    category: "Cloud",
    problem: "Siloed sales data across multiple regions made global performance reporting inconsistent and slow.",
    techStack: ["Azure Data Factory", "Azure SQL DB", "Databricks", "Power BI"],
    results: [
      "Architected an ETL pipeline in Azure Data Factory to ingest and normalize daily sales data.",
      "Reduced report generation time from 3 days to near real-time (15 minutes).",
      "Delivered a centralized interactive dashboard used for quarterly strategy planning."
    ],
    githubUrl: "#"
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "MSc in Data Analytics",
    institution: "National College of Ireland, Dublin",
    year: "2023 - 2024",
    details: "Focus on Data Mining, Cloud Architectures, and Advanced Machine Learning."
  },
  {
    degree: "B.Tech in Computer Science",
    institution: "Lovely Professional University, India",
    year: "2018 - 2022",
    details: "Specialization in Software Engineering and Database Management Systems."
  }
];

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];