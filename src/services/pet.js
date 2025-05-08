import api from "./api";


export default {
  // Get all pets
  async allPets() {
    try {
      const response = await api.get("/pets/all");
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Add new pet
  async addPet(pet) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    try {
      const response = await api.post("/pets/add", pet);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
