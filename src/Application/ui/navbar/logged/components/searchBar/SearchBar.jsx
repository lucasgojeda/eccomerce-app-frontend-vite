import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router";

import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import queryString from "query-string";

import { useProductsStore } from "../../../../../../hooks";

import { FilterMenu } from "../../../../../ui";

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#fff",
  marginLeft: 0,
  marginRight: 0,
  width: "auto",
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

export const SearchBar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { startLoadProducts } = useProductsStore();

  const { q = "" } = queryString.parse(location.search);
  const { c = "" } = queryString.parse(location.search);
  let { page: pagePath = 1 } = queryString.parse(location.search);

  // Text to search
  const [searchText, setSearchText] = useState(q);

  // Filters
  const [filterBy, setFilterBy] = useState("price");
  const [orderBy, setOrderBy] = useState("desc");

  // Flag to refresh search
  const [flagSearch, setFlagSearch] = useState(0);

  // Filters and search
  useEffect(() => {
    startLoadProducts(filterBy, orderBy, searchText, pagePath);
  }, [filterBy, orderBy, flagSearch, pagePath]);

  useEffect(() => {
    if (searchText === "") {
      if (pathname === "/search") {
        navigate("/search");
        setFlagSearch(flagSearch + 1);
      }
    }
  }, [searchText]);

  // Search
  const handleInputChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };

  const handleCloseButton = () => {
    setSearchText("");
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (pathname !== "search") {
      navigate("/search");
    }

    if (searchText !== "") {
      navigate(`/search?q=${searchText}`);
      setFlagSearch(flagSearch + 1);
    } else {
      setFlagSearch(flagSearch + 1);
    }
  };

  //Filter
  const handleOrderByChange = (value) => {
    setOrderBy(value);
  };

  return (
    <div className="container_Search">
      <FilterMenu handleOrderByChange={handleOrderByChange} />

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
          <IconButton
            className="closeIcon"
            onClick={handleCloseButton}
            color="inherit"
          >
            <CloseIcon />
          </IconButton>
        )}
      </Search>
    </div>
  );
};
