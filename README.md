# 🌿 Plant Disease Prediction Web App

## 🚀 Overview

This project is a **full-stack Machine Learning web application** that predicts whether a plant is **Healthy 🌱** or **Diseased ⚠️** based on environmental and leaf-related features.

The system integrates a trained ML model with a modern web interface to provide **real-time predictions**.

---

## 🧠 How It Works

1. User enters plant parameters in the frontend
2. React sends data to Flask API
3. Backend processes input and feeds it to ML model
4. Model returns prediction
5. Result is displayed instantly in UI

---

## 🛠 Tech Stack

### 🔹 Frontend

* React.js
* CSS (Glassmorphism UI)

### 🔹 Backend

* Flask (Python)
* Flask-CORS

### 🔹 Machine Learning

* Random Forest Classifier
* Scikit-learn
* Pandas, NumPy

---

## 📊 Input Features

| Feature          | Description               |
| ---------------- | ------------------------- |
| Leaf Spot Size   | Size of spots on leaf     |
| Leaf Color Index | Color intensity of leaf   |
| Temperature      | Environmental temperature |
| Humidity         | Environmental humidity    |

---

## 🎯 Output

* 🌱 **Healthy**
* ⚠️ **Diseased**

---

## ⚙️ Project Structure

```
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

### 🎨 Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

## 💡 Key Highlights

* ✔ End-to-end ML integration
* ✔ REST API communication
* ✔ Clean and responsive UI
* ✔ Real-time predictions
* ✔ Dataset-based input validation

---

## 🚀 Future Improvements

* 🔹 Add prediction confidence score
* 🔹 Improve model accuracy
* 🔹 Deploy to cloud (Render / Vercel)
* 🔹 Add authentication system

---

## 📌 Conclusion

This project demonstrates how machine learning models can be integrated into real-world web applications to solve practical problems in agriculture.

---

## 🔗 Connect with Me

Feel free to connect or provide feedback!

---

⭐ If you found this project useful, consider giving it a star!
