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
            <div className="flex mt-16">
                <SideBar/>
                <div className="lg:w-5/6 w-full">
                    {router}
                </div>
            </div>


        </>
    );
  }
}

export default App;
