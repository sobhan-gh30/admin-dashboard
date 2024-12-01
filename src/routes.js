import Home from "./Pages/Home"
import UserList from "./Pages/userList";
import NewUser from "./Pages/newUser";
import NotFount from "./Pages/404";

let appRoutes =[
    {path : "/" , element : <Home />},
    {path : "/allUsers" , element : <UserList/>},
    {path : "/newUser" , element : <NewUser />},
    { path: "*", element: <NotFount /> }
]
export default appRoutes