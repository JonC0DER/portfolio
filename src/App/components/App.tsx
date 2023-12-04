import React from 'react';
import PresentationBoard from './PresentationBoard';
import MainSite from './MainSite';
import Menu from './Menu';
import jonData from '../../assets/JSON/data.json';

export default function App() {
  const { presentation_board, formations, experiences, miniatures_portfolio } =
    jonData;

  return (
    <div className="main-container">
      <PresentationBoard presentationData={presentation_board} />
      <MainSite mainData={[formations, experiences, miniatures_portfolio]} />
      <Menu />
    </div>
  );
}
