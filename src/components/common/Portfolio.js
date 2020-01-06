import React, { Component } from "react";
import PortfolioItem from './PortfolioItem';
import img1 from '../assests/portfolio/thumbnails/1.jpg'
import img2 from '../assests/portfolio/thumbnails/2.jpg'
import img3 from '../assests/portfolio/thumbnails/3.jpg'
import img4 from '../assests/portfolio/thumbnails/4.jpg'
import img5 from '../assests/portfolio/thumbnails/5.jpg'
import img6 from '../assests/portfolio/thumbnails/6.jpg'



const portfolio = [
    {title:'Threads', subtitle:'Illustration', image:img1},
    {title:'Finish', subtitle:'Identity', image:img2},
    {title:'Explore', subtitle:'Graphic Design', image:img3},
    {title:'Cooking', subtitle:'experience', image:img4},
    {title:'Lines', subtitle:'Branding', image:img5},
    {title:'SouthWest', subtitle:'website Design', image:img6}
]

class Portfolio extends Component {
  render() {
    return (
      <div>
        <section id="portfolio">
          <div className="container-fluid p-0">
            <div className="row no-gutters">
             
             {portfolio.map((item,index)=>{
                 return <PortfolioItem {...item} key={index}/>
             })}
             
            </div>
          </div>
        </section>
        
      </div>
    );
  }
}
export default Portfolio;
