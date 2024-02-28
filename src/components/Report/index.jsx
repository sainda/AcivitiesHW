import personImg from '../../Assets/person.jpg'
import './index.css'



export default function Report(){
    
    return(
        
            <div className='personContainer'>
            <img src={personImg} alt="person"/>
            <h3 className='reportFor'>Report for</h3>
            <h1 className='name'>Jeremy Robson</h1>
            </div >
            

            
    )
}