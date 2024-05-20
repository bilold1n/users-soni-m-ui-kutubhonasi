import React, { memo, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
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
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("users")) ?? []
  );

  function deleteItem(params) {
    const filterItem = data.filter((row) => row.id !== params);
    console.log(filterItem);
    localStorage.setItem("users", JSON.stringify(filterItem));
    setData(JSON.parse(localStorage.getItem("users")));
  }

  function submit() {
    localStorage.setItem("user", JSON.stringify(false));
    navigate("/");
  }
  return (
    <div className="vite">
      <div className="oil">
        <Link to={"/signup"} className="btn btn4 yan" onClick={submit}>
          Creat users
        </Link>
      </div>
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
              {data.map((row) => (
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
                      onClick={() => {
                        const form = data.map(({ id }) => {
                          console.log(data);
                          console.log(id);
                          deleteItem(id);
                          return id;
                        });
                        console.log(form);
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
