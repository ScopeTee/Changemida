import React from "react";
import { Wrapper } from "../atoms/wrapper";
import FootAnchor from "../molecules/FootAnchor";
import FootText from "../molecules/footerText";


export default function Footer() {
	return (
        <>
        <Wrapper bg clip className="">
            <FootText />
            <FootAnchor />
        </Wrapper>
        </>
    )
}