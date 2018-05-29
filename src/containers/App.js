import React from 'react';
import sudoku from 'sudoku-umd';
import Board from '../components/Board';
import swal from 'sweetalert';
import Popup from "reactjs-popup";
//import { handleNewGameEasy, handleNewGameMedium, handleNewGameHard } from '../redux/actions';

class App extends React.Component {
    constructor(props) {
        super(props);
        /* this.state = {
            initialBoard: '',
            board: '',
            tempBoard: '',
            resetTile: false
        }; */
        
        this.handleCheck = this.handleCheck.bind(this);
        this.handleSolve = this.handleSolve.bind(this);
        /*
        this.handleSave = this.handleSave.bind(this);
        this.handleLoad = this.handleLoad.bind(this); */
    }
/* 
    handleSave() {
        localStorage.setItem('initialBoard', this.state.initialBoard);
        localStorage.setItem('board', this.state.board);
        localStorage.setItem('tempBoard', this.state.tempBoard);
        localStorage.setItem('resetTile', this.state.resetTile);
        swal("Stan gry został zapisany","", "success");
    }

    handleLoad() {
        let saveInitialBoard = localStorage.getItem('initialBoard');
        let saveBoard = localStorage.getItem('board');
        let saveTempBoard = localStorage.getItem('tempBoard');
        let saveresetTile = localStorage.getItem('resetTile')
        this.setState({
            initialBoard: saveInitialBoard,
            board: saveBoard,
            tempBoard: saveTempBoard,
            resetTile: saveresetTile
        })
        swal("Zapisany stan gry został wczytany","", "success");     
    } */
    
    solveCheck(solveFalse, solveCheck) {
        let getTempBoard = this.state.tempBoard;
        let board = this.state.initialBoard;
        let solve = sudoku.solve(getTempBoard);
        if (solve === false || getTempBoard === board) {
            swal(solveFalse.head, solveFalse.text, solveFalse.type);
            this.handleRestart()
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
        let solveCheck = this.setState({
                board: this.state.tempBoard
            })
        this.solveCheck(solveFalse, solveCheck);
        
    }

    handleCheck() {
        let solveFalse = {
            head: "Gdzieś masz błąd.", 
            text: "Próbuj dalej.",
            type: "warning"};
        
        this.solveCheck(solveFalse);
        
    }
    
    
    
    render() {
        console.log(this.props.appState);
        return (
            <div className="App">
                <h1>Sudoku</h1>
                <div className="board">
                    <Board newGame={this.props.appState.initialBoard.split("")} actualBoard={this.props.appState.board.split("")}  resetTile={this.props.appState.resetTile} />
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
                </div>
            </div>
        )
    }
}

export default App;