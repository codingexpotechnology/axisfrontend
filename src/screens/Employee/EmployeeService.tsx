import axios from "axios";

export const getEngineersByStatus = async (status: any) => {
  const response = await axios
    .get(`http://localhost:8080/getAllEngineers/${status}`)
    .then((response: any) => {
      return response.data;
    })
    .catch((error: any) => {
      console.error("There was an error!", error);
    });
  return response;
};
