import Features from "../components/Feature/Feature";
import FeatureData from "../Data/FeatureData";
import {HomeCartData} from "../Data/HomeChart";
import HomeChart from "../components/Feature/HomeChart";

export default function Home(){
    return(
        <div>
            <div className="container flex items-center justify-between gap-5 flex-col sm:flex-row">
                {FeatureData.map((Data)=>{
                    return(<Features {...Data} />)
                })}
            </div>
            <div className="container">
                <HomeChart grid title="Month" data={HomeCartData} dataKey="sale" />
            </div>
        </div>
    )
}