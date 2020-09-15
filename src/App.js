import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Home/Banner';
import Foods from './Components/Food/Foods';
import { BrowserRouter } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Menu from './Components/Menu/Menu';
import SignUp from './Components/SignUp/SignUp';
import FoodDetails from './Components/Food/FoodDetails';
import Checkout from './Components/Checkout/Checkout';
import CompleteOrder from './Components/CompleteOrder/CompleteOrder';

function App() {
  return (
    <Container fixed={true}>
      <BrowserRouter>
        <Navbar />
        <CompleteOrder />
        {/* <Menu /> */}
        {/* <Checkout /> */}
        {/* <FoodDetails /> */}
        {/* <Banner /> */}
        {/* <SignUp />
        <Foods /> */}
      </BrowserRouter>
    </Container>
  );
}

export default App;
