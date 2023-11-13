import logo from "./images/logo.svg";
import triangle from "./images/bg-triangle.svg";
import rock from "./images/icon-rock.svg"
import paper from "./images/icon-paper.svg"
import scissors from "./images/icon-scissors.svg"
import './App.css';

function App() {
  

  return (
    <div className="Page">
      <div className="Top">
        <img src={logo} alt="logo" className="Logo"/>
        <div className="Score">Score</div>
      </div>
      <div className="Game">
        <img src={triangle} alt="triangle" className="Triangle"/>
        <div className="Rock">
          <img src={rock} alt="rock"/>
        </div>
        <div className="Paper">
          <img src={paper} alt="paper" />
        </div>
        <div className="Scissors">
          <img src={scissors} alt="scissors" />
        </div>
        
      </div>
    </div>
  )
}

export default App
