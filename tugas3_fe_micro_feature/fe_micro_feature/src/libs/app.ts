import axios from "axios";

export const API = axios.create({
    baseURL: "https://deploybepaslon-production.up.railway.app/api/v1/"
})