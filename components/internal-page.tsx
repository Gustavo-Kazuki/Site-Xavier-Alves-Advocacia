import { SiteHeader } from "./site-header";
import { Footer } from "./footer";
import { SectionLabel } from "./ui-parts";
import { MotionSystem } from "./motion-system";

export function InternalPage({ eyebrow, title, intro, children }: { eyebrow: string; title: React.ReactNode; intro: React.ReactNode; children?: React.ReactNode }) {
  return <div><MotionSystem/><SiteHeader/><main><section className="internal-hero"><SectionLabel>{eyebrow}</SectionLabel><h1>{title}</h1></section><section className="internal-content section-pad"><p>{intro}</p>{children}</section></main><Footer/></div>;
}
