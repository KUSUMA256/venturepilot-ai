
import { useState } from "react";
import jsPDF from "jspdf";

function App() {

  const [idea, setIdea] = useState("");
  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState(null);

  const [history, setHistory] = useState([]);

  // GENERATE STARTUP

  const generateStartup = async () => {

    if (!idea) return;

    setLoading(true);

    try {

      const response = await fetch(
        "http://127.0.0.1:8000/generate-startup",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json"
          },

          body: JSON.stringify({
            idea: idea
          })
        }
      );

      const data =
        await response.json();

      setResult(data);

      setHistory((prev) => [
        data,
        ...prev
      ]);

      setTimeout(() => {

        window.scrollTo({
          top: 700,
          behavior: "smooth"
        });

      }, 300);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  // PDF DOWNLOAD

  const downloadPDF = () => {

    if (!result) return;

    const doc = new jsPDF();

    doc.setFontSize(16);

    doc.text(
      "VenturePilot AI Startup Report",
      10,
      20
    );

    doc.setFontSize(12);

    doc.text(
      `Startup Name: ${result.startup_name}`,
      10,
      40
    );

    doc.text(
      `Problem: ${result.problem}`,
      10,
      60
    );

    doc.text(
      `Audience: ${result.audience}`,
      10,
      80
    );

    doc.text(
      `Revenue: ${result.revenue}`,
      10,
      100
    );

    doc.text(
      `Market: ${result.market}`,
      10,
      120
    );

    doc.save(
      "startup-report.pdf"
    );

  };

  return (

    <div
      style={{
        background:
          "linear-gradient(135deg,#020617,#0f172a,#111827)",

        minHeight: "100vh",

        color: "white",

        padding: "30px",

        fontFamily: "Inter",

        overflowX: "hidden",

        position: "relative"
      }}
    >

      {/* BACKGROUND GLOW */}

      <div
        style={{
          position: "absolute",

          width: "400px",

          height: "400px",

          background:
            "rgba(139,92,246,0.18)",

          borderRadius: "50%",

          filter:
            "blur(120px)",

          top: "-100px",

          right: "-100px"
        }}
      ></div>

      {/* NAVBAR */}

      <nav
        style={{
          display: "flex",

          justifyContent:
            "space-between",

          alignItems: "center",

          padding: "20px 30px",

          borderRadius: "18px",

          background:
            "rgba(255,255,255,0.05)",

          backdropFilter:
            "blur(10px)",

          border:
            "1px solid rgba(255,255,255,0.08)",

          marginBottom: "60px",

          position: "sticky",

          top: "10px",

          zIndex: 100
        }}
      >

        <h2
          style={{
            fontSize: "32px",

            fontWeight: "800",

            background:
              "linear-gradient(135deg,#8b5cf6,#ec4899)",

            WebkitBackgroundClip:
              "text",

            WebkitTextFillColor:
              "transparent"
          }}
        >
          VenturePilot AI 🚀
        </h2>

        <div
          style={{
            display: "flex",

            gap: "30px",

            fontSize: "18px"
          }}
        >

          <a
            href="#"
            style={navItem}
          >
            Home
          </a>

          <a
            href="#features"
            style={navItem}
          >
            Features
          </a>

          <a
            href="#demo"
            style={navItem}
          >
            AI Demo
          </a>

          <a
            href="#dashboard"
            style={navItem}
          >
            Dashboard
          </a>

        </div>

      </nav>

      {/* HERO SECTION */}

      <div
        style={{
          marginTop: "40px",

          maxWidth: "1400px",

          display: "flex",

          flexDirection:
            "column",

          alignItems: "center",

          textAlign: "center",

          marginInline:
            "auto"
        }}
      >

        <h1
          style={{
            fontSize: "72px",

            fontWeight: "800",

            lineHeight: "1.1",

            marginBottom: "25px",

            whiteSpace:
              "nowrap",

            background:
              "linear-gradient(135deg,#8b5cf6,#a855f7,#ec4899)",

            WebkitBackgroundClip:
              "text",

            WebkitTextFillColor:
              "transparent",

            textShadow:
              "0 0 40px rgba(139,92,246,0.4)"
          }}
        >
          Build AI-Powered Startup Intelligence
        </h1>

        <p
          style={{
            fontSize: "24px",

            color: "#cbd5e1",

            lineHeight: "1.7",

            marginBottom: "45px",

            maxWidth: "1100px"
          }}
        >
          Multi-Agent AI platform for
          generating startup ideas,
          market analysis, revenue
          strategies, and intelligent
          business insights.
        </p>

        {/* HERO STATS */}

        <div
          style={{
            display: "flex",

            gap: "40px",

            marginBottom: "40px",

            marginTop: "10px"
          }}
        >

          <div>

            <h1
              style={{
                color: "#8b5cf6"
              }}
            >
              10K+
            </h1>

            <p
              style={{
                color: "#cbd5e1"
              }}
            >
              AI Startups Generated
            </p>

          </div>

          <div>

            <h1
              style={{
                color: "#8b5cf6"
              }}
            >
              500+
            </h1>

            <p
              style={{
                color: "#cbd5e1"
              }}
            >
              Market Reports
            </p>

          </div>

          <div>

            <h1
              style={{
                color: "#8b5cf6"
              }}
            >
              99%
            </h1>
                        <p
              style={{
                color: "#cbd5e1"
              }}
            >
              AI Accuracy
            </p>

          </div>

        </div>

        {/* INPUT SECTION */}

        <div
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap"
          }}
        >

          <input
            type="text"
            placeholder="Enter startup idea..."
            value={idea}
            onChange={(e) =>
              setIdea(e.target.value)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                generateStartup();
              }
            }}
            style={{
              width: "500px",
              padding: "20px",
              borderRadius: "16px",
              border: "1px solid #334155",
              fontSize: "16px",
              background:
                "rgba(255,255,255,0.05)",
              color: "white",
              outline: "none",
              backdropFilter: "blur(10px)"
            }}
          />

          <button
            style={{
              ...buttonStyle,
              opacity: loading ? 0.7 : 1
            }}
            onClick={generateStartup}
            disabled={loading}
          >
            {loading
              ? "Generating..."
              : "Generate AI Startup"}
          </button>

          <button
            onClick={() => {
              setIdea("");
              setResult(null);
            }}
            style={clearButton}
          >
            Clear
          </button>

        </div>

        {/* EMPTY STATE */}

        {!loading && !result && (

          <p
            style={{
              marginTop: "40px",
              color: "#94a3b8"
            }}
          >
            Your AI startup analysis will
            appear here 🚀
          </p>

        )}

        {/* LOADING */}

        {loading && (

          <div
            style={{
              marginTop: "35px",
              color: "#8b5cf6",
              fontSize: "24px",
              fontWeight: "bold"
            }}
          >
            ⚡ Generating startup intelligence...
          </div>

        )}

        {/* RESULT SECTION */}

        {!loading && result && (

          <div
            style={{
              width: "100%",
              maxWidth: "1100px",
              marginTop: "50px"
            }}
          >

            <div
              style={{
                display: "flex",
                gap: "15px",
                marginBottom: "25px",
                flexWrap: "wrap"
              }}
            >

              <button
                onClick={() =>
                  navigator.clipboard.writeText(
                    JSON.stringify(
                      result,
                      null,
                      2
                    )
                  )
                }
                style={smallButton}
              >
                📋 Copy Result
              </button>

              <button
                onClick={downloadPDF}
                style={smallButton}
              >
                📄 Download PDF
              </button>

            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit,minmax(250px,1fr))",
                gap: "25px"
              }}
            >

              <ResultCard
                title="🚀 Startup Name"
                value={
                  result.startup_name
                }
              />

              <ResultCard
                title="❓ Problem Solved"
                value={result.problem}
              />

              <ResultCard
                title="🎯 Target Audience"
                value={result.audience}
              />

              <ResultCard
                title="💰 Revenue Model"
                value={result.revenue}
              />

              <ResultCard
                title="📈 Market Opportunity"
                value={result.market}
              />

              <ResultCard
  title="⭐ Startup Score"
  value={result.score}
/>

<ResultCard
  title="🏷️ Startup Category"
  value={result.category}
/>

<ResultCard
  title="🎨 Brand Vision"
  value={result.vision}
/>

            </div>

          </div>

        )}

        {/* STARTUP HISTORY */}

        {history.length > 0 && (

          <div
            style={{
              marginTop: "60px",
              width: "100%",
              maxWidth: "1100px"
            }}
          >

            <h2
              style={{
                color: "#8b5cf6",
                marginBottom: "20px"
              }}
            >
              📜 Recent Startups
            </h2>

            {history.map(
              (item, index) => (
                <div
                  key={index}
                  style={historyCard}
                >
                  {item.startup_name}
                </div>
              )
            )}

          </div>

        )}

      </div>
            {/* FEATURE CARDS */}

      <div
        id="features"
        style={{
          marginTop: "100px",
          display: "flex",
          gap: "25px",
          flexWrap: "wrap",
          justifyContent: "center"
        }}
      >

        <FeatureCard
          title="🤖 AI Startup Generator"
          text="Generate innovative startup ideas using advanced Multi-Agent AI workflows."
        />

        <FeatureCard
          title="📊 Market Analysis"
          text="Analyze competitors, trends, and market opportunities instantly with AI."
        />

        <FeatureCard
          title="💰 Revenue Strategy"
          text="Generate monetization plans and pricing models automatically using AI agents."
        />

        <FeatureCard
          title="📈 Business Forecasting"
          text="Predict startup growth and future market potential using AI analytics."
        />

      </div>

      {/* AI DEMO */}

      <div
        id="demo"
        style={{
          marginTop: "120px",
          textAlign: "center"
        }}
      >

        <h1
          style={{
            fontSize: "50px",
            marginBottom: "20px",
            color: "#8b5cf6"
          }}
        >
          AI Demo 🚀
        </h1>

        <p
          style={{
            color: "#cbd5e1",
            fontSize: "20px",
            lineHeight: "1.7"
          }}
        >
          Generate startup intelligence using
          Multi-Agent AI systems.
        </p>

      </div>

      {/* DASHBOARD */}

      <div
        id="dashboard"
        style={{
          marginTop: "120px",
          marginBottom: "100px",
          textAlign: "center"
        }}
      >

        <h1
          style={{
            fontSize: "50px",
            marginBottom: "20px",
            color: "#8b5cf6"
          }}
        >
          Dashboard 📊
        </h1>

        <p
          style={{
            color: "#cbd5e1",
            fontSize: "20px",
            lineHeight: "1.7"
          }}
        >
          Monitor AI-generated startup analytics,
          trends, and reports.
        </p>

      </div>

      {/* FOOTER */}

      <footer
        style={{
          marginTop: "120px",
          textAlign: "center",
          color: "#94a3b8",
          paddingBottom: "30px",
          borderTop:
            "1px solid rgba(255,255,255,0.08)",
          paddingTop: "30px"
        }}
      >
        © 2026 VenturePilot AI • Built with React +
        FastAPI + AI
      </footer>

    </div>

  );

}

/* RESULT CARD COMPONENT */

function ResultCard({ title, value }) {

  return (

    <div
      style={resultCard}
      onMouseOver={(e) => {
        e.currentTarget.style.transform =
          "translateY(-10px)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform =
          "translateY(0px)";
      }}
    >

      <h3>{title}</h3>

      <p>{value}</p>

    </div>

  );

}

/* FEATURE CARD COMPONENT */

function FeatureCard({ title, text }) {

  return (

    <div
      style={cardStyle}
      onMouseOver={(e) => {
        e.currentTarget.style.transform =
          "translateY(-10px)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform =
          "translateY(0px)";
      }}
    >

      <h2>{title}</h2>

      <p style={paragraphStyle}>
        {text}
      </p>

    </div>

  );

}

/* NAV ITEM */

const navItem = {
  cursor: "pointer",
  transition: "0.3s",
  color: "#cbd5e1",
  textDecoration: "none"
};

/* BUTTON STYLE */

const buttonStyle = {
  padding: "18px 30px",
  background:
    "linear-gradient(135deg,#8b5cf6,#7c3aed)",
  border: "none",
  borderRadius: "16px",
  color: "white",
  cursor: "pointer",
  fontSize: "17px",
  fontWeight: "bold",
  boxShadow:
    "0 4px 20px rgba(139,92,246,0.4)"
};

const clearButton = {
  padding: "18px 30px",
  borderRadius: "16px",
  border: "1px solid #334155",
  background: "transparent",
  color: "white",
  cursor: "pointer"
};

const smallButton = {
  padding: "12px 18px",
  borderRadius: "10px",
  border: "none",
  background: "#8b5cf6",
  color: "white",
  cursor: "pointer"
};

const historyCard = {
  background:
    "rgba(255,255,255,0.05)",
  padding: "18px",
  borderRadius: "14px",
  marginBottom: "12px",
  border:
    "1px solid rgba(255,255,255,0.08)"
};

/* RESULT CARD */

const resultCard = {
  background:
    "rgba(255,255,255,0.05)",
  padding: "25px",
  borderRadius: "20px",
  border:
    "1px solid rgba(255,255,255,0.08)",
  backdropFilter: "blur(12px)",
  boxShadow:
    "0 4px 30px rgba(0,0,0,0.2)",
  color: "white",
  lineHeight: "1.8",
  transition: "0.3s",
  cursor: "pointer"
};

/* FEATURE CARD */

const cardStyle = {
  background:
    "rgba(255,255,255,0.05)",
  backdropFilter: "blur(12px)",
  padding: "30px",
  borderRadius: "20px",
  width: "320px",
  color: "white",
  border:
    "1px solid rgba(255,255,255,0.08)",
  boxShadow:
    "0 4px 30px rgba(0,0,0,0.2)",
  transition: "0.3s",
  cursor: "pointer"
};

/* PARAGRAPH STYLE */

const paragraphStyle = {
  color: "#cbd5e1",
  lineHeight: "1.8",
  fontSize: "16px"
};

export default App;
