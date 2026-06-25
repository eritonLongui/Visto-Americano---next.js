"use client";

import React from "react";
import { ChevronUp } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const originalPosition = element.style.position;
      element.style.position = "static";
      const targetY = element.getBoundingClientRect().top + window.scrollY;
      element.style.position = originalPosition;

      window.scrollTo({
        top: targetY,
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
            <a
              href="https://www.nostrali.com.br/"
              className="footer__logo-link"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            >
              <img
                src="/logo-nostrali-card.svg"
                alt="Logo Nostrali"
                className="footer__logo-img"
              />
            </a>
            <div className="footer__social">
              <a 
                href="https://www.facebook.com/nostralicidadaniaitaliana"
                className="footer__social-link"
              >
                <img
                  src="/icon-social-facebook.png"
                  alt="Facebook Nostrali"
                  className="footer__social-img footer__social-link--facebook"
                />
              </a>
              <a 
                href="https://www.instagram.com/nostralicidadaniaitaliana/"
                className="footer__social-link"
              >
                <img
                  src="/icon-social-instagram.png"
                  alt="Instagram Nostrali"
                  className="footer__social-img footer__social-link--instagram"
                />
              </a>
              <a 
                href="https://www.youtube.com/channel/UC9hMXLoB9aBGJSTG90YrseA"
                className="footer__social-link"
              >
                <img
                  src="/icon-social-youtube.png"
                  alt="Youtube Nostrali"
                  className="footer__social-img footer__social-link--youtube"
                />
              </a>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div className="footer__nav">
            <h4 className="footer__section-title">Navegação</h4>
            <ul className="footer__links">
              <li>
                <a
                  href="#requisitos"
                  className="footer__link"
                  onClick={(e) => handleNavLinkClick(e, "requisitos")}
                >
                  Requisitos
                </a>
              </li>
              <li>
                <a
                  href="#vantagens"
                  className="footer__link"
                  onClick={(e) => handleNavLinkClick(e, "vantagens")}
                >
                  Vantagens
                </a>
              </li>
              <li>
                <a
                  href="#jornada"
                  className="footer__link"
                  onClick={(e) => handleNavLinkClick(e, "jornada")}
                >
                  Como Funciona
                </a>
              </li>
              <li>
                <a
                  href="#assessoria"
                  className="footer__link"
                  onClick={(e) => handleNavLinkClick(e, "assessoria")}
                >
                  A Assessoria
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__back-to-top">
            <button
              className="footer__btt-btn"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Voltar ao topo"
            >
              <ChevronUp size={24} />
              <span>Voltar ao topo</span>
            </button>
          </div>
        </div>

        {/* Rodapé e Disclaimer */}
        <div className="footer__bottom">
          {/* <p className="footer__disclaimer">
            * Isenção de Responsabilidade Legal: A triagem eletrônica e a análise prévia de elegibilidade promovidas neste site possuem caráter puramente consultivo e informativo, baseadas nos critérios fornecidos pelo usuário. Esta análise não constitui serviço de aconselhamento jurídico definitivo e não garante, sob qualquer hipótese, a aprovação de vistos, petições ou benefícios migratórios por parte dos Serviços de Cidadania e Imigração dos Estados Unidos (USCIS) ou do Departamento de Estado Americano. Os casos aceitos para assessoria passam por contratação jurídica formal individualizada.
          </p> */}

          <div className="footer__copyright">
            <span>© {new Date().getFullYear()} Gruppo Nostrali | Todos os direitos reservados.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
