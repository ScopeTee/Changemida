import React from "react";
import { PreFootOne } from "../atoms/icons";
import { Wrap } from "../atoms/wrapper";
import Rectangle17 from "../component-images/Rectangle 17.png";
import Rectangle18 from "../component-images/Rectangle 18.png";
export default function ImgSetOne() {
	return (
        <>
        <Wrap className="">
            <PreFootOne src={Rectangle17} alt="First Pictures"/>
            <PreFootOne src={Rectangle18} alt="First Pictures"/>
        </Wrap>
        </>
    )
}