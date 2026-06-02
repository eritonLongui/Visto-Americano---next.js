import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Visto Americano | Nostrali",
  description: "Acesso reservado e seletivo para os vistos americanos EB-1 e EB-2 NIW. Realize sua análise prévia de elegibilidade de forma segura e confidencial com nosso corpo técnico e jurídico.",
  keywords: ["Visto Americano", "EB-1", "EB-2 NIW", "Green Card", "Nostrali Cidadania Italiana", "Oceanik Group", "Imigração EUA", "Assessoria de Visto", "Qualificação de Visto"],
  authors: [{ name: "Nostrali & Oceanik Group" }],
  openGraph: {
    title: "Triagem de Visto Americano de Elite | Nostrali & Oceanik",
    description: "Portal restrito para análise de viabilidade migratória nas categorias EB-1 e EB-2 NIW.",
    type: "website",
    locale: "pt_BR",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&family=DM+Serif+Display:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
