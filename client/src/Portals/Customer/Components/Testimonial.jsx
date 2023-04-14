import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Testimonial.css";
// importing demo image

const cuisinedata = [
  {
    img: "https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80",

    name: "Rose",
    feedback:
      "“We had a great visit with y'all Saturday afternoon, four buddies gathered for good conversation and great coffee! Thanks!!”",
  },
  {
    img: "https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80",

    name: "Jacy",
    feedback:
      "“We had a great visit with y'all Saturday afternoon, four buddies gathered for good conversation and great coffee! Thanks!!”",
  },
  {
    img: "https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80",
    name: "Rahul",
    feedback:
      "“We had a great visit with y'all Saturday afternoon, four buddies gathered for good conversation and great coffee! Thanks!!”",
  },
  {
    img: "https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80",
    name: "Vedika",
    feedback:
      "“We had a great visit with y'all Saturday afternoon, four buddies gathered for good conversation and great coffee! Thanks!!”",
  },
];
const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Testimonial = () => {
  return (
    <div className="Testimonal" style={{ maxWidth: "100vw" }}>
      <Slider {...settings}>
        {cuisinedata.map((item) => {
          return (
            <div key={item.name} className="testimonal__card">
              <p>{item.feedback}</p>
              <div className="testimonial__bottom__flex">
                <img src={item.img} alt="sliderpersonimg" />
                <span>{item.name}</span>
              </div>
            </div>
          );
        })}
        {/* last div for better view */}
        <div className="Menu__slidefilter__card"></div>
      </Slider>
    </div>
  );
};
export default Testimonial;
