import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import {
  BrowserRouter as Router, Switch,
  Route
} from 'react-router-dom';
import Home from './Components/Home/Home';
import Error404 from './Components/Error404/Error404';
import Courses from './Components/Courses/Courses';
import About from './Components/About/About';
import Contact from './Components/Contact us/Contact';
// add routing and their path
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/Home'>
            <Home></Home>
          </Route>
          <Route path='/Courses'>
            <Courses></Courses>
          </Route>
          <Route path='/About'>
            <About></About>
          </Route>
          <Route path='/Contact-us'>
            <Contact></Contact>
          </Route>
          <Route path='*'>
            <Error404></Error404>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
