import React from "react";
import "./Partnership.css";

export default function Partnership() {
  return (
    <section className="partnership partnership-sticky" id="parceria">
      <div className="container partnership__container">
        {/* Cabeçalho */}
        <div className="partnership__header reveal-on-scroll">
          <h2 className="partnership__title">
            Empresas que são referência, unidas para te assessorar no sonho americano
          </h2>
        </div>

        {/* Grid de Parceria */}
        <div className="partnership__grid">
          {/* Card Nostrali */}
          <div className="partnership__card partnership__card--nostrali reveal-on-scroll">
            <h3 className="partnership__card-title">Nostrali Cidadania Italiana</h3>
            <p className="partnership__card-text">
              Nostrali em italiano significa \"nosso\", \"originário da nossa terra\". Com escritórios no Brasil e na Itália, a Nostrali Cidadania Italiana orienta e assessora cidadãos italianos e seus descendentes em procedimentos administrativos e jurídicos para o reconhecimento da cidadania italiana. Mais de 30 mil descendentes já confiaram na Nostrali para se conectarem às raízes.
            </p>
          </div>

          {/* Card Oceanik */}
          <div className="partnership__card partnership__card--oceanik reveal-on-scroll">
            <h3 className="partnership__card-title">Oceanik Group</h3>
            <p className="partnership__card-text">
              Empresa internacional de mobilidade dedicada a atender clientes interessados em se mudar e fazer negócios nos EUA e em todo o mundo. Conta com uma equipe de profissionais com mais de 20 anos de experiência no mercado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
