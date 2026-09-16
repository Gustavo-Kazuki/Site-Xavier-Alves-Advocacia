"use client";

import Link from "next/link";
import { SiteHeader } from "./site-header";
import { MotionSystem } from "./motion-system";
import { ArrowLink, SectionLabel } from "./ui-parts";
import { ContactForm } from "./contact-form";
import { Footer } from "./footer";

const practices = [
  { n: "01", title: "DIREITO PREVIDENCIÁRIO", text: "Orientação para compreender benefícios, planejar decisões e proteger direitos previdenciários.", href: "/previdenciario", image: "/images/IMG_7354.webp" },
  { n: "02", title: "DIREITO TRABALHISTA", text: "Análise cuidadosa das relações de trabalho, com clareza sobre os caminhos possíveis.", href: "/trabalhista", image: "/images/IMG_7353.webp" },
  { n: "03", title: "TRABALHISTA EMPRESARIAL", text: "Atuação preventiva para decisões mais seguras e relações de trabalho bem conduzidas.", href: "/trabalhista#empresas", image: "/images/IMG_7357.webp" },
];

export function HomeExperience() {
  return <div className="site-shell">
    <MotionSystem /><SiteHeader dark />
    <main>
      <section className="hero">
        <div className="hero-visual"><img src="/images/IMG_7357.webp" alt="As advogadas da Xavier & Alves no escritório"/><div className="hero-overlay"/></div>
        <div className="hero-monogram" aria-hidden="true">XA</div>
        <div className="hero-content">
          <div className="hero-kicker">ADVOCACIA PREVIDENCIÁRIA E TRABALHISTA</div>
          <div className="hero-line"/>
          <h1 className="hero-title"><span>XAVIER <i>&</i> ALVES</span><span>ADVOCACIA</span></h1>
          <div className="hero-copy"><h2>Direito com estratégia,<br/>proximidade e propósito.</h2><p>Orientação jurídica para decisões mais seguras, com escuta atenta e análise individual.</p><div className="hero-actions"><Link className="micro-button micro-button--light" href="#atuacao"><span>CONHEÇA NOSSA ATUAÇÃO ↓</span><span>CONHEÇA NOSSA ATUAÇÃO ↓</span></Link><ArrowLink href="/contato">Fale conosco</ArrowLink></div></div>
        </div>
        <span className="hero-scroll">ROLE PARA CONHECER <i>↓</i></span>
      </section>

      <section className="human-section section-pad">
        <SectionLabel number="01">NOSSA FORMA DE ATUAR</SectionLabel>
        <div className="human-grid"><h2 data-reveal>POR TRÁS<br/>DE CADA<br/><em>PROCESSO,</em><br/>EXISTE UMA<br/>HISTÓRIA.</h2><div className="line-track" data-line-grow /><div className="human-copy" data-reveal><span>Direito é sobre pessoas.</span><p>Cada situação jurídica carrega um contexto, um impacto e decisões que não podem ser tratadas de forma automática. Por isso, unimos rigor técnico, comunicação clara e cuidado em cada etapa.</p><ArrowLink href="/sobre">Conheça o escritório</ArrowLink></div></div>
      </section>

      <section className="practice-section section-pad" id="atuacao">
        <div className="practice-heading"><SectionLabel number="02">COMO PODEMOS AJUDAR</SectionLabel><h2 data-reveal>ÁREAS DE<br/><em>ATUAÇÃO</em></h2></div>
        <div className="practice-list">{practices.map((practice) => <Link href={practice.href} className="practice-row" key={practice.n}><span>{practice.n}</span><h3>{practice.title}</h3><p>{practice.text}</p><i>↗</i><img src={practice.image} alt="" aria-hidden="true"/></Link>)}</div>
      </section>

      <section className="xa-transition" aria-label="Xavier e Alves"><div className="xa-sticky"><span className="xa-left">X</span><span className="xa-right">A</span><p>Precisão que orienta.<br/>Cuidado que acompanha.</p></div></section>

      <section className="office-section section-pad">
        <div className="office-copy"><SectionLabel number="03">O ESCRITÓRIO</SectionLabel><h2 data-reveal>UM<br/>COMPROMISSO<br/><em>EM COMUM.</em></h2><p data-reveal>Na busca pela justiça e pela defesa dos direitos, compartilhamos uma visão: exercer a advocacia com integridade, excelência e presença verdadeira ao lado de cada cliente.</p><ArrowLink href="/sobre">Nossa essência</ArrowLink></div>
        <figure className="office-image parallax-image"><img src="/images/IMG_7357.webp" alt="As profissionais da Xavier & Alves Advocacia"/><figcaption>XAVIER & ALVES · ADVOCACIA</figcaption></figure>
      </section>

      <section className="professionals section-pad">
        <SectionLabel number="04">PROFISSIONAIS</SectionLabel>
        <div className="professional-layout">
          <div className="professional-photo parallax-image"><img src="/images/IMG_7352.webp" alt="Dayanne Alves, advogada"/></div>
          <article data-reveal><span>01 / 02</span><h2>DAYANNE<br/><em>ALVES</em></h2><p>Atuação voltada ao Direito Previdenciário e Trabalhista, com abordagem estratégica, conhecimento jurídico e comunicação empática.</p><small>Informações profissionais detalhadas a validar com o escritório.</small></article>
          <div className="professional-photo professional-photo--second parallax-image"><img src="/images/IMG_7357.webp" alt="Dayane Xavier, advogada, ao lado da sócia"/></div>
          <article data-reveal><span>02 / 02</span><h2>DAYANE<br/><em>XAVIER</em></h2><p>Atuação em Direito Trabalhista e Previdenciário, guiada pelo compromisso com a advocacia, a justiça e uma orientação próxima.</p><small>Informações profissionais detalhadas a validar com o escritório.</small><ArrowLink href="/profissionais">Conheça as profissionais</ArrowLink></article>
        </div>
      </section>

      <section className="manifesto section-pad"><SectionLabel number="05">NOSSO MANIFESTO</SectionLabel><h2><span className="manifesto-word">JUNTAS,</span><span className="manifesto-word">FORTES E</span><span className="manifesto-word">DETERMINADAS.</span></h2><p>Compromisso para entender. Estratégia para orientar. Cuidado para acompanhar. Uma advocacia construída para proteger direitos com clareza e presença.</p></section>

      <section className="content-section section-pad">
        <div><SectionLabel number="06">CONTEÚDO</SectionLabel><h2 data-reveal>INFORMAÇÃO<br/>TAMBÉM É<br/><em>DIREITO.</em></h2></div>
        <div className="articles"><article><span>01</span><small>PREVIDENCIÁRIO</small><h3>Benefício negado pelo INSS: quais caminhos podem ser avaliados?</h3><time>CONTEÚDO EM PREPARAÇÃO</time></article><article><span>02</span><small>TRABALHISTA</small><h3>Rescisão do contrato: pontos que merecem atenção.</h3><time>CONTEÚDO EM PREPARAÇÃO</time></article><ArrowLink href="/conteudos">Ver todos os conteúdos</ArrowLink></div>
      </section>

      <section className="final-cta section-pad"><div><SectionLabel number="07">VAMOS CONVERSAR</SectionLabel><h2>PRECISA ENTENDER<br/>MELHOR OS SEUS<br/><em>DIREITOS?</em></h2><p>Conte-nos brevemente sua situação. Nossa equipe irá orientar os próximos passos possíveis.</p></div><ContactForm /></section>
    </main>
    <Footer />
  </div>;
}
