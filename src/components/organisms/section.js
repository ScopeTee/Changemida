import React from 'react';
import styled from 'styled-components';
//molecules
import Sections from '../molecules/section';
// import ToteBag from "./bag.png"


const items = [
	{
		id: 1,
		title: "Breaking a N1,000 but don't have change",
        desc: "Forget writing on receipts or keeping a separate book. Send it to your customers phone number",
        button: "Create your first wallet",
		image: "./bag.png"

		
	},
	{
		id: 2,
		title: "Top up payments from your customers wallet",
        desc: "Save time and speed up payments from your customers's wallet",
        button: "Create your first wallet",
		image: ".././../public/Images/image 8.png"

	},
	{
		id: 3,
		title: "Engage your customers wherever they are.",
        desc: "Whether you are having a huge sale or just want to wish them a happy new month.",
        button: "Create your first wallet",
		image: ".././../public/Images/image 8.png"
	},
    
];

const StyledMenu = styled.div`
	border: 2px solid blue;
	padding: 30px;
	text-align: left ;
	// & > div {
	// 	margin-bottom: 20px;
	// }
`;

function ThreeSection() {
	return (
		<StyledMenu>
			{items.map(i => (
				<Sections
					key={i.id}
					title={i.title}
					description={i.desc}
					button={i.button}
					img = {i.image}
				/>
			))}
		</StyledMenu>
	);
}

export default ThreeSection;