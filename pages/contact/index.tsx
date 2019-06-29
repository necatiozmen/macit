//#region Global Imports
import * as React from 'react';
//#endregion Global Imports
import { withNamespaces } from '../../i18n';

import './style.scss';

//#region Interface Imports
import { Card, Layout } from '@Components';
import { IContactPage, IStore } from '@Interfaces';
//#endregi Interface Imports

class ContactPage extends React.Component<IContactPage.IProps, IContactPage.IState> {
	public static async getInitialProps(): Promise<IContactPage.IProps> {
		return {
			namespacesRequired: ['common', 'ContactPage']
		};
	}
	public render(): JSX.Element {
		const { t } = this.props;

		return (
			<Layout pageType={'contact'}>
				<div className="container">
					<div className="row contact">
						<Card
							cardType={'contact'}
							icon={'building'}
							header={`${t('common:contact.Aproxum offices')} ${t('common:contact.Belgium')} `}
							address={'Galgenberglaan 18a 9070 Destelbergen'}
							numFirst={'+32 9 256 11 16'}
							numSecond={'+32 488 59 78 91'}
							email={'belgium@aproxum.com'}
							colType= {'col-md-4'}
						/>
						<Card
							cardType={'contact'}
							icon={'building'}
							header={`${t('common:contact.Aproxum offices')} ${t('common:contact.Turkey')}`}
							address={'Atatürk Mah. Mithatpaşa Cad. Yeşil Sok. Yeşil Apt. No:79 K:2 D:3 34764 Ümraniye/İstanbul'}
							numFirst={'K:2 D:3 34764 Ümraniye/İstanbul'}
							numSecond={'+90 532 062 69 39'}
							email={'turkey@aproxum.com'}
							colType={'col-md-4'}
						/>
					</div>
				</div>
			</Layout>
		);
	}
}

export default withNamespaces('common')(ContactPage);
