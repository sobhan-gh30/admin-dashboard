import Routes from "./routes";
import {useRoutes} from "react-router-dom";
import appRoutes from "./routes";
function App() {
  let router = useRoutes(appRoutes)
  return (
    <>
      {router}
    </>
  );
}

export default App;
