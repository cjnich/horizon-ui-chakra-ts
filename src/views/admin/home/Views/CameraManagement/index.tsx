import { Box, Icon, SimpleGrid, useColorModeValue } from '@chakra-ui/react';

import MiniStatistics from 'components/card/MiniStatistics';
import IconBox from 'components/icons/IconBox';
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import ComplexTable from 'views/admin/home/Views/CameraManagement/components/CameraManagementTable';
import Notifications from 'views/admin/home/Views/CameraManagement/components/CameraManagementSettings';
import tableDataComplex from 'views/admin/default/variables/tableDataComplex';

const CameraManagement = () => {
	const brandColor = useColorModeValue('brand.500', 'white');
	const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');

	return (
		<Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
			<SimpleGrid columns={{ base: 1, md: 2, lg: 3, '2xl': 6 }} gap='20px' mb='20px'>
				<MiniStatistics
					startContent={
						<IconBox
							w='56px'
							h='56px'
							bg={boxBg}
							icon={<Icon w='32px' h='32px' as={MdVisibility} color={brandColor} />}
						/>
					}
					name='Active Cameras'
					value='30'
				/>
				<MiniStatistics
					startContent={
						<IconBox
							w='56px'
							h='56px'
							bg={boxBg}
							icon={<Icon w='32px' h='32px' as={MdVisibilityOff} color={brandColor} />}
						/>
					}
					name='Inactive Cameras'
					value='4'
				/>
			</SimpleGrid>

			<SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
				<ComplexTable tableData={tableDataComplex} />
				<SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
                    <Notifications
                        used={25.6}
                        total={50}
                    />
				</SimpleGrid>
			</SimpleGrid>
		</Box>
	);
}

export default CameraManagement;