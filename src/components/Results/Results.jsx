import "./Results.styles.css"
function Result(){
    return(
        <div className="Result">
            <div className="User">
                my pick
            </div>
            <div className="Rematch">
                play again?
            </div>
            <div className="Computer">
                your pick
            </div>
        </div>
    )
}
export default Result;