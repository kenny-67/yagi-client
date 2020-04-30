import React from "react";
import { Redirect } from "react-router-dom";

// const API_URL_A =
//   window.location.hostname === "localhost"
//     ? "http://localhost:7000/admin/login"
//     : "https://server-yagi.herokuapp.com/admin/login";

const API_URL_A = "https://server-yagi.herokuapp.com/admin/login";

class AdminLogin extends React.Component {
  state = {
    logedIn: undefined,
  };

  login = (e) => {
    e.preventDefault();

    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    const details = {
      email,
      password,
    };

    fetch(API_URL_A, {
      method: "Post",
      body: JSON.stringify(details),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.Message == "auth Successful") {
          const token = data.token;

          localStorage.setItem("token", token);
          this.setState(() => ({
            logedIn: true,
          }));
        }
      });
  };
  render() {
    return (
      <div className="body">
        <div>
          <form className="container form" onSubmit={this.login}>
            <div className="form-group">
              <label>Email:</label>
              <input type="email" name="email" className="form-control" />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input type="password" name="password" className="form-control" />
            </div>

            <button className="btn btn-primary">Login</button>
          </form>
          {this.state.logedIn && <Redirect to="/" />}
        </div>
      </div>
    );
  }
}

export default AdminLogin;
