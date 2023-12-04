import React from 'react';
import PresentationBoard from './PresentationBoard';
import MainSite from './MainSite';
import Menu from './Menu';
import jonData from '../../assets/JSON/data.json';

export default function App() {
  const presentationBoard = jonData.presentation_board;
  const mainData = [
    ...jonData.experiences,
    ...jonData.formations,
    ...jonData.miniatures_portfolio,
  ];

  return (
    <div className="main-container">
      <PresentationBoard presentationData={presentationBoard} />
      <MainSite data={...mainData} />
      <Menu />
    </div>
  );
}
