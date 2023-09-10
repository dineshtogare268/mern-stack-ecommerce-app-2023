import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
const Products = () => {
  const [products, setProducts] = useState([]);

  //getall products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/get-product");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Someething Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Layout>
      <div className="row dashboard">
        <div className="col-md-4" style={{ marginTop: "6.25rem" }}>
          <AdminMenu />
        </div>
        <div className="col-md-8 " style={{ marginTop: "6.25rem" }}>
          <h1>All Products List</h1>
          <div className="d-flex flex-wrap">
            {/* Products map */}
            {products?.map((p) => (
              <Link
                key={p._id}
                to={`/dashboard/admin/product/${p.slug}`}
                className="product-link"
              >
                <div
                  className="card m-2"
                  style={{
                    width: "18rem",
                    height: "27rem",
                    backgroundColor: "#FAFAFA",
                    boxShadow: " rgb(38, 57, 77) 0px 20px 30px -10px",
                  }}
                >
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    style={{
                      padding: "1rem",
                    }}
                    height={"250rem"}
                    alt={p.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    {p.description.substring(0, 40)}...
                    <h5
                      className="card-title card-price"
                      style={{
                        color: "green",
                        fontWeight: "700",

                        marginTop: "1rem",
                      }}
                    >
                      {" "}
                      Price:{" "}
                      {p.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "INR",
                      })}
                    </h5>
                  </div>
                </div>
              </Link>
            ))}

            {/* Products map */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
