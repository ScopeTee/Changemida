import React from "react";

import { HeaderSection, HeaderSectionText, HeaderSectionFlex } from "../styles/header.styled";
import { Container } from "../styles/Container.styled";

import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form';

import Photo from "../Images/Vector 7.png"
import Bag from "../Images/bag.png"

function Header() {
  return (
    <HeaderSection>
      <Container>
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
        <HeaderSectionFlex class="mt-5">
            <HeaderSectionText className="px-3">
                    <h1 className="h1 my-3">App-less wallets <br /> for your customers</h1>
                    <p className="sp-1">Phone number as a wallet</p>  
                    <Form className="mt-5 pt-5">
                        <Form.Group className="mb-3 d-flex form-flex" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter your email address" className="py-2"/>
                            <Button className=" py-2 btn-0">Create yout first wallet</Button>{' '}
                        </Form.Group>   
                        <p class="sp-1">Create a customer friendly wallet in minutes</p>                 
                    </Form>
            </HeaderSectionText>
            <Container className="ps-5">
              <Image
                alt=""
                src={Bag}
                width="495"
                height="530"
                className="d-inline-block align-top"
              />{''}   
            </Container>         
        </HeaderSectionFlex>
    </Container>
    </HeaderSection> 
  );
}

export default Header;