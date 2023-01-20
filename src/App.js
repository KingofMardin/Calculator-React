import { useState } from 'react';
import Sun from './assets/sun-icon.svg';
import Moon from './assets/moon-icon.svg';
import HistoryIcon from './assets/history-icon.svg';
import HistoryModal from './components/HistoryModal';
import * as math from 'mathjs';


function App() {
  const [mode, setMode] = useState();
  const [showHistory, setShowHistory] = useState(false);
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [history, setHistory] = useState([]);



  const changeMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  }

  const toggleHistory = () => {
    setShowHistory(!showHistory);
  }

  const handleNumber = (val) => {
    setText((text) => [...text, val])
  }

  const calculate = () => {
    const input = text.join("");
    setResult(math.evaluate(input));
    const res = math.evaluate(input);
    setHistory([...history, input + "=" + res]);

  }

  const clear = () => {
    setText("");
    setResult("");
  }

  const plusMinus = () => {
    if (result > 0) {
      setResult(-result);
    } else {
      setResult(Math.abs);
    }
  }
  const percent = () => {
    setResult(result / 100);
  }


  return (
    <div className={`App ${mode === "dark" ? mode : ""}`}>


      {showHistory && <HistoryModal show={setShowHistory} history={history} />}


      <div className="toggle" onClick={changeMode}>
        <img src={Sun} alt="sun" className='sunColor' />
        <img src={Moon} alt="moon" className='moonColor' />
        <div className="mode"></div>
      </div>

      <div className="line"></div>

      <div className="history" onClick={toggleHistory}>
        <img src={HistoryIcon} alt="history" className='historyColor' />
      </div>
      <div className="screen">
        <div className="process">
          <span>{text}</span>
        </div>
        <div className="result">
          <span>=</span>
          <span>{result}</span>
        </div>
      </div>


      <div className="calculadora">
        <div className="square"> </div>

        <div className="up">
          <button className='btn' onClick={clear}>AC</button>
          <button className='btn' onClick={plusMinus}>+/-</button>
          <button className='btn' onClick={percent}>%</button>
        </div>
        <div className="right">
          <button className='btn' onClick={() => handleNumber("/")} >÷</button>
          <button className='btn' onClick={() => handleNumber("*")} >x</button>
          <button className='btn' onClick={() => handleNumber("-")} >-</button>
          <button className='btn' onClick={() => handleNumber("+")} >+</button>
          <button className='num' onClick={calculate}>=</button>

        </div>
        <div className="middle">
          <div className="numbers">
            <button className='num' onClick={() => handleNumber(1)}>1</button>
            <button className='num' onClick={() => handleNumber(4)}>4</button>
            <button className='num' onClick={() => handleNumber(7)}>7</button>
            <button className='num' onClick={() => handleNumber(".")}>.</button>
          </div>
          <div className="numbers">
            <button className='num' onClick={() => handleNumber(2)}>2</button>
            <button className='num' onClick={() => handleNumber(5)}>5</button>
            <button className='num' onClick={() => handleNumber(8)}>8</button>
            <button className='num' onClick={() => handleNumber(0)}>0</button>
          </div>
          <div className="numbers">
            <button className='num' onClick={() => handleNumber(3)}>3</button>
            <button className='num' onClick={() => handleNumber(6)}>6</button>
            <button className='num' onClick={() => handleNumber(9)}>9</button>
            <button className='num' onClick={() => handleNumber("00")}>00</button>
          </div>
        </div>


      </div>
    </div>
  );
}

export default App;
