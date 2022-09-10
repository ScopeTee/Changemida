import React from "react";
import { Logo } from "../atoms/icons";
import { Wrap, Wrapper } from "../atoms/wrapper";
import Image9 from "../component-images/image 9.png"
import Image7 from "../component-images/image 7.png"
import Image6 from "../component-images/image 6.png"

function MidSecImg() {
    return ( 
        <Wrapper>
            <Wrap className="d-flex align-items-center flex-column flex-lg-row justify-content-center">
                <Wrap className="d-flex flex-column justify-content-center align-items-center">
                    <Logo
                        alt="Joha"
                        src={Image9}
                        // width="345"
                        // height="75"
                    />{''}                   
                    <Logo
                        alt="Joha"
                        src={Image7}
                        // width="345"
                        // height="171"
                    />{''}
                </Wrap>
                <Wrap>
                    <Logo
                    alt="Joha"
                    src={Image6}
                    // width="282"
                    // height="330"
                    />{''}
                </Wrap>
            </Wrap>
                {/* <OverlayArrow>
                <Logo
                        alt="Joha"
                        src=""
                        // width="95"
                        // height="95"
                        />{''}
                </OverlayArrow> */}
    </Wrapper>
    );
}

export default MidSecImg;