import React, { Component } from "react";
import Header from '../common/Header';

// Re-usable components
import Services from './Services';
import About from './About';
import Portfolio from '../common/Portfolio';
import Contact from './Contact';

class Home extends Component {
  render() {
    return (
      <div>
        <Header
        title="Welcome To Our World"
        subtitle= "We Hope to serve you as you hope ,We are only for you don't  hesitate to ask" 
        link="/about"
        showButton ={true}
       
        />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </div>
    );
  }
}

export default Home;
