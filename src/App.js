import Navbar from './Navbar'
import Main from './Main';
import Tabs from './Tabs';
// import Tshirts from './t-shirts';
// import Watch from './watchs';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
// import Pants from './Pants';
// import Glasses from './Glasses';
import Product from './productPage';
import Shopping from './Shopping';
import Cart from './Cart';

 



function App() {
  return (
    <Router>
      <div className="App">
      <Navbar></Navbar>
      
      <Switch>
      <Route exact path="/Cart">
          <Cart></Cart>
        </Route>
        <Route exact path="/">
        <Tabs></Tabs>
            <Main></Main>
        </Route>
        <Route exact path="/:name">
        <Tabs></Tabs>
        <Shopping></Shopping>
        </Route>
        <Route exact path="/:product/:id">
          <Product></Product>
        </Route>
        <Route exact path="/Cart">
          <Cart></Cart>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
