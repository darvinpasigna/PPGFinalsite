import React, { useEffect, useState } from 'react';
import Logo from '../Images/Logo.png';
import { Link } from 'react-router-dom';
import '../App.css';

function NavLogin() {
  const [addItem, setAddItem] = useState(0);
  const [searchItem, setSearchItem] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    switch (searchItem) {
      case 'New Cards':
        window.location.replace('/New Cards');
        break;
      case 'High Level Cards':
        window.location.replace('/High Level Cards');
        break;
      case 'Rare Cards':
        window.location.replace('/Rare Cards');
        break;
      case 'All Cards':
        window.location.replace('/All Cards');
        break;
      default:
        alert('No result found');
    }
  };

  useEffect(() => {
    const updateCartCount = () => {
      const itemStorage = JSON.parse(sessionStorage.getItem('cart')) || [];
      setAddItem(itemStorage.length);
    };

    window.addEventListener('storage', updateCartCount);
    updateCartCount();

    return () => {
      window.removeEventListener('storage', updateCartCount);
    };
  }, []);

  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="container">
        <Link to="/"><img id='Logo1' src={Logo} alt="logo" width={250} height={50}/></Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/memberhome">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cardshop">Card Shop</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/memberabout">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/membercontact">Contact Us</Link>
            </li>
          </ul>
          <form className="d-flex" role="search" style={{width: "60%"}} onSubmit={handleSearch}>
            <div className="input-group input-group-sm mb-3 me-5 pt-3">
              <div style={{width: "180px"}}>
                <select className='form-select' onChange={(e) => setSearchItem(e.target.value)}>
                <option selected>Card Category</option>
                  <option value="All Cards">All Cards</option>
                  <option value="New Cards">New Cards</option>
                  <option value="High Level Cards">High Level Cards</option>
                  <option value="Rare Cards">Rare Cards</option>
                </select>
              </div>
              <input type="text" className="form-control" value={searchItem} onChange={(e) => setSearchItem(e.target.value)} />
              <button className="btn btn-outline-secondary" type="submit">Search</button>
            </div>
            <Link id='cart' to="/cart">Cart (<span style={{ color: 'white' }}>{addItem}</span>)</Link>
            <div className='dropdown'>
              <button 
                id='btn'
                className="btn btn-outline-none dropdown-toggle mt-3 pt-1" 
                style={{backgroundColor: "dark"}} 
                type="button"
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                Profile
              </button>
              <ul className='dropdown-menu'>
                <li><Link to="/personalprofile" style={{textDecoration: "none", color: 'lightgray'}}>Personal Info</Link></li>
                <li><Link to="/" style={{textDecoration: "none", color: 'lightgray'}}>Logout</Link></li>
              </ul>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavLogin;
