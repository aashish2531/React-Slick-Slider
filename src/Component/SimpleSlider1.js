import React, { Component } from "react";
import Slider from "react-slick";
import Download from '../Assets/download.jpeg'; 
import Download1 from '../Assets/download (1).jpeg'; 
import Download2 from '../Assets/download (4).jpeg'; 
import Download3 from '../Assets/download (3).jpeg'; 
import Download4 from '../Assets/94dd573e4b4de604ea7f33548da99fd6.jpg'; 
import Download5 from '../Assets/blackholewithclouds_c-1-941x519.jpg'; 
import Download6 from '../Assets/download (7).jpeg'; 
import Download7 from '../Assets/germini_flower_pink_petals_608384.jpg'; 
import Download8 from '../Assets/istockphoto-535455441-612x612.jpg'; 
import Download9 from '../Assets/mountain.jpg'; 
import axios from 'axios'

export default class SimpleSlider1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      posts: [],
      errorMsg: ''
    };
  }

  componentDidMount() {
    axios.get("sistic/docroot/adv/rotational-banner?client=1")
        .then(response => {
         
          console.log(response.data.data[0].title)
             this.setState({posts: response.data.data})
        })
        .catch(error => {
          console.log("Error")
        })

    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    const {posts , errorMsg} = this.state;
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        focusOnSelect: true,
        centerPadding: "360px",
        slidesToShow: 1,
        speed: 500,
      };
      const settings1 = {
        infinite: false,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 1   
      };
    return (
      <div>
        <h2>Slider 11</h2>
        <Slider {...settings} 
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        className="slider-for">
        {/* {
            posts.length ?
            posts.map(post =>  <div>
            <img src={post.full_image} alt="image1" className="img1 img-responsive"></img>
          </div>) :
            null
            }
            {
            errorMsg ? <div>{errorMsg}</div> : null
            } */}


            <div>
            <img src={Download} alt="image1" className="img1 img-responsive"></img>
          </div>
          <div>
            <img src={Download1} alt="image1" className="img1 img-responsive"></img>
          </div>
          <div> 
            <img src={Download2} alt="image1" className="img1 img-responsive" ></img>
          </div>
          <div> 
            <img src={Download3} alt="image1" className="img1 img-responsive"></img>
          </div>
          <div>
            <img src={Download4} alt="image1" className="img1 img-responsive"></img>
          </div>
          <div>
            <img src={Download5} alt="image1" className="img1 img-responsive"></img>
          </div>
          <div> 
            <img src={Download6} alt="image1" className="img1 img-responsive" ></img>
          </div>
          <div> 
            <img src={Download7} alt="image1" className="img1 img-responsive"></img>
          </div>
          <div>
            <img src={Download8} alt="image1" className="img1 img-responsive"></img>
          </div>
          <div>
            <img src={Download9} alt="image1" className="img1 img-responsive"></img>
          </div> 
        </Slider>
       
        <h4>Second Slider</h4>
        <Slider {...settings1} 
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          focusOnSelect = {true}
        >
        <div>
            <img src={Download} alt="image1" className="img img-responsive"></img>
          </div>
          <div>
            <img src={Download1} alt="image1" className="img img-responsive"></img>
          </div>
          <div> 
            <img src={Download2} alt="image1" className="img img-responsive" ></img>
          </div>
          <div> 
            <img src={Download3} alt="image1" className="img img-responsive"></img>
          </div>
          <div>
            <img src={Download4} alt="image1" className="img img-responsive"></img>
          </div>
          <div>
            <img src={Download5} alt="image1" className="img img-responsive"></img>
          </div>
          <div> 
            <img src={Download6} alt="image1" className="img img-responsive" ></img>
          </div>
          <div> 
            <img src={Download7} alt="image1" className="img img-responsive"></img>
          </div>
          <div>
            <img src={Download8} alt="image1" className="img img-responsive"></img>
          </div>
          <div>
            <img src={Download9} alt="image1" className="img img-responsive"></img>
          </div>
          {/* {
            posts.length ?
            posts.map(post =>  <div>
            <img src={post.full_image} alt="image1" className="img img-responsive"></img>
          </div>) :
            null
            }
            {
            errorMsg ? <div>{errorMsg}</div> : null
            } */}
        </Slider>               
      </div>
    );
  }
}