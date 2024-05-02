import { Link, useParams } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummyData";
import { Publish } from "@material-ui/icons";
import { useState, useEffect } from "react";
import axios from "axios";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { hostURL } from "../../URL";
import { productRoute } from "../../utils/APIRoutes";

export default function Product() {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    axios
      .post(`${productRoute}/${productId}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="product">
          <div className="productTitleContainer">
            <h1 className="productTitle" style={{ color: "darkblue" }}>
              Product
            </h1>
          </div>
          <div className="productTop">
            <div className="productTopRight">
              <div className="productInfoTop">
                <img src={product.img} alt="" className="productInfoImg" />
                <span className="productName">{product.productname}</span>
              </div>
              <div className="productInfoBottom">
                <div className="productInfoItem">
                  <span className="productInfoKey">Id:</span>
                  <span className="productInfoValue">{product.id}</span>
                </div>
                <div className="productInfoItem">
                  <span className="productInfoKey">Price:</span>
                  <span className="productInfoValue">{product.price}</span>
                </div>
                <div className="productInfoItem">
                  <span className="productInfoKey">Status:</span>
                  <span className="productInfoValue">{product.status}</span>
                </div>
                <div className="productInfoItem">
                  <span className="productInfoKey">Type:</span>
                  <span className="productInfoValue">{product.type}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
