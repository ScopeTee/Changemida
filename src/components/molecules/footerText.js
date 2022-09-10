import React from "react";
import { FooterTextOne, FooterTextTwo} from "../atoms/typography";
import { Wrap, Wrapper } from "../atoms/wrapper";

export default function FootText() {
	return (
        <>
        <Wrapper className="mb-5">
            <Wrap className="">
                <FooterTextOne color>Manage <span>Wallets</span> <br /> Without Stress</FooterTextOne> <br />
                <FooterTextTwo>Changemida is a service by vazapay limited.</FooterTextTwo>
            </Wrap>
        </Wrapper>
        </>
    )
}