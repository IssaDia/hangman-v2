import React from 'react';
import './App.css';
import Masked from './Masked'
import {
  RecoilRoot,
} from 'recoil';

function App() {
  return (
    <>
     <RecoilRoot>
      <Masked></Masked>
     </RecoilRoot>
    
   
    </>
  );
}

export default App;
