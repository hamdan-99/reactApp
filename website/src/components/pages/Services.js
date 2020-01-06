import React, { Component } from "react";
// import Header from "../common/Header";
import SingleService from "../common/SingleService";

const services = [
  {
    title: "Sturdy Themes",
    description: "Our themes are updated regularly to keep them bug free!",
    icon: "fa-4x fa-gem text-primary mb-4"
  },
  {
    title: "Up to Date",
    description: "All dependencies are kept current to keep things fresh.",
    icon: "fa-4x fa-laptop-code text-primary mb-4"
  },
  {
    title: "Ready to Publish",
    description: "You can use this design as is, or you can make changes!",
    icon: "fa-4x fa-globe text-primary mb-4"
  },
  {
    title: "Made with Love",
    description: `Is it really open source if it's not made with love?`,
    icon: "fa-4x fa-heart text-primary mb-4"
  }
];

class Services extends Component {
  render() {
    return (
      <div>
        <section className="page-section" id="services">
          <div className="container">
            <h2 className="text-center mt-0">At Your Service</h2>
            <hr className="divider my-4"></hr>
            <div className="row">
              {services.map((service, index) => {
                return <SingleService {...service} key={index} />;
              })}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Services;
