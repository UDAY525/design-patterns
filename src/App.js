import axios from "axios";
import CurrentUserLoader from "./components/current-user-loader";
import DataSource from "./components/data-source";
import ResourceLoader from "./components/resource-loader";
import { UserInfo } from "./components/user-info";

const getDataFromServer = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

function App() {
  return (
    <>
      <DataSource
        getData={async () => getDataFromServer("/users/2")}
        resourceName={"user"}
      >
        <UserInfo />
      </DataSource>
      <ResourceLoader resourceName={"user"} resourceUrl={"/users/2"}>
        <UserInfo />
      </ResourceLoader>
      <CurrentUserLoader userId={"3"}>
        <UserInfo />
      </CurrentUserLoader>
    </>
  );
}

export default App;
