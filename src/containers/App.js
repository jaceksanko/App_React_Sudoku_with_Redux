import React from 'react';
import sudoku from 'sudoku-umd';
import Board from '../components/Board';
import swal from 'sweetalert';
import Popup from "reactjs-popup";
import { newGame } from '../redux/actions';
import { connect } from 'react-redux';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            initialBoard: '',
            board: '',
            tempBoard: '',
            resetTile: false
        };
        this.handleNewGameEasy = this.handleNewGameEasy.bind(this);
        /* this.handleNewGameMedium = this.handleNewGameMedium.bind(this);
        this.handleNewGameHard = this.handleNewGameHard.bind(this);
        this.addValueTile = this.addValueTile.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.handleRestart = this.handleRestart.bind(this);
        this.handleSolve = this.handleSolve.bind(this);
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

    newGame1(gameLevel) {
        //this.handleRestart();
        let newSudoku = sudoku.generate(gameLevel);
        this.props.newGame(newSudoku);
    }


    handleNewGameEasy() {        
        this.newGame1("easy");
    };

    /* handleNewGameMedium() {
        this.newGame("medium");  
    };

    handleNewGameHard() {
        this.newGame("hard");
    };
    
    addValueTile(valueTile) {
            let boardArray = this.state.tempBoard.split("");
            boardArray[valueTile.id] = valueTile.value;
            let boardString = boardArray.join('');
            this.setState({
                tempBoard: boardString,
                resetTile: false
            })
        }

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
    
    handleRestart() {
        this.setState({
            board: this.state.initialBoard,
            tempBoard: this.state.initialBoard,
            resetTile: true
        })
    } */
    
    render() {   
        return (
            <div className="App">
                <h1>Sudoku</h1>
                <div className="board">
                    <Board newGame={this.props.appState.initialBoard.split("")} actualBoard={this.props.appState.board.split("")}  resetTile={this.props.appState.resetTile} tempBoard={this.props.appState.tempBoard.split("")} />
                </div>
               
                <div className="buttons">
                    <button onClick={this.handleNewGameEasy}>New game</button>
                </div>
            </div>
        )
    }
}



const mapStateToProps = state => {
    return {
        appState: state
    };
};

const mapDispatchToProps = dispatch => ({
    newGame: () => dispatch(newGame())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
/* export default App; */