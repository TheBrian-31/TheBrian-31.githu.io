import axios from "axios";
const BASE_URL = "https://backendcapas-production.up.railway.app/api";

export const roleService = {
    assignRole: async (data) => {
        const { userEmail, roleCode, token } = data;
        try {
            const response = await axios({
                method: "POST",
                baseURL: BASE_URL,
                url: "/user/config/user-role",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                data: { userEmail, roleCode }
            });

            if (response.status === 200) return { ok: true, data: response.data };

            return { ok: false, message: "Error al asignar rol" };
        } catch (error) {
            console.log("Error:", error.message);
            return { ok: false, message: error.message };
        }
    },
    removeRole: async (data) => {
        try {
            // Extraer userEmail y roleCode del objeto data
            const { userEmail, roleCode, token } = data;

            const response = await axios({
                method: "DELETE",
                baseURL: BASE_URL,
                url: "/user/config/user-role",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}` // Usar token extraído
                },
                data: {
                    userEmail, // Usar userEmail extraído
                    roleCode // Usar roleCode extraído
                }
            });
    
            if (response.status === 200) return { ok: true, data: response.data };
    
            return { ok: false, message: "Error al remover rol" };
        } catch (error) {
            
            console.log("Error:", error.message);
            return { ok: false, message: error.message };
        }
    },
};