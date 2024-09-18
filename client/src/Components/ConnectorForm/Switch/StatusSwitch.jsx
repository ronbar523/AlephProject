import { Switch, FormControlLabel, Box } from "@mui/material";
import { useEffect, useState } from "react";

const StatusSwitch = ({ setStatus, setValidStatus }) => {
  const [booleanStatus, setBooleanStatus] = useState(false);

  useEffect(() => {
    setValidStatus(true);
  }, []);

  useEffect(() => {
    if (booleanStatus) {
      setStatus("Available");
    } else {
      setStatus("Unavailable");
    }
  }, [booleanStatus]);

  return (
    <Box display="flex" justifyContent="flex-start" ml="-10px">
    <FormControlLabel
    sx={{ mb: "10px"}}
      control={
        <Switch
          checked={booleanStatus}
          onChange={(e) => setBooleanStatus(e.target.checked)}
          inputProps={{ "aria-label": "controlled" }}
        />
      }
      label="Status"
      labelPlacement="start"
    />
    </Box>
  );
};

export default StatusSwitch;
