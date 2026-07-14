import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sangeetha Labels",
    short_name: "Sangeetha Labels",
    description: "Premium woven labels, printed labels, heat transfers, hang tags, and garment trims.",
    start_url: "/",
    display: "standalone",
    background_color: "#f3eee8",
    theme_color: "#e9dfd9",
    icons: [
      {
        src: "/icons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
