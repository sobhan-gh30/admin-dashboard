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

export default function SideBar(){
    return(
        <div className="h-[calc(100vh-4rem)] w-60 bg-slate-100 bg-opacity-40 fixed top-[4rem] -left-60 lg:left-0 p-3 py-5">
            <div className="w-full">
                <p className="font-semibold text-gray-400">Dashboard</p>
                <ul className="px-1 pb-3">
                    <li className="flex gap-2 w-full py-[5px] px-5 hover:bg-slate-200  rounded-lg text-gray-600 hover:text-zinc-800">
                        <LineStyleIcon/>
                        Home
                    </li>
                    <li className="flex gap-2 w-full py-[5px] px-5 bg-red-2 hover:bg-slate-200  rounded-lg text-gray-600 hover:text-zinc-800">
                        <Timeline/>
                        Analytics
                    </li>
                    <li className="flex gap-2 w-full py-[5px] px-5  hover:bg-slate-200  rounded-lg text-gray-600 hover:text-zinc-800">
                        <TrendingUp/>
                        Sales
                    </li>
                </ul>
            </div>

            <div className="w-full">
                <p className="font-semibold text-gray-400">Quick Menu</p>
                <ul className="px-1 pb-5">
                    <li className="flex gap-2 w-full py-[5px] px-5 hover:bg-slate-200  rounded-lg text-gray-600 hover:text-zinc-800">
                        <PermIdentity />
                        Users
                    </li>
                    <li className="flex gap-2 w-full py-[5px] px-5 bg-red-2 hover:bg-slate-200  rounded-lg text-gray-600 hover:text-zinc-800">
                        <PermIdentity />
                        New User
                    </li>
                    <li className="flex gap-2 w-full py-[5px] px-5 hover:bg-slate-200  rounded-lg text-gray-600 hover:text-zinc-800">
                        <Storefront />
                        Product
                    </li>
                    <li className="flex gap-2 w-full py-[5px] px-5 hover:bg-slate-200  rounded-lg text-gray-600 hover:text-zinc-800">
                        <AttachMoney/>
                        Transaction
                    </li>
                    <li className="flex gap-2 w-full py-[5px] px-5 hover:bg-slate-200  rounded-lg text-gray-600 hover:text-zinc-800">
                        <BarChart/>
                        Reports
                    </li>
                </ul>
            </div>

            <div className="w-full">
                <p className="font-semibold text-gray-400">Notifications</p>
                <ul className="px-1 pb-5">
                    <li className="flex gap-2 w-full py-[5px] px-5 hover:bg-slate-200  rounded-lg text-gray-600 hover:text-zinc-800">
                        <LineStyleIcon/>
                        Mail
                    </li>
                    <li className="flex gap-2 w-full py-[5px] px-5 bg-red-2 hover:bg-slate-200  rounded-lg text-gray-600 hover:text-zinc-800">
                        <MailOutline/>
                        Feedback
                    </li>
                    <li className="flex gap-2 w-full py-[5px] px-5 hover:bg-slate-200  rounded-lg text-gray-600 hover:text-zinc-800">
                        <DynamicFeed/>
                        Message
                    </li>
                </ul>
            </div>

            <div className="w-full">
                <p className="font-semibold text-gray-400">Staff</p>
                <ul className="px-1 pb-5">
                    <li className="flex gap-2 w-full py-[5px] px-5 hover:bg-slate-200  rounded-lg text-gray-600 hover:text-zinc-800">
                        <ChatBubble/>
                        Manage
                    </li>
                    <li className="flex gap-2 w-full py-[5px] px-5 bg-red-2 hover:bg-slate-200  rounded-lg text-gray-600 hover:text-zinc-800">
                        <WorkOutline/>
                        Analytics
                    </li>
                    <li className="flex gap-2 w-full py-[5px] px-5 hover:bg-slate-200  rounded-lg text-gray-600 hover:text-zinc-800">
                        <Report/>
                        Reports
                    </li>
                </ul>
            </div>
        </div>
    )
}