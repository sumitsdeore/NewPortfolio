import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Sumit Deore",
  description:
    "Interactive CV of Sumit Deore, Software Engineer & AI Developer. Exposing projects (AEGIS, SkillIssue), professional experience (Àkanní), academic timelines, and developer toolkits.",
  alternates: {
    canonical: "https://sumitsdeore.vercel.app/resume",
  },
  openGraph: {
    title: "Resume | Sumit Deore | Software Engineer",
    description:
      "Interactive CV of Sumit Deore, Software Engineer & AI Developer. Exposing projects (AEGIS, SkillIssue), professional experience (Àkanní), academic timelines, and developer toolkits.",
    url: "https://sumitsdeore.vercel.app/resume",
    siteName: "Sumit Deore Portfolio",
    locale: "en_US",
    type: "profile",
    images: [
      {
        url: "https://sumitsdeore.vercel.app/MyPhoto.png",
        width: 1000,
        height: 1250,
        alt: "Sumit Deore Profile Photo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume | Sumit Deore | Software Engineer",
    description:
      "Interactive CV of Sumit Deore, Software Engineer & AI Developer. Exposing projects (AEGIS, SkillIssue), professional experience (Àkanní), academic timelines, and developer toolkits.",
    images: ["https://sumitsdeore.vercel.app/MyPhoto.png"],
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
