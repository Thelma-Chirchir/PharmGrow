import { CustomInput } from '../input';
import { IoLanguageOutline } from "react-icons/io5";
import style from './style.module.css'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import DateTime from '../dateTime';
import { combinedClasses } from '../../utilities/format';
import { Search } from '../input';


export const LayoutHeader = (props) => {

    return (
        props.onClick ?
            <div className={combinedClasses(style.header, style.header2)}>
                {/* <IoMenu className={style.menuIcon} /> */}
                <div className={style.greetingTime}>

                    <div className={style.greeting}>
                        <div>hello</div>
                        <p><Greeting /></p>
                    </div>

                    <div className={style.time}>
                        <DateTime />
                        {/* <p>14 January 2022</p>
                    <p>22:45:04</p> */}
                    </div>
                </div>
            </div> :

            <div className={style.header}>
                
                {/* <CustomInput type="search" placeholder="Search for Available Medicines" className={style.search} /> */}
                <Search type="search" placeholder="Search for a Customer" className={style.search}/>
                {/* <div className={style.language}>
                <div className={style.iconTitle}>
                    <IoLanguageOutline />
                    <p>English</p>
                </div>
                <MdOutlineKeyboardArrowDown />
            </div> */}
                <div className={style.greetingTime}>
                {/* <IoMenu className={style.menuIcon}/> */}
                    <div className={style.greeting}>
                        <div></div>
                        <p><span></span><Greeting /></p>
                    </div>

                    <div className={style.time}>
                        <DateTime />
                        {/* <p>14 January 2022</p>
                    <p>22:45:04</p> */}
                    </div>
                    
                </div>
                
            </div>
    )
}

export const Greeting = () => {
    var myDate = new Date();
    let hours = new Date().getHours();
    let greet;

    if (hours < 12)
        greet = "Morning";
    else if (hours >= 12 && hours <= 17)
        greet = "Afternoon";
    else if (hours >= 17 && hours <= 24)
        greet = "Evening";

    return <span>Good {greet}</span>
}