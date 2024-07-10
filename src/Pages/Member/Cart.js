import '../../App.css';
import NavLogin from '../../Components/NavLogin';
import Footer from '../../Components/Footer';
// import CartComp from '../../Components/CartComp';
import CartList from '../../Components/CartList';

function Cart () {
    

    return (
        <>
        <NavLogin />
        <div className="background"></div>
        <CartList />
        {/* <CartComp /> */}
        <Footer />
        </>
)}

export default Cart;