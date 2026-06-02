"use client";

import React from "react";
import "./VisaTypes.css";

interface VisaTypesProps {
  onOpenModal: () => void;
}

export default function VisaTypes({ onOpenModal }: VisaTypesProps) {
  return (
    <section className="visa-types" id="requisitos">
      {/* Elementos Decorativos de Fundo (Section 1 Figma) */}
      <svg 
        className="visa-types__decor" 
        viewBox="0 0 100 100" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="0.5"
      >
        <path d="M10,90 C30,70 40,40 30,10 C50,30 60,60 50,90" />
        <path d="M5,80 Q35,60 65,80" />
        <path d="M40,5 C60,25 70,55 60,85 C80,65 90,35 80,5" />
      </svg>

      <div className="container visa-types__container">
        {/* Cabeçalho */}
        <div className="visa-types__header reveal-on-scroll">
          <h2 className="visa-types__title">Quais são os principais requisitos dos vistos imigratórios?</h2>
          <p className="visa-types__description">Você pode estar a alguns cliques do Green Card!</p>
        </div>

        {/* Grid dos Cards de Visto */}
        <div className="visa-types__grid">
          {/* Card EB-1 */}
          <div className="visa-types__card reveal-on-scroll">
            <div className="visa-types__card-header">
              <h3 className="visa-types__card-name visa-types__card-name--eb1">EB-1</h3>
              <span className="visa-types__card-badge visa-types__card-badge--eb1">
                Habilidade Extraordinária
              </span>
            </div>
            <p className="visa-types__card-description">
              Profissionais que se destacam em suas áreas de atuação, dos executivos aos pesquisadores e acadêmicos. Exige reconhecimento e premiações, artigos publicados, papel de liderança, entre outros.
            </p>
          </div>

          {/* Card EB-2 */}
          <div className="visa-types__card reveal-on-scroll">
            <div className="visa-types__card-header">
              <h3 className="visa-types__card-name visa-types__card-name--eb2">EB-2</h3>
              <span className="visa-types__card-badge visa-types__card-badge--eb2">
                National Interest Waiver
              </span>
            </div>
            <p className="visa-types__card-description">
              Profissionais com no mínimo 5 anos de atuação em áreas de interesse para os Estados Unidos, como tecnologia, saúde, ciências ou negócios. Ideal ter pós-graduação ou mestrado e atender pelo menos 3 dos 7 requisitos do governo.
            </p>
          </div>
        </div>

        {/* Rodapé figma com botão verde */}
        <div className="visa-types__footer reveal-on-scroll">
          <span className="visa-types__footer-text">Acredita atender aos requisitos?</span>
          <button 
            className="button-premium button-premium--green visa-types__footer-btn"
            onClick={onOpenModal}
          >
            Faça o teste de perfil!
          </button>
        </div>
      </div>
    </section>
  );
}
