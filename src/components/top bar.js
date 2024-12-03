import {FaHeart} from "react-icons/fa";
import {CiBellOn, CiSettings} from "react-icons/ci";
import { HiOutlinePlus } from "react-icons/hi";
import {TfiWorld} from "react-icons/tfi";
import {useState} from "react";

export default function TopBar() {
    let [notifications, setNotification] = useState(2)
    let [explore, setExplore] = useState(2)
    let [hasProfile, setHasProfile] = useState("")

    return (
        <div className="w-full h-16 py-2 px-5 flex justify-between items-center fixed top-0 left-0 right-0 z-10 bg-white">
            <h2 className="h-14 flex items-center gap-2 font-bold text-3xl text-slate-900">
                <FaHeart/>
                Sobhan
            </h2>
            <div className="hidden lg:flex justify-center items-center gap-5 text-gray-500">
                <span>
                    <CiBellOn className="scale-[2] inline-block  hover:text-gray-800 transition "/>
                    <span
                        className="bg-red-500 text-white text-sm w-5 h-5 inline-flex justify-center items-center rounded-full -translate-x-2 -translate-y-3">
                        {notifications
                        }</span>
                </span>

                <span>
                    <TfiWorld className="scale-[1.75] inline-block  hover:text-gray-800 transition "/>
                    <span
                        className="bg-red-500 text-white text-sm w-5 h-5 inline-flex justify-center items-center rounded-full -translate-x-2 -translate-y-3">
                        {explore}
                    </span>
                </span>
                <span>
                    <CiSettings className="scale-[2.4] inline-block  hover:text-gray-800 transition "/>
                </span>
                <div className="w-14 h-14 border rounded-full overflow-hidden">
                    <img className="w-full"
                         src={hasProfile ? `Img/Profiles/${hasProfile}` : "Img/Profiles/defaultP.png"} alt=""/>
                </div>
            </div>
            <button
                className="h-7 w-7
                text-5xl text-white font-bold
                 hover:rotate-45 transition
                  flex justify-center items-center lg:hidden
                   bg-gray-900 bg-opacity-50 rounded-full">
                <HiOutlinePlus />
            </button>
        </div>
    )
}