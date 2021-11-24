import React, { useState, useEffect } from "react";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import "./main.css";

const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos"
        );
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.log("Error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="main">
      <div className="top">
        <p className="photos">Photos</p>
        <div className="profile">
          <AccountCircleIcon className="profile-icon" />
          <div className="profile-details">
            <p className="name">Grace Njeri</p>
            <p className="role">Admin</p>
          </div>
        </div>
      </div>
      <div className="bottom">
        <input className="search" type="text" placeholder="Search" />
        {data.map((user) => (
          <div className="data-container">
            <div className="photo">
              <img src={user.thumbnailUrl} alt="pic" />
            </div>
            <div className="data-info">
              <p className="title">{user.title}</p>
              <p className="id">{user.id}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
