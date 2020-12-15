import React, { useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts';
import Template from './components/Template';
import Supplier from './components/Supplier';

const App = () => {
  const data = [
    {
      name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
    },
    {
      name: 'Page B', uv: -3000, pv: 1398, amt: 2210,
    },
    {
      name: 'Page C', uv: -2000, pv: -9800, amt: 2290,
    },
    {
      name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
    {
      name: 'Page E', uv: -1890, pv: 4800, amt: 2181,
    },
    {
      name: 'Page F', uv: 2390, pv: -3800, amt: 2500,
    },
    {
      name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
    },
  ];

  const [Data, setData] = useState(["동", "금", "은"]);
  const [Test, setTest] = useState("None");


  const handleClick = (data, index) => {
    // if (data.activeLabel !== None) {
      setTest(data.activeLabel);
    // }
  }
  
  return (
    <div>


      <Supplier>
        HJello
      </Supplier>

      <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }} onClick={handleClick}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>

      <Template>{Test}</Template>
    </div>
  );
};

export default App;