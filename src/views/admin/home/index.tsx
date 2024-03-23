import { Flex, SimpleGrid } from '@chakra-ui/react';

import MenuBar from './MenuBar';

const HomeDashboard = () => {
	return (
		<Flex 
			height={"80vh"}
			width={"100%"}
			align={"center"}
			justify={"center"}>
			<SimpleGrid 
				columns={{ base: 2, md: 3, lg: 4 }}
				mt={{ base: '20vh', md: '0px' }}
				gap={{ base: '35px', md: '50px'}} 
				mb='10px'>
					<MenuBar />
			</SimpleGrid>
		</Flex>
	);
}

export default HomeDashboard;