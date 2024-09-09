
import { Bar, BarChart, CartesianGrid, Legend,  Tooltip, XAxis, YAxis } from "recharts";


const Revenue = () => {
    const data = [
        {
            name: 'Jan',
            Female: 4000,
            Male: 2400,
            amt: 2400,
        },
        {
            name: 'Feb',
            Female: 3000,
            Male: 1398,
            amt: 2210,
        },
        {
            name: 'Mar',
            Female: 2000,
            Male: 9800,
            amt: 2290,
        },
        {
            name: 'Apr',
            Female: 2780,
            Male: 3908,
            amt: 2000,
        },
        {
            name: 'May',
            Female: 1890,
            Male: 4800,
            amt: 2181,
        },
        {
            name: 'Jun',
            Female: 2390,
            Male: 3800,
            amt: 2500,
        },
        {
            name: 'Jul',
            Female: 3490,
            Male: 4300,
            amt: 2100,
        },
    ];
    return (
        <div>
            <h3 className=" text-xl mb-[3%]   font-semibold"><span className=" text-rose-600">Revenue</span> Rate</h3>

            
            <BarChart
               width={window.innerWidth * .36}
                height={400}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" orientation="left" stroke="#f43f5e" />
                <YAxis yAxisId="right" orientation="right" stroke="#8884d8" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="Male" fill="#f43f5e" />
                <Bar yAxisId="right" dataKey="Female" fill="#8884d8" />
            </BarChart>
            {/* </ResponsiveContainer> */}

        </div>
    );
};

export default Revenue;