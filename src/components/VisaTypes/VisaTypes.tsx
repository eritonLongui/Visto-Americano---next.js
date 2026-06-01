import React from "react";
import "./VisaTypes.css";

interface VisaTypesProps {
  onOpenModal: () => void;
}

export default function VisaTypes({ onOpenModal }: VisaTypesProps) {
  return (
    <section className="visa-types" id="vistos">
      <div className="container">
        {/* Cabeçalho da Seção */}
        <div className="visa-types__header reveal-on-scroll">
          <span className="visa-types__subtitle">Modalidades Exclusivas</span>
          <h2 className="visa-types__title">Vistos de Elite Americanos</h2>
          <p className="visa-types__description">
            Trabalhamos cirurgicamente com as duas vias migratórias de maior prestígio e relevância técnica. Ambas concedem o Green Card (Residência Permanente) sem a necessidade de um patrocinador americano (Job Offer), baseando-se estritamente no mérito e conquistas do aplicante.
          </p>
        </div>

        {/* Grid dos Dois Vistos */}
        <div className="visa-types__grid">
          {/* Card EB-1 */}
          <div className="visa-types__card visa-types__card--eb1 reveal-on-scroll">
            <div>
              <span className="visa-types__card-badge">Habilidade Extraordinária</span>
              <h3 className="visa-types__card-name">EB-1A</h3>
              <p className="visa-types__card-fullName">Employment-Based First Preference</p>
              <p className="visa-types__card-description">
                Destinado a indivíduos que alcançaram o topo absoluto em suas respectivas áreas de atuação (ciências, artes, educação, negócios ou atletismo), com reconhecimento nacional ou internacional sustentado.
              </p>
            </div>
            
            <div>
              <div className="visa-types__card-specs">
                <div className="visa-types__spec-group">
                  <span className="visa-types__spec-label">Nível de Exigência</span>
                  <span className="visa-types__spec-value">Extremamente Elevado (Topo de Carreira)</span>
                </div>
                <div className="visa-types__spec-group">
                  <span className="visa-types__spec-label">Perfil Ideal</span>
                  <span className="visa-types__spec-value">Diretores C-Level, Cientistas Premiados, Artistas com Amplo Portfólio, Fundadores de Startups de Sucesso.</span>
                </div>
              </div>
              <button 
                className="button-premium button-premium--primary visa-types__cta"
                onClick={onOpenModal}
              >
                Verificar Elegibilidade para EB-1
              </button>
            </div>
          </div>

          {/* Card EB-2 NIW */}
          <div className="visa-types__card visa-types__card--eb2 reveal-on-scroll">
            <div>
              <span className="visa-types__card-badge">Interesse Nacional</span>
              <h3 className="visa-types__card-name">EB-2 NIW</h3>
              <p className="visa-types__card-fullName">National Interest Waiver</p>
              <p className="visa-types__card-description">
                Voltado para profissionais altamente qualificados cuja atuação nos Estados Unidos seja de mérito substancial e importância nacional, gerando impactos positivos evidentes no desenvolvimento socioeconômico do país.
              </p>
            </div>

            <div>
              <div className="visa-types__card-specs">
                <div className="visa-types__spec-group">
                  <span className="visa-types__spec-label">Nível de Exigência</span>
                  <span className="visa-types__spec-value">Elevado (Mestre/PhD ou Habilidade Excepcional)</span>
                </div>
                <div className="visa-types__spec-group">
                  <span className="visa-types__spec-label">Perfil Ideal</span>
                  <span className="visa-types__spec-value">Engenheiros Sênior, Profissionais de TI/IA, Pesquisadores Acadêmicos, Médicos, Especialistas em Finanças.</span>
                </div>
              </div>
              <button 
                className="button-premium button-premium--primary visa-types__cta"
                onClick={onOpenModal}
              >
                Verificar Elegibilidade para EB-2
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
