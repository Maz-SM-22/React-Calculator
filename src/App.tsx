import React from 'react';

import CalcProvider from './context/CalcContext';
import Wrapper from './components/Wrapper';
import Screen from './components/Screen';
import ButtonBox from './components/ButtonBox';
import Button from './components/Button';

import './App.css';

const btnValues = [
  ['C', '+-', '%', '/'],
  ['7', '8', '9', 'x'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '=']
]

function App() {
  return (
    <div data-testid='app'>
      <CalcProvider>
        <Wrapper>
          <Screen />
          <ButtonBox>
            {btnValues.flat().map(btn =>
              <Button value={btn} key={btn} />
            )}
          </ButtonBox>
        </Wrapper>
      </CalcProvider>
    </div>
  );
}

export default App;
