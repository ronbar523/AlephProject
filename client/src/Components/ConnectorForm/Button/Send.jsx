import { useCallback, useState } from "react";
import { createConnector } from "../../../Services/ConnectorService";
import { Button } from "@mui/material";

const Send = ({
  objType,
  name,
  status,
  description,
  validName,
  url,
  token,
  validDescription,
  validUrl,
  validToken,
  validStatus,
  setSnackbarMessage,
  setSnackbarSeverity,
  setOpenSnackbar,
}) => {
  const [disabled, setDisabled] = useState(false);

  const connectorTypeId = objType._id
  const isCredentials = objType.fields[0].isCredentials;

  const sendForm = useCallback(async () => {
    try {
      setDisabled(true);
      const connectorObj = {
        name: name,
        status: status,

        description: description,
        config: { url: url },

        credentials: { token: token },
      };

      await createConnector(connectorTypeId, connectorObj);
      setSnackbarMessage("Connector created successfully!");
      setSnackbarSeverity("success");
      setOpenSnackbar(true);
      setTimeout(() => {
        window.location = "/";
      }, 500);
    } catch (err) {
      setDisabled(false);
      setSnackbarMessage("Failed to create connector. Please try again.");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    }
  }, [name, status, description, url, token]);

  return (
    <Button
      sx={{ height: 35, width: "100%", textTransform: "unset", mt: "-15px" }}
      variant={
        validName && validDescription && validUrl && validToken
          ? "contained"
          : "outlined"
      }
      disabled={
        disabled ||
        !validName ||
        !validDescription ||
        !validUrl ||
        !validStatus ||
        (!validToken && isCredentials)
      }
      onClick={sendForm}
    >
      Send
    </Button>
  );
};

export default Send;
