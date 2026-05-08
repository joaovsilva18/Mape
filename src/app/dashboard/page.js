"use client";
import { useState, useEffect } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GroupsIcon from "@mui/icons-material/Groups";
import ExtensionIcon from "@mui/icons-material/Extension";
import SchoolIcon from "@mui/icons-material/School";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import StarIcon from "@mui/icons-material/Star";

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

const metrics = [
  {
    value: "120",
    label: "Alunos em oficinas",
    desc: "Participando de pelo menos uma oficina",
    icon: <GroupsIcon sx={{ fontSize: 22, color: "#2e7d32" }} />,
    bg: "#e8f5e9",
    color: "#2e7d32",
  },
  {
    value: "6",
    label: "Oficinas disponíveis",
    desc: "Oficinas oferecidas para os alunos",
    icon: <ExtensionIcon sx={{ fontSize: 22, color: "#e65100" }} />,
    bg: "#fff3e0",
    color: "#e65100",
  },
  {
    value: "83,26%",
    label: "Engajamento",
    desc: "Alunos ativos nas oficinas",
    icon: <SchoolIcon sx={{ fontSize: 22, color: "#2e7d32" }} />,
    bg: "#e8f5e9",
    color: "#2e7d32",
  },
  {
    value: "16,74%",
    label: "Redução da evasão",
    desc: "Comparação antes e depois do MAPE",
    icon: <TrendingDownIcon sx={{ fontSize: 22, color: "#e65100" }} />,
    bg: "#fff3e0",
    color: "#e65100",
  },
];

function PieChart({ data, label, sublabel }) {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  const cx = 80;
  const cy = 80;
  const r = 70;
  const hole = 32;

  const slices = data.map((d, index) => {
    const previousTotal = data
      .slice(0, index)
      .reduce((sum, item) => sum + item.value, 0);

    const start = (previousTotal / total) * 2 * Math.PI - Math.PI / 2;

    const end = ((previousTotal + d.value) / total) * 2 * Math.PI - Math.PI / 2;

    const x1 = cx + r * Math.cos(start);
    const y1 = cy + r * Math.sin(start);

    const x2 = cx + r * Math.cos(end);
    const y2 = cy + r * Math.sin(end);

    const largeArc = end - start > Math.PI ? 1 : 0;

    return {
      path: `
        M ${cx},${cy}
        L ${x1},${y1}
        A ${r},${r} 0 ${largeArc},1 ${x2},${y2}
        Z
      `,
      color: d.color,
    };
  });

  return (
    <svg viewBox="0 0 160 160" width="130" height="130">
      {slices.map((slice, index) => (
        <path key={index} d={slice.path} fill={slice.color} />
      ))}

      <circle cx={cx} cy={cy} r={hole} fill="#fff" />

      <text
        x={cx}
        y={cy - 4}
        textAnchor="middle"
        fontSize="13"
        fontWeight="700"
        fill={data[0].color}
      >
        {label}
      </text>

      <text x={cx} y={cy + 10} textAnchor="middle" fontSize="9" fill="#999">
        {sublabel}
      </text>
    </svg>
  );
}
const legend = [
  { color: "#e53935", label: "Evasão" },
  { color: "#fb8c00", label: "Risco de evasão" },
  { color: "#fdd835", label: "Em atenção" },
  { color: "#43a047", label: "Permanecem" },
];

const beforeData = [
  { value: 40, color: "#e53935" },
  { value: 35, color: "#fdd835" },
  { value: 15, color: "#fb8c00" },
  { value: 10, color: "#43a047" },
];

const afterData = [
  { value: 16, color: "#e53935" },
  { value: 24, color: "#fdd835" },
  { value: 20, color: "#fb8c00" },
  { value: 40, color: "#43a047" },
];

export default function Dashboard() {
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Desempenho");

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setSidebarOpen(false);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleNavClick = (label) => {
    setActiveNav(label);
    setSidebarOpen(false);
  };

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
              marginBottom: "20px",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <div>
              <h1
                style={{
                  fontSize: isMobile ? "18px" : "22px",
                  fontWeight: "600",
                  color: "#1a1a1a",
                  marginBottom: "2px",
                  marginLeft: "10px",
                }}
              >
                Dashboard
              </h1>
              <p
                style={{ fontSize: "13px", color: "#888", marginLeft: "10px" }}
              >
                Acompanhe os resultados do MAPE na sua escola.
              </p>
            </div>
            {!isMobile && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    background: "#fff",
                    border: "0.5px solid #ddd",
                    borderRadius: "8px",
                    padding: "6px 12px",
                    cursor: "pointer",
                    fontSize: "13px",
                    color: "#3d3d3d",
                    marginRight: "10px",
                    marginTop: "10px",
                  }}
                >
                  <CalendarTodayIcon sx={{ fontSize: 16 }} /> Período: 2024
                  <ExpandMoreIcon sx={{ fontSize: 16 }} />
                </div>
              </div>
            )}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "repeat(2,1fr)" : "repeat(4,1fr)",
              gap: "12px",
              marginBottom: "20px",
              marginLeft: "10px",
            }}
          >
            {metrics.map((m) => (
              <div
                key={m.label}
                style={{
                  background: "#fff",
                  borderRadius: "12px",
                  border: "0.5px solid #e8e8e8",
                  padding: "14px 16px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "50%",
                    background: m.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {m.icon}
                </div>
                <div style={{ minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      color: m.color,
                    }}
                  >
                    {m.value}
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#333",
                      marginBottom: "2px",
                    }}
                  >
                    {m.label}
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#3d3d3d",
                      lineHeight: "1.3",
                    }}
                  >
                    {m.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              gap: "14px",
              flexWrap: "wrap",
              marginBottom: "16px",
              margin: "10px",
            }}
          >
            {[
              {
                title: "Antes do MAPE",
                data: beforeData,
                label: "18,6%",
                sub: "evasão",
              },
              {
                title: "Depois do MAPE",
                data: afterData,
                label: "10%",
                sub: "evasão",
              },
            ].map((chart, i) => (
              <div
                key={i}
                style={{
                  background: "#fff",
                  borderRadius: "12px",
                  border: "0.5px solid #e8e8e8",
                  padding: "18px",
                  flex: 1,
                  minWidth: "200px",
                }}
              >
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#1a1a1a",
                    marginBottom: "2px",
                  }}
                >
                  {chart.title}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#3d3d3d",
                    marginBottom: "14px",
                  }}
                >
                  Taxa de evasão
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "12px",
                  }}
                >
                  <PieChart
                    data={chart.data}
                    label={chart.label}
                    sublabel={chart.sub}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                    justifyContent: "center",
                  }}
                >
                  {legend.map((l) => (
                    <span
                      key={l.label}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        fontSize: "13px",
                        color: "#252525",
                      }}
                    >
                      <span
                        style={{
                          width: "10px",
                          height: "10px",
                          borderRadius: "50%",
                          background: l.color,
                          display: "inline-block",
                          flexShrink: 0,
                        }}
                      />
                      {l.label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              background: "#e8f5e9",
              borderRadius: "12px",
              border: "0.5px solid #c8e6c9",
              padding: "14px 20px",
              display: "flex",
              alignItems: "center",
              gap: "14px",
              margin: "10px",
            }}
          >
            <StarIcon sx={{ fontSize: 28, color: "#f9a825", flexShrink: 0 }} />
            <div>
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#1b4d2e",
                }}
              >
                O MAPE está transformando a realidade da sua escola!
              </div>
              <div style={{ fontSize: "12px", color: "#3d3d3d" }}>
                Continue incentivando a participação dos alunos nas oficinas.
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
