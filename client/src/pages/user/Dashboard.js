import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/Auth";
const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Dashboard - Ecommerce App"}>
      <div className="container-flui m-3 p-3 dashboard">
        <div className="row">
          <div
            className="col-md-3"
            style={{
              marginTop: "6.25rem",
              boxShadow:
                "rgba(6, 24, 44, 0.4) 0px 0px 0px 1px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
              backgroundColor: "#FFF9C4",
            }}
          >
            <UserMenu />
          </div>
          <div className="col-md-9" style={{ marginTop: "6.25rem" }}>
            <div
              className="card w-75 p-3"
              style={{
                boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
                backgroundColor: "#CFD8DC",
              }}
            >
              <h3>Name: {auth?.user?.name}</h3>
              <h3>Email: {auth?.user?.email}</h3>
              <h3>Address: {auth?.user?.address}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
