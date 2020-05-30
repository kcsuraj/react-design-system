// Defines declaration file for themes
import 'styled-components';

declare module 'styled-components' {
  export interface IDefaultTheme {
    color: {
      [key: string]: string;
    };
  }
}
