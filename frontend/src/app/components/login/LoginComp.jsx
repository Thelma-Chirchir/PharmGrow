import React from 'react'
import { CustomInput } from '../input'
import style from './style.module.css'
import { MyButton } from '../button'
import { useState, useEffect } from 'react'
import toast from 'react-hot-toast';
import { isUserLogin } from '../../../app/utilities/user'
import { Logo } from '../logo'
import { ReactComponent as Img } from '../../assests/images/right-column.svg'
import { FcGoogle } from "react-icons/fc";
import { routes } from '../../../app/utilities/routes'
import { Link } from 'react-router-dom'
import { combinedClasses } from '../../utilities/format'
import axios from 'axios'
import Cookies from 'universal-cookie';
import { useSignIn } from 'react-auth-kit';
// import router from '../../../../backend/routes/authRoutes'



export const LoginDiv = () => {
    const [search, setSearch] = useState("")
    // const [rememberMe, setRemeberMe] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState(false)
    const [user, setUser] = React.useState([])
    const [cookies, setCookies] = React.useState(new Cookies)
    const [input, setInput] = React.useState({
        username: '',
        password: '',
        checkbox: false
    })
    // const signIn= useSignIn()
    // const handleRememberCheckbox = (event) => {
    //     setRemeberMe(event.target.checked)
    // }
    const handleInput = (e) => {
        // e.persist()
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const handleLogin = (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        window.location.href = routes.dashboard()
        const user = {
            username: input.username,
            password: input.password
        }
        // username: 'kminchelle',
        // password: '0lelplR',
        // axios.post('/login', user)
        //     .then(result => {
        //         setUser(result.data)
        //         console.log(user)
        //     })
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
            //note that payload is defined already, the object details can be used directly here
        })

            .then(response => {
                if (response.status !== 200) {
                    throw response.json()
                }
                return response.json()
            })


            .then((response) => {
                console.log('Success', response)
                localStorage.setItem('user', JSON.stringify(response))
                window.location.href = routes.dashboard()
            })
            .catch((error) => {
                console.log("Failed")
                // toast('Error login in')
                setError('Error login in')
            })
            .finally(() => {
                setIsSubmitting(false)
            })
            .then(console.log);
    }
    // signIn({
    //     token: result.data.token,
    //     expiresIn: 3600,
    //     tokenType: "Bearer",
    //     authState: {username: input.username}
    // })
    // toast('Account Successfully created')
    // setSuccess('Account Successfully created')
    //         })
    useEffect(() => {
        const user = isUserLogin()
        if (user) {
            window.location.href = routes.dashboard()
        }
    }, [])

    return (
        <section className={style.login}>
            <LogoDiv className={style.logo} />
            <main className={style.main}>

                <div className={style.loginIntro}>
                    <h3>Sign in</h3>
                    <p>Please login to continue to your account</p>
                </div>
                {error && <div className={style.error}>{error}</div>}
                <form action="" className={style.myForm}>
                    <div className={style.inputs}>
                        <CustomInput onChange={handleInput} name='username' type="email" placeholder="Username" label={"Username"} />
                        <CustomInput onChange={handleInput} name='password' type="password" placeholder="Password" label={"Password"} className={style.passwordDiv} />
                    </div>
                    <div className={style.rememberMe}>
                        <input type="checkbox" name='remember' onChange={handleInput} id='rememberMe' />
                        <label htmlFor="rememberMe">&nbsp; Keep me logged in</label>
                    </div>
                    {/* <MyButton  type='primary' title='LOGIN'/> */}
                    <MyButton type='primary' className={style.loginBtn2} onClick={handleLogin} disabled={isSubmitting}>Sign In</MyButton>

                    <div className={style.divider}><span>or</span></div>
                    <MyButton type='outline' className={style.loginBtn}
                        // onClick={handleLogin}
                        disabled={isSubmitting}>Sign in with Google <span><FcGoogle /></span></MyButton>
                    <p>Need an account? &nbsp;
                        <Link to="/signUP">  Create one</Link></p>

                </form>

            </main>
        </section>
    )
}
export const LogoDiv = () => {
    return (
        <div>
            <Logo />
            <div className={style.footer}></div>
        </div>
    )
}

export const LoginImg = () => {
    return (
        <div className={style.columnImg}>
            <Img />
        </div>
    )
}

