import React from "react";
import { Img } from "../atoms/icons";
// import { preFootTextOne, preFootTextTwo } from "../atoms/texts";
import { Heading1 } from "../atoms/typography";
// import { preFootTextOne } from "../atoms/texts";
import { Wrap, Wrapper } from "../atoms/wrapper";
import ImgSetOne from "../molecules/pre-foot-Imgs-1";
import ImgSetTwo from "../molecules/pre-foot-Imgs-2";
import ImgSetThree from "../molecules/pre-foot-Imgs-3";
import Large from "../component-images/Rectangle 14.png"


export default function PreFoot() {
	return (
        <>
        <Wrapper className="my-3 py-5 text-center">
            <Heading1 color className="my-5">Made for your business</Heading1>
            <Wrap className="d-flex flex-column flex-lg-row">
                <ImgSetOne />
                <Img src={Large} alt="Large Image"/>
                <ImgSetTwo />
            </Wrap>
            <Heading1 color className="my-5">Trusted by many</Heading1>
            <Wrap className="">
                <ImgSetThree />
            </Wrap>
        </Wrapper>
        </>
    )
}