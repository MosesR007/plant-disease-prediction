import React, { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    Leaf_Spot_Size: "",
    Leaf_Color_Index: "",
    Temperature: "",
    Humidity: ""
  });

  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setResult("");

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
    } catch (error) {
      setResult("Error connecting to server");
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>🌿 Plant Disease Predictor</h1>

        <input
          type="number"
          step="0.1"
          name="Leaf_Spot_Size"
          placeholder="Leaf Spot Size"
          onChange={handleChange}
        />

        <input
          type="number"
          step="0.1"
          name="Leaf_Color_Index"
          placeholder="Leaf Color Index"
          onChange={handleChange}
        />

        <input
          type="number"
          name="Temperature"
          placeholder="Temperature (°C)"
          onChange={handleChange}
        />

        <input
          type="number"
          name="Humidity"
          placeholder="Humidity (%)"
          onChange={handleChange}
        />

        <button onClick={handleSubmit}>
          {loading ? "Analyzing..." : "Predict"}
        </button>

        {result && (
          <div className={`result ${result === "Healthy" ? "healthy" : "diseased"}`}>
            <h2>
              {result === "Healthy" ? "🌱 Healthy" : "⚠️ Diseased"}
            </h2>
            <p>
              {result === "Healthy"
                ? "Your plant looks healthy 🌿"
                : "Disease detected! Take action ⚠️"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;