import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/App.css';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme';

import { GlobalStateProvider } from './contexts/Global';
import Entry from 'views/Entry';

ReactDOM.render(
	<ChakraProvider theme={theme}>
		<React.StrictMode>
			<GlobalStateProvider>
				<Entry />
			</GlobalStateProvider>
		</React.StrictMode>
	</ChakraProvider>,
	document.getElementById('root')
);
