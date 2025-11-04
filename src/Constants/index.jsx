import SvgDashboard from "../assets/Icons/AdminPage/SvgDashboard";
import SvgApps from "../assets/Icons/AdminPage/SvgApps";
import SvgCharts from "../assets/Icons/AdminPage/SvgCharts";
import SvgBootstrap from "../assets/Icons/AdminPage/SvgBootstrap";
import SvgPlugins from "../assets/Icons/AdminPage/SvgPlugins";
import SvgWidget from "../assets/Icons/AdminPage/SvgWidget";
import SvgForms from "../assets/Icons/AdminPage/SvgForms";
import SvgTable from "../assets/Icons/AdminPage/SvgTable";
import SvgPages from "../assets/Icons/AdminPage/SvgPages";
import SvgSetting from "../assets/Icons/AdminPage/SvgSetting";
import Dashboard from "../Layouts/PanelLayouts/Dashboard/Dashboard";
import SvgStar from "../assets/Icons/Dashboard/SvgStar";
import SvgPerson from "../assets/Icons/Dashboard/SvgPerson";
import SvgTask from "../assets/Icons/Dashboard/SvgTask";
import SvgMessage from "../assets/Icons/Dashboard/SvgMessage";
import Project from "../Layouts/PanelLayouts/Project/Project";
import Profile from "../Layouts/PanelLayouts/Profile/Profile";

// ============================================Sidebar item Childs================================================

const DashboardChild = [
     { text: "Dashboard", page: <Dashboard /> },
     { text: "Project", page: <Project />},
     { text: "Content" },
     { text: "Kanban" },
     { text: "Calendar" },
     { text: "Messages" },
];

const AppsChild = [
     { text: "Profile", page: <Profile /> },
     { text: "Post Details" },
     { text: "Email" },
     { text: "Calendar" },
     { text: "Shop" },
];

const ChartsChild = [
     { text: "Flot" },
     { text: "Morris" },
     { text: "Chart.js" },
     { text: "Chartist" },
     { text: "Sparkline" },
     { text: "Peity" },
];

const BootstrapsChild = [
     { text: "Default Theme" },
     { text: "Dark Theme" },
     { text: "Accordion" },
     { text: "Alert" },
     { text: "Badge" },
     { text: "Button Group" },
     { text: "List Group" },
     { text: "Media Object" },
     { text: "Cards" },
     { text: "Carousel" },
     { text: "Dropdown" },
     { text: "Popover" },
     { text: "Progressbar" },
     { text: "Tab" },
     { text: "Typography" },
     { text: "Pagination" },
     { text: "Grid" },
];

const PluginsChild = [
     { text: "Authentication" },
     { text: "Analytics" },
     { text: "Notifications" },
     { text: "Select 2" },
     { text: "Nestedable" },
     { text: "Noui Slider" },
     { text: "Sweet Alert" },
     { text: "Toastr" },
     { text: "Jqv Map" },
     { text: "Light Gallery" },
];

const FormsChild = [
     { text: "Form Elements" },
     { text: "Wizard" },
     { text: "CkEditor" },
     { text: "Pickers" },
     { text: "Jquery Validate" },
];

const TableChild = [{ text: "Bootstrap" }, { text: "Datatables" }];

const PagesChild = [
     { text: "Register" },
     { text: "Login" },
     { text: "Error" },
     { text: "Error 400" },
     { text: "Error 403" },
     { text: "Error 404" },
     { text: "Error 500" },
     { text: "Error 503" },
     { text: "Lock Screen" },
];

// =============================================Sidebar items==============================================

export const AdminPanelItemData = [
     {
          svg: (
               <SvgDashboard className="w-7 h-7 stroke-melogray fill-none stroke-1 group-hover:stroke-white group-active:stroke-white" />
          ),
          text: "Dashboard",
          child: DashboardChild,
          NC: 6,
     },
     {
          svg: (
               <SvgApps className="w-7 h-7 stroke-melogray stroke-1 fill-none group-hover:stroke-white" />
          ),
          text: "Apps",
          child: AppsChild,
          NC: 5,
     },
     {
          svg: (
               <SvgCharts className="w-7 h-7 stroke-melogray stroke-1 fill-none group-hover:stroke-white" />
          ),
          text: "Charts",
          child: ChartsChild,
          NC: 6,
     },
     {
          svg: <SvgBootstrap className="w-7 h-7 fill-melogray stroke-1 group-hover:fill-white" />,
          text: "Bootstraps",
          child: BootstrapsChild,
          NC: 15,
     },
     {
          svg: <SvgPlugins className="w-7 h-7 fill-melogray stroke-1 group-hover:fill-white" />,
          text: "Plugins",
          child: PluginsChild,
          NC: 9,
     },
     {
          svg: <SvgWidget className="w-7 h-7 stroke-melogray stroke-1 group-hover:stroke-white" />,
          text: "Widget",
          child: [],
          NC: 0,
     },
     {
          svg: <SvgForms className="w-7 h-7 fill-melogray stroke-1 group-hover:fill-white" />,
          text: "Forms",
          child: FormsChild,
          NC: 5,
     },
     {
          svg: (
               <SvgTable className="w-7 h-7 stroke-melogray stroke-1 fill-none group-hover:stroke-white" />
          ),
          text: "Table",
          child: TableChild,
          NC: 2,
     },
     {
          svg: (
               <SvgPages className="w-7 h-7 stroke-melogray stroke-1 fill-none group-hover:stroke-white" />
          ),
          text: "Pages",
          child: PagesChild,
          NC: 8,
     },
     {
          svg: <SvgSetting className="w-7 h-7 fill-melogray stroke-1 group-hover:fill-white" />,
          text: "Setting",
          child: [],
          NC: 0,
     },
];

// ============================================Main Pages==============================================

export const DashboardPageRatingData = [
     {
          color: "#7A35C9AA",
          icon: <SvgStar className="w-8 h-8 fill-[#7A35C9AA] stroke-[#7A35C9AA]"/>,
          rate: 78,
          logo: <SvgApps />,
          Content: "Total Project Handled",
     },
     {
          color: "#FFAC30",
          icon: <SvgPerson className="w-8 h-8 fill-[#FFAC30] stroke-[#FFAC30]"/>,
          rate: 214,
          logo: <SvgApps />,
          Content: "Contacts You Have",
     },
     {
          color: "#43DC80",
          icon: <SvgTask className="w-8 h-8 fill-[#43DC80] stroke-[#43DC80]"/>,
          rate: 93,
          logo: <SvgApps />,
          Content: "Total Unfinished Task",
     },
     {
          color: "#7C82F8",
          icon: <SvgMessage className="w-8 h-8 fill-[#7C82F8] stroke-[#7C82F8]"/>,
          rate: 12,
          logo: <SvgApps />,
          Content: "Unread Messages",
     },
];
// export const DashboardPageRatingData = [
//      {
//           color: "#7A35C9AA",
//           icon: <SvgStar className="w-8 h-8 fill-[#7A35C9AA] stroke-[#7A35C9AA]"/>,
//           rate: 78,
//           logo: <SvgApps />,
//           Content: "Total Project Handled",
//      },
//      {
//           color: "#7A35C9AA",
//           icon: <SvgPerson className="w-8 h-8 fill-[#7A35C9AA] stroke-[#7A35C9AA]"/>,
//           rate: 214,
//           logo: <SvgApps />,
//           Content: "Contacts You Have",
//      },
//      {
//           color: "#7A35C9AA",
//           icon: <SvgTask className="w-8 h-8 fill-[#7A35C9AA] stroke-[#7A35C9AA]"/>,
//           rate: 93,
//           logo: <SvgApps />,
//           Content: "Total Unfinished Task",
//      },
//      {
//           color: "#7A35C9AA",
//           icon: <SvgMessage className="w-8 h-8 fill-[#7A35C9AA] stroke-[#7A35C9AA]"/>,
//           rate: 12,
//           logo: <SvgApps />,
//           Content: "Unread Messages",
//      },
// ];