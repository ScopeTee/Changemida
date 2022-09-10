import React from "react";
import { PreFootLg } from "../atoms/icons";
// import { preFootTextOne, preFootTextTwo } from "../atoms/texts";
import { HeroTitle } from "../atoms/typography";
// import { preFootTextOne } from "../atoms/texts";
import { Wrap, Wrapper } from "../atoms/wrapper";
import ImgSetOne from "../molecules/pre-foot-section-one";
import ImgSetTwo from "../molecules/pre-foot-section-one-two";
import ImgSetThree from "../molecules/pre-foot-section-two";
import Large from "../component-images/Rectangle 14.png"


export default function PreFoot() {
	return (
        <>
        <Wrapper className="text-center">
            <HeroTitle color>Made for your business</HeroTitle>
            <Wrap className="d-flex flex-column flex-md-row">
                <ImgSetOne />
                <PreFootLg src={Large} alt="Large Image"/>
                <ImgSetTwo />
            </Wrap>
            <HeroTitle color>Trusted by many</HeroTitle>
            <Wrap className="">
                <ImgSetThree />
            </Wrap>
        </Wrapper>
        </>
    )
}