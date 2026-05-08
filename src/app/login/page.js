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
      {/* Alça da maleta */}
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

      {/* Corpo da maleta */}
      <rect x="22" y="18" width="156" height="110" rx="14" fill="#1a2e5a" />

      {/* Divisória */}
      <path
        d="M22 72 L100 108 L178 72"
        stroke="white"
        strokeWidth="5"
        fill="none"
      />

      <line x1="22" y1="72" x2="22" y2="128" stroke="white" strokeWidth="3" />
      <line
        x1="178"
        y1="72"
        x2="178"
        y2="128"
        stroke="white"
        strokeWidth="3"
      />

      {/* Fecho */}
      <circle cx="100" cy="72" r="10" fill="white" />
      <circle cx="100" cy="72" r="5" fill="#1a2e5a" />

      {/* Pessoa esquerda */}
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

      {/* Pessoa direita */}
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

      {/* Pessoa central */}
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

      {/* MAPE */}
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

      {/* Subtítulo */}
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

      {/* Barra */}
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

      if (digits.length > 2) {
        formatted = `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
      }

      if (digits.length > 7) {
        formatted = `(${digits.slice(0, 2)}) ${digits.slice(
          2,
          7
        )}-${digits.slice(7)}`;
      }

      setForm((prev) => ({
        ...prev,
        telefone: formatted,
      }));

      return;
    }

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
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
    boxShadow: focused === name ? "0 4px 12px rgba(26, 126, 212, 0.15)" : "none",
  });

  return (
    <div style={styles.page}>
      {/* ESQUERDA - 50% */}
      <div style={styles.left}>
        <div style={styles.logoContainer}>
          <MAPELogo width={480} />
        </div>
        <div style={styles.leftOverlay} />
      </div>

      {/* DIREITA - 50% */}
      <div style={styles.right}>
        <div style={styles.card}>
          <div style={styles.header}>
            <h1 style={styles.title}>Cadastro da Escola</h1>
            <p style={styles.subtitle}>
              Preencha os dados da sua escola para começar.
            </p>
          </div>

          <div style={styles.form}>
            {[
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
            ].map(({ name, label, placeholder, type }) => (
              <div key={name} style={styles.fieldGroup}>
                <label style={styles.label}>{label}</label>
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

          <button
            style={styles.button}
            onClick={handleSubmit}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#13234a";
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 8px 20px rgba(26, 46, 90, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#1a2e5a";
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 12px rgba(26, 46, 90, 0.2)";
            }}
          >
            Cadastrar Escola
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    display: "flex",
    width: "100vw",
    height: "100vh",
    backgroundColor: "#F0F0F0", // Alterado para #F0F0F0 conforme solicitado
    fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
    overflow: "hidden",
  },
  /* ESQUERDA - 50% */
  left: {
    width: "50%",
    height: "100%",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #1A5C2A 0%, #2D6A3B 100%)"
  },

  logoContainer: {
    zIndex: 2,
    transform: "scale(0.9)",
    filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.2))",
  },

  leftOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.2) 100%)",
    pointerEvents: "none",
  },

  /* DIREITA - 50% */
  right: {
    width: "50%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    backgroundColor: "#F0F0F0", // Alterado para #F0F0F0
    boxSizing: "border-box",
  },

  card: {
    width: "100%",
    maxWidth: 480,
    backgroundColor: "#fff",
    borderRadius: 24,
    padding: "32px",
    boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  header: {
    marginBottom: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 700,
    color: "#1A5C2A", // Alterado para #1A5C2A (verde)
    marginBottom: 6,
    letterSpacing: "-0.5px",
  },
  subtitle: {
    fontSize: 15,
    color: "#1A5C2A", // Alterado para #1A5C2A (verde)
    lineHeight: 1.5,
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },

  fieldGroup: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },

  label: {
    fontWeight: 600,
    fontSize: 14,
    color: "#1A5C2A", // Alterado para #1A5C2A (verde)
    marginLeft: 2,
  },

  // Estilo para os inputs
  input: {
    width: "100%",
    padding: "12px 14px",
    border: `2px solid #1A5C2A`, // Borda verde
    borderRadius: 10,
    fontSize: 15,
    color: "#1A5C2A", // Texto verde
    backgroundColor: "#fff",
    outline: "none",
    transition: "all 0.2s ease",
  },

  // Estilo para input em foco
  inputFocus: {
    borderColor: "#F57C00", // Laranja quando em foco
    boxShadow: `0 0 0 3px rgba(245, 124, 0, 0.1)`,
  },

  button: {
    width: "100%",
    padding: "14px",
    border: "none",
    borderRadius: 12,
    backgroundColor: "#F57C00", // Alterado para #F57C00 (laranja)
    color: "#fff",
    fontSize: 16,
    fontWeight: 600,
    cursor: "pointer",
    marginTop: 16,
    transition: "all 0.3s ease",
  },
};