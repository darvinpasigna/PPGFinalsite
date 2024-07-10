import React, { useState, useEffect } from 'react';
import '../App.css';

function Carou() {
  const url = "https://db.ygoprodeck.com/api/v7/cardinfo.php";

  const [carouselImg, setCarouselImg] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        console.log(response.data);
        setCarouselImg(response.data);
      });
  }, []);


  const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  const groupedImages = chunkArray(carouselImg.slice(1011, 1020), 3); 

  return (
    <>
      <div id="PPGcarou" className="container-fluid carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {groupedImages.map((group, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <div className="d-flex">
                {group.map((carImg) => (
                  <div key={carImg.id} className="col-4">
                    <img src={carImg.card_images[0].image_url} className="d-block w-100" alt="..." />
                    {/* <div className="carousel-caption d-none d-md-block" id='c1'>
                      <h2></h2>
                    </div> */}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#PPGcarou" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#PPGcarou" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Carou;
