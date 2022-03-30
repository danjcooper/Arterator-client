import * as React from 'react';
import { Header, PromptForm, PromptResult } from './components';
import { Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <>
        <Header />
          <Routes>
            <Route path='/' element={<PromptForm/>} />
            <Route path='/promptresult' element={<PromptResult />} /> {/* index? */}
          </ Routes>
    </>
  );
};

export default App;