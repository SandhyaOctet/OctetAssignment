'use client';
import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import TableTab from './components/Table';
import Navbar from './components/Header';
import HeroSection from './components/HeroSection';

type MenuItem = Required<MenuProps>['items'][number];

const App: React.FC = () => {

  return<>
    <Navbar />
    <HeroSection />
    {/* <TableTab /> */}
    </>
};

export default App;