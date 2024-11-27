import dashboardStyle from '../dashboard/style.module.css'
import { LayoutHeader } from '../header'
import style from './style.module.css'
import React from 'react'
import { MyButton } from '../button'
import { data } from './data'
import { ReactComponent as ProfileDP } from '../../assests/images/profileDP.svg'
import sideBarStyle from '../dashboard/sidebar/style.module.css'
import { CustomInput } from '../input'
import axios from 'axios'
import toast from 'react-hot-toast'
import { combinedClasses } from '../../utilities/format'
import errorstyle from '../login/style.module.css'
import addStyle from '../inventory/addMedicine/style.module.css'
import listStyle from '../inventory/medicineList/style.module.css'
import { routes } from '../../utilities/routes'
import { Link, NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import addstyle from '../inventory/addMedicine/style.module.css'


// export const SettingSection = () => {

//     return (
//         <section className={dashboardStyle.dashboardSection}>

//             <div className={dashboardStyle.dashboardMain}>
//                 <Main />
//             </div>
//         </section>
//     )
// }

export const Main = () => {

    return (
        <section className={combinedClasses(dashboardStyle.absolute, style.listClass)}>
            <Head />
            <SettingsMain />
        </section>
    )
}
export const Head = () => {
    const [show, setShow] = React.useState(false)
    const handleDropDown = () => {
        setShow(!show)
        // !show ? arrow===<MdOutlineKeyboardArrowDown/>:<MdOutlineKeyboardArrowUp/>
    }
    const handleSubmit = () => {

    }
    const handleCancel = () => {

    }
    return <div className={style.head}>
        <div className={style.info}>
            <h3>Settings</h3>
            <p>Manage your account settings</p>
        </div>
        <div className={style.buttons}>
            <Link to={routes.userList()} className={combinedClasses(style.loginlink, 'link')}><MyButton type='primary'
            // onClick={handleSubmit}
            //disabled={isSubmitting}
            >
                View other Users

            </MyButton></Link>
            <MyButton type='outline' className={style.cancelbtn}
                onClick={handleCancel}
            //disabled={isSubmitting}
            >
                {/* <Link to="/dashboard" className={combinedClasses(style.loginlink, 'link')}> Sign In </Link> */}
                Cancel
            </MyButton>
        </div>
    </div>
}
export const SettingsMain = () => {
    const [userData, setUserData] = React.useState([])
    const [index, setIndex] = React.useState()
    useEffect(() => {
        axios.get('http://localhost:3001/stock')
            .then(result => {
                setUserData(result.data);
                // console.log(data)
            })
            .catch(error => console.log(error))
    }, [])
    return (
        <section className={style.settings}>
            <ul className={style.column1}>
                {data.map((nav, index) =>
                    <li key={index}>
                        <NavLink to={''} className={combinedClasses(style.navBar)}>
                            {nav.icon}
                            <p>{nav.title}</p>
                        </NavLink>
                    </li>
                )}
            </ul>
            <div className={style.column2}>
                <div>
                    <h3>General Information</h3>
                    <p>View and Update your photo and personal details</p>
                </div>
                <div className={style.profile}>
                    <div className={style.intro}>
                        <div className={style.pic}>
                            <h6>Profile Picture</h6>
                            <div className={style.dp}>
                                <ProfileDP />
                            </div>
                        </div>
                        <div className={style.info}>
                            <h6 >Maria</h6>
                            <p>Super Admin</p>
                            <p>Location</p>
                        </div>
                    </div>
                    <div className={style.buttons}>
                        <MyButton type='primary' title='Change' className={style.btn}
                        // onClick={saveperson} 
                        />
                    </div>
                </div>
                <div className={addstyle.prescription}>
                    {userData.map((info, index) =>
                        <div key={index}>
                            <div>
                                <h6>Username</h6>
                                <p>{info.username}</p>
                            </div>
                            <div>
                                <h6>Phone Number</h6>
                                <p>{info.number}</p>
                            </div>
                            <div>
                                <h6>Email Address</h6>
                                <p>{info.email}</p>
                            </div>
                            <div>
                                <h6>Address</h6>
                                <p>{info.address}</p>
                            </div>
                            <div>
                                <h6>Country</h6>
                                <p>{info.country}</p>
                            </div>
                            <div>
                                <h6>Username</h6>
                                <p>{info.username}</p>
                            </div>
                            <div>
                                <h6>Username</h6>
                                <p>{info.username}</p>
                            </div>
                            <div>
                                <h6>Username</h6>
                                <p>{info.username}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </section>
    )
}

export const UsersList = () => {
    const [userData, setUserData] = React.useState([])
    const [index, setIndex] = React.useState()

    useEffect(() => {
        axios.get('http://localhost:3001/stock')
            .then(result => {
                setUserData(result.data);
                // console.log(data)
            })
            .catch(error => console.log(error))
    }, [])
    const handleDelete = (id) => {
        axios.delete('' + id)
            .then(res => console.log('deleted'))
        window.location.reload()
    }
    const handleCancel = () => {

    }
    return (
        <section className={combinedClasses(style.listClass)}>
            <div className={style.listHead}>
                <h3>List of Users</h3>
                <div className={style.buttons} >
                    <MyButton type='primary' className={style.button1}
                    // onClick={handleSubmit}
                    //disabled={isSubmitting}
                    >
                        <Link to={routes.addUser()} className={combinedClasses(style.button1, 'link')}> Add New User </Link>

                    </MyButton>

                    <MyButton type='outline' className={style.cancelbtn}>
                        <Link to={routes.settings()} className={combinedClasses('link')}> Cancel </Link>
                    </MyButton>
                </div>
            </div>
            <div className={listStyle.scroll}>

                <table className={listStyle.table}>
                    <thead>
                        <tr className={listStyle.headrow}>

                            <th className={listStyle.head}>Name
                                {/* <span><HiOutlineSelector /></span> */}
                            </th>
                            <th className={listStyle.head}>Username
                                {/* <span><HiOutlineSelector /></span> */}
                            </th>
                            <th className={listStyle.head}>Work Email
                                {/* <span><HiOutlineSelector /></span> */}
                            </th>
                            <th className={listStyle.head}>Phone Number
                                {/* <span><HiOutlineSelector /></span> */}
                            </th>
                            <th className={listStyle.head}>Address
                                {/* <span><HiOutlineSelector /></span> */}
                            </th>
                            {/* <th>View Full Detail</th> */}
                        </tr>
                    </thead>
                    <tbody>

                        {userData.map((user, index) =>
                            <tr key={index}>
                                <td>{user.fullName}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.number}</td>
                                <td>{user.address}</td>
                                <td>Delete</td>
                                <MyButton type='outline' className={style.deletebtn} onClick={() => handleDelete(userData.id)} />
                            </tr>
                        )}
                    </tbody>
                </table>


            </div>
        </section>
    )
}
export const AddUsers = () => {
    const [userData, setUserData] = React.useState('');
    const [success, setSuccess] = React.useState(false)
    // const [edit, setEdit] = React.useState(-1)
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
        axios.delete('' + id)
            .then(res => console.log('deleted'))
    }

    return (
        <section className={combinedClasses(style.listClass)}>
            <div className={style.listHead}>
                <h3>Add a new User</h3>
                <div className={style.buttons} >
                    <MyButton type='primary' className={style.button1}
                    // onClick={handleSubmit}
                    //disabled={isSubmitting}
                    >
                        <Link to={routes.userList()} className={combinedClasses(style.button1, 'link')}> Go Back </Link>

                    </MyButton>

                    <MyButton type='outline' className={style.cancelbtn}>
                        <Link to={routes.settings()} className={combinedClasses('link')}> Cancel </Link>
                    </MyButton>
                </div>
            </div>
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
            <div className={combinedClasses(style.buttons, style.buttons2)}>
                <MyButton type='primary' title='Save Details' className={style.btn} onClick={saveperson}
                // onClick={handleadd}
                // disabled={isSubmitting}
                />

            </div>
        </section >
    )

}