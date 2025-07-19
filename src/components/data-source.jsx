import axios from "axios";
import React, { useState, useEffect } from "react";

const DataSource = ({ getData = () => {}, resourceName, children }) => {
  const [resource, setResource] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const response = await getData();
        console.log("Fetched user Resource:", response);
        setResource(response);
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    })();
  }, [getData]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: resource });
        }
        return child;
      })}
    </>
  );
};

export default DataSource;
