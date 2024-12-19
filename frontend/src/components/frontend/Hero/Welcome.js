import React from 'react';
import './Welcome.css';  
import Header from '../header/Header';
import UserDisplay from '../Hero/userDisplay'; 

const Welcome = () => {
  return (
    <div className="welcome-container">
      <Header/>
      <div className='photo1'>
      <img src="images/photo1.jpg" alt="Accueil" className="photo1" />
      </div>
      
      <div className="description">
        <p>
          Welcome to TuniGym! Our gym is equipped with state-of-the-art facilities to help you reach your fitness goals.
          Whether you're looking to build muscle, improve endurance, or just stay healthy, we have a wide range of equipment
          and classes to meet your needs. Join us today and take the first step towards a healthier you!
        </p>
        <img src="images/im11.jpg" alt="Description de l'image" className="photoDes" />
        </div>
        <main>
          
                <UserDisplay /> 
            </main>
     

    
    </div>
  );
};

export default Welcome;








