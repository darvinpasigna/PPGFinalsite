import '../../App.css';
import NavLogin from '../../Components/NavLogin';
import Footer from '../../Components/Footer';
import ContactContent from '../../Components/ContactContent';

function MemberContact () {
    return (
        <>
        <NavLogin />
        <div className="background"></div>
        <br />
        <ContactContent />
        <br />
        <Footer />
        </>
)}

export default MemberContact;