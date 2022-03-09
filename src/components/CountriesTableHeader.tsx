import React from "react";
import { makeStyles } from "@mui/styles";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  styleTableHead: {
    backgroundColor: "DodgerBlue",
  },
  headerTitle: {
    color: "whitesmoke",
  },
}));

function CountriesTableHeader() {
  const styles = useStyles();

  return (
    <TableHead className={styles.styleTableHead}>
      <TableRow>
        <TableCell align="center">
          <Typography className={styles.headerTitle}>FLAG</Typography>
        </TableCell>
        <TableCell align="center">
          <Typography className={styles.headerTitle}>NAME</Typography>
        </TableCell>
        <TableCell align="center">
          <Typography className={styles.headerTitle}>POPULATION</Typography>
        </TableCell>
        <TableCell align="center">
          <Typography className={styles.headerTitle}>REGION</Typography>
        </TableCell>
        <TableCell align="center">
          <Typography className={styles.headerTitle}>LANGUAGES</Typography>
        </TableCell>
        <TableCell align="center">
          <Typography className={styles.headerTitle}>FAVORITES</Typography>
        </TableCell>
      </TableRow>
    </TableHead>
  );
}

export default CountriesTableHeader;
