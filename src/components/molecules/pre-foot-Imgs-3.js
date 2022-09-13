import React from "react";
import { Img } from "../atoms/icons";
import { Wrap } from "../atoms/wrapper";
import image1 from "../component-images/image 1.jpg"
import image2 from "../component-images/image 2.jpg"
import image3 from "../component-images/image 3.jpg"

export default function ImgSetThree() {
	return (
        <>
        <Wrap className="d-flex flex-column align-items-center flex-sm-row justify-content-center">
            <Img src={image1} className="w-25 " alt="Third Picture"/>
            <Img src={image2} className="w-50 " alt="Third Picture"/>
            <Img src={image3} className="w-25 " alt="Third Picture"/>
        </Wrap>
        </>
    )
}