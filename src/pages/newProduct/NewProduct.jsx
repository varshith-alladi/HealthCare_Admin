import { useState, useEffect } from "react";
import "./newProduct.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";
import { addProductRoute } from "../../utils/APIRoutes";

export default function NewProduct() {
  const [product, setProduct] = useState({
    productname: "",
    price: "",
    img: "",
    type: "",
  });

  const addProductHandler = (e) => {
    e.preventDefault();
    console.log(product);
    axios
      .post(addProductRoute, { ...product, status: "active" })
      .then((res) => {
         console.log(res)
         if(res.data.status){
            alert("Product added successfully")
         }
         else{
            alert("Product already exists")
         }
      })
      .catch((err) => {
        console.log(err);
      });
    setProduct({ productname: "", price: "", img: "", type: "" });
  };

  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="newProduct">
          <h1 className="addProductTitle" style={{ color: "darkblue" }}>
            New Product
          </h1>
          <form className="addProductForm">
            <div className="addProductItem">
              <label>Product Name</label>
              <input
                type="text"
                id="file"
                placeholder="Product Name"
                value={product.productname}
                onChange={(e) => {
                  setProduct({ ...product, productname: e.target.value });
                }}
                required
              />
            </div>
            <div className="addProductItem">
              <label>Price</label>
              <input
                type="text"
                placeholder="Price"
                value={product.price}
                onChange={(e) => {
                  setProduct({ ...product, price: e.target.value });
                }}
                required
              />
            </div>
            <div className="addProductItem">
              <label>Image Url</label>
              <input
                type="text"
                placeholder="Image Url"
                value={product.img}
                onChange={(e) => {
                  setProduct({ ...product, img: e.target.value });
                }}
                required
              />
            </div>
            <div className="addProductItem">
              <label>Product Type</label>
              <select
                name="active"
                id="active"
                value={product.type}
                onChange={(e) => {
                  setProduct({ ...product, type: e.target.value });
                }}
                required
              >
                <option>--Select an option--</option>
                <option value="healthcare">Healthcare</option>
                <option value="medicine">Medicine</option>
                <option value="pharmaceutical">Pharmaceutical</option>
              </select>
            </div>
            <button className="addProductButton" onClick={addProductHandler}>
              Create
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
