import { createTheme, lightThemePrimitives } from 'baseui';

const CustomTheme = createTheme(
  {
    ...lightThemePrimitives,
    // primaryFontFamily: '', // You can add your custom font here
  },
  {
    // Add overrides here to your theme
  },
);

export default CustomTheme;
