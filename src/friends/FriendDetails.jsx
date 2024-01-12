// eslint-disable-next-line no-unused-vars
import React from "react";
import { useLoaderData } from "react-router-dom";

const FriendDetails = () => {
  const friendDetails = useLoaderData();

  return (
    <div>
      <h3>Username : {friendDetails.username}</h3>
      <p>Email: {friendDetails.email}</p>
    </div>
  );
};

export default FriendDetails;
