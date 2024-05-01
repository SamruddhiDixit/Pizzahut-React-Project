import React from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import{Col} from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
function Booking() {
  return (
    <div>
      <Container className='mt-5'>
        <h1 className='text-start' style={{fontFamily:"brush script mt"}}> Book A Table</h1>
        <Row>
          <Col>
            <Form className='mt-4'>
              <Form.Group controlId="exampleForm.ControlInput1" className='mb-4'>
                <Form.Control type='text' placeholder="Your Name"/>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput2" className='mb-4'>
                <Form.Control type='text' placeholder="Phone Number"/>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput3" className='mb-4'>
                <Form.Control type='email' placeholder="Your Email "/>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1" className='mb-4'>
                <Form.Control as="select" >
                  <option>How Many Persons?</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput4" className='mb-4'>
                <Form.Control type="date" />
              </Form.Group>
              <Button variant="warning" className='text-white fs-5 px-5 rounded-pill mt-4  float-start'>Book Now</Button>
          </Form>
          </Col>
          <Col>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61102.158749312875!2d74.56458174863282!3d16.8320641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc123b2c59ceac1%3A0xafd7eaed04796f49!2sDomino&#39;s%20Pizza!5e0!3m2!1sen!2sin!4v1711376774960!5m2!1sen!2sin"
           width="500" height="320" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Booking