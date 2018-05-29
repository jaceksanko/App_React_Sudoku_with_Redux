import { HANDLE_NEW_GAME_EASY, HANDLE_NEW_GAME_MEDIUM, HANDLE_NEW_GAME_HARD, ADD_VALUE_TILE_INPUT, HANDLE_RESTART, HANDLE_SOLVE, HANDLE_LOAD } from './actions';

const initialState = {
    initialBoard: '',
    board: '',
    tempBoard: ''  
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case HANDLE_NEW_GAME_EASY:
            return {
                initialBoard: action.initialBoard,
                board: action.board,
                tempBoard: action.tempBoard,
                
            };
        case HANDLE_NEW_GAME_MEDIUM:
            return {
                initialBoard: action.initialBoard,
                board: action.board,
                tempBoard: action.tempBoard,
                
            };
        case HANDLE_NEW_GAME_HARD:
            return {
                initialBoard: action.initialBoard,
                board: action.board,
                tempBoard: action.tempBoard,
                
            };
        case ADD_VALUE_TILE_INPUT:
            let boardArray = state.tempBoard.split("");
            boardArray[action.id] = action.value;
            let boardString = boardArray.join('');
            return {
                ...state,
                tempBoard: boardString,
                
            };
        case HANDLE_RESTART:
            return {
                ...state,
                board: state.initialBoard,
                tempBoard: state.initialBoard,
                
            }
        case HANDLE_SOLVE:
            return {
                ...state,
                board: state.tempBoard
            }
        case HANDLE_LOAD:
            return {
                initialBoard: action.initialBoard,
                board: action.board,
                tempBoard: action.tempBoard,
            }
        default: 
            return state;
    }
};

export default reducer;