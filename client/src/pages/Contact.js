import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-4 ">
          <img
            src="/images/contact_us.png"
            alt="contactus"
            style={{
              width: "100%",
              marginTop: "3.5rem",
              backgroundColor: "black",
              padding: "2rem",
            }}
          />
        </div>
        <div className="col-md-5">
          <h1
            className=" p-2 text-white text-center"
            style={{ backgroundColor: "rgba(62, 39, 35,1.0)" }}
          >
            CONTACT US
          </h1>
          <p
            className="text-justify mt-2"
            style={{ fontSize: "1.3rem", fontWeight: "600" }}
          >
            Any query and Info about product feel free to call anytime we 24X7
            available....
          </p>
          <p className="mt-3" style={{ fontSize: "1.3rem", fontWeight: "600" }}>
            <BiMailSend /> : dineshtogare@gmail.com
          </p>
          <p className="mt-3" style={{ fontSize: "1.3rem", fontWeight: "600" }}>
            <BiPhoneCall /> : 8983617578
          </p>
          <p className="mt-3" style={{ fontSize: "1.3rem", fontWeight: "600" }}>
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
