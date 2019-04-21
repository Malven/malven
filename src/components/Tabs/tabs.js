import React from 'react';
import { Tabs, Tab } from '@blueprintjs/core';
import { Temperature } from '../Temparature/temperature';

export const TabsLayout = () => {
	return (
		<Tabs>
			<Tab id="temp" panel={<Temperature />}>
				Temperatur
			</Tab>
			<Tab id="soon" disabled>
				Kommer snart
			</Tab>
		</Tabs>
	);
};
