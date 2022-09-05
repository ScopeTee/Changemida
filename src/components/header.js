import React from "react";
// import Nav from 'react-bootstrap/Nav';
// import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form';
import Photo from "../Images/Vector 7.png"
import Bag from "../Images/bag.png"

function Header() {
  return (
    <header >       
         {/* <Container> */}
        <div className="contain">
        <Navbar>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <Image
              alt=""
              src={Photo}
              width="45"
              height="58"
              className="d-inline-block align-top"
            />{''}
            <p className="p-1">ChangeMIDA</p>
          </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="d-flex align-items-center">
            <a href="#login" className="a-1">Create an Account</a>
            <Button variant="light" className="mx-3 px-5 btn-1">Login</Button>{' '}
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
        <div class="hero mt-5 d-flex align-items-center justify-content-between">
            <div class="hero-text text-start px-5">
                <div>
                    <h1 className="h1 my-3">App-less wallets <br /> for your customers</h1>
                    <p class="sp-1">Phone number as a wallet</p>  
                </div>
                <div className="mt-5 pt-5">
                    <Form>
                        <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter your email address" className="py-2"/>
                            <Button className="mx-3 px-5">Create yout first wallet</Button>{' '}
                        </Form.Group>                    
                    </Form>
                    <p class="sp-1">Create a customer friendly wallet in minutes</p>
                </div>                
            </div>
            <div class="hero-img">
            <Image
              alt=""
              src={Bag}
              width="495"
              height="530"
              className="d-inline-block align-top"
            />{''}            
            </div>
        </div>
      </div>
    </header>    
  );
}

export default Header;