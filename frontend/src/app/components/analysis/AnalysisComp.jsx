import dashboardStyle from '../dashboard/style.module.css'
import { LayoutHeader } from '../header/index'
import sideBarstyle from '../dashboard/sidebar/style.module.css'
import style from './style.module.css'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight } from 'react-icons/md';
// import { analysisOne, analysisTwo } from './data';
import { AiOutlineFileExcel, AiOutlineFilePdf } from "react-icons/ai";
// import { HandleDropDown } from '../hooks/toggle';
import React, { useEffect, useState } from 'react';
import { getRevenue } from '../../utilities/API';
import axios from 'axios';
import { MdOutlineArrowUpward } from "react-icons/md";
import { mapData } from './data'
import ProgressBar from "@ramonak/react-progress-bar";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { combinedClasses } from '../../utilities/format';
import { Link } from 'react-router-dom';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
// import { Link } from 'react-router-dom';
// import { combinedClasses } from '../../utilities/format';

// export const AnalysisMain = () => {

//     return (
//         <section className={dashboardStyle.dashboardSection}>
//             <header>
//                 <LayoutHeader />
//             </header>
//             <div className={dashboardStyle.dashboardMain}>
//                 <Main />
//             </div>
//         </section>
//     )
// }

export const Main = () => {
    const [show, setShow] = React.useState(false)
    const [dataNew, setDataNew] = React.useState([])
    const [revenueData, setRevenueData] = React.useState()
    const [totalSales, setTotalSales] = React.useState()
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
                    stock.discountedTotal,
                    stock.total
                );
            })
            const stock = allItems.map((stock) => {
                return (
                    stock.total
                );
            }
            );
            // console.log(inventory)
            // setDataNew(inventory)

            setRevenueData(revenue)
            setTotalSales(stock)
        })
    const handleDropDown = () => {
        setShow(!show)
        // !show ? arrow===<MdOutlineKeyboardArrowDown/>:<MdOutlineKeyboardArrowUp/>
    }

    return (
        <section className={combinedClasses( style.main)}>
            <Head />

            <div className={style.analysisRow2}>
                <div className={style.gridGrid}>
                    {mapData.map((data, index) => {
                        return <div className={style.eachbox} key={index}>
                            <h6>{data.title}</h6>
                            <div className={style.amount}>
                                {/* <h3>{revenueData}</h3> */}
                                {/* {index === 1 && <h6># {revenueData}</h6> ||
                                index === 2 && <h6>{totalSales}</h6>} */}
                                {/* // index === 3 && <h6>{totalShortage}</h6> ||
                                    // index === 0 && <h6>{analysis.title}</h6> */}
                                <div className={index === 2 ? style.lastIndex : style.green}>
                                    <MdOutlineArrowUpward /> &nbsp;
                                    <span>19%</span></div>
                            </div>
                            <p className={style.p1}>Compared to Last Month</p>
                            <Link to={data.url} className={combinedClasses(style.details, 'link') }>
                                <p>View Details</p>
                                <MdOutlineKeyboardArrowRight />
                            </Link>
                        </div>

                    })}

                </div>
                {/* <div>hello</div>
                <div>hello</div> */}
            </div>
            <div className={style.analysisRow1}>
                <div className={style.eachbox}><Chart /></div>
                <div className={style.eachbox}><CustomTable /></div>
            </div>
        </section>
    )
}
export const Head = () => {
    const [show, setShow] = React.useState(false)
    const handleDropDown = () => {
        setShow(!show)
        // !show ? arrow===<MdOutlineKeyboardArrowDown/>:<MdOutlineKeyboardArrowUp/>
    }
    return <div className={dashboardStyle.head}>
        <div className={dashboardStyle.info}>
            <h3>Sales Report</h3>
            <p>Today's Sales Report</p>
        </div>
        <div className={dashboardStyle.downloadButton} onClick={handleDropDown}>
            <button>Download Report
                <div className={dashboardStyle.buttonDropdown} >
                    <MdOutlineKeyboardArrowDown />
                    {show &&
                        <div className={dashboardStyle.dashboardhover}>
                            <div className={sideBarstyle.whitebg}>
                                <div className={sideBarstyle.dropDown}></div>
                                <div className={sideBarstyle.myProfileDiv}>
                                    <div className={sideBarstyle.myProfile}>
                                        <AiOutlineFileExcel />
                                        <p>Excel</p>
                                    </div>
                                    <div className={sideBarstyle.logout}>
                                        <AiOutlineFilePdf />
                                        <p>PDF</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </button>
        </div>
    </div>
}
export const ProgressDiv = (props) => {
    const index = props.index[0, 1, 2, 3, 4, 5]
    return <ProgressBar completed={60}
        className={combinedClasses(style.wrapper,
            index === 0 && style.wrapper1 || index === 1 && style.wrapper2 || index === 2 && style.wrapper3 || index === 3 && style.wrapper4 || index === 4 && style.wrapper5)}

        barContainerClassName={combinedClasses(style.container,
            index === 0 && style.container1 || index === 1 && style.container2 || index === 2 && style.container3 || index === 3 && style.container4 || index === 4 && style.container5)}

        completedClassName={combinedClasses(style.barCompleted,
            index === 0 && style.barCompleted1 || index === 1 && style.barCompleted2 || index === 2 && style.barCompleted3 || index === 3 && style.barCompleted4 || index === 4 && style.barCompleted5)}

        labelClassName={combinedClasses(style.label,
            index === 0 && style.label1 || index === 1 && style.label2 || index === 2 && style.label3 || index === 3 && style.label4 || index === 4 && style.label5)} />
}
export const Chart = () => {
    const [dataNew, setDataNew] = React.useState([])
    const [revenueData, setRevenueData] = React.useState({
        labels: [],
        datasets: []
    })
    useEffect(() => {
        // .then(result => {
        //     setData(result.data);
        //     // console.log(data)
        // })
        fetch('https://dummyjson.com/carts')
            .then(res => res.json())
            .then(res => {
                // console.log(res)
                setDataNew(res.carts)
                // console.log(res.carts)
                let allItems = res.carts
                // console.log(allItems)
                const inventory = allItems.map((stock) => {
                    return stock.discountedTotal;
                });
                // console.log(inventory)
                // setDataNew(inventory)
                const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
                const dataSource = {
                    labels,
                    datasets: [
                        {
                            label: 'Sales',
                            data: inventory,
                            backgroundColor: '#0095FF',
                        }
                    ],
                };
                setRevenueData(dataSource)
                // console.log(revenueData)
            })
            // console.log(dataNew)
            // console.log('dataNew')
            // .then((res) => {
            //     // setData(result.data);
            //     // console.log(data)
            //     const inventory = res.carts.map((cart) => {
            //         return cart.discountedTotal;
            //     });
            //     // const inventory = 'hello'
            //     // console.log(inventory)
            //     const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            //     const dataSource = {
            //         labels,
            //         datasets: [
            //             {
            //                 // label: 'Dataset 1',
            //                 data: inventory,
            //                 backgroundColor: '#0095FF',
            //             }
            //         ],
            //     };
            //     // setRevenueData(dataSource)
            // })
            .catch(error => console.log(error))

    }, [])

    return <div>
        <h6>Total Revenue</h6>
        <Bar options={options} data={revenueData} />
    </div>;
}

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom',
        },
        title: {
            display: true,
            text: 'Total Revenue',
        },
    },
};

export const CustomTable = () => {
    const [data, setData] = React.useState([])
    axios.get('https://dummyjson.com/products?limit=5')
        .then(res => {
            setData(res.data.products)
        })
    // .then(res=>{
    //     setData(res)

    // })
    // console.log(data)
    return <section className={style.tableSection}>
        <h6>top sales</h6>
        <table className={style.table}>
            <thead>
                <tr className={style.headrow}>
                    <th className={style.head}>#</th>
                    <th className={style.head}>Name</th>
                    <th className={style.head}>Sales </th>
                    <th className={style.head}>popularity </th>
                </tr>
            </thead>
            <tbody>

                {data.map((item, index) =>
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td key={index}><ProgressDiv index={item} /></td>
                        <td>45%</td>

                    </tr>
                )}
            </tbody>
        </table>
    </section>
}


