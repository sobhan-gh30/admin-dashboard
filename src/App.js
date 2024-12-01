import {useRoutes} from "react-router-dom";
import appRoutes from "./routes";
function App() {
  let router = useRoutes(appRoutes)
  console.log(router)
  return (
    <>
      {router}
    </>
  );
}

export default App;
