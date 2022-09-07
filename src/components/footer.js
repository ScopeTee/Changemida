import React from "react";
import {FooterSection, FooterSectionText, FooterSectionTextWrap, FooterSectionFlex, FooterSectionAlign} from "../styles/Footer.styled";
import { Container } from "../styles/Container.styled";


function Footer() {
    return ( 
        <FooterSection className="pt-5 mt-5">
            <Container>
                <FooterSectionText className="pt-5 px-5">
                    <FooterSectionTextWrap className="my-5" >
                        <h3 className=" h3 my-3">Manage <span className="wallet">Wallets</span> Without Stress</h3>
                        <p className="sp-4">Changemida is a service by vazapay limited.</p>  
                    </FooterSectionTextWrap> 
                    <FooterSectionFlex className="mt-5 pt-5">
                        <FooterSectionAlign>
                            <h2 className=" h2-5 my-3">ChangeMIDA</h2>
                            <p className="sp-4">Vazapay Limited</p>  
                        </FooterSectionAlign>
                        <div className="sub-flex">     
                        <FooterSectionAlign>
                            <p className="sp-5"> <a href="##">FAQ</a></p>  
                            <p className="sp-5"> <a href="##">Terms of Use</a></p>  
                        </FooterSectionAlign>
                        <FooterSectionAlign>
                            <p className="sp-5"> <a href="##">hello@changemida.com</a></p>  
                            <p className="sp-5"><a href="##">+234800000000 </a></p>  
                        </FooterSectionAlign> 
                        </div>
                    </FooterSectionFlex>      
                       
                </FooterSectionText>
            </Container>
        </FooterSection>
    );
}

export default Footer;