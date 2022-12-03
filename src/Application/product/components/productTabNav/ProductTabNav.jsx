/** Libraries */
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { styled } from "@mui/material/styles";

/** Material UI - Custom components */
const ProductTabNavContainer = styled("div")(({ theme }) => ({
  width: '100%',
  marginBottom: '2.5vh',
}));

export const ProductTabNav = ({ setValue, value }) => {

  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down('sm'));
  const md = useMediaQuery(theme.breakpoints.down('md'));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ProductTabNavContainer>
      <Tabs
        onChange={handleChange}
        value={value}
        aria-label="Tabs where selection follows focus"
        selectionFollowsFocus
      >
        <Tab label="Detalles" />
        <Tab label="Envio" />
        <Tab label="Devolución" />
      </Tabs>
    </ProductTabNavContainer>
  );
}
