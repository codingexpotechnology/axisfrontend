import axios from "axios";

export const authenticated = async (employee: any) => {
  const response = axios
    .post("https://backendapi.axisinfoline.com/authenticated", employee)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      console.log("error came");
    });
  return response;
};
