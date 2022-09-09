import React from 'react';
import { Heading, Images } from '../atoms/pre-foot';
import { Flex } from '../atoms/section';

const headerItems = [
    {
        id: 1,
        content: "Made for your business",
            images: [
                {
            img1: "",
            img2: "",
            img3: "",
            img4: "",
            img5: ""
                }
            ]
    },
    {
        id: 2,
        content: "Trusted by many",
            images: [
                {
                    img1: "",
                    img2: ""
                }
            ]
    }
]

export default function ContentOne() {
    // console.log(headerItems[0].images)
	return (
        <>
        <Flex className='flex-column text-center'>
            <Flex>
            <Heading>Made for your business</Heading>
            <Flex>
                <Images src='' alt='idek'/>
                <Images src='' alt='idek'/>
                <Images src='' alt='idek'/>
                <Images src='' alt='idek'/>
                <Images src='' alt='idek'/>
            </Flex>
            </Flex>
            <Flex>
            <Heading>Trusted by many</Heading>
            <Flex className="flex-column justify-content-between">
                <Images src='' alt='idek'/>
                <Images src='' alt='idek'/>
                <Images src='' alt='idek'/>
            </Flex>
            </Flex>
        </Flex>
        </>    
    )
}