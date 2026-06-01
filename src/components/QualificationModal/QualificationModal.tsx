"use client";

import React, { useState } from "react";
import { X, CheckCircle, AlertTriangle, ChevronRight, ChevronLeft } from "lucide-react";
import questionsData from "../../data/questions.json";
import "./QualificationModal.css";

interface QualificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Interfaces baseadas no JSON de perguntas
interface QuestionOption {
  label: string;
  value: string;
  score: number;
  critical?: boolean;
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
  // Passos de formulário: 
  // 1: Dados Básicos (Nome, Email, Tel)
  // 2: Escolaridade & Experiência
  // 3: Conquistas
  // 4: Planos nos EUA
  // 5: Tela de Resultado (Sucesso ou Não Elegível)
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  // Estados dos valores do formulário
  const [formData, setFormData] = useState<Record<string, any>>({
    full_name: "",
    email: "",
    phone: "",
    education: "",
    experience: "",
    achievements: [] as string[],
    us_plans: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [eligibilityResult, setEligibilityResult] = useState<"approved" | "rejected" | null>(null);
  const [totalScore, setTotalScore] = useState(0);

  if (!isOpen) return null;

  // Filtra perguntas da etapa atual
  const getQuestionsForStep = (step: number): Question[] => {
    const typedQuestions = questionsData as Question[];
    switch (step) {
      case 1:
        return typedQuestions.filter(q => q.section === "dados_basicos");
      case 2:
        return typedQuestions.filter(q => q.section === "escolaridade" || q.section === "experiencia");
      case 3:
        return typedQuestions.filter(q => q.section === "conquistas");
      case 4:
        return typedQuestions.filter(q => q.section === "planos");
      default:
        return [];
    }
  };

  const handleInputChange = (id: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    // Limpa erro ao digitar
    if (errors[id]) {
      setErrors(prev => {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      });
    }
  };

  const handleCheckboxChange = (id: string, optionValue: string, isChecked: boolean) => {
    const currentValues = (formData[id] as string[]) || [];
    let newValues: string[];
    
    if (isChecked) {
      newValues = [...currentValues, optionValue];
    } else {
      newValues = currentValues.filter(v => v !== optionValue);
    }
    
    handleInputChange(id, newValues);
  };

  const validateStep = (step: number): boolean => {
    const stepQuestions = getQuestionsForStep(step);
    const newErrors: Record<string, string> = {};
    let isValid = true;

    stepQuestions.forEach(q => {
      if (q.required) {
        const val = formData[q.id];
        if (!val || (Array.isArray(val) && val.length === 0)) {
          newErrors[q.id] = "Este campo é de preenchimento obrigatório para análise.";
          isValid = false;
        } else if (q.type === "email" && !/\S+@\S+\.\S+/.test(val)) {
          newErrors[q.id] = "Por favor, insira um e-mail válido.";
          isValid = false;
        }
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < totalSteps) {
        setCurrentStep(prev => prev + 1);
      } else {
        processEligibility();
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  // Lógica principal de pontuação e qualificação
  const processEligibility = () => {
    const typedQuestions = questionsData as Question[];
    let score = 0;
    let isDisqualified = false;

    // 1. Escolaridade
    const eduQuestion = typedQuestions.find(q => q.id === "education");
    const eduOption = eduQuestion?.options?.find(o => o.value === formData.education);
    if (eduOption) score += eduOption.score;

    // 2. Experiência
    const expQuestion = typedQuestions.find(q => q.id === "experience");
    const expOption = expQuestion?.options?.find(o => o.value === formData.experience);
    if (expOption) score += expOption.score;

    // 3. Conquistas (Multi-checkbox)
    const achQuestion = typedQuestions.find(q => q.id === "achievements");
    if (achQuestion && achQuestion.options) {
      const selectedAchievements = formData.achievements as string[];
      selectedAchievements.forEach(val => {
        const option = achQuestion.options?.find(o => o.value === val);
        if (option) score += option.score;
      });
    }

    // 4. Planos nos EUA (Critério Crítico)
    const plansQuestion = typedQuestions.find(q => q.id === "us_plans");
    const plansOption = plansQuestion?.options?.find(o => o.value === formData.us_plans);
    if (plansOption) {
      score += plansOption.score;
      // Se responder não pretendo continuar na área, é desqualificado
      if (formData.us_plans === "no") {
        isDisqualified = true;
      }
    }

    setTotalScore(score);

    // Critérios para aprovação: Pontuação mínima de 15 pontos E não ter sido desqualificado criticamente
    if (score >= 15 && !isDisqualified) {
      setEligibilityResult("approved");
    } else {
      setEligibilityResult("rejected");
    }
    
    setCurrentStep(5);
  };

  const getWhatsAppLink = () => {
    const baseText = `Olá! Concluí a triagem eletrônica no portal Nostrali | Oceanik e meu perfil foi qualificado para a assessoria de vistos americanos de elite (EB-1 / EB-2 NIW). Gostaria de solicitar o agendamento de uma consulta técnica reservada.\n\nNome: ${formData.full_name}\nE-mail: ${formData.email}\nEscolaridade: ${formData.education.toUpperCase()}`;
    return `https://wa.me/5511999999999?text=${encodeURIComponent(baseText)}`;
  };

  const handleReset = () => {
    setFormData({
      full_name: "",
      email: "",
      phone: "",
      education: "",
      experience: "",
      achievements: [] as string[],
      us_plans: ""
    });
    setErrors({});
    setEligibilityResult(null);
    setCurrentStep(1);
  };

  // Calcula a porcentagem do progresso
  const progressPercent = eligibilityResult ? 100 : ((currentStep - 1) / totalSteps) * 100;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        {/* Barra de Progresso */}
        <div className="modal-box__progress-container">
          <div 
            className="modal-box__progress-bar" 
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Cabeçalho */}
        <div className="modal-box__header">
          <h3 className="modal-box__title">
            {eligibilityResult ? "Resultado da Análise" : "Avaliação de Perfil"}
          </h3>
          <button className="modal-box__close-btn" onClick={onClose} aria-label="Fechar">
            <X size={20} />
          </button>
        </div>

        {/* Corpo do Formulário */}
        <div className="modal-box__body">
          {currentStep <= totalSteps ? (
            <div className="modal-box__form-container">
              {/* Etapa textual */}
              <span className="modal-box__step-indicator">
                Etapa {currentStep} de {totalSteps}
              </span>
              <h4 className="modal-box__step-title">
                {currentStep === 1 && "Identificação do Candidato"}
                {currentStep === 2 && "Trajetória Profissional e Acadêmica"}
                {currentStep === 3 && "Conquistas de Destaque Comprováveis"}
                {currentStep === 4 && "Planejamento de Futuro"}
              </h4>

              {/* Renderização Dinâmica das Perguntas */}
              {getQuestionsForStep(currentStep).map(q => (
                <div key={q.id} className="form-group">
                  <label className="form-group__label" htmlFor={q.id}>
                    {q.question} {q.required && "*"}
                  </label>
                  
                  {/* Explicação sutil sobre o porquê da pergunta */}
                  {q.id === "education" && (
                    <span className="form-group__microcopy">
                      Vistos EB-2 NIW exigem grau acadêmico avançado ou habilidade excepcional comprovável.
                    </span>
                  )}
                  {q.id === "achievements" && (
                    <span className="form-group__microcopy">
                      Selecione apenas os critérios que você consegue fundamentar com provas materiais (documentos, links, mídia).
                    </span>
                  )}

                  {/* Input Texto/Email/Tel */}
                  {(q.type === "text" || q.type === "email" || q.type === "tel") && (
                    <input
                      type={q.type}
                      id={q.id}
                      className="form-group__input"
                      placeholder={q.placeholder}
                      value={formData[q.id]}
                      onChange={(e) => handleInputChange(q.id, e.target.value)}
                    />
                  )}

                  {/* Select */}
                  {q.type === "select" && (
                    <select
                      id={q.id}
                      className="form-group__select"
                      value={formData[q.id]}
                      onChange={(e) => handleInputChange(q.id, e.target.value)}
                    >
                      <option value="">Selecione uma opção...</option>
                      {q.options?.map(o => (
                        <option key={o.value} value={o.value}>{o.label}</option>
                      ))}
                    </select>
                  )}

                  {/* Grupo de Checkbox */}
                  {q.type === "checkbox_group" && (
                    <div className="form-group__options-list">
                      {q.options?.map(o => {
                        const isChecked = (formData[q.id] as string[]).includes(o.value);
                        return (
                          <div 
                            key={o.value} 
                            className={`form-group__option-card ${isChecked ? "form-group__option-card--selected" : ""}`}
                            onClick={() => handleCheckboxChange(q.id, o.value, !isChecked)}
                          >
                            <input
                              type="checkbox"
                              className="form-group__checkbox"
                              checked={isChecked}
                              readOnly
                            />
                            <label className="form-group__option-label">{o.label}</label>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Radio Buttons */}
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

                  {errors[q.id] && <span className="form-group__error">{errors[q.id]}</span>}
                </div>
              ))}

              {/* Botões de Ação */}
              <div className="modal-box__footer">
                {currentStep > 1 && (
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
                  {currentStep === totalSteps ? "Concluir Triagem" : "Avançar"} 
                  {currentStep !== totalSteps && <ChevronRight size={16} style={{ marginLeft: 8 }} />}
                </button>
              </div>
            </div>
          ) : (
            /* Telas de Resultado */
            <div className="result-screen">
              {eligibilityResult === "approved" ? (
                /* Sucesso: Elegível */
                <>
                  <div className="result-screen__icon-container result-screen__icon-container--success">
                    <CheckCircle size={44} />
                  </div>
                  <h4 className="result-screen__title">Perfil Altamente Qualificado</h4>
                  <p className="result-screen__text">
                    Parabéns, {formData.full_name}. Com base nas informações fornecidas, seu perfil atende aos critérios prévios essenciais para pleitear as categorias de visto de elite **EB-1A** ou **EB-2 NIW**.
                    <br /><br />
                    Você foi autorizado a prosseguir para o atendimento humano reservado com nossos diretores técnicos associados.
                  </p>
                  <div className="result-screen__actions">
                    <a 
                      href={getWhatsAppLink()} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="button-premium button-premium--primary"
                    >
                      Iniciar Atendimento Reservado
                    </a>
                    <button 
                      className="button-premium button-premium--secondary"
                      onClick={onClose}
                    >
                      Fechar Portal
                    </button>
                  </div>
                </>
              ) : (
                /* Insucesso: Não Elegível */
                <>
                  <div className="result-screen__icon-container result-screen__icon-container--fail">
                    <AlertTriangle size={44} />
                  </div>
                  <h4 className="result-screen__title">Perfil Não Compatível</h4>
                  <p className="result-screen__text">
                    Agradecemos seu tempo, {formData.full_name}. No momento, com base nos dados informados, seu perfil profissional não preenche todos os requisitos extremamente seletivos exigidos para assessoria direta dos vistos de elite.
                    <br /><br />
                    Para mantermos a excelência e nossa alta taxa de aprovação, limitamos o atendimento aos casos que atendam integralmente às exigências migratórias americanas. Caso sua situação mude no futuro, sinta-se à vontade para realizar uma nova triagem.
                  </p>
                  <div className="result-screen__actions">
                    <button 
                      className="button-premium button-premium--primary"
                      onClick={handleReset}
                    >
                      Refazer Análise
                    </button>
                    <button 
                      className="button-premium button-premium--secondary"
                      onClick={onClose}
                    >
                      Voltar ao Portal
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
