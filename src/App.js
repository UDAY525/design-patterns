import CurrentUserLoader from "./components/current-user-loader";
import { UserInfo } from "./components/user-info";
function App() {
  return (
    <>
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
