import React, { Component } from "react";
import { Link } from "react-router-dom";
class Header extends Component {
  render() {
    return (
      <header
        className="masthead"
        // style={{ backgroundImage: `url(${this.props.image})` }}
        

      >
        <div className="container h-100">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-10 align-self-end">
              <h1 className="text-uppercase text-white font-weight-bold">
                {this.props.title}
              </h1>
              
            </div>

            <div className="col-lg-8 align-self-baseline">
              <p className="text-white-75 font-weight-light mb-5">
                {this.props.subtitle}
              </p>

              {this.props.showButton && 
                <Link className="btn btn-primary btn-xl js-scroll-trigger" to="/about">About</Link>
              }
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
