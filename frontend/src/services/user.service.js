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

const create = async (nameuser,username,password) => {
  try {
    let user = {
      name: nameuser,
      username: username,
      password: password
    }
    const response = await http.post("/users", user);
    return response.data;
  } catch (error) {
    console.error("Error signup", error);
    return null;
  }
};

const signin = async (username, password) => {
  try {
    const response = await http.post("/users/signin", {},
      {
        headers: {
          Authorization: `Basic ${encodeCredentials(username, password)}`,
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