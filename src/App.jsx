import logo from "./images/logo.svg";
import triangle from "./images/bg-triangle.svg";
import rock from "./images/icon-rock.svg";
import paper from "./images/icon-paper.svg";
import scissors from "./images/icon-scissors.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [chosen, setChosen] = useState();
  const [phase, setPhase] = useState();

  useEffect(() => {
    function status(phase) {
      document.getElementById("two").style.display = "inline";
      return () => {
        document.getElementById("one").style.display = "none";
      };
    }
  }, [chosen]);

  return (
    <div className="Page">
      <div className="Top">
        <img src={logo} alt="logo" className="Logo" />
        <div className="Score">Score</div>
      </div>
      <div className="Game">
        <div className="One" id="one">
          <img src={triangle} alt="triangle" className="Triangle" />
          <div className="Rock" onClick={() => setChosen("Rock")}>
            <img src={rock} alt="rock" />
          </div>
          <div className="Paper" onClick={() => setChosen("Paper")}>
            <img src={paper} alt="paper" />
          </div>
          <div className="Scissors" onClick={() => setChosen("Scissors")}>
            <img src={scissors} alt="scissors" />
          </div>
          <div>You have chosen: {chosen}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
