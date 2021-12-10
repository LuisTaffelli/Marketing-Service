import './App.css';
import Home from './Pages/Home.jsx'
import Properties from './Pages/Properties.jsx'
import PropertyPage from './Pages/PropertyPage.jsx'
import Footer from './Components/Footer.jsx'
import {Switch, Route} from 'react-router-dom'
import Navbar from './Components/NavBar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/properties'>
            <Properties />
        </Route>
        <Route path='/propertie/:name/'>
            <PropertyPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
