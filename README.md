# 🌿 Plant Disease Prediction Web App

## 🚀 Overview

This project is a **full-stack Machine Learning web application** that predicts whether a plant is **Healthy 🌱** or **Diseased ⚠️** based on environmental and leaf characteristics.

It demonstrates how a trained ML model can be integrated into a real-world web application using a modern frontend and backend architecture.

---

## 🧠 How It Works

1. User inputs plant-related parameters in the UI
2. React frontend sends data to Flask backend via REST API
3. Backend processes the input and passes it to the ML model
4. Model returns prediction (Healthy / Diseased)
5. Result is displayed instantly in the UI

---

## 🛠 Tech Stack

### 🔹 Frontend

* React.js
* CSS (Modern Glass UI)

### 🔹 Backend

* Flask (Python)
* Flask-CORS

### 🔹 Machine Learning

* Random Forest Classifier
* Scikit-learn
* Pandas, NumPy

---

## 📊 Input Features

| Feature          | Description                 |
| ---------------- | --------------------------- |
| Leaf Spot Size   | Size of spots on the leaf   |
| Leaf Color Index | Color intensity of the leaf |
| Temperature      | Environmental temperature   |
| Humidity         | Environmental humidity      |

---

## 🎯 Output

* 🌱 **Healthy**
* ⚠️ **Diseased**

---

## 📁 Project Structure

```bash
plant-disease-prediction/
│
├── backend/
│   ├── app.py
│   ├── model.pkl
│   └── requirements.txt
│
├── frontend/
│   ├── package.json
│   └── src/
│
├── tomato_disease.csv
└── README.md
```

---

## ▶️ How to Run Locally

### 🔧 Backend Setup

```bash
cd backend
pip install -r requirements.txt
python app.py
```

---

### 🎨 Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

## 📸 Demo

> Add your UI screenshot below

![Demo](frontend/public/demo.png)

---

## 💡 Key Highlights

* ✔ End-to-end ML integration
* ✔ Real-time prediction system
* ✔ REST API communication
* ✔ Clean and responsive UI
* ✔ Dataset-based input validation
* ✔ Handles real-world issues like data scaling and input consistency

---

## 🚀 Future Improvements

* 🔹 Add prediction confidence score
* 🔹 Improve model accuracy
* 🔹 Deploy to cloud (Render / Vercel)
* 🔹 Add authentication system

---

## 📌 Conclusion

This project showcases how machine learning models can be deployed into practical applications, bridging the gap between data science and web development.

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub!
