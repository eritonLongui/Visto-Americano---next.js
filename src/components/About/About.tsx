import "./About.css";

export default function About() {
    return (
        <section className="about-section" id="assessoria">
            <img
                src="/bandeira-pendurada.png"
                alt="Bandeira dos Estados Unidos pendurada"
                className="about-section__flag"
            />
            <img
                src="/logo metade.svg"
                alt="Logo da Nostrali dividido ao meio"
                className="about-section__shape"
            />

            <div className="about__header reveal-on-scroll">
                <h2 className="about__title">Expertise para te assessorar no sonho americano!</h2>
            </div>

            <div className="about-section__content">
                <div className="container about__content reveal-on-scroll">
                    <p className="about__description">
                        Com escritórios no Brasil e na Itália, a Nostrali Cidadania Italiana orienta e assessora cidadãos italianos e seus descendentes em procedimentos administrativos e jurídicos para o reconhecimento da cidadania italiana. Mais de 30 mil descendentes já confiaram na Nostrali para se conectarem às raízes.
                    </p>
                    <p className="about__description">
                        Agora, com parceiros que tem mais de 20 anos de experiência no mercado de mobilidade internacional, ampliamos nossos serviços para auxiliar você com um visto americano.
                    </p>
                </div>

                {/* Grid dos Cards */}
                <div className="about__grid">
                    <div className="about__card reveal-on-scroll">
                        <img src="/about1.png" alt="Ícone de agilidade de processo" className="about__card-icon" />
                        <h4 className="about__card-title">
                            Agilidade para
                            <br />
                            montagem do processo
                        </h4>
                    </div>
                    <div className="about__card reveal-on-scroll">
                        <img src="/about2.png" alt="Ícone de atendente" className="about__card-icon" />
                        <h4 className="about__card-title">Atendimento personalizado</h4>
                    </div>
                    <div className="about__card reveal-on-scroll">
                        <img src="/about3.png" alt="Ícone de pacote completo" className="about__card-icon" />
                        <h4 className="about__card-title">
                            Pacote completo com
                            <br />
                            tudo o que você precisa
                        </h4>
                    </div>
                </div>
            </div>
        </section>
    );
}
