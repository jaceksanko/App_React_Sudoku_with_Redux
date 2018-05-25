export const    NEW_GAME = 'NEW_GAME',
                /* HANDLE_NEW_GAME_EASY = 'HANDLE_NEW_GAME_EASY',
                HANDLE_NEW_GAME_MEDIUM = 'HANDLE_NEW_GAME_MEDIUM',
                HANDLE_NEW_GAME_HARD = 'HANDLE_NEW_GAME_HARD', */
                ADD_VALUE_TILE = 'ADD_VALUE_TILE',
                HANDLE_CHECK = 'HANDLE_CHECK',
                HANDLE_RESTART = 'HANDLE_RESTART',
                HANDLE_SOLVE = 'HANDLE_SOLVE',
                HANDLE_SAVE = 'HANDLE_SAVE',
                HANDLE_LOAD = 'HANDLE_LOAD';

export function newGame(newSudoku) {
    return {
        type: NEW_GAME,
        initialBoard: newSudoku,
        board: newSudoku,
        tempBoard: newSudoku,
    };

};
/* export function handleNewGameEasy() {

}
export function handleNewGameMedium() {

} 
export function handleNewGameHard() {

}
export function addValueTile() {

} 
export function handleCheck() {

} 
export function handleRestart() {

} 
export function handleSolve() {

}
export function handleSave() {

}
export function handleLoad() {

}  */