import React, { useState, useEffect } from 'react';
import '../App.css';

const Card = () => {
  const url = "https://db.ygoprodeck.com/api/v7/cardinfo.php";
  const [highLevelCards, setHighLevelCards] = useState([]);
  const [expandedDesc, setExpandedDesc] = useState(null);

  const showMoreDesc = (card) => {
    setExpandedDesc(expandedDesc === card ? null : card);
  };

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        console.log(response.data);
        setHighLevelCards(response.data);
      });
  }, []);

  return (
    <>
      <div className='container d-flex-wrap'>
        {highLevelCards.slice(400, 408).map((card) => (
          <div key={card.id} className="card mb-3 carditem" style={{ backgroundColor: "#f8f9fa5a" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={card.card_images[0].image_url} className="img-fluid rounded-start" alt="cardpic" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Name: {card.name}</h5>
                  <h6 className='card-text'>
                    Level: {card.level} <br />
                    Race: {card.race} <br />
                    Element: {card.attribute} <br />
                    Card Type: {card.type}
                  </h6>
                  <p className="card-text" style={{ cursor: 'pointer' }}>
                    <small>
                      {expandedDesc === card ? (
                        <span>
                          {card.desc} <br />
                          <span style={{ color: 'blue', textDecoration: 'underline' }} onClick={() => showMoreDesc(card)}>
                            Hide
                          </span>
                        </span>
                      ) : (
                        <span>
                          {card.desc.substring(0, 100)}...{' '}
                          <span style={{ color: 'blue', textDecoration: 'underline' }} onClick={() => showMoreDesc(card)}>
                            Read more
                          </span>
                        </span>
                      )}
                    </small>
                  </p>
                  <div className='d-flex' style={{ justifyContent: "space-between", alignItems: "center" }}>
                  <h6>&#8369; {card.card_prices[0].cardmarket_price}</h6>
                  <button 
                  className='btn btn-primary' 
                  type='button' 
                  data-bs-toggle="modal" 
                  data-bs-target="#forgotologin" 
                  >BUY NOW</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
        <div className='modal' id='forgotologin'>
          <div className='modal-dialog modal-dialog-centered' style={{width: "400px"}}>
            <div className='modal-content'>
            <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div> <br />
              <h5 style={{paddingLeft: "20px", color: "red"}}>Oops! You forgot to login!!</h5>
              <p style={{padding: "0 20px 0 20px"}}>Not a member? click the button below to sign up.
              </p>
              <div class="modal-footer" style={{margin: "auto"}}>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#login">Login here</button>
                <button style={{marginLeft: "50px"}} type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#signup">Sign Up</button>
            </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Card;
