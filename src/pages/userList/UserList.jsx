import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { userRows } from "../../dummyData";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { hostURL } from "../../URL";
import { allUsersRoute } from "../../utils/APIRoutes";

export default function UserList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(allUsersRoute)
      .then((res) => {
        console.log(res.data)
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // const handleDelete = (id) => {
  //   axios
  //     .delete(`${hostURL}/users/` + id)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "username",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <div className="userListUser">{params.row._doc.username}</div>
          </>
        );
      },
    },
    { field: "email",
     headerName: "Email", 
     width: 200,
     renderCell: (params) => {
      return (
        <>
          <div className="userListUser">{params.row._doc.email}</div>
        </>
      );
    },
    
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      renderCell: (params) => {
        return (
          <>
            <div className="userListUser">{params.row._doc.status}</div>
          </>
        );
      },
    },
    {
      field: "usertype",
      headerName: "Usertype",
      width: 140,
      renderCell: (params) => {
        return (
          <>
            <div className="userListUser">{params.row._doc.usertype}</div>
          </>
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
            <Link to={"/user/" + params.row._doc._id}>
              <button className="userListEdit">See Info</button>
            </Link>
            {/* <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row._doc.id)}
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
        <div className="userList">
          <h1 style={{ color: "darkblue" }}>All Users</h1>
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
