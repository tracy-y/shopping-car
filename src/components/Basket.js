import React from "react";

function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.1;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <div className="block col-1">
      <h2>Cart Items </h2>
      <div>
        {cartItems.length === 0 && <div> Cart is empty </div>}

        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-1">{item.name}</div>
            <div className="col-1">
              <button className="remove" onClick={() => onRemove(item)}>
                {" "}
                -{" "}
              </button>
              <button className="add" onClick={() => onAdd(item)}>
                {" "}
                +{" "}
              </button>
            </div>
            <div className="col-1 text-right">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}
        {cartItems.length !== 0 && (
          <>
            <hr />
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                ${shippingPrice.toFixed(2)}
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">${totalPrice.toFixed(2)}</div>
            </div>
          </>
        )}
        <div>
          <hr />
          <button onClick={() => alert("Implement! Checkout!")}>
            checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Basket;
