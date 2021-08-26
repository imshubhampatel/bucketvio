import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMobiles } from '../../features/mobiles/mobileSlice';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { Cart, Wishlist, Dashboard, Page404, ProductSingle } from '..';
import Navbar from '../navbar/Navbar';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMobiles());
  }, [dispatch])

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/wishlist" component={Wishlist} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/products/:prodcutDeatil/dp/:productId" component={ProductSingle} />
        <Route exact path="/*" component={Page404} />
      </Switch>
    </Router>
  );
}

export default App;



