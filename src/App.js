import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import Tables from './pages/Tables';
import Fixtures from './pages/Fixtures';
import Results from './pages/Results';
import FixtureDetail from './pages/FixtureDetail';
import MatchDetail from './pages/MatchDetail';
import TeamDetail from './pages/TeamDetail';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/tables" exact component={Tables}/>
        <Route path="/tables/:team_id" component={TeamDetail}/>
        <Route path="/fixtures" exact component={Fixtures} />
        <Route path="/fixtures/:match_id" component={FixtureDetail}/>
        <Route path="/results" exact component={Results} />
        <Route path="/results/:match_id" component={MatchDetail} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
