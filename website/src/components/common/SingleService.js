import React, {Component} from 'react';

class SingleService extends Component{
    render(){
        return(
            <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className= {`fas ${this.props.icon} `}></i>
                  <h3 className="h4 mb-2">{this.props.title}</h3>
                  <p className="text-muted mb-0">
                   {this.props.description}
                  </p>
                </div>
              </div>
        )
    }
}
export default SingleService;