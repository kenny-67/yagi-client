import React from "react";

import Member from "../components/member";

// const API_URL_M =
//   window.location.hostname === "localhost"
//     ? "http://localhost:7000/register"
//     : "https://server-yagi.herokuapp.com/register";

const API_URL_M = "https://server-yagi.herokuapp.com/register";

class RegisteredMembers extends React.Component {
  state = {
    member: [],
  };

  componentDidMount() {
    try {
      fetch(API_URL_M, {
        headers: {
          "content-type": "application/json",
          authorization: localStorage.getItem("token"),
        },
      })
        .then((res) => res.json())
        .then((data) => {
          this.setState((prevState) => ({
            member: prevState.member.concat(data),
          }));
        });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        <table className="table table-striped table-hover table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>firstName</th>
              <th>lastName</th>
              <th>email</th>
              <th>phoneNo</th>
              <th>bio</th>
            </tr>
          </thead>
          <tbody>
            {this.state.member.map((element) => {
              return (
                <tr>
                  <td>{element._id}</td>
                  <td>{element.firstName}</td>
                  <td>{element.lastName}</td>
                  <td>{element.email}</td>
                  <td>{element.phoneNo}</td>
                  <td>{element.bio}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

console.log(RegisteredMembers.state);

export default RegisteredMembers;
