import {
  MdOutlineHealthAndSafety,
  MdOutlineKeyboardArrowDown,
  MdKeyboardDoubleArrowRight,
  MdOutlineMedicalServices,
} from "react-icons/md";
import { FaNotesMedical } from "react-icons/fa6";
import { routes } from "../../utilities/routes";

export const analysisOne = [
  {
    icon: <MdOutlineHealthAndSafety />,
    title: "Good",
    description: "Inventory Status",
    footer: "View Detailed Report",
    url: routes.inventory(),
  },
  {
    icon: <FaNotesMedical />,
    title: "#8,55,875",
    description: "Expiration Status",
    descriptionInfo: "Jan 2022",
    dropDown: <MdOutlineKeyboardArrowDown />,
    footer: "View Detailed Report",
    arrowRight: <MdKeyboardDoubleArrowRight />,
    url: routes.expiry(),
  },
  {
    icon: <MdOutlineMedicalServices />,
    title: "298",
    description: "Medicines Available",
    url: routes.medicineslist(),
    footer: "View Detailed Report",
    arrowRight: <MdKeyboardDoubleArrowRight />,
  },
  {
    icon: <FaNotesMedical />,
    title: "01",
    description: "Medicine Shortage",
    url: routes.medicinesShortage(),
    footer: "View Detailed Report",
    arrowRight: <MdKeyboardDoubleArrowRight />,
  },
];

export const analysisTwo = [
  {
    title: "Expiry report",
    navigate: "Go to Available stocks",
    url: routes.expiry(),
    arrow: <MdKeyboardDoubleArrowRight />,
    count1: "302",
    count2: "11",
    count1Title: "batch number",
    count2Title: "expiry date",
  },
  {
    title: "Quick Report",
    navigate: "March 2024",
    arrow: <MdOutlineKeyboardArrowDown />,
    url: routes.report(),
    count1: "302",
    count2: "11",
    count1Title: "Qty of Medicines sold",
    count2Title: "Qty of new Stock added",
  },
  {
    title: "My Pharmacy",
    navigate: "Go to User Management",
    url: routes.settings(),
    arrow: <MdKeyboardDoubleArrowRight />,
    count1: "302",
    count2: "11",
    count1Title: "Total no of Suppliers",
    count2Title: "Total no of Users",
  },
  {
    title: "Suppliers",
    navigate: "View List",
    url: routes.chat(),
    arrow: <MdKeyboardDoubleArrowRight />,
    count1: "302",
    count2: "11",
    count1Title: "Total no of customers",
    count2Title: "Add new supplier details",
  },
];
