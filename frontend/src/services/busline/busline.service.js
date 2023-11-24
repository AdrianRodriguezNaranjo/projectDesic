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

//Update with a image
const update1 = async () => {
  try {

  } catch (error) {

  }
};

//Update without a image
const update2 = async () => {
  try {

  } catch (error) {

  }
};

const remove = async () => {
  try {

  } catch (error) {

  }
};

const BuslineService = {
  getBuslines,
  create,
  update1,
  update2,
  remove
};

export default BuslineService;