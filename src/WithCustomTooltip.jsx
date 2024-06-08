import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import "./WithCustomTooltip.css";

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
      <Tooltip content={<CustomTooltip />} />
    </BarChart>
  );
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
        <p className="desc">Some additional Information.</p>
      </div>
    );
  }

  return null;
};

export function WithCustomTooltip() {
  return (
    <div className="wrapper">
      <p>Heading for Tooltip</p>
      <div>Tooltip portal container</div>
      <div className="container">
        <Rechart />
      </div>
    </div>
  );
}
