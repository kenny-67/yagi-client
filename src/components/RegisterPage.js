import React from "react";
import { Redirect } from "react-router-dom";

// console.log(window.location.hostname);

// const API_URL_R =
//   window.location.hostname === "localhost"
//     ? "http://localhost:7000/register"
//     : "https://server-yagi.herokuapp.com/register";

const API_URL_R = "https://server-yagi.herokuapp.com/register";

class RegisterPage extends React.Component {
  state = {
    registered: undefined,
  };
  submit = (e) => {
    e.preventDefault();

    const firstName = e.target.elements.firstName.value;
    const lastName = e.target.elements.lastName.value;
    const email = e.target.elements.email.value;
    const phoneNo = e.target.elements.phoneNo.value;
    const bio = e.target.elements.bio.value;

    const details = {
      firstName,
      lastName,
      email,
      bio,
      phoneNo,
    };

    fetch(API_URL_R, {
      method: "Post",
      body: JSON.stringify(details),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.Message == "Member Created") {
          this.setState(() => ({
            registered: true,
          }));
        }
      });
  };
  render() {
    return (
      <div className="body">
        <p className="text-center">
          To become a YAGI campus Coordinator, fill out the form
        </p>

        <div>
          <form className="container form" onSubmit={this.submit}>
            <div className="form-group">
              <label>First Name</label>
              <input type="text" name="firstName" className="form-control" />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" name="lastName" className="form-control" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" className="form-control" />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="number" name="phoneNo" className="form-control" />
            </div>
            <div className="form-group">
              <label>Bio</label>
              <textarea name="bio" className="form-control" />
            </div>
            <button className="btn btn-primary">Submit</button>
          </form>
          {this.state.registered && <Redirect to="/" />}
        </div>
      </div>
    );
  }
}

export default RegisterPage;
