import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    body: string;
    accentBody: string;
    text: string;
    bodyRgba: string;
    textRgba: string;
  }
}
