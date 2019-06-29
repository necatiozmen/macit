//#region Global Imports
import * as React from 'react';
import Link from 'next/link'
import { i18n, withNamespaces } from '../../../i18n';

//#endregion Global Imports

//#region Local Imports
import './style.scss';
import { setDeviceType } from '@Definations';
//#endregion Local Imports


//#region Interface Imports.
import { IHeader } from '@Interfaces';
//#endregion Interface Imports

class Header extends React.Component<IHeader.IProps, IHeader.IState> {

	public constructor(props: IHeader.IProps) {
		super(props);

		this.state = {
			deviceType: null,
			langButton: '',
			screenType: 'xLarge'
		};
	}

	public async componentDidMount(): Promise<void> {
		this.getDeviceType();

		window.addEventListener('resize', this.getDeviceType.bind(this));
	}
	public componentWillUnmount(): void {
		window.removeEventListener('resize', this.getDeviceType.bind(this));
	}


	public onChangeLanguage = (lang: string) => {
		switch (lang) {
			case 'en':
				i18n.changeLanguage('en');
				this.setState({ langButton: 'EN' });
				break;
			case 'nl':
				i18n.changeLanguage('nl');
				this.setState({ langButton: 'NL' });
				break;
			case 'tr':
				i18n.changeLanguage('tr');
				this.setState({ langButton: 'TR' });
				break;
			default:
				break;
		}
	}

	public render(): JSX.Element {
		const { lng, pageType, t, i18n } = this.props;
		const { screenType } = this.state;

		return (
			<div className="header-container">
				<nav className="navbar navbar-expand-md header navbar-light ">
					<div className="container">
						<Link href="/home" as="/">
							<div className="header__logo">
								<img src="/static/image/logo.png" alt=""></img>
							</div>
						</Link>

						{screenType === 'xSmall' &&
							<div className="dropdown">
								<button className="btn btn-secondary drop-button dropdown-toggle"
									type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									{i18n.language.toUpperCase()}
								</button>
								<div className="dropdown-menu lang-drop-menu" aria-labelledby="dropdownMenuButton">
									<li className={`lang-item ${lng === 'en' ? 'active' : ''}`} onClick={() => this.onChangeLanguage('en')} >
										<a className="nav-link">EN</a>
									</li>
									<li className={`lang-item ${lng === 'nl' ? 'active' : ''}`} onClick={() => this.onChangeLanguage('nl')}>
										<a className="nav-link">NL</a>
									</li>
									<li className={`lang-item ${lng === 'tr' ? 'active' : ''}`} onClick={() => this.onChangeLanguage('tr')}>
										<a className="nav-link">TR</a>
									</li>
								</div>
							</div>
						}
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav">
								<li className={`nav-item ${pageType === 'contact' ? 'active' : ''}`}>
									<Link href="/contact" as="/contact" >
										<a className="nav-link">{t('common:header.contact')}</a>
									</Link>
								</li>

								<li className={`nav-item ${pageType === 'advantages' ? 'active' : ''}`}>
									<Link href="/advantages" as="/advantages" prefetch>
										<a className="nav-link">{t('common:header.advantages')}</a>
									</Link>
								</li>

								<li className={`nav-item ${pageType === 'services' ? 'active' : ''}`}>
									<Link href="/services" as="/services">
										<a className="nav-link">{t('common:header.services')}</a>
									</Link>

								</li>
								<li className={`nav-item ${pageType === 'expertise' ? 'active' : ''}`}>
									<Link href="/expertise" as="/expertise" prefetch>
										<a className="nav-link">{t('common:header.expertise')}</a>
									</Link>
								</li>
							</ul>
							<div className="navbar-home">

								{screenType !== 'xSmall' &&
									<ul className="navbar-lang">
										<li className={`lang-item ${lng === 'en' ? 'active' : ''}`} onClick={() => i18n.changeLanguage('en')} >
											<a className="nav-link">EN</a>
										</li>
										<li className={`lang-item ${lng === 'nl' ? 'active' : ''}`} onClick={() => i18n.changeLanguage('nl')}>
											<a className="nav-link">NL</a>
										</li>
										<li className={`lang-item ${lng === 'tr' ? 'active' : ''}`} onClick={() => i18n.changeLanguage('tr')}>
											<a className="nav-link">TR</a>
										</li>
									</ul>

								}
								<div className={`nav-item ${pageType === 'home' ? 'active' : ''}`}>
									<Link href="/home" as="/home">
										<a className="nav-link">Home</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</nav>

				<div className="header-down">
					<div className="left"></div>
					<div className="right"></div>
				</div>
			</div>
		);


	}

	public getDeviceType(): void {
		const type = setDeviceType();
		this.setState({ deviceType: type.deviceType, screenType: type.screenType });
	}
}

export default withNamespaces('common')(Header);