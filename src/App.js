import Navbar from './Navbar'
import Main from './Main';
import Tabs from './Tabs';
import Tshirts from './t-shirts';

import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar></Navbar>
      <Tabs></Tabs>
      <Switch>
        <Route exact path="/">
            <Main></Main>
        </Route>
        <Route exact path="/tshirts">
            <Tshirts></Tshirts>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
