import './App.css';
import Home from './components/home';
import Nav from './components/nav';
import Login from './components/login';
import Logout from './components/logout';
import About from "./components/about";
import Account from './components/account';
import AddAccount from "./components/addaccount";
import UpdateAccount from './components/updateaccount';
import PageNotFound from './components/pagenotfound';
import "bootstrap/dist/css/bootstrap.css";
import{Route, Switch, Redirect} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route  path="/home" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/logout" component={Logout}/>
        <Route path="/accounts/update/:accountNumber" component={UpdateAccount}/>
        <Route path="/account" component={Account}/>
        <Route exact path='/about' component={About} />
        <Route path="/addaccounts" component={AddAccount}/>
        <Redirect exact path="/" to="/home"/>
        <Route  component={PageNotFound}/>
      </Switch>
    </div>
  );
}

export default App;









