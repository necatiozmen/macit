import * as React from 'react';

//#region Local Imports
import './style.scss';
//#endregion Local Imports

export default (props): JSX.Element => (

	<div className={`${props.colType} InfoCard`}>
		<div className="InfoCard__icon">
			<img className={props.icon} src={`/static/image/${props.icon}.png`} />
		</div>
		<div className="InfoCard__header">
			<span>{props.header}</span>
		</div>
		<div className="InfoCard__content">
			{(props.cardType === 'contact' || props.cardType === 'expertise') &&
				<>
					<span className="content__address">{props.address}</span>
					<div className="content__num">
						<span >{props.numFirst}</span>
						<span>{props.numSecond}</span>
					</div>
					<span>{props.email}</span>
				</>
			}
			{(props.cardType === 'advantages' || props.cardType === 'services') &&
				<>
					<span className="content__info">{props.content}</span>
				</>
			}
			{props.cardType === 'expertise' &&
				<a href={props.user === 'mct' ? 'https://www.linkedin.com/in/h%C3%BCmeyra-macit-b1192548/'
					: 'https://www.linkedin.com/in/nureddinmacit/'}>
					<img className="content__linkedin" src={'/static/image/linkedin.png'} />
				</a>
			}

		</div>
	</div>
);
