import axios from "axios";

const BASE_URL = "https://backendcapas-production.up.railway.app/api/";

export const hashService = {
      getHash: async (permissionId, token) => {
        try {
          const response = await axios.get(`${BASE_URL}hash/generate`, {
            params: {
                permissionId: permissionId
            },
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
          });
      
          if (response.status === 200) return { ok: true, data: response.data };
      
          return { ok: false, message: "Error al obtener el hash" };
        } catch (error) {
          console.error("Error:", error.message);
          return { ok: false, message: error.message };
        }
      },

      getValidateHash: async (hashUuid,key,value, token) => {
        try {
          const response = await axios.get(`${BASE_URL}hash/validate`, {
            params: {
                hashUuid: hashUuid,
                key: key,
                value:value

            },
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
          });
      
          if (response.status === 200) return { ok: true, data: response.data };
          if (response.status === 500) return { ok: false, data: response.data };
          return { ok: false, message: "Error al validar el hash" };
        } catch (error) {
          console.error("Error:", error.message);
          return { ok: false, message: error.message };
        }
      },
      
      
          
};
