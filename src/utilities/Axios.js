import axios from "axios";
axios.defaults.withCredentials = true;

const API = "http://localhost:5001/api";

const instance = axios.create({
    baseURL: API,
});

export default instance;

// import axios from "axios";

// const API = "http://localhost:5001/api";

// const instance = axios.create({
//   baseURL: API,
// });

// export default instance;

