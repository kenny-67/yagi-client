import React from "react";

const API_URL_C = "http://localhost:7000/admin/contact";

class ContactPage extends React.Component {
  handleContact = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const message = e.target.elements.message.value;

    const details = {
      name,
      email,
      message,
    };

    fetch(API_URL_C, {
      method: "POST",
      body: JSON.stringify(details),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.Message == "sent") {
          e.target.elements.name.value = "";
          e.target.elements.email.textContent = "";
          e.target.elements.message.value = "";
        }
      });
  };
  render() {
    return (
      <div className="bg-light">
        <div className="container">
          <h1 className="l-heading">
            <span className="text-primary">Contact</span> us
          </h1>
          <p>Please fIll Out the form below to contact us</p>
          <form onSubmit={this.handleContact} className="container">
            <div className="form-group">
              <label for="name">Name :</label>
              <input type="text" name="name" className="form-control" />
            </div>
            <div className="form-group">
              <label for="email">Email :</label>
              <input type="email" name="email" className="form-control" />
            </div>
            <div className="form-group">
              <label for="message">Message :</label>
              <textarea
                type="text"
                name="message"
                className="form-control"
              ></textarea>
            </div>
            <button className="btn btn-primary" type="submit">
              submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactPage;
