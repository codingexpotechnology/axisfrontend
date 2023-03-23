import {
  Avatar,
  Box,
  Button,
  Chip,
  createStyles,
  Dialog,
  DialogTitle,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useState } from "react";
import CustomTable from "../../global/CustomTable/CustomTable";
import { useHistory } from "react-router-dom";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import DownloadIcon from "@mui/icons-material/Download";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import ticketData from "../../data/ticketData.json";
import { ListItemButton, Tab, Tabs, TextField } from "@mui/material";

const rawRows = [...ticketData];

const emails = ["username@gmail.com", "user02@gmail.com"];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    datePicker: {
      fontFamily: "sans-serif",
      fontSize: "14px",

      "& .react-date-picker__wrapper": {
        padding: "0 10px",
        borderColor: "#ccc",
        borderRadius: "4px",
      },
      "& .react-date-picker--open": {
        borderColor: "red",
        backgroundColor: "#f2f1ed",
      },
    },
  })
);

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      // style={{
      //   // color: "black",
      //   paddingTop: "0.3rem",
      //   paddingLeft: "2rem",
      //   textAlign: "left",
      // }}
    >
      <DialogTitle>
        {"Ticket No: "}
        {selectedValue}
      </DialogTitle>
      <Typography
        style={{
          color: "black",
          paddingTop: "0.3rem",
          paddingLeft: "2rem",
          textAlign: "left",
        }}
      >
        Engineer
      </Typography>
      <select
        //  style={{
        //   // color: "black",
        //   paddingTop: "0.3rem",
        //   paddingLeft: "2rem",
        //   textAlign: "left",
        // }}
        style={{
          width: 295,
          height: 27,
          marginLeft: "2rem",
          marginRight: "2rem",
          marginBottom: "2rem",
        }}
        id="circle"
        name="circles"
        // value={ticketData.circle}
        // onChange={handleLocationChange}
      >
        <option value="">Please Select</option>
        <option value="engineerID">PRASHANT</option>
        <option value="engineerID2">SHUBHAM</option>
        <option value="EDC-GHAZIABAD">SHUBHAM</option>
        <option value="EDC-Loni">SHUBHAM</option>
        <option value="EDC-Loni">MANI</option>
        <option value="EDC-Loni">HIMANSHU</option>
        <option value="EDC-Loni">GULSHAN</option>
        <option value="EDC-Loni">SATVINDER</option>
        <option value="EDC-Loni">MANI</option>
        <option value="EDC-Loni">DEV</option>
      </select>
      <Button
        style={{
          color: "white",
          backgroundColor: "#f44336",
          marginBottom: 20,
          marginRight: "7.5rem",
          marginLeft: "7.5rem",
        }}
        type="submit"
      >
        Assign
      </Button>
      {/* onClick={() => handleListItemClick(email)} */}
    </Dialog>
  );
}

export default function EmployeeTicket() {
  const classes = useStyles();
  const history = useHistory();
  const [rows, setRows] = useState(rawRows);
  const [tabValue, setTabValue] = useState("open");
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(emails[1]);

  useEffect(() => {
    document.title = "Assigned Ticket";
  }, []);

  const columns: GridColDef[] = [
    { field: "serialNo", headerName: "S/no.", width: 100 },
    { field: "complaintNo", headerName: "Complaint No", width: 140 },
    { field: "complaintDate", headerName: "Complaint Date", width: 140 },
    { field: "complaintTime", headerName: "Complaint Time", width: 140 },
    { field: "circle", headerName: "Circle", width: 200 },
    { field: "division", headerName: "Division", width: 200 },
    { field: "nameOfLocation", headerName: "Name Of Location", width: 400 },
    { field: "complainantName", headerName: "Complainant Name", width: 200 },
    {
      field: "complainantDesignation",
      headerName: "Complainant Designation",
      width: 220,
    },
    { field: "complainantContactNo", headerName: "Contact No.", width: 150 },
    {
      field: "defectiveItemName",
      headerName: "Defective Item Name",
      width: 180,
    },
    {
      field: "uxb1jsi364g4453780",
      headerName: "uxb1jsi364g4453780",
      width: 180,
    },
    { field: "engineerAssigned", headerName: "Engineer Assigned", width: 180 },
    {
      field: "engineerContactNo",
      headerName: "Engineer Contact No.",
      width: 180,
    },
    {
      field: "compaintAttemptsFirstDateAndTime",
      headerName: "Complaint Attempts I Date And Time",
      width: 250,
    },
    {
      field: "compaintAttemptsSecondDateAndTime",
      headerName: "Complaint Attempts II Date And Time",
      width: 250,
    },
    {
      field: "compaintAttemptsThirdDateAndTime",
      headerName: "Complaint Attempts III Date And Time",
      width: 250,
    },
    {
      field: "complaintCompletionDate",
      headerName: "Complaint Completion Date",
      width: 200,
    },
    {
      field: "complaintCompletionTime",
      headerName: "Complaint Completion Time",
      width: 200,
    },
    { field: "status", headerName: "Complaint Status", width: 150 },
    {
      field: "actionTakenAndSpareUsed",
      headerName: "Action Taken & Spare used",
      width: 250,
    },
    {
      field: "oldSerialNoMbHddTft",
      headerName: "Old Serial No. MB/HDD/TFT",
      width: 220,
    },
    {
      field: "newSerialNoMbHddTft",
      headerName: "New Serial No. MB/HDD/TFT",
      width: 220,
    },
    {
      field: "complaintAttendHours",
      headerName: "Complaint Attend Hours",
      width: 180,
    },
    {
      field: "complaintCompletionInDays",

      headerName: "Complaint Completion In Days",
      width: 210,
    },
    {
      field: "complaintCompletionInHours",
      headerName: "Complaint Completion In Hours",
      width: 210,
    },
    { field: "remarks", headerName: "Remarks", width: 150 },
    {
      field: "Edit",
      headerName: "Edit",
      width: 100,
      renderCell: (params: GridRenderCellParams) => (
        <strong>
          <IconButton
            style={{ marginLeft: 2, color: "#0000FF" }}
            tabIndex={params.hasFocus ? 0 : -1}
            onClick={() => {
              editRow(params.row);
            }}
          >
            <EditIcon fontSize="small" />
          </IconButton>
        </strong>
      ),
    },
    // {
    //   field: "complaintCompletionInDays",
    //   headerName: "Complaint Completion In Days",
    //   type: "number",
    //   width: 90,
    // },
    // {
    //   field: "fullName",
    //   headerName: "Full name",
    //   description: "This column has a value getter and is not sortable.",
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params: GridValueGetterParams) =>
    //     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    // },
  ];

  const assignTask = (event: any) => {
    history.push("/edit", { data: event });
  };

  const editRow = (event: any) => {
    history.push("/edit", { data: event });
  };

  const deleteRow = (e: any) => {
    console.log("e ", e);
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    console.log(newValue);
    setTabValue(newValue);
    if (newValue === "open") {
      setRows(rawRows);
    } else {
      setRows([]);
    }
  };

  const handleClickOpen = (row: any) => {
    setSelectedValue(row.complaintNo);
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    // setSelectedValue("");
  };

  return (
    <>
      <Box
      // style={{
      //   display: "flex",
      //   justifyContent: "right",
      // }}
      >
        <Grid
          container
          style={{
            // backgroundColor: "#FFFF00",
            display: "flex",
            justifyContent: "right",
            marginTop: "0.8rem",
            marginBottom: "0.8rem",
          }}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TextField
              sx={{
                "&&": {
                  marginRight: "0.6rem",
                },
              }}
              label="Search"
              InputLabelProps={{
                shrink: true,
              }}
              id="search"
              name="search"
              // value={data.search}
              // onChange={handleChange}
              size="small"
            />
            <Grid>
              <DatePicker
                sx={{
                  "&&": {
                    marginRight: "0.3rem",
                  },
                }}
                slotProps={{
                  textField: {
                    size: "small",
                  },
                }}
                label="From Date"
              />
            </Grid>
            <Grid>
              <DatePicker
                sx={{
                  "&&": {
                    marginRight: "0.3rem",
                  },
                }}
                slotProps={{
                  textField: {
                    size: "small",
                  },
                }}
                label="To Date"
              />
            </Grid>
            <Button
              style={{
                color: "white",
                backgroundColor: "#f44336",
                marginRight: "0.3rem",
              }}
            >
              Search
            </Button>
          </LocalizationProvider>
        </Grid>
      </Box>
      <div style={{ maxWidth: "100%" }}>
        {/* <Box>
            <h1>EmployeeTicket</h1>
          </Box> */}
        <Box></Box>
        <Box>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            textColor="secondary"
            // indicatorColor="secondary"
            TabIndicatorProps={{ style: { background: "#FFCCCB" } }}
            aria-label="secondary tabs example"
          >
            <Tab value="open" label="Open" />
            <Tab value="completed" label="Completed" />
          </Tabs>
        </Box>
        <Box>
          <CustomTable data={rows} columns={columns} />
        </Box>
        <SimpleDialog
          selectedValue={selectedValue}
          open={open}
          onClose={handleClose}
        />
      </div>
    </>
  );
}
