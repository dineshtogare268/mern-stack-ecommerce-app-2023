import React from "react";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
  return (
    <div>
      <div className="text-center ">
        <div className="list-group" style={{ padding: "0.5rem" }}>
          <h4>Dashboard</h4>
          <NavLink
            to="/dashboard/user/profile"
            className="list-group-item "
            style={{
              backgroundColor: "#B2DFDB",
              fontWeight: "700",
              border: " 0.1rem solid black",
              margin: "0.3rem",
              color: "black",
              borderRadius: "0.7rem",
              boxShadow:
                "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px",
            }}
          >
            Profile
          </NavLink>
          <NavLink
            to="/dashboard/user/orders"
            className="list-group-item "
            style={{
              backgroundColor: "#C8E6C9",
              fontWeight: "700",
              border: " 0.1rem solid black",
              margin: "0.3rem",
              color: "black",
              borderRadius: "0.7rem",
              boxShadow:
                "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px",
            }}
          >
            Orders
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
