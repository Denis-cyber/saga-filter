import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Jobs } from "components/Jobs";
import { Employees } from "components/Employees";

const drawerWidth = 240;

export const App = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Jobs />
      <Box
        component='main'
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Employees />
      </Box>
    </Box>
  );
};
