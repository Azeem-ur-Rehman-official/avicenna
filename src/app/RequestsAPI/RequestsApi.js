import axios from "axios";

export async function postRequest(param,data) {
  try {
    const response = await axios.post(param, data);

    return response;
  } catch (error) {
    console.error("Error creating post:", error);
    return error;
  }
}
export async function getRequest(param) {
    try {
      const response = await axios.get(param);
     
      return response;
    } catch (error) {
      console.error("Error data not found:", error);
      return error;
    }
  }
