import style from './style.module.css'
import whitelogo from '../../assests/images/logowhite.png'
import darklogo from '../../assests/images/logodark.png'

export const Logo=(props)=>{
    let myImage=props.useWhite ? whitelogo:darklogo
    return(
        <a href="#dashboard" className={style.logo}>
            <img src={myImage} />
       </a>
    )
}
