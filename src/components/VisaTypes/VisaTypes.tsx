"use client";

import React from "react";
import "./VisaTypes.css";

interface VisaTypesProps {
  onOpenModal: () => void;
}

export default function VisaTypes({ onOpenModal }: VisaTypesProps) {
  return (
    <section className="visa-types visa-types-sticky" id="requisitos">
      <img
        src="/logo metade.svg"
        alt="Logo da Nostrali dividido ao meio"
        className="visa-types__shape visa-types__shape--left"
      />

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
              Profissionais que se destacam em suas áreas de atuação, dos executivos aos pesquisadores e acadêmicos.
            </p>
            <p className="visa-types__card-description">
              Exige reconhecimento e premiações, artigos publicados, papel de liderança, entre outros.
            </p>
          </div>

          {/* Card EB-2 */}
          <div className="visa-types__card reveal-on-scroll">
            <div className="visa-types__card-header">
              <h3 className="visa-types__card-name visa-types__card-name--eb2">EB-2</h3>
              <span className="visa-types__card-badge visa-types__card-badge--eb2">
                Isenção de Interesse National
              </span>
            </div>
            <p className="visa-types__card-description">
              Profissionais com no mínimo 5 anos de atuação em áreas de interesse para os Estados Unidos, como tecnologia, saúde, ciências ou negócios.
            </p>
            <p className="visa-types__card-description">
              Ideal ter pós-graduação ou mestrado e atender pelo menos 3 dos 7 requisitos do governo.
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
