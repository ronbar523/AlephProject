import { TableCell } from "@mui/material";

const StatusBody = ({
    item
}) => {
    return ( <TableCell>{item.status}</TableCell> );
}
 
export default StatusBody;