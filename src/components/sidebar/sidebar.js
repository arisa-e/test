import React from "react";

import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";

import "./sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="Sidebar-container">
      <div className="Logo-container">
        <h1>Logo</h1>
      </div>
      <div className="options-container">
        <div className="option">
          <PhotoCameraIcon />
          <p className="label">Photos</p>
        </div>
        <div className="option">
          <PeopleIcon />
          <p className="label">Users</p>
        </div>
        <div className="option">
          <SettingsIcon />
          <p className="label">Settings</p>
        </div>
      </div>
      <div className="sidebar-bottom">
        <Link className="link" to="/">
          Log Out
        </Link>
        <p>Data Integrated Limited 2021</p>
      </div>
    </div>
  );
};

export default Sidebar;
