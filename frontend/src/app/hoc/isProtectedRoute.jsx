import { useState, useEffect } from "react"
import { routes } from "../utilities/routes"
import axios from "axios"
import { isUserLogin } from "../utilities/user";

// export const IsProtectedRoute=({children})=>{
//     const user=JSON.parse(localStorage.getItem('user') ?? '{}')
//     //make an api with user id
//         // return user.email && user.token
//         if (user.username && user.token){
//             return children;
//         }
//         window.location.href='/login'
//         return null
//     }
//     

    export const IsProtectedRoute=({children})=>{
        // const user=JSON.parse(localStorage.getItem('user') ?? '{}')
        const user= isUserLogin()
        //make an api with user id
            // return user.email && user.token
            // if (user.username && user.token){
            //     return children;
            // }
            // window.location.href='/login'
            // return null
            if (user){
                return children;
            }
            window.location.href='/login'
            return null
        }
/*export const IsProtectedRoute = () => {
    const [userLoggedIn, setUserLoggedIn] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3002/user')
            .then(result => {
                setUserLoggedIn(result)
                console.log(userLoggedIn)
            })
            // .then(response=>{
            //     const user=JSON.parse(localStorage.getItem('user') ?? '{}')
            //     if (user){
            //         return routes.dashboard();
            //     }
            //     window.location.href = '/login'
            //     return null
            //     console.log(response.user)
            // })
            // .then(userData{
            //     if (userLoggedIn) {
            //         return routes.dashboard();
            //     }
            //     window.location.href = '/login'
            //     return null
            // })
            .catch(error => console.log(error))
    }, [])
    //make an api with user id
    // return user.email && user.token
    
}*/