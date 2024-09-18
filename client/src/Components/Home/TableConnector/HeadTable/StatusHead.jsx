import { useState } from "react";
import { IconButton, TableCell } from "@mui/material";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

const StatusHead = ({ connectorArr, setConnectorArr }) => {
  const [sortStatus, setSortStatus] = useState("asc");

  // Determine the new sorting direction for the Status
  const handleSortStatus = (column) => {
    const newSortStatus = sortStatus[column] === "asc" ? "desc" : "asc";
    const sortedData = [...connectorArr].sort((a, b) => {
      const aValue = a[column].toLowerCase();
      const bValue = b[column].toLowerCase();

      if (aValue < bValue) return newSortStatus === "asc" ? -1 : 1;
      if (aValue > bValue) return newSortStatus === "asc" ? 1 : -1;
      return 0;
    });
    setConnectorArr(sortedData);
    setSortStatus({
      ...sortStatus,
      [column]: newSortStatus,
    });
  };

  return (
    <TableCell>
      <b>Status</b>
      <IconButton
        onClick={() => handleSortStatus("status")}
        size="small"
        sx={{
          p: 0,
          fontSize: "small",
        }}
      >
        {sortStatus.status === "asc" ? <ArrowUpward /> : <ArrowDownward />}
      </IconButton>
    </TableCell>
  );
};

export default StatusHead;
