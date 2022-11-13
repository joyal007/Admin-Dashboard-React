import React from "react";
import Header from "../../components/Header";
import { Box, Grid, useTheme, Typography, Button } from "@mui/material";
import { tokens } from "../../theme";
import { DownloadOutlined } from "@mui/icons-material";
import { Email } from "@mui/icons-material";
import { PersonAdd } from "@mui/icons-material";
import { Traffic } from "@mui/icons-material";
import { PointOfSale } from "@mui/icons-material";

import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";

import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";

import { mockTransactions } from "../../data/mockData";

const DashBoard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="10px 20px" overflow="auto">
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Header title="DashBoard" subtitle="Welcome to dashboard" />
        <Button
          sx={{ backgroundColor: colors.blueAccent[700], padding: "8px 10px" }}
        >
          <DownloadOutlined
            sx={{ color: colors.greenAccent[100], marginRight: "10px" }}
          />
          <Typography color={colors.grey[100]} fontWeight="bold">
            Download Report
          </Typography>
        </Button>
      </Box>
      <Grid container spacing={2} mt="5px">
        <Grid item xs={3}>
          <Box
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="4px"
          >
            <StatBox
              title="12,361"
              subtitle="Email Send"
              progress="0.75"
              increase="+40%"
              icon={
                <Email
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="4px"
          >
            <StatBox
              title="43,361"
              subtitle="Sales Obtained"
              progress="0.5"
              increase="+30%"
              icon={
                <PointOfSale
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="4px"
          >
            <StatBox
              title="23,361"
              subtitle="New Clients"
              progress="0.40"
              increase="+21%"
              icon={
                <PersonAdd
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="4px"
          >
            <StatBox
              title="1,312,361"
              subtitle="Traffic Inbound"
              progress="0.80"
              increase="+23%"
              icon={
                <Traffic
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box borderRadius="4px" backgroundColor={colors.primary[400]}>
            <Box display="flex" p="10px 10px" >
              <Typography variant="h5" color={colors.greenAccent[500]}>
                Revenue Generated
              </Typography>
            </Box>
            <Box
              height="240px"
              justifyContent="center"
              alignItems="center"
              display="flex"
              marginTop="-20px"
            >
              <LineChart isDashboard={true} />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            height="260px"
            backgroundColor={colors.primary[400]}
            borderRadius="4px"
            
            overflow="auto"
          >
            <Box display="flex" justifyContent="space-between" alignItems="center" p="15px">
              <Typography
              variant="h5"
              color={colors.grey[100]}
              fontWeight="600"
              >
                Recent Transactions
              </Typography>
            </Box>
            {
              mockTransactions.map((trans,i) => (
                <Box
                key={`${trans.txId}-${i}`}
                display='flex'
                justifyContent="space-between"
                alignItems="center"
                padding="15px"
                borderBottom={`4px solid ${colors.primary[500]}`}
                >
                    <Box>
                    <Typography variant="h5" color={colors.greenAccent[500]} fontWeight="600">
                      {trans.txId}
                    </Typography>
                    <Typography color={colors.grey[100]}>
                      {trans.user}
                    </Typography>
                    </Box>
                    <Box>
                      <Typography color={colors.grey[100]}>
                        {trans.date}
                      </Typography>
                    </Box>
                    <Box>
                    <Typography backgroundColor={colors.greenAccent[500]} p="5px 10px" borderRadius="4px">
                    {trans.cost}
                    </Typography>
                    </Box>
                </Box>
              ))
            }
          </Box>
        </Grid>
        <Grid item xs={4}>
            <Box
            backgroundColor={colors.primary[400]}
            borderRadius="4px"
            p='15px'
            >
              <Typography color={colors.grey[100]} variant="h4"  >Campaign</Typography>
              <Box display='flex' flexDirection='column' alignItems="center" justifyContent="center">
              <ProgressCircle progress=".75" size="120"/>
              <Typography mt="10px" color={colors.greenAccent[500]} variant="h5"  >$29893e983 Revenue Generated</Typography>

              </Box>
            </Box>
        </Grid>
        <Grid item xs={4}>
            <Box
            backgroundColor={colors.primary[400]}
            borderRadius="4px"
            p='15px'
            >
              <Typography color={colors.grey[100]} variant="h4"  >Campaign</Typography>
              <Box display='flex' height="240px" mt="-40px" f alignItems="center" justifyContent="center">
              <BarChart />
              </Box>
            </Box>
        </Grid>
        <Grid item xs={4}>
            <Box
            backgroundColor={colors.primary[400]}
            borderRadius="4px"
            p='15px'
            >
              <Typography color={colors.grey[100]} variant="h4"  >Campaign</Typography>
              <Box display='flex' height="200px" alignItems="center" justifyContent="center">
              <GeographyChart isDashboard={true}/>
              </Box>
            </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashBoard;
