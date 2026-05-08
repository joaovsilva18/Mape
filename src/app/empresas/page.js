"use client";

import { useState, useEffect } from "react";

const parceiros = [
  {
    nome: "Andrade Distribuidora",
    setor: "Distribuição",
    desc: "Apoiando oficinas de capacitação e desenvolvimento de jovens.",
    cor: "#e8f5e9",
    corTexto: "#2e7d32",
    logo: (
      <svg viewBox="0 0 120 50" width="110" height="46">
        <text
          x="0"
          y="38"
          fontFamily="Arial Black"
          fontWeight="900"
          fontSize="38"
          fill="#e67e22"
        >
          A
        </text>
        <text
          x="32"
          y="38"
          fontFamily="Arial Black"
          fontWeight="900"
          fontSize="38"
          fill="#1a5c2a"
        >
          D
        </text>
        <text
          x="62"
          y="22"
          fontFamily="Arial"
          fontWeight="700"
          fontSize="10"
          fill="#555"
        >
          ANDRADE
        </text>
        <text
          x="62"
          y="35"
          fontFamily="Arial"
          fontWeight="400"
          fontSize="8"
          fill="#888"
        >
          DISTRIBUIDORA
        </text>
      </svg>
    ),
  },
  {
    nome: "Cardeal Distribuidora",
    setor: "Distribuição",
    desc: "Incentivando a educação e o crescimento de novas gerações.",
    cor: "#e8f5e9",
    corTexto: "#2e7d32",
    logo: (
      <svg viewBox="0 0 120 50" width="110" height="46">
        <circle cx="20" cy="25" r="20" fill="#e53935" opacity="0.15" />
        <text
          x="8"
          y="32"
          fontFamily="Arial Black"
          fontWeight="900"
          fontSize="26"
          fill="#e53935"
        >
          C
        </text>
        <text
          x="42"
          y="22"
          fontFamily="Arial"
          fontWeight="700"
          fontSize="10"
          fill="#555"
        >
          CARDEAL
        </text>
        <text
          x="42"
          y="35"
          fontFamily="Arial"
          fontWeight="400"
          fontSize="8"
          fill="#888"
        >
          DISTRIBUIDORA
        </text>
      </svg>
    ),
  },
  {
    nome: "Coca-Cola",
    setor: "Bebidas",
    desc: "Transformando realidades por meio da educação e da inclusão.",
    cor: "#fce4ec",
    corTexto: "#c62828",
    logo: (
      <svg viewBox="0 0 120 50" width="220" height="46">
        <text
          x="0"
          y="36"
          fontFamily="Georgia, serif"
          fontWeight="900"
          fontSize="30"
          fill="#e53935"
          fontStyle="italic"
        >
          Coca-Cola
        </text>
      </svg>
    ),
  },
  {
    nome: "Banco do Brasil",
    setor: "Financeiro",
    desc: "Investindo no futuro e promovendo oportunidades de aprendizado.",
    cor: "#fffde7",
    corTexto: "#f57f17",
    logo: (
      <svg viewBox="0 0 120 50" width="110" height="46">
        <rect x="2" y="8" width="32" height="32" rx="16" fill="#003f7f" />
        <text
          x="8"
          y="30"
          fontFamily="Arial Black"
          fontWeight="900"
          fontSize="16"
          fill="#fdd835"
        >
          BB
        </text>
        <text
          x="42"
          y="22"
          fontFamily="Arial"
          fontWeight="700"
          fontSize="10"
          fill="#003f7f"
        >
          BANCO DO
        </text>
        <text
          x="42"
          y="35"
          fontFamily="Arial"
          fontWeight="700"
          fontSize="10"
          fill="#003f7f"
        >
          BRASIL
        </text>
      </svg>
    ),
  },
  {
    nome: "Santander",
    setor: "Financeiro",
    desc: "Apoiando projetos educacionais e de transformação social.",
    cor: "#fce4ec",
    corTexto: "#c62828",
    logo: (
      <svg viewBox="0 0 120 50" width="220" height="46">
        <circle cx="16" cy="25" r="14" fill="#e53935" opacity="0.9" />
        <circle cx="28" cy="25" r="14" fill="#e53935" opacity="0.5" />
        <text
          x="46"
          y="30"
          fontFamily="Arial"
          fontWeight="700"
          fontSize="18"
          fill="#e53935"
        >
          Santander
        </text>
      </svg>
    ),
  },
  {
    nome: "Itaú",
    setor: "Financeiro",
    desc: "Conectando educação e oportunidades para todos.",
    cor: "#fffde7",
    corTexto: "#f57f17",
    logo: (
      <svg viewBox="0 0 120 50" width="220" height="46">
        <rect x="2" y="5" width="40" height="40" rx="8" fill="#003d7c" />
        <text
          x="8"
          y="32"
          fontFamily="Arial Black"
          fontWeight="900"
          fontSize="18"
          fill="#f5a623"
        >
          itaú
        </text>
        <text
          x="52"
          y="30"
          fontFamily="Arial Black"
          fontWeight="900"
          fontSize="22"
          fill="#003d7c"
        >
          Itaú
        </text>
      </svg>
    ),
  },
  {
    nome: "Fiat Italiana",
    setor: "Automotivo",
    desc: "Apoiando a educação técnica e o desenvolvimento profissional.",
    cor: "#e3f2fd",
    corTexto: "#1565c0",
    logo: (
      <svg viewBox="0 0 120 50" width="220" height="46">
        <rect
          x="2"
          y="5"
          width="50"
          height="40"
          rx="4"
          fill="none"
          stroke="#222"
          strokeWidth="2"
        />
        <text
          x="8"
          y="33"
          fontFamily="Arial Black"
          fontWeight="900"
          fontSize="22"
          fill="#111"
        >
          FIAT
        </text>
        <text
          x="58"
          y="22"
          fontFamily="Arial"
          fontWeight="400"
          fontSize="9"
          fill="#888"
        >
          ITALIANA
        </text>
      </svg>
    ),
  },
  {
    nome: "Magazine Luiza",
    setor: "Varejo",
    desc: "Parceira na construção de um futuro com mais conhecimento e inclusão.",
    cor: "#f3e5f5",
    corTexto: "#6a1b9a",
    logo: (
      <svg viewBox="0 0 120 50" width="110" height="46">
        <text
          x="0"
          y="30"
          fontFamily="Arial Black"
          fontWeight="900"
          fontSize="20"
          fill="#1565c0"
        >
          ma
        </text>
        <text
          x="26"
          y="30"
          fontFamily="Arial Black"
          fontWeight="900"
          fontSize="20"
          fill="#e53935"
        >
          ga
        </text>
        <text
          x="52"
          y="30"
          fontFamily="Arial Black"
          fontWeight="900"
          fontSize="20"
          fill="#fdd835"
        >
          lu
        </text>
      </svg>
    ),
  },
];

const setores = [
  "Todos os setores",
  "Distribuição",
  "Bebidas",
  "Financeiro",
  "Automotivo",
  "Varejo",
];

const badgeColors = {
  Distribuição: { bg: "#e8f5e9", color: "#2e7d32" },
  Bebidas: { bg: "#fce4ec", color: "#c62828" },
  Financeiro: { bg: "#e3f2fd", color: "#1565c0" },
  Automotivo: { bg: "#fff3e0", color: "#e65100" },
  Varejo: { bg: "#f3e5f5", color: "#6a1b9a" },
};

const MAPELogo = () => (
  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
    <svg
      width="38"
      height="38"
      viewBox="0 0 200 210"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="78"
        y="4"
        width="44"
        height="18"
        rx="9"
        stroke="white"
        strokeWidth="9"
        fill="none"
      />
      <rect
        x="22"
        y="18"
        width="156"
        height="110"
        rx="14"
        fill="white"
        fillOpacity="0.15"
      />
      <rect
        x="22"
        y="18"
        width="156"
        height="110"
        rx="14"
        stroke="white"
        strokeWidth="4"
        fill="none"
      />
      <path
        d="M22 72 L100 108 L178 72"
        stroke="white"
        strokeWidth="4"
        fill="none"
      />
      <circle cx="100" cy="72" r="10" fill="white" />
      <circle cx="100" cy="72" r="5" fill="#1a5c2a" />
      <circle cx="52" cy="95" r="13" fill="#27a84a" />
      <circle cx="148" cy="95" r="13" fill="#f5a800" />
      <circle cx="100" cy="100" r="15" fill="#1a7ed4" />
    </svg>

    <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
      <span
        style={{
          fontSize: 22,
          fontWeight: 900,
          color: "#fff",
          fontFamily: "'Arial Black', Arial, sans-serif",
          letterSpacing: 2,
        }}
      >
        MAPE
      </span>
      <span
        style={{
          fontSize: 8,
          color: "#a3c993",
          letterSpacing: 1,
          marginTop: 2,
        }}
      >
        MERCADO APRENDIZ DE PE
      </span>
      <div style={{ display: "flex", gap: 2, marginTop: 3 }}>
        <div
          style={{
            height: 3,
            width: 14,
            borderRadius: 2,
            background: "#27a84a",
          }}
        />
        <div
          style={{
            height: 3,
            width: 5,
            borderRadius: 2,
            background: "#e8001c",
          }}
        />
        <div
          style={{
            height: 3,
            width: 14,
            borderRadius: 2,
            background: "#f5a800",
          }}
        />
        <div
          style={{
            height: 3,
            width: 22,
            borderRadius: 2,
            background: "#1a7ed4",
          }}
        />
      </div>
    </div>
  </div>
);

const IconUsers = () => (
  <svg width="36" height="36" fill="white" viewBox="0 0 24 24">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const IconPuzzle = () => (
  <svg width="36" height="36" fill="white" viewBox="0 0 24 24">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
    <line x1="7" y1="7" x2="7.01" y2="7" />
  </svg>
);
const IconChart = () => (
  <svg width="36" height="36" fill="white" viewBox="0 0 24 24">
    <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
    <path d="M22 12A10 10 0 0 0 12 2v10z" />
  </svg>
);
const IconHandshake = () => (
  <svg width="36" height="36" fill="white" viewBox="0 0 24 24">
    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
  </svg>
);
const IconHome = () => (
  <svg
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9,22 9,12 15,12 15,22" />
  </svg>
);
const IconWrench = () => (
  <svg
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.07 4.93l-2.83 2.83M4.93 4.93l2.83 2.83M4.93 19.07l2.83-2.83M19.07 19.07l-2.83-2.83" />
    <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
  </svg>
);
const IconStudents = () => (
  <svg
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const IconPerformance = () => (
  <svg
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);
const IconPartners = () => (
  <svg
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const IconSettings = () => (
  <svg
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);
const IconLogout = () => (
  <svg
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
);
const IconUser = () => (
  <svg
    width="22"
    height="22"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);
const IconMenu = () => (
  <svg
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);
const IconClose = () => (
  <svg
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const navItems = [
  { label: "Início", icon: <IconHome />, active: true },
  { label: "Oficinas", icon: <IconWrench /> },
  { label: "Alunos", icon: <IconStudents /> },
  { label: "Desempenho", icon: <IconPerformance /> },
  { label: "Parceiros", icon: <IconPartners /> },
  { label: "Configurações", icon: <IconSettings /> },
];

export default function EmpresasPage() {
  const [setor, setSetor] = useState("Todos os setores");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const filtrados =
    setor === "Todos os setores"
      ? parceiros
      : parceiros.filter((p) => p.setor === setor);

  const [activeNav, setActiveNav] = useState("Empresas");
  const [isMobile, setIsMobile] = useState(false);
  const [screenWidth, setScreenWidth] = useState(1200);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const check = () => {
      setScreenWidth(window.innerWidth);
      setIsMobile(window.innerWidth < 768);
    };

    check();

    window.addEventListener("resize", check);

    return () => window.removeEventListener("resize", check);
  }, []);

  const gridCols = isMobile
    ? "1fr"
    : screenWidth < 1024
      ? "repeat(2, 1fr)"
      : "repeat(3, 1fr)";

  const handleNavClick = (label) => {
    setActiveNav(label);
    setSidebarOpen(false);
  };

  return (
    <>
      <style>{`
      
        .parceiros-content { padding: 28px 32px; max-width: 1100px; }
        @media (max-width: 768px) { .parceiros-content { padding: 16px; } }
 
        .stats-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 32px;
          background: #fff;
          border-radius: 14px;
          border: 0.5px solid #e0e0e0;
          overflow: hidden;
        }
        @media (max-width: 600px) { .stats-row { grid-template-columns: 1fr; } }
 
        .stat-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 20px 24px;
          border-right: 0.5px solid #e0e0e0;
        }
        .stat-item:last-child { border-right: none; }
        @media (max-width: 600px) {
          .stat-item { border-right: none; border-bottom: 0.5px solid #e0e0e0; }
          .stat-item:last-child { border-bottom: none; }
        }
 
        .stat-icon {
          width: 52px; height: 52px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
 
        .parceiros-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin: 10px
        }
        @media (max-width: 1024px) { .parceiros-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 768px)  { .parceiros-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 480px)  { .parceiros-grid { grid-template-columns: 1fr; } }
 
        .parceiro-card {
          background: #fff;
          border-radius: 14px;
          border: 0.5px solid #e0e0e0;
          padding: 20px 16px 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: box-shadow 0.2s, transform 0.2s;
          cursor: default;
        }
        .parceiro-card:hover {
          box-shadow: 0 4px 18px rgba(0,0,0,0.08);
          transform: translateY(-2px);
        }
 
        .badge {
          display: inline-block;
          padding: 3px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 500;
          margin: 8px 0 10px;
        }
 
        .dropdown-wrapper { position: relative; }
        .dropdown-btn {
          display: flex; align-items: center; gap: 8px;
          padding: 8px 16px; border-radius: 10px;
          border: 1px solid #e0e0e0; background: #fff;
          font-size: 14px; cursor: pointer; white-space: nowrap;
          color: #333;
        }
        .dropdown-btn:hover { border-color: #aaa; }
        .dropdown-menu {
          position: absolute; right: 0; top: calc(100% + 6px);
          background: #fff; border: 0.5px solid #e0e0e0;
          border-radius: 10px; z-index: 100;
          min-width: 180px; overflow: hidden;
          box-shadow: 0 4px 16px rgba(0,0,0,0.08);
        }
        .dropdown-item {
          padding: 10px 16px; font-size: 14px; cursor: pointer; color: #333;
        }
        .dropdown-item:hover { background: #f5f5f5; }
        .dropdown-item.selected { color: #1a5c2a; font-weight: 600; }
 
        .banner {
          display: flex; align-items: center; justify-content: space-between;
          background: #fff; border-radius: 14px; border: 0.5px solid #e0e0e0;
          padding: 20px 28px; margin-top: 28px; gap: 16px; flex-wrap: wrap;
        }
        .banner-btn {
          display: flex; align-items: center; gap: 8px;
          background: #fff; color: #1a5c2a;
          border: 1.5px solid #1a5c2a; border-radius: 10px;
          padding: 10px 20px; font-size: 14px; font-weight: 600;
          cursor: pointer; white-space: nowrap;
          transition: background 0.15s, color 0.15s;
        }
        .banner-btn:hover { background: #1a5c2a; color: #fff; }
      
        * { box-sizing: border-box; margin: 0; padding: 0; }

          .layout {
          display: flex;
          min-height: 100vh;
          font-family: 'Segoe UI', sans-serif;
          background: #f0f0f0;
        }

        .sidebar {
          width: 210px;
          min-height: 100vh;
          background: #1a5c2a;
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
          z-index: 200;
          
        }

        .sidebar-logo { padding: 24px 20px 32px 20px; }


        .nav-btn {
          display: flex; align-items: center; gap: 12px; padding: 12px 16px;
          border-radius: 10px; border: none; cursor: pointer;
          color: #fff; font-size: 15px; text-align: left; width: 100%;
          transition: background 0.15s; background: transparent;
        }
        .nav-btn.active { background: #2e7d32; font-weight: 600; }
        .nav-btn:hover:not(.active) { background: #245c2e; }
        .sidebar-logout { padding: 16px 10px 32px; }


        @media (max-width: 768px) {
          .sidebar {
            position: fixed;
            top: 0;
            left: 0;
            height: 100vh;
            transform: translateX(-100%);
            transition: transform 0.25s ease;
          }

          .sidebar.open {
            transform: translateX(0);
          }
        }
        .sidebar-logo { padding: 24px 20px 32px 20px; }
        .sidebar-nav { flex: 1; display: flex; flex-direction: column; gap: 4px; padding: 0 10px; }
        .nav-btn {
          display: flex; align-items: center; gap: 12px; padding: 12px 16px;
          border-radius: 10px; border: none; cursor: pointer;
          color: #fff; font-size: 15px; text-align: left; width: 100%;
          transition: background 0.15s; background: transparent;
        }
       
    

        .sidebar.open {
          transform: translateX(0);
        }
        .overlay {
          display: none; position: fixed; inset: 0;
          background: rgba(0,0,0,0.45); z-index: 150;
        }

       
        .main { flex: 1; display: flex; flex-direction: column; min-height: 100vh; min-width: 0; }

        
        .header {
          display: flex; justify-content: flex-end; align-items: center;
          padding: 16px 36px; background: #fff;
          border-bottom: 1px solid #e8e8e8; gap: 14px;
        }
        .header-menu-btn { display: none; background: none; border: none; cursor: pointer; color: #222; margin-right: auto; }

        /* Content */
        .content { flex: 1; padding: 36px; }
        .content h1 { font-size: 26px; font-weight: 700; color: #222; margin-bottom: 6px; }
        .content p { font-size: 14px; color: #777; margin-bottom: 32px; }

        /* Cards grid */
        .cards-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          max-width: 820px;
        }
        .card {
          background: #fff; border-radius: 16px;
          padding: 28px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);
        }
        .card-inner { display: flex; align-items: flex-start; gap: 20px; }
        .card-icon {
          width: 60px; height: 60px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .card-num { font-size: 40px; font-weight: 700; line-height: 1; }
        .card-title { font-size: 16px; font-weight: 600; color: #222; margin: 4px 0 8px; }
        .card-desc { font-size: 13px; color: #888; line-height: 1.5; }
        .card-title-lg { font-size: 20px; font-weight: 700; line-height: 1.2; margin-bottom: 6px; }
        .card-btn {
          border: 2px solid; background: transparent;
          padding: 8px 20px; border-radius: 8px;
          font-size: 14px; font-weight: 600; cursor: pointer; margin-top: 16px;
          display: inline-block;
        }
        .avatar {
          width: 40px; height: 40px; border-radius: 50%;
          background: #e8f5e9; display: flex; align-items: center;
          justify-content: center; color: #2e7d32;
        }

        
        @media (max-width: 768px) {
          .sidebar {
            position: fixed; top: 0; left: 0; height: 100vh;
            transform: translateX(-100%);
          }
          .sidebar.open { transform: translateX(0); }
          .overlay.open { display: block; }
          .header-menu-btn { display: flex; }
          .header { padding: 16px 20px; }
          .content { padding: 24px 16px; }
          .cards-grid { grid-template-columns: 1fr; gap: 16px; max-width: 100%; }
          .content h1 { font-size: 22px; }
        }

        @media (max-width: 480px) {
          .card-inner { flex-direction: column; align-items: flex-start; gap: 14px; }
          .card-num { font-size: 36px; }
        }
      `}</style>

      <div className="layout">
        <div
          className={`overlay${sidebarOpen ? " open" : ""}`}
          onClick={() => setSidebarOpen(false)}
        />

        <aside className={`sidebar${sidebarOpen ? " open" : ""}`}>
          <div className="sidebar-logo">
            <MAPELogo />
          </div>
          <nav className="sidebar-nav">
            {navItems.map((item) => (
              <button
                key={item.label}
                className={`nav-btn${activeNav === item.label ? " active" : ""}`}
                onClick={() => handleNavClick(item.label)}
              >
                <span style={{ opacity: 0.9 }}>{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>
          <div className="sidebar-logout">
            <button className="nav-btn">
              <IconLogout />
              Sair
            </button>
          </div>
        </aside>

        <main className="main">
          <header className="header">
            <button
              className="header-menu-btn"
              onClick={() => setSidebarOpen(true)}
            >
              <IconMenu />
            </button>
            <div style={{ textAlign: "right" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "700",
                  fontSize: "15px",
                  color: "#222",
                  gap: "15px",
                }}
              >
                Escola Dr Alexandrino da Rocha
              </div>
              <div style={{ fontSize: "13px", color: "#666" }}>
                Olá, Antônio!
              </div>
            </div>
            <div className="avatar">
              <IconUser />
            </div>
          </header>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#1a5c2a",
                  marginBottom: 2,
                  marginLeft: "10px",
                }}
              >
                Nossos Parceiros
              </h2>
              <p style={{ fontSize: 13, color: "#888", marginLeft: "10px" }}>
                Empresas que fazem parte dessa transformação.
              </p>
            </div>

            <div className="dropdown-wrapper">
              <button
                className="dropdown-btn"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                </svg>
                {setor}
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="dropdown-menu">
                  {setores.map((s) => (
                    <div
                      key={s}
                      className={`dropdown-item ${setor === s ? "selected" : ""}`}
                      onClick={() => {
                        setSetor(s);
                        setDropdownOpen(false);
                      }}
                    >
                      {s}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="parceiros-grid">
            {filtrados.map((p) => {
              const badge = badgeColors[p.setor] || {
                bg: "#f5f5f5",
                color: "#555",
              };
              return (
                <div key={p.nome} className="parceiro-card">
                  <div
                    style={{
                      height: 56,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 8,
                    }}
                  >
                    {p.logo}
                  </div>
                  <p
                    style={{
                      fontWeight: 600,
                      fontSize: 14,
                      color: "#1a1a1a",
                      marginBottom: 2,
                    }}
                  >
                    {p.nome}
                  </p>
                  <span
                    className="badge"
                    style={{ background: badge.bg, color: badge.color }}
                  >
                    {p.setor}
                  </span>
                  <p style={{ fontSize: 12, color: "#666", lineHeight: 1.5 }}>
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="banner">
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: "#1a5c2a",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
                </svg>
              </div>
              <div>
                <p style={{ fontWeight: 700, fontSize: 14, color: "#1a5c2a" }}>
                  Juntos transformamos vidas!
                </p>
                <p style={{ fontSize: 13, color: "#666" }}>
                  Agradecemos a todas as empresas parceiras que acreditam no
                  poder da educação.
                </p>
              </div>
            </div>
            <button className="banner-btn">
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
              </svg>
              Seja um parceiro
            </button>
          </div>
        </main>
      </div>
    </>
  );
}
