import React from 'react';
import PresentationBoard from './PresentationBoard';
import MainSite from './MainSite';
import Menu from './Menu';

export default function App() {
  return (
    <div className="main-container">
      <PresentationBoard />        
      <MainSite />
      <Menu />      
    </div>
  );
}
