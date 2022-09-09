import React from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { NavBar, NavImg, NavBrand, NavMenuImg, NavAnchor} from '../atoms/navbar';
import Logo from "../component-images/Vector 7.png"
import Menu from "../component-images/menu-50.svg"


// document.getElementById("nav-btn").addEventListener("click", ()=>  {
//     // document.querySelector(".nav-list").classList.toggle("navbar--open")
//     alert("This Works")
// })
export default function NavigationBar(){
	return (
        <>
        
        <NavBar className='d-md-none'>
            <NavBar>
                <NavImg src={Logo}/>
                <NavBrand>ChangeMida</NavBrand>
            </NavBar>
            <NavBar className='me-3'>
                <NavMenuImg src={Menu} id='nav-btn' />
                <ListGroup variant="flush" className='nav-list d-none'>
                    <ListGroup.Item>Create an Account</ListGroup.Item>
                    <ListGroup.Item><Button variant="success">Login</Button>{' '}
                    </ListGroup.Item>
                </ListGroup>
            </NavBar>
        </NavBar>
        
        <NavBar className='d-none d-md-flex'>
            <NavBar>
                <NavImg src={Logo}/>
                <NavBrand>ChangeMida</NavBrand>
            </NavBar>
                <NavBar className='me-3'>
                    <NavAnchor className='me-3'>Create an Account</NavAnchor>
                    <Button variant="success px-5">Login</Button>{' '}    
                </NavBar>
        </NavBar>
        
        </>

	);
}

