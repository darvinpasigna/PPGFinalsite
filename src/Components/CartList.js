import React, { useState, useEffect } from 'react';
import check from '../Images/success.png';
import '../App.css';

const CartList = () => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [payment, setPayment] = useState("");

    function paymentMethod () {
           if (payment === "Gcash"){
                return("Gcash")
            } else if (payment === "Maya"){
                return("Maya")
            }else {
              return("Cash On Delivery")
            }
    }

  const handleQtyChange = (index, event) => {
    const newQty = parseInt(event.target.value, 10);
    const newCartItems = [...cartItems];
    newCartItems[index].qty = newQty;
    newCartItems[index].total = calculateTotal(newCartItems[index].cardprice, newQty);
    setCartItems(newCartItems);
    sessionStorage.setItem('cart', JSON.stringify(newCartItems));
  };

  const handleDelete = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
    sessionStorage.setItem('cart', JSON.stringify(newCartItems));
  };


  const handleSelect = (index, event) => {
    const newSelectedItems = [...selectedItems];
    if (event.target.checked) {
      newSelectedItems.push(index);
    } else {
      const itemIndex = newSelectedItems.indexOf(index);
      newSelectedItems.splice(itemIndex, 1);
    }
    setSelectedItems(newSelectedItems);
  };

  const calculateTotal = (price, qty) => {
    return price * qty;
  };

  

  useEffect(() => {
    const itemStorage = JSON.parse(sessionStorage.getItem('cart')) || [];
    const itemsWithQty = itemStorage.map(item => ({
      ...item,
      qty: 1, 
      total: item.cardprice
    }));
    setCartItems(itemsWithQty);
  }, []);

  const getTotalPayment = () => {
    return selectedItems.reduce((sum, index) => sum + cartItems[index].total, 0);
  };

  const checkoutItem = () => {
    return selectedItems.map(index => {
      const item = cartItems[index];
      return `${item.cardname} (${item.qty} items) - - - - ${item.total}`;
    }).join(', ');
  };


  return (
    <>
      <div className="container d-flex-wrap" id='cartlist'>
        <div className="row" id='payment'>
          <div className="col-8">
            {cartItems.map((item, index) => (
              <div key={index} className="card mb-3 carditem" style={{ maxWidth: "100%" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={item.cardpic} className="img-fluid rounded-start" alt="cardpic" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title" id={`itemname-${index}`}>{item.cardname}</h5>
                      <h4>
                        {item.cardlvl} <br />
                        {item.cardrace} <br />
                        {item.cardel} <br />
                        {item.cardtype}
                      </h4>
                      <h6>&#8369;{item.cardprice}</h6>
                      <div className="input-group input-group-sm mb-3" style={{width: "150px"}}>
                        <span className="input-group-text" id="inputGroup-sizing-sm">QTY</span>
                        <input
                        
                          id={`cardqty-${index}`}
                          type="number"
                          className="form-control"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-sm"
                          min="1"
                          value={item.qty}
                          onChange={(e) => handleQtyChange(index, e)}
                        />
                      </div>
                      <div className="input-group input-group-sm mb-3" style={{width: "150px"}}>
                        <span className="input-group-text" id="inputGroup-sizing-sm">Total</span>
                        <input
                          id={`totalprice-${index}`}
                          type="number"
                          className="form-control"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-sm"
                          value={(Math.round(item.total * 100) / 100)}
                          readOnly
                        />
                      </div>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </button> <br /> <br />
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id={`flexCheckDefault-${index}`}
                          onChange={(e) => handleSelect(index, e)}
                        />
                        <label className="form-check-label" htmlFor={`flexCheckDefault-${index}`}>
                          SELECT
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="col-4">
            <div className="col-md-3 checkout">
              <form>
                <legend style={{ fontWeight: 600 }}>CHECKOUT</legend>
                <br />
                <fieldset>
                  <ul>
                    {selectedItems.map(index => {
                      const item = cartItems[index];
                      return (
                        <li key={index}>
                          {item.cardname} ({item.qty} items) - - - - {(Math.round(item.total * 100) / 100)}
                        </li>
                      );
                    })}
                  </ul>

                  <div className="d-flex">
                    <h6 style={{ marginRight: '135px' }}>Total Payment</h6>
                    <strong><u>&#8369;{(getTotalPayment()).toFixed(2)}</u></strong>
                  </div>
                  <br />
                  <label className="form-label">Payment Option</label>
                  <select className="form-select" value={payment} onChange={(e) => setPayment(e.target.value)}>
                  <option value="">Select Payment</option>
                    <option value="Cash On Delivery">Cash on Delivery</option>
                    <option value="Gcash">Gcash</option>
                    <option value="Maya">Maya</option>
                  </select>
                  <br />
                  <button
                    type="button"
                    className="form-control btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#buy"
                  >
                    Place Order
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
          <div className="modal" tabIndex="-1" id="buy" style={{ padding: '20px' }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header" style={{textAlign: "center"}}>
                        <h5 
                        className="modal-title"
                        >{paymentMethod()}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body" style={{ paddingLeft: '20px' }}>
                        <strong>Delivery Address:</strong>
                        <p>
                        Darvin Pasigna (09757367195) <br />
                        Tugbungan, Zamboanga City
                        </p>
                        <strong>Receive by:</strong> January 21-24 <br />
                        <br />
                        <div className="d-flex">
                        <h6 style={{ marginRight: '135px' }}>Total Payment</h6>
                        <strong><u>&#8369;{(getTotalPayment()).toFixed(2)}</u></strong>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button
                        type="button"
                        className="form-control btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#confirm"
                        >
                        CONFIRM
                        </button>
                    </div>
                   </div>
                </div>
                </div>
                <div class="modal" id='confirm'>
                        <div class="modal-dialog modal-dialog-centered" style={{width: "200px"}}>
                          <div class="modal-content">
                            <div class="modal-header">
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{height: "5px"}}></button>
                            </div>
                            <div class="modal-body">
                              <img src={check} alt="success" style={{width: "25px"}} /> SUCCESS!!
                            </div>
                          </div>
                        </div>
                      </div>
        </div>
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </>
  );
};

export default CartList;
