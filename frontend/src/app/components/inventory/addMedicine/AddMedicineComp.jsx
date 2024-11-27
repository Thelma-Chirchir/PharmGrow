import React, { useEffect, useState } from "react";
import style from './style.module.css'
import { LayoutHeader } from "../../header";
import dashboardstyle from '../../dashboard/style.module.css'
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CustomInput } from "../../input";
import { combinedClasses } from "../../../utilities/format";
import { MyButton } from '../../button'
import axios from "axios";
import toast from "react-hot-toast";
import errorstyle from '../../login/style.module.css'
import listStyle from '../medicineList/style.module.css'

// export const AddMedicineComp = () => {
//     return (
//         <section>
//             {/* <header className={style.header}>
//                 <LayoutHeader />
//             </header> */}
//             <main className={style.main}>
//                 <AddMedicineMain />
//             </main>
//         </section>
//     )
// }

export const AddMedicineMain = () => {
    return (
        <div className={combinedClasses(style.main)}>
            <div className={dashboardstyle.head}>
            <div className={dashboardstyle.info}>
            <div className={listStyle.headSpan}>
                <h3 className={listStyle.title}>Inventory
                    <span>&nbsp; <MdOutlineKeyboardArrowRight /></span> &nbsp; </h3>
                <h3 className={listStyle.h32}>List of Medicines</h3>
                <h3>Add new Medicine</h3>
            </div>
            <p>All fields are mandatory except mentioned as optional</p>
        </div>
                {/* <div className={dashboardstyle.info}>

                    <h3 className={style.title}><span>Inventory &nbsp;
                        <MdOutlineKeyboardArrowRight /> &nbsp;
                        List of Medicines &nbsp;
                        <MdOutlineKeyboardArrowRight />&nbsp;
                        Add new Medicine &nbsp;</span> </h3>

                    <p>All fields are mandatory except mentioned as optional</p>
                </div> */}
            </div>
            
            <Form />
        </div>
    )
}


export const Form = () => {
    const [data, setData]=React.useState('');
    const [success, setSuccess]=React.useState(false)
    const [stock, setStock] = React.useState({
        name: " ",
        id: " ",
        group: " ",
        qty: " ",
        usage: " ",
        batchno: " ",
        dateofmanufucture:" ",
        expirydate: " ",
        price: "",
        disposal: " ",
        description: ""


    })
    React.useEffect(() => {
        axios.get('http://localhost:3001/stock')
            .then(result => {
                
                setData(result.data);
                
            })
            .catch(error =>
                console.log(error))
    }, [])
    const id=data.length + 1
    const handleInput = (e) => {
        e.persist()
        setStock({ ...stock, [e.target.name]: e.target.value })
    }
    const saveStock = (e) => {
        e.preventDefault()
        
        const data = {
            name: stock.name,
            medID: JSON.stringify(id),
            medGroup: stock.group,
            qty: stock.qty,
            usage: stock.usage,
            batchno: stock.batchno,
            dateofmanufucture: stock.dateofmanufucture,
            expirydate: stock.expirydate,
            price: stock.price,
            disposal: stock.disposal,
            description: stock.description
        }
        axios.post('http://localhost:3001/stock', data)
        .then(result => {
            setData(result.data)
            console.log(data)
            toast('Stock Succesfully Added')
            setSuccess('Stock Successfully Added')
        })
        .catch(error => console.log(error))

    }
    
   
    return <form action="" onSubmit={saveStock}>
        {success && <div className={combinedClasses(errorstyle.error, style.success)}>{success}</div>}
        <div className={style.inputs}>
            <CustomInput type="text" name='name' onChange={handleInput} label={"Medicine Name"} className={style.type} />
            <CustomInput type="text" name='medID' onChange={handleInput} label={"Medicine ID"} className={style.type} />
            <CustomInput type="text" name='medGroup' onChange={handleInput} label={"Medicine Group"} className={style.type} />
            <CustomInput type="text" name='qty' onChange={handleInput} label={"Quantity in Number"} className={style.type} />
            <CustomInput type="text" name='batchno' onChange={handleInput} label={"Batch Number"} className={style.type} />  {/* <p>Enter the batch number of the medication. If you don't have one, leave it blank.</p> */}
            <CustomInput type="date" name='dateofmanufucture' onChange={handleInput} label={"Manufacturing Date"} className={style.type} /> {/* <p>Enter the manufacturing date of the medication. If you don't have one, leave it blank.</p> */}
            <CustomInput type="date" name='expirydate' onChange={handleInput} label={"Expiry Date"} className={style.type} /> {/* <p>Enter the expiration date of the medication. If you don't have one, leave it blank.</p> */}
            <CustomInput type="text" name='price' onChange={handleInput} label={"Price"} className={style.type} />
            <CustomInput type="text" name='disposal' onChange={handleInput} label={"Disposal Type"} className={style.type} /> {/* <p>Enter the type of disposal of the medication. If you don't have one, leave it blank.</p> */} 
            <CustomInput type="text" name='description' onChange={handleInput} label={"Description"} className={style.type} /> {/* <p>Enter a brief description of the medication. If you don't have one, leave it blank.</p> */}
        </div>
       
        <MyButton type='primary' title='Save Details' className={style.btn}
        onClick={saveStock}
        // disabled={isSubmitting}
        />
    </form>

}



//  {/* <div className={style.prescription}>
//             <div>
//                 <h6 >How to use</h6>
//                 <textarea name="usage" id="" cols="30" rows="10" onChange={handleInput}></textarea>
//                 {/* <p>Take this medication by mouth with or without food as directed by your doctor, usually once daily.</p> */}
        //     </div>
        //     <div>
        //         <h6>Side Effects</h6>
        //         <textarea name="sideEffects" id="" cols="30" rows="10" onChange={handleInput}></textarea>
        //         {/* <p>Dizziness, lightheadedness, drowsiness, nausea, vomiting, tiredness, excess saliva/drooling, blurred vision, weight gain, constipation, headache, and trouble sleeping may occur. If any of these effects persist or worsen, consult your doctor.</p> */}
        //     </div> */}
        // </div>