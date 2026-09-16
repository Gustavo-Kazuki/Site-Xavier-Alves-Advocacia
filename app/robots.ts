import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: "*", allow: "/" }, sitemap: "https://xavier-alves-advocacia.studiovexio.chatgpt.site/sitemap.xml" }; }
