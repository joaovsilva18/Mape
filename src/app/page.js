"use client";

import { useState } from "react";

const MAPELogo = () => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
    <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
      <span style={{ fontSize: "28px", fontWeight: "900", color: "#fff", letterSpacing: "-1px", fontFamily: "Georgia, serif" }}>
        M
      </span>
      <div style={{
        width: "22px", height: "22px", borderRadius: "50%", border: "3px solid #f59e0b",
        display: "flex", alignItems: "center", justifyContent: "center", marginTop: "-4px"
      }}>
        <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#f59e0b" }} />
      </div>
      <span style={{ fontSize: "28px", fontWeight: "900", color: "#fff", letterSpacing: "-1px", fontFamily: "Georgia, serif" }}>
        PE
      </span>
    </div>
    <span style={{ fontSize: "9px", color: "#a3c993", letterSpacing: "0.5px", marginTop: "-4px" }}>
      vamos um Transformar
    </span>
  </div>
);

const IconUsers = () => (
  <svg width="36" height="36" fill="white" viewBox="0 0 24 24">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const IconPuzzle = () => (
  <svg width="36" height="36" fill="white" viewBox="0 0 24 24">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
    <line x1="7" y1="7" x2="7.01" y2="7"/>
  </svg>
);

const IconChart = () => (
  <svg width="36" height="36" fill="white" viewBox="0 0 24 24">
    <path d="M21.21 15.89A10 10 0 1 1 8 2.83"/>
    <path d="M22 12A10 10 0 0 0 12 2v10z"/>
  </svg>
);

const IconHandshake = () => (
  <svg width="36" height="36" fill="white" viewBox="0 0 24 24">
    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/>
  </svg>
);

const IconHome = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9,22 9,12 15,12 15,22"/>
  </svg>
);

const IconWrench = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.07 4.93l-2.83 2.83M4.93 4.93l2.83 2.83M4.93 19.07l2.83-2.83M19.07 19.07l-2.83-2.83"/>
    <path d="M12 2v2M12 20v2M2 12h2M20 12h2"/>
  </svg>
);

const IconStudents = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const IconPerformance = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
  </svg>
);

const IconPartners = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const IconSettings = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
);

const IconLogout = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
    <polyline points="16 17 21 12 16 7"/>
    <line x1="21" y1="12" x2="9" y2="12"/>
  </svg>
);

const IconUser = () => (
  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
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

export default function Home() {
  const [activeNav, setActiveNav] = useState("Início");

  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "'Segoe UI', sans-serif", background: "#f0f0f0" }}>
      {/* Sidebar */}
      <aside style={{
        width: "210px",
        minHeight: "100vh",
        background: "#1a5c2a",
        display: "flex",
        flexDirection: "column",
        padding: "0",
        flexShrink: 0,
      }}>
        {/* Logo */}
        <div style={{ padding: "24px 20px 32px 20px" }}>
          <MAPELogo />
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, display: "flex", flexDirection: "column", gap: "4px", padding: "0 10px" }}>
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => setActiveNav(item.label)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "12px 16px",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
                background: activeNav === item.label ? "#2e7d32" : "transparent",
                color: "#fff",
                fontSize: "15px",
                fontWeight: activeNav === item.label ? "600" : "400",
                textAlign: "left",
                width: "100%",
                transition: "background 0.15s",
              }}
              onMouseEnter={e => { if (activeNav !== item.label) e.currentTarget.style.background = "#245c2e"; }}
              onMouseLeave={e => { if (activeNav !== item.label) e.currentTarget.style.background = "transparent"; }}
            >
              <span style={{ opacity: 0.9 }}>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        {/* Logout */}
        <div style={{ padding: "16px 10px 32px" }}>
          <button style={{
            display: "flex", alignItems: "center", gap: "12px",
            padding: "12px 16px", borderRadius: "10px", border: "none",
            cursor: "pointer", background: "transparent", color: "#fff",
            fontSize: "15px", width: "100%",
          }}
            onMouseEnter={e => e.currentTarget.style.background = "#245c2e"}
            onMouseLeave={e => e.currentTarget.style.background = "transparent"}
          >
            <IconLogout />
            Sair
          </button>
        </div>
      </aside>

      {/* Main */}
      <main style={{ flex: 1, display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        {/* Header */}
        <header style={{
          display: "flex", justifyContent: "flex-end", alignItems: "center",
          padding: "16px 36px", background: "#fff", borderBottom: "1px solid #e8e8e8",
          gap: "14px",
        }}>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontWeight: "700", fontSize: "15px", color: "#222" }}>Escola Exemplo</div>
            <div style={{ fontSize: "13px", color: "#666" }}>Olá, Gestor!</div>
          </div>
          <div style={{
            width: "40px", height: "40px", borderRadius: "50%",
            background: "#e8f5e9", display: "flex", alignItems: "center",
            justifyContent: "center", color: "#2e7d32",
          }}>
            <IconUser />
          </div>
        </header>

        {/* Content */}
        <div style={{ flex: 1, padding: "36px 36px" }}>
          <h1 style={{ fontSize: "26px", fontWeight: "700", color: "#222", margin: "0 0 6px" }}>
            Painel Principal
          </h1>
          <p style={{ fontSize: "14px", color: "#777", margin: "0 0 32px" }}>
            Acompanhe os principais indicadores da sua escola.
          </p>

          {/* Cards Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "24px",
            maxWidth: "820px",
          }}>
            {/* Card 1 - Alunos em oficinas */}
            <div style={{
              background: "#fff", borderRadius: "16px",
              padding: "28px 28px 32px", boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}>
                <div style={{
                  width: "60px", height: "60px", borderRadius: "50%",
                  background: "#2e7d32", display: "flex", alignItems: "center",
                  justifyContent: "center", flexShrink: 0,
                }}>
                  <IconUsers />
                </div>
                <div>
                  <div style={{ fontSize: "40px", fontWeight: "700", color: "#2e7d32", lineHeight: 1 }}>120</div>
                  <div style={{ fontSize: "16px", fontWeight: "600", color: "#222", margin: "4px 0 8px" }}>
                    Alunos em oficinas
                  </div>
                  <div style={{ fontSize: "13px", color: "#888", lineHeight: "1.5" }}>
                    Estudantes participando<br />de pelo menos uma oficina
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Oficinas disponíveis */}
            <div style={{
              background: "#fff", borderRadius: "16px",
              padding: "28px 28px 28px", boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}>
                <div style={{
                  width: "60px", height: "60px", borderRadius: "50%",
                  background: "#f57c00", display: "flex", alignItems: "center",
                  justifyContent: "center", flexShrink: 0,
                }}>
                  <IconPuzzle />
                </div>
                <div>
                  <div style={{ fontSize: "40px", fontWeight: "700", color: "#f57c00", lineHeight: 1 }}>8</div>
                  <div style={{ fontSize: "16px", fontWeight: "600", color: "#222", margin: "4px 0 6px" }}>
                    Oficinas disponíveis
                  </div>
                  <div style={{ fontSize: "13px", color: "#888", lineHeight: "1.5", marginBottom: "16px" }}>
                    Oficinas ofertadas<br />para os alunos
                  </div>
                  <button style={{
                    border: "2px solid #f57c00", background: "transparent",
                    color: "#f57c00", padding: "8px 20px", borderRadius: "8px",
                    fontSize: "14px", fontWeight: "600", cursor: "pointer",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.background = "#fff7ed"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
                  >
                    Ver oficinas
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3 - Dashboard */}
            <div style={{
              background: "#fff", borderRadius: "16px",
              padding: "28px 28px 28px", boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}>
                <div style={{
                  width: "60px", height: "60px", borderRadius: "50%",
                  background: "#2e7d32", display: "flex", alignItems: "center",
                  justifyContent: "center", flexShrink: 0,
                }}>
                  <IconChart />
                </div>
                <div>
                  <div style={{ fontSize: "20px", fontWeight: "700", color: "#2e7d32", margin: "0 0 6px", lineHeight: 1.2 }}>
                    Dashboard
                  </div>
                  <div style={{ fontSize: "13px", color: "#888", lineHeight: "1.5", marginBottom: "16px" }}>
                    Veja a comparação da evasão<br />antes e depois do MAPE
                  </div>
                  <button style={{
                    border: "2px solid #2e7d32", background: "transparent",
                    color: "#2e7d32", padding: "8px 20px", borderRadius: "8px",
                    fontSize: "14px", fontWeight: "600", cursor: "pointer",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.background = "#f1f8f2"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
                  >
                    Ver dashboard
                  </button>
                </div>
              </div>
            </div>

            {/* Card 4 - Empresas parceiras */}
            <div style={{
              background: "#fff", borderRadius: "16px",
              padding: "28px 28px 28px", boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}>
                <div style={{
                  width: "60px", height: "60px", borderRadius: "50%",
                  background: "#f57c00", display: "flex", alignItems: "center",
                  justifyContent: "center", flexShrink: 0,
                }}>
                  <IconHandshake />
                </div>
                <div>
                  <div style={{ fontSize: "20px", fontWeight: "700", color: "#f57c00", margin: "0 0 6px", lineHeight: 1.2 }}>
                    Empresas parceiras
                  </div>
                  <div style={{ fontSize: "13px", color: "#888", lineHeight: "1.5", marginBottom: "16px" }}>
                    Conheça as empresas<br />que apoiam o projeto
                  </div>
                  <button style={{
                    border: "2px solid #f57c00", background: "transparent",
                    color: "#f57c00", padding: "8px 20px", borderRadius: "8px",
                    fontSize: "14px", fontWeight: "600", cursor: "pointer",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.background = "#fff7ed"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
                  >
                    Ver parceiros
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}