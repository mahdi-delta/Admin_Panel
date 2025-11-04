const MenuIcon = ({ SidebarActive }) => {
     return (
          <div className="flex flex-col justify-center items-start gap-[5px] group">
               <span
                    className={` h-[3px]  bg-white/80 rounded-full transition-w duration-300  ${
                         SidebarActive ? "w-[35px] group-hover:w-[35px]" : "w-[18px] group-hover:w-[20]"
                    }`}
               ></span>
               <span
                    className={` h-[3px]  bg-white/80 rounded-full transition-w duration-300  ${
                         SidebarActive ? "w-[35px] group-hover:w-[28px]" : "w-[30px] group-hover:w-[28px]"
                    }`}
               ></span>
               <span
                    className={` h-[3px]  bg-white/80 rounded-full transition-w duration-300 ${
                         SidebarActive ? "w-[35px] group-hover:w-[20px]" : "w-[18px] group-hover:w-[35px]"
                    }`}
               ></span>
          </div>
     );
};

export default MenuIcon;
