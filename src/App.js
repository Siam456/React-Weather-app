import './App.css';
import Weather from './component/Weather';
import { Link ,Switch , Route , BrowserRouter as Router} from 'react-router-dom';
import About from './component/About'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact to='/'> <Weather /> </Route>
          
        </Switch>
      </Router>
      <About></About>
      
    </div>
  );
}

export default App;
