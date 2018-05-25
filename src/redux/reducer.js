import { NEW_GAME } from './actions';

const initialState = {
    initialBoard: '',
    board: '',
    tempBoard: '',
    resetTile: false
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case NEW_GAME:
            return {
                initialBoard: action.initialBoard,
                board: action.board,
                tempBoard: action.tempBoard,
                resetTile: true
            }
        default: 
            return state;
    };
};

export default reducer;