import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";
const Categories = () => {
  const categories = useCategory();
  return (
    <Layout title={"All Categories"}>
      <div className="container categories" style={{ marginTop: "8rem" }}>
        <div
          className="row container"
          style={{
            backgroundColor: "#EEEEEE",
            boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
            padding: "2rem",
          }}
        >
          {categories.map((c) => (
            <div className="col-md-4 mt-5 mb-3 gx-3 gy-3" key={c._id}>
              <div
                className="card"
                style={{
                  backgroundColor: "#e8f5e9",
                  padding: "0.7rem",
                  boxShadow:
                    "rgba(6, 24, 44, 0.4) 0px 0px 0px 1px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
                }}
              >
                <Link
                  to={`/category/${c.slug}`}
                  className="btn cat-btn"
                  style={{ fontSize: "1.3rem", fontWeight: "600" }}
                >
                  {c.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
