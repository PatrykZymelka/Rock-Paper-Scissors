import rules from "../../images/image-rules.svg"
import "./Rules.syles.css"
function Rules(){
    return(
        <div className="RuleCorner">
            <img src={rules} alt="rules" className="Rules"/>
            <div className="RuleBox">Rules</div>
        </div>
    )
}
export default Rules