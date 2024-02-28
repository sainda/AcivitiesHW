import points from '../../Assets/options.svg'
import './index.css'
export default function Activity({icon,title,hours,date,bgColor}){
    return(
        <div className="containerActivity" style={{backgroundColor:bgColor}}>
            <img src={icon} alt='icon' className='icon'/>
            <div className="activ">
                <div className='titl'>
                    <h3 className="title">{title}</h3>
                    <img src={points}className='points'/>
                </div>
                <p className="hours">{hours}</p>
                <p className="date">{date}</p>
            </div>
        </div>
        
    )
}