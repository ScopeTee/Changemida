import React from "react";
import Account from "../molecules/account";
import NavBrand from "../molecules/navBrand";
import { Wrapper } from "../atoms/wrapper";


export default function NavigationBar() {
	return (
        <>
        <Wrapper className="d-flex align-items-center justify-content-between">
        <NavBrand />
        <Account />
        </Wrapper>
        </>
    )
}