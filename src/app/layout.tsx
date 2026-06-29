import type { Metadata } from "next";
import { Cairo, DM_Serif_Display } from 'next/font/google';
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://visto-americano-next-js.vercel.app/"),
  title: "Visto Americano | Nostrali",
  description: "Acesso reservado e seletivo para os vistos americanos EB-1 e EB-2 NIW. Realize sua análise prévia de elegibilidade de forma segura e confidencial com nosso corpo técnico e jurídico.",
  keywords: ["Visto Americano", "EB-1", "EB-2 NIW", "Green Card", "Nostrali Cidadania Italiana", "Imigração EUA", "Assessoria de Visto", "Qualificação de Visto"],
  authors: [{ name: "Gruppo Nostrali" }],
  openGraph: {
    title: "Vistos Americanos EB-1 e EB-2 NIW",
    description: "Formulário de qualificação de possibilidade de vistos nas categorias EB-1 e EB-2 NIW.",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vistos Americanos EB-1 e EB-2 NIW",
      },
    ],
  }
};

export const cairo = Cairo({
  subsets: ['latin'],
  variable: '--font-body',
});

export const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-title',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${cairo.variable} ${dmSerif.variable}`}>
        {children}
      </body>
    </html>
  );
}
