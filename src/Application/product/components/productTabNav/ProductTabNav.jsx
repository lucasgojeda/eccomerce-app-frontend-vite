import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


export const ProductTabNav = ({ setValue, value }) => {

  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down('sm'));
  const md = useMediaQuery(theme.breakpoints.down('md'));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className='container_ProductTabNav'>
      <Tabs
        onChange={handleChange}
        value={value}
        aria-label="Tabs where selection follows focus"
        selectionFollowsFocus
      >
        {
          (sm || md)
          &&
          <Tab label="Detalles" />
        }

        <Tab label="Envio" />
        <Tab label="Devolución" />
      </Tabs>
    </Box>
  );
}
