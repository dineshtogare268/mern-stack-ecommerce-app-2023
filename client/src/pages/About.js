import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-5 ">
          <img
            src="/images/about.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-5">
          <h1
            className="text-center"
            style={{ fontSize: "3.3rem", fontWeight: "600" }}
          >
            About Us
          </h1>
          <hr />
          <p className="text-justify mt-2 about-text">
            The primary goal of an e-commerce site is to sell goods online. This
            project deals with developing an e-commerce website for Online
            Product Sale... It provides the user with a catalog of different
            product available for purchase in the store. In order to facilitate
            online purchase a shopping cart is provided to the user.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
