
// material-ui
import { useTheme } from '@mui/material/styles';

import logoIconDark from 'assets/images/surface-dark.png';
import logoIcon from 'assets/images/surface-light.png';

const LogoMain = ({ reverse, ...others }: { reverse?: boolean }) => {
  const theme = useTheme();
  return (
   

     <img src={theme.palette.mode === 'dark' ? logoIconDark : logoIcon} alt="Surface" width="220" />
    
   

  );
};

export default LogoMain;
