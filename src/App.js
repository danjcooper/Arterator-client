import * as React from 'react';
import { Header, PromptForm, PromptResult, Nav, About } from './components';
import { Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <>
        <Nav/>
        <Header />
          <Routes>
            <Route path='/' element={<PromptForm/>} />
            <Route path='/promptresult' element={<PromptResult />} /> 
            <Route path='/about' element={<About />} /> 
          </Routes>
    </>
  );
};

export default App;