"use client";

import React, { useEffect, useRef } from "react";
import { Clock } from "lucide-react";
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
    // Sequência de animação GSAP de entrada
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.to(badgeRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.1
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

  return (
    <section className="hero">
      {/* Elementos Decorativos Abstratos Figma */}
      <div className="hero__shape hero__shape--left" />
      <div className="hero__shape hero__shape--right" />

      <div className="container hero__container">
        {/* Badge superior */}
        <div className="hero__badge-box" ref={badgeRef}>
          <Clock size={14} className="hero__badge-icon" />
          <span>Teste de perfil em menos de 2 minutos</span>
        </div>

        {/* Título Principal Figma */}
        <h1 className="hero__title" ref={titleRef}>
          Conquiste seu visto americano com mais tranquilidade
        </h1>

        {/* Descrição Figma */}
        <p className="hero__description" ref={descRef}>
          Faça a análise de perfil e descubra se os vistos EB-1 ou EB-2 são a melhor escolha para o seu sonho de morar nos Estados Unidos e ter o Green Card. Voltados para profissionais de alto desempenho, são as categorias mais valorizadas de visto para imigração.
        </p>

        {/* Ação */}
        <div className="hero__actions" ref={actionsRef}>
          <button 
            className="button-premium button-premium--primary hero__cta-btn"
            onClick={onOpenModal}
          >
            Quero saber se me qualifico!
          </button>
        </div>
      </div>
    </section>
  );
}
