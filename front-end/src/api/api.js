import axios from "axios";
const API_URL = "http://127.0.0.1:5001/predict"

export const getPrediction = async data => {
    try {
        const response = await axios.post(API_URL,data,{
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            timeout: 5000 
          });
        return response
    } catch (error) {
        return {'data':{'salary_prediction':error}}
    }
    
}