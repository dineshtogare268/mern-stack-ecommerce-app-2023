import React, { useState } from "react";
import Layout from "./../components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../context/Search.js";
import { useCart } from "../context/Cart";
import toast from "react-hot-toast";

import "../styles/Homepage.css";

const Search = () => {
  const navigate = useNavigate();
  const [values] = useSearch();
  const [cart, setCart] = useCart();
  const [page, setPage] = useState(1);
  return (
    <Layout title={"Search results"}>
      <div className="container">
        <div className="text-center">
          <h1>Search Resuts</h1>
          <h6
            style={{ fontSize: "1.5rem", fontWeight: "700", marginTop: "2rem" }}
          >
            {values?.results.length < 1
              ? "No Products Found"
              : `Found ${values?.results.length}`}
          </h6>
          <hr />
          <div className=" d-flex flex-wrap mt-4">
            {values?.results.map((p) => (
              <div
                className="card m-2"
                key={p._id}
                style={{
                  backgroundColor: "#fafafa",
                  boxShadow: " rgb(38, 57, 77) 0px 20px 30px -10px",
                  width: "21rem",
                }}
              >
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  style={{
                    padding: "0.7rem",
                  }}
                  height={"250rem"}
                  alt={p.name}
                />

                {/* Product Cart */}
                <div className="card-body ">
                  <div
                    className="card-name-price "
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <h5 className="card-title">{p.name}</h5>

                    <h5
                      className="card-title card-price"
                      style={{ color: "green", fontWeight: "700" }}
                    >
                      {p.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "INR",
                      })}
                    </h5>
                  </div>
                  <p className="card-text ">
                    {p.description.substring(0, 60)}...
                  </p>
                  <div className="card-name-price">
                    <button
                      className="btn ms-1  m-1"
                      style={{
                        backgroundColor: "#f7f1e3",
                        border: "1px solid black",
                        fontWeight: "700",
                        boxShadow:
                          "rgba(6, 24, 44, 0.4) 0px 0px 0px 1px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
                      }}
                      onClick={() => navigate(`/product/${p.slug}`)}
                    >
                      More Details
                    </button>
                    <button
                      className="btn ms-1"
                      style={{
                        backgroundColor: "#FFCC80",
                        border: "1px solid black",
                        fontWeight: "700",
                        boxShadow:
                          "rgba(6, 24, 44, 0.4) 0px 0px 0px 1px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
                      }}
                      onClick={() => {
                        setCart([...cart, p]);
                        localStorage.setItem(
                          "cart",
                          JSON.stringify([...cart, p])
                        );
                        toast.success("Item Added to cart");
                      }}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
                {/* Product Cart */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
