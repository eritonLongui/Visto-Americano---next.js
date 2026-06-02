import React from "react";
import "./Process.css";

export default function Process() {
  const steps = [
    {
      number: "1",
      title: "Análise de elegibilidade",
      text: "Após, a análise prévia de perfil, nosso time entrará em contato para alinhar as suas expectativas e entender qual a melhor estratégia migratória para o seu caso."
    },
    {
      number: "2",
      title: "Preparação Documental",
      text: "Você se preocupa com o futuro, nós cuidamos da burocracia. Realizamos toda a análise e preparação documental para dar entrada no pedido do seu visto."
    },
    {
      number: "3",
      title: "Visto solicitado",
      text: "Acompanhamos todo o processo de solicitação do visto para te auxiliar em cada etapa dessa jornada até a aprovação."
    }
  ];

  return (
    <section className="process process-overlay" id="jornada">
      <div className="container process__container">
        {/* Cabeçalho */}
        <div className="process__header reveal-on-scroll">
          <h2 className="process__title">Sua jornada para o Green card começa aqui!</h2>
        </div>

        {/* Grid do Processo */}
        <div className="process__grid">
          {steps.map((step, index) => (
            <div key={index} className="process__step reveal-on-scroll">
              <div className="process__step-badge">
                <span className="process__step-number">{step.number}</span>
              </div>
              <h3 className="process__step-title">{step.title}</h3>
              <p className="process__step-text">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
