import { HANDLE_NEW_GAME_EASY, HANDLE_NEW_GAME_MEDIUM, HANDLE_NEW_GAME_HARD, ADD_VALUE_TILE, HANDLE_RESTART } from './actions';

const initialState = {
    initialBoard: '',
    board: '',
    tempBoard: '',
    resetTile: false
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case HANDLE_NEW_GAME_EASY:
            return {
                initialBoard: action.initialBoard,
                board: action.board,
                tempBoard: action.tempBoard,
                resetTile: true
            };
        case HANDLE_NEW_GAME_MEDIUM:
            return {
                initialBoard: action.initialBoard,
                board: action.board,
                tempBoard: action.tempBoard,
                resetTile: true
            };
        case HANDLE_NEW_GAME_HARD:
            return {
                initialBoard: action.initialBoard,
                board: action.board,
                tempBoard: action.tempBoard,
                resetTile: true
            };
        case ADD_VALUE_TILE:
            console.log(state.tempBoard)
            let boardArray = state.tempBoard.split("");
            boardArray[action.id] = action.value;
            let boardString = boardArray.join('');
            console.log(boardString)
            return {
                ...state,
                tempBoard: boardString,
                resetTile: false
            };
        case HANDLE_RESTART:
            return {
                ...state,
                board: state.initialBoard,
                tempBoard: state.initialBoard,
                resetTile: true
            }
        default: 
            return state;
    }
};

export default reducer;