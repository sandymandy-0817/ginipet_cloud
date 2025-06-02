import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './styles/reset.css';
import './styles/common.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Main from './components/Main';
import Login from './components/Login';
import Join from './components/Join';
import Intro from './components/Intro';
import Info from './components/Info';
import Event from './components/Event';
import Customer from './components/Customer';
import Order from './components/Order';
import Cart from './components/Cart';
import Search_id from './components/Search_id';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/ginipet' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/join' element={<Join />} />
        <Route path='/intro' element={<Intro />} />
        <Route path='/info' element={<Info />} />
        <Route path='/event' element={<Event />} />
        <Route path='/customer' element={<Customer />} />
        <Route path='/order' element={<Order />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/search_id' element={<Search_id />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
