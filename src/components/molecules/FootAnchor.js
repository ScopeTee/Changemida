import React from "react";
import { Wrap, Wrapper } from "../atoms/wrapper";
import {FooterAnch} from "../atoms/button"
import { FooterTextOne , FooterTextTwo} from "../atoms/typography";


export default function FootAnchor() {
	return (
        <>
        <Wrapper className="d-flex flex-column flex-md-row justify-content-between">
            <Wrap className="mb-3">
                <FooterTextOne color size>ChangeMIDA</FooterTextOne> <br />
                <FooterTextTwo>Vazapay Limited</FooterTextTwo>
            </Wrap>
            <Wrap className="d-flex ">
                <Wrap className="d-flex flex-column text-start">
                <FooterAnch>FAQs</FooterAnch>
                <FooterAnch>Terms of Use</FooterAnch>
                </Wrap>

                <Wrap className="d-flex flex-column text-end">
                <FooterAnch>hello@changemida.com</FooterAnch>
                <FooterAnch>+234800000000</FooterAnch>
                </Wrap>
            </Wrap>
        </Wrapper>
        </>
    )
}