import React from "react";
// import Button from 'react-bootstrap/Button';
// import Arrow from "../Images/Vector.png"
// import Naira from "../Images/Vector-1.png"
// import Photo2 from "../Images/image 5.png"
// import Image from 'react-bootstrap/Image'


function Footer() {
    return ( 
        <section className="footer mt-5">
            <div className="contain">
                <div class="footer-text text-start pt-5 px-5">
                    <div className="text-start my-5 foot-wrap" >
                        <h3 className=" h3 my-3">Manage Wallets Without Stress</h3>
                        <p class="sp-4">Changemida is a service by vazapay limited.</p>  
                    </div> 
                    <section className="footer-flex">
                        <div className="text-start " >
                            <h2 className=" h2-5 my-3">ChangeMIDA</h2>
                            <p class="sp-4 vaza">Vazapay Limited</p>  
                        </div>     
                        <div className="text-start " >
                        <p class="sp-5"> <a href="##">FAQ</a></p>  
                            <p class="sp-5"> <a href="##">Terms of Use</a></p>  
                        </div>
                        <div className="text-start " >
                        <p class="sp-5"> <a href="##">hello@changemida.com</a></p>  
                            <p class="sp-5"><a href="">+234800000000 </a></p>  
                        </div> 
                    </section>      
                       
                </div>
            </div>
            
        </section>
    );
}

export default Footer;