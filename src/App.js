import {useRoutes} from "react-router-dom";
import appRoutes from "./routes";
function App() {
  let router = useRoutes(appRoutes)
  let isPage = router.props.match.route.path
  console.log(isPage)
  if (isPage === "*"){
    return (
        <>
          {router}
        </>
    );
  } else {
    return (
        <>
          {router}
        </>
    );
  }
}

export default App;
