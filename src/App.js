import {useRoutes} from "react-router-dom";
import appRoutes from "./routes";
import TopBar from "./components/top bar";
import SideBar from "./components/SideBar";
function App() {
  let router = useRoutes(appRoutes)
  let isPage = router.props.match.route.path
  if (isPage === "*"){
    return (
        <>
          {router}
        </>
    );
  } else {
    return (
        <>
            <TopBar />
            <SideBar/>
            <div className="absolute top-[4rem] left-80 w-[calc(100%-20rem)]">
                {router}
            </div>

        </>
    );
  }
}

export default App;
