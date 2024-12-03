import "../../output.css"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function Features(prop){
    let compere = prop.compare
    return(
        <div className="w-11/12 sm:w-52 md:w-56 lg:w-1/4 lg:min-w-60 h-40 px-2 lg:px-5 flex flex-col justify-around rounded-2xl shadow">
            <h3 className="text-xl">{prop.title}</h3>
            <div className="flex gap-4 items-center">
                <h2 className="text-3xl font-semibold">{prop.price}</h2>
                <p className="flex items-center">
                    {prop.compare}
                    {compere>0
                        ?
                        <ArrowUpwardIcon className="text-green-600"/>
                        :
                        <ArrowDownwardIcon className="text-red-600"/>
                    }
                </p>
            </div>
            <p className="text-zinc-400 font-semibold">Completed to last month</p>
        </div>
    )
}