import React from "react";
import { Wrapper } from "../atoms/wrapper";
import SectionTop from "../molecules/section-one";
import SectionBottom from "../molecules/section-three";

// import { Logo } from "../atoms/icons";
// import Bag from "../component-images/bag.png"
// import items from "../../data"
import items from "../../data"
import MidSection from "../molecules/section-two"
// import Bag from "../component-images/bag.png"
console.log(items[0].image)




export default function Sections() {
	return (
        <>

        <Wrapper className="">
			
			<SectionTop 
			title= {items[0].title}
			description = {items[0].desc}
			button = {items[0].button}
			/>

			<MidSection 
			title= {items[1].title}
			description = {items[1].desc}
			button = {items[1].button}
			/>

			<SectionBottom 
			title= {items[2].title}
			description = {items[2].desc}
			button = {items[2].button}
			/>

        </Wrapper>
        </>
    )
}
