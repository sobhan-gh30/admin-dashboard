import Features from "../components/Feature/Feature";
import FeatureData from "../Data/FeatureData";

export default function Home(){
    return(
            <div className="container flex gap-5 flex-wrap justify-center lg:justify-center xl:justify-between">
                {FeatureData.map((Data)=>{
                    return(<Features {...Data} />)
                })}
            </div>
    )
}