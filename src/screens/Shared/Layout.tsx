import { Switch, Route } from "react-router-dom";
import Tickets from "../Tickets/Tickets";
import SideBar from "../../global/SideBar/SideBar";
import EditTicket from "../Tickets/EditTicket/EditTicket";
import Employees from "../Employee/Employees";
import EmployeeTicket from "../Tickets/EmployeeTicket";
import LocationList from "../Location/LocationList";
import AddEmployee from "../Employee/AddEmployee/AddEmployee";

//authenticated api will give response. ifauthenticated then only redirect to following urls/routes.

export default function Layout() {
  const Pages = () => {
    return (
      <Switch>
        <Route exact path={"/tickets"} component={Tickets} />
        <Route exact path={"/assignedTickets"} component={EmployeeTicket} />
        <Route exact path={"/edit"} component={EditTicket} />
        <Route exact path={"/employees"} component={Employees} />
        <Route exact path={"/addEmployee"} component={AddEmployee} />
        <Route exact path={"/locations"} component={LocationList} />
      </Switch>
    );
  };

  return (
    <div>
      <SideBar />
      <Pages />
    </div>
  );
}
