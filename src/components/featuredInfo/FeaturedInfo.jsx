import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useState, useEffect } from "react";
import axios from "axios";
import {hostURL} from "../../URL";
import { allUsersRoute } from "../../utils/APIRoutes";
import { allProductsRoute } from "../../utils/APIRoutes";

export default function FeaturedInfo() {
  const [user, setUser] = useState([]);
  const [product, setProduct] = useState([]);
  const [orders, setOrders] = useState([]);
  const [total, setTotal] = useState(0);

  const totalOrders = () => {
    for (let i = 0; i < orders.length; i++) {
      setTotal(total + parseInt(orders[i].amount));
    }
  };

  useEffect(() => {
    axios
    .get(allUsersRoute)
      // .get(`${hostURL}/users`)
      .then((res) => {
        setUser(res.data);
        return axios.get(allProductsRoute);
      })
      .then((res) => {
        setProduct(res.data);
        return axios.get(`${hostURL}/orders`);
      })
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    totalOrders();
  }, []);

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Active users</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{user.length}</span>
        </div>
        <span className="featuredSub">Comparitvely</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Products</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{product.length}</span>
        </div>
        <span className="featuredSub">Comparatively</span>
      </div>
    </div>
  );
}
