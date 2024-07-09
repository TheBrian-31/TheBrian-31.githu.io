import axios from "axios";

const BASE_URL = "https://backendcapas-production.up.railway.app/api/";

export const permissionService = {
    setPermission: async (data) => {
        const { permissionId, newStateId, token } = data;
        try {
          const response = await axios.patch(`${BASE_URL}permission/edit`, {
            permissionId,
            newStateId           
          }, {
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`
            }
          });
    
          if (response.status === 200) return { ok: true, data: response.data };
    
          return { ok: false, message: "Error al cambiar el estado del permiso" };
        } catch (error) {
          console.error("Error:", error.message);
          return { ok: false, message: error.message };
        }
      },
      getAllPermission: async (token) => {
        try {
          const response = await axios.get(`${BASE_URL}permission/all`, {
            headers: {
              "Authorization": `Bearer ${token}`
            }
          });
    
          if (response.status === 200) return { ok: true, data: response.data };
    
          return { ok: false, message: "Error al obtener las casas" };
        } catch (error) {
          console.error("Error:", error.message);
          return { ok: false, message: error.message };
        }
      },
      deletePermission: async (data) => {
        const { id, token } = data;
        try {
          const response = await axios.delete(`${BASE_URL}permission/delete`, {
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`
            },
            params: { houseId }
          });
    
          if (response.status === 200) return { ok: true, data: response.data };
    
          return { ok: false, message: "Error al eliminar el permiso" };
        } catch (error) {
          console.error("Error:", error.message);
          return { ok: false, message: error.message };
        }
      },
      createPermissionUniqueEntry: async (data) => {
        const { unique_entry, house_id, user_permitted_id, visitor_id, token } = data;
        console.log(data);
        try {
          const response = await axios({
            method: "POST",
            baseURL: BASE_URL,
            url: "/permission/save",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`
            },
            data: {
              unique_entry,
              house_id,
              user_permitted_id,
              visitor_id
            }
          });
    
            if(response.status === 200) return { ok: true, data: response.data };
    
            return { ok: false, message: "Error al crear el permiso de entrada unica" };
        } catch (error) {
            console.error("Error:", error.message);
            return { ok: false, message: error.message };
          }
      },
      createPermissionRangeOfDays: async (data) => {
        const { date_time_start, date_time_end,house_id, user_permitted_id, visitor_id, token } = data;
        try {
          const response = await axios({
            method: "POST",
            baseURL: BASE_URL,
            url: "/permission/save",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`
            },
            data: {
              date_time_start,
              date_time_end,
              house_id,
              user_permitted_id,
              visitor_id
            }
          });
    
            if(response.status === 200) return { ok: true, data: response.data };
    
            return { ok: false, message: "Error al crear el permiso de rango de dias" };
        } catch (error) {
            console.error("Error:", error.message);
            return { ok: false, message: error.message };
          }
      },
      createPermissionSpecificDays: async (data) => {
        const { days_week,house_id, user_permitted_id, visitor_id, token } = data;
        try {
          const response = await axios({
            method: "POST",
            baseURL: BASE_URL,
            url: "/permission/save",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`
            },
            data: {
              days_week,
              house_id,
              user_permitted_id,
              visitor_id
            }
          });
    
            if(response.status === 200) return { ok: true, data: response.data };
    
            return { ok: false, message: "Error al crear el permiso de dias especificos" };
        } catch (error) {
            console.error("Error:", error.message);
            return { ok: false, message: error.message };
          }
      },
      getAllPermissionByUser: async (identifier, token) => {
        try {
          const response = await axios.get(`${BASE_URL}user/permissions`, {
            params: {
              identifier: identifier
            },
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
          });
      
          if (response.status === 200) return { ok: true, data: response.data };
      
          return { ok: false, message: "Error al obtener los permisos del usuario" };
        } catch (error) {
          console.error("Error:", error.message);
          return { ok: false, message: error.message };
        }
      },
      
      
          
};
