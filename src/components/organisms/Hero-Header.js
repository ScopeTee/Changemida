import React from "react";
import HeroText from "../molecules/hero-text";
import { Wrapper } from "../atoms/wrapper";
import { Img } from "../atoms/icons";
import Bag from "../component-images/bag.png"

// import { Wrapper } from "../atoms/wrapper";


export default function Hero_Header() {
	return (
        <>
        <Wrapper className="mt-5 d-flex flex-column align-items-center flex-md-row justify-content-between">
            <HeroText />
            <Img src={Bag} className="mt-5 mt-lg-0" alt="Bag"/>
        </Wrapper>
        </>
    )
}