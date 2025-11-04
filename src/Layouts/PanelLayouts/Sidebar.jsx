import { useState } from "react";
import logo from "../../assets/Icons/AdminPage/justlogo.png";
import SidebarItem from "../../Components/SidebarItem";
import { AdminPanelItemData } from "../../Constants";
import SidebarChildItem from "../../Components/SidebarChildItem";
import Button from "../../Components/NewWork";

const Sidebar = ({ SidebarActive, ActivePage, setSidebarActive, setActivePage }) => {
     const [Open, setOpen] = useState(0);
     const [ActiveParent, setActiveParent] = useState(0);

     return (
          <section
               className={`p-1 bg-transparent transition-w-colors duration-300 text-white overflow-y-auto max-mid:fixed z-10 ${
                    SidebarActive ? "w-70 max-mid:w-60" : " w-20 max-mid:-translate-x-[100px]"
               }`}
          >
               <div
                    className={`w-full h-max rounded-xl bg-authCard   ${
                         SidebarActive ? "p-4 pb-4 border-melogray max-mid:border-r-2 max-mid:rounded-0" : "p-3 pb-0"
                    }`}
               >
                    <div className="max-w-80 flex flex-col gap-6 justify-center items-center">
                         <img src={logo} className="w-13" />
                         <div
                              className={`px-2 w-full h-max flex flex-col justify-center items-center ${
                                   SidebarActive ? "gap-8" : "gap-0"
                              }`}
                         >
                              <div style={{scale: !SidebarActive && 0, opacity: !SidebarActive && 0}} className="transition-[scale,opacity] duration-200">
                                   <Button text="new project"/>
                              </div>
                              <div
                                   className={`w-full flex flex-col justify-center items-center gap-2 transition-translate duration-300 ${
                                        !SidebarActive && "-translate-y-10"
                                   }`}
                              >
                                   {AdminPanelItemData.map((item, index) => (
                                        <div
                                             key={index}
                                             onClick={
                                                  Open === index
                                                       ? () => setOpen(-1)
                                                       : () => setOpen(index)
                                             }
                                             className={` transition-colors duration-300  ${
                                                  ActivePage[0] == Open && "text-white"
                                             }`}
                                        >
                                             <SidebarItem
                                                  key={item.text}
                                                  text={item.text}
                                                  SidebarActive={SidebarActive}
                                                  setSidebarActive={setSidebarActive}
                                                  data={item.svg}
                                                  sidebarNC={item.NC}
                                                  itemNC={item.NC}
                                                  index={index}
                                                  ActivePage={ActivePage}
                                             ></SidebarItem>

                                             <div
                                                  key={item.NC}
                                                  style={{
                                                       opacity: Open === index ? "100%" : "0%",
                                                       height:
                                                            Open === index
                                                                 ? `calc(${item.NC} * 35px)`
                                                                 : "0px",
                                                       display: !SidebarActive && "none",
                                                       transform: Open !== index && "scaleY(0%)",
                                                  }}
                                                  className={`text-[15px] text-melogray flex flex-col justify-center  pl-5 transition-h-scale duration-300 relative`}
                                             >
                                                  <SidebarChildItem
                                                       key={item.NC}
                                                       item={item}
                                                       ActiveParent={ActiveParent}
                                                       setActiveParent={setActiveParent}
                                                       Open={Open}
                                                       setOpen={setOpen}
                                                       ActivePage={ActivePage}
                                                       setActivePage={setActivePage}
                                                       index={index}
                                                  />
                                             </div>
                                        </div>
                                   ))}
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default Sidebar;
