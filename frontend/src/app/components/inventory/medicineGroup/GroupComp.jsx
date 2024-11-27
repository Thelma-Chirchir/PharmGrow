import dashboardStyle from '../../dashboard/style.module.css'
import listStyle from '../medicineList/style.module.css'
import { LayoutHeader } from '../../header'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { AiOutlineFileExcel, AiOutlineFilePdf } from "react-icons/ai";
import sideBarstyle from '../../dashboard/sidebar/style.module.css'
import style from './style.module.css'
import axios from 'axios';
// import { HandleDropDown } from '../hooks/toggle';
import React from 'react';
import { useEffect, useState } from 'react';
import { combinedClasses } from '../../../utilities/format';

// export const GroupComp = () => {

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
        <section className={combinedClasses(style.mainDiv)}>
            <Head />
            <GroupMain />
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
            <h3>Medicines Groups</h3>
            <p>All Groups available</p>
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

// const [searchField, setSearchField] = useState("false");
// const [searchParam] = useState(["group", "name", "usage"]);

// const Buttons = ({ filterItem, setItem, menuItems }) => {
//     return (
//       <>
//         <div className="d-flex justify-content-center">
//           {menuItems.map((Val, id) => {
//             return (
//               <button
//                 className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
//                 onClick={() => filterItem(Val)}
//                 key={id}
//               >
//                 {Val}
//               </button>
//             );
//           })}
//           <button
//             className="btn-dark text-white p-1 px-3 mx-5 fw-bold btn"
//             onClick={() => setItem(Data)}
//           >
//             All
//           </button> 
//          </div>
//       </>
//     );
//   };
export const GroupMain = () => {
    const [dataList, setDataList] = React.useState([])
    const [index, setIndex] = React.useState()
    const [qtyNo, setQtyNo] = React.useState()
    const [filterParam, setFilterParam] = useState(["All"]);
    // const [item]
    const [menuItemsQty, setMenuItemQty] = useState(0)

    useEffect(() => {
        axios.get('http://localhost:3001/stock')
            .then(result => {
                console.log(result.data)
                setDataList(result.data)
                // let no=data.qty
                // setQtyNo(no.length)
                console.log(dataList)
            })
            .catch(error => console.log(error))

    }, [])
    
    const menuItems = [...new Set(dataList.map((filter) => filter.group))]
    // const filterGroup = () => {
    //     const menuGroup = [...new Set(dataList.map((filter) => filter.group))]
    //     // console.log(dataList)
    //     const newGroupList = dataList.map((filter) => {
    //         return newVal.group === menuItems;
    //         // comparing category for displaying data
    //     });
    //     setDataList(newItem);
    // };
    // console.log(dataList)
    // console.log(filterItem)

    // const search=(data)=> {
    //     console.log(data)
    //     return data.filter((item) => {
    //         return searchParam.some((newItem) => {
    //             return (
    //                 item[newItem]
    //                     .toString()
    //                     .toLowerCase()
    //                     .indexOf(searchField.toLowerCase()) > -1
    //             );
    //         });
    //     });
    // }
    return (
        <section className={style.main}>
            <table className={listStyle.table}>
                <thead>
                    <tr className={listStyle.headrow}>

                        <th className={listStyle.head}>Group Name
                            {/* <span><HiOutlineSelector /></span> */}
                        </th>
                        <th className={listStyle.head}>Stock left in Qty
                            {/* <span><HiOutlineSelector /></span> */}
                        </th>
                    </tr>
                </thead>
                <tbody>

                    {menuItems.map((stock, index) =>
                        <tr key={index}>
                            <td>{stock}</td>
                            <td>{stock}</td>
                            {/* <td>{stock.qtyNo}</td> */}
                        </tr>
                    )}
                </tbody>
            </table>
        </section>
    )
}