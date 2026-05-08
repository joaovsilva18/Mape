"use client";

import NotificationsIcon from "@mui/icons-material/Notifications";

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

<header className="header">
  <button className="header-menu-btn" onClick={() => setSidebarOpen(true)}>
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
      <NotificationsIcon
        sx={{ color: "#000000", fontSize: 20, cursor: "pointer" }}
      />
      Escola Dr Alexandrino da Rocha
    </div>
    <div style={{ fontSize: "13px", color: "#666" }}>Olá, Antônio!</div>
  </div>
  <div className="avatar">
    <IconUser />
  </div>
</header>;
