import { Box, Button, Typography, useTheme } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlined from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlined from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlined from "@mui/icons-material/SecurityOutlined";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", flex: 1, cellClassName:"name-column-cell-TeamManage" },
    { field: "email", headerName: "Email", flex: 1 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    {
      field: "access",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            display="flex"
            width="60%"
            justifyContent="center"
            p="5px"
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : colors.greenAccent[700]
            }
            borderRadius="3px"
          >
            {access === "admin" ? (
              <AdminPanelSettingsOutlined />
            ) : access === "user" ? (
              <SecurityOutlined />
            ) : (
              <LockOpenOutlined />
            )}
            <Typography pl="5px" color={colors.grey[100]}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];
  const rows = mockDataTeam;
  return (
    <>
      <Box m="20px">
        <Header title="Manage Team" subtitle="Manage Team Members" />
        <Box
          height="75vh"
          width="100%"
          mt="40px"
          borderRadius="10px"
          sx={{
            '.MuiDataGrid-root': {
                border:'none',
            },
            '.MuiDataGrid-cell': {
                borderBottom:'none',
            },
            '.MuiDataGrid-columnHeaders': {
                borderBottom:'none',
                backgroundColor:colors.blueAccent[700],
            },
            '.MuiDataGrid-virtualScroller': {
                backgroundColor: colors.primary[400]
            },
            '.name-column-cell-TeamManage': {
                color: colors.greenAccent[300]
            },
            '.MuiDataGrid-footerContainer': {
                borderTop:'none',
                backgroundColor: colors.blueAccent[700],
                borderBottomLeftRadius: '5px',
                borderBottomRightRadius: '5px',

            },
          }}
        >
          <DataGrid rows={rows} columns={columns}  />
        </Box>
      </Box>
    </>
  );
};

export default Team;
