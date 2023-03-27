import { Box } from "@mui/material";
import axios from "axios";
import React from "react";

export default function LocationList() {
  const handleOnChange = (e: any) => {
    if (e.target.files[0] != null) {
      const formData = new FormData();
      formData.append("fileUpload", e.target.files[0]);
      // axios.post({
      //   url: "http://localhost:9000/importLocation",
      //   data: formData,
      //   headers: {
      //     "x-device-id": "stuff",
      //     "Content-Type": "multipart/form-data",
      //   },
      // });
      // .then((response) => response.data);

      axios
        .put("http://localhost:9000/importLocation", formData)
        .then((response) => {
          console.log("response.data");
        })
        .catch((error) => {
          console.log("*****  " + error);
        });
    }
  };

  return (
    <Box>
      <input
        type="file"
        name="file"
        onChange={handleOnChange}
        accept=".xls,.xlsx"
      />{" "}
      {/* <input type="submit" value="Upload file" /> */}
    </Box>
  );
}
