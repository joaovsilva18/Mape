"use client";

import { useState, useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import BuildIcon from "@mui/icons-material/Build";
import GroupIcon from "@mui/icons-material/Group";
import BarChartIcon from "@mui/icons-material/BarChart";
import HandshakeIcon from "@mui/icons-material/Handshake";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import DownloadIcon from "@mui/icons-material/Download";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const alunos = [
  {
    nome: "Ana Clara Silva",
    turma: "9º ano A",
    desempenho: "Excelente",
    frequencia: "95%",
    evolucao: "18%",
  },
  {
    nome: "Bruno Santos",
    turma: "9º ano B",
    desempenho: "Bom",
    frequencia: "88%",
    evolucao: "12%",
  },
  {
    nome: "Carla Souza",

    turma: "8º ano A",
    desempenho: "Bom",
    frequencia: "90%",
    evolucao: "10%",
  },
  {
    nome: "Daniel Lima",

    turma: "9º ano A",
    desempenho: "Regular",
    frequencia: "75%",
    evolucao: "5%",
  },
  {
    nome: "Eduarda Pereira",

    turma: "8º ano B",
    desempenho: "Excelente",
    frequencia: "97%",
    evolucao: "20%",
  },
  {
    nome: "Felipe Andrade",

    turma: "9º ano B",
    desempenho: "Bom",
    frequencia: "85%",
    evolucao: "8%",
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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setSidebarOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sidebar = (
    <div
      style={{
        width: "200px",
        background: "#1b4d2e",
        display: "flex",
        flexDirection: "column",
        padding: "20px 12px",
        gap: "4px",
        // no mobile vira um overlay fixo
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
          marginBottom: "4px",
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
      <div
        style={{
          color: "#a5c8a5",
          fontSize: "10px",
          padding: "0 2px",
          marginBottom: "16px",
        }}
      >
        Missão que Transforma
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

      {!isMobile && sidebar}
      {isMobile && sidebar}

      <div
        style={{
          flex: 1,
          background: "#fff",
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
            alignItems: "center",
            gap: "6px",
            fontSize: "13px",
            color: "#888",
            marginBottom: "16px",
            flexWrap: "wrap",
          }}
        >
          <ArrowBackIcon sx={{ fontSize: 16, cursor: "pointer" }} />
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
                marginBottom: "4px",
              }}
            >
              Alunos da Oficina: Robótica
            </h1>
            <p style={{ fontSize: "13px", color: "#888" }}>
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
            }}
          >
            <thead>
              <tr style={{ borderBottom: "1.5px solid #e0e0e0" }}>
                {["Aluno", "Turma", "Desempenho", "Frequência", "Evolução"].map(
                  (col) => (
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
                  ),
                )}
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
                      }}
                    >
                      <div style={avatarStyle(a.desempenho)}>{a.iniciais}</div>
                      <span>{a.nome}</span>
                    </div>
                  </td>
                  <td style={{ padding: "12px", color: "#555" }}>{a.turma}</td>
                  <td style={{ padding: "12px" }}>
                    <span style={badgeStyle(a.desempenho)}>{a.desempenho}</span>
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
                    <span style={badgeStyle(a.desempenho)}>{a.desempenho}</span>
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
      </div>
    </div>
  );
}
