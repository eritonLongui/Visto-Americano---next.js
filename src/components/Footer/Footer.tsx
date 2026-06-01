"use client";

import React from "react";
import "./Footer.css";

export default function Footer() {
  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Coluna 1: Branding e Descrição */}
          <div className="footer__branding">
            <div className="footer__logo">
              <span className="footer__brand-nostrali">Nostrali</span>
              <div className="footer__brand-divider" />
              <span className="footer__brand-oceanik">Oceanik</span>
            </div>
            <p className="footer__tagline">
              Parceria estratégica de alta curadoria técnica jurídica para processos de internacionalização e imigração profissional de elite para os Estados Unidos.
            </p>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div>
            <h4 className="footer__section-title">Navegação</h4>
            <ul className="footer__links">
              <li>
                <a 
                  href="#parceria" 
                  className="footer__link"
                  onClick={(e) => handleNavLinkClick(e, "parceria")}
                >
                  A Parceria
                </a>
              </li>
              <li>
                <a 
                  href="#vistos" 
                  className="footer__link"
                  onClick={(e) => handleNavLinkClick(e, "vistos")}
                >
                  Vistos de Elite
                </a>
              </li>
              <li>
                <a 
                  href="#processo" 
                  className="footer__link"
                  onClick={(e) => handleNavLinkClick(e, "processo")}
                >
                  Processo Seletivo
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Contato & Informações */}
          <div>
            <h4 className="footer__section-title">Contatos Corporativos</h4>
            <ul className="footer__links">
              <li className="footer__link">Nostrali Cidadania Italiana</li>
              <li className="footer__link">Oceanik Group Corporate</li>
              <li className="footer__link">Atendimento Reservado por Qualificação</li>
            </ul>
          </div>
        </div>

        {/* Rodapé e Disclaimer */}
        <div className="footer__bottom">
          <p className="footer__disclaimer">
            * Isenção de Responsabilidade Legal: A triagem eletrônica e a análise prévia de elegibilidade promovidas neste site possuem caráter puramente consultivo e informativo, baseadas nos critérios fornecidos pelo usuário. Esta análise não constitui serviço de aconselhamento jurídico definitivo e não garante, sob qualquer hipótese, a aprovação de vistos, petições ou benefícios migratórios por parte dos Serviços de Cidadania e Imigração dos Estados Unidos (USCIS) ou do Departamento de Estado Americano. Os casos aceitos para assessoria passam por contratação jurídica formal individualizada.
          </p>
          
          <div className="footer__copyright">
            <span>© {new Date().getFullYear()} Nostrali & Oceanik Group. Todos os direitos reservados.</span>
            <span>Desenvolvido de forma exclusiva e restrita.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
