import "./App.css";
import Menu from "./components/menu";
import Body from "./components/body";
import React, { useState, useEffect } from "react";
import Riley from "./assets/Riley.svg";

function SplashScreen() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
      className="splash-screen"
    >
      <img
        style={{ width: "300px", height: "300px", objectFit: "contain" }}
        src={Riley}
        alt="Riley"
      />
      <h1
        style={{
          color: "var(--text, #000)",
          fontSize: "24px",
          fontWeight: "bold",
          margin: "12px 0",
        }}
      >
        {" "}
        Loading Mike Buglione's UI Portfolio...{" "}
      </h1>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (you can replace this with actual data loading)
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <div className="body">
      {loading ? (
        <SplashScreen />
      ) : (
        <div className={`main-content ${loading ? "" : "loaded"}`}>
          <Menu />
          <Body />
        </div>
      )}
    </div>
  );
}

export default App;
