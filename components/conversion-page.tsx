"use client";

import { SiteHeader } from "./site-header";
import { MotionSystem } from "./motion-system";
import { SectionLabel } from "./ui-parts";
import { ContactForm } from "./contact-form";
import { Footer } from "./footer";

type ConversionPageProps = {
  area: "PREVIDENCIÁRIO" | "TRABALHISTA";
  intro: string;
  issues: string[];
  questions: { q: string; a: string }[];
  event: string;
};

export function ConversionPage({ area, intro, issues, questions, event }: ConversionPageProps) {
  const isLabor = area === "TRABALHISTA";
  const whatsapp = `https://wa.me/?text=${encodeURIComponent(`Olá, gostaria de conversar com a equipe sobre Direito ${area.toLowerCase()}.`)}`;
  return <div className="landing"><MotionSystem/><SiteHeader compact dark/>
    <main>
      <section className="landing-hero"><div><SectionLabel>ATUAÇÃO JURÍDICA ESPECIALIZADA</SectionLabel><h1>DIREITO<br/><em>{area}</em></h1></div><div className="landing-intro"><h2>{intro}</h2><p>Atendimento realizado pela equipe Xavier & Alves Advocacia, com análise individual e comunicação clara.</p><a className="micro-button micro-button--light" href={whatsapp} data-event={event}><span>FALE COM NOSSA EQUIPE ↗</span><span>FALE COM NOSSA EQUIPE ↗</span></a></div></section>

      <section className="conversion-section section-pad"><div><SectionLabel number="01">IDENTIFIQUE SUA SITUAÇÃO</SectionLabel><h2>{isLabor ? <>QUANDO<br/>PROCURAR<br/><em>ORIENTAÇÃO?</em></> : <>COMO<br/>PODEMOS<br/><em>AJUDAR?</em></>}</h2><p>Algumas das situações que podem ser analisadas pela nossa equipe.</p></div><div className="issue-list">{issues.map((issue, index) => <details key={issue}><summary><span>{String(index + 1).padStart(2, "0")}</span>{issue}<i>+</i></summary><p>Cada caso possui particularidades. Uma análise jurídica é necessária para compreender documentos, contexto e caminhos possíveis.</p></details>)}</div></section>

      <section className="process-section section-pad"><SectionLabel number="02">ATENDIMENTO COM CLAREZA</SectionLabel><h2>SEU CASO COMEÇA<br/>PELA <em>ANÁLISE.</em></h2><div className="process-grid"><article><span>01</span><h3>Entendemos<br/>sua situação</h3></article><article><span>02</span><h3>Analisamos documentos<br/>e histórico</h3></article><article><span>03</span><h3>Orientamos sobre<br/>os caminhos possíveis</h3></article></div></section>

      {isLabor && <section className="company-block section-pad" id="empresas"><div><SectionLabel number="03">PARA EMPRESAS</SectionLabel><h2>PREVENIR TAMBÉM<br/>É UMA FORMA DE<br/><em>PROTEGER.</em></h2><p>Orientação preventiva para relações de trabalho mais seguras e decisões empresariais bem fundamentadas.</p></div><div className="company-services"><span>Consultoria preventiva</span><span>Análise de riscos trabalhistas</span><span>Revisão de procedimentos</span><span>Apoio na gestão das relações de trabalho</span></div></section>}

      <section className="faq-section section-pad"><div><SectionLabel number={isLabor ? "04" : "03"}>DÚVIDAS FREQUENTES</SectionLabel><h2>INFORMAÇÃO<br/>PARA DECIDIR<br/><em>COM SEGURANÇA.</em></h2><p>Conteúdo informativo sujeito à revisão jurídica final do escritório.</p></div><div className="issue-list">{questions.map(({q,a}) => <details key={q}><summary>{q}<i>+</i></summary><p>{a}</p></details>)}</div></section>

      <section className="final-cta section-pad"><div><SectionLabel>NÃO SABE SE O SEU CASO SE ENQUADRA?</SectionLabel><h2>CONTE BREVEMENTE<br/>SUA <em>SITUAÇÃO.</em></h2><p>Converse com nossa equipe para entender os próximos passos possíveis.</p></div><ContactForm/></section>
    </main>
    <Footer/><a className="sticky-cta" href={whatsapp} data-event={event}>FALAR COM A EQUIPE ↗</a>
  </div>;
}
