import React from 'react';
import { Icon, useColorModeValue } from '@chakra-ui/react';
import IconBox from 'components/icons/IconBox';

import { TbDeviceComputerCamera } from "react-icons/tb";
import { BsDatabaseFillLock } from "react-icons/bs";
import { SiGooglesearchconsole, SiNintendoswitch, SiShortcut } from "react-icons/si";
import { FaComputer, FaPhone, FaUserShield } from "react-icons/fa6";
import { VscDebugConsole } from "react-icons/vsc";
import { ImPrinter } from "react-icons/im";
import { FaServer } from 'react-icons/fa';
import DisplayModal from 'components/DisplayModal';

import CameraManagement from './Views/CameraManagement';

const MenuBar = () => {
    const brandColor = useColorModeValue('brand.500', 'white');
	const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');
	
	const [showModal, setShowModal] = React.useState(false);

	const menuItems = [
		{ id: 1, name: 'Servers', icon: FaServer, color: 'red', path: '/servers' },
		{ id: 2, name: 'Switches', icon: SiNintendoswitch, color: 'blue', path: '/switches' },
		{ id: 3, name: 'Database', icon: BsDatabaseFillLock, color: 'blue', path: '/switches' },
		{ id: 4, name: 'Computers', icon: FaComputer, color: 'green', path: '/computers' },
		{ id: 5, name: 'Printers', icon: ImPrinter, color: 'yellow', path: '/printers' },
		{ id: 6, name: 'Phones', icon: FaPhone, color: 'purple', path: '/phones' },
		{ id: 7, name: 'Cameras', icon: TbDeviceComputerCamera, color: 'orange', path: '/cameras' },
		{ id: 8, name: 'Users', icon: FaUserShield, color: 'cyan', path: '/users' },
		{ id: 9, name: 'Consoles', icon: VscDebugConsole, color: 'teal', path: '/consoles' },
		{ id: 10, name: 'Terminals', icon: SiGooglesearchconsole, color: 'pink', path: '/terminals' },
		{ id: 11, name: 'Shortcuts', icon: SiShortcut, color: 'lime', path: '/shortcuts'}
	];

	const handleIconClickEvent = () => {
		setShowModal(!showModal);	
	}

    return (
		<React.Fragment>
			{menuItems.map((item) => (
				<IconBox
					key={item.id}
					w='56px'
					h='56px'
					bg={boxBg}
					icon={<Icon w='32px' h='32px' as={item.icon} color={brandColor} />}
					onClick={handleIconClickEvent}
				/>
			))}
			<DisplayModal 
				displayModal={showModal} 
				onModalClose={() => handleIconClickEvent()}>
					<CameraManagement />
			</DisplayModal>
		</React.Fragment>
    );
}

export default MenuBar;