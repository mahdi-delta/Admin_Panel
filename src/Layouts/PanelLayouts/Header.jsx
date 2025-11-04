import { useEffect, useState } from "react";
import SvgNotification from "../../assets/Icons/AdminPage/Header/SvgNotification";
import SvgSearch from "../../assets/Icons/AdminPage/Header/SvgSearch";
import MenuIcon from "../../Components/MenuIcon";
import { AdminPanelItemData } from "../../Constants";

const Header = ({ SidebarActive, setSidebarActive, ActivePage }) => {
     const [Text, setText] = useState(AdminPanelItemData[ActivePage.parent]?.text || "Admin Panel");

     useEffect(() => {
          setText(AdminPanelItemData[ActivePage.parent]?.text || "Admin Panel");

          return () => {
               setText("");
          };
     }, [ActivePage.parent]);

     return (
          <section
               className={`max-w-full h-max p-2 pl-5 pr-2  bg-authCard flex max-mid:flex-row-reverse items-center rounded-xl max-sm:justify-end justify-start `}
          >
               <div className="flex flex-col items-center">
                    <button
                         onClick={() => setSidebarActive(!SidebarActive)}
                    >
                         {SidebarActive ? (
                              <MenuIcon SidebarActive={SidebarActive} />
                         ) : (
                              <MenuIcon SidebarActive={SidebarActive} />
                         )}
                    </button>
               </div>
               <div>
                    {/* fix arrow */}
                    <span className="text-white/80 px-6 text-2xl font-semibold">
                         {AdminPanelItemData[ActivePage.parent]?.child[ActivePage.child]?.text ||
                              "Admin Panel"}
                    </span>
               </div>
               {/* <div className="ml-auto mr-6 cursor-pointer relative">
                    <span className="flex justify-center items-center text-white/80 text-sm absolute w-5 h-5 rounded-full -right-1 -top-1 border-2 border-white/80 bg-authCard">
                         3
                    </span>
                    <SvgNotification className="fill-white/80 w-10 h-10" />
               </div> */}
               <div className="min-mid:ml-auto max-mid:mr-auto">
                    <div className="flex items-center relative hover:shadow-[0px_0px_20px_20px_#fffffff]">
                         <SvgSearch className="w-6 h-6 stroke-3 stroke-logoPurple absolute left-3 cursor-pointer" />
                         <div>
                              <input
                                   type="text"
                                   placeholder="Search..."
                                   className="w-max text-white/80 placeholder:text-white/80 border-1 border-melogray/70 rounded-xl py-3 pr-5 pl-12 outline-none"
                              />
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default Header;
