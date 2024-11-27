import style from './style.module.css'
import { Logo } from '../../logo/index'
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { ReactComponent as ProfileDP } from '../../../assests/images/profileDP.svg'
import { sideBarNavs1, sideBarNavs2, sideBarNavs3 } from './data';
import { MdOutlineAccountCircle, MdOutlineLogout, MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import React from 'react';
import { Link } from 'react-router-dom';
import { combinedClasses } from '../../../utilities/format';
import { NavLink } from 'react-router-dom';
import { routes } from '../../../utilities/routes';
import { IoMenu } from "react-icons/io5";
import axios from 'axios';
import toast from 'react-hot-toast';
import { useEffect } from 'react';
import DateTime from '../../dateTime';
// import { HandleDropDown } from '../../hooks/toggle';

export const SideBarDiv = (props) => {
    const [show, setShow] = React.useState(false)
    const [dropDown, setDropDown] = React.useState(false)
    const handleDropDown = () => {
        setShow(!show)

        // !show ? arrow===<MdOutlineKeyboardArrowDown/>:<MdOutlineKeyboardArrowUp/>
    }
    const [notification, setNotification] = React.useState(false)
    const [data, setData] = React.useState([])
    const [badge, setBadge] = React.useState()
    useEffect(() => {
        axios.get('http://localhost:3001/stock')
            .then(result => {
                setData(result.all);
                toast(result.all.message)

            })
            .catch(error => console.log(error))
        setBadge(data.length)
    }, [])
    const makeSubNavActive = () => {


    }
    const handleNotification = (e) => {
        // e.preventdefault()
        console.log(badge)
        setBadge(0)
        setNotification(!notification)
    }
    const navDropDown = (e) => {
        // e.preventDefault()
        setDropDown(!dropDown)
        // if (e.target.className === style.subData){
        //      setDropDown(!dropDown)
        // }
        // else{
        //     setDropDown(!dropDown)
        //     }
        // let subMenu= e.target.querySelector(style.subData)

        // if (e.target.className != style.subtitle) {
        //     setDropDown(!dropDown)
        //     style[subtitle].style.background="red"
        // }
        // if (e.target.className === style.subtitle) {
        //     setDropDown(dropDown)
        // }
    }
    // const navBarList = sideBarNavs1.map((nav, index) =>
    //     <li key={index}>
    //         <div>
    //             {nav.icon}
    //             <h6>{nav.title}</h6>
    //         </div>
    //         {/* {nav.subtitle ? 
    //     nav.dropDown
    //     } */}
    //     </li>
    // )
    // const subNavList = sideBarNavs1.subtitle.map((subNav, index) =>
    //     <li key={index}>{subNav.title}</li>
    // )

    return (
        <div className={combinedClasses(style.sidebar, props.className)}>


            <div className={style.headermain}>
                <header><Logo useWhite={true} /></header>
                <main>
                    <div className={style.profileHead}>
                        <div className={style.intro}>
                            <div className={style.picDiv}>
                                <ProfileDP className={style.pic} />
                                <div></div>
                            </div>
                            <div className={style.info}>
                                <h6 >Maria</h6>
                                <p>Super Admin</p>
                            </div>
                        </div>

                        <div className={style.profile}>
                            <PiDotsThreeOutlineVerticalFill onClick={handleDropDown} />
                            {show &&
                                <div className={style.whitebg}>
                                    <div className={style.dropDown}></div>
                                    <div className={style.myProfileDiv}>
                                        <div className={style.myProfile}>
                                            <MdOutlineAccountCircle />
                                            <NavLink to={routes.settings()} className={combinedClasses(style.profilepic)}>My Profile</NavLink>
                                            {/* <p>My Profile</p> */}
                                        </div>
                                        <div className={style.logout}>
                                            <MdOutlineLogout />
                                            <p>Logout</p>
                                        </div>
                                    </div>
                                </div>
                            }

                        </div>
                        {/* <div>
                            <div>
                                
                            </div>
                            <div></div>
                        </div> */}
                    </div>
                    <div className={style.navBarDiv}>
                        <div className={combinedClasses(style.navDiv1, 'navDiv')} >
                            {
                                sideBarNavs1.map((nav, index) =>
                                    <div>
                                        <NavLink to={nav.url} className={combinedClasses(style.navBar, 'bluebglink')}>
                                            <div className={style.navBardiv} >
                                                {nav.icon}
                                                <div className={style.navTitle}>
                                                    <h6 className={style.navTitle}>{nav.title}</h6>

                                                    {
                                                        nav.subtitle && dropDown &&
                                                        <div className={combinedClasses(style.subtitle, 'navDiv')}>
                                                            {nav.subtitle.map((subData) =>
                                                                <NavLink to={subData.url} className={combinedClasses(style.subdata, 'bluebglink')} onClick={() => setDropDown(dropDown)}>{subData.title}</NavLink>
                                                            )}
                                                        </div>


                                                    }
                                                </div>
                                                {/* {
                                                    nav.subtitle && dropDown &&
                                                    <div className={combinedClasses(style.subtitle, 'navDiv')}>
                                                        {nav.subtitle.map((subData) =>
                                                            <NavLink to={subData.url} className={combinedClasses(style.subdata, 'bluebglink')} onClick={() => setDropDown(!dropDown)}>{subData.title}</NavLink>
                                                        )}
                                                    </div>


                                                } */}
                                            </div>
                                            <div onClick={() => navDropDown(index)}>{index == dropDown ? nav.arrowUp : nav.dropDown}</div>

                                        </NavLink>
                                        {/* <NavLink to={nav.url} className={combinedClasses(style.navBar, 'bluebglink')}> */}

                                        {/* </NavLink> */}
                                    </div>
                                )
                            }
                        </div>
                        <div className={style.navDiv2}>
                            {
                                sideBarNavs2.map((nav, index) =>
                                    index === 1 ?
                                        <div key={index} onClick={handleNotification} className={combinedClasses(style.navBar, 'bluebglink')}>
                                            <div className={style.navBardiv}>
                                                {nav.icon}
                                                <div className={style.navTitle}>
                                                    <h6>{nav.title}</h6>
                                                </div>
                                            </div>
                                            {nav.dropDown &&
                                                <div className={style.badge} onClick={handleNotification}>{badge}</div>
                                            }
                                        </div> :

                                        <Link to={nav.url} key={index} className={combinedClasses(style.navBar, 'bluebglink')}>

                                            <div className={style.navBardiv}>
                                                {nav.icon}
                                                <div className={style.navTitle}>
                                                    <h6>{nav.title}</h6>
                                                    {/* {nav.badge} */}
                                                    {/* {nav.subtitle &&
                                                    <div className={style.subtitle}>
                                                        {nav.subtitle &&
                                                            nav.subtitle.map((subData) =>
                                                                <li>{subData.title}</li>
                                                            )}
                                                    </div>
                                                } */}
                                                </div>
                                            </div>
                                            {/* {nav.dropDown} */}

                                            {/* <div onClick={() => navDropDown(index)}>{index == dropDown ? nav.arrowUp : nav.dropDown}</div>
                                        {index===1 && onClick={notificationHandler}} */}
                                        </Link>
                                )
                            }
                            {notification &&
                                <div>

                                    <ul>
                                        {data.map((item, index) =>
                                            <li className={style.message}>{item.message} <span><DateTime /></span></li>
                                        )}
                                    </ul>
                                </div>
                            }
                        </div>
                        <div className={style.navDiv3}>
                            {
                                sideBarNavs3.map((nav, index) =>
                                    <Link to={nav.url} key={index} className={combinedClasses(style.navBar, 'bluebglink')}>
                                        <div className={index === 0 ? combinedClasses(style.navBardiv, style.divSpace) : style.navBardiv}>
                                            {nav.icon}
                                            <div className={style.navTitle}>
                                                <h6>{nav.title}</h6>
                                                {/* {nav.subtitle &&
                                                    <div className={style.subtitle}>
                                                        {nav.subtitle &&
                                                            nav.subtitle.map((subData) =>
                                                                <li>{subData.title}</li>
                                                            )}
                                                    </div>
                                                } */}
                                            </div>
                                        </div>
                                        {nav.dropDown}
                                    </Link>
                                )
                            }
                            {/* )} */}
                        </div>
                    </div>
                </main>
            </div >
            <footer>
                <p>Powered by Jasiri © 2024</p>
                <p>v 1.1.2</p>
            </footer>
        </div >
    )
}