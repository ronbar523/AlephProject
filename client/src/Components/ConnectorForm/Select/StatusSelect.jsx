import { useState } from "react";

import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

const StatusSelect = ({ status, setStatus, validStatus, setValidStatus }) => {
  const arrOptions = ["Available", "Unavailable", "Pending"];

  const [statusFocus, setStatusFocus] = useState(true);
  
  const handleChoose = (e) => {
    setStatus(e.target.value);
    setValidStatus(true)
  }

  return (
    <FormControl
      sx={{
        mb: "5px",
      }}
      error={!validStatus && !statusFocus}
    >
      <InputLabel id="demo-simple-select-label">Select Option</InputLabel>
      <Select
        labelId="status-select-label"
        id="status-select"
        size="small"
        value={status || ""}
        label="Select Option"
        onFocus={() => setStatusFocus(true)}
        onBlur={() => setStatusFocus(false)}
        onChange={(e) => handleChoose(e)}
        required
      >
        {arrOptions.map((item, index) => (
          <MenuItem
            key={index}
            value={item}
            onChange={() => setValidStatus(true)}
          >
            {item}
          </MenuItem>
        ))}
      </Select>
      {!validStatus ? (
        <FormHelperText>You must select an option</FormHelperText>
      ) : <FormHelperText>Valid status</FormHelperText>}
    </FormControl>
  );
};

export default StatusSelect;
