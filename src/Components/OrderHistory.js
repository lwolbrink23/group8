import "../Styles/OrderHistory.css";
import tempData from "../data/cart.json";
import tempShopData from "../data/shop.json";
import { Link } from "react-router-dom";

function OrderHistory() {
  const OrderedHistoryItems = () => (
    <div className="orderHistoryDetails">
      {/* make the date & status dynamic later */}
      <p className="date">11/15/23</p>
      <div className="inline">
        <p>
          <strong>Status: Processing</strong>
        </p>
        <Link to="/order_details" className="align-right">
          View Details
        </Link>
      </div>
      <ul className="dropdown-content width">
        {/* only shows first 2 items in order */}
        {tempData.slice(0, 2).map((item, i) => {
          let itemName = "";
          let itemPic = "";

          for (const shopItem of tempShopData) {
            if (item.id === shopItem.id) {
              itemName = shopItem.name;
              itemPic = shopItem.file;
            }
          }
          return (
            <li className="ordered-item" key={i}>
              <img
                src={require("../assets/images/shop/" + itemPic + ".png")}
                alt=""
              ></img>
              <div className="item-history-info">
                <p>
                  <span style={{ fontWeight: "bold" }}>{itemName}</span>
                  <br></br>
                  <span style={{ fontSize: "13px" }}>quantity</span>
                  <br></br>
                  <span id="item-qty">{item.qty}</span>
                </p>
              </div>
              <p className="align-right">${item.price}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );

  function OrderHistoryDetails() {
    return (
      <div>
        <OrderedHistoryItems />
      </div>
    );
  }

  return (
    <div className="order-details-container">
      <OrderHistoryDetails />
    </div>
  );
}

export default OrderHistory;
