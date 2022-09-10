import React from "react";
import { Btn } from "../atoms/button";
import { Wrap, SectionWrap } from "../atoms/wrapper";
import { Heading2, Paragraph } from "../atoms/typography";
// import { Logo } from "../atoms/icons";
// import Photo8 from "../component-images/image 8.png"
import MidSecImg from "./section-two-imgs";

export default function MidSection(props) {
	return (
        <>  
        <SectionWrap className='my-5 py-5 d-flex flex-column justify-content-between'>    
            <Wrap className='text-center'>
                <Heading2 className=''>Top up payments from your customers wallet</Heading2>
                <Paragraph>Save time and speed up payments from your customers's wallet</Paragraph>
                <Btn bg2 color variant='success'>Create your first wallet</Btn>
            </Wrap>
            {/* <Logo src={Photo8}  alt="Photos"/> */}
            <MidSecImg />

        </SectionWrap>
        </>
    )
}
