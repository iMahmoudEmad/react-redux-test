import React from 'react';
import './App.css';
import CakeContainer from './components/CakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import BlelaContainer from './components/BlelaContainer';
import NewCakeContainer from './components/NewCakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemContainer cake />
        <hr />
        <ItemContainer />
        <hr />
        <CakeContainer />
        <hr />
        <NewCakeContainer />
        <hr />
        <HooksCakeContainer />
        <hr />
        <IceCreamContainer />
        <hr />
        <BlelaContainer />
        <hr />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
