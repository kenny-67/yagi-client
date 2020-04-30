import React from "react";
import { NavLink } from "react-router-dom";

const Detail = () => {
  return (
    <div>
      <div className="nice">
        <h2>ABOUT YAGI</h2>
        <p>
          The Young African Growth Initiative (YAGI) is an initiative
          established to contribute, strengthen, empower and promote the growth
          of the Young African.
        </p>
        <NavLink className="btn  btn-outline-primary my-2 my-sm-0" to="/about">
          Learn More
        </NavLink>
      </div>

      <div className="nice">
        <h2>Goal</h2>
        <p>
          To engage every young African in Leadership, Business and
          Entrepreneurial Excellence.
        </p>
      </div>
      <div className="nice">
        <h2>Mission</h2>
        <p>To empower the next generation of African Giants.</p>
      </div>
      <div className="nice">
        <h2>Vision</h2>
        <p>
          Africa with more excelling young people in Leadership, Business and
          Entrepreneurship. Africa with Equality as a priority.
        </p>
      </div>
    </div>
  );
};

export default Detail;
