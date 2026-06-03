"use client";

import "./CtaSection.css";

interface CtaSectionProps {
    onOpenModal: () => void;
}

export default function CtaSection({ onOpenModal }: CtaSectionProps) {
    return (
        <section className="cta-section">
            <img
                src="/logo metade.svg"
                alt="Logo da Nostrali dividido ao meio"
                className="cta-section__shape"
            />

            <div className="cta-section__content">
                <h2 className="cta-section__title">
                    Dê o primeiro passo rumo ao
                    <br />
                    seu futuro nos Estados Unidos
                </h2>
                <p className="cta-section__description">
                    Clique e faça a análise gratuita de perfil
                </p>
                <div className="cta-section__actions">
                    <button
                        className="button-premium button-premium--primary cta-section__cta-btn"
                        onClick={onOpenModal}
                    >
                        Quero descobrir se sou elegível
                    </button>
                </div>
            </div>
        </section>
    )
}