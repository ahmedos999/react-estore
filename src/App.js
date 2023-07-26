import Navbar from './Navbar'
import Main from './Main';
import Tabs from './Tabs';
// import Tshirts from './t-shirts';
// import Watch from './watchs';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
// import Pants from './Pants';
// import Glasses from './Glasses';
import Product from './productPage';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar></Navbar>
      
      <Switch>
        <Route exact path="/">
        <Tabs></Tabs>
            <Main></Main>
        </Route>
        <Route exact path="/:name">
        <Tabs></Tabs>
            <Main></Main>
        </Route>
        {/* <Route exact path="/:tshirts">
        <Tabs></Tabs>
            <Tshirts></Tshirts>
        </Route>
        <Route exact path="/:pants">
        <Tabs></Tabs>
          <Pants></Pants>
        </Route>
        <Route exact path="/:watchs">
        <Tabs></Tabs>
          <Watch></Watch>
        </Route>
        <Route exact path="/:glasses">
        <Tabs></Tabs>
          <Glasses></Glasses>
        </Route> */}
        <Route exact path="/:product/:id">
          <Product></Product>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
