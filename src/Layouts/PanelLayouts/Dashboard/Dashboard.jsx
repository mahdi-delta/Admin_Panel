import SvgDotMenu from "../../../assets/Icons/Dashboard/SvgDotMenu";
import { DashboardPageRatingData } from "../../../Constants";
import DashboardBarChart from "./Charts/DashboardBarChart";
import DashboardLineChart from "./Charts/DashboardLineChart";
import ShowUsers from "./User/ShowUsers";

const Dashboard = () => {
     return (
          <section className="bg-dark text-white flex flex-col gap-3 rounded-xl">
               <div id="rating" className="w-full h-max grid grid-cols-4 max-mid:grid-cols-2 gap-3">
                    {DashboardPageRatingData.map((item) => (
                         <div
                              key={item.Content}
                              className=" flex-1/4 w-full h-auto bg-authCard rounded-xl relative overflow-hidden"
                         >
                              <span
                                   style={{ backgroundColor: item.color }}
                                   className="w-full h-1 absolute top-0 left-0 z-2"
                              ></span>
                              <div className=" w-full h-full flex justify-center items-center gap-3 px-8 py-5">
                                   <div className="w-full h-full flex flex-col justify-center items-start gap-4">
                                        <div className="text-white/80 flex text-5xl font-semibold w-full max-sm:justify-center">
                                             {item.rate}
                                        </div>
                                        <div className="w-full text-melogray max-sm:text-center">{item.Content}</div>
                                   </div>
                                   <div className="max-sm:hidden">{item.icon}</div>
                              </div>
                         </div>
                    ))}
               </div>
               <div className="w-full h-max flex flex-col gap-3 rounded-xl">
                    <ShowUsers />
               </div>
               {/* <div className="w-full h-max p-8 flex flex-col gap-3 bg-authCard rounded-xl">
                    <div className="flex justify-between">
                         <h1 className="text-white/80 text-xl font-semibold">Project Created</h1>
                         <button>
                              <SvgDotMenu className="w-6 h-6  fill-white/80 transition-colors duration-200 hover:fill-white/60" />
                         </button>
                    </div>
                    <div className="flex gap-4 items-center">
                         <h1 className="text-3xl font-semibold">25%</h1>
                         <div className="w-0 h-0 border-l-transparent border-l-[18px] border-r-transparent border-r-[18px] border-b-[14px] border-melogray"></div>
                         <p className="text-melogray">last month $563,443</p>
                    </div>
                    <div className="w-full h-max">
                         <DashboardBarChart />
                    </div>
               </div>
               <div className="w-full h-full flex gap-5">
                    <div className="flex-1/2 w-full h-full p-6 flex justify-center items-center bg-authCard text-white rounded-xl">
                         <DashboardLineChart />
                    </div>
               </div> */}
          </section>
     );
};

export default Dashboard;
