import logo from "../../images/logo.svg"
import "./Top.styles.css"
function Top(score){
    return(
        <div className="Top">
            <img src={logo} alt="logo" className="Logo"/>
            <div className="Score">
            <h1>Score:</h1>
            <h1>{score}</h1>
            </div>
        </div>
    )
}
export default Top;