import React from 'react';
import Tile from './Tile';
import TileInputContainer from '../containers/TileInputContainer';


class Board extends React.Component {

    render() {
        let tempBoard = this.props.appState.tempBoard.split("");
        let actBoard = this.props.appState.board.split("");
        let board = actBoard.map(function(el, id){            
            if (isNaN(el)) {
                return (
                    <TileInputContainer key={id} style={'open'}  idBoard={id} inputValue={tempBoard[id]} dis={false} /> 
                )  
            }
            else {
                return (
                    <Tile key={id}  style={'close'} idBoard={id} inputValue={el} dis={true} />  
                )
            }
        })
        return (         
            board
        )
    }
}

export default Board