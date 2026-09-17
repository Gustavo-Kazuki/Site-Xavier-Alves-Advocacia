import type { MetadataRoute } from "next";
const base = "https://site-xavier-alves-advocacia.vercel.app";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/previdenciario", "/trabalhista", "/sobre", "/profissionais", "/conteudos", "/contato"].map((path) => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: path === "" ? "weekly" : "monthly", priority: path === "" ? 1 : path === "/previdenciario" || path === "/trabalhista" ? .9 : .7 }));
}
