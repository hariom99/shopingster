import './App.css';
// import Testing from './testing/testing';
import { Switch, Route } from "react-router-dom"
import NavbarApp from './components/navbar/navbar';
import Home from "./components/home/home"
import Products from './components/products/products';
import RegisterUser from './components/register/registerUser';
import Login from './components/login/login';
import Cart from './components/cart/cart';
import UserOrders from './components/userOrders/userOrders';
import Loading from './components/loading/loading';
import Profile from './components/profile/profile';
function App() {
  return (
    <div className="App">
      <NavbarApp />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/register" component={RegisterUser} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/myorders" component={UserOrders} />
        <Route exact path="/verifying-userdata-processing-payment" component={Loading} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
