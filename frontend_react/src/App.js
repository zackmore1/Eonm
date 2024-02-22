import logo from './logo.svg';
import { Container } from 'react-bootstrap';
import './App.css';
import Headers from './components/Headers.js'
import Footers from './components/Footers.js'

import HomeScreen from './screens/HomeScreen.js'
import ProductScreen from './screens/ProductScreen.js'
import CartScreen from './screens/CartScreen.js'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Headers />
      <main className='py-5'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} exact />
            <Route path='/product/:id' element={<ProductScreen />} />
            <Route path='/cart/:id?' element={<CartScreen />} />
          </Routes>
        </Container>
      </main>
      <Footers />
    </Router>
  );
}

export default App;
