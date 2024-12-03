import Features from "../components/Feature/Feature";
import FeatureData from "../Data/FeatureData";

export default function Home(){
    return(
            <div className="container flex justify-between gap-5">
                {FeatureData.map((Data)=>{
                    return(<Features {...Data} />)
                })}
            </div>
    )
}