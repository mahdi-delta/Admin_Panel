import { Bar } from "react-chartjs-2";
import {
     Chart as ChartJS,
     CategoryScale,
     LinearScale,
     BarElement,
     Title,
     Tooltip,
     Legend,
} from "chart.js";
import { ProjectChartData, ProjectChartOptions } from "./ProjectChartData";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Project = () => {
     return (
          <section className="w-full h-max text-white flex flex-col  gap-5">
               <div className="w-full h-100 p-6 bg-midnight">
                    <Bar data={ProjectChartData} options={ProjectChartOptions}/>
               </div>
          </section>
     );
};

export default Project;

