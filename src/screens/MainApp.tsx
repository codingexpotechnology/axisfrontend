import { Box, Button } from "@mui/material";
import { useHistory } from "react-router-dom";

export default function MainApp() {
  const history = useHistory();

  const handleOnClick = (event: any) => {
    if (event.target.name === "createTicket") {
      history.push("/AddTicket");
    }
    if (event.target.name === "login") {
      history.push("/login");
    }
  };
  return (
    <Box textAlign="center">
      <Button name="createTicket" onClick={handleOnClick} variant="contained">
        Create Ticket
      </Button>
      <Button name="login" onClick={handleOnClick} variant="contained">
        Login
      </Button>
    </Box>
  );
}
