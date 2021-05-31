import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppSideNav } from "./AppSideNav";
import { AppSideNavFix } from "./AppSideNavFix";
import { AppSideNavMy } from "./AppSideNavMy";

import "./App.css";

const App = () => {
  return (
    <Router>
      <AppSideNavMy />
    </Router>
  );
};

export default App;
