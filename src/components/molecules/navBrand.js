import React from "react";
import { Logo } from "../atoms/icons";
import { CompanyName } from "../atoms/typography";
import { Wrap } from "../atoms/wrapper";
import logo from "../component-images/Vector 7.png"

export default function NavBrand() {
	return (
        <>
        <Wrap className="">
        <Logo src={logo} alt="Logo"/>
        <CompanyName>ChangeMida</CompanyName>
        </Wrap>
        </>
    )
}