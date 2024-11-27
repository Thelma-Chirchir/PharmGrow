import style from './style.module.css'
import { LayoutHeader } from '../../header'
import { analysisTwo } from '../data'
import { MdOutlineKeyboardArrowRight, MdOutlineAdd, MdOutlineDeleteOutline, MdKeyboardDoubleArrowRight } from "react-icons/md";
import dashboardstyle from '../../dashboard/style.module.css'
import { CustomInput } from '../../input';
import addstyle from '../addMedicine/style.module.css'
import errorstyle from '../../login/style.module.css'
import { MyButton } from '../../button';
import { Link } from 'react-router-dom';
import { routes } from '../../../utilities/routes';
import { combinedClasses } from '../../../utilities/format';
import React from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { MedicinesListComp } from '../medicineList/MedicineListComp';

// export const MedicinesDetailComp = () => {
//     return (
//         <section className={style.inventory}>
//             <header className={style.header}><LayoutHeader /></header>

//         </section>
//     )
// }

// const MedicineDetails = ({ ...data }) => {
//     <div key={data.id}>

//     </div>
// }
export const MedicinesDetailMain = (props) => {
    // const [data, setData] = React.useState('');
    // const [stock, setStock] = React.useState({
    //     name: " ",
    //     id: " ",
    //     group: " ",
    //     qty: " ",
    //     usage: " ",
    //     sideEffect: " ",

    // })
    const index = props.index
    const [data, setData] = React.useState([])
    // const [deleteId, setdeleteId]= React.useState(-1)
    const [success, setSuccess] = React.useState(false)
    React.useEffect(() => {
        axios.get('http://localhost:3001/stock')
            .then(result => {
                setData(result.data[index])
            })
            .catch(error =>
                console.log(error))

        
    }, [])
    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/stock'+ id)
            .then(result => {
                console.log('success')
                console.log (id)
                
            })
            .catch(error =>
                console.log(error))

        
    }
    // const handleMore = (id) => {
    //     console.log(id)
    //     setIndex(id)
    //     // Navigate(routes.medicineDetail())
    // }
    // const handleDelete = (id) => {
    //         console.log(id)
    // }

    const handleSold = (index) => {

    }
    // const handleDelete = (id) =>{
    //     setdeleteId(id)
    // }
    // const testings = indexInfo.filter(item  =>
    //     item.category === 'Testing'
    //   );

    /* new array of only 'testing' category */
    //   const testings = courses.filter(course  =>
    //     course.category === 'Testing'
    //   );

    //   /* Mapping the courses into a new array of JSX nodes as arrayDataItems */
    //   const arrayDataItems = testings.map(course => 
    //     <li key={course.id}>
    //       <p>{course.name}</p>
    //       <span>{course.price}</span>
    //       <p id="category">{course.category}</p>
    //     </li>

    //   )

    return (

        <div key={index} className={combinedClasses(style.main)}>

            {/* <div className={dashboardstyle.head}>
                <div className={dashboardstyle.info}>
                    <h3 className={style.title}>Inventory <span>&nbsp; <MdOutlineKeyboardArrowRight /></span> &nbsp;Medicine Details</h3>
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
            <CustomInput type="search" placeholder="Search" className={style.search} />  */}
            {success ?
                <div className={combinedClasses(errorstyle.error, addstyle.success)}>{success}</div> :
                <AnalysisTwo data={data} />}
            {/* {
                data.map((info) => {
                    <div>
                        <AnalysisTwo title= {data.name} id={data.id} /> */}
            {/* <AnalysisTwo {...info} /> */}
            {/* </div>
                })
            } */}

            <div>
                {/* <div className={dashboardstyle.eachAnalysis}> */}
                {/* {data.map((medicine, index) => */}
                <div className={addstyle.prescription}>
                    <div>

                        <h6>How to use</h6>
                        <div className={addstyle.prescriptionText} name="usage" cols="30" rows="10">{data.usage}</div>
                        {/* <p>Take this medication by mouth with or without food as directed by your doctor, usually once daily.</p> */}
                    </div>
                    <div>
                        <h6>Side Effects</h6>
                        <div className={addstyle.prescriptionText} name="" id="" cols="30" rows="10">{data.sideEffects}</div>
                        {/* <p>Dizziness, lightheadedness, drowsiness, nausea, vomiting, tiredness, excess saliva/drooling, blurred vision, weight gain, constipation, headache, and trouble sleeping may occur. If any of these effects persist or worsen, consult your doctor.</p> */}
                    </div>

                </div>
                {/* )} */}

                <div className={style.buttons}>
                    <MyButton type='outline' className={style.deletebtn}
                        onClick={() => handleDelete(data)}
                    // disabled={isSubmitting}
                    >

                        <MdOutlineDeleteOutline /> &nbsp;
                        Delete Medicine
                    </MyButton>


                    <MyButton type='primary' className={style.soldbtn}
                        onClick={() => handleSold(index)}
                    // disabled={isSubmitting}
                    >&nbsp; Purchase &nbsp;</MyButton>

                </div>

                {/* </div> */}
            </div>
        </div>
    )
}

export const AnalysisTwo = (props) => {
    let data = props.data
    return (
        <div className={dashboardstyle.analysis2}>
            {
                analysisTwo.map((analysis, index) =>
                    <div className={combinedClasses(dashboardstyle.eachAnalysis, style.eachAnalysis)}>
                        <div className={dashboardstyle.row1}>
                            <h6>{index === 0 ? data.name : analysis.title}</h6>
                            <p>{analysis.navigate} &nbsp; <span>{analysis.arrow}</span></p>
                        </div>
                        <div className={analysis[index] != 0 ? combinedClasses(dashboardstyle.row2, style.nowrap) : dashboardstyle.row2}>
                            <div>
                                <h3>{data.id}</h3>
                                <p>{analysis.count1Title}</p>
                            </div>
                            <div>
                                <h3>20</h3>
                                <p>{analysis.count2Title}</p>
                            </div>
                            <div>
                                <h3>{analysis.count3}</h3>
                                <p>{analysis.count3Title}</p>
                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    )
}