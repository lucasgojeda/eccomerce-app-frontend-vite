import { useNavigate } from "react-router";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { SearchBar } from "../../../ui";

export const NavbarUnlogged = () => {
  const navigate = useNavigate();

  return (
    <div className="container_largueUnloggedBar">
      <div className="container_Ingresar" onClick={() => navigate("login")}>
        <AccountCircleIcon />
        <h3>Ingresar</h3>
      </div>
      <div className="container_Search">
        <SearchBar />
      </div>
    </div>
  );
};
