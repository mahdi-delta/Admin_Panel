import { useEffect, useState } from "react";
import SvgNotification from "../../assets/Icons/AdminPage/Header/SvgNotification";
import SvgSearch from "../../assets/Icons/AdminPage/Header/SvgSearch";
import MenuIcon from "../../Components/MenuIcon";
import { AdminPanelItemData } from "../../Constants";
import SvgLight from "../../assets/Icons/AdminPage/SvgLight";
import SvgDark from "../../assets/Icons/AdminPage/SvgDark";
import { switchTheme } from "../../contexts/SwitchTheme";

const Header = ({ SidebarActive, setSidebarActive, ActivePage }) => {
     const [DarkMode, setDarkMode] = useState(true);
     const [Text, setText] = useState(AdminPanelItemData[ActivePage.parent]?.text || "Admin Panel");

     useEffect(() => {
          setText(AdminPanelItemData[ActivePage.parent]?.text || "Admin Panel");

          return () => {
               setText("");
          };
     }, [ActivePage.parent]);

     return (
          <section
               className={`max-w-full h-max p-2 pl-5 pr-2 bg-midnight flex max-mid:flex-row-reverse items-center rounded-xl max-sm:justify-end justify-start gap-3 max-mid:gap-2`}
          >
               <div className="flex flex-col items-center">
                    <button onClick={() => setSidebarActive(!SidebarActive)}>
                         {SidebarActive ? (
                              <MenuIcon SidebarActive={SidebarActive} />
                         ) : (
                              <MenuIcon SidebarActive={SidebarActive} />
                         )}
                    </button>
               </div>
               <div className="max-mid:hidden">
                    {/* fix arrow */}
                    <span className="text-white/80 px-6 text-2xl font-semibold truncate">
                         {AdminPanelItemData[ActivePage.parent]?.child[ActivePage.child]?.text ||
                              "Admin Panel"}
                    </span>
               </div>
               {/* Mobile Title - Smaller */}
               <div className="hidden max-mid:block max-sm:hidden flex-1">
                    <span className="text-white/80 text-lg font-semibold truncate block">
                         {AdminPanelItemData[ActivePage.parent]?.child[ActivePage.child]?.text ||
                              "Admin Panel"}
                    </span>
               </div>
               <div
                    onClick={() => {
                         switchTheme();
                         setDarkMode(!DarkMode);
                    }}
                    className="min-mid:ml-auto max-mid:mr-auto p-1 border-2 border-shadow rounded-xl"
               >
                    <SvgLight className={`fill-white/80 w-10 h-10 transition-all duration-500 ${DarkMode ? "opacity-0 hidden " : "opacity-100"}`} />
                    <SvgDark className={`fill-white/80 w-10 h-10 transition-all duration-500 ${DarkMode ? "opacity-100 " : "opacity-0 hidden"}`} />
               </div>
               {/* <div className="ml-auto mr-6 cursor-pointer relative">
                    <span className="flex justify-center items-center text-white/80 text-sm absolute w-5 h-5 rounded-full -right-1 -top-1 border-2 border-white/80 bg-midnight">
                         3
                    </span>
                    <SvgNotification className="fill-white/80 w-10 h-10" />
               </div> */}
               {/* <div className="min-mid:ml-auto max-mid:mr-auto">
                    <div className="flex items-center relative">
                         <SvgSearch className="w-6 h-6 max-sm:w-5 max-sm:h-5 stroke-3 stroke-cosmic-purple absolute left-3 max-sm:left-2 cursor-pointer" />
                         <div>
                              <input
                                   type="text"
                                   placeholder="Search..."
                                   className="w-full max-w-[200px] max-mid:max-w-[150px] max-sm:max-w-[100px] text-white/80 placeholder:text-white/80 text-sm max-sm:text-xs border-1 border-slate/70 rounded-xl py-3 max-sm:py-2 pr-5 max-sm:pr-3 pl-12 max-sm:pl-8 outline-none bg-transparent"
                              />
                         </div>
                    </div>
               </div> */}
          </section>
     );
};

export default Header;
