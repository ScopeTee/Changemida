import React from "react";
import { Btn } from "../atoms/button";
import { Wrap, SectionBottomWrap, Divider2 } from "../atoms/wrapper";
import { Heading2, Paragraph } from "../atoms/typography";
// import HeroText from "../molecules/hero-text";
import { Logo } from "../atoms/icons";
import Photo8 from "../component-images/image 8.png"

export default function SectionBottom(props) {
	return (
        <>  
        <SectionBottomWrap bent className='my-5 pt-5'>
            <Divider2 className="d-none d-md-block"></Divider2>
                <Wrap className="d-flex flex-column flex-lg-row justify-content-between">    
                    <Wrap className='ps-3 text-center text-md-start'>
                        <Heading2 className=''>{props.title}</Heading2>
                        <Paragraph>{props.description}</Paragraph>
                        <Btn variant='success'>{props.button}</Btn>
                    </Wrap>
                    <Logo bend src={Photo8}  alt="Photos"/>
                </Wrap>
        </SectionBottomWrap>
        </>
    )
}

