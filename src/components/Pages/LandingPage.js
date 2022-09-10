import React from "react";
import PreFoot from "../organisms/pre-footer";
import NavigationBar from "../organisms/NavigationBar";
import Hero_Header from "../organisms/Hero-Header";
import Footer from "../organisms/footer";
import { HeaderWrap } from "../atoms/wrapper";
import Sections from "../organisms/Sections";


export default function LandingPage(){
    return (
        <>
        <HeaderWrap>
            <NavigationBar />
            <Hero_Header />
        </HeaderWrap>
        <Sections />
        <PreFoot />
        <Footer />

        </>
    )
}