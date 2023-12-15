import http from "../../http-common";

const getSchedule = async (id) => {
  try {
    const response = await http.get("/schedule/" + id);
    return response.data;
  } catch (error) {
    console.error("Error get schedule", error);
    return null;
  }
};

const getAll = async () => {
  try {
    const response = await http.get("/schedule");
    return response.data;
  } catch (error) {
    console.error("Error get schedule", error);
    return null;
  }
};

const create = async (data) => {
  try {
    const response = await http.post("/schedule", data);
    return response.data;
  } catch (error) {
    console.error("Error post schedule", error);
    return null;
  }
};

const update = async (id, updatedData) => {
  try {
    const response = await http.put("/schedule/" + id, updatedData);
    return response.data;
  } catch (error) {
    console.error("Error updating schedule", error);
    return null;
  }
};

const remove = async (id) => {
  try {
    const response = await http.delete("/schedule/" + id);
    return response.data;
  } catch (error) {
    console.error("Error delete schedule", error);
    return null;
  }
};

const ScheduleService = {
  getSchedule,
  getAll,
  create,
  update,
  remove
};

export default ScheduleService;