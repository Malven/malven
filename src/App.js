import React, { Component } from 'react';
import { Button, Intent, H1 } from '@blueprintjs/core';

class App extends Component {
	render() {
		return (
			<div className="bp3-dark">
				<H1>JOIN</H1>
				<Button large fill intent={Intent.PRIMARY}>
					JOIN
				</Button>
			</div>
		);
	}
}

export default App;
