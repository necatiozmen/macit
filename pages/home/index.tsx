//#region Global Imports
import * as React from 'react';
import { i18n, withNamespaces } from '../../i18n';
import dynamic from 'next/dynamic'

const ReactTypingEffect = dynamic(
	import('react-typing-effect'),
	{ ssr: false }
)

//#endregion Global Imports

import './style.scss';

//#region Interface Imports
import { IHomePage } from '@Interfaces';
import { Layout } from '@Components';
//#endregion Interface Imports

export class HomePage extends React.Component<IHomePage.IProps, IHomePage.IState> {
	public static async getInitialProps(): Promise<IHomePage.IProps> {

		return {
			namespacesRequired: ['common', 'HomePage']
		};
	}

	public render(): JSX.Element {
		const { i18n } = this.props;

		return (
			<Layout pageType={'home'}>
				<div className="container home">
					<div className="home__title">
						{i18n.language === 'en' &&
							<div className="home__typewriter foreign">
								<div className="home__typewriter__en">
									<p>Your</p>
									<ReactTypingEffect
										text={['bridge', 'connection', 'home', 'harbor']}
										speed={75}
									/>
									<div className="second-word">
										<p>between Belgium and Turkey</p>

									</div>
								</div>
							</div>
						}
						{i18n.language === 'nl' &&

							<div className="home__typewriter foreign">
								<div className="home__typewriter__en">
									<p>Uw</p>
									<ReactTypingEffect
										text={['brug', 'verbinding', 'thuis', 'haven']}
										speed={120}
									/>
									<div className="second-word">
										<p>tussen België en Turkije.</p>
									</div>
								</div>
							</div>
						}
						{i18n.language === 'tr' &&
							<div className="home__typewriter">
								<p>
									Belçika ve Türkiye arasındaki
								</p>
								<ReactTypingEffect
									text={['köprünüz.', 'bağlantınız.', 'eviniz.', 'limanınız.']}
									speed={120}
								/>
							</div>
						}
					</div>
					<div className="home__video">
						<div className="embed-responsive embed-responsive-16by9">
							<iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
						</div>
					</div>
				</div>
			</Layout>
		);
	}
}

export default withNamespaces('common')(HomePage);