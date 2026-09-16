"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Brand } from "./brand";

const links = [
  ["O Escritório", "/sobre"], ["Áreas de Atuação", "/#atuacao"], ["Profissionais", "/profissionais"],
  ["Conteúdos", "/conteudos"], ["Contato", "/contato"],
];

export function SiteHeader({ compact = false, dark = false }: { compact?: boolean; dark?: boolean }) {
  const [open, setOpen] = useState(false);
  const menu = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!menu.current) return;
    const panels = menu.current.querySelectorAll(".menu-panel");
    const items = menu.current.querySelectorAll(".menu-link");
    if (open) {
      document.body.classList.add("menu-open");
      gsap.set(menu.current, { autoAlpha: 1, pointerEvents: "auto" });
      gsap.fromTo(panels, { yPercent: 105 }, { yPercent: 0, duration: .65, stagger: .07, ease: "power3.inOut" });
      gsap.fromTo(items, { y: 35, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: .55, stagger: .06, delay: .26, ease: "power2.out" });
    } else {
      document.body.classList.remove("menu-open");
      gsap.to(menu.current, { autoAlpha: 0, pointerEvents: "none", duration: .25 });
    }
    return () => document.body.classList.remove("menu-open");
  }, [open]);
  return <>
    <header className={`site-header ${dark ? "site-header--dark" : ""} ${compact ? "site-header--compact" : ""}`}>
      <Brand light={dark} />
      {!compact && <nav className="desktop-nav" aria-label="Navegação principal">{links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav>}
      <div className="header-actions">
        <Link className="micro-button header-cta" href="/contato" data-event="whatsapp_click"><span>FALE CONOSCO ↗</span><span>FALE CONOSCO ↗</span></Link>
        {!compact && <button className="menu-trigger" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu"><span>{open ? "FECHAR" : "MENU"}</span><i /><i /></button>}
      </div>
    </header>
    {!compact && <div className="mobile-menu" id="mobile-menu" ref={menu} aria-hidden={!open}>
      <div className="menu-panels" aria-hidden="true"><i className="menu-panel"/><i className="menu-panel"/><i className="menu-panel"/><i className="menu-panel"/></div>
      <nav aria-label="Navegação mobile">{links.map(([label, href], index) => <Link className="menu-link" key={href} href={href} onClick={() => setOpen(false)}><small>0{index + 1}</small>{label}</Link>)}</nav>
      <p className="menu-link">Estratégia jurídica.<br/>Cuidado humano.</p>
    </div>}
  </>;
}
