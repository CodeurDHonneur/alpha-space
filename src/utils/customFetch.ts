import axios from "axios";

const snapiAPI = "https://api.spaceflightnewsapi.net/v4/articles/";

const snapiCustoFetch = axios.create({
    baseURL: snapiAPI
})