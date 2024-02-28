import './index.css'
export default function Button({content,onClick}){
    return(
        <div>
            <a href='#' onClick={onClick}>{content}</a>
        </div>
    )
}
