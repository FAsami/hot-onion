import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Home/Banner';
import Foods from './Components/Food/Foods';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Menu from './Components/Menu/Menu';
import SignUp from './Components/SignUp/SignUp';
import Checkout from './Pages/Checkout/Checkout';
import CompleteOrder from './Components/CompleteOrder/CompleteOrder';
import NotFound from './Components/NotFound/NotFound';
import { CartProvider } from './Context/CartContext';
import FoodDetails from './Pages/FoodDetails/FoodDetails';
import { UserProvider } from './Context/UserContext';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <UserProvider>
          <Container fixed={true}>
            <Navbar />
            <Switch>
              <Route exact path='/'>
                <Banner />
                <Menu />
                <Foods />
              </Route>
              <PrivateRoute path='/checkout'>
                <Checkout />
              </PrivateRoute>
              <Route path='/signup'>
                <SignUp />
              </Route>
              <Route path='/login'>
                <SignUp />
              </Route>
              <Route path='/completeOrder'>
                <CompleteOrder />
              </Route>
              <Route path='/foods/:id'>
                <FoodDetails />
              </Route>
              <Route path='/:time'>
                <Banner />
                <Menu />
                <Foods />
              </Route>
              <Route path='*'>
                <NotFound />
              </Route>
            </Switch>
          </Container>
        </UserProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
