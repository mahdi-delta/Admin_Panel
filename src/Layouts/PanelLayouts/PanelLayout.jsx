import Sidebar from "./Sidebar";
import Header from "./Header";
import Main from "./Main";
import { useState } from "react";

const PanelLayout = () => {
     const [SidebarActive, setSidebarActive] = useState(false);
     const [ActivePage, setActivePage] = useState({parent: 0, child: 0})

     return (
          <section className="bg-dark flex w-screen h-screen overflow-hidden relative transition-w-h duration-300 p-1 gap-1">
               <Sidebar SidebarActive={SidebarActive} setSidebarActive={setSidebarActive}  ActivePage={ActivePage} setActivePage={setActivePage}/>
               <main className="p-1 flex flex-col w-full h-full gap-3 transition-w-h duration-300">
                    <Header SidebarActive={SidebarActive} setSidebarActive={setSidebarActive} ActivePage={ActivePage} />
                    <Main ActivePage={ActivePage}/>
               </main>
          </section>
     );
};

export default PanelLayout;
