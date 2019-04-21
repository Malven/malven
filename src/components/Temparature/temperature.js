import React from 'react';
import { Tabs, Tab } from '@blueprintjs/core';

export const Temperature = () => {
	return (
		<Tabs vertical>
			<Tab id="jonathan" panel="graph">
				{`Jonathans rum`}
			</Tab>
			<Tab id="sarah" panel="graph">
				{`Sarahs rum`}
			</Tab>
			<Tab id="utsidan" panel="graph">
				{`Utsidan`}
			</Tab>
		</Tabs>
	);
};
