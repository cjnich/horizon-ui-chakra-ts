import { Flex, Text, useColorModeValue } from '@chakra-ui/react';

const Footer = () => {
	let textColor = useColorModeValue('gray.400', 'white');

	return (
		<Flex
			zIndex='3'
			flexDirection={{
				base: 'column',
				lg: 'row'
			}}
			alignItems={{
				base: 'center',
				xl: 'start'
			}}
			justifyContent='space-between'
			px={{ base: '30px', md: '0px' }}
			pb='30px'>
			<Text
				color={textColor}
				textAlign={{
					base: 'center',
					xl: 'start'
				}}
				mb={{ base: '20px', lg: '0px' }}>
				{' '}
				&copy; {new Date().getFullYear()}
				<Text as='span' fontWeight='500' ms='4px'>
					All Rights Reserved. A Genesis Product.
				</Text>
			</Text>
		</Flex>
	);
}

export default Footer;