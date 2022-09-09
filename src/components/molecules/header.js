import React from 'react';
import Button from 'react-bootstrap/Button';
import { Hero ,HeroText,HeroSubText} from '../atoms/header';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image'
import Bag from "../component-images/bag.png"
// import NavigationBar from '../atoms/navbar';
// import Logo from "../component-images/"


export default function HeaderM(){
	return (
        <>
        <Hero className='d-flex justify-content-around align-items-center flex-column flex-md-row'>
            <Hero className='text-center text-md-start flex-column align-items-stretch'>
                <HeroText>App-less wallets <br /> for your customers</HeroText>
                <HeroSubText className='mb-5 pb-5'>Phone number as a wallet</HeroSubText>
                <Form.Group className="mt-5 d-flex form-flex flex-column flex-lg-row" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter your email address" className="me-lg-3"/>
                            <Button className="mt-3 mt-lg-0">Create yout first wallet</Button>{' '}
                </Form.Group>
                <HeroSubText>Create a customer friendly wallet in minutes</HeroSubText>
            </Hero>
            <Image
              alt=""
              src={Bag}
              width="450"
              height="500"
              className="fluid ms-5 mt-5"
            />{''}
        </Hero>
            {/* <p>F2</p>
            <Button variant="success">Login</Button>{' '}

		    </NavBarFlex> */}
        </>

	);
}

