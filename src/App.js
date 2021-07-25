import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { mobileSelector, fetchMobiles } from './features/mobiles/mobileSlice';

function App() {
  const { loading, hasErrors, mobiles } = useSelector(mobileSelector)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMobiles());
  }, [dispatch])

  return (
    <div className="App">
      {
        loading
          ? <h1>loading...</h1>
          : <h1>data is loaded</h1>

      }
    </div>
  );
}

export default App;
