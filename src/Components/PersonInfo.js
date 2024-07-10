import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import '../App.css';
import favatar1 from '../Images/F_avatar1.jpg';
import favatar2 from '../Images/F_avatar2.jpg';
import favatar3 from '../Images/F_avatar3.jpg';
import mavatar1 from '../Images/M_avatar1.jpeg';
import mavatar2 from '../Images/M_avatar2.jpg';
import mavatar3 from '../Images/M_avatar3.png';

function PersonalInfo() {
    const boyAvatar = [mavatar1, mavatar2, mavatar3];
    const girlAvatar = [favatar1, favatar2, favatar3];
    const [profileInfo, setProfileInfo] = useState('');
    const [userData, setUserData] = useState({
        gender: '',
        birthdate: '',
        barangay: '',
        city: '',
        province: '',
        zip: ''
      });

      function RandomAvatar() {
        if (userData.gender === "Male") {
          return boyAvatar[Math.floor(Math.random() * boyAvatar.length)];
        } else if (userData.gender === "Female") {
          return girlAvatar[Math.floor(Math.random() * girlAvatar.length)];
        } else {
          return '';
        }
      }
 
    useEffect(() => {
        const savedData = Cookies.get('personalInfo');
        if (savedData) {
          setUserData(JSON.parse(savedData));
        } else {
          const storedUser = JSON.parse(localStorage.getItem(userData.name));
          if (storedUser) {
            setUserData({
              ...userData,
              name: `${storedUser.firstName} ${storedUser.lastName}`,
              email: storedUser.email
            });
          }
        }


        const storedProfileInfo = JSON.parse(sessionStorage.getItem('member'));
        if (storedProfileInfo) {
            setProfileInfo(storedProfileInfo);
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };

      const handleSave = () => {
        Cookies.set('personalInfo', JSON.stringify(userData), { expires: 7 });
        alert('Personal information saved!');
      };
    
   
    return (
        <div className="container">
        <div className="row">
          <div className="col-6">
            <img src={RandomAvatar()} alt="profilepic" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className="personaldetail col-6">
            <form>
              <fieldset>
              {profileInfo && (
        <>
            <h5 style={{ color: "white" }}>Name: <p style={{color: "black"}}>{profileInfo[0].firstName} {profileInfo[0].lastName}</p></h5>
            <h5 style={{ color: "white" }}>Email: <p style={{color: "black"}}>{profileInfo[0].email}</p></h5>
        </>
    )}
    
                <br />
         <div className='d-flex'>
         <label style={{ color: "white", marginRight: "10px" }}>Gender:</label>
                <select
                style={{width: "150px", marginRight: "100px"}}
                  className="form-select"
                  name="gender"
                  value={userData.gender}
                  onChange={handleChange}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                <br />
                <label style={{ color: "white" }}>Birthdate: </label>
                <input
                style={{width: "150px"}}
                  className="form-control"
                  type="date"
                  name="birthdate"
                  value={userData.birthdate}
                  onChange={handleChange}
                />
         </div>
                <br />
                <label style={{ color: "white" }}>Address:</label>
                <input
                  className="form-control"
                  type="text"
                  name="barangay"
                  placeholder="Barangay"
                  value={userData.barangay}
                  onChange={handleChange}
                />
                <br />
                <input
                  className="form-control"
                  type="text"
                  name="city"
                  placeholder="City"
                  value={userData.city}
                  onChange={handleChange}
                />
                <br />
                <input
                  className="form-control"
                  type="text"
                  name="province"
                  placeholder="Province"
                  value={userData.province}
                  onChange={handleChange}
                />
                <br />
                <label style={{ color: "white", marginRight: "10px" }}>ZIP CODE:</label>
                <input
                  className="form-control"
                  type="number"
                  name="zip"
                  placeholder="1234"
                  value={userData.zip}
                  onChange={handleChange}
                />
                <br /> <br />
                <button 
                style={{width: "200px"}}
                type="button" 
                className="btn btn-success" 
                onClick={handleSave}
                >Save</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    );
}

export default PersonalInfo;
