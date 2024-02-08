'use client'
import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar'

const LanguageButton = styled.button`
  background-color: ${props => props.clicked ? 'white' : 'orange'};
  color:${props => props.clicked ? 'black' : 'black'};
  
  border: 2px solid #333;
  padding: 8px 16px;
  margin-right: 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #333;
    color: #fff;
  }
`;

// const ImageAnimation = styled.img`
//   @keyframes slideInFromLeft {
//     0% {
//       transform: translateX(-100%);
//     }
//     100% {
//       transform: translateX(0);
//     }
//   }

//   animation: slideInFromLeft 0.5s ease-out; /* Apply animation */
// `;

const HomePage = () => {
  const [language, setLanguage] = useState('guj');
  const [buttonClicked, setButtonClicked] = useState({ en: false, guj: true });

  const toggleLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    setButtonClicked({ [selectedLanguage]: true });
  };

  return (
    <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div style={{ height: "45px", width: "100%", backgroundColor: 'red', textAlign: 'center' }}>
        <h1 style={{ margin: '7px' }}>|| श्री गुरुदेव दत्त : ||</h1>
      </div>
      <h2 style={{ padding: '25px', color: 'black' }}>{language === 'en' ? 'Welcome' : 'સ્વાગત છે'}</h2>
      <img
        src="/ashram.jpg"
        alt="Animated Image"
        className='image-animation'
        style={{ height: '500px', width: '300px' }}
      />
      <div style={{ paddingTop: '25px' }}>
        <LanguageButton clicked={buttonClicked['en']} onClick={() => toggleLanguage('en')}>
          English
        </LanguageButton>
        <LanguageButton clicked={buttonClicked['guj']} onClick={() => toggleLanguage('guj')}>
          ગુજરાતી
        </LanguageButton>
        <div style={{ backgroundColor: 'white', justifyContent: 'center' }}>
          <p style={{ padding: '10px 0 0 5  0px', color: 'black' }}>{language === 'en' ? 'This is a one of picture of ashram.' : 'આ આશ્રમનું એક ચિત્ર છે.'}</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
