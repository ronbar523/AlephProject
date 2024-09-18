import { useState } from "react";
import { IconButton, TableCell } from "@mui/material";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

const NameHead = ({ connectorArr, setConnectorArr}) => {

  const [sortName, setSortName] = useState("asc");

  // Determine the new sorting direction for the Name
  const handleSortName = (column) => {
    const newSortName = sortName[column] === "asc" ? "desc" : "asc";
    const sortedData = [...connectorArr].sort((a, b) => {
      const aValue = a[column].toLowerCase();
      const bValue = b[column].toLowerCase();

      if (aValue < bValue) return newSortName === "asc" ? -1 : 1;
      if (aValue > bValue) return newSortName === "asc" ? 1 : -1;
      return 0;
    });
    setConnectorArr(sortedData);
    setSortName({
      ...sortName,
      [column]: newSortName,
    });
  };


  return (
    <TableCell>
      <b>Name</b>
      <IconButton
        onClick={() => handleSortName("name")}
        size="small"
        sx={{
          p: 0,
          fontSize: "small",
        }}
      >
        {sortName.name === "asc" ? <ArrowUpward /> : <ArrowDownward />}
      </IconButton>
    </TableCell>
  );
};

export default NameHead;
