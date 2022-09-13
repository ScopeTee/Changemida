import React from "react";
import { Anchor, Btn } from '../atoms/button';
import { Img } from "../atoms/icons";
import { Wrap } from "../atoms/wrapper";
import menu from "../component-images/menu-30.png"

export default function Account() {
	return (
        <>
        <Img src={menu} alt="Menu-Icon" className="d-md-none"/>
        <Wrap className="d-none d-md-flex align-items-center">
            <Anchor>Create an Account</Anchor>
            <Btn className="ms-3 px-5">Login</Btn>
        </Wrap>
        </>
    )
}