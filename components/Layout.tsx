import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <header>
        <div className="header-content">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Smartlocks Logo"
              width={144}
              height={144}
            />
          </Link>
          <span className="space" />
          <Link href="/produkter">Produkter</Link>
          <Link href="/kunder">Kunder</Link>
          <Link href="/om-oss">Om oss</Link>
          <Link href="/tekniken">Tekniken</Link>
          <Link href="/ta-kontakt" className="button">
            Ta kontakt
          </Link>
        </div>
      </header>
      {children}
      <footer></footer>
    </>
  );
}
