import axios from "axios";
const API_URL = "https://3.90.178.242/predict"
// const API_URL = "http://127.0.0.1:5001/predict"

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

// export const fetchData = async () => {
//   try {
//       const response = await fetch(`${apiUrl}/your-endpoint`, {
//           method: "GET",
//       });

//       if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const data = await response.json();
//       return data; // Return the fetched data
//   } catch (error) {
//       console.error("Error:", error);
//       return null; // Return null or handle error appropriately
//   }
// };
