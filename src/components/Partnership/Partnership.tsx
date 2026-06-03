import React from "react";
import "./Partnership.css";

export default function Partnership() {
  return (
    <section className="partnership partnership-sticky" id="parceria">
      <div className="partnership__divider"></div>
      <div className="container partnership__container">
        {/* Cabeçalho */}
        <div className="partnership__header reveal-on-scroll">
          <h2 className="partnership__title">
            Empresas que são referência
          </h2>
          <p className="partnership__description">
            Unidas para te assessorar no <span className="partnership__description--highlight">sonho americano</span>.
          </p>
        </div>

        {/* Grid de Parceria */}
        <div className="partnership__grid">
          {/* Card Nostrali */}
          <div className="partnership__card partnership__card--nostrali reveal-on-scroll">
            <img
              src="/logo-nostrali-card.svg"
              alt="Logo da Nostrali Cidadania Italiana"
              className="partnership__card-logo"
            />
            <p className="partnership__card-text">
              Nostrali em italiano significa <em>"originário da nossa terra"</em>, <em>"nosso"</em>. Com escritórios no Brasil e na Itália, a Nostrali Cidadania Italiana orienta e assessora cidadãos italianos e seus descendentes em procedimentos administrativos e jurídicos para o reconhecimento da cidadania italiana.
            </p>
            <p className="partnership__card-text">
              Mais de 30 mil descendentes já confiaram na Nostrali para se conectarem às raízes.
            </p>
          </div>

          {/* Card Oceanik */}
          <div className="partnership__card partnership__card--oceanik reveal-on-scroll">
            <img
              src="/logo-oceanik-card.svg"
              alt="Logo da Oceanik Group"
              className="partnership__card-logo"
            />
            <p className="partnership__card-text">
              Empresa internacional de mobilidade dedicada a atender clientes interessados em se mudar e fazer negócios nos EUA e em todo o mundo.
            </p>
            <p className="partnership__card-text">
              Conta com uma equipe de profissionais com mais de 20 anos de experiência no mercado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
