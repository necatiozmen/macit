import * as React from 'react';

import { ILayout } from '@Interfaces';

import { Footer, Header } from '@Components';

export class Layout extends React.Component<ILayout.IProps, ILayout.IState> {
	public render(): JSX.Element {
		const { pageType } = this.props;

		return (
			<>
				<Header pageType={pageType} />
				{this.props.children}
				<Footer />
			</>
		);
	}
}
