import Header from "./components/header/Header";
// react router dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// pages
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import { Register } from "./pages/login/Regsiter";
import Login from "./pages/login/Login";
import Account from "./pages/account/Account";
import { useSelector } from "react-redux";
// state management

function App() {
  const loggedIn = useSelector((state) => state.auth.loggedIn);

  return (
    <>
      {loggedIn && (
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/account" component={Account} />
          </Switch>
          <Footer />
        </Router>
      )}
      {!loggedIn && <Login />}
    </>
  );
}

export default App;
