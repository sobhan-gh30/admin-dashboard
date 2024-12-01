import Home from "./Pages/Home"
import UserList from "./Pages/userList";
import NewUser from "./Pages/newUser";

let appRoutes =[
    {path : "/" , element : <Home />},
    {path : "/allUsers" , element : <UserList/>},
    {path : "/newUser" , element : <NewUser />},
    { path: "*", element: <div>Page not found</div> }
]
export default appRoutes;