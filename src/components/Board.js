import React from 'react';
import Tile from './Tile';
import TileInputContainer from '../containers/TileInputContainer';


class Board extends React.Component { 
    
    render() {
        let addValueTile = this.props.addValueTile
        let actBoard = this.props.actualBoard;
        let resetTile = this.props.resetTile;
        let tempBoard = this.props.tempBoard //przekazna z App zajmuje się wyświetleniem zapisanego stanu gry w polach do edycji oraz kosowaniem lokalnego stanu po newgame i restart
        let board = actBoard.map(function(el, id){
            
            if (isNaN(el)) {
                return (
                    <TileInputContainer key={id} style={'open'}  idBoard={id}  dis={false} /> 
                )  
            }
            else {
                return (
                    <Tile key={id}  style={'close'} idBoard={id} inputValue={el} dis={true} addValueTile={addValueTile}/>  
                )
            }
        })
        return (
            
            board
        )

    }
}

export default Board