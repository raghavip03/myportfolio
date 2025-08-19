import { ExternalLink, ArrowRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "No Deception",
      category: "Chrome Extension",
      description:
        "No Deception is a Chrome extension that allows you to analyze website text. When you highlight text and activate it, No Deception will list out misleading or inaccurate sentences, provide an overall text accuracy assessment, and provide referenced external sources for further exploration.",
      image:
        "https://images.unsplash.com/photo-1584714268709-c3dd9c92b378?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      skills: ["Chrome Extension API", "JavaScript", "Web Scraping"],
      liveUrl: "https://github.com/gycobden/No-Deception",
      imagePosition: "left",
    },
    {
      id: 2,
      title: "Saturn FYP",
      category: "Mobile App",
      description:
        "Saturn is a federated social network built on ActivityPub that prioritizes user control, privacy, and authentic connections. It is a decentralized social media platform built with TypeScript, React/Redux, and MongoDB",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      skills: [
        "Full Stack Development",
        "Mobile Development",
        "Software Testing",
      ],
      liveUrl: "https://github.com/ForYouPage-Org/Saturn?tab=readme-ov-file",
      imagePosition: "right",
    },
    {
      id: 3,
      title: "Youtube Choice Optimizer",
      category: "Website",
      description:
        "The YouTube Choice Optimizer is an NLP-powered tool that analyzes video comments and user preferences to recommend the top 3 YouTube videos for any query, helping learners quickly find content that best matches their learning style.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      skills: ["Data Analytics", "NLP", "Machine Learning"],
      liveUrl: "https://github.com/raghavip03/youtube-choice-optimizer",
      imagePosition: "left",
    },
  ];

  return (
    <div className="min-h-screen page-transition fade-in">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A selection of projects that showcase my data analytics and software
            engineering skills.
          </p>
        </div>

        <div className="grid gap-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-pink-100"
              data-testid={`project-card-${project.id}`}
            >
              <div className="md:flex">
                <div
                  className={`md:w-1/2 ${project.imagePosition === "right" ? "md:order-2" : ""}`}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} design`}
                    data-testid={`project-image-${project.id}`}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div
                  className={`md:w-1/2 p-8 ${project.imagePosition === "right" ? "md:order-1" : ""}`}
                >
                  <div className="flex items-center mb-4">
                    <span
                      className="px-3 py-1 bg-pink-lightest text-pink-600 text-sm font-medium rounded-full"
                      data-testid={`project-category-${project.id}`}
                    >
                      {project.category}
                    </span>
                  </div>
                  <h3
                    className="text-2xl font-semibold text-gray-900 mb-4"
                    data-testid={`project-title-${project.id}`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-gray-600 mb-6"
                    data-testid={`project-description-${project.id}`}
                  >
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded"
                        data-testid={`project-skill-${project.id}-${skillIndex}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      data-testid={`project-live-link-${project.id}`}
                      className="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium transition-colors duration-200"
                    >
                      github
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
