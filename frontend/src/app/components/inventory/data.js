import { MdOutlineHealthAndSafety, MdOutlineKeyboardArrowDown, MdKeyboardDoubleArrowRight, MdOutlineMedicalServices, } from 'react-icons/md';
import { FaNotesMedical } from "react-icons/fa6";
import { HiOutlineExclamationTriangle } from "react-icons/hi2";
import { routes } from '../../utilities/routes';

export const analysisOne = [
    { icon: <MdOutlineMedicalServices />, title: "298", description: "Medicines Available", footer: "View Full List", arrowRight: <MdKeyboardDoubleArrowRight/>, url: routes.medicineslist()},
    {
        icon: <MdOutlineMedicalServices />, title: "02", description: 'Medicine groups', arrowRight: <MdKeyboardDoubleArrowRight />, footer: "View Full List",  url: routes.medicinegroups()
    },
    { icon: <HiOutlineExclamationTriangle />, title: "01", description: "Medicines Shortage", footer: "Resolve Now", arrowRight: <MdKeyboardDoubleArrowRight />,  url: routes.addMedicine() }
]

export const analysisTwo=[
    {title: 'Medicine', count1: '302', count2: '11', count1Title: 'Total no of Medicines', count2Title: 'Medicine Groups'},
    {title: 'Inventory in Qty', navigate: 'Send Stock Request', arrow: <MdKeyboardDoubleArrowRight/>, count1: '302', count2: '11', count1Title: 'Qty of Medicines sold', count2Title: 'Invoices Generated', count3: '08', count3Title: 'Stock Left'},
   
]