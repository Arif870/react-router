// eslint-disable-next-line no-unused-vars
import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const FriendDetails = () => {
  const friendDetails = useLoaderData();
  const navigate = useNavigate();

  return (
    <div>
      <h3>Username : {friendDetails.username}</h3>
      <p>Email: {friendDetails.email}</p>
      <p>Phone: {friendDetails.phone}</p>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default FriendDetails;
