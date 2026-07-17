import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tycho Coaching",
    short_name: "Tycho Coaching",
    description: "Personal, science-led online cycling coaching.",
    start_url: "/en",
    display: "standalone",
    background_color: "#f4f2ec",
    theme_color: "#18313b",
    icons: [{ src: "/logo-mark.webp", sizes: "180x180", type: "image/webp" }],
  }
}
