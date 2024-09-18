import { useNavigate } from 'react-router-dom';
import { Button } from "@mui/material";

const Next = ({ chooseTypeId, objType }) => {

  const navigate = useNavigate();

  return (
    <>
      <Button
        sx={{
          ml: "15px",
          mt: "10px",
          border: "2px solid #007BFF",
          borderRadius: "8px",
          textTransform: "unset",
          padding: "6px 12px",
          backgroundColor: "transparent",
          color: "#007BFF",
          fontSize: "14px",
          fontWeight: "bold",
          boxShadow: "none",
          width: "100px",

          "&:hover": {
            borderColor: "#0056b3",
            backgroundColor: "transparent",
            color: "#0056b3",
          },

          "&:disabled": {
            borderColor: "#d6d6d6",
          },
        }}
        onClick={() => navigate(`/create_connector/${chooseTypeId}`, { state: { objType } })}
        disabled={chooseTypeId === ""}
      >
        Next
      </Button>
    </>
  );
};

export default Next;
