import dashboardStyle from '../dashboard/style.module.css'
import { LayoutHeader } from '../header/index'
import sideBarstyle from '../dashboard/sidebar/style.module.css'
import style from './style.module.css'
import { MdOutlineKeyboardArrowDown, MdOutlineFilterAlt } from 'react-icons/md';
import listStyle from '../inventory/medicineList/style.module.css'
import { CustomInput } from '../input';
import { MyButton } from '../button';
import { CiExport } from "react-icons/ci";
import { data, datanew } from './data';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// import { analysisOne, analysisTwo } from './data';
import { AiOutlineFileExcel, AiOutlineFilePdf } from "react-icons/ai";
// import { HandleDropDown } from '../hooks/toggle';
import React from 'react';
import analysisStyle from '../analysis/style.module.css'
import { combinedClasses } from '../../utilities/format';
import { options, areaOption } from './data';
import { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { combinedClasses } from '../../utilities/format';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    // Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
// import {
//     AreaChart,
//     Area,
//     XAxis,
//     YAxis,
//     CartesianGrid,
//     Tooltip
// } from "recharts";
// import { ReportMain } from '../shortage/ShortageComp';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    // Tooltip,
    Filler,
    Legend
);

// export const ReportComp = () => {

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

    return (
        <section className={combinedClasses(style.main)}>
            <Head />
            <ReportMain />
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
export const ReportMain = () => {
    return <section className={style.salesMain}>
        <div className={style.row1}>
            <div className={combinedClasses(analysisStyle.eachbox, style.eachbox)}>
                <div className={style.head}>
                    <div className={style.title}>
                        <h6 className={style.divTitle}>Today's Sales</h6>
                        <p>Sales Inventory</p>
                    </div>
                    <div className={style.export}>
                        <CiExport />&nbsp;
                        <p>Export</p>
                    </div>
                </div>
                <div className={style.mapReport}>
                    {data.map((sold, index) =>
                        <div key={index} className={combinedClasses(style.eachReport, index === 0 && style.index0 || index === 1 && style.index1 || index === 2 && style.index2
                            || index === 3 && style.index3 || index === 4 && style.index4)}>
                            <div>{sold.icon}</div>
                            <h6>{sold.figure}</h6>
                            <p className={style.title}>{sold.title}</p>
                            <p className={style.increase}>+{sold.increase}% from yesterday</p>
                        </div>
                    )}
                </div>
            </div>
            {/* <div className={analysisStyle.eachbox}>
                <h6 className={style.divTitle}>Visitor's Insight</h6>
                <InsightsChart />
            </div> */}
            <div className={analysisStyle.eachbox}>
                <h6 className={style.divTitle}>Sales Analytics</h6>
                <SalesChart />
            </div>
        </div>
        <div className={analysisStyle.eachbox}><SalesTable /></div>
    </section>
}
export const InsightsChart = () => {
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
                console.log(res.carts)
                let allItems = res.carts
                console.log(allItems)
                const inventory = allItems.map((stock) => {
                    return stock.discountedTotal;
                });
                console.log(inventory)
                // setDataNew(inventory)
                const labels = ['January', 'Fevruary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'];
                const dataSource = {
                    labels,
                    datasets: [
                        {
                            label: 'Loyal Customers',
                            data: inventory,
                            backgroundColor: '#0095FF ',
                        },
                        {
                            label: 'New Customers',
                            data: inventory,
                            backgroundColor: 'EF4444',
                        },
                        {
                            label: 'Unique Customers',
                            data: inventory,
                            backgroundColor: '#3CD856',
                        }
                    ],
                };
                setRevenueData(dataSource)
                console.log(revenueData)
            })
            .catch(error => console.log(error))

    }, [])

    return <Line options={options} data={revenueData} />;
}
export const SalesChart = () => {
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
                console.log(res.carts)
                let allItems = res.carts
                console.log(allItems)
                const inventory = allItems.map((stock) => {
                    return stock.discountedTotal;
                });
                console.log(inventory)
                // setDataNew(inventory)
                const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'];
                const dataSource = {
                    labels,
                    datasets: [
                        {
                            label: 'Loyal Customers',
                            data: inventory,
                            backgroundColor: '#0095FF ',
                        },
                        {
                            label: 'New Customers',
                            data: inventory,
                            backgroundColor: 'EF4444',
                        },
                        {
                            label: 'Unique Customers',
                            data: inventory,
                            backgroundColor: '#3CD856',
                        }
                    ],
                };
                setRevenueData(dataSource)
                console.log(revenueData)
            })
            .catch(error => console.log(error))

    }, [])

    return <div width="100%" height="100%">
    <AreaChart
      width={500}
      height={400}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >

            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
            <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
            <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658"/>
        </AreaChart>
     {/* <Line options={areaOption} data={revenueData} /> */}
    </div>
}

export const SalesTable = () => {
    return <section className={listStyle.tableSection}>
        <div className={listStyle.head2}>
            <h6 className={style.divTitle}>Sales Analytics</h6>
            <div>

                <MyButton type='outline' className={listStyle.button}
                // onClick={handleLogin} 
                >
                    <p>Filter</p>
                    <MdOutlineFilterAlt />
                </MyButton>
            </div>
        </div>
        <table className={style.table}>
            <thead>
                <tr className={style.headrow}>
                    <th className={style.head}>#</th>
                    <th className={style.head}>Name</th>
                    <th className={style.head}>Popularity </th>
                    <th className={style.head}>Sales</th>
                </tr>
            </thead>
            <tbody>

                {/* {data.map((user, index) => */}
                <tr>
                    <td>id</td>
                    <td>name</td>
                    <td>Popularity chart</td>
                    <td>%</td>

                </tr>
                {/* )} */}
            </tbody>
        </table>
    </section>
}