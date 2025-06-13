import React from "react";
import AiToolCard from "./AiToolCard";

const aiToolsList = [
  {
    name: "AI Career Q&A Chat",
    desc: "Ask Career Questions",
    icon: "/chatbot.png",
    button: "Ask Now",
    path: "/ai-career-chat",
  },
  {
    name: "AI Resume Analyzer",
    desc: "Improve your Resume",
    icon: "/resume.png",
    button: "Analyze Now",
    path: "/ai-resume-analyzer",
  },
  {
    name: "Career Roadmap Generator",
    desc: "Build your roadmap",
    icon: "/roadmap.png",
    button: "Generate Now",
    path: "/career-roadmap-generator",
  },
  {
    name: "Cover Letter generator",
    desc: "Write a cover letter",
    icon: "/cover.png",
    button: "Create Now",
    path: "/cover-letter-generator",
  },
];

function AiTools() {
  return (
    <div className="mt-7 p-5 bg-white border rounded-xl">
      <h2 className="font-bold text-lg">Available AI Tools</h2>
      <p>Start Building and Shaping Your Career with this exclusive AI Tools</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-4">
        {aiToolsList.map((tool: any, index) => (
          <AiToolCard tool={tool} key={index} />
        ))}
      </div>
    </div>
  );
}

export default AiTools;
