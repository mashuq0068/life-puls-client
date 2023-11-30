import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend } from 'recharts';
import useAllCounts from '../../Hooks/useAllCounts';
import useCheckAdmin from '../../Hooks/useCheckAdmin';
// const {allCounts} = useAllCounts()
// const data = [
//   { name: 'maleBio', value: allCounts?.maleBiodata},
//   { name: 'Group B', value: allCounts?.femaleBiodata },
//   { name: 'Group C', value: allCounts?.premiumBiodata},
//   { name: 'Group D', value: allCounts?.successStories},
// //   { name: 'Group E', value: 500 },
// ];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
// export default class Example extends PureComponent {
//     static demoUrl = 'https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o';
  
// }
const AdminPieChart = () => {
    const {isAdmin} = useCheckAdmin()
    console.log(isAdmin)
    
    const {allCounts} = useAllCounts()
const data = [
  { name: 'maleBio', value: allCounts?.maleBiodata},
  { name: 'femaleBio', value: allCounts?.femaleBiodata },
  { name: 'Premium', value: allCounts?.premiumBiodata},
  { name: 'revenue', value: allCounts?.contactRequests},
//   { name: 'Group E', value: 500 },
];
const dataWithPercentage = data.map(entry => ({
    name: entry.name,
    value: (entry.value / allCounts?.totalBiodata) * 100,
  }));
    console.log(allCounts)
    return (
        <div className={`${!isAdmin?.admin ? "hidden" : "block"}`}>
        <PieChart width={800} height={400} onMouseEnter={dataWithPercentage}>
        <Pie
           data={dataWithPercentage}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {dataWithPercentage.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Pie
          data={data}
          cx={420}
          cy={200}
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {dataWithPercentage.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        {/* <Legend
          formatter={(value, entry) => `${entry.payload.name} - ${value.toFixed(2)}%`}
        /> */}
        
      </PieChart>
      <div className='absolute right-[10vw] bottom-[20vh]'>
        {/* first */}
      <div className=' flex items-center'>
      <p className='bg-[#0088FE] w-[20px] h-[18px] mr-[1vw]'> </p>
         <p className=' 2xl:text-lg spacing'>  Male Biodata</p>
      </div>
        {/* first */}
      <div className=' flex items-center'>
      <p className='bg-[#00C49F] w-[20px] h-[18px] mr-[1vw]'> </p>
         <p className=' 2xl:text-lg spacing'>  Female Biodata</p>
      </div>
        {/* first */}
      <div className=' flex items-center'>
      <p className='bg-[#FFBB28] w-[20px] h-[18px] mr-[1vw]'> </p>
         <p className=' 2xl:text-lg spacing'> Premium</p>
      </div>
        {/* first */}
      <div className=' flex items-center'>
      <p className='bg-[#FF8042] w-[20px] h-[18px] mr-[1vw]'> </p>
         <p className=' 2xl:text-lg spacing'>  Revenue </p>
      </div>
      </div>
      </div>
    );
};

export default AdminPieChart;