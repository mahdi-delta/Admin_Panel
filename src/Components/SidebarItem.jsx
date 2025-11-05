import Arrow from "../assets/Icons/Public/Arrow";

const SidebarItem = ({
     data,
     text,
     itemNC,
     SidebarActive,
     setSidebarActive,
     ActivePage,
     index,
}) => {
     return (
          <div
               onClick={() => {
                    setSidebarActive(true);
               }}
               style={{ color: ActivePage.parent == index && "white" }}
               className={`w-full flex bg-midnight  hover:bg-shadow justify-start items-center px-2 py-1 z-10 text-slate rounded-xl hover:text-white transition-colors duration-300 cursor-pointer group ${
                    SidebarActive ? "min-w-50" : "min-w-10 aspect-square"
               } `}
          >
               <div className={`transition-translate duration-200 ${SidebarActive && ' group-hover:fill-white'}`}>{data}</div>
               {SidebarActive && <div className="pl-6 w-full">{text}</div>}
               {itemNC != 0 && (
                    <Arrow
                         style={{ fill: ActivePage.parent == index && "white" }}
                         className={` rotate-90 w-4 transition-rotate duration-100 fill-slate group-hover:fill-white group-hover:rotate-180 ${
                              !SidebarActive && "hidden"
                         }`}
                    />
               )}
          </div>
     );
};

export default SidebarItem;

