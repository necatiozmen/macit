
//#region Global Imports
import { Props } from 'react';
//#endregion Global Imports

declare module IAdvantagesPage {
	export interface IOwnProps extends Props<{}> { }

    export interface IState { }
	
	export interface IStateProps { }
	

	export type IProps = IOwnProps & IStateProps & IDispatchProps;

    module Actions {
		export interface IMapPayload { }
		
		export interface IMapResponse { }
	}
}