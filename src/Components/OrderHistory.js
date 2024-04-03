import "../Styles/OrderHistory.css";
import ShopData from "../data/shop.json";
import { Link, useNavigate } from "react-router-dom";

function OrderHistory({ dbOrders }) {
  const navigate = useNavigate();
  //handle view details button click
  const handleViewDetails = (order) => {
    navigate(`/order_details/${order._id}`, {
      state: {
        order: {
          cart: order.cart,
          giftcards: order.cart.giftcards,
          costs: order.costs,
          date: order.date,
          status: order.status,
          shippingInfo: order.shippingInfo,
          userID: order.userID,
          _id: order._id,
        },
      },
    }); // Pass the appointment information in the state
  };

  console.log(dbOrders)

  const OrderedHistoryItems = ({ order }) => (
    <div className="orderHistoryDetails">
      <p className="date">
        {new Date(Number(order.date)).toLocaleDateString()}
      </p>
      <div className="inline">
        <p>
          <strong>Status: {order.status}</strong>
        </p>
        <button
          className="apptActionButton"
          onClick={() => handleViewDetails(order)}
        >
          View Details
        </button>
      </div>
      <ul className="dropdown-content width">
        {/* only shows first 2 items in order*/}
        {order.cart.items.slice(0, 2).map((item, i) => {
          let itemName = "";
          let itemPic = "";

          // ShopData is an array containing shop items
          for (const shopItem of ShopData) {
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

        {order.cart.giftcards.map((item, i) => {

          return (
            <li className="ordered-item" key={i}>
              <img
                src={require("../assets/images/shop/giftcard.png")}
                alt=""
              ></img>
              <div className="item-history-info">
                <p>
                  <span style={{ fontWeight: "bold" }}>Giftcard</span>
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
    if (dbOrders.length === 0) {
      // Display a message when there are no orders
      return (
        <div className="noAppts">
          <p>No Order History</p>
          <Link to="/shop">
            <button className="shopButton">Shop Now</button>
          </Link>
        </div>
      );
    }

    return (
      <div>
        {/* Map through orders only if there are orders */}
        {dbOrders.map((order, index) => (
          <OrderedHistoryItems key={index} order={order} />
        ))}
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
