import React from "react";
import { Btn } from "../atoms/button";
import { Wrap, SectionWrap } from "../atoms/wrapper";
import { SectionTitle, SectionDesc } from "../atoms/typography";
// import { Logo } from "../atoms/icons";
// import Photo8 from "../component-images/image 8.png"
import MidSecImg from "./section-two-imgs";

export default function MidSection(props) {
	return (
        <>  
        <SectionWrap className='d-flex flex-column justify-content-between'>    
            <Wrap className='text-center'>
                <SectionTitle className=''>Top up payments from your customers wallet</SectionTitle>
                <SectionDesc>Save time and speed up payments from your customers's wallet</SectionDesc>
                <Btn bg2 color variant='success'>Create your first wallet</Btn>
            </Wrap>
            {/* <Logo src={Photo8}  alt="Photos"/> */}
            <MidSecImg />

        </SectionWrap>
        </>
    )
}
