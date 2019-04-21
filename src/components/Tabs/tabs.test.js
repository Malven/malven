import React from 'react';
import 'jest-dom/extend-expect';
import { render, cleanup } from 'react-testing-library';
import { TabsLayout } from './tabs';

afterEach(cleanup);

it('should render a tab', () => {
	const { queryByText, queryByTestId } = render(<TabsLayout />);
	const tabs = queryByText('graph');

	expect(tabs).toBeInTheDocument();
});
