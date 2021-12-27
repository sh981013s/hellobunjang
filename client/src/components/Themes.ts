export const DarkTheme = {
  body: '#303030',
  accentBody: '#000000',
  text: '#e5e5e5',
  bodyRgba: '252, 246, 244',
  textRgba: '0,0,0',
};

export const breakpoints = {
  sm: 20, //em
  md: 30,
  lg: 45,
  xl: 60,
  xxl: 75,
};

export const mediaQueries = (key: number) => {
  return (style: string) => `@media (max-width: ${key}em) { ${style} }`;
};
