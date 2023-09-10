import React from "react";
import { NavLink } from "react-router-dom";
import "../Layout/adminMenu.css";

const AdminMenu = () => {
  return (
    <>
      <div
        className="text-center"
        style={{
          boxShadow:
            " rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
          marginTop: "3.125rem",
          padding: " 1rem",
          backgroundColor: "#fffde7",
        }}
      >
        <div className="list-group" style={{ padding: "0.5rem" }}>
          <h4>Admin Panel</h4>
          <NavLink
            to="/dashboard/admin/create-category"
            className="list-group-item admin-menu"
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
            Create Category
          </NavLink>
          <NavLink
            to="/dashboard/admin/create-product"
            className="list-group-item admin-menu "
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
            Create Product
          </NavLink>

          <NavLink
            to="/dashboard/admin/products"
            className="list-group-item admin-menu "
            style={{
              backgroundColor: "#b3e5fc",
              fontWeight: "700",
              border: " 0.1rem solid black",
              margin: "0.3rem",
              color: "black",
              borderRadius: "0.7rem",
              boxShadow:
                "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px",
            }}
          >
            Products
          </NavLink>

          <NavLink
            to="/dashboard/admin/orders"
            className="list-group-item  admin-menu"
            style={{
              backgroundColor: "#b2ebf2",
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

          {/* <NavLink
            to="/dashboard/admin/users"
            className="list-group-item list-group-item-action"
          >
            {" "}
            Users
          </NavLink> */}
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
