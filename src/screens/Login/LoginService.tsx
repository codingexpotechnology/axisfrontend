import axios from "axios";

export const authenticated = async (employee: any) => {
  const response = axios
    .post("https://165.227.128.110:9000/authenticated", employee)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      console.log("error came");
    });
  return response;
};
