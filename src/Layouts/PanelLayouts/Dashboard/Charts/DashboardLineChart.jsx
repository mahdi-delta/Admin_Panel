import { Line } from "react-chartjs-2";
import {
     Chart as ChartJS,
     CategoryScale,
     LinearScale,
     PointElement,
     LineElement,
     Title,
     Tooltip,
     Legend,
} from "chart.js";

import { DashboardLineChartData, DashboardLineChartOption } from "./DashboardChartsData";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const DashboardLineChart = () => {
     return (
          <div className="w-full max-h-80">
               <Line data={DashboardLineChartData} options={DashboardLineChartOption} />
          </div>
     );
};

export default DashboardLineChart;
