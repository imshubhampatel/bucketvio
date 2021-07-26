import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMobiles } from '../../features/mobiles/mobileSlice';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Cart, Wishlist, Dashboard, Page404 } from '..';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMobiles());
  }, [dispatch])

  return (
    <Router>
      <Switch>
        <Route exact path="/wishlist" component={Wishlist} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/*" component={Page404} />
      </Switch>
    </Router>
  );
}

export default App;
