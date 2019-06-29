//#region Global Imports
import { Props } from 'react';
//#endregion Global Imports

declare module ILayout {
  export interface IProps extends Props<{}> {
    pageType: string;
  }

  export interface IState { }
}