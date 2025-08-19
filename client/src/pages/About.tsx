import { Mail, ExternalLink, Code, Palette, Zap } from "lucide-react";
import { Link } from "wouter";

import raghavi_photo from "@assets/raghavi_photo.jpg";

export default function About() {
  const skills = [
    {
      icon: Palette,
      title: "Data Analytics",
      description:
        "I create data-driven analyses using SQL and Python (Pandas, NumPy, Matplotlib), focusing on cleaning and transforming data, building efficient pipelines, and delivering clear insights through compelling dashboards and visualizations.",
    },
    {
      icon: Code,
      title: "Software Engineering",
      description:
        "I design and build full-stack applications using React, Node.js, and TypeScript, with experience in scalable backend systems, API integration, and deploying projects on platforms like Vercel, Heroku, and AWS.",
    },
    {
      icon: Zap,
      title: "AI Research",
      description:
        "I conduct AI research focused on human-centered interaction, developing annotation models and applying NLP techniques (BERT, RoBERTa, VADER, HDB-SCAN) to analyze chatbot interactions and build adaptive, ethically aligned ai conversational systems.",
    },
  ];

  return (
    <div className="min-h-screen page-transition fade-in">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              hello, i'm raghavi :)
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                I am a Software Engineer and Data Analyst with a strong
                foundation in building reliable, user-focused applications and
                deriving meaningful insights from complex datasets.
              </p>
              <p>
                My professional interests lie in developing models and systems
                that not only drive business goals but also uncover critical
                information to inform decision-making.
              </p>
              <p>
                With hands-on experience in data analysis, full-stack
                development, and human-centered AI research, I am passionate
                about bridging software engineering with data-driven solutions.
                Looking ahead, I aim to pivot into machine learning, where I can
                design and deploy intelligent systems that create real-world
                impact.
              </p>
            </div>

            <div className="mt-8 flex space-x-4">
              <a
                href="mailto:raghavi.putluri03@gmail.com"
                data-testid="button-contact"
                className="inline-flex items-center px-6 py-3 bg-pink-light text-white font-medium rounded-lg hover:bg-pink-600 transition-colors duration-200"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
              </a>
              <Link
                href="/projects"
                data-testid="button-view-work"
                className="inline-flex items-center px-6 py-3 border border-pink-light text-pink-600 font-medium rounded-lg hover:bg-pink-50 transition-colors duration-200"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                View Work
              </Link>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <img
              src={raghavi_photo}
              alt="Raghavi Putluri profile photo"
              data-testid="img-profile"
              className="w-full max-w-md mx-auto rounded-2xl shadow-lg object-cover aspect-square"
            />
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Skills & Expertise
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-sm border border-pink-100"
                data-testid={`skill-card-${index}`}
              >
                <div className="w-12 h-12 bg-pink-lightest rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <skill.icon className="w-6 h-6 text-pink-light" />
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">
                  {skill.title}
                </h4>
                <p className="text-gray-600">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
