import * as React from 'react';
import { Header, PromptForm, PromptResult, Nav } from './components';
import { About } from './pages'
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
            {/* <Route path='/randomprompts' element={<RandomPrompts/>} />  */}
          </Routes>
    </>
  );
};

export default App;