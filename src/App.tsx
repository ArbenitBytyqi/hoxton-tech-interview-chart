import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import "./App.css";
const studentData = [
  {
    name: "Stephen",
    beavers: 3,
    stars: 2,
  },
  {
    name: "Eduardo",
    beavers: 7,
    stars: 1,
  },
  {
    name: "Pepe",
    beavers: 6,
    stars: 9,
  },
  {
    name: "Gigachad",
    beavers: 0,
    stars: 10,
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: 1000, height: 600 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart width={150} height={40} data={studentData}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="name" />
              <YAxis domain={[0, "dataMax + 2"]} tickCount={5} />
              <Tooltip cursor={{ fill: "transparent" }} />
              <Bar dataKey="beavers" fill="orange" />
              <Bar dataKey="stars" fill="yellow" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </header>
    </div>
  );
}

export default App;
