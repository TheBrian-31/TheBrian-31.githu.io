import axios from "axios";
const BASE_URL = "https://backendcapas-production.up.railway.app/api";

export const userService = {
    editDataUser: async (data) => {
        const { dui, username, token } = data; // Desestructura data para obtener dui, username y token
        try {
            const response = await axios({
                method: "POST",
                baseURL: BASE_URL,
                url: "/user/edit",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                data: { dui, username }
            });

            if (response.status === 200) return { ok: true, data: response.data };

            return { ok: false, message: "Error al editar usuario" };
        } catch (error) {
            console.log("Error:", error.message);
            return { ok: false, message: error.message };
        }
    },
    getUserDataByEmail: async (data) => {
        const { email, token } = data; // Desestructura data para obtener email
        console.log("email", email);
        try {
            const response = await axios({
                method: "GET",
                baseURL: BASE_URL,
                url: "/user/show",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                params: { email }
            });

            if (response.status === 200) return { ok: true, data: response.data };

            return { ok: false, message: "Error al obtener datos de usuario" };
        } catch (error) {
            console.log("Error:", error.message);
            return { ok: false, message: error.message };
        }
    },
    getAllUsers: async (data) => {
        try {
            const response = await axios({
                method: "GET",
                baseURL: BASE_URL,
                url: "/user/all",
                headers: {
                    "Authorization": `Bearer ${data.token}`
                }
            });

            if (response.status === 200) return { ok: true, data: response.data };

            return { ok: false, message: "Error al obtener los usuarios" };
        } catch (error) {
            console.log("Error:", error.message);
            return { ok: false, message: error.message };
        }
    },
    getAllVigilants: async (data) => {
        try {
            const response = await axios({
                method: "GET",
                baseURL: BASE_URL,
                url: "/user/all/vigilantes",
                headers: {
                    "Authorization": `Bearer ${data.token}`
                }
            });

            if (response.status === 200) return { ok: true, data: response.data };

            return { ok: false, message: "Error al obtener los vigilantes" };
        } catch (error) {
            console.log("Error:", error.message);
            return { ok: false, message: error.message };
        }
    },
    verifyToken: async (token) => {
        try {
            const response = await axios({
                method: "GET",
                baseURL: BASE_URL,
                url: "/user/",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
    
            if (response.status === 200) {
                const { email, name, roles } = response.data;
                return { email, name, roles };
            }
    
            return { ok: false, message: "Error al verificar token" };
        } catch (error) {
            console.log("Error:", error.message);
            return { ok: false, message: error.message };
        }
    },
    getAllHouseByUser: async (token) => {
        try {
            const response = await axios({
                method: "GET",
                baseURL: BASE_URL,
                url: "/user/houses",
                headers: {
                    Authorization: `Bearer ${token}`
                },
            });

            if (response.status === 200) return { ok: true, data: response.data };

            return { ok: false, message: "Error al obtener las casas" };
        } catch (error) {
            console.log("Error:", error.message);
            return { ok: false, message: error.message };
        }
    }
};