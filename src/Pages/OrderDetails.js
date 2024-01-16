import '../Styles/OrderDetails.css';
import tempData from "../data/cart.json";
import tempShopData from "../data/shop.json";

function OrderDetails() {


    const OrderedItems = () => (
        <div className='details'>
            {/* make the "status:_____" dynamic later */}
            <p className='center'><strong>status: pending</strong></p>
            <ul className="dropdown-content width">
                {tempData.map((item, i) => {
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
                            <div className="ordered-item-info">
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
            <hr />
            <div className='payment-info-top'>
                <div id="titles-left">
                    <p><strong>Order Placed:</strong></p>
                    <p><strong>Subtotal:</strong></p>
                    <p><strong>Shipping and Handling</strong></p>
                    <p><strong>Taxes:</strong></p>
                    <p><strong>Total:</strong></p>
                </div>
                <div id="titles-right">
                    <p>11/15/23 6:23 pm</p>
                    <p>$19.98</p>
                    <p>$6.18</p>
                    <p>$1.19</p>
                    <p>$27.35</p>
                </div>
            </div>
        </div>
    );

    function OrderDetails() {
        return (
            <div>
                <OrderedItems />
            </div>
        )
    }

    function CancelConfirm() {
        return (
            <div className="cancel-details" >
                <p>Cancel this Order?</p>
                <p>This action cannot be undone. Please review your decision carefully before proceeding.</p>
                <div className="buttons">
                    <button id="back">Go Back</button>
                    <button id="confirm">Confirm</button>
                </div>
            </div>
        )
    }

    function Canceled() {
        return (
            <div className="cancel-details" >
                <p>Your Order has been Canceled.</p>
                <p>Your order of 2 items has been canceled. A confirmation email will be sent within 24 hours.</p>
            </div>
        )
    }

    return (
        <div className="order-details-container">
            <h1>Order Details</h1>
            <OrderDetails />
            <button className="back-to-profile-btn">Back to Profile</button>
        </div>
    )
}

export default OrderDetails