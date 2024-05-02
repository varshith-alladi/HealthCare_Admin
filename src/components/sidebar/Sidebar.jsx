import {
  ChatBubbleOutline,
  DynamicFeed,
  LineStyle,
  MailOutline,
  PermIdentity,
  Storefront,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./sidebar.css";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle" style={{ color: "black" }}>
            Dashboard
          </h3>
          <ul className="sidebarList">
            <Link to="/home" className="link">
              <li className="sidebarListItem">
                <HomeOutlinedIcon />
                Home
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle" style={{ color: "black" }}>
            Quick Menu
          </h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PersonOutlineOutlinedIcon />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Inventory2OutlinedIcon />
                Products
              </li>
            </Link>
            <Link to="/transactions" className="link">
              <li className="sidebarListItem">
                <PaidOutlinedIcon />
                Transactions
              </li>
            </Link>
            <Link to="/queries" className="link">
              <li className="sidebarListItem">
                <QuestionAnswerOutlinedIcon />
                Queries
              </li>
            </Link>
            <Link to="/newProduct" className="link">
              <li className="sidebarListItem">
                <LocalHospitalOutlinedIcon />
                Add Product
              </li>
            </Link>
            <Link to="/" className="link">
              <li
                className="sidebarListItem"
                onClick={() => localStorage.clear()}
              >
                <LogoutIcon />
                Log out
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
