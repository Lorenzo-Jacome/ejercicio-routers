import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Link1 from './link1';
import ButtonComponent from './button';
import Checkboxes from './checkbox';
import SliderSizes from './slider';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/link1'element={<Link1/>}/>
        <Route path='/button'element={<ButtonComponent/>}/>
        <Route path='/checkbox'element={<Checkboxes/>}/>
        <Route path='/sliders'element={<SliderSizes/>}/>
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
