import axios from "axios";
import CurrentUserLoader from "./components/current-user-loader";
import DataSource from "./components/data-source";
import ResourceLoader from "./components/resource-loader";
import { UserInfo } from "./components/user-info";
import DataSourceRender from "./components/data-source-with-render";

const getDataFromServer = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

function App() {
  return (
    <>
      <DataSourceRender
        getData={async () => getDataFromServer("/users/1")}
        resourceName={"user"}
        render={(resource) => <UserInfo user={resource} />}
      ></DataSourceRender>
      <DataSource
        getData={async () => getDataFromServer("/users/1")}
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
