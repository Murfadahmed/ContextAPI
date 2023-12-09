import React, { useContext } from "react";
import UserContext from "../Context/userContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <h2>Please Login first!</h2>;
  return <h2>welcome {user.name}</h2>
}

export default Profile;
