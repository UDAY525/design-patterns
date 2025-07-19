import { useState, useEffect } from "react";

const DataSourceRender = ({ getData = () => {}, render }) => {
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

  return render(resource);
};

export default DataSourceRender;
