import React from "react";
import PageWrapper from "./components/PageWrapper";
import { BrowserRouter as Router, Route, /*Link*/ } from "react-router-dom";

// Pages
import Home from "./components/pages/Home";
import About from './components/pages/About';
import Services from './components/pages/Services';
import Portfolio from './components/common/Portfolio';
import Contact from "./components/pages/Contact";
function App() {
  return (
    <Router>
      <PageWrapper>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/about" component={About} />
        <Route exact={true} path="/services" component={Services} />
        <Route exact={true} path="/portfolio" component={Portfolio} />
        <Route exact={true} path="/contact" component={Contact} />

      </PageWrapper>
    </Router>
  );
}

export default App;
