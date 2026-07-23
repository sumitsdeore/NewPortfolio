import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sumit Deore | Software Engineer & AI Developer Portfolio",
    short_name: "Sumit Deore",
    description: "Official portfolio of Sumit Deore - Software Engineer & AI Developer.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#FFB300",
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
