import '../../App.css';
import NavLogin from '../../Components/NavLogin';
import Footer from '../../Components/Footer';
import PersonalInfo from '../../Components/PersonInfo';

function PersonalProfile () {
    return (
        <>
        <NavLogin />
        <div className="background"></div>
        <PersonalInfo />
        <br />
        <br />
        <Footer />
        </>
)}

export default PersonalProfile;