import axios from "axios";
import React, { useState, useEffect } from "react";

const CurrentUserLoader = ({ userId = 55, children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`/users/${userId}`);
        console.log("Fetched user:", response.data);
        setUser(response.data);
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    })();
  }, [userId]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user });
        }
        return child;
      })}
    </>
  );
};

export default CurrentUserLoader;
