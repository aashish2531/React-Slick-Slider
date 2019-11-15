import React, { Component } from "react";
import Slider from "react-slick";
import axios from 'axios'
import './style.css'; 
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
          alert("hello")
             this.setState({posts: response.data.data})
        })
        .catch(error => {
          alert("Error")
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
          <h1>Main Banner1</h1>
        <Slider {...settings} 
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        className="slider-for">
        {
            posts.length ?
            posts.map(post =>  <div>
            <img src={post.full_image} alt="image1" className="img1 img-responsive"></img>
          </div>) :
            null
            }
            {
            errorMsg ? <div>{errorMsg}</div> : null
            }
        </Slider>
        <Slider {...settings1} 
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          focusOnSelect = {true}
        >
          {
            posts.length ?
            posts.map(post =>  <div>
            <img src={post.full_image} alt="image1" className="img img-responsive"></img>
          </div>) :
            null
            }
            {
            errorMsg ? <div>{errorMsg}</div> : null
            }
        </Slider>               
      </div>
    );
  }
}