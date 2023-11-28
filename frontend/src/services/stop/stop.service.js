import http from "../../http-common";

const getStops = async () => {
  try {
    const response = await http.get("/stop");
    return response.data;
  } catch (error) {
    console.error("Error get busline", error);
    return null;
  }
};

const create = async (stop) => {
  try {
    const response = await http.post("/stop", stop);
    return response.data;
  } catch (error) {
    console.error("Error post busline", error);
    return null;
  }
};

const update = async (id, updatedData) => {
  try {
    const response = await http.put("/stop/" + id, updatedData);
    return response.data;
  } catch (error) {
    console.error("Error updating busline with image", error);
    return null;
  }
};

const remove = async (id) => {
  try {
    const response = await http.delete("/stop/" + id);
    return response.data;
  } catch (error) {
    console.error("Error delete busline", error);
    return null;
  }
};

const BuslineService = {
  getStops,
  create,
  update,
  remove
};

export default BuslineService;