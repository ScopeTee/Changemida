import React from "react";
import { Span1, Span2} from "../atoms/typography";
import { Wrap, Wrapper } from "../atoms/wrapper";

export default function FootText() {
	return (
        <>
        <Wrapper className="my-5 py-5">
            <Wrap className="">
                <Span2 color>Manage <span>Wallets</span> <br /> Without Stress</Span2> <br />
                <Span1>Changemida is a service by vazapay limited.</Span1>
            </Wrap>
        </Wrapper>
        </>
    )
}