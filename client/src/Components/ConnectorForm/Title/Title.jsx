import { Typography } from "@mui/material";

const Title = ({
    objType
}) => {
  return (
    <Typography variant="h5" gutterBottom sx={{ textAlign: "center" }}>
      Create Connector ({objType.name})
    </Typography>
  );
};

export default Title;
