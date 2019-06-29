//#region Global Imports
import * as React from 'react';
import { withNamespaces } from '../../i18n';
//#endregion Global Imports

import './style.scss';
//#region Interface Imports
import { IAdvantagesPage, IStore } from '@Interfaces';
import { Card, Layout } from '@Components';
//#endregion Interface Imports

class AdvantagesPage extends React.Component<IAdvantagesPage.IProps, IAdvantagesPage.IState> {
	public static async getInitialProps(): Promise<IAdvantagesPage.IProps> {
		return {
			namespacesRequired: ['common', 'AdvantagesPage']
		};
	}

	public render(): JSX.Element {
		const { t } = this.props;

		return (
			<Layout pageType={'advantages'}>
				<div className="container-fluid advantages-container">
					<div className="row advantages">
						<Card
							cardType={'advantages'}
							icon={'hourglass'}
							header={t('common:advantages.Gain time')}
							content={t('common:advantages.Do what you are good at')}
							colType={'col-md-3'}
						/>
						<Card
							cardType={'advantages'}
							icon={'diagram'}
							header={t('common:advantages.Be local abroad')}
							content={t('common:advantages.Work with trustworthy')}
							colType={'col-md-3'}
						/>
						<Card
							cardType={'advantages'}
							icon={'rich'}
							header={t('common:advantages.Benefit fiscally')}
							content={t('common:advantages.Invoice your expenses and prevent incurring personnel wages')}
							colType={'col-md-3'}
						/>
						<Card
							cardType={'advantages'}
							icon={'presentation'}
							header={t('common:advantages.Develop knowledge')}
							content={t('common:advantages.Acquire expertise while doing')}
							colType={'col-md-3'}
						/>
					</div>
				</div>
			</Layout>
		);
	}
}

export default withNamespaces('common')(AdvantagesPage);
