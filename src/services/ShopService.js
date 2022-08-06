import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_SERVER;

// axios.interceptors.response.use(
//   function (response) {
//     if (response.data) {
//       // return success
//       if (response.status === 200 || response.status === 201) {
//         return response;
//       }
//       // reject errors & warnings
//       return Promise.reject(response);
//     }

//     // default fallback
//     return Promise.reject(response);
//   },
//   function (error) {
//     // if the server throws an error (404, 500 etc.)
//     return Promise.reject(error);
//   }
// );

export const getAddToCart = async (product) => {
  console.log(product);
  const response = await axios
    .post(`/add-to-cart`, {data1: 'string' }, {
      withCredentials: true,
    })
    .then((response) => {
      console.log(response);
    });
  return response;
};
