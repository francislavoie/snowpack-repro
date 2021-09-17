import { a as react, R as React } from "./vendor.a53afe65.js";
const PlayerDetails = (props) => {
  var _a;
  const [details, setDetails] = react.exports.useState();
  const getDetails = async () => {
    const newDetails = { name: "foo", email: "foo@example.com" };
    setDetails(newDetails);
  };
  react.exports.useEffect(() => {
    getDetails();
  }, [props.get.id]);
  return details && ((_a = props.get) == null ? void 0 : _a.id) ? /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("label", {
    className: "bg-blue-500"
  }, "Name:"), " ", details.name, /* @__PURE__ */ React.createElement("label", null, "Balance:"), " ", details.email)) : /* @__PURE__ */ React.createElement(React.Fragment, null);
};
export { PlayerDetails };
