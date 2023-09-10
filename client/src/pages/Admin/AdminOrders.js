import React, { useEffect, useState } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "../../components/Layout/Layout";
import { useAuth } from "../../context/Auth";
import moment from "moment";
import axios from "axios";
import { Select } from "antd";

const AdminOrders = () => {
  const [status, setStatus] = useState([
    "Not Process",
    "Processing",
    "Shipped",
    "Deliverd",
    "Cancel",
  ]);
  const [changeStatus, setchangeStatus] = useState("");

  const [orders, setOrders] = useState([]);
  const [auth, setAuth] = useAuth();

  const getOrders = async () => {
    try {
      const { data } = await axios.get("/api/v1/auth/all-orders");
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);

  const handleChange = async (orderId, value) => {
    try {
      const { data } = await axios.put(`/api/v1/auth/order-status/${orderId}`, {
        status: value,
      });
      getOrders();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout title={"All Orders Data"}>
      <div className="row dashboard">
        <div className="col-md-3" style={{ marginTop: "6.25rem" }}>
          <AdminMenu />
        </div>

        <div className="col-md-9" style={{ marginTop: "6.25rem" }}>
          <h1>All Orders</h1>

          {orders?.map((orderproduct, index) => {
            return (
              <div
                className="border shadow"
                style={{
                  boxShadow:
                    "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
                  borderRadius: "1rem",
                  backgroundColor: "#FAFAFA",
                  marginBottom: "1rem",
                }}
              >
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Status</th>
                      <th scope="col">Buyer</th>
                      <th scope="col">Date</th>
                      <th scope="col">Payment</th>
                      <th scope="col">Quantity</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td style={{ color: "red", fontWeight: "800" }}>
                        {index + 1}
                      </td>

                      <td>
                        <Select
                          bordered={false}
                          onChange={(value) =>
                            handleChange(orderproduct._id, value)
                          }
                          defaultValue={orderproduct?.status}
                        >
                          {status.map((statusValue, index) => (
                            <option key={index} value={statusValue}>
                              {statusValue}
                            </option>
                          ))}
                        </Select>
                      </td>

                      <td>{orderproduct?.buyer?.name}</td>
                      <td>{moment(orderproduct?.createAt).fromNow()}</td>
                      <td>
                        {orderproduct?.payment.success ? "Success" : "Failed"}
                      </td>
                      <td>{orderproduct?.products?.length}</td>
                    </tr>
                  </tbody>
                </table>

                <div
                  className="container"
                  style={{
                    backgroundColor: "rgba(241, 248, 233,1.0)",
                    width: "95%",
                  }}
                >
                  {orderproduct?.products?.map((p, index) => (
                    <div
                      className="row mb-2 p-3 card flex-row"
                      style={{
                        backgroundColor: "rgba(250, 250, 250,1.0)",

                        fontSize: "1.1rem",
                      }}
                    >
                      <div
                        className="col-md-4"
                        style={{
                          boxShadow:
                            " rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
                        }}
                      >
                        <img
                          src={`/api/v1/product/product-photo/${p._id}`}
                          className="card-img-top"
                          alt={p.name}
                          height={"250px"}
                        />
                      </div>

                      <div className="col-md-8">
                        <p>{p.name}</p>
                        <p>{p.description.substring(0, 50)}</p>
                        <p style={{ color: "green", fontWeight: "700" }}>
                          Price : ₹ {p.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default AdminOrders;
