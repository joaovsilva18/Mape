"use client";

import { useState, useEffect } from "react";

import DownloadIcon from "@mui/icons-material/Download";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const alunos = [
  {
    nome: "Ana Clara Silva",
    inicial: "AC",
    turma: "9º ano A",
    desempenho: "Excelente",
    frequencia: "95%",
    evolucao: "18%",
  },
  {
    nome: "Bruno Santos",
    inicial: "BS",
    turma: "9º ano B",
    desempenho: "Bom",
    frequencia: "88%",
    evolucao: "12%",
  },
  {
    nome: "Carla Souza",
    inicial: "CS",
    turma: "8º ano A",
    desempenho: "Bom",
    frequencia: "90%",
    evolucao: "10%",
  },
  {
    nome: "Daniel Lima",
    inicial: "DL",
    turma: "9º ano A",
    desempenho: "Regular",
    frequencia: "75%",
    evolucao: "5%",
  },
  {
    nome: "Eduarda Pereira",
    inicial: "EP",
    turma: "8º ano B",
    desempenho: "Excelente",
    frequencia: "97%",
    evolucao: "20%",
  },
  {
    nome: "Felipe Andrade",
    inicial: "FA",
    turma: "9º ano B",
    desempenho: "Bom",
    frequencia: "85%",
    evolucao: "8%",
  },
];

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

const badgeStyle = (desempenho) => {
  const map = {
    Excelente: { background: "#e8f5e9", color: "#2e7d32" },
    Bom: { background: "#e8f5e9", color: "#388e3c" },
    Regular: { background: "#fff8e1", color: "#f57f17" },
  };
  return {
    ...map[desempenho],
    padding: "4px 12px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "500",
  };
};

const avatarStyle = (desempenho) => ({
  width: "34px",
  height: "34px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "13px",
  fontWeight: "500",
  flexShrink: 0,
  background: desempenho === "Regular" ? "#fff3e0" : "#c8e6c9",
  color: desempenho === "Regular" ? "#e65100" : "#2e7d32",
});

export default function AlunosOficina() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeNav, setActiveNav] = useState("Alunos");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(1200);

  const handleNavClick = (label) => {
    setActiveNav(label);
    setSidebarOpen(false);
  };

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

  return (
    <>
      <style>{`
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
                style={{ fontWeight: "700", fontSize: "15px", color: "#222" }}
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
              alignItems: "center",
              gap: "6px",
              fontSize: "13px",
              color: "#888",
              marginBottom: "16px",
              flexWrap: "wrap",
              marginTop: "10px",
            }}
          >
            <ArrowBackIcon
              sx={{
                fontSize: 16,
                cursor: "pointer",
                marginLeft: "10px",
              }}
            />
            <span style={{ cursor: "pointer" }}>Oficinas</span>
            <ChevronRightIcon sx={{ fontSize: 16 }} />
            <span style={{ color: "#1a1a1a" }}>Robótica</span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "24px",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <div>
              <h1
                style={{
                  fontSize: isMobile ? "18px" : "22px",
                  fontWeight: "500",
                  color: "#1b4d2e",
                  marginLeft: "10px",
                }}
              >
                Alunos da Oficina: Robótica
              </h1>
              <p
                style={{ fontSize: "13px", color: "#888", marginLeft: "10px" }}
              >
                Lista de alunos e desempenho na oficina.
              </p>
            </div>
            <button
              style={{
                background: "#e67e22",
                color: "#fff",
                border: "none",
                padding: "9px 18px",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: "500",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                marginRight: "10px",
              }}
            >
              <DownloadIcon sx={{ fontSize: 18 }} /> Exportar
            </button>
          </div>

          {!isMobile ? (
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "14px",
                marginLeft: "10px",
              }}
            >
              <thead>
                <tr style={{ borderBottom: "1.5px solid #e0e0e0" }}>
                  {[
                    "Aluno",
                    "Turma",
                    "Inicial",
                    "Desempenho",
                    "Frequência",
                    "Evolução",
                  ].map((col) => (
                    <th
                      key={col}
                      style={{
                        textAlign: "left",
                        padding: "10px 12px",
                        fontWeight: "500",
                        color: "#555",
                        fontSize: "13px",
                      }}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {alunos.map((a) => (
                  <tr
                    key={a.nome}
                    style={{ borderBottom: "0.5px solid #f0f0f0" }}
                  >
                    <td style={{ padding: "12px" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          color: "#555",
                        }}
                      >
                        <div style={avatarStyle(a.desempenho)}>{a.inicial}</div>
                        <span>{a.nome}</span>
                      </div>
                    </td>
                    <td style={{ padding: "12px", color: "#555" }}>
                      {a.turma}
                    </td>
                    <td style={{ padding: "12px" }}>
                      <span style={badgeStyle(a.desempenho)}>
                        {a.desempenho}
                      </span>
                    </td>
                    <td style={{ padding: "12px", color: "#555" }}>
                      {a.frequencia}
                    </td>
                    <td style={{ padding: "12px" }}>
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                          color: "#2e7d32",
                          fontWeight: "500",
                          fontSize: "13px",
                        }}
                      >
                        <ArrowUpwardIcon sx={{ fontSize: 16 }} />
                        {a.evolucao}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              {alunos.map((a) => (
                <div
                  key={a.nome}
                  style={{
                    background: "#fff",
                    border: "0.5px solid #e0e0e0",
                    borderRadius: "12px",
                    padding: "14px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    <div style={avatarStyle(a.desempenho)}>{a.iniciais}</div>
                    <div>
                      <div
                        style={{
                          fontWeight: "500",
                          color: "#1a1a1a",
                          fontSize: "14px",
                        }}
                      >
                        {a.nome}
                      </div>
                      <div style={{ fontSize: "12px", color: "#888" }}>
                        {a.turma}
                      </div>
                    </div>
                    <div style={{ marginLeft: "auto" }}>
                      <span style={badgeStyle(a.desempenho)}>
                        {a.desempenho}
                      </span>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "16px",
                      fontSize: "13px",
                      color: "#555",
                      borderTop: "0.5px solid #f0f0f0",
                      paddingTop: "10px",
                    }}
                  >
                    <span>
                      📅 Frequência: <strong>{a.frequencia}</strong>
                    </span>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "2px",
                        color: "#2e7d32",
                      }}
                    >
                      <ArrowUpwardIcon sx={{ fontSize: 14 }} />
                      <strong>{a.evolucao}</strong>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </>
  );
}
