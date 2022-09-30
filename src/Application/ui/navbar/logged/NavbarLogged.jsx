import { CartItem } from '../../../ui';
import { NotificationsItem } from '../../../ui';
import { SearchBar } from '../../../ui';
import { MenuDrawer } from '../../../ui';
// import { DialogLogout } from '../../../../dashboard/ui/alerts/DialogLogout';


export const NavbarLogged = () => {

  return (
    <div
      className='container_largueLoggedBar'
    >
      <div className='container_Menu'>
        <MenuDrawer />
      </div>

      <div className='container_items'>

        <div className='container_CartItem'>
          <CartItem />
          <NotificationsItem />
        </div>

        <div className='container_Search'>
          <SearchBar />
        </div>

      </div>

    </div>
  );
}; 