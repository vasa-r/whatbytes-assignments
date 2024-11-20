import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

const data = [
  { marks: 0, numberOfStudents: 1 },
  { marks: 10, numberOfStudents: 2 },
  { marks: 20, numberOfStudents: 4 },
  { marks: 25, numberOfStudents: 5 },
  { marks: 30, numberOfStudents: 4 },
  { marks: 40, numberOfStudents: 8 },
  { marks: 45, numberOfStudents: 10 },
  { marks: 50, numberOfStudents: 18 },
  { marks: 60, numberOfStudents: 10 },
  { marks: 70, numberOfStudents: 6 },
  { marks: 75, numberOfStudents: 5 },
  { marks: 80, numberOfStudents: 1 },
  { marks: 90, numberOfStudents: 3 },
  { marks: 100, numberOfStudents: 1 },
];

const GraphChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
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
        <ReferenceLine x={20} stroke="#d1cfcf" label="your percentile" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default GraphChart;
