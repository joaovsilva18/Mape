"use client";

import { useState } from "react";

function MAPELogo({ width = 450 }) {
  return (
    <svg
      width={width}
      height={width * 1.05}
      viewBox="0 0 200 210"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="MAPE – Mercado Aprendiz de Pernambuco"
    >
      <rect
        x="78"
        y="4"
        width="44"
        height="18"
        rx="9"
        stroke="#1a2e5a"
        strokeWidth="9"
        fill="none"
      />
      <rect x="22" y="18" width="156" height="110" rx="14" fill="#1a2e5a" />
      <path
        d="M22 72 L100 108 L178 72"
        stroke="white"
        strokeWidth="5"
        fill="none"
      />
      <line x1="22" y1="72" x2="22" y2="128" stroke="white" strokeWidth="3" />
      <line x1="178" y1="72" x2="178" y2="128" stroke="white" strokeWidth="3" />
      <circle cx="100" cy="72" r="10" fill="white" />
      <circle cx="100" cy="72" r="5" fill="#1a2e5a" />
      <circle cx="52" cy="95" r="13" fill="#27a84a" />
      <path
        d="M52 108 Q30 90 22 70"
        stroke="#27a84a"
        strokeWidth="11"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M52 108 Q68 100 76 110"
        stroke="#27a84a"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M52 108 Q44 130 38 148"
        stroke="#27a84a"
        strokeWidth="11"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M52 108 Q60 130 64 148"
        stroke="#27a84a"
        strokeWidth="11"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="148" cy="95" r="13" fill="#f5a800" />
      <path
        d="M148 108 Q170 90 178 70"
        stroke="#f5a800"
        strokeWidth="11"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M148 108 Q132 100 124 110"
        stroke="#f5a800"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M148 108 Q156 130 162 148"
        stroke="#f5a800"
        strokeWidth="11"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M148 108 Q140 130 136 148"
        stroke="#f5a800"
        strokeWidth="11"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="100" cy="100" r="15" fill="#1a7ed4" />
      <path
        d="M100 115 Q72 105 58 118"
        stroke="#1a7ed4"
        strokeWidth="13"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M100 115 Q128 105 142 118"
        stroke="#1a7ed4"
        strokeWidth="13"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M100 115 Q92 138 86 155"
        stroke="#1a7ed4"
        strokeWidth="13"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M100 115 Q108 138 114 155"
        stroke="#1a7ed4"
        strokeWidth="13"
        strokeLinecap="round"
        fill="none"
      />
      <text
        x="100"
        y="185"
        textAnchor="middle"
        fontFamily="'Arial Black', Arial, sans-serif"
        fontWeight="900"
        fontSize="46"
        fill="#1a2e5a"
        letterSpacing="2"
      >
        MAPE
      </text>
      <text
        x="100"
        y="196"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontWeight="400"
        fontSize="8.0"
        fill="#1a2e5a"
        letterSpacing="1.5"
      >
        MERCADO APRENDIZ DE PERNAMBUCO
      </text>
      <rect x="14" y="200" width="43" height="4" rx="2" fill="#27a84a" />
      <rect x="57" y="200" width="15" height="4" rx="2" fill="#e8001c" />
      <rect x="72" y="200" width="43" height="4" rx="2" fill="#f5a800" />
      <rect x="115" y="200" width="71" height="4" rx="2" fill="#1a7ed4" />
    </svg>
  );
}

export default function CadastroEscola() {
  const [form, setForm] = useState({
    nomeEscola: "",
    email: "",
    telefone: "",
    nomeResponsavel: "",
    quantidadeAlunos: "",
    cidade: "",
  });
  const [focused, setFocused] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    if (name === "telefone") {
      const digits = value.replace(/\D/g, "").slice(0, 11);
      let formatted = digits;
      if (digits.length > 2)
        formatted = `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
      if (digits.length > 7)
        formatted = `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
      setForm((prev) => ({ ...prev, telefone: formatted }));
      return;
    }
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit() {
    console.log(form);
    alert("Escola cadastrada com sucesso!");
  }

  const inputStyle = (name) => ({
    width: "100%",
    padding: "14px 16px",
    border: `2px solid ${focused === name ? "#1a7ed4" : "#e0e0e0"}`,
    borderRadius: 12,
    fontSize: 15,
    outline: "none",
    transition: "all 0.3s ease",
    boxSizing: "border-box",
    backgroundColor: focused === name ? "#f8fbff" : "#fafafa",
    boxShadow:
      focused === name ? "0 4px 12px rgba(26, 126, 212, 0.15)" : "none",
  });

  const fields = [
    {
      name: "nomeEscola",
      label: "Nome da escola",
      placeholder: "Ex: Escola Estadual Exemplo",
      type: "text",
    },
    {
      name: "email",
      label: "E-mail institucional",
      placeholder: "exemplo@escola.edu.br",
      type: "email",
    },
    {
      name: "telefone",
      label: "Telefone",
      placeholder: "(00) 00000-0000",
      type: "text",
    },
    {
      name: "nomeResponsavel",
      label: "Nome do responsável",
      placeholder: "Ex: João da Silva",
      type: "text",
    },
    {
      name: "quantidadeAlunos",
      label: "Quantidade de alunos",
      placeholder: "Ex: 350",
      type: "number",
    },
    {
      name: "cidade",
      label: "Cidade",
      placeholder: "Ex: Recife",
      type: "text",
    },
  ];

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        .page {
          display: flex;
          min-height: 100vh;
          font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
          background: #f0f0f0;
        }

        /* Left panel */
        .left {
          width: 50%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #1a5c2a 0%, #2d6a3b 100%);
          padding: 40px;
        }
        .left-overlay {
          position: absolute; inset: 0;
          background: radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.2) 100%);
          pointer-events: none;
        }
        .logo-wrap {
          z-index: 2;
          filter: drop-shadow(0 20px 40px rgba(0,0,0,0.2));
          display: flex; align-items: center; justify-content: center;
          width: 100%;
        }

        /* Right panel */
        .right {
          width: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 32px 24px;
          background: #f0f0f0;
          overflow-y: auto;
        }

        .card {
          width: 100%;
          max-width: 480px;
          background: #fff;
          border-radius: 24px;
          padding: 32px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.08);
        }

        .card-header { margin-bottom: 20px; }
        .card-title { font-size: 28px; font-weight: 700; color: #1a5c2a; margin-bottom: 6px; letter-spacing: -0.5px; }
        .card-subtitle { font-size: 15px; color: #1a5c2a; line-height: 1.5; }

        .form { display: flex; flex-direction: column; gap: 12px; }

        .field-group { display: flex; flex-direction: column; gap: 4px; }
        .field-label { font-weight: 600; font-size: 14px; color: #1a5c2a; margin-left: 2px; }

        .submit-btn {
          width: 100%; padding: 14px; border: none; border-radius: 12px;
          background: #f57c00; color: #fff; font-size: 16px; font-weight: 600;
          cursor: pointer; margin-top: 16px; transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(26,46,90,0.2);
        }
        .submit-btn:hover {
          background: #13234a;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(26,46,90,0.3);
        }

        /* Tablet */
        @media (max-width: 900px) {
          .left { width: 42%; padding: 24px; }
          .right { width: 58%; }
        }

        /* Mobile: stack vertically */
        @media (max-width: 640px) {
          .page { flex-direction: column; }

          .left {
            width: 100%;
            padding: 32px 24px;
            min-height: auto;
          }
          .logo-wrap svg {
            width: 180px !important;
            height: auto !important;
          }

          .right {
            width: 100%;
            padding: 24px 16px 40px;
          }

          .card { padding: 24px 20px; border-radius: 16px; }
          .card-title { font-size: 22px; }
        }
      `}</style>

      <div className="page">
        {/* Left */}
        <div className="left">
          <div className="logo-wrap">
            <MAPELogo width={380} />
          </div>
          <div className="left-overlay" />
        </div>

        {/* Right */}
        <div className="right">
          <div className="card">
            <div className="card-header">
              <h1 className="card-title">Cadastro da Escola</h1>
              <p className="card-subtitle">
                Preencha os dados da sua escola para começar.
              </p>
            </div>

            <div className="form">
              {fields.map(({ name, label, placeholder, type }) => (
                <div key={name} className="field-group">
                  <label className="field-label">{label}</label>
                  <input
                    name={name}
                    type={type}
                    value={form[name]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    style={inputStyle(name)}
                    onFocus={() => setFocused(name)}
                    onBlur={() => setFocused(null)}
                  />
                </div>
              ))}
            </div>

            <button className="submit-btn" onClick={handleSubmit}>
              Cadastrar Escola
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
