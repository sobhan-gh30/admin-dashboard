export default function NotFount(){
    return(
        <div className="w-full h-screen flex justify-center items-center flex-col">
            <img src={"Img/Errors/404.png"} alt="404" className="mb-5"/>
            <h2 className="text-5xl text-gray-400 font-semibold">404</h2>
            <p className="text-3xl text-gray-400 font-semibold">Page Not Found</p>
        </div>
    )
}