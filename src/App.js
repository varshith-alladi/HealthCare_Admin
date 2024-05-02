import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Adminlogin from "./pages/Adminlogin/Adminlogin";
import Error from "./pages/Error";
import Transaction from "./pages/Transactions/Transaction";
import Queries from "./pages/Queries/Queries";

function App() {
  return (
    <Router>
      {/* <Topbar />
      <div className="container">
      <Sidebar /> */}
      <Switch>
        <Route exact path="/">
          <Adminlogin />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/transactions">
          <Transaction />
        </Route>
        <Route path="/queries">
          <Queries />
        </Route>
        <Route path="/users">
          <UserList />
        </Route>
        <Route path="/user/:userId">
          <User />
        </Route>
        <Route path="/products">
          <ProductList />
        </Route>
        <Route path="/product/:productId">
          <Product />
        </Route>
        <Route path="/newproduct">
          <NewProduct />
        </Route>
        <Route path="/error">
          <Error />
        </Route>
      </Switch>
      {/* </div> */}
    </Router>
  );
}

export default App;
