import React from "react";
import { PreFootTwo } from "../atoms/icons";
import { Wrap } from "../atoms/wrapper";
import Rectangle15 from "../component-images/Rectangle 15.png";
import Rectangle16 from "../component-images/Rectangle 16.png";

export default function ImgSetTwo() {
	return (
        <>
        <Wrap className="">
            <PreFootTwo src={Rectangle15} alt="Second Pictures"/>
            <PreFootTwo src={Rectangle16} alt="Second Pictures"/>
        </Wrap>
        </>
    )
}