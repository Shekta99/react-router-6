import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import LinkItem from "./components/LinkItem";

const Home = React.lazy(() => import("./components/Home"));
const About = React.lazy(() => import("./components/About"));
const ContactUs = React.lazy(() => import("./components/ContactUs"));

function App() {
  return (
    <div className="App">
      <h1>Hola Ada School</h1>
      <Router>
        <Link to="/home">
          <LinkItem name={"Home"} />
        </Link>
        <Link to="/about">
          <LinkItem name={"About us"} />
        </Link>
        <NavLink to="/contact" activeStyle={{ background: "green" }}>
          <LinkItem name={"Contact Us"} />
        </NavLink>
        <Suspense fallback={<LinkItem name={"Cargando..."} />}>
          <Switch>
            <Route path={"/about/:id"}>
              <About />
            </Route>
            <Route path={"/home"}>
              <Home />
            </Route>
            <Route path={"/about"}>
              <About />
            </Route>
            <Route path={"/contact/:name"}>
              <ContactUs />
            </Route>
            <Route path={"/"}>
              <h1>Error 404 page not found</h1>
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
