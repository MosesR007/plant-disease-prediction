from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np

app = Flask(__name__)
CORS(app)

# Load trained model
with open("model.pkl", "rb") as f:
    model = pickle.load(f)

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.json

        # Extract inputs (must match dataset column names EXACTLY)
        leaf_spot_size = float(data["Leaf_Spot_Size"])
        leaf_color_index = float(data["Leaf_Color_Index"])
        temperature = float(data["Temperature"])
        humidity = float(data["Humidity"])

        # Arrange features in correct order
        features = np.array([[leaf_spot_size, leaf_color_index, temperature, humidity]])

        # Model prediction (returns string directly)
        prediction = model.predict(features)[0]

        return jsonify({
            "prediction": str(prediction)
        })

    except Exception as e:
        return jsonify({
            "error": str(e)
        })

if __name__ == "__main__":
    app.run(debug=True)