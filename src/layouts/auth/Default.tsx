import { Box, Flex } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import Footer from 'components/footer/FooterAuth';
import FixedPlugin from 'components/fixedPlugin/FixedPlugin';

const AuthIllustration = (props: { children: JSX.Element | string; illustrationBackground: string }) => {
	const { children, illustrationBackground } = props;

	return (
		<Flex position='relative' h='max-content'>
			<Flex
				h={{
					sm: 'initial',
					md: 'unset',
					lg: '100vh',
					xl: '97vh'
				}}
				w='100%'
				maxW={{ md: '66%', lg: '1313px' }}
				mx='auto'
				pt={{ sm: '50px', md: '0px' }}
				px={{ lg: '30px', xl: '0px' }}
				ps={{ xl: '70px' }}
				justifyContent='start'
				direction='column'>
					{children}
				<Box
					display={{ base: 'none', md: 'block' }}
					h='100%'
					minH='100vh'
					w={{ lg: '50vw', '2xl': '44vw' }}
					position='absolute'
					right='0px'>
					<Flex
						bg={`url(${illustrationBackground})`}
						justify='center'
						align='end'
						w='100%'
						h='100%'
						bgSize='cover'
						bgPosition='50%'
						position='absolute'
						borderBottomLeftRadius={{ lg: '120px', xl: '200px' }}
					/>
				</Box>
				<Footer />
			</Flex>
			<FixedPlugin />
		</Flex>
	);
}

AuthIllustration.propTypes = {
	illustrationBackground: PropTypes.string,
	image: PropTypes.any
};

export default AuthIllustration;
