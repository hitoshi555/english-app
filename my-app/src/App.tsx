import React from "react";
import "./App.css";
import { Container, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import axios from "axios";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleClickShowPassword = async () => {
    console.log("search:" + searchTerm);
    try {
      const aa = await axios.get(
        "https://dictionary.cambridge.org/dictionary/english/${searchTerm}"
      );

      console.log(aa);
    } catch (err) {
      console.log("Oops, incorrect credentials.");
    }
    window.open(
      `https://dictionary.cambridge.org/dictionary/english/${searchTerm}`
    );
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      console.log("do validate");
      window.open(
        `https://dictionary.cambridge.org/dictionary/english/${searchTerm}`
      );
    }
  };

  return (
    <div>
      <Container maxWidth="md" sx={{ mt: 20 }}>
        <TextField
          id="search"
          type="search"
          label="Search"
          value={searchTerm}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Container>
    </div>
  );
}

export default App;
