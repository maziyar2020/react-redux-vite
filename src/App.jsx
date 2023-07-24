import Header from "./components/header/Header";
// react router dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// pages
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
