import type { Metadata } from "next";
import { Syncopate, Syne, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { SITE } from "@/data/site";

const syncopate = Syncopate({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-syncopate",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sumitsdeore.vercel.app"),
  title: {
    default: "Sumit Deore | Software Engineer | Full Stack Developer",
    template: "%s | Sumit Deore",
  },
  description:
    "Official portfolio of Sumit Deore. Software Engineer specializing in React, Next.js, TypeScript, AI-powered applications, VS Code extensions, and full-stack web development. Explore projects including AEGIS and SkillIssue.",
  keywords: [
    "Sumit Deore",
    "Sumit S Deore",
    "Sumit Deore Developer",
    "Sumit Deore Portfolio",
    "Sumit Deore Software Engineer",
    "Sumit Deore GitHub",
    "Full Stack Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "AI Developer",
    "Software Engineering",
    "VS Code Extensions",
    "Web Development",
  ],
  authors: [{ name: "Sumit Deore" }],
  creator: "Sumit Deore",
  publisher: "Sumit Deore",
  category: "technology",
  openGraph: {
    title: "Sumit Deore | Software Engineer | Full Stack Developer",
    description:
      "Official portfolio of Sumit Deore. Software Engineer specializing in React, Next.js, TypeScript, AI-powered applications, VS Code extensions, and full-stack web development. Explore projects including AEGIS and SkillIssue.",
    url: "https://sumitsdeore.vercel.app",
    siteName: "Sumit Deore Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://sumitsdeore.vercel.app/icon.png",
        width: 512,
        height: 512,
        alt: "Sumit Deore Portfolio Icon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sumit Deore | Software Engineer | Full Stack Developer",
    description:
      "Official portfolio of Sumit Deore. Software Engineer specializing in React, Next.js, TypeScript, AI-powered applications, VS Code extensions, and full-stack web development. Explore projects including AEGIS and SkillIssue.",
    images: ["https://sumitsdeore.vercel.app/icon.png"],
  },
  alternates: {
    canonical: "https://sumitsdeore.vercel.app",
  },
  robots: { index: true, follow: true },
  verification: {
    google: "google-site-verification-placeholder",
    other: {
      "msvalidate.01": "bing-verification-placeholder",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://sumitsdeore.vercel.app/#person",
      "name": "Sumit Deore",
      "jobTitle": ["Software Engineer", "Frontend Developer", "Full Stack Developer"],
      "url": "https://sumitsdeore.vercel.app",
      "image": "https://sumitsdeore.vercel.app/MyPhoto.png",
      "description": "Official portfolio of Sumit Deore. Software Engineer specializing in React, Next.js, TypeScript, AI-powered applications, VS Code extensions, and full-stack web development.",
      "sameAs": [
        "https://github.com/sumitsdeore",
        "https://www.linkedin.com/in/sumitsdeore/"
      ],
      "alumniOf": [
        {
          "@type": "EducationalOrganization",
          "name": "MIT World Peace University, Pune"
        },
        {
          "@type": "EducationalOrganization",
          "name": "Vellore Institute of Technology (VIT)"
        }
      ],
      "knowsAbout": [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Node.js",
        "MongoDB",
        "Firebase",
        "AI",
        "Software Engineering",
        "VS Code Extensions",
        "Web Development"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://sumitsdeore.vercel.app/#website",
      "url": "https://sumitsdeore.vercel.app",
      "name": "Sumit Deore | Software Engineer & AI Developer Portfolio",
      "description": "Official portfolio of Sumit Deore. Software Engineer specializing in React, Next.js, TypeScript, AI-powered applications, VS Code extensions, and full-stack web development.",
      "publisher": {
        "@id": "https://sumitsdeore.vercel.app/#organization"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://sumitsdeore.vercel.app/#organization",
      "name": "Sumit Deore",
      "url": "https://sumitsdeore.vercel.app",
      "logo": "https://sumitsdeore.vercel.app/MyPhoto.png",
      "sameAs": [
        "https://github.com/sumitsdeore",
        "https://www.linkedin.com/in/sumitsdeore/"
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${syncopate.variable} ${syne.variable} ${plusJakarta.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.github.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://api.github.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <div className="noise" />
        <ScrollProgress />
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
