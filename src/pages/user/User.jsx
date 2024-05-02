import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./user.css";
import axios from "axios";
import { AccountCircleOutlined } from "@material-ui/icons";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { hostURL } from "../../URL";
import { userRoute } from "../../utils/APIRoutes";

export default function User() {
  const { userId } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
    .get(`${userRoute}/${userId}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="user">
          <div className="userTitleContainer">
            <h1 className="userTitle" style={{ color: "darkblue" }}>
              User Info
            </h1>
          </div>
          <div className="userContainer">
            <div className="userShow">
              <div className="userShowTop">
                <AccountCircleOutlined />
                <div className="userShowTopTitle">
                  <span className="userShowUsername">{user.username}</span>
                  <span className="userShowUserTitle">{user.usertype}</span>
                </div>
              </div>
              <div className="userShowBottom">
                <div className="userShowInfo">
                  Pincode :
                  <span className="userShowInfoTitle">{user.pincode}</span>
                </div>
                <span className="userShowTitle">Contact Details</span>
                <div className="userShowInfo">
                  <PhoneAndroid className="userShowIcon" />
                  <span className="userShowInfoTitle">{user.phone}</span>
                </div>
                <div className="userShowInfo">
                  <MailOutline className="userShowIcon" />
                  <span className="userShowInfoTitle">{user.email}</span>
                </div>
                <div className="userShowInfo">
                  <LocationSearching className="userShowIcon" />
                  <span className="userShowInfoTitle">{user.address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
