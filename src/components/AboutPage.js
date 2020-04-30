import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";

import group from "../image/learn_more.jpg";

const AboutPage = (props) => {
  return (
    <div className="row">
      <div className="col-md-8">
        <section>
          <div className="nice">
            <h2>ABOUT YAGI</h2>
            <div>
              <p>
                The Young African Growth Initiative (YAGI) is an initiative
                established to contribute, strengthen, empower and promote the
                growth of the Young African. Nearly one in three Africans are
                between the ages of 10 and 24, and approximately 60% of Africa's
                total population is below the age of 35. YAGI was established in
                2020 to empower the young Africans to next generation of African
                Giants.
              </p>
            </div>
          </div>
        </section>
        <div className="bg-img">
          <section>
            <div className="nice">
              <h2>Goal</h2>
              <p>
                To engage every young African in Leadership, Business and
                Entrepreneurial Excellence.
              </p>
            </div>
          </section>

          <section>
            <div className="nice">
              <h2>Mission</h2>
              <p>To empower the next generation of African Giants.</p>
            </div>
          </section>
          <section>
            <div className="nice">
              <h2>Vision</h2>
              <p>
                Africa with more excelling young people in Leadership, Business
                and Entrepreneurship. Africa with Equality as a priority.
              </p>
            </div>
          </section>
        </div>
      </div>
      <div className="col-md-4 ">
        <h4 className="text-center">Note From Our Founders</h4>
        <img className="img-circle" src={group} alt="group photo" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi iusto
          necessitatibus, sed sunt placeat minima quia molestiae magni! Et
          aliquam quia iste, reprehenderit soluta nisi ab vel laborum natus
          ullam!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi iusto
          necessitatibus, sed sunt placeat minima quia molestiae magni! Et
          aliquam quia iste, reprehenderit soluta nisi ab vel laborum natus
          ullam!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi iusto
          necessitatibus, sed sunt placeat minima quia molestiae magni! Et
          aliquam quia iste, reprehenderit soluta nisi ab vel laborum natus
          ullam!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
