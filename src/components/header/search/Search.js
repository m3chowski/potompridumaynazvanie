import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

import "./search.css";

export const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const onChangeSearch = (event) => setSearchValue(event.target.value);

  console.log(searchValue);
  return (
    <div className="search">
      <TextField
        sx={{ width: "350px" }}
        id="outlined-basic"
        label="Search"
        variant="outlined"
        value={searchValue}
        onChange={onChangeSearch}
      />
    </div>
  );
};
