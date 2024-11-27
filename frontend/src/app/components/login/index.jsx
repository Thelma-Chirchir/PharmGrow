import {LoginImg, LoginDiv, LogoDiv} from './LoginComp.jsx';
import style from './style.module.css'

export const Login =()=>{
    return(
    <section className={style.section}>
        
        {/* <LogoDiv/> */}
        <div className={style.loginDiv}>
            <LoginDiv/>
        </div>
        <div className={style.LoginImg}>
            <LoginImg/>
        </div>
    </section>
    )}