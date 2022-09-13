import React from "react";
import { Img } from "../atoms/icons";
import { Wrap, Wrapper } from "../atoms/wrapper";
import Image9 from "../component-images/image 9.png"
import Image7 from "../component-images/image 7.png"
import Image6 from "../component-images/image 6.png"

export default function MidSecImg() {
    return ( 
        <Wrapper className="mt-5">
            <Wrap className="d-flex align-items-center flex-column flex-lg-row justify-content-center">
                <Wrap className="d-flex flex-column justify-content-center align-items-center">
                    <Img alt="" src={Image9} />                   
                    <Img alt="" src={Image7} />
                </Wrap>
                <Wrap>
                    <Img alt="" src={Image6} />
                </Wrap>
            </Wrap>
                {/* <OverlayArrow> */}
                <Img
                        alt="OverlayArrow"
                        src=""
                        className="overlay"
                        // width="95"
                        // height="95"
                        />{''}
                {/* </OverlayArrow> */}
    </Wrapper>
    );
}

