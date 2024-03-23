// chakra imports
import { Box, Flex, Stack } from '@chakra-ui/react';
//   Custom components
import Brand from 'components/sidebar/components/Brand';
import Links from 'components/sidebar/components/Links';
// import SidebarCard from 'components/sidebar/components/SidebarCard';

// FUNCTIONS

const SidebarContent = (props: { routes: RoutesType[] }) => {
	
	const { routes } = props;

	//TODO: Move to store context
	const displayedRoutes = routes.filter((route) => route.layout === '/admin');
	
	return (
		<Flex 
			direction='column' 
			alignItems={{ base: 'center', lg: 'flex-start' }}
			height='100%' 
			borderRadius='30px'>
			<Brand />
			<Stack direction='column' mt='8px' mb='auto'>
				<Box ps='20px' pe={{ lg: '16px', '2xl': '16px' }}>
					<Links routes={displayedRoutes} />
				</Box>
			</Stack>

			{/* <Box ps='20px' pe={{ lg: '16px', '2xl': '20px' }} mt='60px' mb='40px' borderRadius='30px'>
				<SidebarCard />
			</Box> */}
		</Flex>
	);
}

export default SidebarContent;
