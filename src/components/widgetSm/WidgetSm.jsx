import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {hostURL} from "../../URL";
import { allUsersRoute } from "../../utils/APIRoutes";

export default function WidgetSm() {
  const [newMembers, setNewMembers] = useState([]);

  useEffect(() => {
    axios
    .get(allUsersRoute)
      // .get(`${allUsersRoute}/users?_limit=5`)
      .then((res) => {
        setNewMembers(res.data.slice(0,5));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newMembers.map((user) => {
          return (
            <li className="widgetSmListItem">
              <div className="widgetSmUser">
                <span className="widgetSmUsername">{user._doc.username}</span>
                <span className="widgetSmUserTitle">{user._doc.usertype}</span>
              </div>
              {/* <Link to={"/user/" + params.row._doc._id}> */}
              <Link to={`/user/${user._doc._id}`}>
                <button className="widgetSmButton">
                  <Visibility className="widgetSmIcon" />
                  Display
                </button>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
