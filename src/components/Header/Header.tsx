"use client";

import React, { useState, useEffect } from "react";
import "./Header.css";

interface HeaderProps {
  onOpenModal: () => void;
}

export default function Header({ onOpenModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
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
    <header className={`header ${isScrolled ? "header--scrolled" : ""}`}>
      <div className="container header__container">
        {/* Branding Dual */}
        <div className="header__logo">
          <div className="header__brand-nostrali">Nostrali</div>
          <div className="header__brand-divider">
            <span className="header__brand-partnership">em parceria com</span>
          </div>
          <div className="header__brand-oceanik">Oceanik</div>
        </div>

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
                href="#parceria" 
                className="header__nav-link"
                onClick={(e) => handleNavLinkClick(e, "parceria")}
              >
                Parceria
              </a>
            </li>
            <li>
              <a 
                href="#vistos" 
                className="header__nav-link"
                onClick={(e) => handleNavLinkClick(e, "vistos")}
              >
                Vistos de Elite
              </a>
            </li>
            <li>
              <a 
                href="#processo" 
                className="header__nav-link"
                onClick={(e) => handleNavLinkClick(e, "processo")}
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
            Iniciar Qualificação
          </button>
        </nav>
      </div>
    </header>
  );
}
