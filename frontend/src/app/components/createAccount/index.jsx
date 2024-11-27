import style from '../login/style.module.css'
import thisStyle from './style.module.css'
import { LogoDiv } from "../login/LoginComp";
import { CreateAccount } from './AccountComp.jsx';
import loginstyle from '../login/style.module.css'
import { LoginImg } from '../login/LoginComp';

export const CreateAccountPG = () => {
    return (
        <section className={loginstyle.section}>

            {/* <LogoDiv/> */}
            <div className={loginstyle.loginDiv}>
                <CreateAccount />
            </div>
            <div className={loginstyle.LoginImg}>
                <LoginImg />
            </div>
        </section>
    )
}