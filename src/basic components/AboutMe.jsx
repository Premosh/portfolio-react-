import React from "react";
import { Container, Row, Col } from "reactstrap";

function About() {
  return (
    <div id="About">
      <Container>
        <Row>
          <Col xs="3">
            <img
              src="https://i.pinimg.com/236x/03/11/ab/0311ab98b0ccea153cee66a5f514226d.jpg"
              alt="Profile"
              className="rounded-circle img-fluid"
            />
          </Col>
          <Col xs="8" style={{textAlign: "left"}}>
            <h1>About Me</h1>
            <p>Hi, I'm Premosh Bakey, currently a 4th Semester Bsc.CSIT student at Samriddhi College.</p>
            <p><b>Date of Birth:</b> 24th Jan, 2005</p>
            <p><b>Skills:</b> Flutter(learning), HTML, CSS, Figma(learning), React(learning)</p>
            <p><b>Education:</b><br />SEE -&gt; Minerva English School<br />+2 in Science(Biology) -&gt; SS College<br />Bachelors(running) -&gt; Samriddhi College</p>
            <p><b>Experience:</b> None</p>
            <p><b>Hobbies:</b> Kinda into animes, books, gaming.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
