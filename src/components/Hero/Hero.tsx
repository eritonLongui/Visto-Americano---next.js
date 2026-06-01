"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Hero.css";

interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Sequência de animação GSAP premium de entrada
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.to(badgeRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.2
    })
    .to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.2
    }, "-=0.7")
    .to(descRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.2
    }, "-=0.8")
    .to(actionsRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.2
    }, "-=0.9");
  }, []);

  const handleLearnMoreClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const partnershipSection = document.getElementById("parceria");
    if (partnershipSection) {
      const headerOffset = 80;
      const elementPosition = partnershipSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="hero">
      {/* Elementos Atmosféricos */}
      <div className="hero__background">
        <div className="hero__glow-1" />
        <div className="hero__glow-2" />
        
        {/* Brasão SVG sutil e elegante */}
        <svg 
          className="hero__crest-svg" 
          viewBox="0 0 100 100" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="0.5"
        >
          {/* Fleur-de-lis elegante estilizada */}
          <path d="M50,15 C50,25 45,35 38,42 C44,42 47,38 50,33 C53,38 56,42 62,42 C55,35 50,25 50,15 Z" />
          <path d="M50,45 C50,55 42,65 32,70 C40,68 45,63 48,56 C41,56 34,50 30,42 C38,42 45,46 48,52 C48,42 50,35 50,35 C50,35 52,42 52,52 C55,46 62,42 70,42 C66,50 59,56 52,56 C55,63 60,68 68,70 C58,65 50,55 50,45 Z" />
          <path d="M25,75 Q50,70 75,75" />
          <path d="M50,75 L50,90" />
        </svg>
      </div>

      <div className="container hero__container">
        {/* Badge seletivo */}
        <div className="hero__badge" ref={badgeRef}>
          Clube Privado & Assessoria Reservada
        </div>

        {/* Título Principal */}
        <h1 className="hero__title" ref={titleRef}>
          Realize o sonho do seu visto americano.
          <span>Atendimento exclusivo para casos específicos de visto de elite, com análise prévia de elegibilidade.</span>
        </h1>

        {/* Descrição Sóbria */}
        <p className="hero__description" ref={descRef}>
          Nostrali e Oceanik unem-se em uma operação de alta curadoria técnica para orientar os profissionais de maior relevância do mercado na obtenção de residência permanente nos Estados Unidos.
        </p>

        {/* Ações */}
        <div className="hero__actions" ref={actionsRef}>
          <button 
            className="button-premium button-premium--primary"
            onClick={onOpenModal}
          >
            Iniciar Qualificação
          </button>
          <button 
            className="button-premium button-premium--secondary"
            onClick={handleLearnMoreClick}
          >
            Entenda o Processo
          </button>
        </div>
      </div>
    </section>
  );
}
