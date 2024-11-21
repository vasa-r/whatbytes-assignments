import { useAppContext } from "@/context/AppContext";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

const GraphChart = () => {
  const { graphData, stat } = useAppContext();
  // console.log(Number(stat.percentile));
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={graphData}>
        <XAxis
          dataKey="marks"
          ticks={[0, 25, 50, 75, 100]}
          label={{ position: "insideBottom", offset: -5 }}
        />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="numberOfStudents"
          stroke="#8884d8"
          strokeWidth={2}
          activeDot={{ r: 8 }}
        />
        <ReferenceLine
          x={Number(stat.percentile)}
          stroke="#d1cfcf"
          label="your percentile"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default GraphChart;
