import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import MemberHome from './Pages/Member/MemberHome';
import MemberAbout from './Pages/Member/MemberAbout';
import MemberContact from './Pages/Member/MemberContact';
import PersonalProfile from './Pages/Member/PersonalProfile';
import Cart from './Pages/Member/Cart';
import CardShop from './Pages/Member/CardShop';
import Allcards from './Pages/Allcards';
import Rarecard from './Pages/Member/Rarecard';
import HighLevel from './Pages/Member/HighLevel';
import NewCards from './Pages/Member/NewCards';

function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/memberhome" element={<MemberHome />} />
        <Route path="/memberabout" element={<MemberAbout />} />
        <Route path="/membercontact" element={<MemberContact />} />
        <Route path="/personalprofile" element={<PersonalProfile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cardshop" element={<CardShop />} />
        <Route path='/All Cards' element={<Allcards />} />
        <Route path='/High Level Cards' element={<HighLevel />} />
        <Route path='/New Cards' element={<NewCards />} />
        <Route path='/Rare Cards' element={<Rarecard />} />
      </Routes>
    </Router>
    </>
 
  );
}

export default App;
