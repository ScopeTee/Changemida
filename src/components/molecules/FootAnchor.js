import React from "react";
import { Wrap, Wrapper } from "../atoms/wrapper";
import {Anchor} from "../atoms/button"
import { Span1, Span2} from "../atoms/typography";


export default function FootAnchor() {
	return (
        <>
        <Wrapper className="mt-5 pt-3 d-flex flex-column flex-md-row justify-content-between align-items-center">
            <Wrap className="mb-3">
                <Span2 color size>ChangeMIDA</Span2> <br />
                <Span1>Vazapay Limited</Span1>
            </Wrap>
            <Wrap className="d-flex ">
                <Wrap className="d-flex flex-column text-start">
                <Anchor color>FAQs</Anchor>
                <Anchor color>Terms of Use</Anchor>
                </Wrap>

                <Wrap className="d-flex flex-column text-end">
                <Anchor color>hello@changemida.com</Anchor >
                <Anchor color>+234800000000</Anchor >
                </Wrap>
            </Wrap>
        </Wrapper>
        </>
    )
}

