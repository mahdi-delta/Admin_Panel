import { useState, useEffect } from "react";

const SidebarChildItem = ({ item, setActiveParent, Open, setActivePage, ActivePage }) => {
     const [ChildActive, setChildActive] = useState(0);

     useEffect(() => {
          if (ActivePage && ActivePage.parent === Open) {
               setChildActive(ActivePage.child ?? -1);
          } else {
               setChildActive(-1);
          }
     }, [ActivePage, Open]);

     return (
          <>
               {item.child.map((childItem, index) => (
                    <div
                         onClick={(event) => {
                              event.stopPropagation();
                              setChildActive(index);
                              setActivePage({ parent: Open, child: index });
                              setActiveParent(Open);
                         }}
                         className={`cursor-pointer py-1 px-2 pl-7 hover:text-white/60 transition-colors duration-200 border-l-1 border-slate z-0 relative
                              ${
                                   ChildActive === index
                                        ? "border-l-white text-white"
                                        : "text-slate"
                              } ${ChildActive >= index ? "border-l-white" : "border-l-slate"}`}
                         key={childItem.text}
                    >
                         {childItem.text}
                         <span
                              className={`w-3 rounded-r-full border-t-1 bg-slate absolute left-0 top-4  transition-colors duration-200 ${
                                   ChildActive === index ? "block" : "hidden"
                              }`}
                         ></span>
                         <span
                              className={`h-4 border-l-3 bg-black absolute border-midnight -left-[2px] top-[17px] transition-colors duration-200 ${
                                   ChildActive === index ? "block" : "hidden"
                              }`}
                         ></span>
                    </div>
               ))}
          </>
     );
};

export default SidebarChildItem;
