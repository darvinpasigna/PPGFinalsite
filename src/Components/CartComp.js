import React, { useState, useEffect } from 'react';
import '../App.css';

const CartComp = () => {
  // const [cardAmount, setCardAmount] = useState(0);
  // const [numItem, setNumItem] = useState(0);
  const [cartItem, setCartItem] = useState([]);
  const itemprice = document.getElementById('price').value;
  const itemqty = document.getElementById('qty').value;
  const [totalPrice, setTotalPrice] = useState();

  const totalbill =() =>{
      if (totalPrice === null){
        console.log('no item found');
      } else (
        setTotalPrice(itemprice * itemqty)
      )
  }

  useEffect(() => {
    const itemstorage = JSON.parse(sessionStorage.getItem('cart')) || [];
    setCartItem(itemstorage);
    // setNumItem(itemstorage.length);
    // const totalamount = itemstorage.reduce((sum, card) => sum + card.cardprice, 0);
    // setCardAmount(Math.round(totalamount * 100) / 100);
  }, []);

  return (
    <>
{/* cart item */}
      <div className="container">
        <div className="row">
          <div className="col-8">
            {cartItem.map((card, index) => (
              <div key={index} className="card mb-3 carditem" style={{ maxWidth: "100%" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={card.cardpic} className="img-fluid rounded-start" alt="cardpic" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{card.cardname}</h5>
                      <h4>
                        {card.cardlvl} <br />
                        {card.cardrace} <br />
                        {card.cardel} <br />
                        {card.cardtype}
                        </h4>
                      <h6 id='price'>{card.cardprice}</h6>
                      <div class="input-group input-group-sm mb-3">
                          <span className="input-group-text" id="inputGroup-sizing-sm">QTY</span>
                          <input 
                            id='qty'
                            type="number" 
                            class="form-control" 
                            aria-label="Sizing example input" 
                            aria-describedby="inputGroup-sizing-sm" 
                            min="1" 
                          />
                        </div>
                        <div class="input-group input-group-sm mb-3">
                          <span className="input-group-text" id="inputGroup-sizing-sm">Total</span>
                          <input 
                            id='total'
                            type="number" 
                            class="form-control" 
                            aria-label="Sizing example input" 
                            aria-describedby="inputGroup-sizing-sm" 
                            placeholder={totalbill}
                            min="1" 
                            value={totalPrice}
                          />
                        </div>

                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
{/* end cart item */}

 {/* payment */}
          <div className="col-4">
            <h2 style={{color: "white"}}>Total Payment: </h2>
            <h2 style={{color: "white"}}>Total Items: </h2>
           
            <div className="col-md-3 checkout">
              <form>
                <legend style={{ fontWeight: 600 }}>CHECKOUT</legend>
                <br />
                <fieldset>
                  <div className="d-flex">
                    <h6 style={{ marginRight: '25px' }}>1. Dark Grey Blackout Curtains (1 item)</h6> 
                    <strong>&#8369;999.50</strong>
                  </div>
                  <br />
                  <div className="d-flex">
                    <h6 style={{ marginRight: '180px' }}>Shipping Fee</h6> 
                    <strong>&#8369;140</strong>
                  </div>
                  <br />
                  <div className="d-flex">
                    <h6 style={{ marginRight: '135px' }}>Total Payment</h6> 
                    <strong><u>&#8369;1,139.50</u></strong>
                  </div>
                  <br />
                  <label className="form-label">Payment Option</label>
                  <select className="form-select">
                    <option>Cash on Delivery</option>
                    <option>Gcash</option>
                    <option>Paymaya</option>
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
            {/* end payment */}
          </div>
        </div>
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </>
  );
};

export default CartComp;
