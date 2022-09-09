import React from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import TBag from "./bag.png"
import { Flex, SectionTitle, SectionDescription} from '../atoms/section';

function Sections({ key , title, description, button, img }) {
  // let Keyfactor=document.querySelector(".fuck");
  // if (key % 2 !== 0){
  //   Keyfactor.style.display = 'moe'
  // }
  // else if (img !== ""){
  //   picture = img
  // }
	return (
        <>        
        <Flex className='d-md-flex align-items-center'>    
            <Flex className='text-center text-md-start'>
                <SectionTitle className=''>{title}</SectionTitle>
                <SectionDescription>{description}</SectionDescription>
                <Button variant='success'>{button}</Button>{' '}
                {/* <SecButton bgColor={"red"}>Test</SecButton> */}

            </Flex>
            <Image
              alt=""
              src={TBag}
              
              width=""
              height=" "
              className="fluid ms-5 mt-5"
            />{""}
        </Flex>
        </>

	);
}

export default Sections;