import http from "../http-common";

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
    const encodeCredentials = (username, password) => {
        return btoa(`${username}:${password}`);
    };
    
    return http.post("/signin", encodeCredentials);
};

const UserService = {
    getUsers,
    create,
    signin
};

export default UserService;