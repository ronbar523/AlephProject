import { useEffect, useState } from "react";
import { IconButton, TextField } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const RegexToken1 = `/^[0-9]{6,12}$/`;
const RegexToken2 = `/^[a-zA-Z0-9]{6,12}$/`;
const RegexToken3 = `/^[a-zA-Z]{6,12}$/`;

const TokenInput = ({
  objType,
  token,
  setToken,
  validToken,
  setValidToken,
}) => {

  const credentialsFields = objType.fields[0].isCredentials;
  const regexPattern = new RegExp(objType.fields[0].validationRegex);

  const [tokenFocus, setTokenFocus] = useState(true);
  const [showToken, setShowToken] = useState(false);
  const [messageToken, setMessageToken] = useState("");

  useEffect(() => {
    console.log(regexPattern)
    console.log(RegexToken2)
    if (regexPattern == RegexToken1) {
      setMessageToken(
        "Token must consist of only numbers and be between 6 and 12 characters long"
      );
    } else if (regexPattern == RegexToken2) {
      setMessageToken(
        "Token must be alphanumeric and between 6 and 12 characters long"
      );
    } else if (regexPattern == RegexToken3) {
      setMessageToken(
        "Token must consist of only latters and be between 6 and 12 characters long"
      );
    }
  }, []);


  useEffect(() => {
    if (token === " ") {
      setToken("");
    } else {
      if (token[0] === " ") {
        let str = token.substr(1);
        setToken(str);
      } else {
        const result = regexPattern.test(token);
        setValidToken(result);
      }
    }
  }, [token]);

  console.log(messageToken)

  return (
    <>
      {credentialsFields ? (
        <TextField
          required
          autoComplete="off"
          label="Token"
          type={showToken ? "text" : "password"}
          size="small"
          variant="outlined"
          error={!validToken && !tokenFocus}
          onChange={(e) => setToken(e.target.value)}
          onFocus={() => setTokenFocus(true)}
          onBlur={() => setTokenFocus(false)}
          value={token}
          InputProps={{
            endAdornment: (
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowToken(true)}
                onMouseDown={() => setShowToken(false)}
                edge="end"
              >
                {showToken ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            ),
          }}
          helperText={!validToken ? messageToken : "Valid token"}
        />
      ) : null}
    </>
  );
};

export default TokenInput;
