import '../App.css';
import Logo from '../Images/Logo.png';

function Aboutcontent () {
    return(
        <>
        <br />
       <div id='aboutcont' className='container'>
       <div className='row'>
            <div className='map col-8'>
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15443.737144555504!2d121.0725933286987!3d14.602819257811472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b81d8a03f6c5%3A0x2c718a49bf834007!2sEastwood%20Mall!5e0!3m2!1sen!2sph!4v1719747549722!5m2!1sen!2sph" 
                width="400" 
                height="300" 
                style={{border: 0, width: '100%', height: '100%'}}
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps location of Eastwood Mall">
            </iframe>

            <p style={{color: "black"}}>123 Example Street City, State, ZIP Code Country <br />
            Customer Support: (123) 456-7890 <br />
            Sales Inquiries: (123) 456-7891
            <br />Cellphone Number<br />09757367195
            </p>
            </div>
            <div className='aboutintro col-4'>
                <img src={Logo} alt="logo" style={{maxWidth: "100px"}}/>
                <p>PPG is an acronym from the family name of Darvin Pasigna and Kim Pagunsan, Pasigna Pagunsan Game. They were childhood friends who loved to play games and decided to create an online shop on May 30, 2024. The products are YOGIOH cards; these cards have high-level cards, rare cards, 5- to 10-star cards, and newly released cards. If you love to play this game, this shop is for you. All cards are available here. To start playing, just click the register now below and subscribe to get the latest and strongest card.</p>
                <button 
                className='btn btn-primary'
                type='button'
                  data-bs-toggle="modal"
                  data-bs-target="#signup"
                >REGISTER NOW</button>
            </div>
        </div>
       </div>
        </>
    )}
export default Aboutcontent;