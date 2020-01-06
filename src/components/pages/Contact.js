import React, { Component } from "react";
import Filed from "../common/Filed";
import {withFormik} from 'formik';
import * as Yup from 'yup';
import Footer from '../common/Footer';
const fileds = {
  sections: [
    [
      {
        name: "name",
        elementName: "input",
        type: "text",
        placeholder: "type your name"
      },
      {
        name: "email",
        elementName: "input",
        type: "text",
        placeholder: "type your e-mail"
      },
      {
        name: "phone",
        elementName: "input",
        type: "text",
        placeholder: "type your phone number"
      }
    ],
    [
      {
        name: "message",
        elementName: "textarea",
        type: "text",
        placeholder: "type your message"
      }
    ]
  ]
};
class Contact extends Component {

  render() {
    return (
      <div>
          <section className="page-section" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Contact Us</h2>
              <h3 className="section-subheading text-muted">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <form onSubmit={this.props.handleSubmit}  id="contactForm" name="sentMessage" >
                <div className="row">
                  {fileds.sections.map((section, sectionIndex) => {
                    return (
                      <div className="col-md-6" key={sectionIndex}>
                        {section.map((filed, i) => {
                          return (
                            <Filed
                              {...filed}
                              key={i}
                                value = {this.props.values[filed.name]}
                                name = {filed.name}
                                onChange = {this.props.handleChange}
                                onBlur = {this.props.handleBlur}
                                touched = {(this.props.touched[filed.name])}
                                errors = {this.props.errors[filed.name]}
                            />
                          );
                        })}
                      </div>
                    );
                  })}
                  <div className="clearfix"></div>
                  <div className="col-lg-12 text-center">
                    <div id="success"></div>
                    <button
                      id="sendMessageButton"
                      className="btn btn-primary btn-xl text-uppercase"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      </div>
    );
  }
}
export default withFormik({
    mapPropsToValues:()=>({
        name:'',
        email:'',
        phone:'',
        message:'',

    }),
    validationSchema: Yup.object().shape({
        name: Yup.string().min(3, 'Come on bro , your name longer than that.').required('you must give us your name'),
        email: Yup.string().email('You need to give us a valid e-mail').required('we need your e-mail'),
        phone: Yup.string()
        .min(10, 'Please provide your 10 digits phone number ')
        .max(15, 'Your phone number is too long')
        .required('We need a valid phone number to reach you at.'),
        message: Yup.string().min(100, 'You need yo provide us more detailed information')
            .required('Message is required ')
    }), 
    handleSubmit:(values, {setSubmitting}) =>{
        console.log('Values', values)
        alert(`you've submitted the form`,JSON.stringify(values))
    }
})(Contact);
