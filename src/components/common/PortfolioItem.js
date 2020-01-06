import React, {Component} from 'react';
import { Link } from "react-router-dom";

class PortfolioItem extends Component{
    render(){
        return(
            <div className="col-lg-4 col-sm-6">
            <Link className="portfolio-box" to="img/portfolio/fullsize/1.jpg">
              <img
                className="img-fluid"
                src={this.props.image}
                alt=""
              />
              <div className="portfolio-box-caption">
                <div className="project-category text-white-50">{this.props.title}</div>
                <div className="project-name">{this.props.subtitle}</div>
              </div>
            </Link>
            
          </div>
        )
    }
}
export default PortfolioItem;