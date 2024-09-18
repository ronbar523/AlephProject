import { useEffect, useState } from "react";
import { findAllConnector } from "../Services/ConnectorService";
import CreateConnector from "../Components/Home/CreateConnector";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import NameHead from "../Components/Home/TableConnector/HeadTable/NameHead";
import StatusHead from "../Components/Home/TableConnector/HeadTable/StatusHead";
import DescriptionHead from "../Components/Home/TableConnector/HeadTable/DescriptionHead";
import NameBody from "../Components/Home/TableConnector/BodyTable/NameBody";
import StatusBody from "../Components/Home/TableConnector/BodyTable/StatusBody";
import DescriptionBody from "../Components/Home/TableConnector/BodyTable/DescriptionBody";

const Home = () => {
  const [connectorArr, setConnectorArr] = useState([]);
  const [isLodainConnector, setIsLodationConnector] = useState(true);

  // Fetch and set connectors from the data source when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        await findAllConnector().then((res) => {
          setConnectorArr(res.data.response);
          setIsLodationConnector(false);
        });
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {!isLodainConnector ? (
        <>
          <CreateConnector />
          <TableContainer
            component={Paper}
            sx={{
              width: "97%",
              maxHeight: "75vh",
              overflow: "auto",
              mt: "15px",
              ml: "15px",
            }}
          >
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <NameHead
                    connectorArr={connectorArr}
                    setConnectorArr={setConnectorArr}
                  />
                  <StatusHead
                    connectorArr={connectorArr}
                    setConnectorArr={setConnectorArr}
                  />
                  <DescriptionHead />
                </TableRow>
              </TableHead>
              <TableBody>
                {connectorArr.map((item) => (
                  <TableRow key={item._id}>
                    <NameBody item={item} />
                    <StatusBody item={item} />
                    <DescriptionBody item={item} />
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div className="footer-home"></div>
        </>
      ) : null}
    </>
  );
};

export default Home;
