import { handleNewGameEasy, handleNewGameMedium, handleNewGameHard, addValueTileInput, handleRestart, handleSolve, handleLoad } from '../redux/actions';
import { connect } from 'react-redux';
import App from './App'
import Tile from '../components/Tile';

const mapStateToProps = state => {
    return {
        appState: state
    };
};

const mapDispatchToProps = dispatch => ({
    handleNewGameEasy: () => dispatch(handleNewGameEasy()),
    handleNewGameMedium: () => dispatch(handleNewGameMedium()),
    handleNewGameHard: () => dispatch(handleNewGameHard()),
    handleRestart: () => dispatch(handleRestart()),
    handleSolve: () => dispatch(handleSolve()),
    handleLoad: (initialBoard, board, tempBoard) => dispatch(handleLoad(initialBoard, board, tempBoard))
});


const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
