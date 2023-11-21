import http from "../http-common";

const encodeCredentials = (username, password) => {
  return btoa(`${username}:${password}`);
};

const getUsers = async () => {
  try {
    return http.get("/users");
  } catch (e) {

  }
}

const create = async (user) => {
  return http.post("/users", user);
};

const signin = async (username, password) => {
  try {
    const response = await http.post("/users/signin", {},
      {
        headers: {
          Authorization: `Basic ${encodeCredentials(username,password)}`,
          "Content-type": "application/json"
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error signin", error);
    return null;
  }
};

const UserService = {
  getUsers,
  create,
  signin
};

export default UserService;