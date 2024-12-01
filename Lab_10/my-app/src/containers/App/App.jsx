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

const App = () => (
  <Provider store={store}>
    <ItemsProvider>
      <Router>
        <Layout />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/item/:id" element={<ItemPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </Router>
    </ItemsProvider>
  </Provider>
);

export default App;
