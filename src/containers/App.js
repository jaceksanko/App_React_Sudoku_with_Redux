import React from 'react';
import sudoku from 'sudoku-umd';
import BoardContainer from './BoardContainer';
import swal from 'sweetalert';
import Popup from "reactjs-popup";

class App extends React.Component {
    constructor(props) {
        super(props);
               
        this.handleCheck = this.handleCheck.bind(this);
        this.handleSolve = this.handleSolve.bind(this);
        
        this.handleSave = this.handleSave.bind(this);
        this.handleLoad = this.handleLoad.bind(this);
    }
 
    handleSave() {
        localStorage.setItem('initialBoard', this.props.appState.initialBoard);
        localStorage.setItem('board', this.props.appState.board);
        localStorage.setItem('tempBoard', this.props.appState.tempBoard);
        swal("Stan gry został zapisany","", "success");
    }

    handleLoad() {
        let saveInitialBoard = localStorage.getItem('initialBoard');
        let saveBoard = localStorage.getItem('board');
        let saveTempBoard = localStorage.getItem('tempBoard');
        
        this.props.handleLoad(saveInitialBoard, saveBoard, saveTempBoard)
        swal("Zapisany stan gry został wczytany","", "success");     
    } 
    
    solveCheck(solveFalse, solveCheck) {
        let getTempBoard = this.props.appState.tempBoard;
        let board = this.props.appState.initialBoard;
        let solve = sudoku.solve(getTempBoard);
        if (solve === false || getTempBoard === board) {
            swal(solveFalse.head, solveFalse.text, solveFalse.type);
        }
        else {
            solveCheck
            swal("Gratuluję!", "Sudoku jest poprawnie rozwiązane", "success");
            
        }
    }

    handleSolve() {
        let solveFalse = {
            head: "Przykro mi.", 
            text: "Sudoku nie da się rozwiązać. Gdzieś jest błąd. Spróbuj nową grę.",
            type: "error"};
        let solveCheck = this.props.handleSolve() //to jest funkcja z actions przypisująca board  rozwiazanie tempBoard
        this.solveCheck(solveFalse, solveCheck);
        this.props.handleRestart()
    }

    handleCheck() {
        let solveFalse = {
            head: "Gdzieś masz błąd.", 
            text: "Próbuj dalej.",
            type: "warning"};
        
        this.solveCheck(solveFalse);
        
    }
    

    render() {
        
        return (
            <div className="App">
                <h1>Sudoku</h1>
                <div className="board">
                    <BoardContainer />
                </div>
               
                <div className="buttons">
                    <Popup trigger={<button className="button"> New Game </button>} modal>
                        {close => (
                        <div className="modal">
                            <a className="close" onClick={close}>
                            &times;
                            </a>
                            <div className="header"> Game level </div>
                            <div className="content">
                            {" "}
                            Chose game level of sudoku <br/>
                            Number of given squares: <br/>
                            <ul>
                                <li>easy:         62</li>
                                <li>medium:       53</li>
                                <li>hard:         44</li>
                            </ul>
   
                            </div>
                            <div className="actions">
                                <button onClick={() => {
                                    this.props.handleNewGameEasy()
                                    close()
                                    }}>Easy</button>
                                <button onClick={() => {
                                    this.props.handleNewGameMedium()
                                    close()
                                    }}>Medium</button>
                                <button onClick={() => {
                                    this.props.handleNewGameHard()
                                    close()
                                    }}>Hard</button>
                                <button
                                    className="button"
                                    onClick={() => {
                                    console.log('modal closed ')
                                    close()
                                    }}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                        )}
                    </Popup>
                    <button onClick={this.handleCheck}>Check</button>
                    <button onClick={this.handleSolve}>Solve</button>
                    <button onClick={this.props.handleRestart}>Restart</button>
                    <button onClick={this.handleSave}>Save Game</button>
                    <button onClick={this.handleLoad}>Load Save</button>
                </div>
            </div>
        )
    }
}

export default App;