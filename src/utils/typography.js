import Typography from "typography";
import altonTheme from "typography-theme-alton";
// // Hot reload typography in development.
// if (process.env.NODE_ENV !== `production`) {
//   Typography.injectStyles();
// }
const typography = new Typography(altonTheme);

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
