import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Home } from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Store, { FreeClass } from "./pages/FreeClass/FreeClass";
import Header from "./pages/Shared/Header/Header";
import LogIn from "./pages/Login/Login";
import AllContext from "./Context/AllContext";
import ServiceDetail from "./pages/Shared/ServiceComponent/ServiceDetail/ServiceDetail";
import Footer from "./pages/Shared/Footer/Footer";
import Register from "./pages/Register/Register";
import PrivateRoute from "./pages/Shared/PrivateRoute/PrivateRoute";
import Trainer from "./pages/Trainer/Trainer";

function App() {
  return (
    <AllContext>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <PrivateRoute path="/services/:id">
            <ServiceDetail></ServiceDetail>
          </PrivateRoute>
          <PrivateRoute path="/free-class">
            <FreeClass></FreeClass>
          </PrivateRoute>
          <PrivateRoute path="/trainer">
            <Trainer></Trainer>
          </PrivateRoute>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
          <Route path="/Register">
            <Register></Register>
          </Route>
          <Route path="*">
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AllContext>
  );
}

export default App;
