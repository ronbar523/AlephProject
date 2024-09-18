import { TableCell, Tooltip } from "@mui/material";

const DescriptionBody = ({ item }) => {
    
  const truncateText = (text, length) =>
    text.length > length ? text.substring(0, length) + "..." : text;

  return (
    <TableCell>
      <Tooltip
        title={item.description}
        arrow
        PopperProps={{
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, 10],
              },
            },
          ],
        }}
      >
        <span>{truncateText(item.description, 50)}</span>
      </Tooltip>
    </TableCell>
  );
};

export default DescriptionBody;
