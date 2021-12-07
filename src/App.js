import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import DaySub from './Components/BookingPage/DaySub/DaySub';
import MonthlySub from './Components/BookingPage/MonthlySub/MonthlySub';
import WeeklySub from './Components/BookingPage/WeeklySub/WeeklySub';
import Confirmation from './Components/Confirmation/Confirmation';
import Home from './Components/Homepage/Home/Home';
import Schedule from './Components/Schedule/Schedule';
import Commercial from './Components/ServicePages/Commercial/Commercial';
import Household from './Components/ServicePages/Household/Household';
import Office from './Components/ServicePages/Office/Office';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/office'>
          <Office />
        </Route>
        <Route path='/household'>
          <Household />
        </Route>
        <Route path='/commercial'>
          <Commercial />
        </Route>
        <Route path='/schedule'>
          <Schedule />
        </Route>
        <Route path='/daySub'>
          <DaySub />
        </Route>
        <Route path='/weeklySub'>
          <WeeklySub />
        </Route>
        <Route path='/monthlySub'>
          <MonthlySub />
        </Route>
        <Route path='/Confirmation'>
          <Confirmation />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
