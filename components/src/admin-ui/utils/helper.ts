export function classnames(o: { [key: string]: boolean | undefined | string }): string {
  return Object.keys(o)
    .reduce((acc: Array<string>, k: string) => {
      if (o[k]) {
        acc.push(k);
      }
      return acc;
    }, [])
    .join(" ");
}

/**
 * This lets us clear the value and still update the input render
 */
export function getValue(
  value: string | undefined | string[] | number
): string | undefined | string[] | number {
  if (value === "") return value;
  if (!value) return undefined;
  return value;
}
