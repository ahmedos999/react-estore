import Navbar from './Navbar'
import Main from './Main';
// import Tabs from './Tabs';
// import Tshirts from './t-shirts';
// import Watch from './watchs';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
// import Pants from './Pants';
// import Glasses from './Glasses';
import Product from './productPage';
import Shopping from './Shopping';
import Cart from './Cart';
import Fav from './Fav';

 



function App() {
  return (
    <Router>
      <div className="App">
      <Navbar></Navbar>
      
      <Routes>
        <Route path="/" element={
            <Main/>}>
  
        </Route>
        <Route  path="/:name" element={<Shopping></Shopping>}>
        
        </Route>
        <Route  path="/:product/:id" element={<Product></Product>}>
          
        </Route>
        <Route  path="/Cart" element={<Cart></Cart>}>
          
        </Route>
        <Route  path="/Favorite" element={<Fav></Fav>}>
          
        </Route>
        
      </Routes>
    </div>
    </Router>
  );
}

export default App;
