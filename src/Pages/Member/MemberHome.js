import '../../App.css';
import NavLogin from '../../Components/NavLogin';
import Footer from '../../Components/Footer';
import LoginCards from '../../Components/LoginCards';
import Carou from '../../Components/Carou';

function MemberHome () {
    return (
        <>
        <NavLogin />
        <div className="background"></div>
        <Carou/>
        <br />
        <br />
        <div class="row">
          <div class="col-xl-8 mb-5 px-5">
            <p class="text-uppercase text-muted fw-bold mb-1">Top choices</p>
            <h3>Popular this week</h3>
            {/* <p class="lead text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.    </p> */}
          </div>
        </div>
        <LoginCards />
        <br />
        <br />
     
        <Footer />
        </>
)}

export default MemberHome;