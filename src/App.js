import React, { useState } from 'react';
import styled from 'styled-components';
import DailyImages from './DailyImages';
import Slides from './Slides';
import { BackButton } from './Components';

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #fff;
  gap: 20px;
`;

const Button = styled.button`
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  color: white;
  background-color: #05cb63;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;
  font-family: 'Source Sans Pro', sans-serif;

  &:hover {
    background-color: #04a350;
  }
`;

function App() {
  const [view, setView] = useState(null);

  if (view) {
    return (
      <>
        <BackButton onClick={() => setView(null)}>Back</BackButton>
        {view === 'daily' ? <DailyImages /> : <Slides />}
      </>
    );
  }

  return (
    <MenuContainer>
      <h1>Mapillary 2019 animations</h1><p>By Dennis Jin</p><p>Revived by Jozsi in 2026 Jan</p>
      <h1>Select Animation</h1>
      <Button onClick={() => setView('daily')}>Daily Images</Button>
      <Button onClick={() => setView('slides')}>Slides</Button>
    </MenuContainer>
  );
}

export default App;
