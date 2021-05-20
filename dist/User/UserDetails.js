import React, {useEffect, useState} from "../_snowpack/pkg/react.v17.0.2.js";
export const PlayerDetails = (props) => {
  const [details, setDetails] = useState();
  const getDetails = async () => {
    const newDetails = {name: "foo", email: "foo@example.com"};
    setDetails(newDetails);
  };
  useEffect(() => {
    getDetails();
  }, [props.get.id]);
  return details && props.get?.id ? /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("label", {
    className: "bg-blue-500"
  }, "Name:"), " ", details.name, /* @__PURE__ */ React.createElement("label", null, "Balance:"), " ", details.email)) : /* @__PURE__ */ React.createElement(React.Fragment, null);
};
