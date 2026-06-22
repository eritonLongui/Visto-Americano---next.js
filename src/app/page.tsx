"use client";

import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Importando os componentes customizados
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import VisaTypes from "../components/VisaTypes/VisaTypes";
import Partnership from "../components/Partnership/Partnership";
import Process from "../components/Process/Process";
import About from "../components/About/About";
import CtaSection from "../components/CtaSection/CtaSection";
import Footer from "../components/Footer/Footer";
import QualificationModal from "../components/QualificationModal/QualificationModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    // Registrando o ScrollTrigger apenas no lado do cliente
    gsap.registerPlugin(ScrollTrigger);

    // Selecionando todos os elementos com a classe reveal-on-scroll
    const revealElements = document.querySelectorAll(".reveal-on-scroll");

    revealElements.forEach((el) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%", // Dispara quando o topo do elemento chega a 85% da tela
            toggleActions: "play none none none", // Apenas executa uma vez ao entrar
          },
        }
      );
    });

    // Limpeza
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <Header onOpenModal={openModal} />
      <main>
        <Hero onOpenModal={openModal} />
        <VisaTypes onOpenModal={openModal} />
        <Partnership onOpenModal={openModal} />
        <Process />
        <About />
        <CtaSection onOpenModal={openModal} />
      </main>
      <Footer />

      <QualificationModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
