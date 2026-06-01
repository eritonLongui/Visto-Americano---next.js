import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Triagem de Visto Americano de Elite | Nostrali & Oceanik Group",
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
      <body>
        {children}
      </body>
    </html>
  );
}
