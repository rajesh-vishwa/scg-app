import axios from "axios";
//import error from "./../../../backend/src/middlewares/error-middleware";

// axios.interceptors.response.use(null, error => {
//   const expectedError =
//     error.response &&
//     error.response.status >= 400 &&
//     error.response.status < 500;

//   if (!expectedError) {
//     console.log("Logging the error", error);
//     alert("n unexpected error occuerred");
//   }

//   return Promise.reject(error);
// });

const apiClient = axios.create({
  baseURL: "http://localhost:4200/api",
  responseType: "json",
  headers: {
    "Content-Type": "application/json"
  }
});

export default {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  put: axios.put
};
