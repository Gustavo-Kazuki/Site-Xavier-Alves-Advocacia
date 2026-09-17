import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: "*", allow: "/" }, sitemap: "https://site-xavier-alves-advocacia.vercel.app/sitemap.xml" }; }
