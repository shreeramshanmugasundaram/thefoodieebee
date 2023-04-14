import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// importing demo image

import { getCategories } from "../../../action/customer/getCategories";
import { getCategory } from "../../../action/customer/getCategory";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
      },
    },
  ],
};

const SlideFilter = ({ setDish }) => {
  const [cuisineData, setCusinceData] = useState([]);
  const fetchData = async () => {
    const result = await getCategories();
    console.log(result);
    setCusinceData(result || []);
  };
  const handleClick = async (_id) => {
    const result = await getCategory({ _id: _id });
    setDish(result || []);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="Menu__slidefilter">
      <Slider {...settings}>
        {cuisineData.map((item) => {
          return (
            <div
              key={item.cuisine}
              className="Menu__slidefilter__card"
              onClick={() => handleClick(item._id)}
            >
              <img
                src={`http://localhost:5000/image/category/${item?._id}.webp`}
                alt="slidefilterimg"
              />
              <h3>{item.categoryname}</h3>
            </div>
          );
        })}
        {/* last div for better view */}
        <div className="Menu__slidefilter__card"></div>
      </Slider>
    </div>
  );
};
export default SlideFilter;
