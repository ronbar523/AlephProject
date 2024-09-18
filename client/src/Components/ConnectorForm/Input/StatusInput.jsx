import { TextField } from "@mui/material";
import { useEffect, useState } from "react";

const STATUS_REGEX = /^[A-Za-z]{3,15}$/;

const StatusInput = ({ status, setStatus, validStatus, setValidStatus }) => {
  const [statusFocus, setStatusFocus] = useState(true);

  useEffect(() => {
    if (status === " ") {
      setStatus("");
    } else {
      if (status[0] === " ") {
        let str = status.substr(1);
        setStatus(str);
      } else {
        const result = STATUS_REGEX.test(status);
        setValidStatus(result);
      }
    }
  }, [status]);

  return (
    <TextField
      required
      size="small"
      label="Status"
      variant="outlined"
      error={!validStatus && !statusFocus}
      onChange={(e) => setStatus(e.target.value)}
      onFocus={() => setStatusFocus(true)}
      onBlur={() => setStatusFocus(false)}
      value={status}
      helperText={
        !validStatus ? "Status must be between 3-15 letters" : "Valid status"
      }
    />
  );
};

export default StatusInput;
