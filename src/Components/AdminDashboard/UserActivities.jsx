
import { CartesianGrid, Legend, Line, LineChart,  Tooltip, XAxis, YAxis } from "recharts";


const UserActivities = () => {
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
            <h3 className=" text-xl mb-[3%] font-semibold">User <span className=" text-rose-600">Activities</span></h3>
            
                {/* <ResponsiveContainer width="100%" height="100%"> */}
                    <LineChart
                        width={window.innerWidth * 0.38}
                        height={400}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="Male" stroke="#f43f5e" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="Female" stroke="#8884d8" />
                    </LineChart>
                {/* </ResponsiveContainer> */}
           
        </div>
    );
};

export default UserActivities;