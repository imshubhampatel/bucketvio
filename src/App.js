import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMobiles } from './features/mobiles/mobileSlice';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { Cart, Wishlist, Login, Dashboard, Page404, ProductSingle } from './components';
import Navbar from './components/navbar/Navbar';
import SignUp from './components/login/SignUp';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMobiles());
  }, [dispatch]);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/wishlist" component={Wishlist} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/products" component={Dashboard} />
        <Route exact path="/products/:prodcutDeatil/dp/:productId" component={ProductSingle} />
        <Redirect exact from="/" to="/products" />
        <Route exact path="/*" component={Page404} />
      </Switch>
    </Router>
  );
}

export default App;



