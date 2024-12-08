import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip
} from "recharts";

export default function HomeChart({ title, data, dataKey, grid }) {
    console.log(title);
    return (
        <>
            <div className="bg-white shadow mt-5 justify-center items-center flex-col p-3 rounded-lg hidden sm:flex">
                <h3 className="w-full p-1 font-semibold">{title}</h3>
                <ResponsiveContainer width="100%" aspect={4}>
                    <LineChart data={data}>
                        <XAxis dataKey="month" stroke="#1e293b" />
                        <Line type="monotone" dataKey={dataKey} stroke="#8884d8" />
                        <Tooltip />
                        {grid && <CartesianGrid stroke="#ccc" strokeDasharray="10 10" />}
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className="h-44 bg-gray-50 shadow mt-5 justify-center items-center rounded-lg flex sm:hidden">
                <h3>Chart is available in desktop or tablets</h3>
            </div>
        </>
    );
}
