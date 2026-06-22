"use client";

import React, { useState } from "react";
import { X, CheckCircle, Puzzle, ChevronRight, ChevronLeft } from "lucide-react";
import questionsData from "../../data/questions.json";
import "./QualificationModal.css";

interface QualificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface QuestionOption {
  label: string;
  value: string;
  score: number;
}

interface Question {
  id: string;
  section: string;
  type: string;
  question: string;
  placeholder?: string;
  options?: QuestionOption[];
  required: boolean;
}

export default function QualificationModal({ isOpen, onClose }: QualificationModalProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 6;

  const [formData, setFormData] = useState<Record<string, any>>({
    education: "",
    experience: "",
    field_of_study: "",
    awards: "",
    leadership: "",
    financial: "",
    full_name: "",
    email: "",
    phone: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showToastError, setShowToastError] = useState(false);
  const [showContactErrors, setShowContactErrors] = useState(false);
  const [eligibilityResult, setEligibilityResult] = useState<"approved" | "rejected" | null>(null);
  const [totalScore, setTotalScore] = useState(0);

  if (!isOpen) return null;

  const getQuestionsForStep = (step: number): Question[] => {
    const typedQuestions = questionsData as Question[];
    return typedQuestions.filter(q => q.section === `step${step}`);
  };

  const handleInputChange = (id: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    if (errors[id]) {
      setErrors(prev => {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      });
    }
  };

  const validateStep = (step: number): boolean => {
    const stepQuestions = getQuestionsForStep(step);
    const newErrors: Record<string, string> = {};
    let isValid = true;

    stepQuestions.forEach(q => {
      if (q.required) {
        const val = formData[q.id];
        if (!val || (Array.isArray(val) && val.length === 0)) {
          isValid = false;
        }
      }
    });

    return isValid;
  };

  const validateContactData = (): boolean => {
    const newErrors: Record<string, string> = {};
    let isValid = true;

    if (!formData.full_name) {
      newErrors.full_name = "O nome é obrigatório.";
      isValid = false;
    }
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Por favor, insira um e-mail válido.";
      isValid = false;
    }
    if (!formData.phone) {
      newErrors.phone = "O telefone é obrigatório.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setShowToastError(false);
      if (currentStep < totalSteps) {
        setCurrentStep(prev => prev + 1);
      } else {
        processEligibility();
      }
    } else {
      setShowToastError(false);
      setTimeout(() => setShowToastError(true), 10);
      setTimeout(() => setShowToastError(false), 2000);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const processEligibility = () => {
    const typedQuestions = questionsData as Question[];
    let score = 0;

    typedQuestions.forEach(q => {
      const selectedValue = formData[q.id];
      const option = q.options?.find(o => o.value === selectedValue);
      if (option && option.score) {
        score += option.score;
      }
    });

    setTotalScore(score);

    if (score >= 3) {
      setEligibilityResult("approved");
    } else {
      setEligibilityResult("rejected");
    }

    setCurrentStep(7);
  };

  const getWhatsAppLinkApproved = () => {
    const baseText = `Olá! Concluí a triagem eletrônica no portal e meu perfil pode ser compatível!\n\nNome: ${formData.full_name}\nE-mail: ${formData.email}\nTelefone: ${formData.phone}\nPontuação: ${totalScore}/6`;
    return `https://wa.me/5511999999999?text=${encodeURIComponent(baseText)}`;
  };

  const getWhatsAppLinkRejected = () => {
    const baseText = `Olá! Concluí a triagem eletrônica no portal e gostaria de conhecer as demais opções de vistos (L-1A, L-1B, O-1, etc).`;
    return `https://wa.me/5511999999999?text=${encodeURIComponent(baseText)}`;
  };

  const handleSubmitContact = () => {
    if (validateContactData()) {
      setShowContactErrors(false);
      window.open(getWhatsAppLinkApproved(), '_blank');
    } else {
      setShowContactErrors(false);
      setTimeout(() => setShowContactErrors(true), 10);
      setTimeout(() => setShowContactErrors(false), 2000);
    }
  }

  const handleReset = () => {
    setFormData({
      education: "",
      experience: "",
      field_of_study: "",
      awards: "",
      leadership: "",
      financial: "",
      full_name: "",
      email: "",
      phone: ""
    });
    setErrors({});
    setEligibilityResult(null);
    setCurrentStep(0);
  };

  const progressPercent = eligibilityResult ? 100 : currentStep === 0 ? 0 : (currentStep / totalSteps) * 100;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-box__progress-container">
          <div
            className="modal-box__progress-bar"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className="modal-box__header">
          <h3 className="modal-box__title">
            {eligibilityResult ? "Resultado da Análise" : "Avaliação de Perfil"}
          </h3>
          <button className="modal-box__close-btn" onClick={onClose} aria-label="Fechar">
            <X size={20} />
          </button>
        </div>

        <div className="modal-box__body">
          {currentStep === 0 ? (
            <div className="intro-screen" style={{ textAlign: "center", padding: "72px 24px" }}>
              <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px", textTransform: "uppercase" , letterSpacing: "1px" }}>
                FORMULÁRIO DE QUALIFICAÇÃO
              </h2>
              <p style={{ fontSize: "16px", marginBottom: "96px" }}>
                Descubra se o seu perfil é elegível para os vistos EB-1 e EB-2 NIW
              </p>
              <button
                className="button-premium button-premium--primary modal-box__first-btn"
                onClick={() => setCurrentStep(1)}
              >
                Iniciar análise
              </button>
            </div>
          ) : currentStep <= totalSteps ? (
            <div className="modal-box__form-container">
              <span className="modal-box__step-indicator">
                Etapa {currentStep} de {totalSteps}
              </span>
              <h4 className="modal-box__step-title">
                {currentStep === 1 && "Nível Educacional"}
                {currentStep === 2 && "Experiência Profissional"}
                {currentStep === 3 && "Área de Formação"}
                {currentStep === 4 && "Prêmios e Reconhecimentos"}
                {currentStep === 5 && "Liderança e Negócios"}
                {currentStep === 6 && "Disponibilidade Financeira"}
              </h4>

              {getQuestionsForStep(currentStep).map(q => (
                <div key={q.id} className="form-group">
                  <label className="form-group__label" htmlFor={q.id}>
                    {q.question} {q.required && "*"}
                  </label>

                  {q.type === "radio" && (
                    <div className="form-group__options-list">
                      {q.options?.map(o => {
                        const isSelected = formData[q.id] === o.value;
                        return (
                          <div
                            key={o.value}
                            className={`form-group__option-card ${isSelected ? "form-group__option-card--selected" : ""}`}
                            onClick={() => handleInputChange(q.id, o.value)}
                          >
                            <input
                              type="radio"
                              className="form-group__radio"
                              checked={isSelected}
                              readOnly
                            />
                            <label className="form-group__option-label">{o.label}</label>
                          </div>
                        );
                      })}
                    </div>
                  )}

                </div>
              ))}

              <div className="modal-box__footer" style={{ position: "relative", zIndex: 2 }}>
                {showToastError && (
                  <div className="global-error-toast">
                    Este campo é de preenchimento obrigatório para análise.
                  </div>
                )}
                {currentStep > 0 && (
                  <button
                    className="button-premium button-premium--secondary"
                    onClick={handleBack}
                  >
                    <ChevronLeft size={16} style={{ marginRight: 8 }} /> Voltar
                  </button>
                )}
                <button
                  className="button-premium button-premium--primary"
                  onClick={handleNext}
                >
                  {currentStep === totalSteps ? "Verificar Elegibilidade" : "Avançar"}
                  {currentStep !== totalSteps && <ChevronRight size={16} style={{ marginLeft: 8 }} />}
                </button>
              </div>
            </div>
          ) : (
            <div className="result-screen">
              {eligibilityResult === "approved" ? (
                <>
                  <div className="result-screen__icon-container result-screen__icon-container--success">
                    <CheckCircle size={44} />
                  </div>
                  <h4 className="result-screen__title">Seu perfil pode ser compatível!</h4>
                  <p className="result-screen__text" style={{ marginBottom: "20px" }}>
                    Preencha seus dados para que nossa equipe especialista dê sequência com o atendimento:
                  </p>

                  <div className="result-screen__form-container">
                    <div className="form-group" style={{ position: "relative" }}>
                      <label className="form-group__label">Nome completo *</label>
                      <input
                        type="text"
                        className="form-group__input"
                        value={formData.full_name}
                        onChange={(e) => handleInputChange("full_name", e.target.value)}
                        placeholder="Digite seu nome..."
                      />
                      {showContactErrors && errors.full_name && <span className="field-error-toast">{errors.full_name}</span>}
                    </div>

                    <div className="form-group" style={{ position: "relative" }}>
                      <label className="form-group__label">Email *</label>
                      <input
                        type="email"
                        className="form-group__input"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="exemplo@empresa.com"
                      />
                      {showContactErrors && errors.email && <span className="field-error-toast">{errors.email}</span>}
                    </div>

                    <div className="form-group" style={{ position: "relative" }}>
                      <label className="form-group__label">Telefone *</label>
                      <input
                        type="tel"
                        className="form-group__input"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="(11) 99999-9999"
                      />
                      {showContactErrors && errors.phone && <span className="field-error-toast">{errors.phone}</span>}
                    </div>

                    <div className="result-screen__actions">
                      <button
                        className="button-premium button-premium--primary"
                        onClick={handleSubmitContact}
                      >
                        Enviar e Falar com a Equipe
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="result-screen__icon-container result-screen__icon-container--fail" style={{ background: "rgba(255, 170, 0, 0.1)", color: "#ffaa00" }}>
                    <Puzzle size={44} />
                  </div>
                  <h4 className="result-screen__title">Seu perfil pode ser adequado para outras opções!</h4>
                  <p className="result-screen__text" style={{ textAlign: "left" }}>
                    Podemos ter outras opções para você! Clique para falar com nossa equipe especialista e conhecer os demais vistos com os quais atuamos.
                  </p>
                  <p className="result-screen__text" style={{ textAlign: "left" }}>
                    <strong>L-1A:</strong> transferência de executivos ou gerentes de uma empresa no Brasil para uma filial, subsidiária ou matriz nos Estados Unidos.<br />
                    <strong>L-1B:</strong> transferência de profissionais que trabalhem em cargos que exigem conhecimento especializado.<br />
                    <strong>O-1:</strong> profissionais com habilidades extraordinárias que possuem oferta de emprego.<br />
                    <strong>Vistos de turismo ou estudantes.</strong>
                  </p>
                  <div className="result-screen__actions" style={{ marginTop: "24px" }}>
                    <a
                      href={getWhatsAppLinkRejected()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button-premium button-premium--primary"
                    >
                      Fale conosco
                    </a>
                    <button
                      className="button-premium button-premium--secondary"
                      onClick={handleReset}
                    >
                      Refazer Análise
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
