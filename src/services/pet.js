import api from "./api";


export default {
  // Get all pets
  async allPets() {
    try {
        const token = localStorage.getItem("token");
        const response = await api.get("/pets/all", token);

        console.log("Response from allPets:", response.data);
        return response.data;
    } catch (error) {
        throw error;
    }
  },

};
