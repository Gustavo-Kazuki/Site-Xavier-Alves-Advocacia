import Link from "next/link";
import { Brand } from "./brand";

export function Footer() {
  return <footer className="footer">
    <div className="footer-brand"><Brand light /><p>Direito com estratégia,<br/>proximidade e propósito.</p></div>
    <div><small>NAVEGAÇÃO</small><Link href="/sobre">O Escritório</Link><Link href="/profissionais">Profissionais</Link><Link href="/#atuacao">Áreas de Atuação</Link><Link href="/conteudos">Conteúdos</Link></div>
    <div><small>ATUAÇÃO</small><Link href="/previdenciario">Previdenciário</Link><Link href="/trabalhista">Trabalhista</Link><Link href="/trabalhista#empresas">Trabalhista Empresarial</Link></div>
    <div><small>CONTATO</small><a href="https://wa.me/?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20equipe%20Xavier%20%26%20Alves." data-event="whatsapp_click">WhatsApp ↗</a><a href="https://instagram.com/xaviereaalves.advocacia" target="_blank" rel="noreferrer">Instagram ↗</a><span>[e-mail a confirmar]</span><span>[endereço a confirmar]</span></div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Xavier & Alves Advocacia</span><span>OABs e dados cadastrais a validar</span><Link href="/contato">Privacidade e termos</Link></div>
  </footer>;
}
