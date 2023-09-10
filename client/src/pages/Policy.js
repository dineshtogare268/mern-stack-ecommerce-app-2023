import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.png"
            alt="contactus"
            style={{ height: "450px", marginTop: "25px", width: "100%" }}
          />
        </div>
        <div className="col-md-4 mt-4">
          <h1
            className="text-center"
            style={{ fontSize: "3.3rem", fontWeight: "600" }}
          >
            Privacy Policy
          </h1>
          <hr />
          <p
            style={{
              fontSize: "1.3rem",
              fontFamily: " 'Slabo 27px', serif",
              fontWeight: "400",
            }}
          >
            When you use our Platform, we collect and store your information
            which is provided by you from time to time. In general, you can
            browse the Platform without telling us who you are or revealing any
            personal information about yourself.
          </p>

          <p
            style={{
              fontSize: "1.3rem",
              fontFamily: " 'Slabo 27px', serif",
              fontWeight: "400",
            }}
          >
            Once you give us your personal information, you are not anonymous to
            us. Where possible, we indicate which fields are required and which
            fields are optional. You always have the option to not provide
            information by choosing not to use a particular service, product or
            feature on the Platform.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
