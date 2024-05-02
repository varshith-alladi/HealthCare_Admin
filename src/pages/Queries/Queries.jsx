import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { hostURL } from "../../URL";
import { queryRoute } from "../../utils/APIRoutes";

export default function Queries() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
    .get(queryRoute)
      // .get(`${hostURL}/queries`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "username",
      headerName: "Name",
      width: 200,
      renderCell: (params) => {
        return <div className="productListItem">{params.row._doc.username}</div>;
      },
    },
    { field: "email", headerName: "Email", width: 200,
    renderCell: (params) => {
      return <div className="productListItem">{params.row._doc.email}</div>;
    },
  },
    { field: "ques", headerName: "Query", width: 200,
    renderCell: (params) => {
      return <div className="productListItem">{params.row._doc.ques}</div>;
    },
   },
    { field: "sug", headerName: "Suggestion", width: 150 ,
    renderCell: (params) => {
      return <div className="productListItem">{params.row._doc.sug}</div>;
    },
  },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <a href={`mailto:${params.row.email}`}>
              <button className="userListEdit">Reply</button>
            </a>
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
          <h1 style={{ color: "darkblue" }}>All Queries</h1>
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
