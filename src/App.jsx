import React from 'react';

import { WrapFooter , WrapSkills, WrapTestimonial , WrapHeader, WrapAbout, WrapWork} from './container';
import {Navbar} from './components';

import './App.scss';

export const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <WrapHeader/>
      <WrapAbout/>
      <WrapWork/>
      <WrapSkills/>
      {/* <WrapTestimonial/>
      <WrapFooter/> */}
      
    </div>
  )
}
