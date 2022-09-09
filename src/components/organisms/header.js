import React from "react";

import HeaderM from "../molecules/header"
import NavigationBar from "../molecules/navbar";
// import SectionM from "../molecules/section"
// import FooterM from "../molecules/footer"
const colors = {
    white: "#FFFFFF",
    background: "#5537D3"
}
export default function Footer(){
    return (
        <>
        <NavigationBar />
        <HeaderM
            text-color = {colors.white}
            />
        {/* <SectionM />
        <FooterM /> */}
        </>
    )
}