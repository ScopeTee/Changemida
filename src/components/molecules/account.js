import React from "react";
import { Btn } from '../atoms/button';
import { Menu } from "../atoms/icons";
import { Wrap } from "../atoms/wrapper";
import menu from "../component-images/menu-50.svg"

export default function Account() {
	return (
        <>
        <Menu src={menu} alt="Menu-Icon" className="d-md-none"/>
        <Wrap className="d-none d-md-flex">
        <Btn bg variant="Link">Create an Account</Btn>
        <Btn>Login</Btn>
        </Wrap>
        </>
    )
}