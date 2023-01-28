// material-ui

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoIconDark from 'assets/images/logo-icon-dark.svg';
 * import logoIcon from 'assets/images/logo-icon.svg';
 *
 */

// ==============================|| LOGO ICON SVG ||============================== //
import logoIcon from 'assets/images/logo.png';
const LogoIcon = () => {
  

  return (
    <img src={logoIcon} alt="Surface" width="40" />
   
  );
};

export default LogoIcon;
