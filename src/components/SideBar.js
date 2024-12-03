import LineStyleIcon from '@mui/icons-material/LineStyle';
import {
    AttachMoney,
    BarChart, ChatBubble,
    DynamicFeed,
    MailOutline,
    PermIdentity, Report,
    Storefront,
    Timeline,
    TrendingUp, WorkOutline
} from "@mui/icons-material";
import {Link} from "react-router-dom"

export default function SideBar(){
    return(
        <div className="min-h-[calc(100vh-4rem)] h-fit w-60 xl:w-1/6 bg-slate-100 bg-opacity-40 hidden lg:block sticky top-[4rem] -left-60 lg:left-0 p-3 py-5">
            <div className="w-full">
                <p className="font-semibold text-gray-400">Dashboard</p>
                <ul className="px-1 pb-5">
                    <Link to="/">
                        <li className="flex gap-2 w-full py-2 px-5 hover:bg-slate-200  rounded-lg text-gray-600 hover:text-zinc-800">
                            <LineStyleIcon/>
                            Home
                        </li>
                    </Link>

                    <Link to="/">
                        <li className="flex gap-2 w-full py-2 px-5 bg-red-2 hover:bg-slate-200  rounded-lg text-gray-600 hover:text-zinc-800">
                            <Timeline/>
                            Analytics
                        </li>
                    </Link>

                    <Link to="/">
                        <li className="flex gap-2 w-full py-2 px-5  hover:bg-slate-200  rounded-lg text-gray-600 hover:text-zinc-800">
                            <TrendingUp/>
                            Sales
                        </li>

                    </Link>
                </ul>
            </div>

            <div className="w-full">
                <p className="font-semibold text-gray-400">Quick Menu</p>
                <ul className="px-1 pb-5">

                    <Link to="/allUsers">
                        <li className="flex gap-2 w-full py-2 px-5 hover:bg-slate-200  rounded-lg text-gray-600 hover:text-zinc-800">
                            <PermIdentity />
                            Users
                        </li>
                    </Link>

                    <Link to="/newUser">
                        <li className="flex gap-2 w-full py-2 px-5 bg-red-2 hover:bg-slate-200  rounded-lg text-gray-600 hover:text-zinc-800">
                            <PermIdentity />
                            New User
                        </li>
                    </Link>

                    <Link to="/">
                        <li className="flex gap-2 w-full py-2 px-5 hover:bg-slate-200  rounded-lg text-gray-600 hover:text-zinc-800">
                            <Storefront />
                            Product
                        </li>
                    </Link>

                    <Link to="/">
                        <li className="flex gap-2 w-full py-2 px-5 hover:bg-slate-200  rounded-lg text-gray-600 hover:text-zinc-800">
                            <AttachMoney/>
                            Transaction
                        </li>
                    </Link>

                    <Link to="/">
                        <li className="flex gap-2 w-full py-2 px-5 hover:bg-slate-200  rounded-lg text-gray-600 hover:text-zinc-800">
                            <BarChart/>
                            Reports
                        </li>
                    </Link>
                </ul>
            </div>

            <div className="w-full">
                <p className="font-semibold text-gray-400">Notifications</p>
                <ul className="px-1 pb-5">
                    <li className="flex gap-2 w-full py-2 px-5 hover:bg-slate-200  rounded-lg text-gray-600 hover:text-zinc-800">
                        <LineStyleIcon/>
                        Mail
                    </li>
                    <li className="flex gap-2 w-full py-2 px-5 bg-red-2 hover:bg-slate-200  rounded-lg text-gray-600 hover:text-zinc-800">
                        <MailOutline/>
                        Feedback
                    </li>
                    <li className="flex gap-2 w-full py-2 px-5 hover:bg-slate-200  rounded-lg text-gray-600 hover:text-zinc-800">
                        <DynamicFeed/>
                        Message
                    </li>
                </ul>
            </div>

            <div className="w-full">
                <p className="font-semibold text-gray-400">Staff</p>
                <ul className="px-1 pb-5">
                    <li className="flex gap-2 w-full py-2 px-5 hover:bg-slate-200  rounded-lg text-gray-600 hover:text-zinc-800">
                        <ChatBubble/>
                        Manage
                    </li>
                    <li className="flex gap-2 w-full py-2 px-5 bg-red-2 hover:bg-slate-200  rounded-lg text-gray-600 hover:text-zinc-800">
                        <WorkOutline/>
                        Analytics
                    </li>
                    <li className="flex gap-2 w-full py-2 px-5 hover:bg-slate-200  rounded-lg text-gray-600 hover:text-zinc-800">
                        <Report/>
                        Reports
                    </li>
                </ul>
            </div>
        </div>
    )
}