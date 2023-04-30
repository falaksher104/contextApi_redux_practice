import { selectField, updateField } from "./features/projectSlice";
import { useDispatch, useSelector } from "react-redux";

const Table = () => {
  const title = useSelector(selectField("title"));
  const description = useSelector(selectField("description"));

  const dispatch = useDispatch();

  const handleUpdateChange = (e, fieldName) => {
    dispatch(updateField({ field: fieldName, value: e.target.value }));
  };
  const array = [
    {
      placeholder: "Enter Title",
      value: title,
      fieldName: "title",
    },
    {
      placeholder: "Enter Description",
      value: description,
      fieldName: "description",
    },
  ];
  return (
    <div>
      <p>Table Data</p>
      <br />
      <br />
      {array.map((elem, index) => {
        return (
          <div key={index}>
            <input
              type="text"
              placeholder={elem.placeholder}
              value={elem.value}
              onChange={(e) => handleUpdateChange(e, elem.fieldName)}
            />
          </div>
        );
      })}
      <br />
      <br />
    </div>
  );
};

export default Table;
