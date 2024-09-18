import { useEffect, useState } from "react";
import { findAllTypes } from "../Services/TypeService";
import { Box } from "@mui/material";
import TypeCard from "../Components/TypeList/TypeCard";
import Next from "../Components/TypeList/Next";

const TypeList = () => {
  const arrCategories = ["Cloud provider", "Data lake", "Edr", "Saas", "Vpn"];
  const [arrTypes, setArrTypes] = useState([]);
  const [isLoadingTypes, setIsLoadingTypes] = useState(true);
  const [chooseTypeId, setChooseTypeId] = useState("");
  const [objType, setObjType] = useState({});

  // Fetch and set type connectors from the data source when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        await findAllTypes().then((res) => {
          setArrTypes(res.data.response);
          setIsLoadingTypes(false);
        });
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  // Organize items into categories using the 'category' property
  const itemsByCategory = arrTypes.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});


  return (
    <>
      {!isLoadingTypes ? (
        <>
          <Next
            chooseTypeId={chooseTypeId}
            objType={objType}
          />
          <Box
            sx={{
              flex: 1,
              height: "calc(100vh - 120px)",
              overflowY: "auto",
              p: 2,
              bgcolor: "#f5f5f5",
            }}
          >
            {arrCategories.map((category, index) => {
              return (
                <div key={index} sx={{ mb: 2 }}>
                  <h2 className="category-title">{category} </h2>
                  <Box className="card-container">
                    {itemsByCategory[category]?.map((item) => (
                      <div key={item._id}>
                        <TypeCard
                          item={item}
                          chooseTypeId={chooseTypeId}
                          setChooseTypeId={setChooseTypeId}
                          objType={objType}
                          setObjType={setObjType}
                        />
                      </div>
                    ))}
                  </Box>
                </div>
              );
            })}
          </Box>
          <div className="foot-typeList"></div>
        </>
      ) : null}
    </>
  );
};

export default TypeList;
