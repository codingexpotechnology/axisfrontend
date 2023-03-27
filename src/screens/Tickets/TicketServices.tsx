import axios from "axios";

export const getAdminTicketByStatus = async (status: any) => {
  const response = await axios
    .get(`http://localhost:8080/getTickets/admin/${status}`)
    .then((response: any) => {
      return response.data;
    })
    .catch((error: any) => {
      console.error("There was an error!", error);
    });
  return response;
};

export const getEngTicketByStatus = async (phone: any, status: any) => {
  const response = await axios
    .get(`http://localhost:8080/getTickets/${phone}/${status}`)
    .then((response: any) => {
      return response.data;
    })
    .catch((error: any) => {
      console.error("There was an error!", error);
    });
  return response;
};
