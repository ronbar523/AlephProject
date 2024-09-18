import { useState } from "react";
import { useLocation } from "react-router-dom";

import { Box } from "@mui/material";
import Title from "../Components/ConnectorForm/Title/Title";
import NameInput from "../Components/ConnectorForm/Input/NameInput";
import DescriptionInput from "../Components/ConnectorForm/Input/DescriptionInput";
import UrlInput from "../Components/ConnectorForm/Input/UrlInput";
import TokenInput from "../Components/ConnectorForm/Input/TokenInput";
import Send from "../Components/ConnectorForm/Button/Send";
import SnackBar from "../Components/ConnectorForm/SnackBar/SnackBar";
import StatusOptions from "../Components/ConnectorForm/StatusOptions/StatusOptions";

const ConnectorForm = () => {
  const location = useLocation();
  const { objType } = location.state || {};
  const isCredentials = objType.fields[0].isCredentials;

  const [name, setName] = useState("");
  const [validName, setValidName] = useState();

  const [description, setDescription] = useState("");
  const [validDescription, setValidDescription] = useState();

  const [url, setUrl] = useState("");
  const [validUrl, setValidUrl] = useState("");

  const [token, setToken] = useState("");
  const [validToken, setValidToken] = useState();

  const [status, setStatus] = useState("");
  const [validStatus, setValidStatus] = useState();

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "470px",
            border: "2px solid #ccc",
            borderRadius: "10px",
            p: "17px 30px 21px 30px",
            gap: 3,
          }}
        >
          {/* Title */}
          <Title objType={objType} />

          {/* Name Field */}
          <NameInput
            validName={validName}
            setValidName={setValidName}
            name={name}
            setName={setName}
          />

          {/* Description Field */}
          <DescriptionInput
            description={description}
            setDescription={setDescription}
            validDescription={validDescription}
            setValidDescription={setValidDescription}
          />

          {/* URL Field */}
          <UrlInput
            url={url}
            setUrl={setUrl}
            validUrl={validUrl}
            setValidUrl={setValidUrl}
          />

          {/* Token Field */}
          <TokenInput
            objType={objType}
            token={token}
            setToken={setToken}
            validToken={validToken}
            setValidToken={setValidToken}
          />

          {/* Status Switch */}
          <StatusOptions
            objType={objType}
            status={status}
            setStatus={setStatus}
            validStatus={validStatus}
            setValidStatus={setValidStatus}
          />

          {/* Submit Button */}
          <Send
            objType={objType}
            name={name}
            status={status}
            description={description}
            validName={validName}
            url={url}
            token={token}
            validDescription={validDescription}
            validUrl={validUrl}
            validToken={validToken}
            validStatus={validStatus}
            setSnackbarMessage={setSnackbarMessage}
            setSnackbarSeverity={setSnackbarSeverity}
            setOpenSnackbar={setOpenSnackbar}
          />
        </Box>
        {/* SnackBar */}
        <SnackBar
          openSnackbar={openSnackbar}
          setOpenSnackbar={setOpenSnackbar}
          snackbarSeverity={snackbarSeverity}
          snackbarMessage={snackbarMessage}
        />
      </Box>
      <div className={isCredentials ? "foot-form1" : "foot-form2"}></div>
    </>
  );
};

export default ConnectorForm;
