import "./Adminlogin.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { adminLoginRoute } from "../../utils/APIRoutes";    

function Adminlogin() {
  const history = useHistory();
  const [admin, setAdmin] = useState({
    password: "",
  });


  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await axios.post(adminLoginRoute, {
      password: admin.password
    });
    if (res.data.status === false) {
      alert(res.data.msg);
      return;
    } else {
      localStorage.setItem("admin", JSON.stringify({ admin: admin.password }));
      if (localStorage.getItem("admin") !== null) {
        history.push("/home");
      }
    }
  };

  return (
    <div className="loginhead">
      <div className="hgh">
        <div className="typingdemo">
          <p className="title">HELLO ADMIN</p>
        </div>
        <form className="Adlog" onSubmit={submitHandler}>
          <input
            type="password"
            placeholder="Enter your encrypted key"
            value={admin.password}
            onChange={(e) => setAdmin({ ...admin, password: e.target.value })}
            style={{ height: "20px" }}
          />
          <input type={"submit"} style={{ backgroundColor: "white" }} />
        </form>
      </div>
    </div>
  );
}

export default Adminlogin;
