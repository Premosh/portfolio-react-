import React from "react";
import { Container, Row, Col } from "reactstrap";

function ContactInfo() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };
  return (
    <div id="ContactInfo">
      <Container>
        <Row>
          <Col xs="4" style={{ marginRight: "20px", textAlign: "left" }}>
            <h1>Contact Information</h1>
            <p>
              <b>Email:</b> bakeypremosh@gmail.com
            </p>
            <p>
              <b>Mobile:</b> +977 9840076771
            </p>
            <p>
              <b>Facebook:</b> Premosh Bakey
            </p>
            <p>
              <b>Instagram:</b> premosh_bakey
            </p>
          </Col>
          <Col xs="7" style={{ textAlign: "left" }}>
            <br />
            <br />
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button
                onClick={() => {
                  alert("Submitted");
                }}
                className="btn btn-primary"
              >
                Submit
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactInfo;
