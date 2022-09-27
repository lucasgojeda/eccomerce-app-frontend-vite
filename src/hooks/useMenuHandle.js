import { useState } from "react";


export const useMenuHandle = () => {

    const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {

    if (menuOpen) {

      setMenuOpen(false);
    } else {

      setMenuOpen(true);
    }
  }



    return {
        //* Propiedades
        menuOpen,

        //* Métodos
        handleMenu,
    }
}
