//#region Global Imports
import * as React from 'react';
import { withNamespaces } from '../../i18n';
//#endregion Global Imports

import './style.scss';
//#region Interface Imports
import { IServicesPage, IStore } from '@Interfaces';
import { Card, Layout } from '@Components';
//#endregion Interface Imports

class ServicesPage extends React.Component<IServicesPage.IProps, IServicesPage.IState> {

	public static async getInitialProps(): Promise<IServicesPage.IProps> {
		return {
			namespacesRequired: ['common', 'ServicesPage']
		};
	}
	public render(): JSX.Element {
		const { t } = this.props;
		
		return (
			<Layout pageType={'services'}>
				<div className="container-fluid services-container">
					<div className="row services">
						<Card
							cardType={'services'}
							icon={'record'}
							header={t('common:services.General administration')}
							content={t('common:services.Taking care of your')}
							colType={'col-md-3'}
						/>
						<Card
							cardType={'services'}
							icon={'diagram'}
							header={t('common:services.outsourcing')}
							content={t('common:services.Connecting you with local customers')}
							colType={'col-md-3'}
						/>
						<Card
							cardType={'services'}
							icon={'presentation2'}
							header={t('common:services.Market Research')}
							content={t('common:services.Collecting data')}
							colType={'col-md-3'}
						/>
						<Card
							cardType={'services'}
							icon={'briefcase'}
							header={t('common:services.Representation')}
							content={t('common:services.Representing your interests in person locally')}
							colType={'col-md-3'}
						/>
					</div>
				</div>
			</Layout>
		);
	}
}

export default withNamespaces('common')(ServicesPage);