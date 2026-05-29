import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        backgroundColor: "#111827",
        borderBottom: "1px solid #1f2937"
      }}
    >
      <h2 style={{ color: "#8b5cf6" }}>
        VenturePilot AI 🚀
      </h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={navStyle}>
          Home
        </Link>

        <Link to="/dashboard" style={navStyle}>
          Dashboard
        </Link>

        <Link to="/reports" style={navStyle}>
          Reports
        </Link>
      </div>
    </nav>
  );
}

const navStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "18px"
};

export default Navbar;