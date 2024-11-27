import { Logo } from '../logo'
import style from './style.module.css'
import { features, navBar, navList } from './data'
import { Link } from 'react-router-dom'
import { routes } from '../../utilities/routes'
import { MyButton } from '../button'
import { combinedClasses } from '../../utilities/format'
import { HiOutlineGlobeAlt } from 'react-icons/hi'
import React from 'react'
import { ReactComponent as MenuIcon } from '../../assests/icon/menu.svg'
import { ReactComponent as Dashboard } from '../../assests/icon/dashboard.svg'
import { FaInstagram, FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa6";
import phone1 from '../../assests/images/phone1.JPG';
import phone2 from '../../assests/images/phone2.JPG';
import phone3 from '../../assests/images/phone3.JPG';
import { HashLink } from 'react-router-hash-link';
import { useMediaQuery } from '@chakra-ui/react'


export const LandingHeader = () => {
    const mobileSideBar = useMediaQuery('(max-width: 560px)')
    const [showMenu, setMenu] = React.useState(false);
    const toggleMenu = () => {
        if (showMenu === false) {
            setMenu(true)
        } else {
            setMenu(false)
        }
    }
    return (
        <header className={style.header}>
            <Logo className={style.logo}/>
            <div className={style.navlistBar}>
                <MenuIcon className={style.menuicon} onClick={toggleMenu} fill='black'/>

                <div className={style.menu}>
                    <HeaderNavigation className={showMenu ? style.mobile : style.hidden} />
                </div>
                {/* <NavBar /> */}
                {mobileSideBar.includes(false) &&
                    <div>
                        <Link to='/login' className={combinedClasses(style.loginlink, 'link')}>
                            <MyButton type='primary' title='Log in' className={style.button} />
                        </Link>
                    </div>}
            </div>

        </header>
    )
}

export const HeaderNavigation = (props) => {
    return (
        <ul className={combinedClasses(style.navlist, props.className)}>
            {navBar.map((nav) =>
                <li><HashLink to={nav.url} className={style.navlink}>{nav.title}<span>{nav.arrow}</span></HashLink></li>
                // <li href={nav.url}>{nav.title}<span>{nav.arrow}</span></li>
            )}
        </ul>
    )
}
export const Hero = () => {
    return (
        <section className={style.hero}>
            <div className={style.headline}>
                <h1>A realtime sales tracking system specifically for <span className={style.blueh1}>Pharmacies.</span></h1>


                <p>Easily automate inventory, sales, revenues and compliance with a seamless experience.</p>
            </div>

            <div className={style.headlinebtn}>
                {/* <MyButton type='primary' title='Learn More' className={combinedClasses(style.button, style.button2)} /> */}
                <div>
                    <MyButton type='primary' className={combinedClasses(style.button, style.button2)}>
                        <Link to='/signUP' className={combinedClasses(style.button2, 'link')}>Create Account</Link>
                    </MyButton>
                    <Link to='/login' className={combinedClasses(style.loginlink, 'link')}>
                        <MyButton type='primary' title='Log in' className={style.button} />
                    </Link>
                </div>
                {/* <p>Own an account of the suitable tracking sales app you need for free now&nbsp; */}
                    {/* <span> 100+ countries &nbsp; <HiOutlineGlobeAlt /></span> */}
                {/* </p> */}
            </div>
        </section>
    )
}
export const DashboardView = () => {
    return (
        <section className={style.dashboardView}>
            <Dashboard />
        </section>
    )
}
export const Features = () => {
    return (
        <>
            {features.map((section) =>
                <section className={style.features} id='features'>
                    <h3>{section.title} <span>{section.span}</span></h3>
                    <p>{section.subTitle}</p>
                    <img src={section.pic} alt="" />
                    {section.doublePic &&
                        <div>
                            <img src={phone1} alt="" />
                            <img src={phone2} alt="" />
                            <img src={phone3} alt="" />
                        </div>}
                </section>

            )}
        </>
    )
}
export const Guide = () => {
    return (
        <section className={combinedClasses(style.features, style.guide)} id='guide'>
            <h3>How it works and <span>guide</span></h3>
            <p>A short description and overview of how to get started</p>
            <ol>
                <li>Create an account with us.</li>
                <li>Continue to login</li>
                <li> Set up your workspace by navigating through our easy to understand dashboards</li>
                <li>Add users and grant permissions for your users to add inventory, suppliers info etc</li>
                <li> Login at intervals to check your dashboard for updates and reports of your business</li>


            </ol>
        </section >
    )
}
export const Offer = () => {
    return (
        <section className={style.offer}>
            <h1 className={style.blueh1}>Get Started</h1>
            <p>Streamline your global business and grow your team effortlessly.</p>
            <MyButton type='primary' className={combinedClasses(style.button, style.button2)}>
                <Link to='/signUP' className={combinedClasses(style.button2, 'link')}>Create Account</Link>
            </MyButton>
        </section>
    )
}

export const LandingFooter = () => {
    return (
        <footer className={style.footer}>
            <h3>Powered by <span>JASIRI WOMEN TECHSTERS ©2024. </span>All Rights Reserved.</h3>
        </footer>
    )
}

export const Navigation = (props) => {
    return (
        <div className={style.nav}>
            <p className={style.navTitle}>{props.navTitle} </p>
            <ul className={style.navList}>
                {props.navs.map((nav) =>
                    <li className={style.footerSubList}>{nav}</li>
                )}
            </ul>
        </div>
    )
}

export const SocialLinks = () => {
    return (
        <div className={style.socials}>
            <div><FaInstagram className={style.logo} /></div>
            <div><FaFacebookF className={style.logo} /></div>
            <div><FaLinkedin className={style.logo} /></div>
            <div><FaTwitter className={style.logo} /></div>

        </div>
    )
}

export const Footerfooter = () => {
    return (
        <div className={style.footer2}>
            <ul className={style.footerlist}>
                <li>©2022. All Rights Reserved.r</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
            </ul>
            <SocialLinks />
        </div>

    )
}