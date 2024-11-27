import './style.module.css';
import { SideBar } from '../dashboard/sidebar';
import { LayoutHeader } from '../header';
import style from './style.module.css'
import { IoMenu } from "react-icons/io5";
import { MdCancel } from 'react-icons/md';
import React from 'react';
import { useMediaQuery } from '@chakra-ui/react'
import { PiTruckDuotone } from 'react-icons/pi';
import { combinedClasses } from '../../utilities/format';

export const Layout = (props) => {
    const [sideBarShow, setSideBarShow] = React.useState(false)
    const [toggleMain, setToggleMain] = React.useState(true)

    // showChats.addEventListener("click", showHide)
    //     setShow(!show)
    // }
    const mobileSideBar = useMediaQuery('(max-width: 560px)')
    mobileSideBar.includes(true) ? console.log('hello') : console.log ('hi')
    // mobileSideBar && setSideBarShow(!sideBarShow);
    const showHide = (e) => {
        setSideBarShow(sideBarShow===false)
        sideBarShow==false && console.log('hi love')
        console.log(sideBarShow)
        console.log(mobileSideBar)
        // mobileSideBar && setToggleMain(!toggleMain)
    }
    return (
        <>
        {mobileSideBar.includes(true) ? <section className={style.viewMerge}>
                {!sideBarShow ? <IoMenu className={style.menuIcon} onClick={showHide} /> : 
                <MdCancel className={combinedClasses (style.menuIcon, style.cancel)} onClick={showHide}/>}
                {sideBarShow && <SideBar/>}
                {!sideBarShow && props.children}
            </section>  :
            <section className={style.layout}>
                <SideBar/>
                <div className={style.viewMerge}>
                    {props.children}
                </div>
            </section>}
</>
    )
    // <div className={style.menu}>
    //             { sideBarShow &&
    //             <SideBar className={sideBarShow ? style.mobile : ''}/>}
    //         </div>
}