import React, { memo, useEffect, useRef, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Home() {
  useEffect(() => {}, []);
  function createData(name, pasword, firsName, numberPhone) {
    return { name, pasword, firsName, numberPhone };
  }
  const data = JSON.parse(localStorage.getItem("users")) ?? [];
  const rows = data.filter(({ name, pasword, firsName, numberPhone }) => {
    return createData(name, pasword, firsName, pasword);
  });
  return (
    <div className="vite">
      <div className="table">
        <TableContainer className="table" component={Paper}>
          <Table
            className="table"
            sx={{ maxWidth: 750 }}
            aria-label="simple table"
          >
            <TableHead className="table">
              <TableRow>
                <TableCell style={{ fontSize: "19px" }}>Username</TableCell>
                <TableCell style={{ fontSize: "19px" }} align="right">
                  Password
                </TableCell>
                <TableCell style={{ fontSize: "19px" }} align="right">
                  FirsName
                </TableCell>
                <TableCell style={{ fontSize: "19px" }} align="right">
                  Phone number
                </TableCell>
                <TableCell style={{ fontSize: "19px" }} align="right">
                  Delete
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.pasword}</TableCell>
                  <TableCell align="right">{row.firsName}</TableCell>
                  <TableCell align="right">{row.numberPhone}</TableCell>
                  <TableCell align="right">
                    <IconButton
                      onChange={() => {
                        console.log(1);
                      }}
                      aria-label="delete"
                      size="large"
                    >
                      <DeleteIcon color="error" fontSize="inherit" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
