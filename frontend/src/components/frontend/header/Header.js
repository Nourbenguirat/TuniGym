import React from 'react';
import './Header.css';
import '../Hero/Welcome'



const Header = () => {
    return (
        <header className="navbar">
            <img src="images/logo1.png" alt='logo' className='logo'/>


    <ul class="nav-links">
      <li><a href="#activities">Activities</a></li>
      <li><a href="#offres">Offres</a></li>
      <li><a href="#zenergy">Zenergy</a></li>
      <li><a href="#program">Program</a></li>
    </ul>
        </header>
    );
};

export default Header;