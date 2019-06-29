//#region Global Imports
import { Props } from 'react';
//#endregion Global Imports

declare module IHeader {
    export interface IProps extends Props<{}> {
        pageType: string;
        t: any;
        lng: string;
    
    }

    export interface IState {
        deviceType: any;
        screenType: string;
        langButton: string;
    }
}