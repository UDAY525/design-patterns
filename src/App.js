import CurrentUserLoader from "./components/current-user-loader";
import ResourceLoader from "./components/resource-loader";
import { UserInfo } from "./components/user-info";
function App() {
  return (
    <>
      <ResourceLoader resourceName={"user"} resourceUrl={"/users/2"}>
        <UserInfo />
      </ResourceLoader>
      <CurrentUserLoader userId={"3"}>
        <UserInfo />
      </CurrentUserLoader>

      <CurrentUserLoader userId={"2"}>
        <UserInfo />
      </CurrentUserLoader>

      <CurrentUserLoader userId={"1"}>
        <UserInfo />
      </CurrentUserLoader>
    </>
  );
}

export default App;
