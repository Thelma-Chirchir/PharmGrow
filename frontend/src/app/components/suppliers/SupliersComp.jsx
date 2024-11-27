import dashboardStyle from '../dashboard/style.module.css'
import { LayoutHeader } from '../header'
import style from './style.module.css'
import React from 'react'
import { ReactComponent as ProfileDP } from '../../assests/images/profileDP.svg'
import sideBarStyle from '../dashboard/sidebar/style.module.css'
import axios from 'axios'
import toast from 'react-hot-toast'
import { combinedClasses } from '../../utilities/format'
import errorstyle from '../login/style.module.css'
import addStyle from '../inventory/addMedicine/style.module.css'
import dashboardstyle from '../dashboard/style.module.css'
import listStyle from '../inventory/medicineList/style.module.css'
import { MdOutlineKeyboardArrowRight, MdOutlineAdd, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { routes } from "../../utilities/routes";
import { CustomInput, Search } from "../input";
import { MyButton } from "../button";
import { useEffect } from "react";
import { HiOutlineSelector } from "react-icons/hi";



// export const SuppliersSection = () => {

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
        <section className={combinedClasses( style.main)}>
            <Head />
            <SuppliersMain />
        </section>
    )
}
export const Head = () => {
    return (
        // className={combinedClasses(dashboardstyle.main, style.main)}
        // <div className={combinedClasses(dashboardstyle.main, style.main)}>
            <div className={combinedClasses(dashboardstyle.head, style.head)}>
                <div className={dashboardstyle.info}>
                    <h3 className={style.title}>Suppliers List</h3>
                    <p>List of Medicines Suppliers</p>
                </div>
                <div className={dashboardstyle.downloadButton}>
                    <button >
                        <Link to={routes.addSupplier()} className={combinedClasses(listStyle.downloadButton, 'link')} >
                            <MdOutlineAdd />
                            <p>Add New Supplier</p>
                        </Link>
                    </button>
                </div>
            </div>
            // {/* <div className={style.head2}> */}
            // {/* <CustomInput type="search" placeholder="Search" className={style.search} /> */}
            // {/* <Search type="search" placeholder="Search" className={style.search} />

            // </div> */}
        // </div>
    )
}

export const SuppliersMain = () => {
    return (
        <section className={listStyle.medicinesListComp}>
            <Table />
        </section>
    )
}

export const Table = () => {
    const [clientData, setClientData] = React.useState([])
    const [index, setIndex] = React.useState()

    useEffect(() => {
        axios.get('http://localhost:3001/stock')
            .then(result => {
                setClientData(result.data);
                // console.log(data)
            })
            .catch(error => console.log(error))
    }, [])
    return (

        <div className={listStyle.scroll}>

            <table className={listStyle.table}>
                <thead>
                    <tr className={listStyle.headrow}>

                        <th className={listStyle.head}>Supplier's Name
                            {/* <span><HiOutlineSelector /></span> */}
                        </th>
                        <th className={listStyle.head}>Supplier's Username
                            {/* <span><HiOutlineSelector /></span> */}
                        </th>
                        <th className={listStyle.head}>Supplier's Company
                            {/* <span><HiOutlineSelector /></span> */}
                        </th>
                        <th className={listStyle.head}>Supplier's Email
                            {/* <span><HiOutlineSelector /></span> */}
                        </th>
                        <th className={listStyle.head}>Supplier's Number
                            {/* <span><HiOutlineSelector /></span> */}
                        </th>
                        <th className={listStyle.head}>Supplier's Address
                            {/* <span><HiOutlineSelector /></span> */}
                        </th>
                        {/* <th>View Full Detail</th> */}
                    </tr>
                </thead>
                <tbody>

                    {clientData.map((user, index) =>
                        <tr key={index}>
                            <td>{user.fullName}</td>
                            <td>{user.username}</td>
                            <td>{user.company}</td>
                            <td>{user.email}</td>
                            <td>{user.number}</td>
                            <td>{user.address}</td>

                        </tr>
                    )}
                </tbody>
            </table>


        </div>
    )
}


export const AddSupplier = () => {
    const [userData, setUserData] = React.useState('');
    const [success, setSuccess] = React.useState(false)
    const [edit, setEdit]= React.useState(-1)
    const [person, setPerson] = React.useState({
        id: " ",
        fullName: " ",
        username: " ",
        email: " ",
        number: " ",
        fax: " ",
        address: "",
        country: ""
    })
    React.useEffect(() => {
        axios.get('http://localhost:3001/stock')
            .then(result => {

                setUserData(result.userData);

            })
            .catch(error =>
                console.log(error))
    }, [])
    const id = userData.length + 1
    const handleInput = (e) => {
        e.persist()
        setPerson({ ...person, [e.target.name]: e.target.value })
    }
    const saveperson = (e) => {
        e.preventDefault()

        const data = {
            company: person.company,
            id: JSON.stringify(id),
            username: person.username,
            email: person.email,
            number: person.number,
            fax: person.fax,
            address: person.address,
            country: person.country
        }
        axios.post('http://localhost:3001/stock', data)
            .then(result => {
                setUserData(result.userData)
                console.log(userData)
                toast('Stock Succesfully Added')
                setSuccess('Stock Successfully Added')
            })
            .catch(error => console.log(error))

        // const stock ={
        //     name: "",
        //     id: "",
        //     group: "",
        //     qty: ""
        // }
    }
    const handleChange = (id) => {
        
    }
    const handleDelete = (id) => {
        axios.delete(''+id)
        .then(res=>console.log('deleted'))
    }

    return (
        <section className={combinedClasses( style.main)}>

            <form action="" onSubmit={saveperson} className={style.form}>
                {success && <div className={combinedClasses(errorstyle.error, style.success)}>{success}</div>}
                <div className={addStyle.inputs}>
                    <CustomInput type="text" name='fullName' onChange={handleInput} label={"Full Name"} className={style.type} />
                    <CustomInput type="text" name='company' onChange={handleInput} label={"Company's Name"} className={style.type} />
                    <CustomInput type="text" name='username' onChange={handleInput} label={"Username"} className={style.type} />
                    <CustomInput type="email" name='email' onChange={handleInput} label={"Email Address"} className={style.type} />
                    <CustomInput type="number" name='number' onChange={handleInput} label={"Phone Number"} className={style.type} />
                    <CustomInput type="text" name='fax' onChange={handleInput} label={"Fax"} className={style.type} />
                    <CustomInput type="text" name='address' onChange={handleInput} label={"Full Address"} className={style.type} />
                    <CustomInput type="text" name='country' onChange={handleInput} label={"Country"} className={style.type} />
                </div>


            </form>
            <div className={style.buttons}>
                <MyButton type='primary' title='Save Details' className={style.btn } onClick={saveperson}
                // onClick={handleadd}
                // disabled={isSubmitting}
                />
            <MyButton type='outline' className={style.deletebtn}
                onClick={()=> handleDelete(userData.id)}
            //disabled={isSubmitting}
            >
                {/* <Link to="/dashboard" className={combinedClasses(style.loginlink, 'link')}> Sign In </Link> */}
                Delete
            </MyButton>
        </div>
        </section >
    )

}



