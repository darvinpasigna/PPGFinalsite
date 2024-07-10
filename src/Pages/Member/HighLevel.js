import React, { useState, useEffect } from 'react';
import '../../App.css';
import NavLogin from '../../Components/NavLogin';
import Footer from '../../Components/Footer';

const HighLevel = () => {
  const url = "https://db.ygoprodeck.com/api/v7/cardinfo.php";
  const [highLevelCards, setHighLevelCards] = useState([]);
  const [expandedDesc, setExpandedDesc] = useState(null);
  const [cardItem, setCardItem] = useState(() => JSON.parse(sessionStorage.getItem('cart')) || []);

  const addToCart = (id) => {
    const cardpic = document.getElementById(id + "cardpic").src;
    const cardname = document.getElementById(id + "cardname").innerText;
    const cardprice = parseFloat(document.getElementById(id + "cardprice").innerText);
    const cardlvl = document.getElementById(id + "cardlvl").innerText;
    const cardrace = document.getElementById(id + "cardrace").innerText;
    const cardel = document.getElementById(id + "cardel").innerText;
    const cardtype = document.getElementById(id + "cardtype").innerText;
    const newCardItem = [...cardItem, { 
      cardpic, 
      cardname, 
      cardprice, 
      cardlvl,
      cardrace,
      cardel,
      cardtype
    }];
    sessionStorage.setItem('cart', JSON.stringify(newCardItem));
    setCardItem(newCardItem);
  };

  const showMoreDesc = (card) => {
    setExpandedDesc(expandedDesc === card ? null : card);
  };

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setHighLevelCards(response.data);
      });
      
  }, []);

  return (
<>
<NavLogin />
<div className="background"></div>
<h1 style={{backgroundColor: "darkblue", padding: "10px"}}>Get the highest-level card here!!</h1>
<br />
<div className='container d-flex-wrap'>
      {highLevelCards.slice(1850, 1900).map((card) => (
        <div key={card.id} className="card mb-3 carditem" style={{backgroundColor: "#f8f9fa5a"  }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={card.card_images[0].image_url} id={card.id + "cardpic"} className="img-fluid rounded-start" alt="cardpic" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title" id={card.id + "cardname"}> {card.name}</h5>
                <h6 className='card-text' id={card.id + "cardlvl"}>Level: {card.level}</h6>
                <h6 id={card.id + "cardrace"}>Race: {card.race}</h6>
                <h6 id={card.id + "cardel"}>Element: {card.attribute}</h6>
                <h6 id={card.id + "cardtype"}>Card Type: {card.type}</h6>
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
                <div className='d-flex'>
                <h6 id={card.id + "cardprice"}>{card.card_prices[0].ebay_price}</h6>
                <button 
                className='btn btn-primary' 
                type='button' 
                onClick={() => addToCart(card.id)}
                style={{marginLeft: "200px"}}
                >Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

      <Footer />
</>
  );
};

export default HighLevel;
