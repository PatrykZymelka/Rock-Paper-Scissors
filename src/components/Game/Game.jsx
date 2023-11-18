import triangle from "../../images/bg-triangle.svg";
import rock from "../../images/icon-rock.svg";
import paper from "../../images/icon-paper.svg";
import scissors from "../../images/icon-scissors.svg";
import "./Game.styles.css"
import { Link } from "react-router-dom";



function Game(setChoice){
    
    const set=(e)=>{
        setChoice(e.target.dataset.id)
    }

    return(
    <div className="Game">
        
        <img src={triangle} alt="triangle" className="Triangle" />

            <div className="Rock" id="rock" onClick={set}>
                <img src={rock} alt="rock" />
            </div>

            <div className="Paper" id="paper" onClick={set}>
                <img src={paper} alt="paper" />
            </div>

            <div className="Scissors" id="scissors" onClick={set}>
                <img src={scissors} alt="scissors" />
            </div>

    </div>
    )
}
export default Game;