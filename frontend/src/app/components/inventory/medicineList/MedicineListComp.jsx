import { SideBar } from "../../dashboard/sidebar"
import style from './style.module.css';
import dashboardstyle from '../../dashboard/style.module.css'
import { MdOutlineKeyboardArrowRight, MdOutlineAdd, MdOutlineFilterAlt, MdOutlineKeyboardArrowDown, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { routes } from "../../../utilities/routes";
import { CustomInput, Search } from "../../input";
import { combinedClasses } from "../../../utilities/format";
import { MyButton } from "../../button";
import { useEffect } from "react";
import React from "react";
import { HiOutlineSelector } from "react-icons/hi";
import axios from 'axios';
import { LayoutHeader } from '../../header';
import { Navigate } from "react-router-dom";
import { MedicinesDetailMain } from "../medicineDetail/medicineDetailComp";




// export const MedicinesListComp = () => {
//     return (
//         <section className={style.medicinesListComp}>
//             {/* <header className={style.header}><LayoutHeader /></header> */}
//             <MedicinesListMain />
//         </section>
//     )
// }

export const MedicinesListMain = () => {
    return (
        <div className={combinedClasses(style.main)}>
            <div className={combinedClasses(dashboardstyle.head, style.head)}>
                <div className={dashboardstyle.info}>
                    <div className={style.headSpan}>
                        <h3 className={style.title}>Inventory
                            <span>&nbsp; <MdOutlineKeyboardArrowRight /></span> &nbsp; </h3>
                        <h3 className={style.h32}>List of Medicines</h3>
                    </div>
                    <p>List of Medicines available for sales</p>
                </div>
                <div className={dashboardstyle.downloadButton}>
                    <button >
                        <Link to={routes.addMedicine()} className={combinedClasses(style.downloadButton, 'link')} >
                            <MdOutlineAdd />
                            <p>Add New Item</p>
                        </Link>
                    </button>
                </div>
            </div>
            {/* <div className={style.head2}> */}
                {/* <CustomInput type="search" placeholder="Search" className={style.search} /> */}
                {/* <Search type="search" placeholder="Search" className={style.search} /> */}
                {/* <div>
                    <MdOutlineFilterAlt />
                    <MyButton type='outline' className={style.button}
                    // onClick={handleLogin} 
                    >
                        <p> - Select Group - </p>
                        <MdOutlineKeyboardArrowDown />
                    </MyButton>
                </div> */}
            {/* </div> */}
            <Table />

        </div>
    )
}

export const Table = () => {
    const [data, setData] = React.useState([])
    const [index, setIndex] = React.useState()

    useEffect(() => {
        axios.get('http://localhost:3001/stock')
            .then(result => {
                setData(result.data);
                // console.log(data)
            })
            .catch(error => console.log(error))
    }, [])
    const handleMore = (id) => {
        console.log(id)
        setIndex(id)
        // Navigate(routes.medicineDetail())
    }
    return (

        <div className={style.scroll}>
            {index ?
                <MedicinesDetailMain index={index} />
                :
                <table className={style.table}>
                    <thead>
                        <tr className={style.headrow}>
                            <th className={style.head}>Medicine Name
                                <span><HiOutlineSelector /></span>
                            </th>
                            <th className={style.head}>Medicine ID
                                <span><HiOutlineSelector /></span>
                            </th>
                            <th className={style.head}>Group Name
                                <span><HiOutlineSelector /></span>
                            </th>
                            <th className={style.head}>Stock in Qty
                                <span><HiOutlineSelector /></span>
                            </th>
                            <th className={style.head}>Action
                                <span><HiOutlineSelector /></span>
                            </th>
                            {/* <th>View Full Detail</th> */}
                        </tr>
                    </thead>
                    <tbody>

                        {data.map((user, index) =>
                            <tr key={index}>
                                <td>{user.name}</td>
                                <td>{user.id}</td>
                                <td>{user.group}</td>
                                <td>{user.qty}</td>
                                <td onClick={() => handleMore(user.id)} className={style.details}>View Full Detail &nbsp;
                                    <MdKeyboardDoubleArrowRight />
                                </td>

                            </tr>
                        )}
                    </tbody>
                </table>
            }

        </div>
    )
}