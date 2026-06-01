import React from "react";
import "./Process.css";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Análise de Elegibilidade",
      text: "Preencha o formulário eletrônico fornecendo dados profissionais preliminares em nosso portal seguro."
    },
    {
      number: "02",
      title: "Triagem Algorítmica",
      text: "Nosso sistema valida instantaneamente se o perfil atende aos critérios quantitativos iniciais."
    },
    {
      number: "03",
      title: "Auditoria Jurídica",
      text: "Aprovado na triagem, suas informações passam por uma avaliação de viabilidade técnica com nosso corpo jurídico."
    },
    {
      number: "04",
      title: "Acesso Reservado",
      text: "Havendo viabilidade real, você é imediatamente convidado a prosseguir para o WhatsApp pessoal do especialista."
    },
    {
      number: "05",
      title: "Assessoria Individual",
      text: "Conduzimos um atendimento consultivo em ambiente confidencial para traçar a melhor tese para seu Green Card."
    }
  ];

  return (
    <section className="process" id="processo">
      <div className="container">
        {/* Cabeçalho da Seção */}
        <div className="process__header reveal-on-scroll">
          <span className="process__subtitle">Processo de Admissão</span>
          <h2 className="process__title">O Caminho para a Assessoria</h2>
          <p className="process__description">
            Nosso método de atendimento preservado é estruturado em etapas claras para garantir que nossa equipe foque energia exclusiva nos perfis com maiores chances de sucesso.
          </p>
        </div>

        {/* Linha do Tempo */}
        <div className="process__timeline">
          {steps.map((step, index) => (
            <div key={index} className="process__step reveal-on-scroll">
              <div className="process__step-number">{step.number}</div>
              <h3 className="process__step-title">{step.title}</h3>
              <p className="process__step-text">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
