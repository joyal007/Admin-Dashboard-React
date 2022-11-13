import { Box, useTheme } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";

const ContactInfo = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column-cell-TeamManage",
    },
    { field: "email", headerName: "Email", flex: 1 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "address", headerName: "Address", flex: 1 },
    { field: "city", headerName: "City", flex: 1 },
    { field: "zipCode", headerName: "Zip Code", flex: 1 },
    { field: "registrarId", headerName: "Registrar ID", flex: 1 },
  ];
  const rows = mockDataContacts;
  return (
    <>
      <Box m="20px">
        <Header title="Contact Info" subtitle="List of Contacts" />
        <Box
          height="75vh"
          width="100%"
          mt="40px"
          borderRadius="10px"
          sx={{
            ".MuiDataGrid-root": {
              border: "none",
            },
            ".MuiDataGrid-cell": {
              borderBottom: "none",
            },
            ".MuiDataGrid-columnHeaders": {
              borderBottom: "none",
              backgroundColor: colors.blueAccent[700],
            },
            ".MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
            ".name-column-cell-TeamManage": {
              color: colors.greenAccent[300],
            },
            ".MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.blueAccent[700],
              borderBottomLeftRadius: "5px",
              borderBottomRightRadius: "5px",
            },
            ".MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${colors.grey[100]} !important `,
            },
          }}
        >
          <DataGrid
            rows={rows}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
          />
        </Box>
      </Box>
    </>
  );
};

export default ContactInfo;
