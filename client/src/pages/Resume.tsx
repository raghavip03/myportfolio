import { Download } from "lucide-react";

export default function Resume() {
  const experiences = [
    {
      title: "Data Analytics & Research Intern",
      company: "The User Empowerment Lab | University of Washington",
      period: "June 2025 - Sep 2025",
      responsibilities: [
        "Developing a proprietary algorithm to classify ChatGPT conversations as personal or regular, leveraging heuristics, VADER, DAC, and Emotion Classifier.",
        "Analyzing psychological effects of AI chatbot usage by teenagers using NLP tools (NLTK, HDB-SCAN, BERT) to inform the creation of a psychologically adaptive chatbot.",
        "Collaborating with a group of  researchers to design a new adaptive chatbot tailored for teenagers' developmental needs, with plans to submit findings to CHI for publication.",
      ],
    },
    {
      title: "Software Engineering Intern",
      company: "The User Empowerment Lab | University of Washington",
      period: "June 2025 - Sep 2025",
      responsibilities: [
        "Developing a full-stack decentralized social media mobile app MVP using React, Redux, and TypeScript, enabling researchers to retrieve social interaction data efficiently.",
        "Built the follow/unfollow user logic to fix state persistence issues across authenticated and unauthenticated sessions, ensuring seamless functionality.",
        "Organized and hosted user-testing sessions, quickly addressing bugs to ensure timely product improvements.",
      ],
    },
    {
      title: "Data Engineering Intern",
      company: "Svoboda Diaries Project | University of Washington",
      period: "Jan 2024 - Jul 2024",
      responsibilities: [
        "Engineered a data pipeline with Pandas/NumPy to clean and normalize 1M+ historical trade records, improving dataset accuracy by 70% and enabling scalable analysis for historians.",
        "Standardized 500K+ cargo records by removing duplicates, filtering irrelevant terms, and categorizing data into five main groups, improving consistency across datasets by 30%.",
        "Engineered a Node.js and GeoJSON backend to power an interactive map visualizing 1M+ cargo data points, enabling historians to analyze trade patterns across 200+ historical routes.",
      ],
    },
    {
      title: "Software Engineering Intern",
      company: "PLSE Lab | University of Washington",
      period: "Jan 2025 - June 2025",
      responsibilities: [
        "Developed an interactive Bobbin Lace visualizer using JavaScript, Node JS, and Processing, enabling real-time simulation of complex thread patterns and improving usability for textile makers.",
        "Applied object-oriented principles to modularize thread and stitch logic into reusable JavaScript classes, enhancing maintainability and debugging.",
        "Developed a real-time visualization with Bézier curves and dynamic animations to represent braid group operations and stitch sequences.",
      ],
    },
  ];

  const designTools = [
    "Python",
    "React",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "TensorFlow",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "SQL",
  ];
  const developmentSkills = [
    "HTML/CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Git",
  ];

  const certifications: { title: string; issuer: string; year: string }[] = [];

  const handleDownloadPDF = () => {
    // In a real application, this would trigger a download of the actual PDF
    alert("PDF download would be triggered here");
  };

  return (
    <div className="min-h-screen page-transition fade-in">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Resume
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Software Engineer and Data Analyst
          </p>
          <button
            onClick={handleDownloadPDF}
            data-testid="button-download-pdf"
            className="inline-flex items-center px-6 py-3 bg-pink-light text-white font-medium rounded-lg hover:bg-pink-600 transition-colors duration-200"
          >
            <Download className="w-5 h-5 mr-2" />
            Download PDF
          </button>
        </div>

        {/* Resume Content */}
        <div className="bg-white rounded-xl shadow-lg border border-pink-100 p-8 md:p-12">
          {/* Experience */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-pink-100 pb-2">
              Experience
            </h3>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} data-testid={`experience-${index}`}>
                  <div className="flex flex-col md:flex-row md:justify-between mb-2">
                    <h4
                      className="text-lg font-medium text-gray-900"
                      data-testid={`experience-title-${index}`}
                    >
                      {exp.title}
                    </h4>
                    <span
                      className="text-gray-600"
                      data-testid={`experience-period-${index}`}
                    >
                      {exp.period}
                    </span>
                  </div>
                  <p
                    className="text-pink-600 font-medium mb-3"
                    data-testid={`experience-company-${index}`}
                  >
                    {exp.company}
                  </p>
                  <ul className="text-gray-600 space-y-1 ml-4">
                    {exp.responsibilities.map((responsibility, respIndex) => (
                      <li
                        key={respIndex}
                        data-testid={`experience-responsibility-${index}-${respIndex}`}
                      >
                        • {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-pink-100 pb-2">
              Education
            </h3>

            <div data-testid="education">
              <div className="flex flex-col md:flex-row md:justify-between mb-2">
                <h4
                  className="text-lg font-medium text-gray-900"
                  data-testid="education-degree"
                >
                  Bachelor of Science in Computer Science & Data Science
                </h4>
                <span className="text-gray-600" data-testid="education-period">
                  2022 - 2026
                </span>
              </div>
              <p
                className="text-pink-600 font-medium mb-3"
                data-testid="education-school"
              >
                University of Washington - Seattle, WA
              </p>
              <p className="text-gray-600" data-testid="education-honors"></p>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-pink-100 pb-2">
              Skills
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4
                  className="font-medium text-gray-900 mb-3"
                  data-testid="skills-design-title"
                >
                  Technical Skills
                </h4>
                <div
                  className="flex flex-wrap gap-2"
                  data-testid="skills-design"
                >
                  {designTools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-pink-lightest text-pink-600 text-sm rounded"
                      data-testid={`skill-design-${index}`}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-pink-100 pb-2">
              Certifications
            </h3>

            <div className="space-y-4" data-testid="certifications">
              {certifications.length === 0 ? (
                <p className="text-gray-500 text-center py-8">coming soon...</p>
              ) : (
                certifications.map((cert, index) => (
                  <div key={index} data-testid={`certification-${index}`}>
                    <h4
                      className="font-medium text-gray-900"
                      data-testid={`certification-title-${index}`}
                    >
                      {cert.title}
                    </h4>
                    <p
                      className="text-gray-600"
                      data-testid={`certification-details-${index}`}
                    >
                      {cert.issuer} • {cert.year}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
