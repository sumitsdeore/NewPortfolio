export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  features: string[];
  links: { demo?: string; github?: string };
  year: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "aegis",
    title: "Aegis",
    description: "Developer Intelligence Platform — VS Code Extension",
    longDescription:
      "A VS Code extension that performs static analysis on Spring Boot applications to predict the impact of code changes before refactoring. Built an AST-based analysis engine to extract code structure and relationships across controllers, services, repositories, DTOs, and entities, then visualizes the resulting dependency graph interactively.",
    tech: ["Java 21", "Spring Boot", "TypeScript", "VS Code Extension API", "JavaParser", "React", "React Flow", "Maven"],
    features: [
      "AST-based static analysis engine built on JavaParser",
      "Dependency graph generation to trace change impact across layers",
      "Modular rule-engine architecture for extensible analysis",
      "Interactive React Flow visualizations inside VS Code",
      "AI-assisted explanations that turn findings into actionable insight",
    ],
    links: { github: "https://github.com/sumitsdeore/AEGIS" },
    year: "2026",
  },
  {
    slug: "skillissue-ai",
    title: "SkillIssue AI",
    description: "AI-Powered Developer Intelligence Platform",
    longDescription:
      "A platform that evaluates developer profiles and generates personalized career diagnostics, skill-gap analysis, and learning roadmaps. Uses AI-driven evaluation workflows to produce structured recommendations for interview preparation and technical growth.",
    tech: ["React", "TypeScript", "Tailwind CSS", "REST APIs", "AI APIs"],
    features: [
      "AI-driven skill-gap analysis and personalized roadmaps",
      "Structured interview-prep and technical recommendation engine",
      "Modular architecture built for future assessments & dashboards",
      "Responsive, accessible frontend with reusable components",
    ],
    links: { github: "https://github.com/sumitsdeore/Skillissue-AI" },
    year: "2026",
  },
];
