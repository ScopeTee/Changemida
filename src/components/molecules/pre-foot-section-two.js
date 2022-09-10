import React from "react";
import { PreFootThree } from "../atoms/icons";
import { Wrap } from "../atoms/wrapper";
import image1 from "../component-images/image 1.jpg"
import image2 from "../component-images/image 2.jpg"
import image3 from "../component-images/image 3.jpg"

export default function ImgSetThree() {
	return (
        <>
        <Wrap className="d-flex flex-column flex-sm-row justify-content-around">
            <PreFootThree src={image1} className="w-32 " alt="Third Picture"/>
            <PreFootThree src={image2} alt="Third Picture"/>
            <PreFootThree src={image3} alt="Third Picture"/>

        </Wrap>
        </>
    )
}