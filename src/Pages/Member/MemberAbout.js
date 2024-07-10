import '../../App.css';
import NavLogin from '../../Components/NavLogin';
import Footer from '../../Components/Footer';
import About from '../../Components/Aboutus';

function MemberAbout () {
    return (
        <>
        <NavLogin />
        <div className="background"></div>
        <br />
        <About />
        <br />
        <Footer />
        </>
)}

export default MemberAbout;