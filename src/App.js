import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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
        <Link to="/contact">
          <LinkItem name={"Contact Us"} />
        </Link>
        <Suspense fallback={<LinkItem name={"Cargando..."} />}>
          <Routes>
            <Route path={"/about"} element={<About />}>
              <Route path={":id"} element={<About />} />
            </Route>
            <Route path={"/home"} element={<Home />} />
            <Route path={"/contact"} element={<ContactUs />}>
              <Route path={":name"} element={<ContactUs />} />
            </Route>
            <Route index element={<h1>Error 404 page not found</h1>} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
