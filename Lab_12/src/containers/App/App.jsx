import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import { ItemsProvider } from '../../components/context/ItemsContext';
import Layout from './Layout/Layout';
import Home from '../Home/Home';
import Catalog from '../Catalog/catalog';
import ItemPage from '../Item/ItemPage';
import Footer from './Footer/Footer';
import CartPage from '../CartPage/CartPage';
import CheckoutPage from "../CheckoutPage/CheckoutPage";
import SuccessPage from "../SuccessPage/SuccessPage";
import WelcomePage from '../Auth/WelcomePage/WelcomePage';
import LoginPage from '../Auth/LoginPage/LoginPage'; 
import RegisterPage from '../Auth/RegisterPage/RegisterPage';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';

const App = () => (
  <Provider store={store}>
    <ItemsProvider>
      <Router>
        <Layout />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={ <ProtectedRoute> <Home /> </ProtectedRoute> } />
          <Route path="/catalog" element={ <ProtectedRoute> <Catalog /> </ProtectedRoute> } />
          <Route path="/item/:id" element={ <ProtectedRoute> <ItemPage /> </ProtectedRoute> } />
          <Route path="/cart" element={ <ProtectedRoute> <CartPage /> </ProtectedRoute> } />
          <Route path="/checkout" element={ <ProtectedRoute> <CheckoutPage /> </ProtectedRoute> } />
          <Route path="/success" element={ <ProtectedRoute> <SuccessPage /> </ProtectedRoute> } />
        </Routes>
        <Footer />
      </Router>
    </ItemsProvider>
  </Provider>
);

export default App;
