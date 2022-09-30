import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router';

import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';

import { useAuthStore } from '../../../../../../hooks';


export const MenuDrawer = () => {

  const {
    name,
    startLogout
  } = useAuthStore();

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuDrawer = () => {

    if (menuOpen) {

      setMenuOpen(false);
    } else {

      setMenuOpen(true);
    }
  }

  return (
    <div className='container_Menu'>

      <div className='container_menuIcons'>
        <MenuIcon
          className='menuIcon'
          onClick={handleMenuDrawer}
        />

        <h1
          onClick={() => navigate('/')}
          style={{
            visibility: (pathname !== '/') ? 'visible' : 'hidden'
          }}
        >
          Inicio
        </h1>

      </div>


      <div
        className='container_DrawerMenu'
        style={{
          left: (menuOpen) ? 0 : '-100%',
          transition: 'all 0.5s ease',
        }}
      >
        <div className='container_DataUser'>

          <AccountCircle />

          <h1>{name}</h1>

        </div>

        <div className='container_MenuItems'>

          <ul>
            <li><AccountCircle /> Mi Perfíl</li>
            <li onClick={startLogout}>
              <LogoutIcon /> Cerrar Sesión
            </li>
          </ul>

        </div>
      </div>

      {
        (menuOpen)
        &&
        <div
          className='backshadow'
          onClick={handleMenuDrawer}>
        </div>
      }

    </div>
  )
}
