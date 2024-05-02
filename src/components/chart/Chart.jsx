import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


export default function Chart({ title, data, dataKey, grid }) {

  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data} >
<CartesianGrid />
<XAxis dataKey="name" 
    interval={'preserveStartEnd'} />
<YAxis></YAxis>
<Legend />
<Tooltip />
<Line type="monotone" dataKey="Active Users"
    stroke="black" activeDot={{ r: 8 }} />
<Line type="monotone" dataKey="Active Products"
    stroke="red" activeDot={{ r: 8 }} />
    {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
</LineChart>
        
      </ResponsiveContainer>
    </div>
  );
}





