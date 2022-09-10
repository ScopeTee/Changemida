import React from "react";
import Form from 'react-bootstrap/Form';
import { HeroForm, MailForm } from "../atoms/form";
import { Btn } from "../atoms/button";
import { Heading1, Span1 } from "../atoms/typography";
import { Wrap } from "../atoms/wrapper";


export default function HeroText() {
	return (
        <>
        <Wrap className="text-center text-md-start">
            <Wrap className="">
                <Heading1>App-less wallets <br /> for your customers</Heading1>
                <Span1>Phone number as a wallet</Span1>
            </Wrap>
            <Wrap className="mt-5">
                <HeroForm className="d-flex  form-flex flex-column flex-lg-row d-md-flex">
                    <MailForm type="email" placeholder="Enter your email address" className="pe-5 ps-2 me-lg-3"/>
                    <Btn bg2 color >Create your first wallet</Btn>
                </HeroForm>
                <Span1>Create a customer friendly wallet in minutes</Span1>
            </Wrap>   
        </Wrap>
        </>
    )
}