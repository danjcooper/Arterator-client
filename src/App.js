import * as React from 'react';
import { PromptForm } from './components';
import { Routes, Route } from 'react-router-dom';

// let myName: string;

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/test' element={<PromptForm/>} />
          {/* <PromptForm/> */}
      </ Routes>
    </>
  );
};

export default App;