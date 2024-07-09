import axios from "axios";
const BASE_URL = "https://backendcapas-production.up.railway.app/";
import uriDataConstructor from "../utils/uriDataConstructor";

export const authenticateService = async (googleToken = "") => {
  try {
    const uriDataObject = {
      idToken: googleToken,
    };
    let body = uriDataConstructor(uriDataObject);

    const response = await axios({
      method: "POST",
      baseURL: BASE_URL,
      url: "/auth/google",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: `${body}`,
    });

    if (response.status === 200) return { ok: true, data: response.data };

    return { ok: false, message: "Error al iniciar sesión" };
  } catch (error) {
    console.log("Error:", error.message);
    return { ok: false, message: error.message };
  }
};