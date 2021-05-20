import React, {useEffect, useState} from "react";

export type Nullable<T> = T | null;

type Props = {
  get: { id: number };
};

type Details = {
  name: string;
  email: string;
};

export const PlayerDetails = (props: Props) => {
  const [details, setDetails] = useState<Nullable<Details>>();
  const getDetails = async () => {
    const newDetails = {name: "foo", email: "foo@example.com"};
    setDetails(newDetails);
  };

  useEffect(() => {
    getDetails();
  }, [props.get.id]);

  return details && props.get?.id ? (
    <div>
      <>
        <label>Name:</label> {details.name}
        <label>Balance:</label> {details.email}
      </>
    </div>
  ) : (
    <></>
  );
};
