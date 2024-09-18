import StatusSwitch from "../Switch/StatusSwitch";
import StatusInput from "../Input/StatusInput";
import StatusSelect from "../Select/StatusSelect";

const StatusOptions = ({
  objType,
  status,
  setStatus,
  validStatus,
  setValidStatus,
}) => {
  
  const type = objType.fields[0].type;

  return (
    <>
      {type === "boolean" ? (
        <StatusSwitch setStatus={setStatus} setValidStatus={setValidStatus} />
      ) : type === "text" ? (
        <StatusInput
          status={status}
          setStatus={setStatus}
          validStatus={validStatus}
          setValidStatus={setValidStatus}
        />
      ) : type === "select" ? (
        <StatusSelect
          status={status}
          setStatus={setStatus}
          validStatus={validStatus}
          setValidStatus={setValidStatus}
        />
      ) : null}
    </>
  );
};

export default StatusOptions;
