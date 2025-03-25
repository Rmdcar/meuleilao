"use client"; // Adicione esta linha no topo do arquivo para usar hooks do React


import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { useRef } from "react"; // Importe useRef

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menuToggleRef = useRef<HTMLInputElement>(null); // Ref para o checkbox

  // Função para fechar o menu ao clicar em um link
  const closeMenu = () => {
    if (menuToggleRef.current) {
      menuToggleRef.current.checked = false; // Desmarca o checkbox
    }
  };

  return (
    <html lang="pt-br">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flicker-alerts/style.css"></link>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <nav className="initialNav">
          <div className="section1">
            <Link href="/" onClick={closeMenu}>Meu Leilão</Link>
          </div>
          <input
            type="checkbox"
            id="menuToggle"
            className="menuToggle"
            ref={menuToggleRef} // Ref para o checkbox
          />
          <label htmlFor="menuToggle" className="menuIcon">
            <span></span>
            <span></span>
            <span></span>
          </label>
          <div className="section2">
            <Link href="/calculadora" onClick={closeMenu}>
              Calculadora de viabilidade
            </Link>
            <Link href="/pesquisa" onClick={closeMenu}>
              Pesquisa de imóveis
            </Link>
            <Link href="/registro" onClick={closeMenu}>
              Valor Registro
            </Link>
            <Link href="/sobre" onClick={closeMenu}>
              Sobre
            </Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}