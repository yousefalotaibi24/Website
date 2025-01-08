import instance from "./api";
import { setToken } from "./storage"

const register = async ({username, password, name}) => {
    const data = await instance.post("end-points", {username, password, name});
    setToken(data.token);
    console.log("register data", data)
    return data;
};
const login = async ({username, password}) => {
    const data = await instance.post("end-points", {username, password});
    setToken(data.token);
    console.log("login data", data)
    return data;
};


export { register, login};