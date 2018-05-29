import sudoku from 'sudoku-umd';

export const    HANDLE_NEW_GAME_EASY = 'HANDLE_NEW_GAME_EASY',
                HANDLE_NEW_GAME_MEDIUM = 'HANDLE_NEW_GAME_MEDIUM',
                HANDLE_NEW_GAME_HARD = 'HANDLE_NEW_GAME_HARD',
                ADD_VALUE_TILE = 'ADD_VALUE_TILE',
                HANDLE_CHECK = 'HANDLE_CHECK',
                HANDLE_RESTART = 'HANDLE_RESTART',
                HANDLE_SOLVE = 'HANDLE_SOLVE',
                HANDLE_SAVE = 'HANDLE_SAVE',
                HANDLE_LOAD = 'HANDLE_LOAD';


export function handleNewGameEasy() {
    const easy = sudoku.generate("easy");
    return {
        type: HANDLE_NEW_GAME_EASY,
        initialBoard: easy,
        board: easy,
        tempBoard: easy,
    };
}
export function handleNewGameMedium() {
    const medium = sudoku.generate("medium");
    return {
        type: HANDLE_NEW_GAME_MEDIUM,
        initialBoard: medium,
        board: medium,
        tempBoard: medium,
    };
} 
export function handleNewGameHard() {
    const hard = sudoku.generate("hard")
    return {
        type: HANDLE_NEW_GAME_MEDIUM,
        initialBoard: hard,
        board: hard,
        tempBoard: hard,
    };
}
export function addValueTileInput(value, id) {
    return {
        type: ADD_VALUE_TILE,
        value: value,
        id: id
    };
} 
export function handleCheck() {

} 
export function handleRestart() {
    return {
        type: HANDLE_RESTART
    };

} 
export function handleSolve() {

}
export function handleSave() {

}
export function handleLoad() {

}