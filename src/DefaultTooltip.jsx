import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  {
    name: "Page A",
    uv: 100,
  },
  {
    name: "Page B",
    uv: 30,
  },
  {
    name: "Page C",
    uv: 50,
  },
  {
    name: "Page D",
    uv: 80,
  },
  {
    name: "Page E",
    uv: 55,
  },
  {
    name: "Page F",
    uv: 5,
  },
  {
    name: "Page G",
    uv: 25,
  },
];

function Rechart() {
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      layout="vertical"
      barSize={50}
    >
      <Bar dataKey="uv" fill="#82ca9d" />
      <XAxis dataKey="uv" type="number" />
      <YAxis dataKey="name" type="category" />
      <Tooltip />
    </BarChart>
  );
}

export function DefaultTooltip() {
  return (
    <div className="wrapper">
      <p className="heading">Default Tooltip</p>
      <div className="container">
        <Rechart />
      </div>
    </div>
  );
}
