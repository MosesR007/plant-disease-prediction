import React, { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    Leaf_Spot_Size: 5.0,
    Leaf_Color_Index: 50,
    Temperature: 22,
    Humidity: 60
  });

  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: parseFloat(e.target.value)
    });
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await res.json();
      setResult(data.prediction);
    } catch {
      setResult("Error");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1>🌿 Plant Disease Predictor</h1>

        <label>Leaf Spot Size (3–7): {form.Leaf_Spot_Size}</label>
        <input type="range" min="3" max="7" step="0.1"
          name="Leaf_Spot_Size" value={form.Leaf_Spot_Size} onChange={handleChange} />

        <label>Leaf Color Index (40–60): {form.Leaf_Color_Index}</label>
        <input type="range" min="40" max="60" step="1"
          name="Leaf_Color_Index" value={form.Leaf_Color_Index} onChange={handleChange} />

        <label>Temperature (18–26): {form.Temperature}</label>
        <input type="range" min="18" max="26" step="0.1"
          name="Temperature" value={form.Temperature} onChange={handleChange} />

        <label>Humidity (50–70): {form.Humidity}</label>
        <input type="range" min="50" max="70" step="1"
          name="Humidity" value={form.Humidity} onChange={handleChange} />

        <button onClick={handleSubmit}>Predict</button>

        {result && (
          <div className={`result ${result === "Healthy" ? "healthy" : "diseased"}`}>
            <h2>{result === "Healthy" ? "🌱 Healthy" : "⚠️ Diseased"}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;