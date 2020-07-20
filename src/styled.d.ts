import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string;
    secondary: string;
    alt: string;
    baseUI: string;
    highlight: string;
    modalOverlay: string;
    modalBox: string;
  }
}
