"use client"
import style from './style.module.css'
import sideBarstyle from './sidebar/style.module.css'
import { LayoutHeader } from '../header';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { analysisOne, analysisTwo } from './data';
import { AiOutlineFileExcel, AiOutlineFilePdf } from "react-icons/ai";
import { HandleDropDown } from '../hooks/toggle';
import React from 'react';
import { Link } from 'react-router-dom';
import { combinedClasses } from '../../utilities/format';
import { useEffect } from 'react';
import axios from 'axios';
import { Layout } from '../layout';
import { DropDown } from '../selectDropDown/SelectDropDown';
// import { MonthPicker } from '../selectDropDown/SelectDropDown';
// import { DropdownMenuRadioGroup } from '@radix-ui/react-dropdown-menu';


// import { Button } from "@/components/ui/button"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuLabel,
//   DropdownMenuRadioGroup,
//   DropdownMenuRadioItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
//   DropdownMenuSelect
// } from "@/components/ui/dropdown-menu"

// export const DashboardMain = () => {
//     return (
//         <section className={style.dashboardSection}>
//             <header>
//                 <LayoutHeader onClick={false} />
//             </header>
//             {/* <header>
//                 <Layout/>
//             </header> */}
//             <div className={style.dashboardMain}>
//                 <Main />
//             </div>
//         </section>
//     )
// }

export const Main = () => {
    const [show, setShow] = React.useState(false)
    const handleDropDown = () => {
        setShow(!show)
        // !show ? arrow===<MdOutlineKeyboardArrowDown/>:<MdOutlineKeyboardArrowUp/>
    }
    return (
        <div className={combinedClasses(style.mainDiv)}>
            <div className={style.head}>
                <div className={style.info}>
                    <h3>Dashboard</h3>
                    <p>A quick data overview of the Inventory</p>
                </div>
                <div className={style.downloadButton} onClick={handleDropDown}>
                    <button>Download Report
                        <div className={style.buttonDropdown} >
                            <MdOutlineKeyboardArrowDown />
                            {show &&
                                <div className={style.dashboardhover}>
                                    <div className={sideBarstyle.whitebg}>
                                        <div className={sideBarstyle.dropDown}></div>
                                        {/* <div className={sideBarstyle.myProfileDiv}>
                                            <div className={sideBarstyle.myProfile}>
                                                <AiOutlineFileExcel />
                                                <p>Sales Report</p>
                                            </div>
                                            <div className={sideBarstyle.logout}>
                                                <AiOutlineFilePdf />
                                                <p>Inventory Report</p>
                                            </div>
                                        </div> */}
                                        <div className={combinedClasses(style.downloadDD, sideBarstyle.myProfileDiv)}>
                                            <div className={sideBarstyle.myProfile}>
                                                <AiOutlineFileExcel />
                                                <p>Sales Report</p>
                                            </div>
                                            <div className={sideBarstyle.logout}>
                                                <AiOutlineFilePdf />
                                                <p>Inventory Report</p>
                                            </div>
                                            <div className={sideBarstyle.myProfile}>
                                                <AiOutlineFileExcel />
                                                <p>expiration report</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </button>
                </div>
            </div>
            <AnalysisOne />
            { }
            <AnalysisTwo />
        </div>
    )
}

export const AnalysisOne = () => {
    const [data, setData] = React.useState([])
    const [index, setIndex] = React.useState()
    const [revenue, setRevenue] = React.useState()
    const [inventory, setInventory] = React.useState()
    const [shortage, setShortage] = React.useState()
    const [dataNew, setDataNew] = React.useState([])
    const [revenueData, setRevenueData] = React.useState([])
    const [totalStock, setTotalStock] = React.useState()
    

    useEffect(() => {
        axios.get('http://localhost:3001/stock')
            .then(result => {
                setData(result.data);
                setInventory(data);
                setShortage();
            })
            .catch(error => console.log(error))


            fetch('https://dummyjson.com/carts')
        .then(res => res.json())
        .then(res => {
            // console.log(res)
            setDataNew(res.carts)
            // console.log(res.carts)
            let allItems = res.carts
            // console.log(allItems)
            const revenue = allItems.map((stock) => {
                return (
                    stock.discountedTotal
                );
            })
            const stock = allItems.map((stock) => {
                return (
                    stock.total
                );
            }
            );
            const shortage = allItems.map((stock) => {
                // stock.totalProducts
                if (stock.totalProducts < 50){
                    setShortage(stock.totalProducts < 50)
                }
            }
            );
            // console.log(inventory)
            // setDataNew(inventory)

            setRevenueData(revenue)
            setTotalStock(stock)
        })
    }, [])
    const monthRevenue = revenueData;
    const totalInventory = totalStock;
    // const totalShortage = shortage;
    return (
        <div className={style.analysis}>
            {
                analysisOne.map((analysis, index) =>
                    <div key={index} className={combinedClasses(style.eachAnalysis, (index === 0 & 2 && style.mainIndex) || (index === 1 && style.index1)
                        || (index === 3 && style.index2) || (index === 4 && style.index3))}>
                        <div className={style.main}>
                            <div className={style.image}>{analysis.icon}</div>
                            {/*{index === 1 && <h6># {monthRevenue}</h6> || index === 2 && <h6>{totalInventory}</h6> || index===0 && <h6>{analysis.title}</h6> 
                            || index === 3 && <h6>{shortage}</h6> || index === 0 && <h6>{analysis.title}</h6>}
                            {/* <div className={style.image}>{analysis.icon}</div> */}
                            {/* <select name="" id=""></select> */}
                            <div name="" id="" className={style.description}>
                                <p>{analysis.description}</p>
                                <span>&nbsp; {index===1 ? <DropDown/> : analysis.descriptionInfo}</span>
                                {/* &nbsp; {analysis.dropDown} */}
                            </div>
                            {/* <MonthYear/> */}
                        </div>
                        <Link to={analysis.url} className={combinedClasses(style.footer, 'link')}>
                            {analysis.footer}
                            {analysis.arrowRight}
                        </Link>
                    </div>
                )
            }
        </div>
    )
}
// export const MonthYear=() =>{
//     const range = {
//       min: { year: 1900, month: 3 },
//       max: { year: 2025, month: 2 }
//     };
  
//     return (
//       <div className="App">
//         <MonthPicker range={range} />
//       </div>
//     );
//   }
// export const DropdownMenuMain=()=>{
//     const [position, setPosition] = React.useState("bottom")
  
//     return (
//       <DropdownMenu>
//         <DropdownMenuTrigger asChild>
//           <Button variant="outline">March 2024</Button>
//         </DropdownMenuTrigger>
//         <DropdownMenuContent className="w-56">
//           <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
//           <DropdownMenuSeparator />
//           <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
//             <DropdownMenuRadioItem value="top">April 2024</DropdownMenuRadioItem>
//             <DropdownMenuRadioItem value="bottom">June 2024</DropdownMenuRadioItem>
//             <DropdownMenuRadioItem value="right">July 2024</DropdownMenuRadioItem>
//           </DropdownMenuRadioGroup>
//         </DropdownMenuContent>
//       </DropdownMenu>
//     )
//   }
export const AnalysisTwo = () => {
    return (
        <div className={style.analysis2}>
            {
                analysisTwo.map((analysis) =>
                    <div className={style.eachAnalysis}>
                        <div className={style.row1}>
                            <h6>{analysis.title}</h6>
                            <Link to={analysis.url} className={combinedClasses(style.navigate, 'link')}>{analysis.navigate} &nbsp; <span>{analysis.arrow}</span></Link>
                        </div>
                        <div className={style.row2}>
                            <div>
                                <h3>{analysis.count1}</h3>
                                <p>{analysis.count1Title}</p>
                            </div>
                            <div>
                                <h3>{analysis.count2}</h3>
                                <p>{analysis.count2Title}</p>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}