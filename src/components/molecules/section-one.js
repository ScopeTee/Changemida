import React from "react";
import { Btn } from "../atoms/button";
import { Wrap, SectionWrap } from "../atoms/wrapper";
import { Heading2 , Paragraph } from "../atoms/typography";
// import HeroText from "../molecules/hero-text";
import { Img } from "../atoms/icons";
import Photo5 from "../component-images/image 5.png"
import Arrow from "../component-images/Arrow-Vector.png"
import Naira from "../component-images/Naira-Vector.png"


export default function SectionTop(props) {
	return (
        <>  
        <SectionWrap one  className='my-5 py-5 d-flex flex-column flex-lg-row justify-content-between align-items-center'>    
            <Wrap className='text-center text-md-start pe-5'>
                <Heading2 className=''>{props.title}</Heading2>
                <Paragraph>{props.description}</Paragraph>
                <Btn bg2 color variant='success'>{props.button}</Btn>
            </Wrap>
            <Wrap className="mt-5 d-flex align-items-start flex-column">
                <Img src={Arrow}  alt="Photos"/>
                <Img src={Photo5}  alt="Photos"/>
                <Img src={Naira} className="p-1 bg-success rounded-circle border border-secondary border-4"  alt="Photos"/>
            </Wrap>
        </SectionWrap>
        </>
    )
}

