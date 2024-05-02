import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { allProductsRoute } from "../../utils/APIRoutes";

export default function ProductList() {
  const [data, setData] = useState([]);


  useEffect(() => {
    axios
      .get(allProductsRoute)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
      console.log(data)
  }, []);


  // const handleDelete = (id) => {
  //   axios
  //     .delete(`${hostURL}/products/` + id)
  //     .then((res) => {
  //       console.log(res);
  //       window.location.reload();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row._doc.img} alt="" />
            {params.row._doc.productname}
          </div>
        );
      },
    },
    { 
      field: "type", 
      headerName: "Product Type", 
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            {params.row._doc.type}
          </div>
        );
      },
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            {params.row._doc.status}
          </div>
        );
      },
    },
    {
      field: "price",
      headerName: "Price(in Rs.)",
      width: 160,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            {params.row._doc.price}
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row._doc._id}> {/*ekkada marchali */}
              <button className="productListEdit">See Info</button>
            </Link>
            {/* <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            /> */}
          </>
        );
      },
    },
  ];

  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="productList">
          <h1 style={{ color: "darkblue" }}>All Products</h1>
          <DataGrid
            rows={data}
            disableSelectionOnClick
            columns={columns}
            checkboxSelection
          />
        </div>
      </div>
    </>
  );
}
