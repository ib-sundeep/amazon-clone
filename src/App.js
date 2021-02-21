import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/header';
import CartPage from './pages/cart';
import ProductPage from './pages/product';
import LoginPage from './pages/login';
import HomePage from './pages/home';

import './App.scss';
import CurrencyFormat from 'components/general/CurrencyFormat';

function App() {
  return <CurrencyFormat value={10000} currencyCode="INR" />;
}

export default App;
