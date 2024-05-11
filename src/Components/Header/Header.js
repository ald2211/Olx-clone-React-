import React, { useContext, useRef, useState } from 'react';
import './Header.css';
import OlxLogo from '../../assets/olx.icon.png';
import Search from '../../assets/normalSearch.png';
import SecondSearch from '../../assets/searchWithBackground.png';
import Arrow from '../../assets/arrow.png';
import SellButton from '../../assets/sellButton.png';
import secondArrow from '../../assets/secondDropDown.png';
import { authContext } from '../../Store/Context';
import { logout } from '../../Firebase/config';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const inputRef = useRef();
  const [isInputFocused, setInputFocused] = useState(false);

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };

  const {User}=useContext(authContext)
 const navigate=useNavigate()
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <img src={OlxLogo} alt="" />
        </div>
        <div className={`placeSearch ${isInputFocused ? 'outer' : ''}`}>
          <img src={Search} alt="" />
          <input
            type="text"
            placeholder="Search City, area or loc..."
            ref={inputRef}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
          <img className={`arrowImg ${isInputFocused ? 'rotate' : ''}`} src={Arrow} alt="" />
        </div>
        <div className="productSearch">
          <div className="input">
            <input type="text" placeholder="Find car, mobile phone and more..." />
          </div>
          <div className="searchAction">
            <img src={SecondSearch} alt="" />
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <img src={secondArrow} className="secondArrow" alt="" />
        </div>
        <div className="loginPage">
          <span onClick={()=>{navigate('/loginOrSignup')}}>{User? `welcome ${User.displayName}`:'Login'}</span>
        </div>
        {User&&<span className='logout' onClick={logout} style={{cursor:'pointer'}}>Logout</span>}
        <div className="sellMenu">
          
          <img onClick={()=>navigate('/create')} src={SellButton} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
