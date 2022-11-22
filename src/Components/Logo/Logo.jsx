import React from 'react';
import { ImgStyled } from './LogoStyle';

const Logo = () => {
	return (
		<ImgStyled>
			<img
				src="https://www.musewiki.org/images/thumb/WOTP_MonogramArt.jpg/300px-WOTP_MonogramArt.jpg"
				alt="logo"
				width="100px"
				border-radius="20px"
			/>
		</ImgStyled>
	);
};

export default Logo;
