import React from "react";
import { Img } from "../atoms/icons";
import { Wrap } from "../atoms/wrapper";
import Rectangle17 from "../component-images/Rectangle 17.png";
import Rectangle18 from "../component-images/Rectangle 18.png";


export default function ImgSetOne() {
	return (
        <>
        <Wrap className="">
            <Img src={Rectangle17} alt="First Pictures"/>
            <Img src={Rectangle18} alt="First Pictures"/>
        </Wrap>
        </>
    )
}