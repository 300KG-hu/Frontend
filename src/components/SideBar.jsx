import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import { tokens } from "../theme";
import { HomeMaxOutlined } from "@mui/icons-material";

const Item = ({ title, href, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
      href={href}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};
function SideBar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [Closed, setClosed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Sidebar  collapsed={Closed}>
      <Menu>
        <MenuItem
          onClick={() => setClosed(!Closed)}
          icon={Closed ? <MenuOutlinedIcon /> : undefined}
          style={{
            margin: "10px 0 20px 0",
            backgroundColor: colors.grey[100],
          }}
        >
          {!Closed && (
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              ml="15px"
            >
              <Typography variant="h3">ADMIN</Typography>
              <IconButton onClick={() => setClosed(!Closed)}>
                <MenuOutlinedIcon />
              </IconButton>
            </Box>
          )}
        </MenuItem>

        {/* {!Closed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color="#e0e0e0"
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Jessica Smith
                </Typography>
                <Typography variant="h5" color="#4cceac">
                  Smart Admin
                </Typography>
              </Box>
            </Box>
          )} */}

        <Box paddingLeft={Closed ? undefined : "10%"}>
          <Item
            title="Home"
            href="/"
            icon={<HomeMaxOutlined />}
            selected={selected}
            setSelected={setSelected}
          />

          <Item
            title="Team"
            href="/team"
            icon={<PeopleOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
        </Box>
      </Menu>
    </Sidebar>
  );
}

export default SideBar;
