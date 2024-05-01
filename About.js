import React from 'react';
import { Row,Col,Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
function About() {
  return (
    <div className='bg-dark text-white mt-4'>
      <Container>
        <Row className='align-items-center'>
          <Col>
            <img src='./images/about-img.png' alt=''className='img-fluid mx-auto d-block'></img>
          </Col>
          <Col>
            <h1 style={{fontFamily:"brush script mt"}}>We are Feane</h1>
            <p className='fs-5'>There are many variantes of
               passages of Lorem Ipsum available, but the majority 
               have suffered alternation in some form, by injected 
               honour, or randomized words which dont look even
               slightly beleivable. If you are going to use a passage
               of Lorem Ipsum,You need to be there isn't 
               anything embarrassing hidden in the middle of text All.
            </p>
            <Button variant="warning" className='text-white fs-5 px-4 rounded-pill mt-4'>Order Now</Button>

          </Col>
        </Row>
      </Container>
      
      
    </div>
  )
}

export default About