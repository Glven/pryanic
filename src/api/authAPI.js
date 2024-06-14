import {$host} from "./index";

export const authorizationAPI = async(username, password) => {
    const {data} = await $host.post('/ru/data/v3/testmethods/docs/login', { username, password })
    return data
}