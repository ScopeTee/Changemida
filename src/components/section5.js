import React from "react";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import Photo14 from "../Images/Rectangle 14.png"
import Photo15 from "../Images/Rectangle 15.png"
import Photo16 from "../Images/Rectangle 16.png"
import Photo17 from "../Images/Rectangle 17.png"
import Photo18 from "../Images/Rectangle 18.png"




function Section5() {
    return ( 
        <section className="section-5 mt-5">
            {/* <div className="divider "></div> */}
            <div className="contain s-5 text-center">
                <section>
                <h2 className="h2-2">Made for your business</h2>
                    <div className="main-flex">
                        <div className="fx-1">
                        <Image
                        alt=""
                        src={Photo17}
                        width="97"
                        height="97"
                        className="d-inline-block align-top s4-img ms-4 pt-5"
                    />{''}
                    <Image
                        alt=""
                        src={Photo18}
                        width="200"
                        height="200"
                        className="d-inline-block align-top s4-img ms-4 pt-5"
                    />{''}
                        </div>
                        <Image
                        alt=""
                        src={Photo14}
                        width="667"
                        height="300"
                        className="d-inline-block align-top s4-img ms-4 pt-5"
                    />{''}
                        <div className="fx-2">
                        <Image
                        alt=""
                        src={Photo15}
                        width="181"
                        height="181"
                        className="d-inline-block align-top s4-img ms-4 pt-5"
                    />{''}
                    <Image
                        alt=""
                        src={Photo16}
                        width="114"
                        height="114"
                        className="d-inline-block align-top s4-img ms-4 pt-5"
                    />{''}
                        </div>

                    </div>
                </section>
                <section>
                <h2 className="h2-2">Trusted by many</h2>

                </section>
                <Button className="btn-2 px-3 py-3">Create yout first wallet</Button>{' '}
            </div>  
        </section>
    );
}

export default Section5;