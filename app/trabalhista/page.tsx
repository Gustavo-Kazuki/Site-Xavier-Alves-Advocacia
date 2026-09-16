import type { Metadata } from "next";
import { ConversionPage } from "@/components/conversion-page";

export const metadata: Metadata = { title: "Direito Trabalhista", description: "Orientação jurídica para trabalhadores e atuação preventiva para empresas.", alternates: { canonical: "/trabalhista" } };
const issues = ["Verbas rescisórias", "Demissão", "Horas extras", "Vínculo empregatício", "FGTS e férias", "Insalubridade e periculosidade", "Assédio no ambiente de trabalho", "Acidente de trabalho", "Estabilidade", "Direitos relacionados à gestação", "Análise de rescisão"];
const questions = [
  { q: "Quais documentos ajudam na análise trabalhista?", a: "Contratos, holerites, registros de jornada, comunicações e documentos de rescisão podem ser relevantes, conforme o caso." },
  { q: "Como saber se as verbas rescisórias estão corretas?", a: "A conferência depende do tipo e tempo de contrato, motivo do desligamento, pagamentos e demais particularidades da relação de trabalho." },
  { q: "Quando a empresa deve buscar orientação preventiva?", a: "A orientação pode apoiar a revisão de procedimentos, a gestão de riscos e decisões que afetam as relações de trabalho." },
  { q: "É possível receber orientação à distância?", a: "A forma de atendimento pode ser definida no primeiro contato, de acordo com a situação apresentada." },
];
export default function Page() { return <ConversionPage area="TRABALHISTA" intro="Informação, estratégia e orientação jurídica para relações de trabalho." issues={issues} questions={questions} event="trabalhista_cta"/>; }
