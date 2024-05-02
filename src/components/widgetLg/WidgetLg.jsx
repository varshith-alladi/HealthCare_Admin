import { useState, useEffect } from "react";
import "./widgetLg.css";
import axios from "axios";
import { hostURL } from "../../URL";
import { TransactionRoute } from "../../utils/APIRoutes";

export default function WidgetLg() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
        .get(TransactionRoute)
      // .get(`${hostURL}/orders?_limit=5`)
      .then((res) => {
        setOrders(res.data.slice(0,5));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Phone Number</th>
          <th className="widgetLgTh">Account Number</th>
          <th className="widgetLgTh">Amount</th>
        </tr>
        {orders.map((o) => {
          return (
            <tr className="widgetLgTr">
              <td className="widgetLgUser">
                <span className="widgetLgName">{o._doc.accountholder}</span>
              </td>
              <td className="widgetLgPhone">{o._doc.phone}</td>
              <td className="widgetLgAccountNumber">{o._doc.accountnumber}</td>
              <td className="widgetLgAmount">Rs.{o._doc.amount}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
