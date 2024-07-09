import axios from "axios";
const BASE_URL = "https://backendcapas-production.up.railway.app/api";

export const anonymousService = {
    actionDoor: async (data) => {
        const { token, key, value } = data;
        try {
            const response = await axios({
                method: "POST",
                baseURL: BASE_URL,
                url: "/adafruit/update",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                data: { key, value }
            });

            if (response.status === 200) return { ok: true, data: response.data };

            return { ok: false, message: "Error al realizar acción" };
        } catch (error) {
            console.log("Error:", error.message);
            return { ok: false, message: error.message };
        }
    },
};