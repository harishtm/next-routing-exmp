import LineChart from "./line-chart"

const BarChart = () => {
    return (
        <div>
            <p>Bar Chart</p>
        </div>
    )
}

const Dashboard = () => {
    return (
        <div>
            <p>Dashboard</p>
            <BarChart/>
            <LineChart/>
        </div>
    )
}

export default Dashboard