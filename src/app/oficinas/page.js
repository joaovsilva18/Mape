"use client";

import { useState, useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import BuildIcon from "@mui/icons-material/Build";
import GroupIcon from "@mui/icons-material/Group";
import BarChartIcon from "@mui/icons-material/BarChart";
import HandshakeIcon from "@mui/icons-material/Handshake";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import AddIcon from "@mui/icons-material/Add";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import CodeIcon from "@mui/icons-material/Code";
import PaletteIcon from "@mui/icons-material/Palette";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import RecyclingIcon from "@mui/icons-material/Recycling";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const oficinas = [
  {
    nome: "Robótica",
    desc: "Introdução à robótica e programação.",
    alunos: 28,
    icon: <SmartToyIcon sx={{ color: "#2e7d32", fontSize: 26 }} />,
    bg: "#e8f5e9",
  },
  {
    nome: "Programação",
    desc: "Lógica de programação e desenvolvimento.",
    alunos: 34,
    icon: <CodeIcon sx={{ color: "#2e7d32", fontSize: 26 }} />,
    bg: "#e8f5e9",
  },
  {
    nome: "Design Gráfico",
    desc: "Criação visual e design com criatividade.",
    alunos: 22,
    icon: <PaletteIcon sx={{ color: "#f9a825", fontSize: 26 }} />,
    bg: "#fff8e1",
  },
  {
    nome: "Empreendedorismo",
    desc: "Desenvolvimento de ideias e negócios.",
    alunos: 18,
    icon: <BusinessCenterIcon sx={{ color: "#e65100", fontSize: 26 }} />,
    bg: "#fff3e0",
  },
  {
    nome: "Vídeo e Mídia",
    desc: "Produção e edição de vídeos.",
    alunos: 16,
    icon: <PlayCircleIcon sx={{ color: "#2e7d32", fontSize: 26 }} />,
    bg: "#e8f5e9",
  },
  {
    nome: "Sustentabilidade",
    desc: "Projetos e práticas sustentáveis.",
    alunos: 12,
    icon: <RecyclingIcon sx={{ color: "#2e7d32", fontSize: 26 }} />,
    bg: "#e8f5e9",
  },
];

const navItems = [
  { label: "Início", icon: <HomeIcon sx={{ fontSize: 20 }} />, active: false },
  {
    label: "Oficinas",
    icon: <BuildIcon sx={{ fontSize: 20 }} />,
    active: true,
  },
  { label: "Alunos", icon: <GroupIcon sx={{ fontSize: 20 }} />, active: false },
  {
    label: "Desempenho",
    icon: <BarChartIcon sx={{ fontSize: 20 }} />,
    active: false,
  },
  {
    label: "Parceiros",
    icon: <HandshakeIcon sx={{ fontSize: 20 }} />,
    active: false,
  },
  {
    label: "Configurações",
    icon: <SettingsIcon sx={{ fontSize: 20 }} />,
    active: false,
  },
];

export default function Oficinas() {
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const gridCols = isMobile
    ? "1fr"
    : window.innerWidth < 1024
      ? "repeat(2, 1fr)"
      : "repeat(3, 1fr)";

  const sidebar = (
    <div
      style={{
        width: "200px",
        background: "#1b4d2e",
        display: "flex",
        flexDirection: "column",
        padding: "20px 12px",
        gap: "4px",
        ...(isMobile && {
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          zIndex: 1000,
          boxShadow: "4px 0 20px rgba(0,0,0,0.3)",
          transform: sidebarOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.25s ease",
        }),
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            color: "#fff",
            fontSize: "22px",
            fontWeight: "700",
            letterSpacing: "1px",
          }}
        >
          MAPE
        </div>
        {isMobile && (
          <CloseIcon
            onClick={() => setSidebarOpen(false)}
            sx={{ color: "#fff", cursor: "pointer", fontSize: 22 }}
          />
        )}
      </div>

      {navItems.map((item) => (
        <div
          key={item.label}
          onClick={() => isMobile && setSidebarOpen(false)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "10px 16px",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "14px",
            background: item.active ? "#4caf50" : "transparent",
            color: item.active ? "#fff" : "#c8d8c0",
          }}
        >
          {item.icon} {item.label}
        </div>
      ))}

      <div style={{ flex: 1 }} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "10px 16px",
          color: "#c8d8c0",
          cursor: "pointer",
        }}
      >
        <LogoutIcon sx={{ fontSize: 20 }} /> Sair
      </div>
    </div>
  );

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        fontFamily: "sans-serif",
        position: "relative",
      }}
    >
      {isMobile && sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.4)",
            zIndex: 999,
          }}
        />
      )}

      {sidebar}

      <div
        style={{
          flex: 1,
          background: "#f5f5f5",
          padding: isMobile ? "16px" : "28px",
          overflowY: "auto",
          minWidth: 0,
        }}
      >
        {isMobile && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "16px",
            }}
          >
            <MenuIcon
              onClick={() => setSidebarOpen(true)}
              sx={{ fontSize: 26, cursor: "pointer", color: "#1b4d2e" }}
            />
            <span
              style={{
                fontWeight: "700",
                fontSize: "18px",
                color: "#1b4d2e",
                letterSpacing: "1px",
              }}
            >
              MAPE
            </span>
          </div>
        )}

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
                color: "#1a1a1a",
                marginBottom: "4px",
              }}
            >
              Oficinas Disponíveis
            </h1>
            <p style={{ fontSize: "14px", color: "#666" }}>
              Confira todas as oficinas disponíveis para os alunos.
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
            }}
          >
            <AddIcon sx={{ fontSize: 18 }} /> Nova Oficina
          </button>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: gridCols,
            gap: "16px",
          }}
        >
          {oficinas.map((o) => (
            <div
              key={o.nome}
              style={{
                background: "#fff",
                borderRadius: "12px",
                border: "0.5px solid #e0e0e0",
                padding: "16px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: o.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "10px",
                }}
              >
                {o.icon}
              </div>
              <p
                style={{
                  fontWeight: "500",
                  fontSize: "15px",
                  color: "#1a1a1a",
                  marginBottom: "4px",
                }}
              >
                {o.nome}
              </p>
              <p style={{ fontSize: "13px", color: "#666", flex: 1 }}>
                {o.desc}
              </p>
              <p
                style={{
                  fontSize: "13px",
                  color: "#388e3c",
                  marginTop: "10px",
                }}
              >
                {o.alunos} alunos
              </p>
              <button
                style={{
                  background: "#1b5e20",
                  color: "#fff",
                  border: "none",
                  padding: "7px 18px",
                  borderRadius: "7px",
                  fontSize: "13px",
                  cursor: "pointer",
                  width: "100%",
                  marginTop: "10px",
                }}
              >
                Ver alunos
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
