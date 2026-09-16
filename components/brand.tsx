import Link from "next/link";

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className={`brand ${light ? "brand--light" : ""}`} aria-label="Xavier e Alves Advocacia — início">
      <span className="brand__mark" aria-hidden="true">XA</span>
      <span className="brand__name">XAVIER <i>&</i> ALVES<small>ADVOCACIA</small></span>
    </Link>
  );
}
