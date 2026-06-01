import React from "react";
import { Check } from "lucide-react";
import "./Partnership.css";

export default function Partnership() {
  return (
    <section className="partnership" id="parceria">
      <div className="container">
        {/* Cabeçalho de Introdução */}
        <div className="partnership__header reveal-on-scroll">
          <span className="partnership__subtitle">A União de Duas Forças</span>
          <h2 className="partnership__title">Autoridade Internacional Comprovada</h2>
          <p className="partnership__description">
            A parceria técnica entre a Nostrali Cidadania Italiana e o Oceanik Group reúne especialistas jurídicos e consultivos globais de altíssimo escalão, dedicados a construir soluções migratórias sólidas e seguras.
          </p>
        </div>

        {/* Grid de Apresentação das Empresas */}
        <div className="partnership__grid">
          {/* Card Nostrali */}
          <div className="partnership__card partnership__card--nostrali reveal-on-scroll">
            <h3 className="partnership__card-logo partnership__card-logo--nostrali">Nostrali</h3>
            <p className="partnership__card-text">
              Com sólida reputação internacional e vasta experiência jurídica, a Nostrali é sinônimo de excelência na obtenção de cidadanias e processos de internacionalização na Europa. Traz ao projeto um corpo jurídico extremamente rigoroso, garantindo que cada caso atenda aos mais altos padrões de conformidade burocrática.
            </p>
            <ul className="partnership__highlight-list">
              <li className="partnership__highlight-item">
                <Check size={18} className="partnership__highlight-icon" />
                <span>Mais de uma década de segurança jurídica internacional</span>
              </li>
              <li className="partnership__highlight-item">
                <Check size={18} className="partnership__highlight-icon" />
                <span>Análise documental extremamente criteriosa e precisa</span>
              </li>
              <li className="partnership__highlight-item">
                <Check size={18} className="partnership__highlight-icon" />
                <span>Atendimento de alto padrão, reservado e consultivo</span>
              </li>
            </ul>
          </div>

          {/* Card Oceanik */}
          <div className="partnership__card partnership__card--oceanik reveal-on-scroll">
            <h3 className="partnership__card-logo partnership__card-logo--oceanik">Oceanik Group</h3>
            <p className="partnership__card-text">
              O Oceanik Group é referência em estruturação de carreira, internacionalização de negócios e assessoria especializada para o mercado norte-americano. Com equipes in-loco nos EUA, o grupo atua no desenvolvimento do pleito migratório com foco em perfis de alta performance de negócios, engenharia e ciências.
            </p>
            <ul className="partnership__highlight-list">
              <li className="partnership__highlight-item">
                <Check size={18} className="partnership__highlight-icon" />
                <span>Suporte completo na transição de carreira para os EUA</span>
              </li>
              <li className="partnership__highlight-item">
                <Check size={18} className="partnership__highlight-icon" />
                <span>Especialistas na construção de teses migratórias sólidas</span>
              </li>
              <li className="partnership__highlight-item">
                <Check size={18} className="partnership__highlight-icon" />
                <span>Conexões diretas com o mercado corporativo americano</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
