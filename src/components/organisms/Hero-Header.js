import React from "react";
import HeroText from "../molecules/hero-text";
import { Wrapper } from "../atoms/wrapper";
import { HeroImg } from "../atoms/icons";
import Bag from "../component-images/bag.png"

// import { Wrapper } from "../atoms/wrapper";


export default function Hero_Header() {
	return (
        <>
        <Wrapper className="mt-5 d-flex flex-column flex-md-row justify-content-between">
            <HeroText />
            <HeroImg src={Bag} alt="Bag"/>
        </Wrapper>
        </>
    )
}