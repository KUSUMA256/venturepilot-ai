function StartupForm() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        marginTop: "40px"
      }}
    >
      <input
        type="text"
        placeholder="Enter startup domain..."
        style={{
          width: "400px",
          padding: "15px",
          borderRadius: "10px",
          border: "none",
          fontSize: "16px"
        }}
      />

      <button
        style={{
          padding: "15px 25px",
          backgroundColor: "#8b5cf6",
          border: "none",
          borderRadius: "10px",
          color: "white",
          cursor: "pointer",
          fontSize: "16px"
        }}
      >
        Generate
      </button>
    </div>
  );
}

export default StartupForm;