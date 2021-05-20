export function classnames(o) {
  return Object.keys(o).reduce((acc, k) => {
    if (o[k]) {
      acc.push(k);
    }
    return acc;
  }, []).join(" ");
}
export function getValue(value) {
  if (value === "")
    return value;
  if (!value)
    return void 0;
  return value;
}
