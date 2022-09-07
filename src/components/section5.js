import React from "react";
import { FifthSection,FifthSectionContentOne,FifthSectionContentTwo, FifthSectionMainFlex, MainFlexOne, MainFlexTwo } from "../styles/Section5.styled";
import { Container } from "../styles/Container.styled";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import Photo14 from "../Images/Rectangle 14.png"
import Photo15 from "../Images/Rectangle 15.png"
import Photo16 from "../Images/Rectangle 16.png"
import Photo17 from "../Images/Rectangle 17.png"
import Photo18 from "../Images/Rectangle 18.png"
import Image1 from "../Images/image 1.jpg"
import Image2 from "../Images/image 2.jpg"
import Image3 from "../Images/image 3.jpg"




function Section5() {
    return ( 
        <Container>
        <FifthSection className="mt-5">
                <FifthSectionContentOne className="mb-5">
                    <h2 className="h2-2 mb-5">Made for your business</h2>
                    <FifthSectionMainFlex>
                        <MainFlexOne>
                            <Image
                            alt=""
                            src={Photo17}
                            width="97"
                            height="97"
                            className="d-inline-block align-top "
                            />{''}
                            <Image
                            alt=""
                            src={Photo18}
                            width="200"
                            height="200"
                            className="d-inline-block align-top mt-5 md-img"
                            />{''}
                        </MainFlexOne>
                        <Image
                        alt=""
                        src={Photo14}
                        width="667"
                        height="300"
                        className="d-inline-block align-top large-img"
                    />{''}
                        <MainFlexTwo>
                            <Image
                            alt=""
                            src={Photo15}
                            width="181"
                            height="181"
                            className="d-inline-block align-top md-img-2"
                        />{''}
                            <Image
                                alt=""
                                src={Photo16}
                                width="114"
                                height="114"
                                className="d-inline-block align-top mt-5"
                            />{''}
                        </MainFlexTwo>

                    </FifthSectionMainFlex>
                </FifthSectionContentOne>
                <FifthSectionContentTwo className="my-5">
                    <h2 className="h2-2">Trusted by many</h2>
                    <FifthSectionMainFlex className="mb-5">
                        <Image
                            alt=""
                            src={Image1}
                            width="126"
                            height="128"
                            className="d-inline-block align-top"
                        />{''}
                        <Image
                            alt=""
                            src={Image2}
                            width="264"
                            height="60"
                            className="d-inline-block align-top"
                        />{''}
                        <Image
                            alt=""
                            src={Image3}
                            width="147"
                            height="68"
                            className="d-inline-block align-top"
                        />{''}
                    </FifthSectionMainFlex>
                </FifthSectionContentTwo>
                <Button className="btn-2 px-3 py-3 mt-3">Create yout first wallet</Button>{' '}
        </FifthSection>
        </Container>
    );
}

export default Section5;