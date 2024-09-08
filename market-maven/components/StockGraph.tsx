import { registerCharts } from "./StockGraphImport"
import LineChart from "./LineChart"

registerCharts()

function App() {
  return (
    <div className="container">
      <h1>React charts examples</h1>
      <div className="graph-container">
        <LineChart />
      </div>
    </div>
  )
}

export default App