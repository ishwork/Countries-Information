import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";

import { fetchAllCountriesAsMiddleWare } from "../redux/actions/allCountriesAction";
import CountriesTableHeader from "../components/CountriesTableHeader";
import CountriesTableBody from "../components/CountriesTableBody";
import SearchBar from "../components/SearchBar";
import { InititalState } from "../redux/store/store";
import { Country } from "../types";

function Home() {
  const styles = useStyles();
  const dispatch = useDispatch();
  const allCountries = useSelector((state: InititalState) => state.countries.countriesData);
  const error = useSelector((state: InititalState) => state.countries.error);
  const loading = useSelector((state: InititalState) => state.countries.loading);
  const [search, setSearch] = useState<string>("");

  //dispatch action to fetch all countries data
  useEffect(() => {
    //if (allCountries) return;
    dispatch(fetchAllCountriesAsMiddleWare());
  }, [dispatch]);

  if (error) {
    return <p>Something went wrong</p>;
  }

  if (loading) {
    return <p>Loading countries...</p>;
  }

  const SearchHandler = (event: any) => {
    setSearch(event.target.value);
  };

  //search country from search bar - ensure allCountries is always an array
  const countriesArray = Array.isArray(allCountries) ? allCountries : [];
  const filteredCountries = countriesArray.filter((item: Country) => {
    if (search === "") {
      return item;
    } else if (item.name.common.toLowerCase().includes(search.toLowerCase())) {
      return item;
    }
    return false; // Fix array-callback-return warning
  });

  return (
    <div>
      <div className={styles.homePageTitle}>
        <Typography variant="h3" color="DodgerBlue">COUNTRIES DATA</Typography>
        <Typography variant="h4" className={styles.titleText}>
          Get Information About Countries
        </Typography>
      </div>
      <div className={styles.searchFavorite}>
        <div className={styles.search}>
          <SearchBar onChange={SearchHandler} />
        </div>
        <div className={styles.favorite}>
          <Link to="/country/favourites" className={styles.favoriteLink}>
            <Button variant="outlined">See Favorite Countries</Button>
          </Link>
        </div>
      </div>
      <div>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <CountriesTableHeader />
            <CountriesTableBody
            filteredCountries={filteredCountries}
            />
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default Home;

const useStyles = makeStyles((theme) => ({
  homePageTitle: {
    width: "100%",
    textAlign: "center",
    marginTop: 50,
    marginBottom: 50,
  },
  titleText: {
    color: "orange",
  },
  searchFavorite: {
    marginBottom: 100,
  },
  search: {
    float: "left",
    marginLeft: 50,
  },
  favorite: {
    float: "right",
    marginRight: 50,
  },
  favoriteLink: {
    textDecoration: "none",
  },
}));
