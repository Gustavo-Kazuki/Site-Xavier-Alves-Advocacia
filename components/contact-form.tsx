"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [started, setStarted] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = `Olá, sou ${form.get("nome")}. Gostaria de orientação sobre ${form.get("assunto")}. ${form.get("mensagem")}`;
    (window as Window & { dataLayer?: unknown[] }).dataLayer?.push({ event: "form_submit" });
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }
  return <form className="contact-form" onSubmit={submit} onFocus={() => { if (!started) { setStarted(true); (window as Window & { dataLayer?: unknown[] }).dataLayer?.push({ event: "form_start" }); } }}>
    <label><span>Nome</span><input name="nome" autoComplete="name" required /></label>
    <label><span>WhatsApp</span><input name="whatsapp" autoComplete="tel" inputMode="tel" required /></label>
    <label><span>Assunto</span><select name="assunto" defaultValue=""><option value="" disabled>Selecione</option><option>Direito Previdenciário</option><option>Direito Trabalhista</option><option>Trabalhista Empresarial</option><option>Outro assunto</option></select></label>
    <label className="form-wide"><span>Conte-nos brevemente</span><textarea name="mensagem" rows={3} /></label>
    <button className="micro-button form-wide" type="submit"><span>INICIAR CONVERSA ↗</span><span>INICIAR CONVERSA ↗</span></button>
    <small className="form-wide">Não envie documentos ou dados sensíveis neste primeiro contato.</small>
  </form>;
}
