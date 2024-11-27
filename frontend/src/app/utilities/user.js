import Cookies from "universal-cookie"

export const logout =()=>{
    localStorage.removeItem('user')
}

export const isUserLogin=()=>{
    const user =JSON.parse(localStorage.getItem('user') ?? '{}');
    //make an API with user id
    console.log(user.email && user.token)
    return user.email && user.token
}
// export const isUserLogin=()=>{
//     // const user =JSON.parse(localStorage.getItem('user') ?? '{}');
//     //make an API with user id
//     const cookies= new Cookies();
//     console.log(user.email && user.token)
//     return user.email && user.token
// }