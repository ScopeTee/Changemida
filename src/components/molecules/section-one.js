import React from "react";
import { Btn } from "../atoms/button";
import { Wrap, SectionWrap } from "../atoms/wrapper";
import { SectionTitle, SectionDesc } from "../atoms/typography";
// import HeroText from "../molecules/hero-text";
import { Logo } from "../atoms/icons";
import Photo5 from "../component-images/image 5.png"
import Arrow from "../component-images/Arrow-Vector.png"
// import Naira from "../component-images/Naira-Vector.png"


export default function SectionTop(props) {
	return (
        <>  
        <SectionWrap one  className='one d-flex flex-column flex-md-row justify-content-between align-items-center'>    
            <Wrap className='text-center text-md-start pe-5'>
                <SectionTitle className=''>{props.title}</SectionTitle>
                <SectionDesc>{props.description}</SectionDesc>
                <Btn bg2 color variant='success'>{props.button}</Btn>
            </Wrap>
            <Wrap className="d-flex align-items-start flex-column">
                <Logo src={Arrow}  alt="Photos"/>
                <Logo src={Photo5}  alt="Photos"/>
                <Logo src={Arrow}  alt="Photos"/>

            </Wrap>
        </SectionWrap>
        </>
    )
}

