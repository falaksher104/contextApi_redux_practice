import { useDispatch, useSelector } from "react-redux";
import { updateField, selectField } from "./features/projectSlice";
const User = () => {
  const userName = useSelector(selectField("userName"));
  const emailAddress = useSelector(selectField("emailAddress"));
  const password = useSelector(selectField("password"));
  const title = useSelector(selectField("title"));
  const description = useSelector(selectField("description"));

  const dispatch = useDispatch();

  const handleUpdateChange = (e, fieldName) => {
    dispatch(updateField({ field: fieldName, value: e.target.value }));
  };
  const inputFields = [
    {
      type: "text",
      placeholder: "Enter User Name",
      value: userName,
      fieldName: "userName",
    },
    {
      type: "email",
      placeholder: "Enter Email Address",
      value: emailAddress,
      fieldName: "emailAddress",
    },
    {
      type: "password",
      placeholder: "Enter Password",
      value: password,
      fieldName: "password",
    },
  ];
  return (
    <div>
      <p>User Information</p>

      {inputFields.map((elem, index) => {
        return (
          <div key={index}>
            <br />
            <br />
            <input
              type={elem.type}
              placeholder={elem.placeholder}
              value={elem.value}
              onChange={(e) => handleUpdateChange(e, elem.fieldName)}
            />
            <br />
            <br />
          </div>
        );
      })}
      <button
        onClick={() => {
          console.log({ userName, emailAddress, password, title, description });
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default User;
