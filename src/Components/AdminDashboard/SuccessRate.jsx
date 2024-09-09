
import { Area, AreaChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis} from "recharts";


const SuccessRate = () => {
    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 1000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 5000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2080,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 7890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 1090,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
        {
          name: 'Page K',
          uv: 3490,
          pv: 7300,
          amt: 2100,
        },
        {
          name: 'Page L',
          uv: 4490,
          pv: 4300,
          amt: 2100,
        },
        {
          name: 'Page M',
          uv: 1490,
          pv: 4300,
          amt: 2100,
        },
        {
          name: 'Page N',
          uv: 6490,
          pv: 4300,
          amt: 2100,
        },
      ];
    return (
        <div>
            <h3 className=" text-xl mb-[3%] mt-[3%]   font-semibold"><span className=" text-rose-600">Success</span> Rate</h3>


         
        <div style={{ width: '70vw' }}> {/* Parent container with width */}
            <AreaChart
                width={window.innerWidth * 0.75} // Set width dynamically to 70% of the window width
                height={200}
                data={data}
                margin={{
                    top: 5,
                    right: 0,
                    left: 0,
                    bottom: 5,
                }}
            >
                
                <Area type="monotone" dataKey="uv" stroke="#f43f5e" fill="#14B8A6" />
            </AreaChart>
        </div>

        </div>
    );
};

export default SuccessRate;