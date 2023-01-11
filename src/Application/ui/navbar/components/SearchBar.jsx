/** Libraries */
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router";

import { Box } from "@mui/material";

import InputBase from "@mui/material/InputBase";
import queryString from "query-string";

import { styled } from "@mui/material/styles";

/** Material UI - Icons */
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

/** Components */
import { FilterMenu } from "../../../ui";

/** Custom hooks */
import { useProductsStore } from "../../../../hooks";

/** Material UI - Custom components */
export const SearchContainer = styled("div")(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  width: '100%'
}));

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#fff",
  marginLeft: 0,
  marginRight: 0,
  width: "auto",
  border: "1px solid #707B7C",
  boxShadow: "2.5px 2.5px 5px rgba(167, 164, 164, 0.2)",
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      width: "30vw",
      "&:focus": {
        width: "32.5vw",
      },
    },
    [theme.breakpoints.between("sm", "lg")]: {
      width: "30vw",
      "&:focus": {
        width: "32.5vw",
      },
    },
  },
}));

export const CloseIconButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: "85%",
  [theme.breakpoints.down("sm")]: {
    left: "80%",
  },
}));

/** TODO: Implementar sistema de busquedas. */
export const SearchBar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { startLoadProducts } = useProductsStore();

  /** Text to search */
  const [searchText, setSearchText] = useState("");

  /** Filters */
  const filterBy = "price";
  const [orderBy, setOrderBy] = useState("desc");

  const handleOrderBy = (value) => {
    setOrderBy(value);

    if (pathname !== "search") navigate("/search");

    if (!searchText) return;
    if (searchText === "") return;
    if (searchText === " ") return;

    startLoadProducts(filterBy, value, searchText);
  }

  /** Search */
  const handleInputChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };

  const handleCloseButton = () => {
    setSearchText("");
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (pathname !== "search") navigate("/search");

    if (!searchText) return;
    if (searchText === "") return;
    if (searchText === " ") return;

    startLoadProducts(filterBy, orderBy, searchText);
  };

  return (
    <SearchContainer>

      {
        (pathname === "/search")
        &&
        <FilterMenu orderBy={orderBy} handleOrderBy={handleOrderBy} />
      }

      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>

        <form onSubmit={handleSearch}>
          <StyledInputBase
            onChange={handleInputChange}
            type="text"
            name="searchText"
            autoComplete="off"
            value={searchText}
          />
        </form>

        {searchText !== "" && (
          <CloseIconButton onClick={handleCloseButton} color="inherit">
            <CloseIcon />
          </CloseIconButton>
        )}
      </Search>
    </SearchContainer>
  );
};
