/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';
import React from 'react';

import Navbar from './components/Header';
import HeroSection from './components/HeroSection';


const App: React.FC = () => {

  return<>
    <Navbar />
    <HeroSection />
   
    {/* <TableTab /> */}
    </>
};

export default App;