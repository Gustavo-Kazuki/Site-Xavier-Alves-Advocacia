import type { Metadata } from "next";
import { ConversionPage } from "@/components/conversion-page";

export const metadata: Metadata = { title: "Direito Previdenciário", description: "Orientação jurídica em aposentadorias, benefícios do INSS, BPC/LOAS e planejamento previdenciário.", alternates: { canonical: "/previdenciario" } };
const issues = ["Aposentadorias", "Planejamento previdenciário", "Benefício por incapacidade", "Auxílio-doença", "BPC/LOAS", "Pensão por morte", "Salário-maternidade", "Revisão de benefícios", "Benefício negado pelo INSS", "Análise de histórico contributivo"];
const questions = [
  { q: "Tive meu benefício negado pelo INSS. O que posso fazer?", a: "É possível analisar a decisão, os documentos e o histórico do pedido para avaliar medidas administrativas ou judiciais adequadas ao caso." },
  { q: "Como saber se já tenho direito à aposentadoria?", a: "A análise considera idade, tempo e tipo de contribuição, vínculos e regras aplicáveis ao seu histórico." },
  { q: "O que é planejamento previdenciário?", a: "É um estudo do histórico contributivo e dos cenários possíveis para apoiar decisões previdenciárias mais seguras." },
  { q: "Quem pode solicitar BPC/LOAS?", a: "O benefício possui critérios legais relacionados à idade ou deficiência e à situação socioeconômica familiar. Cada caso precisa ser analisado individualmente." },
  { q: "Preciso ir presencialmente ao escritório?", a: "A forma de atendimento pode ser alinhada no primeiro contato, conforme a necessidade e a disponibilidade do cliente." },
];
export default function Page() { return <ConversionPage area="PREVIDENCIÁRIO" intro="Orientação jurídica para quem precisa compreender e proteger seus direitos previdenciários." issues={issues} questions={questions} event="previdenciario_cta"/>; }
