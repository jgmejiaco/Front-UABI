import axios from "axios";
const BASE_URL = `${process.env.URI_SERVICE_UABI}`;
const API_URL = `${BASE_URL}${process.env.REACT_APP_API_UABI_VERSION}`;

export const acquisition = axios.create({
    baseURL: API_URL,
});

// acquisition.interceptors.request.use((config) => {
//     if (config.url !== "/acquisition/oidc-token/") {
//         const token = localStorage.getItem("_tk_");
//         if (token) {
//             config.data = { ...config.data, token };
//         }
//     }
//     return config;
// });
