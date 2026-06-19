import React from "react";
import "./Partnership.css";

interface PartnershipProps {
  onOpenModal: () => void;
}

const benefits = [
  "Concedem residência permanente legal (green card)",
  "Não exigem patrocinador ou oferta de trabalho",
  "Não é necessário fluência em inglês",
  "Inclusão de cônjuge e filhos menores de 21 anos",
  "Não necessita de investimento financeiro mínimo no país",
  "Possibilidade de taxa preferencial para análise em 15 dias",
];

export default function Partnership({ onOpenModal }: PartnershipProps) {
  return (
    <section className="partnership partnership-sticky" id="parceria">
      <div className="partnership__divider"></div>
      <img
        src="/mapa europa.svg"
        alt="mapa da europa estilizado"
        className="partnership__shape partnership__shape--left"
      />
      <img
        src="/mapa america.svg"
        alt="mapa da america estilizado"
        className="partnership__shape partnership__shape--right"
      />

      <img
        src="/estatua-da-liberdade.png"
        alt="Foto da estatua da liberdade"
        className="partnership__shape partnership__shape--liberty"
      />

      <div className="container partnership__container">
        {/* Cabeçalho */}
        <div className="partnership__header reveal-on-scroll">
          <h2 className="partnership__title">
            Os melhores vistos para morar nos Estados Unidos
          </h2>
        </div>

        {/* Cards de Benefícios */}
        <div className="partnership__benefits reveal-on-scroll">
          {benefits.map((item, index) => (
            <div key={index} className="partnership__benefit">
              <div>
                <img
                  src="/icon-topic.svg"
                  alt="Ícone de diamante"
                  className="partnership__benefit-icon"
                />
                <span className="partnership__benefit-text">
                  {item}
                </span>
              </div>

              <div>
                <span className="partnership__benefit-line"></span>
                <img className="partnership__benefit-logo" src="/logo-red.svg" alt="Logo da Nostrali" />
              </div>
            </div>
          ))}
        </div>

        {/* Rodapé seção com botão vermelho */}
        <button
          className="button-premium partnership__footer-btn reveal-on-scroll"
          onClick={onOpenModal}
        >
          Quero saber se posso aplicar
        </button>
      </div>
    </section>
  );
}
