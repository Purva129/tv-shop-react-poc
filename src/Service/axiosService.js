import axios from "axios";

const baseUrl = axios.create({
    baseURL: "https://ang-manage-blog-default-rtdb.asia-southeast1.firebasedatabase.app/"
});

export default baseUrl;