import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";

const Invoice = () => {
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
    { field: "cost", headerName: "Cost", flex: 1 ,renderCell:({row: {cost}}) => {
      return <Typography
      color={colors.greenAccent[500]}
      >₹ {cost}</Typography>
    }},
    { field: "date", headerName: "Date", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
   
    ];
  const rows = mockDataInvoices;
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
            ".MuiCheckbox-root": {
              color: `${colors.greenAccent[500]} !important `,
            },
          }}
        >
          <DataGrid
            rows={rows}
            columns={columns}
            checkboxSelection
          />
        </Box>
      </Box>
    </>
  );
};

export default Invoice;
