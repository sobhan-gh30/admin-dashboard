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
        <div className="bg-white shadow mt-5 flex justify-center items-center flex-col p-3 rounded-lg">
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
    );
}
