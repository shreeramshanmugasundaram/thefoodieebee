import React from "react";
import "./Home1.css";
import HeroImg from "../Images/hero.png";
import cake from "../Images/cake.png";
import cofee from "../Images/cofee.png";
import fries from "../Images/fries.png";
import pizza from "../Images/pizza.png";
import taco from "../Images/taco.png";
import rightarrow from "../Images/rightarrow.svg";
import instagram from "../Images/instagram.svg";

import Testimonial from "../Components/Testimonial";
import { useNavigate } from "react-router-dom";

const gallery = [
  "https://images.pexels.com/photos/1055271/pexels-photo-1055271.jpeg",
  "https://images.pexels.com/photos/3892469/pexels-photo-3892469.jpeg",
  "https://images.pexels.com/photos/14853728/pexels-photo-14853728.jpeg",
  "https://images.pexels.com/photos/428403/pexels-photo-428403.jpeg",
  "https://images.pexels.com/photos/3625372/pexels-photo-3625372.jpeg",
  "https://images.pexels.com/photos/11111603/pexels-photo-11111603.jpeg",
];

const CustomerHome = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="CustomerPortal">
        {/* Hero */}
        <div className="CustomerHero">
          <div className="deco__cir"></div>
          <div className="CustomerHero__logo customerWidth">
            Caravan Delight
          </div>
          <div className="CustomerHero__flex">
            <div className="CustomerHero__content customerWidth">
              <h2>
                Don't Know What to
                <span className="text--primary"> order?</span>
              </h2>
              <p>Explore different cuisine with just a click</p>
              <button className="btn1" onClick={() => navigate("/menu")}>
                Go to menu
              </button>
              <button className="btn2">Order now</button>
            </div>
            <div className="CustomerHero__img">
              <img src={HeroImg} alt="hero" />
              <img src={cake} alt="cake" />
              <img src={cofee} alt="cofee" />
              <img src={fries} alt="fries" />
              <img src={pizza} alt="pizza" />
              <img src={taco} alt="tacbo" />
            </div>
          </div>
        </div>
        <div className="customerWidth">
          {/* About */}
          <div className="CustomerAbout">
            <div className="Customer--title" style={{ marginTop: "4rem" }}>
              About
            </div>
            <p className="Customer--text20">
              Caravan Delight’s story <br />
              Organiser, Craig Stephen, opened the first ‘Caravan Delight’
              Restaurant in Los Alamitos, California on September 27, 1977.
              Today, there are 37 areas all through Arizona, California,
              Illinois, Louisiana, Nevada, Oregon, Tennessee, and Washington.
              ‘Caravan Delight’ Restaurants are well known with a substantial
              gathering of people including families, kids, seniors, and
              business experts. Our benevolent condition is perfect for praising
              unique events, facilitating a business lunch, or assembling for a
              flavourful dinner with loved ones.
              <br />
              <br />
              Open day by day for lunch and dinner,’ Company Name’ offers a
              choice of naturally arranged things utilising just the best
              fixings accessible. Top picks incorporate Certified Angus Beef®,
              crisp fish, rotisserie chicken, infant back pork ribs. New
              prepared pot pie, strength plates of mixed greens, wood-let go
              pizzas, pasta, sandwiches, burgers, and more.’Company Name’s
              heated merchandise and treats including our Six-Layer Chocolate
              Motherlode Cake, Scratch Carrot Cake, and delectably rich cream
              cheddar pies are prevalent top choices with our visitors. It
              happens a large number of times every week – a client gets a
              beverage from an ‘Organization Name’ – yet every collaboration is
              remarkable.
              <br />
              <br />
              In those days, the organization was a solitary store in Seattle’s
              memorable Pike Place Market. From only a tight customer-facing
              facade, ‘Organization Name’ offered a portion of the world’s best
              crisp-cooked entire bean espressos. The name, motivated by Moby
              Dick, evoked the sentiment of the high oceans and the marine
              convention of the early espresso brokers. <br />
              In 1981, Howard Schultz (‘Company Name’ director, president, and
              CEO) first strolled into an ‘Organization Name’ store. From his
              first measure of Sumatra, Howard was drawn into ‘Organization
              Name’ and joined a year later. After a year, in 1983, Howard made
              a trip to Italy and ended up dazzled by Italian coffeehouses and
              the sentiment of the espresso encounter. He had a dream to take
              the Italian café custom back to the United States.
            </p>
          </div>

          {/* Gallery */}

          <div className="CustomerGallery">
            <div className="Customer--title" style={{ marginBottom: "3rem" }}>
              Gallery
            </div>
            <div className="CustomerGallery__content">
              {gallery.map((img) => {
                return (
                  <img
                    className="CustomerGallery--radius"
                    key={img}
                    src={img}
                    alt="gallery"
                  />
                );
              })}
            </div>
            <div className="viewgallery__style__flex">
              <a href="/" className="viewgallery__style">
                view gallery
                <img src={rightarrow} alt="rightarrow" />
              </a>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="CustomerTestimonials customerWidth">
          <div className="Customer--title" style={{ margin: "2rem 0" }}>
            <center>What do our customers say about us?</center>
          </div>
          <Testimonial />
        </div>
      </div>
      {/* Footer */}
      <footer className="CustomerFooter">
        <div className="customerWidth">
          Send queries on : caravan.delight@gmail.com
        </div>
        <div className="customerWidth">
          Find Us on <img src={instagram} alt="instagramhome" />
        </div>
        <div
          style={{
            textAlign: "right",
            marginTop: "0.2rem",
            fontSize: "10px",
            color: "#333",
          }}
        >
          Copyright KOVONIC Pvt. Ltd.,All rights Reserved
        </div>
      </footer>
    </>
  );
};

export default CustomerHome;
