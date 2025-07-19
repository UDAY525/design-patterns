import axios from "axios";
import React, { useState, useEffect } from "react";

const ResourceLoader = ({ resourceUrl, resourceName, children }) => {
  const [resource, setResource] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(resourceUrl);
        console.log("Fetched user Resource:", response.data);
        setResource(response.data);
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    })();
  }, [resourceUrl]);

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

export default ResourceLoader;
