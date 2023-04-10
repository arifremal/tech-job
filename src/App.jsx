import React from 'react';
import Home from './Components/Home';
import Statistics from './Components/Statistics';
import { Outlet } from 'react-router-dom';
import { BeakerIcon } from '@heroicons/react/24/solid'
import Footer from './Components/Footer';
import Header from './Components/Header';

const App = () => {
  return (
    <div>
      <Header></Header>

       <Outlet></Outlet>

       <Footer></Footer>
       
    </div>
  );
};

export default App;