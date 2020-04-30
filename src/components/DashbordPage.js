import React from "react";

import speaker1 from "../image/speaker1.jpg";
import speaker2 from "../image/speaker2.jpg";

import speaker3 from "../image/speaker3.jpg";

import card1 from "../image/card1.jpg";

import card2 from "../image/card2.jpg";

import card3 from "../image/card3.jpg";

import background from "../image/header-bg2.jpg";

import Detail from "../components/details";

const DashboardPage = () => {
  var bannerStyle = {
    background: "url(" + background + ")",
    backgroundSize: "cover",
  };
  return (
    <div className="banner" style={bannerStyle}>
      <br />
      <section>
        <div
          id="carouselExampleCaptions"
          m-5
          className="carousel slide container-sm"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleCaptions"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={speaker1}
                width="500px"
                className="media d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={speaker2}
                width="500px"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={speaker3}
                width="500px"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>
      <br />
      <Detail />
      <section className="space">
        <div className="cards-group container-sm mt-5">
          <div className="card">
            <img
              width="100px"
              src={card1}
              alt="card"
              className="card-img-top"
            />
          </div>
          <div className="card">
            <img
              width="100px"
              src={card2}
              alt="card"
              className="card-img-top"
            />
          </div>
          <div className="card">
            <img
              width="100px"
              src={card3}
              alt="card"
              className="card-img-top"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardPage;
