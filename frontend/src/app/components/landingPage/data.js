import { MdOutlineArrowDropDown } from "react-icons/md";
// import { ReactComponent as ReportPic } from '../../assests/images/report.svg';
// import { ReactComponent as ListPic } from '../../assests/images/list.svg';
// import { ReactComponent as DetailsPic} from '../../assests/images/details.svg';
import reportPic from '../../assests/images/report.png';
import listPic from '../../assests/images/list.png';
import detailsPic from '../../assests/images/details.png';
import dashboard from '../../assests/images/dashboard.png';
import suppliersInfo from '../../assests/images/suppliersInfo.JPG';
// import { ReactComponent as Dashboard } from '../../assests/images/dashboard.svg'

export const navBar=[
    {title: 'Features', arrow: <MdOutlineArrowDropDown/>, url: '#features'},
    {title: 'How it works/Guide', arrow: <MdOutlineArrowDropDown/>, url: '#guide'},
    
]

export const navList =[
    {
        navTitle: "How it Works",
        navs: [
            "About",
            "Jobs",
            "For the Record"
        ]
    },
    {
        navTitle: "Company",
        navs: [
            "About",
            "Contact Us",
            "Countries",
            "Investors",
            "Vendors"
        ]
    },
    {
        navTitle: "Useful Links",
        navs: [
            "Support",
            "Web Player",
            "Free Mobile App"
        ]
    },
    {
        navTitle: "Useful Links",
        navs: [
            "Support",
            "Web Player",
            "Free Mobile App"
        ]
    }
]

export const features=[
    {title: 'Summary of all reports at', span: 'the Dashboard', subTitle: 'Access reports of sales activity, revenues and inventory at a glance through an intuitive visual dashboard', pic:dashboard},
    {title: 'Track Inventory', span: 'in Real-Time', subTitle: 'Add and access reports detailing stocks available, stocks in shortage, and easy search for available stock', pic:listPic},
    {title: 'Track Sales', span: 'in Real-Time', subTitle: 'Access graphical reports detailing sales activity, inventory and business growth at a glance', pic:reportPic},
    {title: 'Medicine Details', subTitle: 'Add and get the use, side effects, price and other details for a particular medicine', pic:detailsPic},
    {title: 'Suppliers Customers Relationship Management (CRM)', subTitle: 'Keep and access your suppliers details and contacts easily for effective communication and follow up', pic: suppliersInfo},
    {title: 'Different Device Responsiveness', subTitle: 'Access your account on any device with ease', doublePic: true}
]