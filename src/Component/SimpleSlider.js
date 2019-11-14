import React, { Component } from "react";
import Slider from "react-slick";
import Download from '../Assets/download.jpeg'; 
import Download1 from '../Assets/download (1).jpeg'; 
import Download2 from '../Assets/download (4).jpeg'; 
import Download3 from '../Assets/download (3).jpeg'; 

export default class SimpleSlider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider1.slickNext();
  }
  previous() {
    this.slider1.slickPrev();
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {

    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      
      centerPadding: "170px",
      slidesToShow: 3,
      arrows: false,
      speed: 500,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            className: "center",
            centerMode: true,
             centerPadding: "180px",
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            className: "center",
            centerMode: true,
            centerPadding: "150px",
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            className: "center",
            centerMode: true,
            centerPadding: "150px",
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    const settings1 = {
      infinite: true,
      speed: 500,
      slidesToShow: 10,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings1: {
            slidesToShow:7,
            slidesToScroll: 1,
            // infinite: true,
            // dots: true
          }
        },
        {
          breakpoint: 600,
          settings1: {
            slidesToShow: 5,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 450,
          settings1: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <h2> Slider</h2>
        <Slider {...settings}  
        asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
          focusOnSelect={true}
      >
          <div>
            <img src={Download} className="img img-responsive"></img>
          </div>
          <div>
            <img src={Download1} className="img img-responsive"></img>
          </div>
          <div> 
            <img src={Download2} className="img img-responsive" ></img>
          </div>
          <div> 
            <img src={Download3} className="img img-responsive"></img>
          </div>
          <div>
            <img src={Download} className="img img-responsive"></img>
          </div>
          <div>
            <img src={Download1} className="img img-responsive"></img>
          </div>
          <div>
            <img src={Download2} className="img img-responsive"></img>
          </div>
          <div>
            <img src={Download3} className="img img-responsive"></img>
          </div>
        </Slider>
        <Slider {...settings1} className= "margin-tp"
        asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}    
        >
          <div>
            <img src={Download}  className= "smallSlid img-responsive"></img>
          </div>
          <div>
            <img src={Download1} className= "smallSlid img-responsive"></img>
          </div>
          <div> 
            <img src={Download2} className= "smallSlid img-responsive"></img>
          </div>
          <div> 
            <img src={Download3} className= "smallSlid img-responsive"></img>
          </div>
          <div>
            <img src={Download} className= "smallSlid img-responsive"></img>
          </div>
          <div>
            <img src={Download1} className= "smallSlid img-responsive"></img>
          </div>
          <div>
            <img src={Download2}  className= "smallSlid img-responsive"></img>
          </div>
          <div>
            <img src={Download3} className= "smallSlid img-responsive"></img>
          </div>
          <div> 
            <img src={Download} className= "smallSlid img-responsive"></img>
          </div>
          <div> 
            <img src={Download1} className= "smallSlid img-responsive"></img>
          </div>
          <div>
            <img src={Download2} className= "smallSlid img-responsive"></img>
          </div>
          <div>
            <img src={Download3} className= "smallSlid img-responsive"></img>
          </div>
        </Slider>

        <div style={{ textAlign: "center" }}>
          <button className="button buttn" onClick={this.previous}>
            Previous
          </button>
          <button className="button buttn" onClick={this.next}>
            Next
          </button>
        </div>
      </div>
    );
  }
}