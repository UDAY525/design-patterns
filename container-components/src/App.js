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

const getDataFromLocalStorage = (key) => () => {
  return localStorage.getItem(key);
};

const Message = ({ msg }) => <h1>{msg}</h1>;

function App() {
  return (
    <>
      <DataSource
        getData={() => getDataFromLocalStorage("token")}
        resourceName={"msg"}
      >
        <Message />
      </DataSource>
      <DataSourceRender
        getData={async () => getDataFromServer("/users/1")}
        resourceName={"user"}
        render={(resource) => <UserInfo user={resource} />}
      ></DataSourceRender>

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
