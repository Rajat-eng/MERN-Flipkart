import AuthProvider from './context/authProvider';
import Header from './components/Header/header';
import DetailView from './components/Details/detailView';
import Cart from './components/cart/Cart';
import Home from './components/Home/home';
import {Box} from '@mui/material';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';




function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Box style={{marginTop:65}}>
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/product/:id"element={<DetailView />}></Route>
              <Route exact path="/cart" element={<Cart />}></Route>
            </Routes>
        </Box> 
      </Router>  
    </AuthProvider>
  );
}

export default App;
