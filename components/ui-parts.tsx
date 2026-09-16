import Link from "next/link";

export function SectionLabel({ number, children }: { number?: string; children: React.ReactNode }) {
  return <div className="section-label">{number && <span>{number}</span>}<p>{children}</p></div>;
}
export function ArrowLink({ href, children, event }: { href: string; children: React.ReactNode; event?: string }) {
  return <Link href={href} className="arrow-link" data-event={event}><span>{children}</span><i>↗</i></Link>;
}
