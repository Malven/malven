import React, { Component } from 'react';
import { Button, Intent, H1 } from '@blueprintjs/core';
import { TabsLayout } from './components/Tabs/tabs';

class App extends Component {
	render() {
		return (
			<div className="bp3-dark">
				<TabsLayout />
			</div>
		);
	}
}

export default App;
