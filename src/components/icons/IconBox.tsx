import React, { MouseEventHandler } from 'react';
import { Flex } from '@chakra-ui/react';

const IconBox = (
	props: { 
		icon: JSX.Element | string; 
		onClick?: MouseEventHandler;
		[x: string]: any 
	},
) => {
	const { icon, onClick, ...rest } = props;
	
	return (
		<React.Fragment>
			{
				onClick ?
				<Flex 
					alignItems={'center'} 
					justifyContent={'center'} 
					borderRadius={'50%'} 
					onClick={onClick}
					{...rest}>
					{icon}
				</Flex> :
				<Flex 
				alignItems={'center'} 
				justifyContent={'center'} 
				borderRadius={'50%'}
				{...rest}>
				{icon}
			</Flex>
			}
		</React.Fragment>
		
	);
}

export default IconBox;