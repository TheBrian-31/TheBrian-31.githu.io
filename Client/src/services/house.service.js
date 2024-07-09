import axios from "axios";

const BASE_URL = "https://backendcapas-production.up.railway.app/api";

export const houseService = {
  saveHouse: async (data) => {
    const { n_house, capacity, userIdentifier, token } = data;
    try {
      const response = await axios.post(`${BASE_URL}/house/save`, {
        n_house,
        capacity,
        userIdentifier,
      }, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      });

      if (response.status === 200) return { ok: true, data: response.data };

      return { ok: false, message: "Error al guardar casa" };
    } catch (error) {
      console.error("Error:", error.message);
      return { ok: false, message: error.message };
    }
  },
  deleteHouse: async (data) => {
    const { houseId, token } = data;
    try {
      const response = await axios.delete(`${BASE_URL}/house/delete`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        params: { houseId }
      });

      if (response.status === 200) return { ok: true, data: response.data };

      return { ok: false, message: "Error al eliminar casa" };
    } catch (error) {
      console.error("Error:", error.message);
      return { ok: false, message: error.message };
    }
  },
  getAllHouse: async (token) => {
    try {
      const response = await axios.get(`${BASE_URL}/house/all`, {
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
  findByIdHouse: async ({ houseId, token }) => {
    try {
        const response = await axios.get(`${BASE_URL}house`, {
            headers: {
                "Authorization": `Bearer ${token}`
            },
            params: { houseId }
        });

        if (response.status === 200) return { ok: true, data: response.data };

        return { ok: false, message: "Error al obtener la casa" };
    } catch (error) {
        console.error("Error:", error.message);
        return { ok: false, message: error.message };
    }
},
  editHouse: async (data) => {
    const { houseId, capacity, userId, token } = data;
    try {
      const response = await axios.patch(`${BASE_URL}/house/edit`, {
        houseId,
        capacity,
        userId
      }, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      });

      if (response.status === 200) return { ok: true, data: response.data };

      return { ok: false, message: "Error al editar casa" };
    } catch (error) {
      console.error("Error:", error.message);
      return { ok: false, message: error.message };
    }
  },
  assignToUserHouse: async (data) => {
    const { houseId, userIdentifier, token } = data;
    try {
      const response = await axios({
        method: "POST",
        baseURL: BASE_URL,
        url: "/house/add-user",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        data: {
          houseId,
          userIdentifier
        }
      });

        if(response.status === 200) return { ok: true, data: response.data };

        return { ok: false, message: "Error al asignar usuario a la casa" };
    } catch (error) {
        console.error("Error:", error.message);
        return { ok: false, message: error.message };
      }
  },
  removeToUserHouse: async (data) => {
    const { houseId, userIdentifier, token } = data;
    try{
      const response = await axios(
        {
          method: "DELETE",
          baseURL: BASE_URL,
          url: "/house/remove-user",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          data: {
            houseId,
            userIdentifier
          }
        }
      );

      if (response.status === 200) return { ok: true, data: response.data };

      return { ok: false, message: "Error al remover usuario de la casa" };
    } catch (error) {
      console.error("Error:", error.message);
      return { ok: false, message: error.message };
    }
  },
};
