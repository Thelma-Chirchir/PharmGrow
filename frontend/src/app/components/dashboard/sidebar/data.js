import {
  MdOutlineSpaceDashboard,
  MdOutlineInventory2,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
  MdOutlineHelpCenter,
  MdOutlineTune,
  MdOutlinePeople,
  MdOutlineNotifications,
  MdOutlineSettings,
} from "react-icons/md";
import { PiChatDots } from "react-icons/pi";
import { IoAnalytics } from "react-icons/io5";
import { routes } from "../../../utilities/routes";
// import { Notification } from "../../notifications";

export const sideBarNavs1 = [
  {
    icon: <MdOutlineSpaceDashboard />,
    title: "Dashboard",
    url: routes.dashboard(),
  },
  {
    icon: <MdOutlineInventory2 />,
    title: "Inventory",
    url: routes.inventory(),
    subtitle: [
      { title: "List of Medicines", url: routes.medicineslist() },
      { title: "Medicine Groups", url: routes.medicinegroups() },
    ],
    dropDown: <MdOutlineKeyboardArrowDown />,
    arrowUp: <MdOutlineKeyboardArrowUp />,
  },
  {
    icon: <IoAnalytics />,
    title: "Business Analysis",
    dropDown: <MdOutlineKeyboardArrowDown />,
    arrowUp: <MdOutlineKeyboardArrowUp />,
    url: routes.analysis(),
  },
];

export const sideBarNavs2 = [
  // { icon: <MdOutlinePeople />, title: 'Account', dropDown: <MdOutlineKeyboardArrowDown />, arrowUp: <MdOutlineKeyboardArrowUp />, url: routes.account() },
  { icon: <MdOutlineTune />, title: "Sales", url: routes.report() },
  {
    icon: <MdOutlineNotifications />,
    title: "Notification",
    // badge:<Notification/>,
    url: routes.notification(),
    dropDown: "01",
  },
  { icon: <PiChatDots />, title: "Suppliers Info", url: routes.suppliers() },
];

export const sideBarNavs3 = [
  {
    icon: <MdOutlineSettings />,
    title: "Application Settings",
    url: routes.settings(),
  },
  { icon: <MdOutlineHelpCenter />, title: "Help", url: routes.help },
];
