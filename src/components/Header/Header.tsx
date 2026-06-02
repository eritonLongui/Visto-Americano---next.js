"use client";

import React, { useState } from "react";
import "./Header.css";

interface HeaderProps {
  onOpenModal: () => void;
}

export default function Header({ onOpenModal }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const element = document.getElementById(targetId);
    if (element) {
      // Como o header está no fluxo (não fixo), rolamos direto para o elemento!
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <header className="header">
      <div className="container header__container">
        {/* Logotipo Oficial da Parceria em Vetor */}
        <a href="#" className="header__logo-link" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <img 
            src="/logo-partnership.svg" 
            alt="Nostrali em parceria com Oceanik" 
            className="header__logo-img"
          />
        </a>

        {/* Botão de Toggle Mobile */}
        <button 
          className="header__mobile-toggle" 
          onClick={toggleMobileMenu}
          aria-label="Alternar Menu"
        >
          <span 
            className="header__mobile-bar" 
            style={{ 
              transform: isMobileMenuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" 
            }}
          />
          <span 
            className="header__mobile-bar" 
            style={{ 
              opacity: isMobileMenuOpen ? 0 : 1 
            }}
          />
          <span 
            className="header__mobile-bar" 
            style={{ 
              transform: isMobileMenuOpen ? "rotate(-45deg) translate(6px, -7px)" : "none" 
            }}
          />
        </button>

        {/* Navegação */}
        <nav className={`header__nav ${isMobileMenuOpen ? "header__nav--open" : ""}`}>
          <ul className="header__nav-list">
            <li>
              <a 
                href="#requisitos" 
                className="header__nav-link"
                onClick={(e) => handleNavLinkClick(e, "requisitos")}
              >
                Requisitos
              </a>
            </li>
            <li>
              <a 
                href="#parceria" 
                className="header__nav-link"
                onClick={(e) => handleNavLinkClick(e, "parceria")}
              >
                A Parceria
              </a>
            </li>
            <li>
              <a 
                href="#jornada" 
                className="header__nav-link"
                onClick={(e) => handleNavLinkClick(e, "jornada")}
              >
                Como Funciona
              </a>
            </li>
          </ul>
          
          <button 
            className="button-premium button-premium--primary header__cta-btn"
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenModal();
            }}
          >
            Quero saber se me qualifico!
          </button>
        </nav>
      </div>
    </header>
  );
}
