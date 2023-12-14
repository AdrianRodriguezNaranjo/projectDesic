import http from "../../http-common";

const getBuslines = async (token) => {
  try {
    const response = await http.get("/buslines", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error get busline", error);
    return null;
  }
};

const getScheduleOfBusline = async (token, buslineId) => {
  try {
    const response = await http.get("/buslines/" + buslineId + "/schedule", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/x-www-form-urlencoded"
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error get busline", error);
    return null;
  }
};

const addScheduleToBusline = async (token, buslineId, scheduleId) => {
  try {
    const response = await http.post("/buslines/" + buslineId + "/schedule", scheduleId, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/x-www-form-urlencoded"
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error get busline", error);
    return null;
  }
};

const getStopOfBusline = async (token, buslineId) => {
  try {
    const response = await http.get("/buslines/" + buslineId + "/stop", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/x-www-form-urlencoded"
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error get busline", error);
    return null;
  }
};

const addStopToBusline = async (token, buslineId, stopId) => {
  try {
    const response = await http.post("/buslines/" + buslineId + "/stop", stopId, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/x-www-form-urlencoded"
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error get busline", error);
    return null;
  }
};

const create = async (token, busline) => {
  try {
    const response = await http.post("/buslines", busline,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/form-data"
        },
      });
    return response.data;
  } catch (error) {
    console.error("Error post busline", error);
    return null;
  }
};

const update = async (token, id, updatedData) => {
  try {
    const response = await http.put("/buslines/" + id, updatedData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating busline with image", error);
    return null;
  }
};

const remove = async (token, id) => {
  try {
    const response = await http.delete("/buslines/" + id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error delete busline", error);
    return null;
  }
};

const BuslineService = {
  getBuslines,
  getScheduleOfBusline,
  addScheduleToBusline,
  getStopOfBusline,
  addStopToBusline,
  create,
  update,
  remove
};

export default BuslineService;