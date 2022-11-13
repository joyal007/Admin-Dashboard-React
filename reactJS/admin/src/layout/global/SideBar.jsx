import React, { useState } from "react";
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { Link,useLocation } from "react-router-dom";
// import { route } from "../../route";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import adminImage from '../../assets/joyal.jpeg'

import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';

const SideBarElement = ({ title, icon, link}) => {
  // console.log(title, icon, link);
  const loc = useLocation();

  return (
    <MenuItem
      active={loc.pathname === link}
      icon={icon}
      routerLink={<Link to={link} />}
    >
        <Typography>{title}</Typography>
    </MenuItem>
  );
};

function SideBar() {
  const [selected, setSelected] = useState("Dashboard");
  const { collapseSidebar, collapsed } = useProSidebar();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // const routes= route();
  // console.log(routes);
  return (
    <Box
      display="flex"
      height="100%"
      sx={{
        "& .slidebar-inner": {
          height: "100% !important",
          backgroundColor: `${colors.primary[400]} !important`,
        },
        "& .icon-wrapper": {
          backgroundColor: `transparent !important`,
        },
        "& .menu-label": {
          padding: "5px 10px 5px 10px !important",
        },
        "& .menu-anchor": {
            margin: '0 !important',
        },
        "& .menu-anchor:hover": {
          color: "#868dfb !important",
          backgroundColor: `${colors.primary[400]} !important`,
        },
        "& .cxRqFw": {
          color: "#6870fa !important",
          backgroundColor: `${colors.primary[400]} !important`,
        },
        "& .sidebar": {
          border:"none !important"
        },
        "& .menu-item.hambergerIcon .menu-anchor": {
          padding: '0 !important'
        }
      }}
    >
      <Sidebar backgroundColor={colors.primary[400]} collapsedWidth="60px">
        <Menu sx={{ height: "100%" }}>
          <MenuItem
            className="hambergerIcon"
            style={{
                margin: "10px 0 20px 0",
                color: colors.grey[100]
            }}
            icon={
              collapsed ? (
                <IconButton sx={{marginLeft:'40px'}} onClick={()=>collapseSidebar()} ><MenuOutlinedIcon sx={{fontSize:"30px",color:colors.greenAccent[500]}}/></IconButton>
              ) : undefined
            }
          >
           { !collapsed && <Box display="flex" justifyContent="space-between" alignItems="center" ml="4px">
           
            <IconButton onClick={collapseSidebar}>
                <MenuOutlinedIcon sx={{fontSize:"30px",color: colors.greenAccent[500]}}/>
              </IconButton>
              {/* <Typography variant="h3" sx={{ 
                color: colors.grey[100]
                }}>
                Admin
              </Typography> */}
              
            </Box>}
          </MenuItem>
          {
            !collapsed && <Box mb="20px" mt="0px">
                <Box display="flex" justifyContent="center" alignItems='center' >
                    <img width="100px" height="100px" style={{
                      borderRadius:"50%"
                    }} src={adminImage} alt="user-img" />
                </Box>
                <Box  textAlign="center">
                    <Typography variant="h3" fontWeight="bold" color={colors.grey[100]} sx={{m:"10px 0 0 0"}}>Joyal Raphel</Typography>
                    <Typography variant="h5" color={colors.greenAccent[500]}>Admin MindHacks</Typography>
                </Box>
                <Box>

                </Box>
            </Box>
          }
          <Box pl={collapsed?undefined:"10%"}>
          {!collapsed &&
           
                <>
                <SideBarElement
                  selected={selected}
                  setSelected={setSelected}
                  title="Dashboard"
                  icon={<HomeOutlinedIcon />}
                  link="/"
                />
                <Box mt="5px">
                  <Typography color={colors.grey[300]} ml="20px">
                    Data
                  </Typography>
                </Box>
                <SideBarElement
                  selected={selected}
                  setSelected={setSelected}
                  title="Manage Team"
                  icon={<PeopleOutlinedIcon />}
                  link="/team"
                />
                <SideBarElement
                  selected={selected}
                  setSelected={setSelected}
                  title="Contact Information"
                  icon={<ContactsOutlinedIcon />}
                  link="/contacts"
                />
                <SideBarElement
                  selected={selected}
                  setSelected={setSelected}
                  title="Invoice Balance"
                  icon={<ReceiptOutlinedIcon />}
                  link="/invoice"
                />
                <Box mt="5px">
                  <Typography color={colors.grey[300]} ml="20px">
                    Pages
                  </Typography>
                </Box>

                <SideBarElement
                  selected={selected}
                  setSelected={setSelected}
                  title="Profile Form"
                  icon={<PersonOutlineOutlinedIcon />}
                  link="/profile"
                />
                <SideBarElement
                  selected={selected}
                  setSelected={setSelected}
                  title="Calender"
                  icon={<CalendarMonthOutlinedIcon />}
                  link="/calender"
                />
                <SideBarElement
                  selected={selected}
                  setSelected={setSelected}
                  title="FAQ Pages"
                  icon={<HelpOutlineOutlinedIcon />}
                  link="/faq"
                />
                <Box mt="5px">
                  <Typography color={colors.grey[300]} ml="20px">
                    Charts
                  </Typography>
                </Box>
                 <SideBarElement
                  selected={selected}
                  setSelected={setSelected}
                  title="Bar Chart"
                  icon={<BarChartOutlinedIcon />}
                  link="/bar"
                />
                 <SideBarElement
                  selected={selected}
                  setSelected={setSelected}
                  title="Pie Chart"
                  icon={<PieChartOutlineOutlinedIcon />}
                  link="/pie"
                />
                 <SideBarElement
                  selected={selected}
                  setSelected={setSelected}
                  title="Line Chart"
                  icon={<TimelineOutlinedIcon />}
                  link="/line"
                />
                <SideBarElement
                  selected={selected}
                  setSelected={setSelected}
                  title="Geography Chart"
                  icon={<MapOutlinedIcon />}
                  link="/geography"
                />
                </>
             }
            </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
}

export default SideBar;
