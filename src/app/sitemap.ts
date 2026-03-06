import type { MetadataRoute } from "next";
import { activities } from "@/content/activities";

const baseUrl = "https://standardschoolsilorin.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/about", "/academics", "/admissions", "/activities", "/gallery", "/contact"];

  const staticEntries = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const activityEntries = activities.map((activity) => ({
    url: `${baseUrl}/activities/${activity.slug}`,
    lastModified: new Date(activity.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...activityEntries];
}
