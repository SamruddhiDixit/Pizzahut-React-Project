import React from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className='bg-dark text-white p-3 mt-4'>
        <Container>
            <div className='row mt-5'>
                <div className='col'>
                    <h2 className='mb-3' style={{fontFamily:"brush script mt"}}>Contact Us</h2>
                    <h5><Link to='/'className='text-white'><FaLocationDot />Location</Link></h5>
                    <h5><Link to='/' className='text-white'><BsFillTelephoneFill /> Call +011343455</Link></h5>
                    <h5><Link to='/'className='text-white'><MdEmail />feane@gmail.com</Link></h5>
                </div>
                <div className='col'>
                    <h2 className='mb-3' style={{fontFamily:"brush script mt"}}>Feane</h2>
                    <p>Necessary, making tis the first true generator
                        on the Internet.It uses a directory of over 200
                        Latin words,combined with
                    </p>
                    <Link className='text-white fs-3 me-2'><FaFacebookF /></Link>
                    <Link className='text-white fs-2 me-2'><AiFillTwitterCircle /></Link>
                    <Link className=' fs-2 me-2'><TiSocialLinkedinCircular className='bg-white text-dark rounded-circle'/></Link>
                    <Link className='text-white fs-2 me-2'><FaInstagram className='bg-white text-dark rounded-circle'/></Link>
                    <Link className='text-white fs-3 me-2'><FaPinterest /></Link>
                </div>
                <div className='col'>
                <h2 className='mb-3' style={{fontFamily:"brush script mt"}}>Opening Hours</h2>
                <p>Everyday</p>
                <p>10.00 Am to 10.00 PM</p>
                </div>
            </div>
            <p className='mt-4'> &copy; 2024 All Rights Reserved By Seven Mentor,Pune</p>
            <p className='pb-5'> &copy; Distributed By Samruddhi Dixit</p>
        </Container>
    </div>
  )
}

export default Footer