"use client";
import { useState, useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import BuildIcon from "@mui/icons-material/Build";
import GroupIcon from "@mui/icons-material/Group";
import BarChartIcon from "@mui/icons-material/BarChart";
import HandshakeIcon from "@mui/icons-material/Handshake";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GroupsIcon from "@mui/icons-material/Groups";
import ExtensionIcon from "@mui/icons-material/Extension";
import SchoolIcon from "@mui/icons-material/School";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import StarIcon from "@mui/icons-material/Star";
import DownloadIcon from "@mui/icons-material/Download";

const navItems = [
  { label: "Início", icon: <HomeIcon sx={{ fontSize: 20 }} />, active: false },
  {
    label: "Oficinas",
    icon: <BuildIcon sx={{ fontSize: 20 }} />,
    active: false,
  },
  { label: "Alunos", icon: <GroupIcon sx={{ fontSize: 20 }} />, active: false },
  {
    label: "Desempenho",
    icon: <BarChartIcon sx={{ fontSize: 20 }} />,
    active: true,
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
    value: "8",
    label: "Oficinas disponíveis",
    desc: "Oficinas oferecidas para os alunos",
    icon: <ExtensionIcon sx={{ fontSize: 22, color: "#e65100" }} />,
    bg: "#fff3e0",
    color: "#e65100",
  },
  {
    value: "96%",
    label: "Engajamento",
    desc: "Alunos ativos nas oficinas",
    icon: <SchoolIcon sx={{ fontSize: 22, color: "#2e7d32" }} />,
    bg: "#e8f5e9",
    color: "#2e7d32",
  },
  {
    value: "-24%",
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

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setSidebarOpen(false);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const sidebar = (
    <div
      style={{
        width: "190px",
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
          marginBottom: "2px",
        }}
      >
        <div
          style={{
            color: "#fff",
            fontSize: "20px",
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
      <div style={{ color: "#a5c8a5", fontSize: "9px", marginBottom: "18px" }}>
        Oficinas que Transformam
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
      {/* Overlay mobile */}
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
          background: "#f7f7f5",
          overflowY: "auto",
          padding: isMobile ? "16px" : "24px",
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
              }}
            >
              Dashboard
            </h1>
            <p style={{ fontSize: "13px", color: "#888" }}>
              Acompanhe os resultados do MAPE na sua escola.
            </p>
          </div>
          {!isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <NotificationsIcon
                sx={{ color: "#888", fontSize: 20, cursor: "pointer" }}
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "#fff",
                  border: "0.5px solid #ddd",
                  borderRadius: "8px",
                  padding: "6px 12px",
                  cursor: "pointer",
                }}
              >
                <AccountCircleIcon sx={{ fontSize: 18, color: "#555" }} />
                <div>
                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#1a1a1a",
                    }}
                  >
                    Escola Exemplo
                  </div>
                  <div style={{ fontSize: "11px", color: "#888" }}>Gestor</div>
                </div>
                <ExpandMoreIcon sx={{ fontSize: 16, color: "#888" }} />
              </div>
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
                  color: "#555",
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
                    fontSize: "11px",
                    fontWeight: "500",
                    color: "#333",
                    marginBottom: "2px",
                  }}
                >
                  {m.label}
                </div>
                <div
                  style={{ fontSize: "10px", color: "#999", lineHeight: "1.3" }}
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
          }}
        >
          {[
            {
              title: "Antes do MAPE",
              data: beforeData,
              label: "40%",
              sub: "evasão",
            },
            {
              title: "Depois do MAPE",
              data: afterData,
              label: "16%",
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
                  color: "#999",
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
                      fontSize: "11px",
                      color: "#555",
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

          {!isMobile && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 4px",
                flexShrink: 0,
                order: 1,
              }}
            >
              <ArrowForwardIcon sx={{ fontSize: 32, color: "#2e7d32" }} />
            </div>
          )}
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
          }}
        >
          <StarIcon sx={{ fontSize: 28, color: "#f9a825", flexShrink: 0 }} />
          <div>
            <div
              style={{ fontSize: "14px", fontWeight: "600", color: "#1b4d2e" }}
            >
              O MAPE está transformando a realidade da sua escola!
            </div>
            <div style={{ fontSize: "12px", color: "#555" }}>
              Continue incentivando a participação dos alunos nas oficinas.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
